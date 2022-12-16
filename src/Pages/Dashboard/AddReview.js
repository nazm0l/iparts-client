import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.ratings < "0" || data.ratings > "5") {
      return toast("Input valid ratings");
    }
    fetch("https://iparts-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Review added");
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-5">Add Reviews</h1>
      <form
        className="flex flex-col px-5  lg:w-3/6 mx-auto mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" font-bold mb-1 p-3 rounded bg-cyan-100"
          name="ratings"
          placeholder="Ratings"
          {...register("ratings")}
          required
        />
        <textarea
          className="font-bold mb-1 p-3 rounded bg-cyan-100"
          name="description"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2 w-50 mx-auto bg-primary mt-2 px-4 py-2 rounded text-large font-semibold cursor-pointer text-white add-product"
          type="submit"
          value="Add reviews"
        />
      </form>
    </div>
  );
};

export default AddReview;
