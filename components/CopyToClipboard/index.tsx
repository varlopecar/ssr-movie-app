'use client'

import { ContentCopy } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

type Props = {
    value: string
}

export default function CopyToClipboard({ value }: Props) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, flexDirection: "row" }}>
            Share this playlist:
            <Tooltip title="Copy to clipboard">
                <IconButton onClick={() => navigator.clipboard.writeText(value)}>
                    <ContentCopy />
                </IconButton>
            </Tooltip>
        </Box>
    )
}