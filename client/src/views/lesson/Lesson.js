import React from 'react';
import {object} from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStyle';
import {View} from 'react-native';
//question-types
import LessonContent from './lesson-content/LessonContent';
import LessonStages from './lesson-stages';

const Lesson = ({progress: {play}, navigation}) => {
  return (
    <View style={styles.container}>
      {!play && <LessonStages navigation={navigation} />}
      {play && <LessonContent navigation={navigation} />}
    </View>
  );
};

Lesson.propTypes = {
  progress: object.isRequired,
  navigation: object.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
  }),
  null,
)(Lesson);
