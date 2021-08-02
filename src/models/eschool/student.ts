import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn,OneToMany, ManyToOne,JoinColumn} from 'typeorm';
import StudentParent from "./studentParent"
import StudentMedicalData from "./studentMedicalData"
import School from './school';

@Entity('student')
export default class Student {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 50, nullable:false })
    name?:string;
    
    @Column({length: 50, nullable:true })
    surname?:string;

    @Column({length: 50, nullable:true })
    nickname?: string;
    
    @Column({nullable:true })
    birthdate?:Date;
    
    @Column({length: 50, nullable:true })
    address?:string;

    @Column({length: 50, nullable:true })
    province?: string;

    @Column({length: 50, nullable:true })
    country?: string;
    
    @Column({length: 20, nullable:false })
    gender:string;

    @Column({ length: 20, nullable: true })
    status?: string;

    @Column()
    json?:string;
    
    @OneToMany(()=> StudentParent, parent => parent.student,{
        cascade:['insert','update']
    })
    parents?: StudentParent[]

    @OneToMany(()=> StudentMedicalData, medical => medical.student,{
        cascade:['insert','update']
    })
    medicalData?: StudentMedicalData[]

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;
}