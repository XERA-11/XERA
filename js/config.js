/**
 * XERA — Global Configuration Registry
 *
 * IMPORTANT:
 * Never put private keys, service-role keys,
 * passwords, or secret credentials in this file.
 *
 * Only public configuration belongs here.
 */

export const CONFIG = Object.freeze({

    // Platform Information
    PLATFORM_NAME: 'XERA',
    VERSION: '0.1.0-alpha',
    ENV: 'development',

    // Supabase
    // We will add these later.
    SUPABASE: {
        URL: '',
        ANON_KEY: ''
    },

    // Storage Provider
    // Future: Cloudflare R2
    STORAGE: {
        PROVIDER: 'r2',
        PUBLIC_ENDPOINT: ''
    }

});
