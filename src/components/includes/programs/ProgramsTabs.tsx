"use client";

import Button from "@/components/general/Button";

interface ProgramsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProgramsTabs = ({ activeTab, setActiveTab }: ProgramsTabsProps) => {
  const tabs = [
    "All",
    "Musicals",
    "Theater Productions",
    "Festivals",
    "Film Screenings",
  ];

  return (
    <div className="text-sm md:text-base lg:text-lg font-normal md:font-medium grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 sm:gap-5 mt-10 mb-8 w-fit">
      {tabs.map((tab) => (
        <div key={tab} className="w-auto">
          <Button
            label={tab}
            outline={activeTab !== tab}
            onClick={() => setActiveTab(tab)}
            small
          />
        </div>
      ))}
    </div>
  );
};

export default ProgramsTabs;
