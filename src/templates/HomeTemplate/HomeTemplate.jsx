import { Outlet } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeTemplate;
