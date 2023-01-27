import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Job({job, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.name}>{job.name}</Text>
        <View style={styles.infos}>
          {job.categories[0] != null && (
            <View style={styles.block}>
              <Text style={styles.blockText}>{job.categories[0].name}</Text>
            </View>
          )}
          {job.locations[0] != null && (
            <View style={[styles.block, styles.location]}>
              <Text style={[styles.locationText]}>{job.locations[0].name}</Text>
            </View>
          )}
          {job.levels[0] != null && (
            <View style={[styles.block, styles.level]}>
              <Text style={[styles.blockText]}>{job.levels[0].name}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'flex-start',
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  infos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 5,
  },
  block: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#ef5350',
    marginRight: 5,
    marginTop: 5,
  },
  location: {
    backgroundColor: '#febe5e',
  },
  level: {
    backgroundColor: '#444bff',
  },
  blockText: {
    color: 'white',
  },
  locationText: {
    color: 'black',
  },
});
