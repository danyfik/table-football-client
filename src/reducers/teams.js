export default (teams = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...teams, action.payload];
        default:
            return teams;
    }
}