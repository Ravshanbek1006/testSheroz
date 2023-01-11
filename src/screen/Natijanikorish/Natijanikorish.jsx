import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import PageNameCard from '../../components/Card/PageNameCard';
import QuizCard from '../../components/Card/QuizCard';

export default function Natijanikorish(props) {
  console.log(props.route.params.value);
  const [Natija, setNatija] = useState(props.route.params.value);
  return (
    <SafeAreaView style={styles.container}>
      <PageNameCard title="Natijangiz" />
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {Natija &&
          Natija.map((item, index) => {
            return (
              <QuizCard
                key={index}
                CorrAnswer={item.UserAns}
                img={item.image}
                javobstatus={item.type}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
