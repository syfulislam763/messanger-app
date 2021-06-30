import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, FlatList, StyleSheet, Image} from 'react-native';
import fakeData from '../fakeData/fakeData';
import ListHeader from './ListHeader';
import RenderItem from './RenderItem';

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    setUserData(fakeData);
  }, [fakeData]);

  const handleSearch = srcItem => {
    setSearchItem(srcItem);
  };

  let searchResult = userData.filter(user =>
    user.name.toLowerCase().includes(searchItem.toLowerCase()),
  );

  return (
    <>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchItem}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResult}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <ListHeader
            handleSearch={{
              onChangeText: handleSearch,
              value: searchItem,
            }}
            userData={userData}
          />
        )}
        removeClippedSubviews={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#3f4652',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderRadius: 10,
    // borderColor: 'red',
  },
});

export default Home;
