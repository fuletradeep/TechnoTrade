import { useDispatch, useSelector } from 'react-redux';
import { AppStackC } from '@app/constants/navigation';
import { useNavigation } from '@react-navigation/native';
import R from '@app/res/R';



export function useFoodInsightModel() {
  const dispatch = useDispatch();
  const navigation = useNavigation()

 


  const onHeaderBtnPress = () => {
    navigation.navigate(AppStackC.HOME_SCREEN)
  }

  return {
    onHeaderBtnPress,
  };
}
