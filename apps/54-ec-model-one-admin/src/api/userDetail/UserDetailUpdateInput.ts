import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDetailUpdateInput = {
  address?: string;
  city?: string;
  dob?: Date;
  email?: string;
  gender?: string;
  name?: string;
  pan?: string;
  phone?: string;
  pinCode?: string;
  userId?: UserAuthWhereUniqueInput;
};
