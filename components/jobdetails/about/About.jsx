import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About The Job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contentText}>{info}</Text>
      </View>
    </View>
  )
}

export default About