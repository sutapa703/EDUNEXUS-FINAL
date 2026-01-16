import { useState } from 'react';
import { Plus, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StudentCard } from '@/components/StudentCard';
import { StudentForm } from '@/components/StudentForm';
import { DeleteDialog } from '@/components/DeleteDialog';
import { useStudents } from '@/hooks/useStudents';
import { Student, StudentFormData } from '@/types/student';
import { useToast } from '@/hooks/use-toast';

export const StudentList = () => {
  const {
    students,
    searchTerm,
    setSearchTerm,
    addStudent,
    updateStudent,
    deleteStudent,
    totalCount,
  } = useStudents();
  
  const [formOpen, setFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<string | null>(null);
  
  const { toast } = useToast();

  const handleAddClick = () => {
    setEditingStudent(null);
    setFormOpen(true);
  };

  const handleEditClick = (student: Student) => {
    setEditingStudent(student);
    setFormOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setStudentToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleFormSubmit = (data: StudentFormData) => {
    if (editingStudent) {
      updateStudent(editingStudent.id, data);
      toast({
        title: 'Student Updated',
        description: `${data.firstName} ${data.lastName} has been updated successfully.`,
      });
    } else {
      addStudent(data);
      toast({
        title: 'Student Added',
        description: `${data.firstName} ${data.lastName} has been added successfully.`,
      });
    }
  };

  const handleConfirmDelete = () => {
    if (studentToDelete) {
      deleteStudent(studentToDelete);
      toast({
        title: 'Student Deleted',
        description: 'The student has been removed successfully.',
        variant: 'destructive',
      });
      setDeleteDialogOpen(false);
      setStudentToDelete(null);
    }
  };

  return (
    <div className="container py-8">
      {/* Stats and Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{totalCount}</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </div>
        </div>
        <Button onClick={handleAddClick} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name, email, or grade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Student Grid */}
      {students.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Users className="h-16 w-16 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-1">No students found</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding your first student.'}
          </p>
          {!searchTerm && (
            <Button onClick={handleAddClick} variant="outline" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Student
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      {/* Form Dialog */}
      <StudentForm
        open={formOpen}
        onOpenChange={setFormOpen}
        onSubmit={handleFormSubmit}
        student={editingStudent}
      />

      {/* Delete Confirmation */}
      <DeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
