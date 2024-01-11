import React from "react";
import "./Contact.css";
import Card from "../../components/About/Card";
import Form from "../Contact/Form";

const Contact = () => {
  const cards = [
    {
      name: "email",
      icon: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/contactPage%2Femail3d.webp?alt=media&token=92df1ca8-284f-462b-a7b6-7b2ed53c0e76",
      title: "Mail us",
      description: "info@senwellsys.com",
      link: "mailto:info@senwellsys.com",
    },
    {
      name: "Phone Number",
      icon: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/contactPage%2Fphone3d.webp?alt=media&token=116b5aa3-d2ee-47e8-aba5-b1e4beb045ac",
      title: "Call us Anytime",
      description: "+91-9175676403",
      link: "tel:+91-9175676403",
    },
    {
      name: "location",
      icon: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/contactPage%2Flocation.webp?alt=media&token=cd8a33b8-7c36-4050-99c4-e57ad48b7beb",
      title: "Office Address",
      description:
        " 7th Floor, Gera's Imperium Alpha,Near EON IT Park, Kharadi, Pune, Maharashtra-411014",
    },
  ];

  return (
    <>
      <div className="container-fluid contact-bg d-flex align-items-center">
        <div className="row ">
          <div className="col-md-12  ms-1">
            <h1 className="contact-h1 ">Contact Us </h1>
            <h6>Join us now for a prosperous business opportunity.</h6>
          </div>
        </div>
      </div>
      <div className="container card-section">
        <div className="row mt-5 mb-5">
          <h1 className="text-center mt-3 mb-5 ">Get in touch with us </h1>
          {cards &&
            cards.map((item, index) => {
              return (
                <div className="col-md-4 mb-5" key={index}>
                  <Card
                    icon={item.icon}
                    title={item.title}
                    descp={
                      item.link ? (
                        <a href={item.link} className="text-decoration-none">
                          {item.description}{" "}
                        </a>
                      ) : (
                        item.description
                      )
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>

      <div className="container-fluid w-100 ">
        <div className="row">
          <div className="col-md-12">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
