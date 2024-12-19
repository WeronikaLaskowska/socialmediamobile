import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {horizontalScale} from '../../../assets/styles/scaling';
import Title from '../components/Title';
import UserPost from '../components/UserPost';
import UserStory from '../components/UserStory';
import homeStyle from './style';
import globalStyle from '../../../assets/styles/globals';
import {Routes} from '../../../navigation/routes';
import {NavigationProp} from '@react-navigation/native';
function Home({
  navigation,
}: {
  navigation: NavigationProp<any>;
}): React.JSX.Element {
  const userStories = [
    {
      id: 1,
      firstName: 'John',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      firstName: 'Annie',
      profileImage: undefined,
    },
    {
      id: 3,
      firstName: 'Adam',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 4,
      firstName: 'Annie',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 5,
      firstName: 'Julie',
      profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 6,
      firstName: 'Alex',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 7,
      firstName: 'Natalie',
      profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 8,
      firstName: 'Joseph',
      profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 9,
      firstName: 'Amanda',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 10,
      firstName: 'Amanda',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 11,
      firstName: 'Amanda',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 12,
      firstName: 'Amanda',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 13,
      firstName: 'Amanda',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 14,
      firstName: 'Amanda',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 15,
      firstName: 'Amanda',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];
  const userPosts = [
    {
      firstName: 'Allision',
      lastName: 'Becker',
      location: 'New York',
      likes: 1201,
      comments: 24,
      bookmarks: 44,
      id: 1,
      profileImage: undefined,
    },
    {
      firstName: 'Allision',
      lastName: 'Becker',
      location: 'New York',
      likes: 1201,
      comments: 24,
      bookmarks: 44,
      id: 2,
      profileImage: undefined,
    },
    {
      firstName: 'Allision',
      lastName: 'Becker',
      location: 'New York',
      likes: 1201,
      comments: 24,
      bookmarks: 44,
      id: 3,
      profileImage: undefined,
    },
    {
      firstName: 'Allision',
      lastName: 'Becker',
      location: 'New York',
      likes: 1201,
      comments: 24,
      bookmarks: 44,
      id: 4,
      profileImage: undefined,
    },
    {
      firstName: 'Allision',
      lastName: 'Becker',
      location: 'New York',
      likes: 1201,
      comments: 24,
      bookmarks: 44,
      id: 5,
      profileImage: undefined,
    },
  ];

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  const limit = 5;
  const [page, setPage] = useState(1);
  const [renderedData, setRenderedData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const limitPost = 2;
  const [pagePosts, setPagePosts] = useState(1);
  const [renderedDataPosts, setRenderedDataPosts] = useState<any[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  const pagination = (
    database: any[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) return [];
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoading(true);
    const getInitialData = pagination(userStories, 1, limit);
    setRenderedData(getInitialData);
    setIsLoading(false);

    setIsLoadingPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, limitPost);
    setRenderedDataPosts(getInitialDataPosts);
    setIsLoadingPosts(false);

    Dimensions.addEventListener('change', res => {
      setScreenData(res.screen);
    });
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View style={homeStyle.header}>
        <Title text={"Let's explore"} />
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Profile)}
          style={homeStyle.messageIcon}>
          <FontAwesomeIcon color="#898DAE" icon={faEnvelope} />
          <View style={homeStyle.messageCounter}>
            <Text style={homeStyle.messageCounterText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={
            <View style={homeStyle.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoading) return;
                  setIsLoading(true);
                  const content = pagination(userStories, page + 1, limit);
                  if (content.length > 0) {
                    setPage(page + 1);
                    setRenderedData([...renderedData, ...content]);
                  }
                  setIsLoading(false);
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={renderedData}
                renderItem={({item}) => (
                  <View
                    key={item.id}
                    style={{marginHorizontal: horizontalScale(10)}}>
                    <UserStory
                      firstName={item.firstName}
                      id={item.id}
                      profileImage={item.profileImage}
                    />
                  </View>
                )}
              />
            </View>
          }
          data={renderedDataPosts}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingPosts) return;
            setIsLoadingPosts(true);
            const content = pagination(userPosts, pagePosts + 1, limitPost);
            if (content.length > 0) {
              setPagePosts(pagePosts + 1);
              setRenderedDataPosts([...renderedDataPosts, ...content]);
            }
            setIsLoadingPosts(false);
          }}
          renderItem={({item}) => (
            <>
              <UserPost
                bookmarks={item.bookmarks}
                comments={item.comments}
                firstName={item.firstName}
                id={item.id}
                lastName={item.lastName}
                likes={item.likes}
                profileImage={item.profileImage}
                location={item.location}
              />
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
