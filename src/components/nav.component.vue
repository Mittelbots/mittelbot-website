<template>
    <nav class="navbar navbar-expand-lg bg-primary py-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <strong>{{ lang.name }}</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">{{ lang.navigation.home }}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{{ lang.navigation.features }}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{{ lang.navigation.docs }}</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <a :href="lang.links.support" class="navbar-item is-tab" target="_blank">
                        <fa :icon="faDiscord"/>
                    </a>
                </span>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import * as lang from '~/assets/json/text/en_US.json';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
export default {
    name: 'NavComponent',
    data() {
        return {
            lang,
            faDiscord,
        };
    },
};
</script>