import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ResetPass = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
      const { register, handleSubmit } = useForm();
    
      const onSubmit =async (data) => {
        const email = data.email;
        await sendPasswordResetEmail(email);
        toast.success('Reset mail sent');
      }
    
      let errorMessage;
      if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
      }

    return (
        <div>
        <h1 className='text-center text-3xl font-bold mt-5'>Add Reviews</h1>
        <form className='flex flex-col px-5  lg:w-3/6 mx-auto mt-6' onSubmit={handleSubmit(onSubmit)}>
            <input className=' font-bold mb-1 p-3 rounded bg-cyan-100' name='email' placeholder='Enter your email' {...register("email")} required/>
            {errorMessage}
            <input className='mb-2 w-50 mx-auto bg-primary mt-2 px-4 py-2 rounded text-large font-semibold cursor-pointer text-white add-product' type="submit" value="Reset" />
        </form>
    </div>
    );
};

export default ResetPass;