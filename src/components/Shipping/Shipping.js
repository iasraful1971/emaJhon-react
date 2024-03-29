import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();



    return (
        <div className="shipping">


    <form onSubmit={handleSubmit()}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>

        </div>
    );
};

export default Shipping;