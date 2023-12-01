import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import classes from "./index.module.css";
import { fetchMovies } from "@/services/api/tmb";
import ClientTableRow from "./ClientTableRow";

type Props = {
    searchText: string;
};

const SearchResults = async ({ searchText }: Props) => {
    const { results } = await fetchMovies(searchText);

    return (
        <TableContainer className={classes.root} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={classes.tableCell}>
                            ID</TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                            Titre
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                            Évaluation
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                            Nb de votes
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                            Popularité
                        </TableCell>
                        <TableCell align="center" className={classes.tableCell}>
                            Date de sortie
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map((movie) => (
                        <ClientTableRow
                            key={movie.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            className={classes.row}
                            linkHref={`/movies/${movie.id}`}
                        >
                            <TableCell align="center">{movie.id}</TableCell>
                            <TableCell align="center">{movie.title}</TableCell>
                            <TableCell align="center">{movie.vote_average}</TableCell>
                            <TableCell align="center">{movie.vote_count}</TableCell>
                            <TableCell align="center">{movie.popularity}</TableCell>
                            <TableCell align="center">{movie.release_date}</TableCell>
                        </ClientTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SearchResults;