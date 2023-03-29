import { updateSportDto } from './dto/update-sport.dto';
import { addSportsDto } from './dto/add-sports.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient()


@Controller("sports")
export class SportsController {
  @Get()
  async getAllSports(){
    let data = await prisma.sports.findMany();
    return {data}
  }
  
  
  @Post()
  async addSport(@Body() sportsData: addSportsDto){
    return await prisma.sports.create({data: sportsData})
  }

  @Put("/:id")
  async updateSport(@Body() updateDto: updateSportDto, @Param('id') id: number){
    return await prisma.sports.update({
      where: {id},
      data:updateDto
    })
  }

  @Delete("/:id")
  async deleteSport(@Param('id') id: number ){
    return await prisma.sports.delete({
      where :{
        id
      }
    })
  }
}
