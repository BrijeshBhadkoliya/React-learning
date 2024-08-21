import "./To-Do.css";
import Input from "./Input";
import Datas from "./TOdo-data";
function ToDo() {
  return (
    <div>
      <h1>To-Do List</h1>
      <div className="d-flex justify-content-center  align-items-center heit">
        <div className="box  bg-white  ">
         
            <Input/>
            <Datas/>
          
        </div>
      </div>
    </div>
  );
}
export default ToDo;
