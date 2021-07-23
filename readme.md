# Backend Interview Template

## Mongo Notes

## Mongoose

The mongo url path ends with the name of the database.

e.g.

`mongodb://localhost:27017/practice`

The database connected to would be `practice` the collections map to Mongoose models in that database.

### Typescript

https://mongoosejs.com/docs/typescript.html

## Mongosh

### Queries

`db.collection.find({})`

`db.collection.findOne({})`

#### Partial Responses / Projection Documents

`db.collection.find({query: "param"}, {projection: 0})`

To return partial results a 0 or 1 is associated with the field name in the second argument of a find object.

Here's an example for the weather data

`db.weather.find({callLetters: 'PLAT'}, {elevation: 1, _id: 0, "visibility.distance.value": 1})`

## React Typescript (for later)

https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/