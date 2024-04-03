import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import request = require('supertest');

describe('RUT Validation (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Valid RUT should return 200', () => {
    return request(app.getHttpServer())
      .get('/validate-rut/11222333-9')
      .expect(200);
  });

  it('Invalid RUT should return 400', () => {
    return request(app.getHttpServer())
      .get('/validate-rut/12345678-0')
      .expect(400);
  });
});
