import React, { useEffect } from 'react';
import {
    Grid,
    CircularProgress,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@material-ui/core";
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions";

const Teams = () => {
    const classes = useStyles();
    const teamsState = useSelector((state) => state.teams);
    const teams = teamsState.teams
    console.log('teamsaaaa', teams)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.teamsActions.getTeams());
    }, [dispatch])

    const noSecondPlayer = <span><i>No second player</i></span>

    return (
        !teams ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell className={classes.tableCell}>Name</TableCell>
                            <TableCell className={classes.tableCell}>Player 1</TableCell>
                            <TableCell className={classes.tableCell}>Player 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams.map((team) => (
                            <TableRow key={team.id}>
                                <TableCell>{team.name}</TableCell>
                                <TableCell>{team.player1}</TableCell>
                                <TableCell>{team.player2 || noSecondPlayer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}

export default Teams;