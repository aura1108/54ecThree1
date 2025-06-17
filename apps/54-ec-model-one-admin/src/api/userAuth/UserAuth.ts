import { UserDetail } from "../userDetail/UserDetail";
import { UserDocument } from "../userDocument/UserDocument";

export type UserAuth = {
  createdAt: Date;
  id: string;
  otp: string | null;
  pan: string;
  phone: string;
  updatedAt: Date;
  userDetails?: UserDetail | null;
  userDocument?: UserDocument | null;
  verified: boolean | null;
};
