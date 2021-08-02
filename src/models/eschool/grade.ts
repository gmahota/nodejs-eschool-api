import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import Class from './class';
import School from './school';

@Entity('grade')
export default class Grade {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: true })
    code?: string;

    @Column({ length: 50, nullable: true })
    description?: string;

    @Column({ nullable: true })
    limit?: number;

    @Column()
    active?: Boolean;

    @OneToMany(() => Class, item => item.grade, {
        cascade: ['insert', 'update']
    })
    classes?: Class[]

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;

}