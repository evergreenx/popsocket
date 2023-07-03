import { HeadlessListInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "src/authProvider";

import { Authenticated } from "@components/auth";

export default function CategoryList() {
  return;

  <Authenticated>
    <HeadlessListInferencer />
  </Authenticated>;
}
