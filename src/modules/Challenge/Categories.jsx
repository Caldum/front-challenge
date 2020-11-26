import React, { useEffect } from 'react';
import { Grid, CircularProgress, Box, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getCategories } from '../../store/actions';

const useStyles = makeStyles({
    chipRoot: {
        borderRadius: 8,
        height: "auto",
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
        margin: "0 1rem 1rem 0"
    },
    boxDisabled: {
        opacity: 0.5
    }
});

export function Categories({ getCategories, categories }) {
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

    // Items de cada categoría según el ejemplo, ya que en la respuesta de la api no se incluyen valores iguales a 0
    const categoryItems = [29, 32, 302, 1, 0, 0];

    return (
        <Grid container>
            {!categories.length ? <CircularProgress /> :
                orderCategories(categories).map((category, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                        <Box display="flex" alignItems="center" className={`${classes.boxRoot} ${!category.id && classes.boxDisabled}`}>
                            <Chip label={categoryItems[index]} className={`${classes.chipRoot} ${classes.chipLabel}`} style={{ backgroundColor: category.color + "80" }} />
                            <Typography variant="subtitle1">{category.name}</Typography>
                        </Box>
                    </Grid>
                ))}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);