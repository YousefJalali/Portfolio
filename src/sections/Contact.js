import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header";
import Input from "../components/Input";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

class Contact extends Component {
  state = {
    form: {
      name: {
        inputType: "input",
        inputConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        isTouched: false
      },
      email: {
        inputType: "input",
        inputConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        isValid: false,
        isTouched: false
      },
      message: {
        inputType: "textarea",
        inputConfig: {
          type: "text",
          placeholder: "Your Message"
        },
        value: "",
        validation: {
          required: true
        },
        isValid: false,
        isTouched: false
      }
    },
    isFormValid: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.isEmail) {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid =
        re.test(
          String(value)
            .trim()
            .toLowerCase()
        ) && isValid;
    }
    return isValid;
  };

  inputChangedHandler = (e, inputId) => {
    const form = { ...this.state.form };
    const input = { ...form[inputId] };
    input.value = e.target.value;
    input.isValid = this.checkValidity(input.value, input.validation);
    input.isTouched = true;
    form[inputId] = input;

    let isFormValid = true;
    for (let input in form) {
      isFormValid = form[input].isValid && isFormValid;
    }
    this.setState({
      form: form,
      isFormValid: isFormValid
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const data = {};
    for (let input in this.state.form) {
      data[input] = this.state.form[input].value;
    }
    axios({
      method: "POST",
      url: "http://localhost:3001/send",
      data: data
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  resetForm = () => {
    const form = { ...this.state.form };
    for (let inputId in form) {
      let input = { ...form[inputId] };
      input.value = "";
      form[inputId] = input;
    }
    this.setState({
      form: form
    });
  };

  render() {
    const inputArray = [];
    for (let input in this.state.form) {
      inputArray.push({
        id: input,
        config: this.state.form[input]
      });
    }
    return (
      <section
        className="contact section flex content-space-between"
        id="contact"
      >
        <Header title="Contact" />
        <div>
          <Fade>
            <h2 className="title">Feel free to contact me</h2>
          </Fade>
          <Zoom>
            <form
              className="input-container flex"
              onSubmit={e => this.submitHandler(e)}
              method="POST"
            >
              {inputArray.map(input => (
                <Input
                  key={input.id}
                  inputtype={input.config.inputType}
                  inputConfig={input.config.inputConfig}
                  value={input.config.value}
                  isValid={input.config.isValid}
                  isTouched={input.config.isTouched}
                  changed={e => this.inputChangedHandler(e, input.id)}
                />
              ))}
              <button
                className="submit button--text"
                disabled={!this.state.isFormValid}
              >
                Send
              </button>
            </form>
          </Zoom>
        </div>
        <div className="text">
          YOUSEF JALALI <span>&copy;2018</span>
        </div>
      </section>
    );
  }
}

export default Contact;
