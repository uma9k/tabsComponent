import React, { useState } from "react";
import { tabs, getStructuredTabs } from "./helpers/tab";

const Tabs = () => {
  const tabsData = getStructuredTabs(tabs);
  const [selectedTab, setSelectedTab] = useState("tab 1");
  return (
    <div>
      <div className="tabs-container">
        {Object.keys(tabsData).map((tabName) => (
          <div
            className={`tabs-header-block ${
              tabName === selectedTab ? "selected-tab" : ""
            }`}
            onClick={() => setSelectedTab(tabName)}
          >
            {tabName.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="tabs-content-block">{tabsData[selectedTab]}</div>
    </div>
  );
};

export default Tabs;
