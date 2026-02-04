"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "./ui/Logo";

// This is sample data.
const data = {
  aiCallAgent: [
    {
      name: "Agents",
      url: "/agent",
      icon: Frame,
    },
    {
      name: "Customer List",
      url: "/customer",
      icon: PieChart,
    },
    {
      name: "Campaigns",
      url: "#",
      icon: Map,
    },
    {
      name: "Recordings",
      url: "#",
      icon: PieChart,
    },
  ],
  phoneSetup: [
    { name: "PBX Setup", url: "#", icon: Settings2 },
    { name: "Extensions", url: "#", icon: Command },
    { name: "IVR Menus", url: "#", icon: Bot },
  ],
  whatsappMarketing: [
    { name: "WhatsApp Campaigns", url: "#", icon: GalleryVerticalEnd },
    { name: "Connected Numbers", url: "#", icon: BookOpen },
  ],
  general: [
    { name: "Settings", url: "#", icon: SquareTerminal },
    { name: "Support", url: "#", icon: AudioWaveform },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.aiCallAgent} label="AI Call Agent" />
        <NavMain items={data.phoneSetup} label="Phone Setup" />
        <NavMain items={data.whatsappMarketing} label="WhatsApp Marketing" />
        <NavMain items={data.general} label="General" />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail /> */}
      <SidebarRail />
    </Sidebar>
  );
}
