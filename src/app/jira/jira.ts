export interface Jira {
  total: number;
  startAt: number;
  maxResults: number;
  jql: string;
  feature: Feature[];
}

export interface Feature {
  key: string;
  summary: string;
  created: string;
  status: string;
  state: Histories[];
  fixVersion: Histories[];
  resolution: Resolution;
}

export interface Histories {
  created: string;
  from: string;
  to: string;
}

export interface Resolution {
  name: string;
}
