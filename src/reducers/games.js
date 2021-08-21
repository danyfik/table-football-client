export default (games = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_GAMES':
            return action.payload;
        case 'CREATE':
            return [...games, action.payload];
        default:
            return games;
    }
}