import request from 'supertest';
import { createApp } from '../app.js';

const app = createApp();

describe('API Integration Tests', () => {
  it('GET /health - should return 200 and success status', async () => {
    const response = await request(app)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200);

    // Vitest assertions on the response body
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('OK');
  });
});
