<template>
    <div class="bg-primary p-5 d-flex justify-content-center align-items-center flex-column">
        <div class="d-flex">
            <a :href="lang.links.support" class="navbar-item is-tab me-3" target="_blank">
                <fa :icon="faDiscord"/>
            </a>
            <a :href="lang.links.github" class="navbar-item is-tab" target="_blank">
                <fa :icon="faGithub"/>
            </a>
        </div>
        <h4 class="text-white fw-bolder mt-2">{{ lang.name }}</h4>
        <p class="text-white">© {{year}} {{ lang.footer.copyrightHint }}</p>
    </div>
</template>

<script lang="ts">
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import * as lang from '~/assets/json/text/en_US.json';

export default {
    name: 'FooterComponent',
    data() {
        return {
            year: new Date().getFullYear(),
            lang,
            faGithub,
            faDiscord,
        };
    },
};
</script>