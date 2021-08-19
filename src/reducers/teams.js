export default (teams = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_TEAMS':
            return action.payload;
        case 'CREATE':
            return [...teams, action.payload];
        default:
            return teams;
    }
}