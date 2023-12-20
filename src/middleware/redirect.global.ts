import * as links from '~/assets/json/links.json';

// eslint-disable-next-line no-unused-vars
export default defineNuxtRouteMiddleware((to: any, from: any) => {
    if (to.path === '/__nuxt_error') return;

    switch (to.path) {
    case links.support.path:
        return navigateTo(links.support.target, { external: true });
    case links.github.path:
        return navigateTo(links.github.target, { external: true });
    case links.invite.path:
        return navigateTo(links.invite.target, { external: true });
    default:
        return;
    }
});
