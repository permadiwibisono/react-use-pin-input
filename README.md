# react-use-pin-input
An example fancy pin input form using react-hooks.

<img src="https://raw.githubusercontent.com/permadiwibisono/react-use-pin-input/master/examples/preview.gif" alt="Preview" width="250">

## Using react-hooks
All logics in `./src/hooks/usePasscodeInput`

## Usages
```jsx
import usePasscodeInput from "../hooks/usePasscodeInput";
const [passcodeFields, setPasscodeItem, passcodeInputRefs, setPasscode] = usePasscodeInput(6);
```
`passcodeFields` a array of each your passcode's characters. `setPasscodeItem` a function to change every characters. `passcodeInputRefs` a ref function to handle your inputs like `focus()`. `setPasscode` a function for change array of your passcode.

## Examples
```jsx
//src/components/PasscodeInput.jsx
import React from "react";
import propTypes from "prop-types";
import Input from "./passcodeInput/Input";
import usePasscodeInput from "../hooks/usePasscodeInput";

function PasscodeInput(props) {
  const [passcodeFields, setPasscodeItem, passcodeInputRefs] = usePasscodeInput(props.passwordLength);
  return (
    <div className="input-passcodes">
      {passcodeFields.map((field, index) => (
        <div className="input-passcodes__wrapper" key={index}>
          <Input
            ref={passcodeInputRefs[index]}
            value={field}
            onChange={e => {
              const textValue = e.target.value.substring(0, passcodeFields.length);
              setPasscodeItem(index, textValue);
              if (e.target.value === "") {
                if (index - 1 >= 0) passcodeInputRefs[index - 1].current.focus();
              } else {
                const str = textValue.substring(0, passcodeInputRefs.length - 1 - index);
                if (index < passcodeInputRefs.length - 1) passcodeInputRefs[index + str.length].current.focus();
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}
```

## Clone this repo.
```
git clone https://github.com/permadiwibisono/react-use-pin-input.git
```

## Run locally
```
yarn install
yarn start
```

Open in your favorite browser http://localhost:8080
