import React, { useEffect } from 'react';
import { List, Box, CircularProgress, ListItem, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getTop10 } from '../../store/actions';

const useStyles = makeStyles({
    avatar: {
        marginRight: "1rem",
        width: "3.2rem",
        height: "3.2rem"
    },
    typography: {
        fontWeight: "bold"
    }
});

export function Top10({ getTop10, top10, categories }) {
    const classes = useStyles();

    useEffect(() => {
        getTop10();
    }, []);

    return (
        <List>
            {!top10.length ?
                <Box display="flex" width="100%" justifyContent="center">
                    <CircularProgress />
                </Box> :
                top10.map((element, index) => (
                    <ListItem key={index} button>
                        <Avatar style={categories.length ? { backgroundColor: categories.find(category => category.id === element.categoryId).color } : null} className={classes.avatar}>{element.customerName[0]}</Avatar>
                        <Box direction="column">
                            <Typography variant="body1" className={classes.typography}>{`${element.customerName} ${element.customerLastName}`}</Typography>
                            <Typography variant="body1" className={classes.typography} style={categories.length ? { color: categories.find(category => category.id === element.categoryId).color } : null}>{`${element.title}: ${element.groupDescription} `}</Typography>
                        </Box>
                    </ListItem>
                ))}
        </List>
    )
}

const mapStateToProps = (state) => {
    return {
        top10: state.top10Reducer.top10,
        categories: state.categoriesReducer.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTop10: () => dispatch(getTop10())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top10);