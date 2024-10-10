import { Teacher } from './Teacher';

export class Subject {
    protected teacher!: Teacher; // Implementing the Teacher interface

    setTeacher(teacher: Teacher): void {
        this.teacher = teacher; // Set the instance attribute teacher
    }
}
