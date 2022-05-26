import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {


    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/user/${email}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                toast.success('Success')
            })
        }
            
    };

    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-5'>Update Your Profile</h1>
            <form className='flex flex-col px-5  lg:w-3/6 mx-auto mt-6' onSubmit={handleSubmit(onSubmit)}>
                <input className='font-bold mb-1 p-3 rounded bg-cyan-100' name='name' placeholder='Name' {...register("name")} required/>
                <input className='font-bold mb-1 p-3 rounded bg-cyan-100' name='occupation' placeholder='Occupation' {...register("occupation")} required/>
                <input className='font-bold mb-1 p-3 rounded bg-cyan-100' name='number' placeholder='Phone Number' {...register("number")} required/>
                <input className='font-bold mb-1 p-3 rounded bg-cyan-100' name='address' placeholder='Address' {...register("address")} required/>
                <textarea className='font-bold mb-1 p-3 rounded bg-cyan-100'
                    name='description' placeholder='About yourself' {...register("description")} />
                <input className='mb-2 w-50 mx-auto bg-primary mt-2 px-4 py-2 rounded text-large font-semibold cursor-pointer text-white add-product' type="submit" value="Update profile" />
            </form>
        </div>
    );
};

export default MyProfile;