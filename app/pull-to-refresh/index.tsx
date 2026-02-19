import { useThemeColor } from '@/hooks/use-theme-color';
import ThemeText from '@/presentation/shared/ThemeText';
import ThemeView from '@/presentation/shared/ThemeView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({dark: 'black', light: 'white'}, 'background')

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000)
  }

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} colors={[primaryColor, 'red', 'orange']} progressBackgroundColor={backgroundColor} />}
    >
      <ThemeView margin>
        <ThemeText>PullToRefreshScreen</ThemeText>
      </ThemeView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
