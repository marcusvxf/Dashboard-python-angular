export interface IGroupTypeReturn {
  GROPING: number;
  STALKING: number;
  UNWANTED_PHOTOS: number;
  UNWANTED_COMMENTS: number;
  THREATENING: number;
  FLASHING: number;
}

export interface IGroupGendersReturn {
  CIS_MALE: number;
  CIS_FEMALE: number;
  TRANS_MALE: number;
  TRANS_FEMALE: number;
  OTHER: number;
}

export interface IGroupAgeReturn {
  '< 14': number;
  '14 - 18': number;
  '19 - 29': number;
  '30 - 39': number;
  '40 - 49': number;
  '50 - 59': number;
  '> 60': number;
  'N/D'?: number;
}

export interface IGroupAtMoment {
  True: number;
  False: number;
}

export interface IGroupMonths {
  Jan: number;
  Fev: number;
  Mar: number;
  Abr: number;
  Mai: number;
  Jun: number;
  Jul: number;
  Ago: number;
  Set: number;
  Out: number;
  Nov: number;
  Dez: number;
}
export interface INeighborhood {
  name: string;
  count: number;
}
