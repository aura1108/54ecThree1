import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USERDETAIL_TITLE_FIELD } from "../userDetail/UserDetailTitle";
import { USERDOCUMENT_TITLE_FIELD } from "../userDocument/UserDocumentTitle";

export const UserAuthShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
