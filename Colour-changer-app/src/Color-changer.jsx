import { useState } from "react";
import "./index.css";

function ColorChanger() {
  const [color, setercol] = useState("yellow");

  const black = () => {
    setercol("black");
  };
  const yellow = () => {
    setercol("yellow");
  };
  const blue = () => {
    setercol("blue");
  };
  const orange = () => {
    setercol("orange");
  };
  const green = () => {
    setercol("green");
  };
  const violet = () => {
    setercol("violet");
  };
  const purple = () => {
    setercol("purple");
  };
  const rose = () => {
    setercol("#FA003F");
  };
  const white = () => {
    setercol("white");
  };
  return (
    <>
      <div style={{ background: color, height: "100vh", width: "100vw", position:'relative'}}>
        <div className="flex absolute bottom-[87px] left-[26%]">
        <div className="flex bg-white border  w-[750px] justify-center	 items-baseline	 rounded-3xl border-2	 border-black border-solid p-[7px] h-[55px] ">
          <button
            onClick={black}
            style={{
                padding: "8px",
              color: "white",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "black",
              marginRight: "10px",
            }}
          >
            black
          </button>
          <button
            onClick={yellow}
            style={{
                padding: "8px",
              color: "black",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "yellow",
              marginRight: "10px",

            }}
          >
            yellow
          </button>
          <button
            onClick={blue}
            style={{
                padding: "8px",
              color: "white",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "blue",
              marginRight: "10px",

            }}
          >
            blue
          </button>
          <button
            onClick={orange}
            style={{
                padding: "8px",
              color: "white",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "orange",
              marginRight: "10px",

            }}
          >
            orange
          </button>
          <button
            onClick={green}
            style={{
                padding: "8px",
              color: "white",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "green",
              marginRight: "10px",

            }}
          >
            green
          </button>
          <button
            onClick={violet}
            style={{
              
                padding: "8px",
                color: "white",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "violet",
              marginRight: "10px",

            }}
          >
            violet
          </button>
          <button
            onClick={purple}
            style={{
                padding: "8px",
              color: "white",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "purple",
              marginRight: "10px",

            }}
          >
            purple
          </button>
          <button
            onClick={rose}
            style={{
                padding: "8px",
              color: "white",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "#FA003F",
              marginRight: "10px",

            }}
          >
            rose
          </button>
          <button
            onClick={white}
            style={{
                padding: "8px",
              color: "black",
              width: "80px",
              height: "40px",
              borderRadius: "15px",
              fontSize: "17px",
              border: "1px solid black",
              background: "white",
              marginRight: "10px",

            }}
          >
            white
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default ColorChanger;
