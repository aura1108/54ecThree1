import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDetailWhereInput = {
  address?: StringFilter;
  city?: StringFilter;
  dob?: DateTimeFilter;
  email?: StringFilter;
  gender?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  pan?: StringFilter;
  phone?: StringFilter;
  pinCode?: StringFilter;
  userId?: UserAuthWhereUniqueInput;
};
