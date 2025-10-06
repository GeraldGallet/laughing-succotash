import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class AuthorDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class CreateBookDto {
  @IsString()
  title: string;

  price: number;

  @Type(() => AuthorDto)
  author: AuthorDto;

  @IsInt()
  @Min(1500)
  @Max(2025)
  yearPublished: number;
}

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title: string;

  @Type(() => AuthorDto)
  @IsOptional()
  author: AuthorDto;

  @IsInt()
  @Min(1500)
  @Max(2025)
  @IsOptional()
  yearPublished: number;
}
