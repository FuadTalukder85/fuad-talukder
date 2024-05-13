import { Inputs } from "@/app/contact/page";
import React from "react";

const ContactCard = ({ allContacts }: { allContacts: Inputs[] }) => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 gap-5">
        {allContacts.map((contact) => (
          <div key={contact._id} className="border-r-2 border-red-500 p-5">
            <div>
              <h1 className="text-white font-bold">
                Name :{" "}
                <span className="text-white text-sm ps-3">{contact.name}</span>
              </h1>
              <h1 className="text-white font-bold">
                Subject :{" "}
                <span className="text-white text-sm ps-3">
                  {contact.subject}
                </span>
              </h1>
              <h1 className="text-white font-bold">
                Email :{" "}
                <span className="text-white text-sm ps-3">{contact.email}</span>
              </h1>

              <h1 className="text-white font-bold">
                Message :{" "}
                <span className="text-white text-sm ps-3">
                  {contact.message}
                </span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
