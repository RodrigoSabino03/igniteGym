import { useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const [groupSelected, setGroupSelected] = useState('')
  const [exercises, setExercises] = useState([
    'Puxada frontal', 
    'Remada curvada', 
    'Remada unilateral', 
    'Levantamento terras'
  ]);
  const [groups, setGroups] = useState([
    'costas',
    'peito',
    'ombro',
    'biceps',
    'triceps',
    'perna',
    'abdomem',
  ])

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList 
        data={groups}
        keyExtractor={ item => item}
        renderItem={({ item }) => (
          <Group 
          name={item}
          isActive={groupSelected === item}
          onPress={() => setGroupSelected(item)}
        />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 4 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard name={item} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 8 }}
        />
      </VStack>
    </VStack>
  );
}