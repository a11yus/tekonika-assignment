import { useState } from "react";
import BasicDetails from "./Step1/BasicDetails";
import LegalDocuments from "./Step1/LegalDocuments";
import Demographics from "./Step1/Demographics";

export default function MultiStepForm() {
  const [activeTab, setActiveTab] = useState("basic");
  return (
    <div className=" bg-[#f4f2f0]">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Register a new patient
        </h1>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <div className="flex items-center border px-4 py-1 rounded-full bg-[#848e5d]">
              <div className="bg-[#575f4a] rounded-full h-4 w-4 flex items-center justify-center text-white p-3 text-sm font-light">
                1
              </div>
              <span className="ml-2 text-white font-light">
                Patient Details
              </span>
            </div>
            <div className="w-16 h-[2px] bg-gray-300 mx-2"></div>
            <div className="flex items-center border px-4 py-1 rounded-full">
              <div className="bg-gray-200 rounded-full h-4 w-4 flex items-center justify-center text-gray-500 p-3 font-light">
                2
              </div>
              <span className="ml-2 text-gray-500 font-light">
                Assign Resources
              </span>
            </div>
            <div className="w-16 h-[2px] bg-gray-300 mx-2"></div>
            <div className="flex items-center border px-4 py-1 rounded-full">
              <div className="bg-gray-200 rounded-full h-4 w-4 flex items-center justify-center text-gray-500 p-3 font-light">
                3
              </div>
              <span className="ml-2 text-gray-500 font-light">
                Doctor Test Report
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8">
          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b">
            <button
              className={`px-6 py-3 ${
                activeTab === "basic"
                  ? "border-b-2 border-sage-600 text-sage-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("basic")}
            >
              Basic Details
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "legal"
                  ? "border-b-2 border-sage-600 text-sage-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("legal")}
            >
              Legal Documents
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "demographics"
                  ? "border-b-2 border-sage-600 text-sage-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("demographics")}
            >
              Demographics
            </button>
          </div>

          {activeTab === "basic" ? (
            <BasicDetails />
          ) : activeTab === "legal" ? (
            <LegalDocuments />
          ) : (
            <Demographics />
          )}
        </div>
      </main>
    </div>
  );
}
