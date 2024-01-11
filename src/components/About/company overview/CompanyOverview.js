import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../company overview/CompanyOverview.css";

const CompanyOverview = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <section className="breadcrumb-area">
        <h1 className="text-center ">Company Overview</h1>
      </section>
      <section className="description-area mt-3">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row description-row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <Card
                bg="light"
                text="dark"
                style={{
                  width: "80%",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  overflowY: "auto",
                }}
                className="wrapper"
              >
                <Card.Body>
                  <Card.Title>Dedicated to Excellence: Senwell Fasteners - Your Premier Partner for High-Quality Ferrous and Non-Ferrous Products</Card.Title>
                  <Card.Text>
                    Senwell Fasteners is dedicated to upholding high-quality
                    standards, positioning itself as a prominent entity
                    specializing in exporting and providing an extensive range
                    of Ferrous and Non-Ferrous Products. Our diverse product
                    line caters to various industries, including automotive,
                    sugar, cement, and engineering.
                  </Card.Text>
                  {expanded && (
                    <>
                      <Card.Text>
                        <div>
                          We understand the challenges associated with the
                          supply, specification, selection, and utilization of
                          various materials and grades. Our adaptability is
                          evident in providing any size, grade, or quality at a
                          competitive price in various forms such as pipes,
                          tubes, plates, flanges, fittings, bars, and customized
                          forgings.
                          <br></br>
                          Senwell Fasteners is dedicated to upholding
                          high-quality standards, positioning itself as a
                          prominent entity specializing in exporting and
                          providing an extensive range of Ferrous and
                          Non-Ferrous Products. Our diverse product line caters
                          to various industries, including automotive, sugar,
                          cement, and engineering. We understand the challenges
                          associated with the supply, specification, selection,
                          and utilization of various materials and grades. Our
                          adaptability is evident in providing any size, grade,
                          or quality at a competitive price in various forms
                          such as pipes, tubes, plates, flanges, fittings, bars,
                          and customized forgings. Within this comprehensive
                          range, we offer an array of products such as
                          fasteners, steel fasteners, nuts, bolts, screws,
                          washers, PTFE coated fasteners, pipe fittings,
                          stainless steel pipe fittings, carbon steel pipe
                          buttweld fittings, alloy steel pipe buttweld fittings,
                          duplex steel pipe buttweld fittings, and more. Our
                          offerings extend to pipes and tubes, stainless steel
                          sheets, plates, and coils, as well as a diverse range
                          of industrial components.
                          <br></br>
                          Acknowledging the intricacies involved in sourcing
                          top-notch products, we collaborate with authorized and
                          reputed vendors who use superior-grade raw materials
                          and advanced technologies. Our product range is highly
                          acclaimed for its exceptional quality attributes,
                          including resistance to abrasion and corrosion,
                          excellent tensile strength, wear and tear resistance,
                          fine finishing, durability, and dimensional accuracy.
                          These products find extensive demand in automotive,
                          cement, oil, gas, petrochemical, sugar industries, and
                          fabrication units.
                          <br />
                          To guarantee a flawless range, we associate with
                          vendors based on their market credibility and
                          experience, conducting thorough market research before
                          establishing any business association. Our dedicated
                          team of procuring agents ensures the secure storage of
                          products in our capacious warehousing facility,
                          equipped with the latest machines and tools for safe
                          loading and unloading.
                          <br />
                          Rigorous quality testing by our controllers on various
                          parameters ensures the flawlessness of our products.
                          We prioritize the use of high-grade packaging
                          materials such as bubble wrapping, cartons, and wooden
                          or plywood boxes. As a client-centric organization, we
                          are committed to delivering products to our client's
                          premises within the promised time frame. Through our
                          dedicated efforts and hard work, we have successfully
                          built a vast clientele across the Indian Subcontinent,
                          East/Middle Africa, North Africa, East Asia, and the
                          Middle East markets.
                        </div>
                        <div className="indutries pt-3">
                          <h2>Industrial Segments</h2>
                          <div className="text-justify">
                            <p>
                              We deliver variety of products to our valuable
                              customers in various Industrial segments as
                              follows :
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <div className="text-justify">
                                  <ul>
                                    <li>Energy</li>
                                    <li>Oil & Gas</li>
                                    <li>Aerospace</li>
                                    <li>Trading Organization</li>
                                    <li>Steel Plant</li>
                                    <li>Oil Miles</li>
                                    <li>Breweries</li>
                                    <li>Contractor</li>
                                    <li>Railway</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="text-justify">
                                  <ul>
                                    <li>Engineering Co.</li>
                                    <li>Petrochemical</li>
                                    <li>EPC </li>
                                    <li>Offshore</li>
                                    <li>Mining</li>
                                    <li>Chemical</li>
                                    <li>Cement</li>
                                    <li>Nuclear Power</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="text-justify">
                                  <ul>
                                    <li>Paper</li>
                                    <li>Construction</li>
                                    <li>Ship Building</li>
                                    <li>Refineries</li>
                                    <li>Ports</li>
                                    <li>Government Org</li>
                                    <li>Fertilizers</li>
                                    <li>Sugar</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="countries">
                          <h2>
                            List of countries we provide service to government
                            sanctions and regulations.
                          </h2>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="text-justify">
                                <ul className="unordercountries">
                                  <li>Afghanistan</li>
                                  <li>Albania</li>
                                  <li>Algeria</li>
                                  <li>Andorra</li>
                                  <li>Angola</li>
                                  <li>Antigua and Barbuda</li>
                                  <li>Argentina</li>
                                  <li>Armenia</li>
                                  <li>Australia</li>
                                  <li>Austria</li>
                                  <li>Azerbaijan</li>
                                  <li>The Bahamas</li>
                                  <li>Bahrain</li>
                                  <li>Bangladesh</li>
                                  <li>Barbados</li>
                                  <li>Belarus</li>
                                  <li>Belgium</li>
                                  <li>Belize</li>
                                  <li>Benin</li>
                                  <li>Bhutan</li>
                                  <li>Bolivia</li>
                                  <li>Botswana</li>
                                  <li>Brazil</li>
                                  <li>Brunei</li>
                                  <li>Bulgaria</li>
                                  <li>Burkina Faso</li>
                                  <li>Burundi</li>
                                  <li>Cabo Verde</li>
                                  <li>Cambodia</li>
                                  <li>Cameroon</li>
                                  <li>Canada</li>
                                  <li>Central African Republic</li>
                                  <li>Chad</li>
                                  <li>Chile</li>
                                  <li>China</li>
                                  <li>Colombia</li>
                                  <li>Comoros</li>
                                  <li>Congo, Democratic Republic of the</li>
                                  <li>Congo, Republic of the</li>
                                  <li>Costa Rica</li>
                                  <li>Côte d'Ivoire</li>
                                  <li>Croatia</li>
                                  <li>Cuba</li>
                                  <li>Cyprus</li>
                                  <li>Czech Republic</li>
                                  <li>Denmark</li>
                                  <li>Djibouti</li>
                                  <li>Dominica</li>
                                  <li>Dominican Republic</li>
                                  <li>East Timor (Timor-Leste)</li>
                                  <li>Ecuador</li>
                                  <li>Egypt</li>
                                  <li>El Salvador</li>
                                  <li>Equatorial Guinea</li>
                                  <li>Eritrea</li>
                                  <li>Estonia</li>
                                  <li>Ethiopia</li>
                                  <li>Fiji</li>
                                  <li>Finland</li>
                                  <li>France</li>
                                  <li>Bosnia and Herzegovina</li>
                                  <li>Gabon</li>
                                  <li>The Gambia</li>
                                  <li>Georgia</li>
                                  <li>Germany</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-justify">
                                <ul className="unordercountries">
                                  <li>Ghana</li>
                                  <li>Greece</li>
                                  <li>Grenada</li>
                                  <li>Guatemala</li>
                                  <li>Guinea</li>
                                  <li>Guinea-Bissau</li>
                                  <li>Guyana</li>
                                  <li>Haiti</li>
                                  <li>Honduras</li>
                                  <li>Hungary</li>
                                  <li>Iceland</li>
                                  <li>India</li>
                                  <li>Indonesia</li>
                                  <li>Iran</li>
                                  <li>Iraq</li>
                                  <li>Ireland</li>
                                  <li>Israel</li>
                                  <li>Italy</li>
                                  <li>Jamaica</li>
                                  <li>Japan</li>
                                  <li>Jordan</li>
                                  <li>Kazakhstan</li>
                                  <li>Kenya</li>
                                  <li>Kiribati</li>
                                  <li>Korea, North</li>
                                  <li>Korea, South</li>
                                  <li>Kosovo</li>
                                  <li>Kuwait</li>
                                  <li>Kyrgyzstan</li>
                                  <li>Laos</li>
                                  <li>Latvia</li>
                                  <li>Lebanon</li>
                                  <li>Lesotho</li>
                                  <li>Liberia</li>
                                  <li>Libya</li>
                                  <li>Liechtenstein</li>
                                  <li>Lithuania</li>
                                  <li>Luxembourg</li>
                                  <li>Macedonia</li>
                                  <li>Madagascar</li>
                                  <li>Malawi</li>
                                  <li>Malaysia</li>
                                  <li>Maldives</li>
                                  <li>Mali</li>
                                  <li>Malta</li>
                                  <li>Marshall Islands</li>
                                  <li>Mauritania</li>
                                  <li>Mauritius</li>
                                  <li>Mexico</li>
                                  <li>Micronesia, Federated States of</li>
                                  <li>Moldova</li>
                                  <li>Monaco</li>
                                  <li>Mongolia</li>
                                  <li>Montenegro</li>
                                  <li>Morocco</li>
                                  <li>Mozambique</li>
                                  <li>Myanmar (Burma)</li>
                                  <li>Namibia</li>
                                  <li>Nauru</li>
                                  <li>Nepal</li>
                                  <li>Netherlands</li>
                                  <li>New Zealand</li>
                                  <li>Nicaragua</li>
                                  <li>Niger</li>
                                  <li>Nigeria</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-justify">
                                <ul className="unordercountries">
                                  <li>Norway</li>
                                  <li>Oman</li>

                                  <li>Palau</li>
                                  <li>Panama</li>
                                  <li>Papua New Guinea</li>
                                  <li>Paraguay</li>
                                  <li>Peru</li>
                                  <li>Philippines</li>
                                  <li>Poland</li>
                                  <li>Portugal</li>
                                  <li>Qatar</li>
                                  <li>Romania</li>
                                  <li>Russia</li>
                                  <li>Rwanda</li>
                                  <li>Saint Kitts and Nevis</li>
                                  <li>Saint Lucia</li>
                                  <li>Saint Vincent and the Grenadines</li>
                                  <li>Samoa</li>
                                  <li>San Marino</li>
                                  <li>Sao Tome and Principe</li>
                                  <li>Saudi Arabia</li>
                                  <li>Senegal</li>
                                  <li>Serbia</li>
                                  <li>Seychelles</li>
                                  <li>Sierra Leone</li>
                                  <li>Singapore</li>
                                  <li>Slovakia</li>
                                  <li>Slovenia</li>
                                  <li>Solomon Islands</li>
                                  <li>Somalia</li>
                                  <li>South Africa</li>
                                  <li>Spain</li>
                                  <li>Sri Lanka</li>
                                  <li>Sudan</li>
                                  <li>Sudan, South</li>
                                  <li>Suriname</li>
                                  <li>Swaziland</li>
                                  <li>Sweden</li>
                                  <li>Switzerland</li>
                                  <li>Syria</li>
                                  <li>Taiwan</li>
                                  <li>Tajikistan</li>
                                  <li>Tanzania</li>
                                  <li>Thailand</li>
                                  <li>Togo</li>
                                  <li>Tonga</li>
                                  <li>Trinidad and Tobago</li>
                                  <li>Tunisia</li>
                                  <li>Turkey</li>
                                  <li>Turkmenistan</li>
                                  <li>Tuvalu</li>
                                  <li>Uganda</li>
                                  <li>Ukraine</li>
                                  <li>United Arab Emirates</li>
                                  <li>United Kingdom</li>
                                  <li>United States</li>
                                  <li>Uruguay</li>
                                  <li>Uzbekistan</li>
                                  <li>Vanuatu</li>
                                  <li>Vatican City</li>
                                  <li>Venezuela</li>
                                  <li>Vietnam</li>
                                  <li>Yemen</li>
                                  <li>Zambia</li>
                                  <li>Zimbabwe</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Text>
                    </>
                  )}
                  <Button
                    variant="primary"
                    onClick={toggleExpand}
                    className="mt-3"
                  >
                    {expanded ? "Show Less" : "Show More"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyOverview;
