import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          leftAvatar={{ source: require("./images/react-lake.jpg") }}
        />
      );
    };
    // flatlist works like map in previous project but has lazy loading (loads only whats on screen)
    return <FlatList data={this.state.campsites} renderItem={renderDirectoryItem} keyExtractor={(item) => item.id.toString()} />;
  }
}

export default Directory;
