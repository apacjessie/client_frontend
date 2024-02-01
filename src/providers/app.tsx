import { MenuProvider } from "@/hooks/useMenu";
import { ReactNode } from "react";
import { BrowserRouter as RouterProvider } from "react-router-dom";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <RouterProvider>
      <MenuProvider>{children}</MenuProvider>
    </RouterProvider>
  );
};

export default AppProviders;
