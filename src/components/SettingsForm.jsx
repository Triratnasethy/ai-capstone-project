import React, { useState } from "react";
import { User, Bell, Lock, Palette, Check } from "lucide-react";

const initialSettings = {
  displayName: "",
  email: "",
  bio: "",
  emailNotifs: true,
  pushNotifs: false,
  weeklyDigest: true,
  theme: "system",
  twoFactor: false,
};

const SECTIONS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "security", label: "Security", icon: Lock },
];

function Toggle({ checked, onChange, label, description }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-medium text-slate-800">{label}</p>
        {description && (
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative shrink-0 w-11 h-6 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600 ${
          checked ? "bg-teal-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export default function SettingsForm() {
  const [settings, setSettings] = useState(initialSettings);
  const [active, setActive] = useState("profile");
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key, value) => {
    setSettings((s) => ({ ...s, [key]: value }));
    setSaved(false);
  };

  const validate = () => {
    const next = {};
    if (!settings.displayName.trim()) next.displayName = "Enter a display name.";
    if (!/^\S+@\S+\.\S+$/.test(settings.email)) next.email = "Enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200 px-6 py-5">
          <h1 className="text-lg font-semibold text-slate-900">Settings</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Manage your profile, notifications, and account preferences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row">
          {/* Nav */}
          <nav className="sm:w-48 shrink-0 border-b sm:border-b-0 sm:border-r border-slate-200 px-3 py-3 sm:py-4">
            <ul className="flex sm:flex-col gap-1 overflow-x-auto">
              {SECTIONS.map(({ id, label, icon: Icon }) => (
                <li key={id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActive(id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                      active === id
                        ? "bg-teal-50 text-teal-700"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <form onSubmit={handleSubmit} className="flex-1 px-6 py-5">
            {active === "profile" && (
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-4">
                  Profile
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Display name
                    </label>
                    <input
                      type="text"
                      value={settings.displayName}
                      onChange={(e) => update("displayName", e.target.value)}
                      placeholder="e.g. Triratna Sahu"
                      className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                        errors.displayName ? "border-red-400" : "border-slate-300"
                      }`}
                    />
                    {errors.displayName && (
                      <p className="text-xs text-red-600 mt-1">{errors.displayName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                        errors.email ? "border-red-400" : "border-slate-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      rows={3}
                      value={settings.bio}
                      onChange={(e) => update("bio", e.target.value)}
                      placeholder="A short line about yourself"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {active === "notifications" && (
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-2">
                  Notifications
                </h2>
                <div className="divide-y divide-slate-100">
                  <Toggle
                    label="Email notifications"
                    description="Get updates about your account by email."
                    checked={settings.emailNotifs}
                    onChange={(v) => update("emailNotifs", v)}
                  />
                  <Toggle
                    label="Push notifications"
                    description="Get real-time alerts on this device."
                    checked={settings.pushNotifs}
                    onChange={(v) => update("pushNotifs", v)}
                  />
                  <Toggle
                    label="Weekly digest"
                    description="A summary of activity, sent every Monday."
                    checked={settings.weeklyDigest}
                    onChange={(v) => update("weeklyDigest", v)}
                  />
                </div>
              </div>
            )}

            {active === "appearance" && (
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-4">
                  Appearance
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {["light", "dark", "system"].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => update("theme", mode)}
                      className={`rounded-lg border px-3 py-3 text-sm font-medium capitalize transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                        settings.theme === mode
                          ? "border-teal-600 bg-teal-50 text-teal-700"
                          : "border-slate-300 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {active === "security" && (
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-2">
                  Security
                </h2>
                <div className="divide-y divide-slate-100">
                  <Toggle
                    label="Two-factor authentication"
                    description="Require a code from your phone at sign-in."
                    checked={settings.twoFactor}
                    onChange={(v) => update("twoFactor", v)}
                  />
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              {saved && (
                <span className="flex items-center gap-1 text-sm text-teal-700">
                  <Check size={16} /> Saved
                </span>
              )}
              <button
                type="submit"
                className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}