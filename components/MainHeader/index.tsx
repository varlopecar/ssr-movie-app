import Link from "next/link";
import classes from "./index.module.css";
import { Typography } from "@mui/material";

const MainHeader = () => {
    return (
        <div className={classes.root}>
            <Typography component="h1" fontSize={"1.8rem"}>
                My movies app
            </Typography>
            <nav className={classes.navigation}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/search">
                    Search
                </Link>
                <Link href={"/playlists/creation"} prefetch={false}>
                    Create playlist
                </Link>
            </nav>
        </div>
    );
};
export default MainHeader;