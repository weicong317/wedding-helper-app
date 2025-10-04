import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App.tsx";
import { I18nProvider } from "@/contexts/I18n/I18nProvider";
import { RoleProvider } from "@/contexts/Role/RoleProvider";
import "@/i18n";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <RoleProvider>
        <App />
      </RoleProvider>
    </I18nProvider>
  </StrictMode>,
);
