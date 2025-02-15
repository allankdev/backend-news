import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { JwtAuthGuard } from '../auth/ jwt-auth.guard';

@Controller('readers')
@UseGuards(JwtAuthGuard)
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Get('me')
  async me(@Request() req) {
    const user = req.user; 
    return this.readersService.getMyData(user.id);
  }

  @Get('my-newsletters')
  async myNewsletters(@Request() req) {
    return this.readersService.getMyNewsletters(req.user.id);
  }
}
