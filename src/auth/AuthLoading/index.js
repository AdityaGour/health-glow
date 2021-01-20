import React, {useEffect, useState} from 'react';
import {Auth, Main} from '../../screens/Navigation';
import {ActivityIndicator} from 'react-native';

const AuthLoading = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // if (authenticating) {
  //   return <ActivityIndicator />;
  // }
  return isLoggedIn ? <Main /> : <Auth />;
};

export default AuthLoading;
