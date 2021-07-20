## Login with GraphQL

```gql
mutation($identifier: String!, $password: String!) {
  login(input: { identifier: $identifier, password: $password }) {
    jwt
    user {
      username
      confirmed
    }
  }
}
```

## Login with REST API
```
http://localhost:1337/auth/local

{
    "identifier": "user@strapi.io",
    "password": "strapiPassword"
}

```
