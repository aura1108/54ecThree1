import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USERAUTH_TITLE_FIELD } from "../userAuth/UserAuthTitle";

export const UserDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dob" source="dob" />
        <TextField label="email" source="email" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="pan" source="pan" />
        <TextField label="phone" source="phone" />
        <TextField label="pinCode" source="pinCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="userId"
          source="userauth.id"
          reference="UserAuth"
        >
          <TextField source={USERAUTH_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
