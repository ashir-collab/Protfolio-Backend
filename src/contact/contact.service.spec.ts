import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { DatabaseService } from '../database/database.service';

describe('ContactService', () => {
  let service: ContactService;

  const databaseServiceMock = {
    contactMessage: {
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        { provide: DatabaseService, useValue: databaseServiceMock },
      ],
    }).compile();

    service = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
