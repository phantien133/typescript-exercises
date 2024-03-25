import { env } from 'process';

export const jwtConst = {
  secret: env['SECRET_JWT'],
};
