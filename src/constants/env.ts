export const BRAND: 'leancloud' | 'tds' = 'tds'
export const REGION: 'cn-mainland' | 'global' = 'cn-mainland'

// Cloud Engine
export const CLI_BINARY = BRAND === 'tds' ? 'tds' : 'lean'
// @ts-ignore This condition will always return false
export const HAS_SUB_DOMAIN = BRAND === 'tds' || REGION === 'global'
