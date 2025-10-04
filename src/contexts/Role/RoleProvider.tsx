import type { ReactNode } from "react";

import { queryRoleMapping } from "@/data/roles";

import { RoleContext } from "./RoleContext";
import type { RoleContextType } from "./RoleContext";

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = new URLSearchParams(window.location.search);

  const code = searchParams.get("code") ?? "";
  const mapped = queryRoleMapping[code] ?? "";

  const value: RoleContextType = {
    value: mapped,
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};
