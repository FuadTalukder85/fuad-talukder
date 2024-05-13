import { Inputs } from "@/app/contact/page";

export const addContacts = async (data: Inputs) => {
  const res = await fetch(`https://fuad.onrender.com/create-contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const contactInfo = await res.json();
  return contactInfo;
};
