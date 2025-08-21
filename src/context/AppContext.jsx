import { createContext, useEffect, useState } from 'react'
import {techSkillsData, techToolsData,engToolsData,engSkillsData} from '../assets/SkillsData'



const AppContext = createContext()

const AppContextProvider = (props) => {

  const backendUrl = "http://localhost:4000";

  const [techSkilled, setTechSkilled] = useState(techSkillsData);
  const [techTools, setTechTools] = useState(techToolsData);
  const [engSkilled, setEngSkilled] = useState(engToolsData);
  const [engTools, setEngTools] = useState(engSkillsData);

 // techSkills control
    const [techSkills, setTechSkills] = useState(()=>{
      const saveTechSkills = localStorage.getItem('techSkills');
      return saveTechSkills ? saveTechSkills : "techSkills";
    });
    useEffect(() => {
      localStorage.setItem("techSkills", techSkills);
    }, [techSkills]);

    // engSkills control
    const [engSkills, setEngSkills] = useState(()=>{
      const saveEngSkills = localStorage.getItem("engSkills");
      return saveEngSkills? saveEngSkills:'engSkills';
    });
    useEffect(() => {
      localStorage.setItem("engSkills", engSkills);
    }, [engSkills]);

  // mode control
    const [mode, setMode] = useState(() => {
      const savedMode = localStorage.getItem("mode");
      return savedMode ? savedMode : "light";
    });

    useEffect(() => {
      localStorage.setItem("mode", mode);
    }, [mode]);
  

  const value = {
    mode,
    setMode,
    techSkilled,
    setTechSkilled,
    techTools,
    setTechTools,
    engSkilled,
    setEngSkilled,
    engTools,
    setEngTools,
    techSkills,
    setTechSkills,
    engSkills,
    setEngSkills,
    backendUrl
  };

  return (
    <AppContext.Provider value={value}>
      {
        props.children
      }
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }; 