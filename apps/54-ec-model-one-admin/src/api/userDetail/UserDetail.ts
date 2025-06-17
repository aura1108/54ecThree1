import { UserAuth } from "../userAuth/UserAuth";

export type UserDetail = {
  address: string;
  city: string;
  createdAt: Date;
  dob: Date;
  email: string;
  gender: string;
  id: string;
  name: string;
  pan: string;
  phone: string;
  pinCode: string;
  updatedAt: Date;
  userId?: Array<UserAuth>;
};
