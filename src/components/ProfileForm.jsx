"use client";

import React, { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/userAuthStore";

function ProfileForm({ setToggleForm }) {
  const router = useRouter();
  const { user } = useAuthStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
  });

  // update formdata state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addDataToFireStore = async () => {
    try {
      await addDoc(collection(db, "profiles"), { uid: user.uid, formData });

      return true;
    } catch (error) {
      console.error("Error adding document: ", error.message);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const added = await addDataToFireStore();
    if (added) {
      router.push("/profile");
      setToggleForm(false);
      setFormData({
        firstName: "",
        lastName: "",
        gender: "male",
      });
    }
  };

  return (
    <div>
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <h1> Please enter your basic details</h1>
        <div className="my-4 bg-white w-full rounded-lg p-6">
          {/* firstName */}
          <div>
            <label htmlFor="firstName" className="block mb-2">
              First Name*
            </label>
            <input
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
              id="firstName"
              type="text"
              required
              className="w-full border-0 border-b-[1px] p-2 outline-none shadow-transparent active:outline-none focus:outline-none	"
            />
          </div>

          {/* lastname */}
          <div className="mt-5">
            <label htmlFor="lastName" className="block mb-2">
              Last Name*
            </label>
            <input
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
              id="lastName"
              type="text"
              required
              className="w-full border-0 border-b-[1px] p-2 outline-none shadow-transparent active:outline-none focus:outline-none	"
            />
          </div>

          {/* gender */}
          <div className="mt-5">
            <label for="gender" className="block mb-2">
              Gender*
            </label>

            <select
              onChange={handleChange}
              value={formData.gender}
              name="gender"
              id="gender"
              className="w-full border-0 border-b-[1px] p-2 outline-none shadow-transparent active:outline-none focus:outline-none	"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <Button
          type="submit"
          className=" flex items-center gap-3 p-6 bg-custom-gradient mt-8"
        >
          <span>Next</span>
          <FaArrowRight />
        </Button>
      </form>
    </div>
  );
}

export default ProfileForm;
