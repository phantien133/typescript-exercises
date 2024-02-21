import { Expose, plainToInstance } from 'class-transformer';

export class BaseDto {
  @Expose()
  userId: number;

  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToInstance(this, obj, { excludeExtraneousValues: true });
  }
}
