import {
  IconCamera,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconReport,
  IconSettings,
} from "@tabler/icons-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar:
      "https://raw.githubusercontent.com/nesatkroper/img/refs/heads/main/phanunLogo.webp",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
  ],
  documents: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: IconReport,
    },
    {
      name: "Categories",
      url: "/categories",
      icon: IconDatabase,
    },
    {
      name: "Departments",
      url: "/departments",
      icon: IconFileWord,
    },
    {
      name: "Login",
      url: "/login",
      icon: IconFileWord,
    },
    {
      name: "Signup",
      url: "/signup",
      icon: IconFileWord,
    },
  ],
};
