import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Form.css";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../../FirebaseConfig.js";
import Swal from "sweetalert2";

const Form = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, phone, company, message } = data;

    try {
      const docRef = await addDoc(collection(db, "fasteners-Contact"), {
        name,
        email,
        phone,
        company,
        message,
      });

      await reset();
    } catch (error) {
      console.log("Error Posting Data", error);
    }

    Swal.fire({
      title: "Submitted",

      icon: "success",
      confirmButtonText: "ok",
    });
  };

  return (
    <>
      <section className="">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="col col-lg-6 mb-4 mb-lg-0"
              style={{ minWidth: "90vw" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card mb-3" style={{ borderRadius: "0.5rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4 gradient-custom text-center text-white"></div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>
                          Fill out the form below, we will get back to you soon
                        </h6>
                        <hr className="mt-0 mb-4" />

                        <div className="mb-3 col-12">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            className={`form-control inp ${
                              errors.name ? "is-invalid" : ""
                            }`}
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name.message}
                            </div>
                          )}
                        </div>

                        <div className="mb-3 col-12">
                          <label htmlFor="email" className="form-label">
                            Email
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
                            <div className="invalid-feedback">
                              {errors.email.message}
                            </div>
                          )}
                        </div>

                        <div className=" col-12 ">
                          <label htmlFor="phone" className="form-label">
                            Phone Number
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
                          />
                          {errors.phone && (
                            <div className="invalid-feedback">
                              {errors.phone.message}
                            </div>
                          )}
                        </div>

                        <div className="col-12 company-field">
                          <label htmlFor="company" className="form-label">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Company Name"
                            className={`form-control inp ${
                              errors.company ? "is-invalid" : ""
                            }`}
                            {...register("company", {
                              required: "Company name is required",
                            })}
                          />
                          {errors.company && (
                            <div className="invalid-feedback">
                              {errors.company.message}
                            </div>
                          )}
                        </div>

                        <div className="mb-3 col-12">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            placeholder="Enter Your Message Here"
                            className={`form-control inp ${
                              errors.message ? "is-invalid" : ""
                            }`}
                            rows="4"
                            {...register("message", {
                              required: "Message is required",
                            })}
                          />
                          {errors.message && (
                            <div className="invalid-feedback">
                              {errors.message.message}
                            </div>
                          )}
                        </div>

                        <button type="submit" className="btn button">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
