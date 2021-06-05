import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Services</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="https://bataviacrypto.com/service">Batavia Crypto Token</a>
            </li>
            <li>
              <a href="https://bataviacrypto.com/service-details">BEP20 Token Development</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>need our help?</h4>
          <p>
            Prefer speaking with a human to filling out a form? just call and we will connect you with a team member who can help.
          </p>
          <h2>+621 8128 0010 723</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
