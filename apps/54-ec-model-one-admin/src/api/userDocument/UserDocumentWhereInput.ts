import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserAuthListRelationFilter } from "../userAuth/UserAuthListRelationFilter";

export type UserDocumentWhereInput = {
  id?: StringFilter;
  pan?: StringFilter;
  pdf1?: StringNullableFilter;
  pdf2?: StringNullableFilter;
  pdf3?: StringNullableFilter;
  userId?: UserAuthListRelationFilter;
};
