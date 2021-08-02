import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';
import Student from './student';

@Entity('student_parent')
export default class StudentParent {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 50, nullable:false })
    name?:string;
    
    @Column({length: 50, nullable:true })
    surname?:string;

    @Column({length: 50, nullable:true })
    contact?: string;
    
    @Column({length: 20, nullable:false })
    email:string;

    @Column({ nullable:false })
    principal?: boolean;

    @ManyToOne(()=> Student, student => student.parents, { lazy: true } )
    @JoinColumn({name:'student_id'})
    student:Student;
}