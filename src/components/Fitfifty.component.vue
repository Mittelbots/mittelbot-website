<template>
    <div class="mb-fiftyfifty-container mt-6 row justify-content-center align-items-center me-0 p-5" v-if="textRight" :style="{height: style.height}">
         <ImageAtom
            :image="image"
            :imageAlt="imageAlt"
        />
        <TextAtom
            :headline="headline"
            :text="text"
            :image="image"
            :imageAlt="imageAlt"
            :keyFacts="keyFacts"
            :button="button"
            :textBlack="textBlack"
         />
    </div>
    <div class="mb-fiftyfifty-container mt-6 row justify-content-center align-items-center me-0 p-5" v-else :style="{height: style.height}">
        <TextAtom
            :headline="headline"
            :text="text"
            :image="image"
            :imageAlt="imageAlt"
            :keyFacts="keyFacts"
            :button="button"
            :textBlack="textBlack"
        />
        <ImageAtom
            :image="image"
            :imageAlt="imageAlt"
        />
    </div>
</template>

<script lang="ts">
export default {
    name: 'FitfiftyComponent',
    props: {
        headline: String,
        text: String,
        image: String,
        imageAlt: String,
        keyFacts: Array,
        button: Object,
        textRight: Boolean,
        textBlack: Boolean,
        style: Object,
    }
}
</script>