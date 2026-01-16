export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  grade: string;
  address: string;
  enrollmentDate: string;
}

export type StudentFormData = Omit<Student, 'id'>;
