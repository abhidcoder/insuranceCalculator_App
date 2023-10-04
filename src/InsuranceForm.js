import React, { useState} from 'react'

import insurance from "./Image/insurance.png"

import './form.css'

const InsuranceForm = ({setGlobal,setAmount,setresponse}) => {

  const [age, setAge] = useState([]);
  const [sumInsured, setSumInsured] = useState(0);
  const [cityTier, setCityTier] = useState('tier-1');
  const [tenure, setTenure] = useState('1yr');
  const [numAdults, setNumAdults] = useState(1); 
  const [numChildren, setNumChildren] = useState(0);
  const [responsedata, setresponsedata] = useState('');
  const [showPremium, setShowPremium] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [premiumCalculated, setPremiumCalculated] = useState(false); 

  const calculatePremium = () => {
    const formData = {
      age,
      sumInsured,
      cityTier,
      tenure,
      numAdults,
      numChildren,
    };

    setFetching(true);
    if (!fetching) {
       fetch('https://liberty.inspektlabs.com/fetch_lib_data', {
      //fetch('http://127.0.0.1:5001/fetch_lib_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setresponse(data)
          setresponsedata(data.total_cost);
          setAmount(data.total_cost);
          setShowPremium(true);
          setPremiumCalculated(true);
          setFetching(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setFetching(false); 
        });
    }
  };

  const cart =() => {
    if (premiumCalculated) {
      setGlobal(1);
    } else {
      alert('Please click on calculate premium first.');
    }
  }

  const renderAdultFields = () => {
    const adultFields = [];
    for (let i = 0; i < numAdults; i++) {
      adultFields.push(
        <div key={`adult-${i}`}>
          <label>
            Adult {i + 1} Age:
            <input
              type="text"
              value={age[i] || ''}
              required={true}
              onChange={(e) => handleAgeChange(e, i)}
            />
          </label>
        </div>
      );
    }
    return adultFields;
  };

  const handleAgeChange = (e, index) => {
    const updatedAge = [...age];
    updatedAge[index] = e.target.value;
    setAge(updatedAge);
  };

  return (
    <>
      <h1>Premium Insurance Calculator</h1>
      <div className="contain">
        <div className="ff">
          <div className='ss'>
            <br></br>
            <br></br>
      <div className="contain">
          <img src={insurance} alt="there is no pic" className="gif" />
          {showPremium && (
            <h2>
              <pre className=''>
                The Premium Plan cost = ₹ {responsedata}.
                {'\n'} 
                For number of adults = {numAdults}.
                {'\n'}
                For number of children = {numChildren}.
              </pre>
            </h2>
          )}
        </div>
        <br></br>
        <br></br>
          <p>Now Calculate Your Premium In Just a Click !</p>
          <br></br>
            <form className="forms">
              <label>
                Sum Insured:
                <select value={sumInsured} onChange={(e) => setSumInsured(e.target.value)}>
                  <option value=""> Select an option</option>
                  <option value="500000">500,000</option>
                  <option value="400000">400,000</option>
                  <option value="300000">300,000</option>

                </select>
              </label>

              <label>
                City Tier:
                <select value={cityTier} onChange={(e) => setCityTier(e.target.value)}>
                  <option value="tier-1">Tier 1</option>
                  <option value="tier-2">Tier 2</option>
                </select>
              </label>

              <label>
                Tenure:
                <select value={tenure} onChange={(e) => setTenure(e.target.value)}>
                  <option value="1yr">1 Year</option>
                </select>
              </label>

              <label>
                Enter Number of Adults:
                <input
                  type="text"
                  required={true}
                  value={numAdults}
                  onChange={(e) => setNumAdults(Number(e.target.value))}
                />
              </label>

              {renderAdultFields()}

              <label>
                Enter Number of Children (Base rate is ₹ 7073):
                <input
                  type="number"
                  value={numChildren}
                  onChange={(e) => setNumChildren(Number(e.target.value))}
                />
              </label>

              

              <button type="button" className='cal1' onClick={calculatePremium}>
                Calculate Premium
              </button>
              <button type="button" className="cal2" onClick={cart}>
                Go to Cart
              </button>
            </form>
          </div>
        </div>
      
      </div>
    
    </>
  );
}

export default InsuranceForm;

