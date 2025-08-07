import { IoAddCircleOutline } from "react-icons/io5";
import { CiEdit, CiCircleRemove } from "react-icons/ci";

import LinkWrapper from "./LinkWrapper";
import { useRouter } from "next/navigation";
import { useCells } from "@/context/CellsContext";

interface Props {
  id: number;
  color?: string;
  url?: string;
  title?: string;
}

const Cell = ({ id, color = "black", url }: Props) => {
  const router = useRouter();
  const {updateCell} = useCells();
  
  const onEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/cell/${id}`);
  };

  const onRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    updateCell(id, { id, url: "", title: "", color: "" } );
  };

  return (
    <LinkWrapper url={url} id={id}>
      <div className="dashboard__cell">
        <div className="dashboard__actions">
          <CiEdit onClick={onEdit} size={30} color="black" />
          <CiCircleRemove onClick={onRemove} size={30} color="black" />
        </div>
        <IoAddCircleOutline size={100} color={color} />
      </div>
    </LinkWrapper>
  );
};

export default Cell;
