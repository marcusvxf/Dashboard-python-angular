import { TranslatePipe } from './translate.pipe';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new TranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should translate correct', () => {
    const pipe = new TranslatePipe();
    expect(pipe.transform('THREATENING')).toBe('AMEAÇA');
  });
});
