import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export default function BookListElement({ id, title, author, publicationDate, editionCount, onPress, isLastBook }) {

  const formatId = (strId) => {
    if (strId.indexOf('work') !== -1) {
      return strId.split("/")[2];
    }
    return strId;
  }

  return (
    <RectButton style={[styles.book, isLastBook && styles.lastBook]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.bookIconContainer}>
          <Image source={{uri: `http://covers.openlibrary.org/w/olid/${formatId(id)}-M.jpg?default=false`}} style={{width: 50, height: 70}} />
        </View>
        <View style={styles.bookTextContainer}>
          <Text style={styles.bookText}>{title} {publicationDate !== 'undefined' ? `(${publicationDate})` : "(Missing date)"}</Text>
          <Text style={styles.bookText}>{author !== 'undefined' ? `${author}` : "Author missing"}</Text>
          <Text style={styles.bookText}>{editionCount > 1 ? `${editionCount} editions existing` : "Only one edition"}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  bookIconContainer: {
    marginRight: 12,
  },
  bookTextContainer: {
    flex: 3
  },
  book: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastBook: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bookText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
    flex: 1
  },
});
