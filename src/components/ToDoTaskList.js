import React from 'react';

const ToDoTaskList = ({ items , handleDelete}) => {

  
  return (
    <div className="w-full ">
      {items?.map((item) => (
        <div
          className="flex justify-between items-center w-[400px] p-4 border border-rose-400 text-black rounded mx-auto my-4 "
          key={item?._id}
        >
          <h1>{item?.name}</h1>
          <p>{item?.description}</p>
          <button onClick={() => handleDelete(item?._id)} className="btn btn-xs ">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoTaskList;
