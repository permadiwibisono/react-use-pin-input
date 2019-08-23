import React from "react";
import ReactDOM from "react-dom";
import PasscodeInput from "./components/PasscodeInput";
// import "./styles.css";
import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-narrow-mobile is-half-desktop is-offset-one-quarter-desktop">
              <div className="container">
                <div className="title has-text-centered-desktop">react-use-pin-input</div>
                <div className="subtitle has-text-centered-desktop">
                  An example fancy pin input form using react-hooks.
                </div>
                <div className="columns">
                  <div className="column is-narrow-mobile is-half-desktop is-offset-one-quarter-desktop">
                    <form className="form-passcode">
                      <div className="field">
                        <label className="label">Input your passcode</label>
                        <PasscodeInput passwordLength={5} />
                      </div>
                      <div className="field submit-passcode">
                        <div className="control has-text-centered">
                          <button className="button is-link">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
