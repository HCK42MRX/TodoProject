import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

// components
import ButtonRedirect from "../../Components/Button/ButtonRedirect/Index";
import SearchInput from "../../Components/SearchInput/Index";
import TodoItems from "../../Components/TodoItems/Index";
import Layout from "../../Layout";


export default function Home() {
  const [tasks, setTasks] = useState();
  const fetchTask = useCallback(async () => {
    const result = await axios.get(import.meta.env.VITE_API_URL);
    setTasks(result.data);
  }, []);

  useEffect(() => {
    fetchTask().catch(console.error);
  }, [fetchTask]);

  return (
    <Layout>
      <h1 className="myh1">Things to do : </h1>
      <div className="flex justify-between items-center">
        <SearchInput />
        <ButtonRedirect link="/add-task" placeholder="New task" className="bg-yellow-300 w-52 h-12 flex justify-center items-center font-medium rounded-3xl" />
      </div>
      <hr className="my-10" />
      {tasks ? tasks.map(task => <TodoItems key={task.id} todoName={task.task} />) : null}
    </Layout>
  );
}
