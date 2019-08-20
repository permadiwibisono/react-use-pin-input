import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import "./index.scss";

class App extends React.Component {
  render() {
    return(
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-narrow-mobile is-half-desktop is-offset-one-quarter-desktop">
              <div className="container">
                <div className="title has-text-centered-desktop">react-use-pin-input</div>
                <div className="subtitle has-text-centered-desktop">
                  An example fancy pin input form using hooks.
                </div>
                <div className="columns">
                  <div className="column is-narrow-mobile is-half-desktop is-offset-one-quarter-desktop">
                    <form>
                      <div className="field">
                        <label className="label">Input your passcode</label>
                        <div className="columns is-mobile">
                          <div className="column">
                            <div className="control">
                              <input className="input" type="text"/>
                            </div>
                          </div>
                          <div className="column">
                            <div className="control">
                              <input className="input" type="text"/>
                            </div>
                          </div>
                          <div className="column">
                            <div className="control">
                              <input className="input" type="text"/>
                            </div>
                          </div>
                          <div className="column">
                            <div className="control">
                              <input className="input" type="text"/>
                            </div>
                          </div>
                          <div className="column">
                            <div className="control">
                              <input className="input" type="text"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control has-text-right">
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
    )
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
