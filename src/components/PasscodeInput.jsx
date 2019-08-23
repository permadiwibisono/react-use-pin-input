import React from 'react';
import Input from './passcodeInput/Input';
import usePasscodeInput from '../hooks/usePasscodeInput';

function PasscodeInput(props){
  const [ passcodeFields, setPasscodeItem, passcodeInputRefs ] = usePasscodeInput(props.passwordLength);
  console.log("passcodeFields: ", passcodeFields, passcodeInputRefs);
  return(
    <div className="columns is-mobile input-passcode">
      {
        passcodeFields.map((field, index) => (
          <div className="column" key={index}>
            <Input ref={passcodeInputRefs[index]} value={field} onChange={e => {
              console.log("test: ", e.target.value)
              const textValue = e.target.value.substring(0, passcodeFields.length)
              setPasscodeItem(index, textValue);
              if(e.target.value === ''){
                if(index-1 >= 0)
                  passcodeInputRefs[index-1].current.focus();
              }
              else {
                const str = textValue.substring(0, passcodeInputRefs.length - 1 - index)
                if(index < passcodeInputRefs.length-1)
                  passcodeInputRefs[index + str.length].current.focus();
              }
            }}/>
          </div>
        ))
      }
    </div>
  )
}
export default PasscodeInput;