import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Konsuman {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nama_konsumen : string

    @Column()
    alamat_konsumen : string

    @Column()
    email_konsumen : string

    @Column()
    no_hp_konsumen : string

    @CreateDateColumn()
    create_at : Date

    @UpdateDateColumn({onUpdate:'CURRENT_TIMESTAMP(6)'})
    update_at : Date

    @ManyToOne(()=>User, usr => usr.id)
    user : User
}
