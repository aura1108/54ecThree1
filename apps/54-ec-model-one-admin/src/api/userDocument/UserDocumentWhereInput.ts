import { StringFilter } from "../../util/StringFilter";
import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDocumentWhereInput = {
  id?: StringFilter;
  pan?: StringFilter;
  pdf1?: StringFilter;
  pdf2?: StringFilter;
  pdf3?: StringFilter;
  userId?: UserAuthWhereUniqueInput;
};
