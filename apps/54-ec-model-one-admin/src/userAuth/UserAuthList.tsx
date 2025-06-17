import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERDETAIL_TITLE_FIELD } from "../userDetail/UserDetailTitle";
import { USERDOCUMENT_TITLE_FIELD } from "../userDocument/UserDocumentTitle";

export const UserAuthList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"userAuths"}
      perPage={50}
      pagination={<Pagination />}
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
        <BooleanField label="verified" source="verified" />{" "}
      </Datagrid>
    </List>
  );
};
