import { Module } from "@nestjs/common";
import { UserDocumentModuleBase } from "./base/userDocument.module.base";
import { UserDocumentService } from "./userDocument.service";
import { UserDocumentController } from "./userDocument.controller";
import { UserDocumentResolver } from "./userDocument.resolver";

@Module({
  imports: [UserDocumentModuleBase],
  controllers: [UserDocumentController],
  providers: [UserDocumentService, UserDocumentResolver],
  exports: [UserDocumentService],
})
export class UserDocumentModule {}
