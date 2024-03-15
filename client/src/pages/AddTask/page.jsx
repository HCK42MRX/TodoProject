import axios from "axios";
import React, { useCallback, useState } from "react";

import ButtonAction from "../../Components/Button/ButtonAction/Index";
import Layout from "../../Layout";

export default function AddTask() {
  const [task, setTask] = useState("");
  const handleSendData = useCallback(async () => {
    try{
      const sendData = await axios.post(import.meta.env.VITE_API_URL, {
        task
      });
      console.log(sendData.data.message);
    }catch(error){
      console.log(error);
    }
  }, [task]);
  const handleChange = useCallback(async (e) => {
    setTask(e.target.value);
  }, []);

  return (
    <Layout>
      <h1 className="myh1">Write your task</h1>
      <input type="text" name="task" id="task" placeholder="What should i do?" onChange={handleChange} className="myInputFieldStyle rounded-2xl h-[40px] w-[100%]" />
      <ButtonAction placeholder="Submit" onClick={handleSendData} className="my-6 bg-amber-300 py-2 px-5 rounded-2xl" />
    </Layout>
  );
}
