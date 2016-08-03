var Datastore = require('nedb')
  , db = new Datastore({ filename: './ticket-form.db', autoload: true })

var doc = {
  types: [
    'Telefone',
    'Chat',
    'Email'
  ],
  states: [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PR",
    "PB",
    "PA",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SE",
    "SP",
    "TO",
  ],
  reasons: [
    'Dúvidas',
    'Elogios',
    'Sugestões'
  ]
}

db.insert(doc, function(err, doc) {
  if(err) {
    console.log(err)
  }
  console.log(doc)
})

