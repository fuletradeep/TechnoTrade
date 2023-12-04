import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isReadyRef, navigationRef } from './NavigationServices';

export default function MainNavigator({ theme }) {

//   const auth = useSelector((state) => state.auth);
//   const catalog = useSelector((state) => state.catalog);

  useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);
  return (
    <NavigationContainer ref={navigationRef} onReady={() => isReadyRef.current = true}>
      {/* {!auth?.isAuthenticated ?
        (
          // NOT authenticated users rooting
          < AuthStack />
        )
        :
        (
          // Authenticated users rooting
          <AppStack />
        )
      } */}
      <AppStack />
    </NavigationContainer>
  );
}