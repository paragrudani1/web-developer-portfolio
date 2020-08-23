/** @format */

import React from "react";
import axios from "axios";
import arrow from "../../../assets/arrows/Line 5.svg";
import classes from "./ContactForm.module.css";
import bgImg from "../../../assets/Group 63.svg";

// Import Social Media Icons
import instagram from "../../../assets/Social Media/instagram 1.svg";
import linkedIn from "../../../assets/Social Media/linkedin 1.svg";
import github from "../../../assets/Social Media/github 1.svg";
class ContactForm extends React.Component {
  state = {
    contactForm: {
      Name: {
        value: "",
      },
      Email: {
        value: "",
      },
      Massage: {
        value: "",
      },
    },
    clicked: false,
  };

  clearInput = () => {
    const updatedForm = {
      ...this.state.contactForm,
    };

    Object.entries(Object.entries(updatedForm)).reduce((e, i) => {
      return (i[1][1].value = "");
    }, []);
    // console.log(updatedForm);

    this.setState({ contactForm: updatedForm });
  };

  inputValue = (event, inputIdentifier) => {
    const updatedContactForm = {
      ...this.state.contactForm,
    };

    const updatedFormElement = {
      ...updatedContactForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedContactForm[inputIdentifier] = updatedFormElement;

    this.setState({ contactForm: updatedContactForm });
  };

  formHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.contactForm) {
      formData[formElementIdentifier] = this.state.contactForm[
        formElementIdentifier
      ].value;
    }

    const detail = {
      data: formData,
    };

    axios
      .post("https://form-data-c5373.firebaseio.com/data.json", detail)
      .then((res) => {
        console.log(res);
        this.clearInput();
        window.alert("Thank Yu so much! Your Query has successfully sent!");
      })
      .catch((err) =>
        window.alert("Something went wrong! please try again later!")
      );
  };
  render() {
    let formElementArray = [];
    for (let key in this.state.contactForm) {
      formElementArray.push({
        id: key,
        config: this.state.contactForm[key],
      });
    }
    return (
      <section className={classes.ContactForm_Container} id="contactform">
        <div className={classes.Greet}>
          <div className={classes.Story_Head}>
            <div className={classes.Title}>
              <h1>
                Let's <span>Connect</span>
              </h1>
              <img src={arrow} alt="skills" />
            </div>
            <div className={classes.Sub}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.ContactForm}>
          <img className={classes.Bg_Img} src={bgImg} alt="bg" />
          <div className={classes.ContactForm_Main}>
            <div className={classes.FormText}>
              <h1>
                <span>Hey!</span> Do you work with me?
              </h1>
            </div>
            <div className={classes.Form_Section}>
              <form onSubmit={this.formHandler}>
                <div className={classes.Header}>
                  <h1>Keep in Touch</h1>
                  <p>I'm totally at your disposal</p>
                </div>
                <div className={classes.Input_Section}>
                  <div className={classes.Name}>
                    <label htmlFor="Name">
                      Name <span>*</span>
                    </label>
                    <input
                      onChange={(event) =>
                        this.inputValue(event, formElementArray[0].id)
                      }
                      value={formElementArray[0].config.value}
                      type="text"
                      name="Name"
                      required
                    />
                  </div>
                  <div className={classes.Email}>
                    <label htmlFor="Email">
                      Email <span>*</span>
                    </label>
                    <input
                      onChange={(event) =>
                        this.inputValue(event, formElementArray[1].id)
                      }
                      value={formElementArray[1].config.value}
                      type="email"
                      name="Email"
                      required
                    />
                  </div>
                  <div className={classes.Massage}>
                    <label htmlFor="Massage">
                      Massage <span>*</span>
                    </label>
                    <textarea
                      onChange={(event) =>
                        this.inputValue(event, formElementArray[2].id)
                      }
                      value={formElementArray[2].config.value}
                      rows={7}
                      name="Massage"
                      required
                    />
                  </div>
                  <div className={classes.Button}>
                    <button>Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={classes.Contact_Info}>
          <ul>
            <li className={classes.Number}>
              <a href="tel:+919558744129"> +91 9558744129</a>
            </li>
            <li className={classes.Email}>
              <a href="mailto:abc@gmail.com"> yourmail@gmail.com</a>
            </li>
            <li className={classes.Address}>
              28 Green Tower, street Name, <br />
              New York City, USA
            </li>
          </ul>

          <div className={classes.Social_Icons}>
            {/* Instagram */}
            <div className={classes.Instagram}>
              <a href="#instagram">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            {/* LinkedIn */}
            <div className={classes.LinkedIn}>
              <a href="#LinkedIn">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </div>
            {/* Github */}
            <div className={classes.Github}>
              <a href="#Github">
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
