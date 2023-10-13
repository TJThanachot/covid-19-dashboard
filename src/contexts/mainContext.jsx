import axios from "axios";
import React, { useState } from "react";

const MainContext = React.createContext();

function MainProvider(props) {
  const [open, setOpen] = useState(false);
  const [mainData, setMainData] = useState({});
  const [page, setPage] = useState("Global Situation");
  const [percentData, setPercentData] = useState([]);
  const [mainDataForPie, setMainDataForPie] = useState({});
  const [groupDataByYear, setGroupDataByYear] = useState({});
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

  const getHistorical = async () => {
    const result = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    // console.log(result.data);
    const year = {
      year2020: { cases: 0, deaths: 0, recovered: 0 },
      year2021: { cases: 0, deaths: 0, recovered: 0 },
      year2022: { cases: 0, deaths: 0, recovered: 0 },
      year2023: { cases: 0, deaths: 0, recovered: 0 },
    };

    // group cases-----------------------------------------------------------
    for (let key in result.data.cases) {
      const cases = result.data.cases[key];
      switch (key) {
        case "12/31/20":
          year.year2020.cases = cases;
          break;
        case "12/31/21":
          year.year2021.cases = cases;
          break;
        case "12/31/22":
          year.year2022.cases = cases;
          break;
        case "3/9/23":
          year.year2023.cases = cases;
          break;
      }
    }
    // group deaths-----------------------------------------------------------
    for (let key in result.data.deaths) {
      const cases = result.data.deaths[key];
      switch (key) {
        case "12/31/20":
          year.year2020.deaths = cases;
          break;
        case "12/31/21":
          year.year2021.deaths = cases;
          break;
        case "12/31/22":
          year.year2022.deaths = cases;
          break;
        case "3/9/23":
          year.year2023.deaths = cases;
          break;
      }
    }
    // group recovered-----------------------------------------------------------

    year.year2020.recovered = year.year2020.cases - year.year2020.deaths;

    year.year2021.recovered = year.year2021.cases - year.year2021.deaths;

    year.year2022.recovered = year.year2022.cases - year.year2022.deaths;

    year.year2023.recovered = year.year2023.cases - year.year2023.deaths;

    setGroupDataByYear(year);
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
        getHistorical,
        groupDataByYear,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

const useMain = () => React.useContext(MainContext);
export { MainProvider, useMain };
