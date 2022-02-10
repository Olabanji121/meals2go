import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[1]};
`;

export const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RatingContiner = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
`;

export const RatingAndOpenContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

export const Section = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const Icon = styled.Image`
width:  15px
height: 15px

`;
