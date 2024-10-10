/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export class React extends Subject {
        protected teacher: Teacher; // Changed from private to protected

        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            const teacher = this.getTeacher(); // Accessing teacher through a getter
            if (teacher.experienceTeachingReact) {
                return `Available Teacher: ${teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }

        public getTeacher() {
            return this.teacher; // Getter method to access the private teacher property
        }
    }
}
