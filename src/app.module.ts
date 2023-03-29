import { Module } from "@nestjs/common";
import { SportsController } from "./sports/sports.controller";


@Module({
  imports: [],
  controllers: [ SportsController],
  providers: [],
})
export class AppModule {}
