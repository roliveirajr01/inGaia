import React, { useState, Fragment } from "react";
import {
  DescriptionContain,
  ImageLogo,
  FormSearch,
  ContainerList,
} from "./Style";
import Cards from "./../cards/Cards";
import imageTop from "../../img/image-top.svg";
import listQuery from "../../services/query/querys";
import { useLazyQuery } from "@apollo/client";

const Description = function (props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { data }] = useLazyQuery(listQuery);

  const handleClick = (e) => {
    e.preventDefault();
    executeSearch({
      variables: { name: searchFilter },
    });
  };

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
          <button type="submit" onClick={handleClick}>
            Search
          </button>
        </FormSearch>
      </DescriptionContain>

      <ContainerList>
        {data?.characters?.results?.map(function (item, i) {
          return (
            <Cards
              key={i}
              data={item}
              name={item.name}
              image={item.image}
              species={item.species}
              created={item.created}
              gender={item.gender}
              status={item.status}
            />
          );
        })}
      </ContainerList>
    </Fragment>
  );
};

export default Description;
