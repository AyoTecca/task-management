import { TaskStatus } from "../task-status-enum";
import { IsNotEmpty, IsEnum, IsOptional, IsString } from "class-validator";

export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    @IsOptional()
    @IsString()
    search?: string;
}