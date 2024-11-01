import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);
    const sequence = this.fibonacci(num);
    return { sequence };
  }

  private fibonacci(n: number): number[] {
    const sequence: number[] = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];
    }
    return sequence;
  }

  @Get('prime/:number')
  isPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    return { isPrime: this.checkPrime(num) };
  }

  private checkPrime(num: number): boolean {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Not a prime number
    }
    return true; // It is a prime number
  }
}
