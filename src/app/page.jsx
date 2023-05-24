'use client'

import { useForm, Controller } from "react-hook-form";

import Input from '../components/Input'

export default function Home({children}) {
  const { register, handleSubmit, formState, control } = useForm()

  console.log(formState)

  const onSubmit = (data) => {
    console.log(data)
  }

  const renderAgeField = ({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => {
    return (
      <input
        type="number"
        placeholder="Age"
        className="text-black"
        value={value}
        onChange={onChange}
        ref={ref}
        />
    )
  }

  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col w-2/4">
        <h2 className="mb-4 text-xl">Create user</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          <Input
            type="text"
            placeholder="First name"
            {...register("firstName", {
              required: true,
            })}
            errors={formState.errors}
            />
          <Input
            type="text"
            placeholder="Last name"
            {...register("lastName", {
              required: true,
            })}
            errors={formState.errors}
            />
          <Input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
            errors={formState.errors}
            />
          <Controller
            name="age"
            control={control}
            defaultValue={''}
            render={renderAgeField}
            />
          <input type="submit" className="bg-blue-800 w-40 p-2 rounded shadow cursor-pointer" />
        </form>
      </div>
    </div>
  )
}
