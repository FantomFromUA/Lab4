import { IsString, MinLength } from "class-validator";

export class CreatePostDto {

    @MinLength(1)
    @IsString({message: "post should have a title"})
    public title: string

    @IsString()
    public description: string
}