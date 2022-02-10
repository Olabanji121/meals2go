import * as React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/Spacer";
import { Text } from "../../../components/Typography/text_component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  RatingContiner,
  Section,
  Icon,
  RatingAndOpenContainer,
} from "./restaurants_info_styles";

const ListCards = ({ restaurant = {} }) => {
  const {
    name = "Obanj Take-out ",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://d3aux7tjp119y2.cloudfront.net/images/Tak2-CMSTemplate_IrMZHla.width-1650.jpg",
    ],
    address = "6 Shale Street, Lidcombe, 2141 NSW",
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Card.Actions>
        <Section>
          <Info>
            <Text variant="label">{name}</Text>

            <RatingContiner>
              {ratingArray.map((item, i) => (
                <SvgXml xml={star} width={20} height={20} key={i} />
              ))}
            </RatingContiner>

            <Address>{address}</Address>
          </Info>
          <RatingAndOpenContainer>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}

            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </RatingAndOpenContainer>
        </Section>
      </Card.Actions>
    </RestaurantCard>
  );
};

export default ListCards;
