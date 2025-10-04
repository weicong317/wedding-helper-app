import { useContext } from "react";

import { RoleContext } from "./RoleContext";

export const useRole = () => {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used inside <RoleProvider>");
  return ctx;
};
