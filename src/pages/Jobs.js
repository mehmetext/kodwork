import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {setJobsD} from '../store/dispatch';
import {useJobs} from '../store/jobs';
import Job from '../components/Job';

export default function Jobs({navigation}) {
  const [loading, setLoading] = useState(true);
  const {jobs} = useJobs();

  useEffect(() => {
    try {
      axios('https://www.themuse.com/api/public/jobs?page=1').then(({data}) => {
        setJobsD(data.results);
        setLoading(false);
      });
    } catch (error) {}
  }, []);

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

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <FlatList
      data={jobs}
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
