import React from "react";
import serviceS1 from "@/images/s1.jpg";
import serviceS2 from "@/images/s2.jpg";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2>BEP20 Token Development</h2>
      <p>
      Creating a BSC token is surprisingly easy. These tokens conform to a standard called BEP20, which is similar to the Ethereum standard ERC20.
      The token standard ensures basic functionality for the token, such as transferring, returning a balance, viewing token ownership, etc. 
      Get 100% ownership of generated tokens Custom token name, symbol and initial supply, Automatic verified and published contract source code.
      After successful creation, the token will be automatically transferred to the creator's address. JUST CONTACT US IF YOUR WANT TO FIND OUT MORE!!.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Development</h3>
          <p>
          Let’s explore how to create these tokens below
          </p>
          <ul>
          <li>
              <i className="fa fa-check-square"></i>Token Name
            </li>
            <li>
              <i className="fa fa-check-square"></i>Symbol
            </li>
            <li>
              <i className="fa fa-check-square"></i>Initial Supply
            </li>
            <li>
              <i className="fa fa-check-square"></i>Decimals(1-18)
            </li>
            <li>
              <i className="fa fa-check-square"></i>Other Config (Burn, Mint, Pause, Blacklist, Deflation)
            </li>
          </ul>
        </div>
      </div>
      <p>
      The token standard ensures basic functionality for the token, such as transferring, returning a balance, viewing token ownership, etc.
      Keep in mind that BSC tokens can be swapped for “regular” Binance Chain tokens that conform to their own standard, BEP2.
      Also, any transaction that occurs with these tokens on-chain will require a fee paid in BNB. This fee is compensation for validators for securing the network.
      </p>
    </div>
  );
};

export default ServiceDetailsContent;
