<template>
        <div class="col-12 col-lg-6 p-4" :class="{'text-black': textBlack, 'text-white' : !textBlack}">
            <h1 class="fw-bold display-3" v-html="headline"></h1>
            <p class="mt-3 fw-light" v-html="text"></p>
            <ul class="list-unstyled">
                <li v-for="keyFact in keyFacts" :key="keyFact">
                    <img :src="`/img/icons/${keyFact.icon}.svg`" width="20" />
                    {{ keyFact.text }}
                </li>
            </ul>
            <div class="buttons">
                <a :href="button.link" class="btn" :class="style.buttonStyle" target="_blank" rel="no-referrer noopener fw-bold">
                    {{ button.text }}
                </a>
            </div>
        </div>
</template>

<script lang="ts">
export default {
    name: 'TextAtom',
    props: {
        headline: String,
        text: String,
        image: String,
        imageAlt: String,
        keyFacts: Array,
        button: Object,
        textBlack: Boolean,
        style: Object,
    }
}
</script>