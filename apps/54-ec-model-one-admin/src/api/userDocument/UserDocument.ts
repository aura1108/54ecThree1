import { UserAuth } from "../userAuth/UserAuth";

export type UserDocument = {
  createdAt: Date;
  id: string;
  pan: string;
  pdf1: string;
  pdf2: string;
  pdf3: string;
  updatedAt: Date;
  userId?: UserAuth;
};
