import { Inputs } from "@/component/blogs/BlogForm";

export const addBlogs = async (data: Inputs, content: string) => {
  const res = await fetch(`https://fuad.onrender.com/create-blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, content }),
    cache: "no-store",
  });
  const blogInfo = await res.json();
  return blogInfo;
};
