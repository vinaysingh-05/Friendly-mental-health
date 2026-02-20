// pages/privacy-policy.tsx
import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-16">

      {/* -------------------- Hero Section -------------------- */}
      <section className="text-center py-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your mind. Your data. Your control.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Friends don't spy on each other. Here is exactly how we protect your privacy.
        </p>
      </section>

      {/* -------------------- Core Promises (2x2 Grid) -------------------- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center space-y-4">
          <div className="text-4xl">🙈</div>
          <h3 className="font-semibold text-lg">Zero Surveillance</h3>
          <p className="text-gray-600">
            We only collect what you share. No background tracking, no location data.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center space-y-4">
          <div className="text-4xl">👻</div>
          <h3 className="font-semibold text-lg">Anonymous Access</h3>
          <p className="text-gray-600">
            Use Quick Help without logging in. Get instant relief without giving up your identity.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center space-y-4">
          <div className="text-4xl">❤️</div>
          <h3 className="font-semibold text-lg">No Medical Labels</h3>
          <p className="text-gray-600">
            We track stress trends, not medical diagnoses. We are a logical friend, not a hospital.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center space-y-4">
          <div className="text-4xl">🏛️</div>
          <h3 className="font-semibold text-lg">Institutional Privacy</h3>
          <p className="text-gray-600">
            Colleges only see anonymous, group-level trends. Your personal identity is never shared.
          </p>
        </div>
      </section>

      {/* -------------------- Detailed Privacy Info Section -------------------- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
          <h3 className="font-semibold text-lg">Information We Collect</h3>
          <p className="text-gray-600">
            We collect only the data you voluntarily provide, such as your name, email, and messages you share. We also use anonymized usage analytics to improve Friendly's performance and features.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
          <h3 className="font-semibold text-lg">How We Use Your Data</h3>
          <p className="text-gray-600">
            Your data helps us personalize your experience, monitor stress trends, and improve the platform. We never use your information for advertising or third-party profiling.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
          <h3 className="font-semibold text-lg">Sharing & Third Parties</h3>
          <p className="text-gray-600">
            We do not sell your personal data. Any sharing is strictly anonymized and aggregated, for example when colleges view group-level trends. Third-party services we use (like hosting and analytics) are carefully selected and compliant with privacy standards.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
          <h3 className="font-semibold text-lg">Security Measures</h3>
          <p className="text-gray-600">
            All user data is encrypted in transit and at rest. Our servers are protected by industry-standard security protocols. You also have full control to delete your data anytime.
          </p>
        </div>
      </section>

      {/* -------------------- Empowerment Zone (Forget Me Button) -------------------- */}
      <section className="bg-red-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-gray-700 font-medium">
          Total User Control. You own your history.
        </p>
        <button className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition">
          Forget My Data
        </button>
      </section>

      {/* -------------------- Bottom Back to Home Button -------------------- */}
      <div className="text-center mt-8">
        <Link href="/">
          <button className="bg-blue-100 text-blue-700 font-medium px-6 py-2 rounded-lg shadow hover:bg-blue-200 transition">
            Back to Home
          </button>
        </Link>
      </div>

      {/* -------------------- Footer Disclaimer -------------------- */}
      <footer className="text-center text-gray-400 text-sm mt-6">
        Friendly is an early-warning system and a logical companion for mental refreshment. 
        It is not a replacement for professional therapy or medical crisis intervention.
      </footer>

    </div>
  );
}