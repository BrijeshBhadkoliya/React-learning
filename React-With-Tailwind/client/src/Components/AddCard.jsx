import { useNavigate } from "react-router-dom";
import Button from "./Boutton";
import { useState ,useRef } from "react";

function Form() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    role: '',
    description: '',
    img: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "img") {
      setForm(prev => ({
        ...prev,
        [name]: e.target.files[0]
      }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const sendData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("description", form.description);
    formData.append("img", form.img); 

    console.log(formData)
    try {
      const res = await fetch("http://localhost:3000/addcard", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Response from backend:", data);

     
      setForm({
        name: '',
        role: '',
        description: '',
        img: null,
      });
      fileInputRef.current.value = null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-black">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[450px]">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Add New Card</h2>
        <form className="space-y-5" onSubmit={sendData} encType="multipart/form-data">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-700">Your Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex .Back-end Developer"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700">Your Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 bg-white py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="img" className="block mb-1 text-sm font-medium text-gray-700">Your Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleChange}
              ref={fileInputRef}
              className="w-full border border-gray-300 rounded-lg px-4 bg-white py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 bg-white rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm bg-white text-gray-600">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 text-center">
          <Button text="View Card" onClick={() => navigate("/viewcard")} />
        </div>
      </div>
    </div>
  );
}

export default Form;
