import { HeadlessListInferencer } from "@refinedev/inferencer/headless";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "src/authProvider";

// import { useIsAuthenticated, useGo } from "@refinedev/core";

import { Authenticated } from "@components/auth";

export default function Home() {
  // const { isLoading, data } = useIsAuthenticated();

  return (
    <Authenticated>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
        obcaecati qui nobis eaque repellendus, ab eius quam perferendis natus
        quidem dolores possimus reiciendis enim dolore. Commodi deserunt atque
        labore nam.
      </h1>

      <HeadlessListInferencer />
    </Authenticated>
  );
}

Home.noLayout = false;
