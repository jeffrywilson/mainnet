import Layout from "components/layout/Layout";
import Tabs from "../components/Tabs";
import BorrowTab from "../components/borrow/BorrowTab";
import PaybackTab from "../components/payback/PaybackTab";
import { useState } from "react";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "BORROW",
    index: 1,
    Component: BorrowTab
  },
  {
    label: "PAYBACK",
    index: 2,
    Component: PaybackTab
  }
];

export default function Borrow() {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  
  return (
    <Layout>
      <div className="relative min-h-screen mt-20">
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </Layout>
  );
}