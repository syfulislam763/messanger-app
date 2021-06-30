const fakeData = [
  {
    id: '234fdva',
    name: 'Mahmudul Hasan',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hello? Whatsup!!',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '28/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '12:10:AM',
    status: 'offline',
  },
  {
    id: 'jg646dfg',
    name: 'Redwan Ahmed',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi, How are you?',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '30/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '11:00:PM',
    status: 'online',
  },
  {
    id: '12gdfg4',
    name: 'Syful Islam',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hello!',
    address: 'New Market Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '30/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '04:00:AM',
    status: 'offline',
  },
  {
    id: '234gfgva',
    name: 'Naim Khan',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hey bro!!',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '29/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '03:00:PM',
    status: 'offline',
  },
  {
    id: '35445fdva',
    name: 'Arpan Chakma',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi,',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '28/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '06:00:PM',
    status: 'offline',
  },
  {
    id: '30445fdva',
    name: 'Rakib HR',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi,',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '10/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '06:00:PM',
    status: 'offline',
  },
  {
    id: '354uj5fdva',
    name: 'Noman Dr',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi,',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '07/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '06:00:PM',
    status: 'online',
  },
  {
    id: '354565fdva3',
    name: 'Sabbir SJ',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi,',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '20/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '06:00:PM',
    status: 'online',
  },
  {
    id: '35hffdva',
    name: 'Saif',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi,',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '15/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '06:00:PM',
    status: 'offline',
  },
  {
    id: 'fdva',
    name: 'Arif',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi,',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '23/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '06:00:PM',
    status: 'online',
  },
  {
    id: '45fdva',
    name: 'Rayhan',
    profileImg:
      'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    lastMessage: 'Hi Brother, How are you?,',
    address: 'Mirpur Dhaka 1216',
    email: 'example@gmail.com',
    phone: '0124124124',
    lastMessageDate: '30/06/2021', // It will be show just day name like (Sun/Mon/Tue)
    lastMessageTime: '06:00:PM',
    status: 'online',
  },
];

export default fakeData;
