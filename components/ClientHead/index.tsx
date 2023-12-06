"use client";

import { useEffect } from "react";

type Props = {
    title: string;
    description: string;
};

const ClientHead = ({ title, description }: Props) => {
    useEffect(() => {
        document.title = title;
        document
            .querySelector("meta[name=description]")
            ?.setAttribute("content", description);
    }, [title, description]);

    return <></>;
};

export default ClientHead;