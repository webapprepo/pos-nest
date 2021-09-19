import { Injectable } from '@nestjs/common';
import { FindManyOptions, Like } from 'typeorm';

@Injectable()
export class PageService {
    async generatePage(data,repo,opt:FindManyOptions={}){
        let {page, limit, ...where} = data
        if(where){
            let filter = {}
            Object.keys(where).forEach(f=>{
                filter[f] = Like(`%${where[f]}%`)
            })
            opt.where = filter
        }
        let total = await repo.count(opt)
        opt.skip = (data.page-1)*data.limit
        opt.take = data.limit
        let result = await repo.find(opt)
        let pages = Math.ceil(total/data.limit)
        let finalData = {
            total : total,
            page : data.page,
            pages : pages,
            data : result
        }
        return finalData
    }
}
