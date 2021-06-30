import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ifNotCurrentDate, getDay} from './helper';

const RenderItem = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.userDiv}>
      {/* <TouchableOpacity onPress={() => <Modal item={item} />}>
        <Image
          style={styles.profileImg}
          source={{
            uri: item?.profileImg,
          }}
        />
      </TouchableOpacity> */}
      <Image
        style={styles.profileImg}
        source={{
          uri: item?.profileImg,
        }}
      />
      <View>
        <Text>{item?.name}</Text>
        <Text>
          <Text style={styles.span}>
            {item?.lastMessage.length > 20
              ? item?.lastMessage.slice(0, 20) + '...'
              : item?.lastMessage}
          </Text>

          <Text style={styles.span}>
            {ifNotCurrentDate(item?.lastMessageDate)
              ? ' ' + item?.lastMessageTime
              : ' ' + getDay(item?.lastMessageDate)}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  span: {
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default RenderItem;
