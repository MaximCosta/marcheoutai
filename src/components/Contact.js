import React from "react";
import "../styles/Contact.css";

const Contact = ({ data }) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="ontact-info">
            <div className="contact-item">
              <h2>Get In Touch</h2>
              <br />
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <div>
                {data ? data.address : "loading"}
                </div>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                <div>
                {data ? data.phone : "loading"}
                </div>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa-solid fa-envelope"></i> Email
                </span>
                <div>
                {data ? data.email : "loading"}
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={data ? data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; Towards the extraordinary dreams of ordinary people</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
