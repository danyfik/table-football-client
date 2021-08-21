export default (players = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_PLAYERS':
            return action.payload;
        case 'CREATE':
            return [...players, action.payload];
        default:
            return players;
    }
}