import { useFormik } from "formik";
import * as Yup from "yup";

const BasicDetails = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      contact: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number().min(0, "Invalid age").required("Age is required"),
      contact: Yup.string()
        .matches(/^[0-9]+$/, "Contact must be a number")
        .required("Contact is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="input"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className="input"
        />
        {formik.touched.age && formik.errors.age ? (
          <div className="text-red-500">{formik.errors.age}</div>
        ) : null}
      </div>
      <div>
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contact}
          className="input"
        />
        {formik.touched.contact && formik.errors.contact ? (
          <div className="text-red-500">{formik.errors.contact}</div>
        ) : null}
      </div>
      <button type="submit" className="btn">Save</button>
    </form>
  );
};

export default BasicDetails;
