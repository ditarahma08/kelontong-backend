import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from "../model/user.schema";
import { UserService } from "../service/user.service";
import { JwtService } from '@nestjs/jwt'

@Controller('/api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService,
        private jwtService: JwtService
    ) { }

    @Post('/signup')
    async Signup(@Res() response, @Body() user: User) {
        const newUser = await this.userService.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUser,
            status: true
        })
    }
    @Post('/signin')
    async SignIn(@Res() response, @Body() user: User) {
        const data = await this.userService.signin(user, this.jwtService);
        return response.status(HttpStatus.OK).json({
            data,
            status: true
        })
    }

    @Get('/:id')
    async GetOne(@Param('id') id, @Res() response) {
        const userData = await this.userService.getOne(id)
        return response.status(HttpStatus.OK).json(userData)
    }
}