import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDocumentServiceBase } from "./base/userDocument.service.base";

@Injectable()
export class UserDocumentService extends UserDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
