import { Authenticated } from "@components/auth";
import { AuthPage } from "@refinedev/core";

import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { authProvider } from "src/authProvider";

export default function Login() {
  return (
    // <Authenticated>
      <AuthPage
        type="login"
        providers={[
          {
            name: "google",
            label: "Sign in with x Google",
          },
        ]}
      />
    // </Authenticated>
  );
}

Login.noLayout = true;
