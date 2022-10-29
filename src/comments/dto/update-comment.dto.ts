import { IsString, MinLength } from "class-validator";

export class UpdateCommentDto {

    @MinLength(1)
    @IsString({message: "comment should have text"})
    public comment: string
}