import doteenv from 'dotenv';

doteenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
