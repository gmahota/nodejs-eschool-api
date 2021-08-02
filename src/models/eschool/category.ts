import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import School from './school';

@Entity('category')
export default class Category {
    @PrimaryColumn({ length: 50, nullable: false })
    code?: string;

    @Column({ length: 50, nullable: true })
    description?: string;

    @Column({ length: 50, nullable: true })
    summary?: string;

    @Column({ length: 50, nullable: true })
    status?:string

    @Column()
    type?:string;

    @ManyToOne(() => Category, item => item.code)
    @JoinColumn({ name: 'parentId' })
    parent?:Category

    @ManyToOne(() => School, (item) => item.id)
    @JoinColumn({ name: 'schoolId' })
    school?: School;
}