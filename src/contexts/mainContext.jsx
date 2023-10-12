import axios from "axios";
import React, { useState } from "react";

const MainContext = React.createContext();

function MainProvider(props) {
  const [open, setOpen] = useState(false);
  const [mainData, setMainData] = useState({});
  const [page, setPage] = useState("Global Situation");
  const [percentData, setPercentData] = useState([]);
  const [mainDataForPie, setMainDataForPie] = useState({});
  const getMainData = async () => {
    const result = await axios.get("https://disease.sh/v3/covid-19/all");
    const newResult = {
      cases: result.data.cases,
      deaths: result.data.deaths,
      active: result.data.active,
      recovered: result.data.recovered,
    };

    for (let key in newResult) {
      newResult[key] = newResult[key].toLocaleString();
    }
    setMainData(newResult);
    setMainDataForPie(result.data);
  };
  return (
    <MainContext.Provider
      value={{
        open,
        setOpen,
        mainData,
        getMainData,
        page,
        setPage,
        percentData,
        setPercentData,
        mainDataForPie,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

const useMain = () => React.useContext(MainContext);
export { MainProvider, useMain };
