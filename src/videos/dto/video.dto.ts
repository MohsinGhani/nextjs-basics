import { IsNotEmpty } from "class-validator"
import {NewVideo} from "src/grapgql"

export class VideoDTO extends NewVideo{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    userId: string
}