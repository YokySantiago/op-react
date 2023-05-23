import React, { forwardRef } from 'react';

const Input = forwardRef(({ errors, ...props }, ref) => {
  return (
    <>
      <input {...props} ref={ref}/>
      {errors[props.name] && <span>This field is required</span>}
    </>
  )
});

export default Input;