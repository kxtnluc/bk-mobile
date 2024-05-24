import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { getBookById } from '@/managers/keepManager';
import { BookObj } from '@/types/KeepTypes';
import { useLinkProps } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { Entypo, Foundation } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import { Button } from 'react-native-paper';

export default function BookPage() {

  const paramObj: any = useLocalSearchParams()
  const bookid: number = parseInt(paramObj.book)

  const [book, setBook] = useState<BookObj>({ id: 0, title: '', subTitle: '', description: '', imageUrl: '', ISBN_10: 0, ISBN_13: 0, googleBookPin: '', author: '', popularQuote: '', year: 0, pageCount: 0, textSize: 0, complexity: 0, views: 0, averageRating: 0, reviews: [] })
  const [filteredReviews, setFilteredReviews] = useState<any>([])

  useEffect(() => {
    // console.log(paramObj)
    // console.log(bookid)
    getBookById(bookid).then(setBook)
  }, [])

  useEffect(() => {
    setFilteredReviews(book.reviews)
  }, [book])
 

  //retrieve book by url id

  //filter button handlers and variables

  const [everyoneFilter, setEveryoneFilter] = useState(true)
  const [highFilter, setHighFilter] = useState(true)



  const handleEveryoneFilter = () => {
    setEveryoneFilter(!everyoneFilter)
    if(everyoneFilter == false){
      //set reviews to show only those that are of friends
    }
  }

  const handleHighFilter = () => { //this isnt really working but kinda is. The page is updating too late.
    setHighFilter(!highFilter)
    let sortedReviews:any = []

    if(highFilter === false){
      sortedReviews = [...filteredReviews].sort((a,b) => a.rating - b.rating)
    }

    if(highFilter === true){
       sortedReviews = [...filteredReviews].sort((a,b) => b.rating - a.rating)
    }

    setFilteredReviews(sortedReviews)
  }

  return (
    <View style={styles.main}>

      <View style={styles.sectionTop}>

        <View style={styles.containerCover}>
          <Image source={{ uri: book.imageUrl }} style={styles.coverImg} />
        </View>

        <View style={styles.containerInfo}>

          <View style={styles.articleTitleAuthor}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author} ~ *year*</Text>
          </View>

          <View style={styles.articleQuote}>
            <Text style={styles.quote}>{book.popularQuote}</Text>
          </View>

          <View style={styles.articleStats}>

            <View style={styles.pageCount}>
              <Foundation name="page-copy" size={18} color="black" />
              <Text style={styles.statText}>{book.pageCount}</Text>
            </View>
            <View style={styles.sizeFont}>
              <Fontisto name="font" size={16} color="black" />
              <Text style={styles.statText}>{book.textSize}</Text>
            </View>

          </View>

          <View style={styles.articleRankingViews}>

            <View style={styles.divRanking}>
              <Entypo style={styles.starIcon} name="star" size={22} color="black" />
              <Text style={styles.rankingText}>{book.averageRating}</Text>
            </View>

            <View style={styles.divViews}>
              <Text style={styles.viewsText}>{book.views}</Text>
              <Entypo name="eye" size={22} color="black" style={styles.eyeIcon} />
            </View>



          </View>


        </View>



      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


      <View style={stylesMiddle.articleDescription}>
        <Text style={stylesMiddle.descText}>{book.description}</Text>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={stylesBottom.sectionBottom}>

        <View style={stylesBottom.containerReadBy}>

          <View style={stylesBottom.articleHeader}>
            <Text style={stylesBottom.headerText}>Read By</Text>
          </View >

          <View style={stylesBottom.articleFriendRankings}>
            <View style={stylesBottom.friendRanking}>

              <View style={stylesBottom.pfp}>
                <Image style={stylesBottom.pfpImage} source={{ uri: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' }} />
              </View>

              <View style={stylesBottom.ranking}>
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
              </View>

            </View>
            <View style={stylesBottom.friendRanking}>

              <View style={stylesBottom.pfp}>
                <Image style={stylesBottom.pfpImage} source={{ uri: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' }} />
              </View>

              <View style={stylesBottom.ranking}>
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
              </View>

            </View>

            <View style={stylesBottom.friendRanking}>

              <View style={stylesBottom.pfp}>
                <Image style={stylesBottom.pfpImage} source={{ uri: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' }} />
              </View>

              <View style={stylesBottom.ranking}>
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                <Entypo style={styles.starIcon} name="star" size={10} color="black" />
              </View>

            </View>

          </View>

        </View>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={stylesBottom.containerReviews}>

          <View style={stylesBottom.articleHeaderFilter}>

            <View>
              <Text style={stylesBottom.headerText}>Reviews</Text>
            </View>

            <View style={stylesBottom.divFilters}>
              {everyoneFilter ? (<Button style={stylesBottom.everyoneFilterButton} onPress={handleEveryoneFilter} rippleColor='lightgreen' buttonColor='forestgreen' mode='contained'>Everyone</Button>) : (<Button style={stylesBottom.everyoneFilterButton} onPress={handleEveryoneFilter} rippleColor='forestgreen' textColor='black' buttonColor='lightblue' mode='contained'>Friends</Button>)}
              {highFilter ? (<Button style={stylesBottom.highFilterButton} onPress={handleHighFilter} mode='outlined' textColor='forestgreen'>High</Button>) : (<Button style={stylesBottom.highFilterButton} onPress={handleHighFilter} mode='outlined' textColor='lightblue'>Low</Button>)}


            </View>

          </View>

          <View style={stylesBottom.articleReviews}>
            {filteredReviews.map((r:any, i:number) => {
              return (
                <View key={i} style={stylesBottom.review}>

                  <View style={stylesBottom.reviewpfp}>
                    <Image style={stylesBottom.reviewPfpImage} source={{ uri: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' }} />
                  </View>

                  <View style={stylesBottom.usernameAndRatingAndBody}>
                    <View style={stylesBottom.usernameAndRating}>
                      <View style={stylesBottom.username}>
                        <Text style={stylesBottom.usernameText}>{r.header} ~ {r.rating}</Text>
                      </View>
                      <View style={stylesBottom.andRating}>
                        <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                        <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                        <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                        <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                        <Entypo style={styles.starIcon} name="star" size={10} color="black" />
                      </View>
                    </View>
                    <View style={stylesBottom.body}>
                      <Text style={stylesBottom.bodyText}>{r.body}</Text>
                    </View>
                  </View>
                </View>
              )
            })}



          </View>
        </View>

      </View>




      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({


  main: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  sectionTop: {
    // borderWidth: 2,
    // borderColor: 'black',

    maxHeight: 155,

    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 7,
    marginVertical: 10,
  },

  containerCover: {
    // backgroundColor: "#c3841f3b",
    borderWidth: 1,
    borderRadius: 2,
    borderStyle: "solid",
    borderColor: "black",

    height: 150,

    aspectRatio: 2 / 3.25,
  },

  coverImg: {
    flex: 1,

    width: null,
    height: null,

    resizeMode: 'cover',
  },

  containerInfo: {
    // borderWidth: 1,
    // borderColor: 'black',

    flex: 1,
    marginLeft: 5,
    height: 150,
    width: 'auto'
  },

  articleTitleAuthor: {
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  author: {
    fontStyle: 'italic',
    fontSize: 12,
  },

  articleQuote: {

    marginVertical: 5,

    width: '100%',
    minHeight: 25,
    maxHeight: 46,

    borderWidth: 1,
    borderRadius: 2,
    borderStyle: "solid",
    borderColor: "black",

    overflow: 'scroll',
  },

  quote: {
    fontSize: 14,
    fontStyle: 'italic',
    marginVertical: 3,
    marginHorizontal: 3,
    flexWrap: 'wrap',
  },

  articleStats: {
    flexDirection: 'row',

    // borderWidth: 1,
    // borderColor: 'black',

  },

  pageCount: {
    flexDirection: 'row',

    marginHorizontal: 5,
  },

  sizeFont: {
    flexDirection: 'row',

    marginHorizontal: 5,
  },

  statText: {
    fontSize: 14,
    marginHorizontal: 5,
  },

  articleRankingViews: {
    // borderWidth: 1,
    // borderColor: 'black',

    flexDirection: "row",

    marginTop: 'auto',
  },

  divViews: {
    marginHorizontal: 5,
    flexDirection: "row",
    marginLeft: 'auto',
  },

  viewsText: {
    alignContent: "center",
    marginBottom: 2,
    fontStyle: 'italic',
    marginRight: 5,
  },

  eyeIcon: {
    // borderWidth: 1,
    // borderColor: 'black',
  },

  starIcon: {
    // borderWidth: 1,
    // borderColor: 'black',
  },

  divRanking: {
    marginLeft: 2,

    flexDirection: "row"
  },

  rankingText: {
    alignContent: "center",
    fontWeight: 600,
    marginTop: 1,
    marginLeft: 5,
    fontSize: 18,
  },

  separator: {
    // borderWidth: 1,
    // borderColor: 'black',

    marginVertical: 10,
    alignSelf: 'center',
    width: '80%',
    height: 1,
  },
});

const stylesMiddle = StyleSheet.create({
  articleDescription: {
    borderWidth: 1,
    borderColor: "black",

    marginHorizontal: 12,
    maxHeight: 100,
  },

  descText: {
    marginHorizontal: 5,
    marginVertical: 2,
    overflow: "scroll",
    fontSize: 14,
  },
})

const stylesBottom = StyleSheet.create({
  sectionBottom: {
    // borderWidth: 0.5,
    // borderColor: 'black'


  },

  containerReadBy: {
    // borderWidth: 1,
    // borderColor: 'black',

    height: 150,
    marginHorizontal: 12,
  },

  articleHeader: {
    // borderWidth: 1,
    // borderColor: 'black',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 700,
  },

  articleFriendRankings: {
    marginHorizontal: 10,
    marginVertical: 12,
    flexDirection: 'row',
    // overflow: 'hidden',
  },

  friendRanking: {
    marginHorizontal: 8,

  },

  pfp: {
    borderWidth: 1,

    flexDirection: 'row',
    borderColor: "black",
    borderRadius: 100,
    width: 65,
    height: 65,
    padding: 2,
  },

  pfpImage: {
    flex: 1,
    borderColor: "black",
    borderRadius: 100,

    resizeMode: 'cover'
  },

  ranking: {
    marginTop: 2,
    flexDirection: 'row',
    alignSelf: 'center'


  },

  containerReviews: {
    // borderWidth: 1,

    marginHorizontal: 12,
  },

  articleHeaderFilter: {
    flexDirection: "row",
  },

  divFilters: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },

  everyoneFilterButton: {
    width: 110,
    marginRight: 10,
  },

  highFilterButton: {
    width: 110,
  },

  articleReviews: {
    // borderWidth: 1,
    // borderColor: 'blue',

    marginVertical: 10,
    minHeight: 100,
    width: '100%',

  },

  review: {
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: 'row',

    marginVertical: 2,

    height: 73,
    width: '100%'
  },

  reviewHeaders: {
  },

  reviewpfp: {
    borderWidth: 1,
    borderRadius: 100,
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginLeft: 5
  },

  reviewPfpImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  usernameAndRatingAndBody: {
    // borderWidth: 2,
    height: 71,
    marginLeft: 10,
    width: 335,
    overflow: 'hidden'
  },

  usernameAndRating: {
    flexDirection: 'row',
  },

  username: {
  },

  usernameText: {
    fontWeight: 600,
  },

  andRating: {
    alignSelf: 'center',
    marginLeft: 5,
    flexDirection: 'row',
  },

  body: {
  },

  bodyText: {
    fontSize: 12,
  }

})