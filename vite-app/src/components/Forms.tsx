import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm(); //destructure of form element

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    /*<form onSubmit={handleSubmit((data) => console.log(data))}>*/
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default Form;
