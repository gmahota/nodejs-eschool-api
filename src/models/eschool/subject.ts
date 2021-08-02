import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';
import School from './school';

@Entity('subject')
export default class Subject {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 50, nullable:false })
    code?:string;

    @Column({length: 50, nullable:false })
    name:string;    

    @Column({length: 50, nullable:true })
    type?: string;

    @Column({length: 50, nullable:true })
    requirement?: string;

    @Column({length: 50, nullable:true })
    subjectMaster?: string;

    @Column()
    active: Boolean;

    @Column()
    createdAt?: Date;

    @Column()
    updatedAt?: Date;

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;
}