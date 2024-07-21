import { TranslatePipe } from './translate.pipe';
import { translate_table } from '../../core/utils/utilitaries';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new TranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should translate correct', () => {
    const pipe = new TranslatePipe();

    expect(pipe.transform('THREATENING')).toBe(translate_table['THREATENING']);
  });
});
