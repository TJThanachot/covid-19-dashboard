import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SideBar from "./components/SideBar";
import Table from "./components/Table";
import Chart from "./components/Chart";
import Home from "./components/Home";
import { useMain } from "./contexts/mainContext";

function App() {
  const { page, setPage } = useMain();
  return (
    <div className="flex h-[auto] w-[100vw]">
      <SideBar />

      {page === "Global Situation" ? (
        <Home />
      ) : page === "Table" ? (
        <Table />
      ) : page === "Chart" ? (
        <Chart />
      ) : null}
    </div>
  );
}

export default App;

{
  /* <button
        className="bg-red-500"
        onClick={async () => {
          // const result = await axios.get("https://disease.sh/v3/covid-19/all");
          const result = await axios.get(
            "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
          );
          console.log(result.data);
        }}
      >
        kkkkk
      </button> */
}
