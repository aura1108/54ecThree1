import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERAUTH_TITLE_FIELD } from "../userAuth/UserAuthTitle";

export const UserDocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="pan" source="pan" />
        <TextField label="pdf1" source="pdf1" />
        <TextField label="pdf2" source="pdf2" />
        <TextField label="pdf3" source="pdf3" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="userID"
          source="userauth.id"
          reference="UserAuth"
        >
          <TextField source={USERAUTH_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
