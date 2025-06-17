import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDetailCreateInput = {
  address: string;
  city: string;
  dob: Date;
  email: string;
  gender: string;
  name: string;
  pan: string;
  phone: string;
  pinCode: string;
  userId: UserAuthWhereUniqueInput;
};
