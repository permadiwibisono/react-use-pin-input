import React, { forwardRef, useRef, useImperativeHandle } from "react";

function Input(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <div className="control">
      <input className="input has-text-weight-bold" type="text" {...props} ref={inputRef} />
    </div>
  );
}

export default forwardRef(Input);
