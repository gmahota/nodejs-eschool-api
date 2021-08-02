import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import School from './school';

@Entity('academicYear')
export default class academicYear {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: true })
    code?: string;

    @Column()
    begin?: Date;

    @Column()
    end?: Date;

    @Column({ length: 50, nullable: true })
    status?:string

    @Column()
    type?:Boolean;

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;
}