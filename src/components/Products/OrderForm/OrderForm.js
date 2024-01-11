import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./OrderForm.css";
import { db } from "../../../FirebaseConfig";
import Swal from "sweetalert2";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore/lite";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const OrderForm = ({ showOrderForm, handleFormSubmit }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    if (uploadProgress === 100) {
      setUploadComplete(true);
    }
  }, [uploadProgress]);

  const onSubmit = async (data) => {
    const {
      name,
      email,
      phone,
      company,
      message,
      productName,
      productMaterial,
      productSize,
    } = data;

    try {
      const docRef = await addDoc(collection(db, "fasteners-Orders"), {
        name,
        email,
        phone,
        company,
        message,
        productName,
        productMaterial,
        productSize,
        fileUrl: "", // Initialize fileUrl to an empty string
      });

      // Call startUpload with the document ID
      startUpload(file, docRef.id);
    } catch (error) {
      console.log("Error Posting Data", error);
    } finally {
      reset();
    }

    Swal.fire({
      title: "Submitted",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileError("");
      setUploadComplete(false);
      setUploadProgress(0);

      // Pass the document ID to startUpload
      startUpload(selectedFile /* Add the document ID parameter here */);
    } else {
      setFile(null);
      setFileError("Please upload a file.");
    }
  };

  const startUpload = async (selectedFile, documentId) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `uploads/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      const unsubscribe = uploadTask.on(
        "upload_progress",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask?.snapshot.ref);
            // Update the document with the file URL
            await updateDoc(doc(db, "fasteners-Orders", documentId), {
              fileUrl: downloadURL,
            });

            // Now, the file upload is complete
            setFileUrl(downloadURL);
            setUploadComplete(true);
            setLoading(false);
          } catch (error) {
            console.error("Error updating document with file URL:", error);
            setLoading(false);
          }
        }
      );

      // Cleanup the event listener when the component is unmounted
      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.error("Error handling file upload: ", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="order-form-popup container ">
        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-2  ">
                <label htmlFor="name" className="form-label">
                  Name<span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className={`form-control inp ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email<span className="text-danger">*</span>:
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className={`form-control inp ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
              <div className=" mb-2">
                <label htmlFor="phone" className="form-label">
                  Phone Number<span className="text-danger">*</span>:
                </label>
                <Controller
                  render={({ field }) => (
                    <PhoneInput
                      inputProps={{
                        name: field.name,
                        required: true,
                      }}
                      country={"us"} // Set default country (you can change it based on your needs)
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                  )}
                  control={control}
                  name="phone"
                  rules={{ required: "Phone number is required" }}
                  inputStyle=""
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>
              <div className="mb-2 ">
                <label htmlFor="company" className="form-label">
                  Company Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Company Name"
                  className={`form-control inp ${
                    errors.company ? "is-invalid" : ""
                  }`}
                  {...register("company")}
                />
                {errors.company && (
                  <div className="invalid-feedback">
                    {errors.company.message}
                  </div>
                )}
              </div>
              <div className="mb-2 ">
                <label htmlFor="productName" className="form-label">
                  Product Name<span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  className={`form-control inp ${
                    errors.productName ? "is-invalid" : ""
                  }`}
                  {...register("productName", {
                    required: "Product Name is required",
                  })}
                />
                {errors.productName && (
                  <div className="invalid-feedback">
                    {errors.productName.message}
                  </div>
                )}
              </div>
              <div className="mb-2 ">
                <label htmlFor="productMaterial" className="form-label">
                  Product Material<span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Material"
                  className={`form-control inp ${
                    errors.productMaterial ? "is-invalid" : ""
                  }`}
                  {...register("productMaterial", {
                    required: "Product Material is required",
                  })}
                />
                {errors.productMaterial && (
                  <div className="invalid-feedback">
                    {errors.productMaterial.message}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2 ">
                <label htmlFor="productSize" className="form-label">
                  Product Size<span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Size"
                  className={`form-control inp ${
                    errors.productSize ? "is-invalid" : ""
                  }`}
                  {...register("productSize", {
                    required: "Product Size is required",
                  })}
                />
                {errors.productSize && (
                  <div className="invalid-feedback">
                    {errors.productSize.message}
                  </div>
                )}
              </div>
              <div className="mb-2 ">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  className={`form-control inp ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  rows="4"
                  {...register("message")}
                />
                {errors.message && (
                  <div className="invalid-feedback">
                    {errors.message.message}
                  </div>
                )}
              </div>
              <div className="mb-2 ">
                <p className="note mt-2 pt-1">
                  Note: Uploading a custom design is entirely optional. If you
                  have a specific design or requirements for our fasteners, feel
                  free to upload a file.
                </p>
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group mb-3 position-relative">
                      <input
                        type="file"
                        style={{ width: "100%" }}
                        className={`form-control-file ${
                          errors.fileError
                            ? "is-invalid"
                            : file
                            ? "is-valid"
                            : ""
                        }`}
                        id="exampleFormControlFile1"
                        accept=".pdf, .doc, .docx"
                        onChange={handleFileChange}
                      />
                      <div className="invalid-tooltip position-absolute">
                        {errors.fileError?.message}
                      </div>

                      {file && (
                        <div className="progress mt-3 col-md-12">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${uploadProgress}%` }}
                            aria-valuenow={uploadProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {uploadProgress.toFixed(2)}%
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                    <div className="col-md-4">
                      <button type="submit" className="btn button inp">
                        Submit
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
