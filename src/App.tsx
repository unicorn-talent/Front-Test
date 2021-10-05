import React, { useState } from "react";
import {Form} from "react-bootstrap";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// import stylesheets
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/style.scss";
import { validateRegister } from "./utils/validate";
import leftImage from "./assets/background.jpg";

interface postData {
  first: string;
  last: string;
  email: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  birthday: string;
  gender: string;
}

const defaultFields = {
  first: "",
  last: "",
  email: "",
  address: "",
  city: "",
  province: "",
  zip: "",
  phone: "",
  birthday: "",
  gender: "Male"
}


const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria"
];

const App: React.FC = () => {
  const [fields, setFields] = useState<postData>({...defaultFields});
  const [errors, setErrors] = useState<postData>({...defaultFields});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Send Server");
    } else {
      return false;
    }
  }

  const handleValidation = () => {
    const {formIsValid, fieldErrors} = validateRegister(defaultFields, fields);
    setErrors(fieldErrors);
    return formIsValid;
  };

  const onGender = (e: any, gender: string) => {
    e.preventDefault();
    setFields({ ...fields, gender: gender });
    console.log(gender);
  }

  return (
    <div className="home-container">
      <div className="left-container">
        <img src={leftImage} style={{height: "100%"}}/>
      </div>
      <div className="right-container">
        <div className="form-container">
          <form className="signin-content">
            <div>
              <p className="bg-label font-weight-700" style={{marginTop: "10px", textAlign: "center"}}>
                Welcome
              </p>
            </div>
            <div  style={{display: "flex"}}>
              <div style={{marginRight: "10px"}}>
                <p className="sm-label">First name</p>
                <input
                  className="app-input"
                  type="text"
                  name="first"
                  placeholder="First name"
                  value={fields.first}
                  onChange={(e) => setFields({ ...fields, first: e.target.value })}
                />
                <p className="label color-danger">{errors.first}</p>
              </div>
              <div>
                <p className="sm-label">Last name</p>
                <input
                  className="app-input"
                  type="text"
                  name="last"
                  placeholder="Last name"
                  value={fields.last}
                  onChange={(e) => setFields({ ...fields, last: e.target.value })}
                />
                <p className="label color-danger">{errors.last}</p>
              </div>
            </div>
            <div >
              <p className="sm-label">Email Address</p>
              <input
                className="app-input"
                type="text"
                name="email"
                placeholder="please input your email"
                value={fields.email}
                onChange={(e) => setFields({ ...fields, email: e.target.value })}
              />
              <p className="label color-danger">{errors.email}</p>
            </div>
            <div >
              <p className="sm-label">Street address</p>
              <input
                className="app-input"
                type="text"
                name="address"
                placeholder="please input your address"
                value={fields.address}
                onChange={(e) => setFields({ ...fields, address: e.target.value })}
              />
              <p className="label color-danger">{errors.address}</p>
            </div>
            <div style={{display: "flex"}}>
              <div style={{width: "100%", marginRight: "10px"}}>
                <p className="sm-label">City</p>
                <input
                  className="app-input"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={fields.city}
                  onChange={(e) => setFields({ ...fields, city: e.target.value })}
                />
                <p className="label color-danger">{errors.city}</p>
              </div>
              <div style={{width: "100%"}}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="label">
                    State / Province
                  </Form.Label>
                  <Form.Control
                    className="background-transparent selet-province"
                    as="select" 
                    onChange={(e) => setFields({
                      ...fields,
                      province: e.target.value,
                    })}
                  >
                    {countryList.map((country, idx) => {
                      return <option key={idx}>{country}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div >
              <p className="sm-label">ZIP / Postal</p>
              <input
                className="app-input"
                type="text"
                name="zip"
                placeholder=""
                value={fields.zip}
                onChange={(e) => setFields({ ...fields, zip: e.target.value })}
              />
              <p className="label color-danger">{errors.zip}</p>
            </div>
            <div >
              <p className="sm-label">Phone number</p>
              <PhoneInput
                country={'us'}
                value={fields.phone}
                onChange={(phone: any) => setFields({ ...fields, phone: phone })}
              />
            </div>
            <div >
              <p className="sm-label">Date of birth</p>
              <input
                className="app-input"
                type="text"
                name="zip"
                placeholder="01/01/1990"
                value={fields.birthday}
                onChange={(e) => setFields({ ...fields, birthday: e.target.value })}
              />
              <p className="label color-danger">{errors.birthday}</p>
            </div>
            <div>
              <p className="sm-label">Gender</p>
              <div style={{display: "flex"}}>
                <button 
                  className={fields["gender"] == "Male" ? "selected" : ""}
                  onClick={(e) => onGender(e, "Male")}
                  style={{marginRight: "10px"}}
                >
                  Male    
                </button>
                <button 
                  className={fields["gender"] == "Female" ? "selected" : ""}
                  onClick={(e) => onGender(e, "Female")}
                  style={{marginRight: "10px"}}
                >
                  Female
                </button>
                <button 
                  className={fields["gender"] == "Other" ? "selected" : ""}
                  onClick={(e) => onGender(e, "Other")}>
                  Other
                </button>
              </div>
            </div>
            <div style={{width: "100%", marginTop: "20px"}}>
              <button className="btn-submit font-weight-600" onClick={handleSubmit}>
                Get my free smaples
              </button>
            </div>
          </form>
          </div>
      </div>
    </div>
  );
};

export default App;
