import { Search } from "@mui/icons-material";
import classes from "./classes.module.css";
type Props = {
    onClick: () => void;
};
export default function SearchIcon({ onClick }: Props) {
    return (
        <div className={classes.searchIcon} onClick={onClick}>
            <Search />
        </div>
    );
}