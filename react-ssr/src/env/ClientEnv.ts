import BaseEnv from './BaseEnv';

declare global {
    interface Window { _env: ClientEnv; }
}

export interface ClientEnv extends BaseEnv {
}

const env : ClientEnv = window._env;

export default env;
