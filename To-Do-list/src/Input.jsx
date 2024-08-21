import './To-Do.css'

function Input(){

    return(
        
        <>
        <div className='d-flex justify-content-center  align-items-center data'>
        <input type="text" placeholder="Add your new task" className='taskD' />
        <input type="text" placeholder="Add your time" className='timeD' />
        <button type="button" class="btn btn-success">Add Task</button>
        </div>
        </>
    )
}
export default Input