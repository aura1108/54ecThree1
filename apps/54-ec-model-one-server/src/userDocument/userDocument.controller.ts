import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserDocumentService } from "./userDocument.service";
import { UserDocumentControllerBase } from "./base/userDocument.controller.base";

@swagger.ApiTags("userDocuments")
@common.Controller("userDocuments")
export class UserDocumentController extends UserDocumentControllerBase {
  constructor(protected readonly service: UserDocumentService) {
    super(service);
  }
}
