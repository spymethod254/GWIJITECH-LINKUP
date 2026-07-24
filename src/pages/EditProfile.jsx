import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import useProfile from "../hooks/useProfile";
import { updateProfile } from "../services/profileService";
import useSession from "../hooks/useSession";

function EditProfile() {
  const navigate = useNavigate();

  const { profile, loading } = useProfile();
  const { user } = useSession();

  const [form, setForm] = useState({
    username: "",
    full_name: "",
    bio: "",
  });

  useEffect(() => {
    if (profile) {
      setForm({
        username: profile.username || "",
        full_name: profile.full_name || "",
        bio: profile.bio || "",
      });
    }
  }, [profile]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateProfile(form, user.id);

      toast.success("Profile updated successfully 🎉");

      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  }

  if (loading) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="max-w-xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4"
          />

          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4"
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows="5"
            placeholder="Tell people about yourself..."
            className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4"
          />

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl"
          >
            Save Changes
          </button>

        </form>

      </div>

    </MainLayout>
  );
}

export default EditProfile;