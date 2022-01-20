import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

const Category = () => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       data: [
  //         {id:1, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"https://via.placeholder.com/400x200/FFB6C1/000000"},
  //         {id:2, title: "Sit amet, consectetuer",             time:"2 minutes a go", image:"https://via.placeholder.com/400x200/48D1CC/000000"} ,
  //         {id:3, title: "Dipiscing elit. Aenean ",            time:"3 hour a go",    image:"https://via.placeholder.com/400x200/AFEEEE/000000"},
  //         {id:4, title: "Commodo ligula eget dolor.",         time:"4 months a go",  image:"https://via.placeholder.com/400x200/FFEFD5/000000"},
  //         {id:5, title: "Aenean massa. Cum sociis",           time:"5 weeks a go",   image:"https://via.placeholder.com/400x200/FFC0CB/000000"},
  //         {id:6, title: "Natoque penatibus et magnis",        time:"6 year a go",    image:"https://via.placeholder.com/400x200/DDA0DD/000000"},
  //         {id:7, title: "Dis parturient montes, nascetur",    time:"7 minutes a go", image:"https://via.placeholder.com/400x200/B0E0E6/000000"},
  //         {id:8, title: "Ridiculus mus. Donec quam",          time:"8 days a go",    image:"https://via.placeholder.com/400x200/87CEEB/000000"},
  //         {id:9, title: "Felis, ultricies nec, pellentesque", time:"9 minutes a go", image:"https://via.placeholder.com/400x200/4682B4/000000"},
  //       ]
  //     };
  //   }

  const [data, setData] = useState([
    {
      id: 1,
      title: 'Beverages',
      time: 'coffee/tea, juice, soda',
      image: '#FF7433',
      icon : require('../../assets/CategoryImg/beverages.png')
    },
    {
      id: 2,
      title: 'Bread/Bakery ',
      time: 'sandwich loaves, dinner rolls, tortillas, bagels',
      image: '#45CD38',
      icon : require('../../assets/CategoryImg/bread.png')
    },
    {
      id: 4,
      title: 'Dairy',
      time: 'cheeses, eggs, milk, yogurt, butter',
      image: '#3851CD',
      icon : require('../../assets/CategoryImg/dairy.png')
    },
    {
      id: 5,
      title: 'Dry/Baking Goods',
      time: 'cereals, flour, sugar, pasta, mixes',
      image: '#9738CD',
      icon : require('../../assets/CategoryImg/bakingGoods.png')
    },
    {
      id: 6,
      title: 'Frozen Foods',
      time: 'waffles, vegetables, individual meals, ice cream',
      image: '#CD38B9',
      icon : require('../../assets/CategoryImg/frozen.png')
    },
    {
      id: 7,
      title: 'Cleaners',
      time: 'all- purpose, laundry detergent, dishwashing liquid/detergent',
      image: '#CD3897',
      icon : require('../../assets/CategoryImg/cleaner.png')
    },
    {
      id: 8,
      title: 'Paper Goods',
      time: 'paper towels, toilet paper, aluminum foil, sandwich bags',
      image: '#CD3877',
      icon : require('../../assets/CategoryImg/paper.png')
    },
    {
      id: 9,
      title: 'Personal Care ',
      time: 'shampoo, soap, hand soap, shaving cream',
      image: '#CD3D38',
      icon : require('../../assets/CategoryImg/personal.png')
    },

    {
        id: 10,
        title: 'Other',
        time: 'baby items, pet items, batteries, greeting cards',
        image: '#CD9538',
        icon : require('../../assets/CategoryImg/other.png')
      },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <TouchableOpacity>
              <View style={styles.card}>
                <Image style={{...styles.cardImage , backgroundColor :item.image } } />
                <View style={styles.cardContent}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>


<Image style = {{position :'absolute' , top : 40 , right : 20 , height : 60 , width : 60 , resizeMode :'contain' , borderRadius : 8}} source = {item.icon}>

</Image>
                  {/* <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Image
                            style={styles.icon}
                            source={{
                              uri: 'https://img.icons8.com/color/70/000000/filled-like.png',
                            }}
                          />
                          <Text style={styles.socialBarLabel}>78</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Image
                            style={styles.icon}
                            source={{
                              uri: 'https://img.icons8.com/ios-glyphs/75/ffffff/comments.png',
                            }}
                          />
                          <Text style={styles.socialBarLabel}>25</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Image
                            style={styles.icon}
                            source={{
                              uri: 'https://img.icons8.com/material/50/ffffff/retweet.png',
                            }}
                          />
                          <Text style={styles.socialBarLabel}>13</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View> */}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    backgroundColor: '#E6E6E6',
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card: {
    marginHorizontal: 10,
    marginVertical: 5,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    backgroundColor: '#DCDCDC',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0,
  },
  cardImage: {
    flex: 1,
    height: 120,
    borderRadius: 10,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 22,
    color: '#ffffff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    color: '#ffffff',
    marginTop: 5,
    width : 200
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: '#ffffff',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
