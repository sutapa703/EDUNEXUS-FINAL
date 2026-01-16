import { useState, useEffect } from 'react';
import { Student, StudentFormData } from '@/types/student';

const STORAGE_KEY = 'students_data';

const generateId = () => Math.random().toString(36).substring(2, 11);

const getInitialStudents = (): Student[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [
    {
      id: generateId(),
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@school.edu',
      phone: '(555) 123-4567',
      dateOfBirth: '2005-03-15',
      grade: '10th',
      address: '123 Main St, City, State 12345',
      enrollmentDate: '2020-09-01',
    },
    {
      id: generateId(),
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@school.edu',
      phone: '(555) 987-6543',
      dateOfBirth: '2006-07-22',
      grade: '9th',
      address: '456 Oak Ave, Town, State 67890',
      enrollmentDate: '2021-09-01',
    },
    {
      id: generateId(),
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.j@school.edu',
      phone: '(555) 456-7890',
      dateOfBirth: '2004-11-08',
      grade: '11th',
      address: '789 Pine Rd, Village, State 11223',
      enrollmentDate: '2019-09-01',
    },
  ];
};

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>(getInitialStudents);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const addStudent = (data: StudentFormData) => {
    const newStudent: Student = {
      ...data,
      id: generateId(),
    };
    setStudents((prev) => [...prev, newStudent]);
    return newStudent;
  };

  const updateStudent = (id: string, data: StudentFormData) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...data, id } : student
      )
    );
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const getStudent = (id: string) => {
    return students.find((student) => student.id === id);
  };

  const filteredStudents = students.filter((student) => {
    const search = searchTerm.toLowerCase();
    return (
      student.firstName.toLowerCase().includes(search) ||
      student.lastName.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search) ||
      student.grade.toLowerCase().includes(search)
    );
  });

  return {
    students: filteredStudents,
    searchTerm,
    setSearchTerm,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    totalCount: students.length,
  };
};
