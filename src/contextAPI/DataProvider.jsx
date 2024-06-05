import { DataContext } from "./DataContext";
import { useContext, useEffect, useState } from "react";
import React from 'react'

function DataProvider({children}) {
    const initialState = {
      name:"",
      titles: [],
      about:"",
      skills_about:"",
      skills: [],
      projects: [{}],
      contact_email: "",
      social_links: {}
    }
    const [userdata,setUserData] = useState(initialState);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/')
        .then(resp => resp.json())
        .then(data => setUserData(data))
        .catch(err => console.error("Error in while fetching Data : ",err))
    },[])

  return (
    <DataContext.Provider value = {userdata}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;

export const useData = () => useContext(DataContext);