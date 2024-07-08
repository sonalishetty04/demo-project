"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Separator } from "./ui/separator";
import useAuthStore from "@/store/userAuthStore";
import { Alert } from "./ui/alert";
import { useRouter } from "next/navigation";
import ProfileForm from "./ProfileForm";

function LoginForm({
  toggleForm,
  setToggleForm,
  loginForm,
  setLoginForm,
  showProfileForm,
  setShowProfileForm,
}) {
  const { user, signUp, logIn, init, error, clearError } = useAuthStore();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Initialize auth state listener
  useEffect(() => {
    init();
  }, [init]);

  // Clear error when switching between forms
  useEffect(() => {
    clearError();
  }, [loginForm]);

  // Navigate to profile page on successful login or signup
  useEffect(() => {
    if (user) {
      router.push("/profile");
      setToggleForm(false);
    }
  }, [user, router]);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    clearError();
    await signUp(email, password);

    setShowProfileForm(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    await logIn(email, password);
    router.push("/profile");
  };
  if (!toggleForm) return null;
  return (
    <div>
      {toggleForm ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 py-5">
          <div className="bg-gray-100 w-4/6 h-full flex rounded-md shadow-lg">
            <div className="w-1/2 h-full lg:block hidden">
              <img
                className="w-full h-full object-cover rounded-l-md"
                src="https://www.lifesonmanipal.com/_next/image?url=%2Fimages%2FauthImage.png&w=1920&q=75"
                alt="login"
              />
            </div>
            <div className=" w-full lg:w-1/2 p-5 relative ">
              <span
                className="absolute right-5 cursor-pointer text-xl"
                onClick={() => setToggleForm(false)}
              >
                <MdOutlineClose />
              </span>
              <div className=" p-10 flex flex-col justify-center">
                <h1 className="text-2xl font-medium text-gray-500 mb-4">
                  {loginForm ? "Hi there " : "Sign Up"}
                </h1>

                <h2 className="text-2xl mb-4">Welcome to Life’s On Manipal.</h2>

                <Separator />

                {/* user details form to render after signup */}

                {showProfileForm ? (
                  <div className="mt-8">
                    <ProfileForm uid={user.uid} />
                  </div>
                ) : loginForm ? (
                  <div className="mt-2">
                    {error ? (
                      <Alert className="text-red-700 text-center bg-red-50">
                        {error}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <form
                      className="w-full flex flex-col justify-center items-center"
                      onSubmit={handleLoginSubmit}
                    >
                      <div className="my-4 bg-white w-full rounded-lg p-6">
                        <label htmlFor="email" className="block mb-2">
                          Registered Email Address
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          type="email"
                          className="w-full border-0 border-b-[1px] p-2 outline-none shadow-transparent active:outline-none focus:outline-none"
                        />
                        <div className="mt-5">
                          <label htmlFor="password" className="block mb-2">
                            Enter Password
                          </label>
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            className="w-full border-0 border-b-[1px] p-2 shadow-transparent active:outline-none focus:outline-none"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="align-middle p-6 bg-blue-800 mt-8"
                      >
                        <span>Sign in with email</span>
                        <FaArrowRight className="ml-2" />
                      </Button>
                    </form>
                    <Separator className="mt-8" />
                    <p className="text-center mt-4">
                      Not registered with us?
                      <span
                        className="underline underline-offset-1 pl-1 cursor-pointer"
                        onClick={() => setLoginForm(false)}
                      >
                        Sign up.
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="mt-2">
                    {error ? (
                      <Alert className="text-red-700 text-center bg-red-50">
                        {error}
                      </Alert>
                    ) : (
                      ""
                    )}
                    <form
                      className="w-full flex flex-col justify-center items-center"
                      onSubmit={handleSignUpSubmit}
                    >
                      <div className="my-4 bg-white w-full rounded-lg p-6">
                        <label htmlFor="email" className="block mb-2">
                          Email Address
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          type="email"
                          className="w-full border-0 border-b-[1px] p-2 outline-none shadow-transparent active:outline-none focus:outline-none"
                        />
                        <div className="mt-5">
                          <label htmlFor="password" className="block mb-2">
                            Enter Password
                          </label>
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            className="w-full border-0 border-b-[1px] p-2 shadow-transparent active:outline-none focus:outline-none"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="align-middle p-6 bg-blue-800 mt-8"
                      >
                        <span>Sign up</span>
                        <FaArrowRight className="ml-2" />
                      </Button>
                    </form>
                    <Separator className="mt-8" />
                    <p className="text-center mt-4">
                      Already registered?
                      <span
                        className="underline underline-offset-1 pl-1 cursor-pointer"
                        onClick={() => setLoginForm(true)}
                      >
                        Sign in.
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LoginForm;
