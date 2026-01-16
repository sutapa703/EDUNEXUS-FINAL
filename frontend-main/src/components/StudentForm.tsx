import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Student, StudentFormData } from '@/types/student';
import { useEffect } from 'react';

const studentSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(50, 'Max 50 characters'),
  lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Max 50 characters'),
  email: z.string().trim().email('Invalid email address').max(100, 'Max 100 characters'),
  phone: z.string().trim().min(1, 'Phone is required').max(20, 'Max 20 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  grade: z.string().min(1, 'Grade is required'),
  address: z.string().trim().min(1, 'Address is required').max(200, 'Max 200 characters'),
  enrollmentDate: z.string().min(1, 'Enrollment date is required'),
});

interface StudentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: StudentFormData) => void;
  student?: Student | null;
}

const grades = ['9th', '10th', '11th', '12th'];

export const StudentForm = ({ open, onOpenChange, onSubmit, student }: StudentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      grade: '',
      address: '',
      enrollmentDate: '',
    },
  });

  const gradeValue = watch('grade');

  useEffect(() => {
    if (student) {
      reset(student);
    } else {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        grade: '',
        address: '',
        enrollmentDate: new Date().toISOString().split('T')[0],
      });
    }
  }, [student, reset, open]);

  const handleFormSubmit = (data: StudentFormData) => {
    onSubmit(data);
    onOpenChange(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{student ? 'Edit Student' : 'Add New Student'}</DialogTitle>
          <DialogDescription>
            {student ? 'Update the student information below.' : 'Fill in the details to add a new student.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                {...register('firstName')}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                {...register('lastName')}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="john.doe@school.edu"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                {...register('phone')}
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Select
                value={gradeValue}
                onValueChange={(value) => setValue('grade', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.grade && (
                <p className="text-sm text-destructive">{errors.grade.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...register('dateOfBirth')}
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="enrollmentDate">Enrollment Date</Label>
              <Input
                id="enrollmentDate"
                type="date"
                {...register('enrollmentDate')}
              />
              {errors.enrollmentDate && (
                <p className="text-sm text-destructive">{errors.enrollmentDate.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              {...register('address')}
              placeholder="123 Main St, City, State 12345"
            />
            {errors.address && (
              <p className="text-sm text-destructive">{errors.address.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {student ? 'Update Student' : 'Add Student'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
