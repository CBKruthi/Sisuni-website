import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Enter username and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/login`,
        {
          username,
          password,
        }
      );

      console.log(response.data);

      // Save authentication data
      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      localStorage.setItem(
        "isAdmin",
        "true"
      );

      // Redirect to dashboard
      navigate("/admin/dashboard");

    } catch (error) {
      console.error("Login error:", error);

      alert(
        error.response?.data?.message ||
        "Invalid username or password"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="w-80 rounded bg-white p-6 shadow-md"
      >

        <h2 className="mb-6 text-center text-xl font-semibold">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="mb-3 w-full border p-2"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full border p-2"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 py-2 text-white disabled:opacity-50"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

      </form>

    </div>
  );
}