import React from 'react';
import Banner from '../../Layout/Banner/Banner';
import Ticket from '../../Layout/Ticket/Ticket';
import Benefits from '../../Layout/Benefits/Benefits';
import Feedback from '../../Layout/Feedback/Feedback';
import Partner from '../../Layout/Partner/Partner';
import Blog from '../../Layout/Blog/Blog';
import Chatbox from '../../components/ChatBox/ChatBox';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Ticket />
      <Benefits />
      <Partner />
      <Feedback />
      <Blog />
      <Chatbox />
    </>
  );
};

export default Homepage;
