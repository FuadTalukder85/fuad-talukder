import { Inputs } from "@/component/blogs/BlogForm";

export const addBlogs = async (data: Inputs, content: string) => {
  const res = await fetch(`http://localhost:5000/create-blog`, {
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
