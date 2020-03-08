import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import BookListElement from '../components/BookListElement';

export default function WishListScreen() {

  const [ dataLoaded, setDataLoaded ] = useState(false);
  const [ books, setBooks ] = useState([]);

  const fetchWishList = async () => {
    // TODO: Use
    let url = "http://openlibrary.org/search.json?title=the+lord+of+the+rings";
    try {
      let response = await fetch(url);
      let data = await response.json();
      setBooks(data.docs.slice(0, 10));
      setDataLoaded(true);
      // console.log(Object.keys(data.docs[0]));
      return data.docs.slice(0, 10);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchWishList();
  }, [])

  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
      {dataLoaded &&
        <FlatList
          data={books}
          renderItem={({ item }) => (
            <BookListElement
              id={item.key}
              title={item.title}
              author={item.author_name}
              publicationDate={item.first_publish_year}
              editionCount={item.edition_count}
              onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}/>
          )}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  }
});
