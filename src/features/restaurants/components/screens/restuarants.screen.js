import { SafeAreaView, StatusBar, FlatList } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import Restaurants_info from "../restaurants_info";
import styled from "styled-components/native";

// const isAndriod = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
  flex-direction: column;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestuarantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => <Restaurants_info />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
      {/* <Restaurants_info /> */}
    </SafeArea>
  );
};

export default RestuarantsScreen;
