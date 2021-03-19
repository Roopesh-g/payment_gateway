import React from 'react'
import { Grid } from '@material-ui/core'

import Movie from './Movie/Movie'
const movies = [
    {id: 1, title: 'The Avengers', description: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.", price: '15.00 Euro', runTime: '2h30m', showTimings: ['10:00 AM', '13:00 PM', '17:00 PM', '21:00 PM']},
    {id: 2, title: 'Avengers: Infinity War', description: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.", price: '25.00 Euro', runTime: '2h30m', showTimings: ['10:00 AM', '13:00 PM', '17:00 PM', '21:00 PM']},
    {id: 3, title: 'Avengers: Age of Ultron', description: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.", price: '30.00 Euro', runTime: '2h30m', showTimings: ['10:00 AM', '13:00 PM', '17:00 PM', '21:00 PM']},
    {id: 4, title: 'Avengers: Endgame I', description: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.", price: '30.00 Euro', runTime: '2h30m', showTimings: ['10:00 AM', '13:00 PM', '17:00 PM', '21:00 PM']},
    {id: 5, title: 'Avengers: Endgame II', description: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.", price: '30.00 Euro', runTime: '2h30m', showTimings: ['10:00 AM', '13:00 PM', '17:00 PM', '21:00 PM']}
]

const Movies = ({history, selectMovie}) => {
    return (
        <main>
            <Grid container justify='center' spacing={4}> 
                {movies.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} lg={3}>
                        <Movie movie={movie} selectMovie={selectMovie} history={history}/>
                    </Grid>
                ))}
            </Grid>  
        </main>
    )
}

export default Movies 