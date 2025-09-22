import Fastify from 'fastify';
import fastifyEnv from '@fastify/env';
import fastifyPostgres from '@fastify/postgres';

const server = Fastify({ logger: true });

const schema = {
  type: 'object',
  required: ['DATABASE_URL'],
  properties: {
    DATABASE_URL: { type: 'string' },
    NODE_ENV: { type: 'string', default: 'production' }
  }
};

async function start() {
  await server.register(fastifyEnv, { schema, dotenv: true });
  await server.register(fastifyPostgres, {
    connectionString: process.env.DATABASE_URL
  });

  server.get('/api/hello', async (request, reply) => {
    const client = await server.pg.connect();
    try {
      const { rows } = await client.query('SELECT NOW()');
      return { message: 'Hello from Fastify', time: rows[0].now };
    } finally {
      client.release();
    }
  });

  server.get('/api/health', async () => {
    return { status: 'ok' };
  });

  try {
    await server.listen({ port: 4000, host: '0.0.0.0' });
    console.log('Backend running on http://localhost:4000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
