import React, { useState, Fragment } from 'react'
import { DescriptionContain, ImageLogo, FormSearch, ContainerList } from './Style'
import Cards from './../cards/Cards'
import imageTop from '../../img/image-top.svg'
import listQuery from '../../services/query/querys'
import { graphql, Query } from 'react-apollo'
import ApolloClient from '../../services/apollo'
import { ApolloProvider, useLazyQuery } from '@apollo/client'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
const Description = function (props) {
    const [searchFilter, setSearchFilter] = useState('');
    const [executeSearch, { data }] = useLazyQuery(listQuery)
    return (
        <Fragment>
            
                <DescriptionContain>
                    <ImageLogo src={imageTop} />
                    <FormSearch>
                        <input
                            name="search"
                            placeholder="Search characters"
                            onChange={(e) => setSearchFilter(e.target.value)}
                        />
                        <button
                            type="submit"
                            onClick={(e) =>
                                e.preventDefault(),
                                executeSearch({
                                    variables: { name: searchFilter }
                                })
                            }
                        >Search</button>
                    </FormSearch>

                </DescriptionContain>

            
            <ContainerList>
                <Cards
                    name='teste'
                    image='teste'
                    species='teste'
                    key='teste'
                />
            </ContainerList>


        </Fragment>
    )
}

export default graphql(listQuery, {
    name: 'list'
})(Description);