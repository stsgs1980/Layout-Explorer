// Dashboard constants — placeholder for Layout Explorer standalone
// Originally from P-MAS-Architector, kept for compatibility

export const ROLE_GROUPS = [
  'Strategy', 'Tactics', 'Control', 'Execution',
  'Memory', 'Monitoring', 'Communication', 'Learning',
] as const

export type RoleGroup = (typeof ROLE_GROUPS)[number]
