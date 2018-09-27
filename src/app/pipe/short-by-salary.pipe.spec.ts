import { ShortBySalaryPipe } from './short-by-salary.pipe';

describe('ShortBySalaryPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortBySalaryPipe();
    expect(pipe).toBeTruthy();
  });
});
