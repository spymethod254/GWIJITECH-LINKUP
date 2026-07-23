import { supabase } from "../supabase";

// Get comments for a post
export async function getComments(postId) {
  const { data, error } = await supabase
      .from("comments")
          .select("*")
              .eq("post_id", postId)
                  .order("created_at", { ascending: true });

                    if (error) throw error;

                      return data;
                      }

                      // Add a comment
                      export async function addComment({
                        postId,
                          userId,
                            content,
                            }) {
                              const { data, error } = await supabase
                                  .from("comments")
                                      .insert([
                                            {
                                                    post_id: postId,
                                                            user_id: userId,
                                                                    content,
                                                                          },
                                                                              ])
                                                                                  .select();

                                                                                    if (error) throw error;

                                                                                      return data;
                                                                                      }
                                                                                      export async function deleteComment(id) {
                                                                                          const { error } = await supabase
                                                                                              .from("comments")
                                                                                                  .delete()
                                                                                                      .eq("id", id);

                                                                                                        if (error) throw error;
                                                                                      }