import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Grade from './grade'
import School from './school';

@Entity('class')
export default class Class {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: true })
    code?: string;

    @Column()
    year: number;    

    @Column({ length: 50, nullable: true })
    description?: string;

    @Column({ nullable: true })
    limit?: number;


    @ManyToOne(() => Grade, (item) => item.id)
    @JoinColumn({ name: 'gradeId' })
    grade?: Grade;

    @Column()
    active?: Boolean;

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;

}