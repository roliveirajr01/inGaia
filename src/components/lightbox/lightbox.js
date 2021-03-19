import React from "react";
import {
  ContainerThumbs,
  ContainerInfos,
  InternalCard,
  DescriptionPerson,
  SectionInfos,
  ButtonClose
} from "./Style";
const LightBox = function (props) {
  const data = props.data;
  const buttonHandle = props.statusLightbox
  
  return (
    <ContainerThumbs>
      <ButtonClose onClick={buttonHandle}>X</ButtonClose>
      <ContainerInfos>
        <InternalCard>
          <img src={data.image} alt={`Photograph of ${data.name}`} />
          <div className="infos-card">
            <p>{data.name}</p>
            <span>{data.species}</span>
          </div>
        </InternalCard>

        <DescriptionPerson>
          <SectionInfos>
            <p className="title-description">ABOUT</p>
            <p className="text-description">
              {`${data.name} is a ${data.gender} ${data.species}.
              he his ${data.status} and well. Was last seen at ${data.created}`}
            </p>
          </SectionInfos>

          <SectionInfos>
            <p className="title-description">ORIGIN</p>
            <span>Planet</span>
            {console.log(data)}
            <p>{data.data.origin.name}</p>
          </SectionInfos>
        </DescriptionPerson>
      </ContainerInfos>
    </ContainerThumbs>
  );
};

export default LightBox;
