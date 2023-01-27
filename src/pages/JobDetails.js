import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderHTML from 'react-native-render-html';
import {addFavoritesD, removeFavoritesD} from '../store/dispatch';
import {useJobs} from '../store/jobs';

export default function JobDetails({route, navigation}) {
  const job = route.params.job;
  const {width} = useWindowDimensions();
  const {favorites} = useJobs();

  const [alreadyFavorited, setalreadyFavorited] = useState(true);

  useEffect(() => {
    if (favorites.find(e => e.id === job.id)) {
      setalreadyFavorited(true);
    } else {
      setalreadyFavorited(false);
    }
  }, [favorites, job.id]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <Text style={styles.jobDetailText}>Job Detail</Text>
      <RenderHTML contentWidth={width} source={{html: job.contents}} />
      <TouchableOpacity
        onPress={() => {
          if (!alreadyFavorited) {
            addFavoritesD({job: job});
          } else {
            removeFavoritesD({id: job.id});
          }
        }}>
        <View
          style={[
            styles.button,
            alreadyFavorited ? styles.removeButton : null,
          ]}>
          <Text style={styles.buttonText}>
            {!alreadyFavorited ? 'Favorite Job' : 'Remove Favorites'}
          </Text>
        </View>
      </TouchableOpacity>
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
  button: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#ef5350',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
