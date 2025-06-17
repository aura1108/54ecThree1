import { StringFilter } from "../../util/StringFilter";
import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";
import { UserDocumentWhereUniqueInput } from "../userDocument/UserDocumentWhereUniqueInput";

export type UserAuthWhereInput = {
  id?: StringFilter;
  pan?: StringFilter;
  phone?: StringFilter;
  userDetails?: UserDetailWhereUniqueInput;
  userDocument?: UserDocumentWhereUniqueInput;
};
