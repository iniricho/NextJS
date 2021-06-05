import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe 
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.453415812268!2d106.8148930071265!3d-6.143215799532457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f731397b326d%3A0xf25315ebd5986f6f!2sBatavia%20crypto!5e0!3m2!1sen!2sid!4v1622885040746!5m2!1sen!2sid" 
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
