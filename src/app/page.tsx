import { Company } from "@/types/companyTypes";
import { env } from "@/utils/env";
import Link from "next/link";

const Home = async () => {

  const userCompanyInfoRequest = await fetch("https://epsilon.6sense.com/v3/company/details", {
    headers: {
      'Authorization': env.EPSILON6SENSE_API_KEY
    }
  })

  const userCompanyInfo: Company = await userCompanyInfoRequest.json()

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
     <h1>What they know about you</h1>
     <section className="flex flex-col">
      <h2>Where you work</h2>
      <small className="ml-auto">confidence {userCompanyInfo.confidence}</small>
      <ul>
        <li><Link href={"https://" + userCompanyInfo.company.domain}>{userCompanyInfo.company.name}</Link> | {userCompanyInfo.company.industry} company</li>
        <li>{userCompanyInfo.company.address}</li>
        <li>{userCompanyInfo.company.city}, {userCompanyInfo.company.state} {userCompanyInfo.company.zip}</li>
        <li>{userCompanyInfo.company.country}</li>
        <li>{userCompanyInfo.company.phone}</li>
      </ul>
     </section>
    </main>
  );
}

export default Home;
