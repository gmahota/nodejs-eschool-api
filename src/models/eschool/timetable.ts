import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';
import Class from "./class";
import School from './school';

@Entity('timetable')
export default class Timetable {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    year: number;

    @Column({length: 50, nullable:true })
    term?: string;

    @ManyToOne(() => Class, (item) => item.id)
    @JoinColumn({ name: 'classId' })
    class?: Class

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;

    // sessions: classDetailsArray
}