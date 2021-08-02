import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import School from './school';

@Entity('academicLevel')
export default class academicLevel {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: true })
    code?: string;

    @Column({ length: 50, nullable: true })
    description?: string;

    @Column({ length: 50, nullable: true })
    codePersonalBoard?: string;

    @Column({ length: 50, nullable: true })
    status?:string

    @Column()
    type?:Boolean;

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;
}