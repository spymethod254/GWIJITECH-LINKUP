import { z } from "zod";

export const registerSchema = z.object({
  username: z
      .string()
          .min(3, "Username must be at least 3 characters")
              .max(20, "Username is too long"),

                fullName: z
                    .string()
                        .min(3, "Full name is required"),

                          email: z
                              .string()
                                  .email("Please enter a valid email"),

                                    password: z
                                        .string()
                                            .min(6, "Password must be at least 6 characters"),
                                            });