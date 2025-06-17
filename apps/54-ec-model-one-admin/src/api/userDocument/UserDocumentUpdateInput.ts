import { UserAuthUpdateManyWithoutUserDocumentsInput } from "./UserAuthUpdateManyWithoutUserDocumentsInput";

export type UserDocumentUpdateInput = {
  pan?: string;
  pdf1?: string | null;
  pdf2?: string | null;
  pdf3?: string | null;
  userId?: UserAuthUpdateManyWithoutUserDocumentsInput;
};
