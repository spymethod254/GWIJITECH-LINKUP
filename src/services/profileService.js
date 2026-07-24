import { supabase } from "../supabase";

export async function getProfile(userId) {
  const { data, error } = await supabase
      .from("profiles")
          .select("*")
              .eq("id", userId)
                  .single();

                    if (error) throw error;

                      return data;
                      }

                      export async function updateProfile(updates, userId) {
                        const { data, error } = await supabase
                            .from("profiles")
                                .update(updates)
                                    .eq("id", userId)
                                        .select()
                                            .single();

                                              if (error) throw error;

                                                return data;
                                                }

// Count user's posts
export async function getPostsCount(userId) {
  const { count, error } = await supabase
    .from("posts")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId);

  if (error) throw error;

  return count || 0;
}

// Count followers
export async function getFollowersCount(userId) {
  const { count, error } = await supabase
    .from("follows")
    .select("*", { count: "exact", head: true })
    .eq("following_id", userId);

  if (error) throw error;

  return count || 0;
}

// Count following
export async function getFollowingCount(userId) {
  const { count, error } = await supabase
    .from("follows")
    .select("*", { count: "exact", head: true })
    .eq("follower_id", userId);

  if (error) throw error;

  return count || 0;
}