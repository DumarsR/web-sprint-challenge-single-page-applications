import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2,"Must be at least 2 characters")
      .required("Must include a name"),
  });

export default formSchema;