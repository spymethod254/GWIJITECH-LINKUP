import { useEffect, useState } from "react";

import { getCurrentUser } from "../services/sessionService";
import { getProfile } from "../services/profileService";

export default function useProfile() {
  const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
          async function loadProfile() {
                try {
                        const user = await getCurrentUser();

                                if (!user) {
                                          setLoading(false);
                                                    return;
                                                            }

                                                                    const data = await getProfile(user.id);

                                                                            setProfile(data);
                                                                                  } catch (error) {
                                                                                          console.error(error);
                                                                                                } finally {
                                                                                                        setLoading(false);
                                                                                                              }
                                                                                                                  }

                                                                                                                      loadProfile();
                                                                                                                        }, []);

                                                                                                                          return {
                                                                                                                              profile,
                                                                                                                                  loading,
                                                                                                                                    };
                                                                                                                                    }