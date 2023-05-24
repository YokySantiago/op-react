import React, { forwardRef } from 'react';

const Input = forwardRef(({ errors, ...props }, ref) => {
  return (
    <>
      <input {...props} className={`py-1 px-3 mb-1 rounded-sm text-black ${props.className || ''}`} ref={ref}/>
      {errors[props.name] && <span className='mb-3'>This field is required</span>}
    </>
  )
});

export default Input;