import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddParts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://iparts-server.vercel.app/parts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Parts added");
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-5">Add New Parts</h1>
      <form
        className="flex flex-col px-5  lg:w-3/6 mx-auto mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" font-bold mb-1 p-3 rounded  bg-cyan-100"
          name="picture"
          placeholder="Photo Url"
          type="text"
          {...register("picture")}
          required
        />
        <input
          className=" font-bold mb-1 p-3 rounded bg-cyan-100"
          name="name"
          placeholder="Product Name"
          {...register("name")}
          required
        />
        <textarea
          className="font-bold mb-1 p-3 rounded bg-cyan-100"
          name="description"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="font-bold mb-1 p-3 rounded bg-cyan-100"
          name="price"
          placeholder="price"
          type="number"
          {...register("price")}
          required
        />
        <input
          className="font-bold mb-1 p-3 rounded bg-cyan-100"
          name="minimumQuantity"
          placeholder="Minimum Order"
          type="number"
          {...register("minimumQuantity")}
          required
        />
        <input
          className="font-bold mb-1 p-3 rounded bg-cyan-100"
          name="availableQuantity"
          placeholder="Quantity"
          type="number"
          {...register("availableQuantity")}
          required
        />
        <input
          className="mb-2 w-50 mx-auto bg-primary mt-2 px-4 py-2 rounded text-large font-semibold cursor-pointer text-white add-product"
          type="submit"
          value="Add products"
        />
      </form>
    </div>
  );
};

export default AddParts;
