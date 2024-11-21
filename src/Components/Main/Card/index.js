// Card.js
import React from "react";

import {
  CardContainer,
  CardHeader,
  CardBody,
  PageContainer,
  FooterContainer,
  LeftSection,
  Avatar,
  Name,
  RightSection,
  StarIcon,
  StarCount,
} from "./styled";

const Card = ({ title, description, Owner, avatarUrl, startCount }) => {
  return (
    <PageContainer>
      <CardContainer>
        <CardHeader>{title}</CardHeader>
        <CardBody>{description}</CardBody>
        <FooterContainer>
          <LeftSection>
            <Avatar src={avatarUrl} alt={Owner ? Owner : "Owner"} />
            <Name>{Owner ? Owner : "Owner"}</Name>
          </LeftSection>
          <RightSection>
            <StarIcon>⭐</StarIcon>
            <StarCount>{startCount ? startCount : "-"}</StarCount>
          </RightSection>
        </FooterContainer>
      </CardContainer>
    </PageContainer>
  );
};

export default Card;
