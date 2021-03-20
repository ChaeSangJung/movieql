#movieql

- movie API with Graphql

```
{
  person(id:1) {
    name
  }
}
```
```
query {
  people {
    name    
    id
  }
}
```
```
mutation {
  addMovie(name: "you me her", score: 10) {
    name
    score
  }
}
```
```
mutation {
  deleteMovie(id: 1)
}
```