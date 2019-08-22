import React, { useState, useRef } from 'react';
import Input from './passcodeInput/Input';

function onChangeInput(index, value, array){
  if(value.length>0){
    value.split('').map((c, i) => {
      if(index+i < array.length)
        array.splice(index+i, 1, c);
    })
  }
  else{
    array.splice(index, 1, value);
  }
  console.log(index, value)
  return array
}

function PasscodeInput(props){
  const passwordArray = Array.from(new Array(props.passwordLength), ()=> '');
  const passwordInputRefs = Array.from(new Array(props.passwordLength), ()=> useRef(null));
  const [ passwordFields, setPassword ] = useState(passwordArray);
  console.log("passwordFields: ", passwordFields, passwordInputRefs);
  return(
    <div className="columns is-mobile input-passcode">
      {
        passwordFields.map((field, index) => (
          <div className="column" key={index}>
            <Input ref={passwordInputRefs[index]} value={field} onChange={e => {
              console.log("test: ", e.target.value)
              const textValue = e.target.value.substring(0, passwordFields.length)
              setPassword([...onChangeInput(index, textValue, [...passwordFields])]);
              if(e.target.value === ''){
                if(index-1 >= 0)
                  passwordInputRefs[index-1].current.focus();
              }
              else {
                const str = textValue.substring(0, passwordInputRefs.length - 1 - index)
                if(index < passwordInputRefs.length-1)
                  passwordInputRefs[index + str.length].current.focus();
              }
            }}/>
          </div>
        ))
      }
    </div>
  )
}
export default PasscodeInput;