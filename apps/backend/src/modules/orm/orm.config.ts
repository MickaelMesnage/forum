import { registerAs } from '@nestjs/config';

export default registerAs('orm', () => ({
  sync: process.env.MIKRO_ORM_SYNC || false,
}));
