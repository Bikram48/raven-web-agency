import { createContext } from "react";

export const BlogContext = createContext();

export function BlogProvider({ children, value }) {
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
