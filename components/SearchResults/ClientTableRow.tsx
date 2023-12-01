"use client";

import { Theme } from "@emotion/react";
import { SxProps, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const ClientTableRow = ({
  children,
  sx,
  className,
  linkHref,
}: PropsWithChildren<{
  sx: SxProps<Theme>;
  className: string;
  linkHref: string;
}>) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(linkHref);
  };

  return (
    <TableRow sx={sx} className={className} onClick={handleClick}>
      {children}
    </TableRow>
  );
};

export default ClientTableRow;