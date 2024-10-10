import { Subject } from './Subject';
import { Teacher } from './Teacher';


export class Java extends Subject {

    setTeacher(teacher: Teacher): void {

        this.teacher = teacher;

    }



    getRequirements(): string {

        return "Here is the list of requirements for Java";

    }


    getAvailableTeacher(): string {

        if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {

            return "No available teacher";

        }

        return `Available Teacher: ${this.teacher.firstName}`;

    }

}
