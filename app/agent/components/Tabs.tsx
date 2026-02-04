"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  {
    id: "basic-settings",
    label: "Basic Settings",
  },
  {
    id: "description",
    label: "Description",
  },
  {
    id: "call-objectives",
    label: "Call Objectives",
  },
  {
    id: "introduction-sentence",
    label: "Introduction Sentence",
  },
  {
    id: "package-information",
    label: "Package Information",
  },
  {
    id: "test-call",
    label: "Test Call",
  },
];

export function TabsLine() {
  const handleTabClick = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Tabs defaultValue={TABS[0].id} className="border-b-2">
      <TabsList
        variant="line"
        className=" flex
    w-full
    overflow-x-auto
    overflow-y-hidden
    whitespace-nowrap
    scrollbar-hide-x-auto"
      >
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="cursor-pointer"
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
