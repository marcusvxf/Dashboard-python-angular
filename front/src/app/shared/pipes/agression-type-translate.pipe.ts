import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agressionTypeTranslate',
  standalone: true,
})
export class AgressionTypeTranslatePipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    let translate_dict: { [id: string]: string } = {
      THREATENING: 'AMEAÇA',
      GROPING: 'APALPAR',
      STALKING: 'PERSEGUIÇÂO',
      UNWANTED_COMMENTS: 'COMENTÁRIOS INDESEJADOS',
      FLASHING: 'PISCADA',
      UNWANTED_PHOTOS: 'FOTOS INDESEJADAS',
    };
    return value ? translate_dict[value] : '';
  }
}
