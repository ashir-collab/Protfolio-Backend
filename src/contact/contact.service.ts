import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ContactService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createContactDto: CreateContactDto) {
    return this.databaseService.contactMessage.create({
      data: createContactDto,
    });
  }
}
