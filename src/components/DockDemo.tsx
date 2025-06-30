import React, { useState } from "react";
import MacOSDock from "./ui/mac-os-dock";

// Sample app data with eSIM España themed icons
const sampleApps = [
  {
    id: "home",
    name: "Главная",
    icon: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: "tariffs",
    name: "Тарифы",
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: "spain",
    name: "Испания",
    icon: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: "esim",
    name: "eSIM",
    icon: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: "connection",
    name: "Подключение",
    icon: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: "support",
    name: "Поддержка",
    icon: "https://images.unsplash.com/photo-1543269664-647b37e4077e?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: "travel",
    name: "Путешествия",
    icon: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: "mobile",
    name: "Мобильная связь",
    icon: "https://images.unsplash.com/photo-1520923342367-c6c283c83b4c?w=200&h=200&fit=crop&crop=center",
  },
];

const DockDemo: React.FC = () => {
  const [openApps, setOpenApps] = useState<string[]>(["home", "tariffs"]);

  const handleAppClick = (appId: string) => {
    console.log("App clicked:", appId);

    // Toggle app in openApps array
    setOpenApps((prev) =>
      prev.includes(appId)
        ? prev.filter((id) => id !== appId)
        : [...prev, appId],
    );
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <MacOSDock
        apps={sampleApps}
        onAppClick={handleAppClick}
        openApps={openApps}
      />
    </div>
  );
};

export default DockDemo;
