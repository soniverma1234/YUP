import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
// import Swal from "sweetalert2";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(form);

      console.log(form);
      toast.success("Form submitted successfully!");

    //    Swal.fire({
    //     title: "Success!",
    //     text: "Your form has been submitted.",
    //     icon: "success",
    //     confirmButtonText: "OK",
    //   });
setForm({
  name: "",
  email: "",
  password: "",
});
    } catch (error) {
         toast.error(error.message);

    //       Swal.fire({
    //     title: "Error!",
    //     text: error.message,
    //     icon: "error",
    //     confirmButtonText: "OK",
    //   });

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-5">
          Registration Form
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          required
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 outline-none "
        />

        <input
          type="email"
          required
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 outline-none "
        />

        <input
          type="password"
          required
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 outline-none "
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;