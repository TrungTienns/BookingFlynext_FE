import React from 'react';
import Header from '../../Layout/Header/Header';
import BookTicket from '../../pages/BookTicket/BookTicket';
import Footer from '../../Layout/Footer/Footer';
import Partner from '../../layout/Partner/Partner';

const BookTicketTemplate = () => {
  return (
    <>
      <Header />
      <BookTicket />
      <div className="-mb-20">
        <Partner />
      </div>
      <Footer />
    </>
  );
};

export default BookTicketTemplate;
