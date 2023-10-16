import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Type your name..."
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="Example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />
      <Button classname="bg-blue-500 text-white w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
