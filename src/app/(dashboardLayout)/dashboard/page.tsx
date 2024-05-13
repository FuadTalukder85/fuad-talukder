"use client";
import ContactCard from "@/component/contactCard/ContactCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Dasgboard = () => {
  const [allContacts, setAllContacts] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:5000/contact`);
    const data = await res.json();
    setAllContacts(data);
  };

  useEffect(() => {
    const fetchDataAndRepeat = async () => {
      await fetchData();
      setTimeout(fetchDataAndRepeat, 5000);
    };

    fetchDataAndRepeat();

    return () => clearTimeout("");
  }, []);

  return (
    <div className="p-10">
      <div className="flex gap-3 md:gap-10">
        <Link href="/dashboard/addSkill">
          <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
            Add Skill
          </button>
        </Link>
        <Link href="/dashboard/addProject">
          <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
            Add Project
          </button>
        </Link>
        <Link href="/dashboard/all-skills">
          <button className="text-white mt-10 flex items-center gap-3 border-b border-red-500 hover:border-white hover:text-red-500 transition-all px-6 py-2 rounded-lg">
            View all skill
          </button>
        </Link>
      </div>
      <div>
        <button className="text-white text-xl mt-10">All Contacts :</button>
        {allContacts ? (
          <ContactCard allContacts={allContacts} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dasgboard;
