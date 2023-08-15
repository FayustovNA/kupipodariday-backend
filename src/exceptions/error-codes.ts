import { HttpStatus } from '@nestjs/common';

export enum ErrorCode {
    LoginOrPasswordIncorrect = 100,
    UserAlreadyExists = 101,
    UserNotFound = 404,
    IncorrectData = 401,
}

export const code2message = new Map<ErrorCode, string>([
    [ErrorCode.LoginOrPasswordIncorrect, 'Login or password is incorrect'],
    [ErrorCode.UserAlreadyExists, 'User already exists'],
    [ErrorCode.UserNotFound, 'User not found'],
    [ErrorCode.IncorrectData, 'Incorrect data'],
]);

export const code2status = new Map<ErrorCode, HttpStatus>([
    [ErrorCode.LoginOrPasswordIncorrect, HttpStatus.BAD_REQUEST],
    [ErrorCode.UserAlreadyExists, HttpStatus.BAD_REQUEST],
    [ErrorCode.UserNotFound, HttpStatus.NOT_FOUND],
    [ErrorCode.IncorrectData, HttpStatus.UNAUTHORIZED],
]);