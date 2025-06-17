import { UserDocumentWhereInput } from "./UserDocumentWhereInput";
import { UserDocumentOrderByInput } from "./UserDocumentOrderByInput";

export type UserDocumentFindManyArgs = {
  where?: UserDocumentWhereInput;
  orderBy?: Array<UserDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
