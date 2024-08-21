import "./To-Do.css";
function Datas() {
  return (
    <>
      <div className="datas">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Get Up Mornig</td>
              <td>12/10/2024  </td>
              <td><b>4:30AM</b> </td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
            <th scope="row">2</th>
              <td> Start The devi pooja</td>
              <td>12/10/2024  </td>
              <td><b>6:30AM</b> </td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
            <th scope="row">3</th>
              <td>Lanche Time</td>
              <td>12/10/2024  </td>
              <td><b>2:30AM</b> </td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Datas;
