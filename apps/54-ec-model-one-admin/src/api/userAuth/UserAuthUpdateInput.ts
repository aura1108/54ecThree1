import { UserDetailWhereUniqueInput } from "../userDetail/UserDetailWhereUniqueInput";
import { UserDocumentWhereUniqueInput } from "../userDocument/UserDocumentWhereUniqueInput";

export type UserAuthUpdateInput = {
  otp?: string | null;
  pan?: string;
  phone?: string;
  userDetails?: UserDetailWhereUniqueInput | null;
  userDocument?: UserDocumentWhereUniqueInput | null;
  verified?: boolean | null;
};
