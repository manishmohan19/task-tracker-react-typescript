import { FaTimes } from "react-icons/fa";

interface Iprops{
    task:{id:number
        text: string
        day: string
        reminder?:boolean}
    onDelete:(id:number)=>void
    onToggle:(id:number)=>void
}

const Task = ({ task, onDelete, onToggle }:Iprops) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
