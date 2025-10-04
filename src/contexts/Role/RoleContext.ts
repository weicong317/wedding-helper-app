import { createContext } from "react";

export type RoleContextType = {
  value: string;
};

export const RoleContext = createContext<RoleContextType | null>(null);
