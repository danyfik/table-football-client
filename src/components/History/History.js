import React, {useEffect, useState} from 'react';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions";
import Select from "react-select";
import _ from "lodash";

const Players = () => {
    const classes = useStyles();
    const playersState = useSelector((state) => state.players);
    const gamesState = useSelector((state) => state.games);
    const players = playersState.players
    const playersGames = gamesState.games

    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        dispatch(allActions.playersActions.getPlayers());
    }, [dispatch])

    let playersSelect = []
    _.forEach(players, player => {
        playersSelect.push({
            value: player.id,
            label: player.name
        })
    })

    const handleChange = (selectedOption) => {
        setIsSelected(!isSelected)
        dispatch(allActions.gamesActions.getPlayerGames(selectedOption.value))
    }

    return (
        !players ? <CircularProgress /> : (
            <Paper className={classes.paper}>
                <Select
                    placeholder='Select the player'
                    className={classes.select}
                    onChange={handleChange}
                    options={playersSelect} />
                <br/>
                {playersGames && isSelected && (
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow className={classes.tableRow}>
                                    <TableCell> </TableCell>
                                    <TableCell className={classes.tableCell}>Team 1</TableCell>
                                    <TableCell className={classes.tableCell}>Team 2</TableCell>
                                    <TableCell className={classes.tableCell}>Team 1 score</TableCell>
                                    <TableCell className={classes.tableCell}>Team 2 score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {playersGames.map((game) => (
                                    <TableRow key={game.id}>
                                        <TableCell>{game.id}</TableCell>
                                        <TableCell>{game.team1}</TableCell>
                                        <TableCell>{game.team2}</TableCell>
                                        <TableCell>{game.team1Score}</TableCell>
                                        <TableCell>{game.team2Score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Paper>
        )
    );
}

export default Players;