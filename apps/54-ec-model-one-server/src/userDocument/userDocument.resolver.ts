import * as graphql from "@nestjs/graphql";
import { UserDocumentResolverBase } from "./base/userDocument.resolver.base";
import { UserDocument } from "./base/UserDocument";
import { UserDocumentService } from "./userDocument.service";

@graphql.Resolver(() => UserDocument)
export class UserDocumentResolver extends UserDocumentResolverBase {
  constructor(protected readonly service: UserDocumentService) {
    super(service);
  }
}
