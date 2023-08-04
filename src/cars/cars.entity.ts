import { Field, Int, ObjectType } from "@nestjs/graphql";
import { isNullableType } from "graphql";

@ObjectType()
export class Car{
    @Field(type=> Int)
    yearofmanufacture: number;

    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;

}