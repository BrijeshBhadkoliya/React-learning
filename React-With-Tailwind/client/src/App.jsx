import Cards from "./Cards";
import { useEffect, useState } from "react";
 function App() {
  const [data, setData] = useState([]);
 
   useEffect(()=> {
    const fetchData = () => {
         fetch('http://localhost:3000/dataapi')
         .then((response) => response.json())
          .then((data) => setData(data));
        };

    fetchData();
   }, [])

  
  // let celement =[]

  // dataArr.forEach((val, i ) => (
  //   celement.push(<Cards key={i}
  //     CardData={val}
  //   />)
  // ))

  return (
    <>
      <div className="container">
        <h1 className="my-9">Cards pages</h1>
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <Cards key={index} CardData={item} />
          ))}
          {/* {celement} */}
        </div>
      </div>
    </>
  );
}

export default App;
