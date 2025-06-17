import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDocumentUpdateInput = {
  pan?: string;
  pdf1?: string;
  pdf2?: string;
  pdf3?: string;
  userId?: UserAuthWhereUniqueInput;
};
