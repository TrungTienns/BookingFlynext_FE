import React, { useEffect } from 'react';
import SignUp from '../../Layout/SignUp/SignUp';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from '../../redux/Slice/loadingSlice';
import LoadingAnimation from '../../components/Animation/LoadingAnimation';

const SignUpPage = () => {
  const isLoading = useSelector((state) => state.loadingSlice.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleTurnOnLoading());
    setTimeout(() => {
      dispatch(handleTurnOffLoading());
    }, 2000);
  }, []);
  return (
    <>
      {isLoading && <LoadingAnimation />}
      <Header />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignUpPage;
