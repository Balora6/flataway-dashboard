"use client";

import "./CellPage.scss";

import {useMemo, useState } from "react";

import Input from "./components/Input/Input";
import Dropdown from "./components/Dropdown/Dropdown";
import { useCells } from "@/context/CellsContext";
import { useParams, useRouter } from "next/navigation";
import { mockedColors } from "@/mockedData";

const CellPage = () => {
  const { cells, updateCell } = useCells();
  const { cellId } = useParams();
  const router = useRouter();
  const cell = useMemo(() => {
    return cells.find((cell) => cell.id === Number(cellId));
  }, [cells, cellId]);

  const [cellData, setCellData] = useState({
    color: cell?.color || "",
    url: cell?.url || "",
    title: cell?.title || "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    updateCell(Number(cellId), {
      id: Number(cellId),
      color: cellData.color.trim(),
      url: cellData.url.trim(),
      title: cellData.title.trim(),
    });
    
    router.push("/");
  };

  return (
    <div className="container">
      <form className="cell-form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <Input
            onChange={(value) => setCellData({ ...cellData, url: value })}
            title="URL"
            type="url"
            value={cellData.url}
          />
          <Input
            onChange={(value) => setCellData({ ...cellData, title: value })}
            title="Title"
            value={cellData.title}
          />
          <Dropdown
            label="Color"
            options={[
              ...mockedColors.map((color) => ({ label: color, value: color })),
            ]}
            value={cellData.color}
            onChange={(e) =>
              setCellData({ ...cellData, color: e.target.value })
            }
          />
        </div>
        <button
          className="cell-form__button"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CellPage;
