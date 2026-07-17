import { supabase } from "../supabase";

// Register
export async function registerUser({
  email,
    password,
      username,
        fullName,
        }) {
          const { data, error } = await supabase.auth.signUp({
              email,
                  password,

                      options: {
                            data: {
                                    username,
                                            full_name: fullName,
                                                  },
                                                      },
                                                        });

                                                          if (error) throw error;

                                                            return data;
                                                            }

                                                            // Login
                                                            export async function loginUser(email, password) {
                                                              const { data, error } =
                                                                  await supabase.auth.signInWithPassword({
                                                                        email,
                                                                              password,
                                                                                  });

                                                                                    if (error) throw error;

                                                                                      return data;
                                                                                      }

                                                                                      // Logout
                                                                                      export async function logoutUser() {
                                                                                        const { error } = await supabase.auth.signOut();

                                                                                          if (error) throw error;
                                                                                          }

                                                                                          // Current User
                                                                                          export async function getCurrentUser() {
                                                                                            const {
                                                                                                data: { user },
                                                                                                  } = await supabase.auth.getUser();

                                                                                                    return user;
                                                                                                    }