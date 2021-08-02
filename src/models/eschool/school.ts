import {Entity,Column,PrimaryColumn,PrimaryGeneratedColumn,OneToMany, ManyToOne,JoinColumn} from 'typeorm';

@Entity('school')
export default class School {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 50, nullable:false })
    name?:string;
    
    @Column({length: 50, nullable:true })
    schoolNumber?:string;

    @Column({length: 50, nullable:true })
    phoneNumber?: string;
    
    @Column({length: 50, nullable:true })
    cellphone?: string;

    
    @Column({length: 50, nullable:true })
    address?:string;

    @Column({length: 50, nullable:true })
    email?: string;

    @Column({ length: 20, nullable: true })
    status?: string;

    @Column()
    json?:string;

    @Column()
    active: Boolean;

    @Column()
    createdAt?: Date;

    @Column()
    updatedAt?: Date;
}