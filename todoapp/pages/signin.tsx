import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

type Inputs = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function signup() {
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmitSignUp: SubmitHandler<Inputs> = async ({
    email,
    password,
    passwordConfirm,
  }) => {
    console.log(email);
    if (password === passwordConfirm) {
      console.log(password);
      // import signup hook here...
      await signUp(email, password);
    }
  };

  const onSubmitLogin: SubmitHandler<Inputs> = async ({
    email,
    password,
    passwordConfirm,
  }) => {
    console.log(email);
    if (password === passwordConfirm) {
      console.log(password);
      // import signup hook here...
      await signUp(email, password);
    }
  };

  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          {/* remove border class from input to  update design */}
          <div>
            <label>Email</label>
            <input
              className="border"
              type="text"
              {...register("email", { required: true })}
            />
            {errors.email && <p>Email is required.</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              className="border"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Password is required.</p>}
          </div>
          <button className="border" type="submit">
            Login
          </button>
        </form>
      </div>

      {/*  */}
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmitSignUp)}>
          {/* remove border class from input to  update design */}
          <div>
            <label>Email</label>
            <input
              className="border"
              type="text"
              {...register("email", { required: true })}
            />
            {errors.email && <p>Email is required.</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              className="border"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Password is required.</p>}
          </div>
          <div>
            <label>Password Confirm</label>
            <input
              className="border"
              type="password"
              required
              {...register("passwordConfirm", { required: true })}
            />
            {errors.passwordConfirm && <p>Retype password is required.</p>}
          </div>
          <button className="border" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
