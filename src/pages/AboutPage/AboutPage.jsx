import React, { useState } from "react";
import { aboutTabs } from "../AboutPage/data/aboutTabs";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { key: "story", label: "Story" },
    { key: "mission", label: "Mission" },
    { key: "success", label: "Success" },
    { key: "terms", label: "Terms & Others" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        About Us
      </h1>
      <p className="text-gray-600 max-w-2xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6 mt-10 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 text-lg font-medium transition 
              ${activeTab === tab.key
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-800"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div key={activeTab} className="mt-8 text-gray-700 leading-relaxed animate-fade">
        {aboutTabs[activeTab]}
      </div>
    </div>
  );
}
