import { AgressionTypeTranslatePipe } from './agression-type-translate.pipe';

describe('AgressionTypeTranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new AgressionTypeTranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should translate correct', () => {
    const pipe = new AgressionTypeTranslatePipe();
    expect(pipe.transform('THREATENING')).toBe('AMEAÇA');
  });
});
