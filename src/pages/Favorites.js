import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useJobs} from '../store/jobs';
import Job from '../components/Job';

export default function Favorites({navigation}) {
  const {favorites} = useJobs();

  const renderItem = ({item}) => (
    <Job
      job={item}
      onPress={() => {
        navigation.navigate('JobDetails', {
          job: item,
        });
      }}
    />
  );

  return (
    <FlatList
      data={favorites}
      renderItem={renderItem}
      contentContainerStyle={styles.flatList}
      ItemSeparatorComponent={<View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    padding: 10,
  },
  separator: {
    height: 10,
  },
});
