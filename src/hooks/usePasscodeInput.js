import { useState, useRef } from 'react';

function usePasscodeInput(passcodeLength = 5){
  const passcodeArray = Array.from(new Array(passcodeLength), ()=> '');
  const passcodeInputRefs = Array.from(new Array(passcodeLength), ()=> useRef(null));
  const [ passcodeFields, setPasscode ] = useState(passcodeArray);
  const setPasscodeItem = (index, value) => {
    const array = [...passcodeFields]
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
    setPasscode(array)
  }
  return [
    passcodeFields,
    setPasscodeItem,
    passcodeInputRefs,
    setPasscode
  ]
}


export default usePasscodeInput;