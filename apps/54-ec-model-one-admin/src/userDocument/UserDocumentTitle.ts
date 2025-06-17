import { UserDocument as TUserDocument } from "../api/userDocument/UserDocument";

export const USERDOCUMENT_TITLE_FIELD = "pan";

export const UserDocumentTitle = (record: TUserDocument): string => {
  return record.pan?.toString() || String(record.id);
};
