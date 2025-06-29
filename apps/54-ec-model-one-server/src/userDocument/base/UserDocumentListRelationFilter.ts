/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserDocumentWhereInput } from "./UserDocumentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserDocumentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserDocumentWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDocumentWhereInput)
  @IsOptional()
  @Field(() => UserDocumentWhereInput, {
    nullable: true,
  })
  every?: UserDocumentWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserDocumentWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDocumentWhereInput)
  @IsOptional()
  @Field(() => UserDocumentWhereInput, {
    nullable: true,
  })
  some?: UserDocumentWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserDocumentWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDocumentWhereInput)
  @IsOptional()
  @Field(() => UserDocumentWhereInput, {
    nullable: true,
  })
  none?: UserDocumentWhereInput;
}
export { UserDocumentListRelationFilter as UserDocumentListRelationFilter };
