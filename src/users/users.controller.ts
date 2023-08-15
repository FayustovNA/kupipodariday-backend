import { Controller, Get, Post, Body, Patch, Param, Delete, Request, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.save(createUserDto);
  }

  @Get('me')
  async findOnetUserById(
    @Request() { user: { id } },
  ): Promise<UserResponseDto> {
    return await this.usersService.findById(id);
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.usersService.findById(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseUUIDPipe) id: number) {
    return this.usersService.delete(id);
  }
}

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }
