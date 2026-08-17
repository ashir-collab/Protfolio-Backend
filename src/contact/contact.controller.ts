import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactservice: ContactService) {}

  @Post()
  async contact(@Body() createContactDto: CreateContactDto) {
    const addContact = await this.contactservice.create(createContactDto);

    return addContact;
  }
}
