import React, { useState, useEffect, useMemo } from "react";
import "./Dashboard.css";
import { collection, getDocs } from "firebase/firestore/lite";
import { doc, updateDoc } from "firebase/firestore/lite";
import { db } from "../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { LuRefreshCw } from "react-icons/lu";
import { GrPrevious, GrNext } from "react-icons/gr";
import * as XLSX from "xlsx";
import { TfiExport } from "react-icons/tfi";

const ITEMS_PER_PAGE = 10;

const Dashboard = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [applications, setApplications] = useState([]);
  const [contactApplicants, setContactApplications] = useState([]);
  const [showApplications, setShowApplications] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [allContacted, setAllContacted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedJobRole, setSelectedJobRole] = useState("All");
  const [selectFilter, setSelectFilter] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const fetchApplicantsData = async () => {
    try {
      setIsLoading(true);
      const applicantsCollection = collection(db, "fasteners-Contact");
      const querySnapshot = await getDocs(applicantsCollection);

      const applicantsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      applicantsData.sort((a, b) => {
        return b.appliedOn.toMillis() - a.appliedOn.toMillis();
      });

      setApplications(applicantsData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching applicants: ", error);
      setIsLoading(false);
    }
  };

  const fetchContactApplicantsData = async () => {
    try {
      setIsLoading(true);
      const contactApplicantsCollection = collection(
        db,
        "fasteners-newsletter"
      );
      const querySnapshot = await getDocs(contactApplicantsCollection);

      const conatctApplicantsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContactApplications(conatctApplicantsData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching contact applicants: ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicantsData();
    fetchContactApplicantsData();
  }, []);

  const handleRefresh = async () => {
    setIsRotating(true);
    if (showApplications) {
      await fetchApplicantsData();
    } else {
      await fetchContactApplicantsData();
    }
    setIsRotating(false);
  };

  const getRefreshIcon = () => {
    if (isRotating) {
      return <i className="fa fa-spinner fa-spin"></i>;
    } else {
      return <LuRefreshCw />;
    }
  };

  const toggleTable = () => {
    setShowApplications(!showApplications);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handleCheckboxChange = (id) => {
    const newSelectedApplications = selectedApplications.includes(id)
      ? selectedApplications.filter((appId) => appId !== id)
      : [...selectedApplications, id];
    setSelectedApplications(newSelectedApplications);
  };

  const handleCheckboxContactChange = (id) => {
    const newSelectedContacts = selectedContacts.includes(id)
      ? selectedContacts.filter((appId) => appId !== id)
      : [...selectedContacts, id];
    setSelectedContacts(newSelectedContacts);
  };

  const selectAllContactHandler = () => {
    if (allContacted) {
      setSelectedContacts([]);
    } else {
      const allContactIds = contactApplicants.map((contact) => contact.id);
      setSelectedContacts(allContactIds);
    }
    setAllContacted(!allContacted);
  };

  const exportSelectedData = () => {
    const selectedData = applications.filter((application) =>
      selectedApplications.includes(application.id)
    );
    if (selectedData.length === 0) {
      return alert("select any checkbox");
    } else {
      const ws = XLSX.utils.json_to_sheet(selectedData);

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Selected Applications");

      XLSX.writeFile(wb, "selected_applications.xlsx");
    }
  };

  const exportContactSelectedData = () => {
    const selectedData = contactApplicants.filter((contact) =>
      selectedContacts.includes(contact.id)
    );

    const ws = XLSX.utils.json_to_sheet(selectedData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Selected Contacts");

    XLSX.writeFile(wb, "selected_contacts.xlsx");
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const candidateRef = doc(db, "applicants", id);

      await updateDoc(candidateRef, {
        status: newStatus,
      });

      const updatedApplications = applications.map((application) => {
        if (application.id === id) {
          return { ...application, status: newStatus };
        }
        return application;
      });

      setApplications(updatedApplications);
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  return (
    <div className="dashboard-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <button className="refresh-button" onClick={handleRefresh}>
        {getRefreshIcon()}
      </button>
      <button className="toggle-button" onClick={toggleTable}>
        <div className="container">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="toggleSwitch"
              checked={isChecked}
              onChange={handleToggle}
            />
            <label className="form-check-label" htmlFor="toggleSwitch">
              Toggle Switch
            </label>
          </div>
        </div>
      </button>
      {showApplications ? <></> : ""}

      {showApplications ? (
        <>
          <h2 className="dashboard-h2">Contact Infromation </h2>
          <button className="export-button" onClick={exportSelectedData}>
            Contact Export <TfiExport />{" "}
            <span style={{ marginLeft: "5px" }}>
              {" "}
              {selectedApplications.length > 0
                ? selectedApplications.length
                : ""}{" "}
            </span>{" "}
          </button>

          <table className="contact-applicants-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={selectedApplications}
                    checked={allContacted}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Company Name</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {selectedApplications
                .slice(startIndex, endIndex)
                .map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        checked={selectedApplications.includes(contact.id)}
                        onChange={() => handleCheckboxContactChange(contact.id)}
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.company}</td>
                    <td>{contact.message}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h2 className="dashboard-h2">
            Newsletter Details - {contactApplicants.length}
          </h2>
          <button className="export-button" onClick={exportContactSelectedData}>
            Details Export <TfiExport />{" "}
            <span style={{ marginLeft: "5px" }}>
              {selectedContacts.length > 0 ? selectedContacts.length : ""}{" "}
            </span>{" "}
          </button>
          <table className="contact-applicants-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={selectAllContactHandler}
                    checked={allContacted}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Company Name</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactApplicants.slice(startIndex, endIndex).map((contact) => (
                <tr key={contact.id}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      checked={selectedContacts.includes(contact.id)}
                      onChange={() => handleCheckboxContactChange(contact.id)}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.company}</td>
                  <td>{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GrPrevious />
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            endIndex >=
            (showApplications ? applications.length : contactApplicants.length)
          }
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
