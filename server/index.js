const express = require('express')
const cors = require('cors')
const stripe = require('stripe')("sk_test_51IWMuXL0NrcdUNFo5XHMwbRyl6BVuUSoziNZb7LNFE6n5qEcsiwh7qpHb6plTpLIdQy5KzPODzniQHbExyDEczba00cueZQ1Fi")
const uuid = require('uuid').v4
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req, res) => {
    res.send("Node server for stripe payment: success!")
})

app.post('/payment', (req, res) => {
    const  {product, token} = req.body
    // console.log(product.price, token)

    const idempotencyKey = uuid() // generates unique key for each transaction

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price.split(" ")[0] * 100,
            currency: 'EUR',
            customer: customer.id,
            receipt_email: token.email,
            description: product.title,
            shipping: {
                name: token.card.name,
                address: {
                    line1: "test",
                    country: token.card.address_country
                }
            }

        // }) 
        // **Not working** code-> "},
        }, {idempotencyKey})
    }).then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

app.listen(port,() => {console.log(`Server is running on ${port}`)})