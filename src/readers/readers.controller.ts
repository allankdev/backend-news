import { Controller, Get, Param } from '@nestjs/common';
import { ReadersService } from './readers.service';

@Controller('readers')
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Get(':email')
  async getReader(@Param('email') email: string) {
    return this.readersService.getReader(email);
  }
}