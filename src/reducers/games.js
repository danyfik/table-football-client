export default (games = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_GAMES':
            console.log('xx', action)
            return action.payload;
        case 'CREATE':
            return [...games, action.payload];
        default:
            return games;
    }
}