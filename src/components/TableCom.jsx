import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useMain } from "../contexts/mainContext";

function TableCom() {
  const { getHistoricalTable, dataForTable, getDateFilter, dateFilter } =
    useMain();
  useEffect(() => {
    getHistoricalTable();
    getDateFilter();
  }, []);
  // console.log(dataForTable.date);
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      filters: dateFilter,
      filterSearch: true,
      onFilter: (value, record) => record.date.includes(value),
    },

    {
      title: "Cases",
      dataIndex: "cases",
      sorter: (a, b) => a.cases - b.cases,
    },
    {
      title: "Recovered",
      dataIndex: "recovered",
      sorter: (a, b) => a.recovered - b.recovered,
    },
    {
      title: "Deaths",
      dataIndex: "deaths",
      sorter: (a, b) => a.deaths - b.deaths,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="flex flex-col items-center w-full h-auto">
      <h1 className="text-4xl font-extrabold w-full pt-[4rem] pl-[11%] max-sm:pl-[16%]">
        Table
      </h1>

      <Table
        className="w-[90%] mt-10"
        columns={columns}
        dataSource={dataForTable}
        onChange={onChange}
      />
    </div>
  );
}

export default TableCom;
