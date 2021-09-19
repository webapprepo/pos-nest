import { Produk } from "src/produk/entities/produk.entity";
import { Rekening } from "src/rekening/entities/rekening.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Penjualan } from "./penjualan.entity";

@Entity()
export class PenjualanBayar{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    tanggal_bayar : Date

    @Column()
    jumlah_bayar : number

    @ManyToOne(()=>Penjualan, pj => pj.id,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    penjualan : Penjualan

    @ManyToOne(()=>Rekening, rek => rek.id)
    rekening : Rekening

    @CreateDateColumn()
    create_at : Date

    @UpdateDateColumn({onUpdate:"CURRENT_TIMESTAMP(6)"})
    update_at : Date

    @ManyToOne(()=> User, usr => usr.id)
    user : User
}