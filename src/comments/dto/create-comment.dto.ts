import { IsInt, IsNumber, IsString, MinLength } from "class-validator";

export class CreateCommentDto {

    @IsNumber()
    @IsInt()
    public postId: number

    @MinLength(1)
    @IsString({message: "comment should have usename"})
    public username: string

    @MinLength(1)
    @IsString({message: "comment should have text"})
    public comment: string
}