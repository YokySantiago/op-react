'use client'

import { useForm } from "react-hook-form";

import Input from '../components/Input'

export default function Home({children}) {
  const { register, handleSubmit, formState } = useForm()

  console.log(formState)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Input
          type="text"
          placeholder="First name"
          className="text-black"
          {...register("firstName", {
            required: true,
          })}
          errors={formState.errors}
          />
        <Input
          type="text"
          placeholder="Last name"
          className="text-black"
          {...register("lastName", {
            required: true,
          })}
          errors={formState.errors}
          />
        <Input
          type="text"
          placeholder="Email"
          className="text-black"
          {...register("email", {
            required: true,
          })}
          errors={formState.errors}
          />
        <input type="submit" />
      </form>
    </div>
  )
}
