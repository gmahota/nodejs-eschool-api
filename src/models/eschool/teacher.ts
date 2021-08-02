import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';
import School from './school';

@Entity('teacher')
export default class Teacher {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 50, nullable:false })
    code?:string;

    @Column({length: 50, nullable:false })
    name:string;  

    @Column({length: 50, nullable:true })
    status?:string;  

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;
}