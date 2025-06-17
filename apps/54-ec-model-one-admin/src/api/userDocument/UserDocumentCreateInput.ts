import { UserAuthCreateNestedManyWithoutUserDocumentsInput } from "./UserAuthCreateNestedManyWithoutUserDocumentsInput";

export type UserDocumentCreateInput = {
  pan: string;
  pdf1?: string | null;
  pdf2?: string | null;
  pdf3?: string | null;
  userId?: UserAuthCreateNestedManyWithoutUserDocumentsInput;
};
