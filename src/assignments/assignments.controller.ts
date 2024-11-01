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
      [a, b] = [b, a + b]; // Update a and b
    }
    return sequence;
  }
}
