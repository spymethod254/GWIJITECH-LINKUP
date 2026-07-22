import MainLayout from "../layouts/MainLayout";

import SettingItem from "../components/settings/SettingItem";

import {
  HiUserCircle,
    HiBell,
      HiShieldCheck,
        HiInformationCircle,
        } from "react-icons/hi2";

        function Settings() {
          return (
              <MainLayout>

                    <div className="space-y-6">

                            <h1 className="text-3xl font-bold">
                                      Settings ⚙️
                                              </h1>

                                                      <SettingItem
                                                                icon={<HiUserCircle />}
                                                                          title="Edit Profile"
                                                                                    description="Change your profile information."
                                                                                            />

                                                                                                    <SettingItem
                                                                                                              icon={<HiBell />}
                                                                                                                        title="Notifications"
                                                                                                                                  description="Manage notification preferences."
                                                                                                                                          />

                                                                                                                                                  <SettingItem
                                                                                                                                                            icon={<HiShieldCheck />}
                                                                                                                                                                      title="Privacy & Security"
                                                                                                                                                                                description="Control your account privacy."
                                                                                                                                                                                        />

                                                                                                                                                                                                <SettingItem
                                                                                                                                                                                                          icon={<HiInformationCircle />}
                                                                                                                                                                                                                    title="About LINKUP.HUB"
                                                                                                                                                                                                                              description="Version 1.0.0"
                                                                                                                                                                                                                                      />

                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                </MainLayout>
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  export default Settings;