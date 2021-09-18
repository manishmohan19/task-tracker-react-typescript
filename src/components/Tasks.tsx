import Task from "./Task";

interface IProps {
  tasks:{ id:number;
    text: string;
    day: string;
    reminder?:boolean}[];
    onDelete:(id:number)=>void;
    onToggle:(id:number)=>void;

}

const Tasks = ({ tasks, onDelete, onToggle }:IProps) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
