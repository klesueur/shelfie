
module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then((products) => {
            res.status(200).send(products)
        })
    },
    addProduct: (req, res) => {}
}
