import Cards from "./Cards";
import { useEffect, useState } from "react";
import Button from "./Boutton";
import { useNavigate } from "react-router-dom";

function ViewCard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/dataapi")
        .then((response) => response.json())
        .then((data) => setData(data));
    };

    fetchData();
  }, []);

  function onDelete(id) {
    fetch(`http://localhost:3000/deleteuser/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete user");
        return res.json();
      })
      .then((data) => {
        console.log("User deleted:", data);
        setData((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  function onUpdate(user) { 
    navigate(`/editcard/${user.id}`,{state:{user}})
  }

  return (
    <div className="container">

      <h1 className="my-9 text-xl font-bold">Cards Page</h1>
      <div className="flex justify-end mb-4">
        <Button text="Add Card" onClick={() => navigate("/addcard")} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap p-4">
        {data.map((item, index) => (
          <Cards key={index} CardData={item} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
}
export default ViewCard;

