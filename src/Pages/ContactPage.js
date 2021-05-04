import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact US"} span={"Contact US"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3090416297487!2d-121.88326018433862!3d37.33519164510008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccb864de43d5%3A0x397ffe721937340e!2sSan%20Jos%C3%A9%20State%20University!5e0!3m2!1sen!2sin!4v1619929549383!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+91 9988774455"}
            text2={"+91 9966552233"}
            title={"Phone:"}
          />
          <ContactItem icon={email} text1={"abcd@gmail.com"} title={"Email:"} />
          <ContactItem
            icon={location}
            text1={"1 Washington Sq,"}
            text2={" San Jose,CA 95192,USA"}
            title={"Address:"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
