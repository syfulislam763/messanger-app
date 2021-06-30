import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, Image} from 'react-native';

const ListHeader = ({handleSearch: {onChangeText, value}, userData}) => {
  const renderItem = ({item}) => (
    <View style={styles.statusBar}>
      <Image
        style={styles.profileImg}
        source={{
          uri: item?.profileImg,
        }}
      />
      <Text style={{fontSize: 10, color: 'white'}}>{item?.name}</Text>
    </View>
  );

  let onlineUser = userData.filter(user => user?.status === 'online');

  return (
    <View>
      {/* <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
        removeClippedSubviews={false}
      /> */}
      <FlatList
        data={onlineUser}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.id}
        removeClippedSubviews={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //   searchInput: {
  //     backgroundColor: '#5a8280',
  //     padding: 7,
  //     borderBottomWidth: 1,
  //     // borderColor: 'red',
  //   },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // marginBottom: 10,
  },
  statusBar: {
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    width: 100,
    height: 100,
    padding: 10,
  },
});

export default ListHeader;
