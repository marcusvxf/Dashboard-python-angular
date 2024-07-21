enum filter_values {
  from_date = 'from_date',
  to_date = 'to_date',
  query_string = 'query_string',
  user_id = 'user_id',
  type = 'type',
  neighborhood = 'neighborhood',
}

export type type_filter_values = keyof typeof filter_values;
