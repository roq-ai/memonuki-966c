const mapping: Record<string, string> = {
  companies: 'company',
  notes: 'note',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
