import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions";

const Players = () => {
    const classes = useStyles();
    const playersState = useSelector((state) => state.players);
    const players = playersState.players
    console.log('playersaaaa', players)

    // const StyledTableCell = withStyles(() => ({
    //     head: {
    //         backgroundColor: 'black',
    //         color: 'white',
    //     },
    //     body: {
    //         fontSize: 14,
    //     },
    // }))(TableCell);

    // const StyledTableRow = withStyles(() => ({
    //     root: {
    //         '&:nth-of-type(odd)': {
    //             backgroundColor: 'black',
    //         },
    //     },
    // }))(TableRow);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.playersActions.getPlayers());
    }, [dispatch])

    return (
        !players ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell className={classes.tableCell}>Name</TableCell>
                            <TableCell className={classes.tableCell}>Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player) => (
                            <TableRow key={player.id}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.country}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}

export default Players;