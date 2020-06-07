export interface Jira {
  total: number;
  startAt: number;
  maxResults: number;
  feature: Feature[];
}

export interface Feature {
  key: string;
  summary: string;
  created: string;
  histories: Histories[];
}

export interface Histories {
  created: string;
  from: string;
  to: string;
}