import { Pipe, PipeTransform } from '@angular/core';
import { IDictOptions } from '../interfaces/components';
import { translate_table } from '../../core/utils/utilitaries';

@Pipe({
  name: 'Translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    let translate_dict: IDictOptions = translate_table;
    return value ? translate_dict[value] : 'Não informado';
  }
}
