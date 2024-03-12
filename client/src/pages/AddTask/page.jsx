import React, { useCallback } from "react";

import ButtonAction from "../../Components/Button/ButtonAction/Index";
import Layout from "../../Layout";

export default function AddTask(){
  const handleSendData = useCallback(() => {
    console.log('halo');
  }, []);
  return(
    <Layout>
      <h1 className="myh1">Write your task</h1>
      <input type="text" name="" id="" placeholder="What should i do?" className="myInputFieldStyle rounded-2xl h-[40px] w-[100%]"/>
      <ButtonAction placeholder="Submit" onClick={handleSendData} className="my-6 bg-amber-300 py-2 px-5 rounded-2xl"/>
    </Layout>
  );
}
