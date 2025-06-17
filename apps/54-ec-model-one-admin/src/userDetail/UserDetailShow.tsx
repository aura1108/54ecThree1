import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USERDETAIL_TITLE_FIELD } from "./UserDetailTitle";
import { USERDOCUMENT_TITLE_FIELD } from "../userDocument/UserDocumentTitle";

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
        <ReferenceManyField
          reference="UserAuth"
          target="userDetailsId"
          label="userAuths"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="otp" source="otp" />
            <TextField label="pan" source="pan" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="userDetails"
              source="userdetail.id"
              reference="UserDetail"
            >
              <TextField source={USERDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="userDocuments"
              source="userdocument.id"
              reference="UserDocument"
            >
              <TextField source={USERDOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="verified" source="verified" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
