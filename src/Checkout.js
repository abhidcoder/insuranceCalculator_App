import React from 'react';
import Table from './Table';
import './checkout.css'


const Checkout = ({ amount, setGlobal, response }) => {

  const back = () => {
    //setGlobal(0);
    window.location.reload();
  }
  
  return (
    <div style={{marginTop:"20px"}}>  

     <div className="home-button" onClick={back}>
         Click Here To Go Back
      </div>
    <br>
    </br>
    <div className="title">
        <h3>Purchase Summary</h3>
    </div>
    <Table response={response} />

    <div >
    <div className="marval">
     

      

      <div className="checkout">
        <h2>Checkout</h2>

        <div className="amount-info">
          <p>Payable Amount:</p>
          <p className="amount">{amount} INR</p>
        </div>

        <div className="payment-options">
          <h3>Payment Options:</h3>

          <div className="payment-method">
            <input type="radio" id="upi" name="paymentMethod" value="upi" />
            <label htmlFor="upi">UPI</label>
          </div>

          <div className="payment-method">
            <input type="radio" id="netBanking" name="paymentMethod" value="netBanking" />
            <label htmlFor="netBanking">Net Banking</label>
          </div>
        </div>

        <div className="pay-button">Pay Now</div>
      </div>
    </div>
  </div>
  </div>
  

  );
};

export default Checkout;
