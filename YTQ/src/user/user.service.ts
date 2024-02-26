import { Injectable } from '@nestjs/common';
import { User } from '../types/user';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    { userId: 1, username: 'user1', password: 'password1' },
    { userId: 2, username: 'user2', password: 'password2' },
  ];

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
