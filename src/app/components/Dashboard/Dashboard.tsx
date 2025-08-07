"use client";

import "./Dashboard.scss";

import Cell from "./components/Cell";
import { useCells } from "@/context/CellsContext";

const Dashboard = () => {
  const { cells } = useCells();

  return (
    <div className="dashboard">
      {cells.map((cell) => (
        <Cell key={cell.id} id={cell.id} color={cell.color} url={cell.url}/>
      ))}
    </div>
  );
};

export default Dashboard;
