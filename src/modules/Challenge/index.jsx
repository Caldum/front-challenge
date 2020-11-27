import React, { useEffect } from 'react';
import { Container, Box, CircularProgress, Card, CardContent } from '@material-ui/core';
import Categories from './Categories';
import Top10 from './Top10';
import { connect } from 'react-redux';
import { getCategories, getTop10 } from '../../store/actions';


export function Index({ getCategories, categories, getTop10, top10 }) {
    useEffect(() => {
        getCategories();
        getTop10();
    }, []);

    return (
        <Container maxWidth="md">
            {!categories.length || !top10.length ?
                <Box display="flex" width="100%" justifyContent="center">
                    <CircularProgress />
                </Box> :
                <Card>
                    <CardContent>
                        <Categories />
                        <Top10 />
                    </CardContent>
                </Card>}
        </Container>
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
        getCategories: () => dispatch(getCategories()),
        getTop10: () => dispatch(getTop10())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);