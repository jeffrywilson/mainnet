import Layout from "components/layout/Layout";
import Tabs from "../components/Tabs";
import ExchangeTab from "../components/exchange/ExchangeTab";
import { useState } from "react";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "EXCHANGE",
    index: 1,
    Component: ExchangeTab
  }
];

export default function Exchange() {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  
  return (
    <Layout>
      <div className="relative min-h-screen mt-20">
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </Layout>
  );
}