import React from 'react';
import Input from './passcodeInput/Input';
function PasscodeInput(props){
  return(
    <div className="columns is-mobile input-passcode">
      <div className="column">
        <Input/>
      </div>
      <div className="column">
        <Input/>
      </div>
      <div className="column">
        <Input/>
      </div>
      <div className="column">
        <Input/>
      </div>
      <div className="column">
        <Input/>
      </div>
    </div>
  )
}
export default PasscodeInput;