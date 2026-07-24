import { supabase } from "../supabase";

// Get all posts
export async function getPosts() {
      const { data, error } = await supabase
          .from("posts")
              .select("*")
                  .order("created_at", { ascending: false });

                    if (error) {
                            console.error("Error fetching posts:", error.message);
                                return [];
                    }

                      return data;
                }

// Get logged-in user's posts
export async function getMyPosts(userId) {
  const { data, error } = await supabase
    .from("posts")
    .select(`
      *,
      profiles (
        username,
        full_name,
        is_verified
      )
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}

                // Create a new post
                export async function createPost(content) {
                      if (!content.trim()) {
                            return {
                                      success: false,
                                            error: "Post cannot be empty.",
                            };
                        }

                          const { data, error } = await supabase
                              .from("posts")
                                  .insert([
                                          {
                                                    content,
                                          },
                                        ])
                                            .select();

                                              if (error) {
                                                    console.error("Error creating post:", error.message);

                                                        return {
                                                                  success: false,
                                                                        error: error.message,
                                                        };
                                                    }

                                                      return {
                                                            success: true,
                                                                data,
                                                      };
                                                    }

                                                    // Delete a post
                                                    export async function deletePost(id) {
                                                          const { error } = await supabase
                                                              .from("posts")
                                                                  .delete()
                                                                      .eq("id", id);

                                                                        if (error) {
                                                                                console.error("Error deleting post:", error.message);
                                                                                    return false;
                                                                        }

                                                                          return true;
                                                                    }