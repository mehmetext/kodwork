import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';

export default function JobDetails({route, navigation}) {
  const job = route.params.job;
  const {width} = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoContainer}>
        {job.categories[0] != null && (
          <View style={styles.info}>
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>Location: </Text>
              <Text>{job.locations[0].name}</Text>
            </Text>
          </View>
        )}
        {job.levels[0] != null && (
          <View style={styles.info}>
            <Text style={styles.infoText}>
              <Text style={styles.infoTitle}>Level: </Text>
              <Text>{job.levels[0].name}</Text>
            </Text>
          </View>
        )}
      </View>
      <Text style={styles.jobDetailText}>Job Detail</Text>
      <RenderHTML contentWidth={width} source={{html: job.contents}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  info: {
    backgroundColor: '#333',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  infoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoTitle: {
    color: '#febe5e',
  },
  jobDetailText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
