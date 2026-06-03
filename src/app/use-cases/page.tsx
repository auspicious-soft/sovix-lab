
import UseCasesPage from "@/components/UseCases/UseCasesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Use Cases for Insurance: Underwriting, Claims & Compliance",
  description: "See how Sovix Labs automates insurance inspection reports, underwriting triage, claims review & compliance queries. All running inside your environment.",
};
const Page = () => {

  return (
    <>
    <UseCasesPage />
     
    </>
  );
};

export default Page;
