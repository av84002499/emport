import React from "react";
import "./Certification.css";

const Certification = () => {
  return (
    <>
      <div className="containercer">
        <h1>
          <span className="blue">Cert</span>
          <span className="dark-blue">ification</span>
        </h1>

        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img
              src="/images/image11.png"
              alt="Certificate Preview"
              className="certificate-image"
            />
            <div className="seal">Course Completion</div>
            <div className="details">
              <p><strong>Name:</strong></p>
              <p><strong>Issuing Authority:</strong></p>
              <p><strong>Date of Issuance:</strong></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img
              src="/images/image11.png"
              alt="Certificate Preview"
              className="certificate-image"
            />
            <div className="seal seal-blue">Seal</div>
            <div className="details">
              <p><strong>Name:</strong></p>
              <p><strong>Issuing Authority:</strong></p>
              <p><strong>Date of Issuance:</strong></p>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/image11.png"
              alt="Certificate Preview"
              className="certificate-image"
            />
            <div className="seal seal-blue">Seal</div>
            <div className="details">
              <p><strong>Name:</strong></p>
              <p><strong>Issuing Authority:</strong></p>
              <p><strong>Date of Issuance:</strong></p>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/image11.png"
              alt="Certificate Preview"
              className="certificate-image"
            />
            <div className="seal seal-blue">Seal</div>
            <div className="details">
              <p><strong>Name:</strong></p>
              <p><strong>Issuing Authority:</strong></p>
              <p><strong>Date of Issuance:</strong></p>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/image11.png"
              alt="Certificate Preview"
              className="certificate-image"
            />
            <div className="seal seal-blue">Seal</div>
            <div className="details">
              <p><strong>Name:</strong></p>
              <p><strong>Issuing Authority:</strong></p>
              <p><strong>Date of Issuance:</strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
