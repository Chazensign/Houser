
module.exports = {
  addHouse: (req, res) => {
    const db = req.app.get('db')
    const {propName,
  address,
  city,
  state,
  zip,
  img,
  mortgage,
  rent} = req.body
      if ((propName && address && city && state && zip && img && mortgage && rent)) {
        db.add_house([
          propName,
          address,
          city,
          state,
          +zip,
          img,
          mortgage,
          rent
        ]).then(homes => res.status(200).send(homes))
      } else {
        return res.status(406).send('Please fill out all input fields')
      }
  },
  getHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then(houses => {
      res.status(200).send(houses)
    })
  },
  deleteHouse: (req, res) => {

    const db = req.app.get("db")
    db.delete_house(req.params.id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch()
  }
}