import React from 'react';
import { View } from 'react-native';

const InnerSection = props => {
  return <View style={styles.container}>{props.children}</View>
}

const styles= {
  container: {
    marginTop: 10,
    marginBottom: 10
  }
}

export default InnerSection;
