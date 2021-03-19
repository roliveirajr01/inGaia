import gql from 'graphql-tag';

const listQuery = gql`
query ($name: String!, $page: Int){
  characters( page: $page, filter: { name: $name }) {
   info {
    count
    pages
    next
    prev
  }
    results {
      name
      image
      species
      created
      gender
      status
      type   
      location {
      	name
    	}
      origin {
        name
      }
    }
  }
}
`

export default listQuery