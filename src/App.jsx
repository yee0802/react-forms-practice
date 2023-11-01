import { useState } from "react";
import "./App.css";

const INITIAL_FORM_STATE = {
  fullName: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false
};

export default function App() {
  const [ form, setForm ] = useState(INITIAL_FORM_STATE);
  
  const sumbitForm = (e) => {
    e.preventDefault();

    // fetch JSON server and add form
    // reset form to inital state
    // console.log(form)
    setForm(INITIAL_FORM_STATE);
  };

  const handleUserInput = (e) => {
    const { name, type, value, checked } = e.target;

    type === "checkbox" ? setForm({ ...form, [name]: checked})
    : setForm({ ...form, [name]: value })
  };

  const contactOpts = ["phone", "email", "post", "none"];

  return (
    <>
      <form className="form" onSubmit={sumbitForm}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="fullName" required onChange={(e) => handleUserInput(e)} />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={(e) => handleUserInput(e)} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={(e) => handleUserInput(e)} />
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={(e) => handleUserInput(e)} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={(e) => handleUserInput(e)}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            {contactOpts.map(opt => 
              <label key={opt}>
                <input type="radio" name="contact" value={opt} onChange={(e) => handleUserInput(e)} />
                {opt}
              </label>
              )}
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={(e) => handleUserInput(e)} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
