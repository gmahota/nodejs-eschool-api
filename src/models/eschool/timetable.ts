import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';

@Entity('timetable')
export default class Timetable {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    year: number;

    @Column({length: 50, nullable:true })
    term?: string;

    // class: classId,


    // sessions: classDetailsArray
}