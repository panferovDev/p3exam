/* eslint-disable react/no-array-index-key */
import { Skeleton, VStack } from '@chakra-ui/react';
import React from 'react';
import StudentItem from './StudentItem';
import { useFetchStudents } from '../../hooks/useFetchStudents';
import { useStudentHandlers } from '../../hooks/useStudentHandlers';

export default function StudentListWrapper(): JSX.Element {
  const { students, studentsLoading } = useFetchStudents();
  const { deleteStudentHandler } = useStudentHandlers();

  if (studentsLoading) {
    return (
      <VStack className="mt-5" gap={2} spacing="2px" align="stretch">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} height="50px" rounded="md" />
          ))}
      </VStack>
    );
  }

  return (
    <VStack className="mt-5" spacing="2px" align="stretch">
      {students &&
        students.map((student, index) => (
          <StudentItem key={student.id} index={index} deleteStudentHandler={deleteStudentHandler} student={student} />
        ))}
    </VStack>
  );
}
