import { FieldValues, useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//using z we can define shape of schema//
const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) }); //destructure of form element and useForm should have interface or type of form

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
        {errors.name && (
          <p className="alert alert-warning">{errors.name.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && (
            <p className="alert alert-warning">{errors.age.message}</p>
          )}
        </div>
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;
