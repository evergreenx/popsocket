import { HeadlessListInferencer } from "@refinedev/inferencer/headless";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "src/authProvider";

export default function Home() {
  return (

    <>
    <h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
      obcaecati qui nobis eaque repellendus, ab eius quam perferendis natus
      quidem dolores possimus reiciendis enim dolore. Commodi deserunt atque
      labore nam.
    </h1>


<HeadlessListInferencer />
  </>
  );
}

Home.noLayout = false;


export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (!authenticated) {
    return {
      props: {
        ...translateProps,
      },
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent("/")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};