import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: 'center'
    },
    table: {
        minWidth: 400
    },
    tableRow: {
        backgroundColor: 'black',
    },
    tableCell: {
        color: 'white'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginTop: 5,
        marginBottom: 10,
    }
}));