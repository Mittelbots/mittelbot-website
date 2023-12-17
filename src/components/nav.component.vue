<template>
    <nav class="navbar navbar-expand-lg" role="navigation" aria-label="main navigation">
        <div class="container-fluid">
            <div class="navbar-brand mt-2 mb-2">
                <a class="navbar-brand text-white" href="#">
                    <strong>{{ lang.name }}</strong>
                </a>

                <a role="button" class="navbar-burger has-text-white" data-target="navMenu" aria-label="menu"
                    aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a href="#" class="navbar-item is-tab">{{ lang.navigation.home }}</a>

                    <a href="#features" class="navbar-item is-tab">{{ lang.navigation.features }}</a>

                    <a href="#" class="navbar-item is-tab">{{ lang.navigation.docs }}</a>
                </div>

                <div class="navbar-end">
                    <a href="<%= support %>" class="navbar-item is-tab" target="_blank">
                        <i class="fa-brands fa-discord"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import * as lang from '~/assets/json/text/en_US.json';
export default {
    name: 'NavComponent',
    data() {
        return {
            lang,
        };
    },
};
</script>