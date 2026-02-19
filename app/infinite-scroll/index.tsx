import { useThemeColor } from '@/hooks/use-theme-color';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemeView from '@/presentation/shared/ThemeView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const primaryColor = useThemeColor({}, 'primary')

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000)
  }

  return (
    <ThemeView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View className='h-72 justify-center'>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemeView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {

  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      className='h-[400px] w-[100%]'
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{
    //     height: 400,
    //     width: '100%'
    //   }}
    // />
  )
}