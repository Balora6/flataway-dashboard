import { PropsWithChildren } from "react";
import Link from "next/link";

interface Props extends PropsWithChildren{
    url: string | undefined;
    id: number;
}

const LinkWrapper: React.FC<Props> = ({ children, url, id }) => {
  return url ? <a href={url} target="_blank">{children}</a> : <Link href={`/cell/${id}`}>{children}</Link>;
};

export default LinkWrapper;