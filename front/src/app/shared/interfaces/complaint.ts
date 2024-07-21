import { user } from './user';

export interface IRowContent {
  id: string;
  neighborhood: string;
  date: string;
  aggression_type: string;
}

export interface IFilter {
  from_date?: string;
  to_date?: string;
  query_string?: string;
  user_id?: string;
  type?: string;
  neighborhood?: string;
}

export interface complaint {
  id: string;
  user_id: string;
  date: string;
  at_moment: boolean;
  type: string;
  neighborhood: string;
  situation: string;
  description: string;
  created_at: string;
  updated_at: string;
  user: user;
}

export interface complaint_return {
  complaints: complaint[];
  max_pages: number;
  size: number;
}
