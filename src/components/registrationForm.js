import React, { useState, setState } from "react";
import "./style.css";
function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [ph_no, setPassword] = useState(null);
  const [youraddress, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    
    if (id === "email") {
      setEmail(value);
    }
    if (id === "address") {
      setPassword(value);
    }
    if (id === "phone") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, ph_no, youraddress);
    
    
  };
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="ph_no">
          <label className="form__label" for="ph">
            Phone Number{" "}
          </label>
          <input
            className="form__input"
            type="phone"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div className="youraddress">
          <label className="form__label" for="confirmPassword">
            Address{" "}
          </label>
          <input
            className="form__input"
            type="address"
            id="address"
            placeholder="address"
          />
        </div>
      </div>
      <div class="footer">
        <button  type="submit" class="btn">
          Add Member
        </button>
      </div>
      <div class="footer_two">
        <button type="submit" class="btn">
          See Member's List
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm; 
