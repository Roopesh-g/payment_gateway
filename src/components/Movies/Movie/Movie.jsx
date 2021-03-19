import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import Button from '@material-ui/core/Button';

import useStyles from './styles'

const Movie = ({ movie, selectMovie, history }) => {

    const classes = useStyles();

    const handlePurchase = prod => () => {
        // alert(prod)
        selectMovie(prod)
        history.push('/checkout')
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image='movieImage.jpg' title={movie.title}/>
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h5" gutterBottom>
                            {movie.title}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {movie.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color='textSecondary'>{movie.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label='Book Tickets'>
                    <Button variant="contained" color="primary" onClick={handlePurchase(movie)} disableElevation>
                            Book Tickets
                    </Button>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Movie