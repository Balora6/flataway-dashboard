import { mockedCells } from "@/mockedData";
import { CellConfig } from "@/types/cell";

export const getCellsFromStorage = () => {
  const savedCells = localStorage.getItem("cells");

  return savedCells ? JSON.parse(savedCells) : mockedCells;
};

export const setCellsToStorage = (cells: CellConfig[]) => {
  localStorage.setItem("cells", JSON.stringify(cells));
};
