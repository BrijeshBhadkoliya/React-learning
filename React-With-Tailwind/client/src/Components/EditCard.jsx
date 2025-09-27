import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Button from "./Boutton";

function EditForm() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { id } = useParams();
  const location = useLocation();
  const userData = location.state?.user;

  const [form, setForm] = useState({
    name: '',
    role: '',
    description: '',
    img: null,
  });

  useEffect(() => {
    if (userData) {
      setForm({
        name: userData.name || '',
        role: userData.role || '',
        description: userData.description || '',
        img: null, // cannot prefill file input
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "img") {
      setForm((prev) => ({
        ...prev,
        img: e.target.files[0],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const sendData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("description", form.description);
    if (form.img) {
      formData.append("img", form.img);
    }

    try {
      const res = await fetch(`http://localhost:3000/editpage/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      console.log("Update success:", data);

      // Reset form and redirect
      setForm({
        name: '',
        role: '',
        description: '',
        img: null,
      });
      if (fileInputRef.current) fileInputRef.current.value = null;
      navigate("/viewcard");

    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-black">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[450px]">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Edit Card</h2>
        <form className="space-y-5" onSubmit={sendData} encType="multipart/form-data">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block mb-1 bg-white text-sm font-medium text-gray-700">Your Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 bg-white text-sm font-medium text-gray-700">Your Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="img" className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleChange}
              ref={fileInputRef}
              className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Update
          </button>
        </form>

        <div className="mt-6 text-center">
          <Button text="View Card" onClick={() => navigate("/viewcard")} />
        </div>
      </div>
    </div>
  );
}

export default EditForm;
