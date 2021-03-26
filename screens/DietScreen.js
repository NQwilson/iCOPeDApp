import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DietForm from '../components/DietForm';
import Diet from '../components/Diet';
import { getDiet } from '../store/actions/dietActions';

const DietScreen = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather);

  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'Food name is required!', [{ text: 'OK' }]);
    }

    setLoading(true);
    dispatch(getDiet(search, () => setLoading(false), () => setLoading(false)));
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <DietForm search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
        <Diet loading={loading} data={data} error={error} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DietScreen;