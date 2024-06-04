import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../CSS/profile.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export const Contact = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div class="page shadow">
        <div class="main-container shadow">

          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src="../image/prajwal.jpg"
                    alt="Prajwal"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />

                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prajwal-sridhar-a502b115a/">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2>Prajwal Sridhar</h2>
                  <p>Otto Von Guericke University</p>
                  <p>Magdeburg, Germany</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                        Data and Knowledge Engineering student from Summer 2024
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  )
};
