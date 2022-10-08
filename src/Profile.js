import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  Text,
  View,
  Image
} from 'react-native';

import COLOR from './Color';
import styles from './styles';

const ProfileScreen = () => {
  let [profileData, setProfileData] = useState('');

  const fetchData = useCallback(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setProfileData(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <SafeAreaView style={styles.safearea}>
        {
          profileData &&
          <View style={styles.profileViewStyle}>
            <Image
              source={require('./Images/profileImg.webp')}
              style={styles.profileImageStyle}
            />
            <Text style={[styles.fontFour, { color: COLOR.BLACK }]}>{profileData["name"]}</Text>
            <Text style={styles.fontOne}>{profileData["email"]}</Text>
            <Text style={styles.fontOne}>{profileData["address"]["street"]}, {profileData["address"]["suite"]}, {profileData["address"]["city"]}</Text>
          </View>
        }
      </SafeAreaView>
    </>
  )
}

export default ProfileScreen;