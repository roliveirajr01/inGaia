import { InMemoryCache } from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http'

const httpLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client;