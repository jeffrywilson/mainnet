import Layout from "components/layout/Layout";
import Tabs from "../components/Tabs";
import Lending from "../components/lending/Lending";
import Stake from "../components/stake/Stake";
import Bond from "../components/bond/Bond";
import { useState } from "react";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Lend",
    index: 1,
    Component: Lending
  },
  {
    label: "Stake",
    index: 2,
    Component: Stake
  },
  {
    label: "Bond",
    index: 3,
    Component: Bond
  }
];


export default function Earn() {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  
  return (
    <Layout>
      <div className="relative min-h-screen">
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </Layout>
  );
}