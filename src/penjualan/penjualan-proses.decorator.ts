import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';

export const PenjualanProses = createParamDecorator((data:any, ctx : ExecutionContext)=>{
    const req = ctx.switchToHttp().getRequest()
    let user = {id:req.user.id}
    req.body.user = user
    let total_transaksi = 0
    let total_potongan = 0
    let total_bayar = 0
    req.body.item.forEach(it => {
        total_transaksi += parseFloat(it.jumlah_jual) * parseFloat(it.harga_jual)
        total_potongan += parseFloat(it.potongan)
        it.user = user
    });
    req.body.bayar.forEach(by => {
        total_bayar += parseFloat(by.jumlah_bayar)
        by.user = user
    });

    req.body.total_transaksi = total_transaksi
    req.body.total_potongan = total_potongan
    req.body.total_bayar = total_bayar
    return req.body
})
