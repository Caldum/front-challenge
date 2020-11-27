import React, { useEffect } from 'react';
import { Grid, CircularProgress, Box, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getCategories } from '../../store/actions';

const useStyles = makeStyles({
    grid: {
        padding: "0 1rem"
    },
    chipRoot: {
        borderRadius: 8,
        height: "auto",
        marginLeft: 0,
        marginRight: "0.6rem",
        minWidth: 50,
        padding: "3px 0"
    },
    chipLabel: {
        fontSize: "1rem"
    },
    boxRoot: {
        boxSizing: "border-box",
        color: "black",
        fontWeight: "bold",
        marginBottom: "1rem"
    },
    boxDisabled: {
        opacity: 0.5
    }
});

export function Categories({ getCategories, categories, top10 }) {
    const classes = useStyles();

    useEffect(() => {
        getCategories();
    }, []);

    // Esta función reordena las categorías, el único fin es que quede igual al ejemplo
    const orderCategories = (categories) => {
        const orderedCategories = [...categories];
        orderedCategories.push(orderedCategories.splice(3, 1)[0]);
        return orderedCategories;
    }

    return (
        <Grid container className={classes.grid}>
            {!categories.length ?
                <Box display="flex" width="100%" justifyContent="center">
                    <CircularProgress />
                </Box> :
                orderCategories(categories).map((category, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                        <Box display="flex" alignItems="center" className={`${classes.boxRoot} ${!top10.filter(element => element.categoryId === category.id).length && classes.boxDisabled}`}>
                            <Chip label={top10.filter(element => element.categoryId === category.id).length} className={`${classes.chipRoot} ${classes.chipLabel}`} style={{ backgroundColor: category.color }} />
                            <Typography variant="subtitle1">{category.name}</Typography>
                        </Box>
                    </Grid>
                ))}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer.categories,
        top10: state.top10Reducer.top10
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);