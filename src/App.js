import React, { Component } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.client = new StreamChat('brbgs2r8pfvk');

    this.client.setUser(
      {
        id: "steve-smith",
        name: "Steve Smith",
        image: "https://getstream.io/random_svg/?id=steve-smith&name=Steve+smith"
      },
      //localStorage.getItem("token")
      this.client.devToken('steve-smith'),
    );

    this.channel = this.client.channel("messaging", "godevs", {
      image:
        "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
      name: "Talk about Anthropology"
    });
  }

  render() {
    return (
      <Chat client={this.client} theme={"messaging light"}>
        <Channel channel={this.channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    );
  }
}

export default App;