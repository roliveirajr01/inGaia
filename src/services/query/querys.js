import gql from 'graphql-tag';

const listQuery = gql`
query ($name: String!){
    characters(page: 2, filter: { name: $name }) {
      results {
        name
        image
        species
      }
    }
  }
`

export default listQuery