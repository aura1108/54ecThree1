import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDocumentWhereInput = {
  id?: StringFilter;
  pan?: StringFilter;
  pdf1?: StringNullableFilter;
  pdf2?: StringNullableFilter;
  pdf3?: StringNullableFilter;
  userId?: UserAuthWhereUniqueInput;
};
