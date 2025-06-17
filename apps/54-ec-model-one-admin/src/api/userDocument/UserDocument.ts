import { UserAuth } from "../userAuth/UserAuth";

export type UserDocument = {
  createdAt: Date;
  id: string;
  pan: string;
  pdf1: string | null;
  pdf2: string | null;
  pdf3: string | null;
  updatedAt: Date;
  userId?: Array<UserAuth>;
};
