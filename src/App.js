import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('brbgs2r8pfvk');
//const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY3JpbXNvbi1uaWdodC04In0.hRhOSIgRh3yHLyVPU5N9D3fB1Dr02p1Qeo8HDlPATLA';

chatClient.setUser(
  {
    id: 'ed-bellah',
    name: 'Ed Bellah',
    image: 'https://getstream.io/random_svg/?id=ed-bellah&name=Ed+Bellah'
  },
  //userToken,
  chatClient.devToken('ed-bellah'),
);

const filters = { type: 'messaging' };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App; 
