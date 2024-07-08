import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";
import useAuthStore from "@/store/userAuthStore";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { FaGenderless } from "react-icons/fa6";

function UserData() {
  const { user } = useAuthStore();
  const [profileInfo, setProfileInfo] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [uhid, setUhid] = useState(null);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      if (user) {
        try {
          const getUserData = await getDocs(collection(db, "profiles"));
          const allUsersData = getUserData.docs.map((doc) => ({
            ...doc.data(),
          }));

          const userUid = user.uid;
          const emailId = user.email;

          const userUhid = userUid.slice(0, 6).toUpperCase();

          const filterUser = allUsersData.filter(
            (currUser) => currUser.uid === userUid
          );

          setUhid(userUhid);
          setProfileInfo(filterUser[0] || null);

          setUserEmail(emailId);
        } catch (error) {
          console.error("Error fetching user data: ", error.message);
        }
      }
    };

    fetchDataFromFirestore();
  }, [user]);

  const renderGenderIcon = (gender) => {
    switch (gender) {
      case "male":
        return <BsGenderMale />;
      case "female":
        return <BsGenderFemale />;
      case "other":
        return <FaGenderless />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-custom-gradient w-full rounded-3xl flex flex-col p-8">
      <Link href="/">
        <div className="flex">
          <span className="text-left p-3 border-[1px] border-gray-300 rounded-full text-2xl bg-white bg-opacity-20">
            <IoIosArrowBack />
          </span>
        </div>
      </Link>
      <div className="justify-center items-center flex flex-col gap-5">
        <h1 className="text-3xl text-white font-bold">{`${profileInfo?.formData.firstName} ${profileInfo?.formData.lastName}`}</h1>
        <span className="border-4 border-blue-900 w-44 h-44 rounded-full overflow-hidden">
          <img
            className=""
            src="https://www.businessnetworks.com/sites/default/files/default_images/default-avatar.png"
            alt="avatar"
          />
        </span>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaRegEye />
          <p className="">View Profile</p>
        </div>

        <div className="w-full flex flex-col justify-center gap-3 items-center text-xs">
          <p className="flex items-center gap-3 border-[1px] p-3 w-2/5 rounded-md bg-white bg-opacity-20 border-white">
            <BsPerson /> <span>{uhid}</span>
          </p>
          <p className="flex items-center gap-3 border-[1px] p-3 w-2/5 rounded-md bg-white bg-opacity-20 border-white">
            <MdOutlineMailOutline /> <span>{userEmail}</span>
          </p>
          <p className="flex items-center gap-3 border-[1px] p-3 w-2/5 rounded-md bg-white bg-opacity-20 border-white">
            {renderGenderIcon(profileInfo?.formData.gender)}
            <span>{profileInfo?.formData.gender}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserData;
