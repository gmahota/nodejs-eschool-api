import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';
import Student from './student';

@Entity('student_special_care')
export default class StudentSpecialCare {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 50, nullable:false })
    name?:string;
    
    @Column({length: 50, nullable:true })
    description?:string;

    @Column({length: 50, nullable:true })
    type?: string;
    
    @Column({length: 20, nullable:false })
    notes:string;

    @ManyToOne(()=> Student, student => student.parents, { lazy: true } )
    @JoinColumn({name:'student_id'})
    student:Student;
}