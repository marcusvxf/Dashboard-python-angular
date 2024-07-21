import { IDictOptions } from '../../shared/interfaces/components';

export function sort_desc(a: number, b: number) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }

  return 0;
}

export const translate_table: IDictOptions = {
  THREATENING: 'INTIMIDAÇÂO',
  GROPING: 'APALPAR',
  STALKING: 'PERSEGUIÇÂO',
  UNWANTED_COMMENTS: 'COMENTÁRIOS NÂO AUTORIZADOS',
  FLASHING: 'PISCADA',
  UNWANTED_PHOTOS: 'FOTOS NÂO AUTORIZADAS',
  OTHER: 'outro',
  CIS_MALE: 'Homem Cis',
  CIS_FEMALE: 'Mulher CIs',
  TRANS_FEMALE: 'Mulher Trans',
  TRANS_MALE: 'Homem Trans',
  BLACK: 'Negro',
  BROWN: 'Pardo',
  WHITE: 'Branco',
};
