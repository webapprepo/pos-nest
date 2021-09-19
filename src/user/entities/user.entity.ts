import { Exclude } from "class-transformer";
import { Konsuman } from "src/konsumen/entities/konsuman.entity";
import { Produk } from "src/produk/entities/produk.entity";
import { Rekening } from "src/rekening/entities/rekening.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nama_user : string

    @Column({unique:true})
    email : string

    @Column()
    username : string

    @Column({select:false})
    password : string

    @CreateDateColumn()
    create_at : Date

    @UpdateDateColumn()
    update_at : Date

    @OneToMany(()=>Produk, prod => prod.id)
    produk : Produk

    @OneToMany(()=>Konsuman, kons => kons.id)
    konsumen : Konsuman

    @OneToMany(()=>Rekening, rek => rek.id)
    rekening : Rekening
}
