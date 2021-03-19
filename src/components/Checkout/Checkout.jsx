// import React from 'react'

// const Checkout = () => {
//     return (
//         <h1>checkout page</h1>
//     )
// }

// export default Checkout

import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import StripeCheckout from 'react-stripe-checkout'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// toast.configure()

export default function Checkout({ selectedMovie, history}) {
    const classes = useStyles();
    //   const bull = <span className={classes.bullet}>•</span>;
    // const handleTotalCost = cost => () => {
    //     alert(cost)
    // }

    // const {paymentSuccess, setPaymentSuccess} = useState(null)

    const makePayment = token => {
      const body = {
        token,
        product: selectedMovie
      }

      const headers = {
        "Content-Type": "application/json"
      }

      return fetch(`http://localhost:5000/payment`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      }).then(response => {
        // console.log("Response: ", response)
        const { status } = response
        // console.log("Status: ", status)
        if (status === 200){
          // setPaymentSuccess(true)
          history.push('/')
        }

      })
      .catch(err => console.log("Error: ", err))
    }

    return (
        <Card className={classes.root} variant="outlined">
          <CardContent>
              <Typography variant="h5" component="h2">
              {selectedMovie.title}
              </Typography><br/>
              <Typography className={classes.title} color="textSecondary">
              About: {selectedMovie.description}
              </Typography><br/>   
              <Typography className={classes.pos} color="textSecondary">
              Runtime: {selectedMovie.runTime}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              Ticket Cost: {selectedMovie.price}
              </Typography>
          </CardContent>

          <CardActions>
              {/* <form> */}
                  <label for="timeslot">Select Time: </label>
                  <select name="timeslot" id="timeslot">
                      {selectedMovie.showTimings.map((time) => (
                          <option value={time}>{time}</option> 
                      ))}                                
                  </select><br/><br/>

                  {/* <label for="seats">How many seats? </label>
                  <select name="seats" id="seats" >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                  </select><br/><br/>
                  <label for='totalCost' id='totalCost' onClick={handleTotalCost(document.getElementById('seats'))}>Total Cost: {selectedMovie.price}</label> */}
                  {/* <Button variant="contained" color="primary" disableElevation>
                      Payment
                  </Button> Not required */}

                  <StripeCheckout 
                    stripeKey="pk_test_51IWMuXL0NrcdUNFo2SQ9BSOGQi9CnneGg0yvUA4z5fjQTbpQKQJBnGXUsfNkJ0VrEFDgQz24tt8yptOKfOKNSsLx00DdkBmEiN"
                    token={makePayment}
                    name="Stripe Payment Gateway"
                    amount={selectedMovie.price.split(" ")[0] * 100}
                  />
              {/* </form> */}
          </CardActions>
        </Card>
    );
}
