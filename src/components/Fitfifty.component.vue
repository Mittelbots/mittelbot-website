<template>
    <div class="mb-fiftyfifty-container mt-6 row justify-content-center align-items-center me-0 p-5" v-if="textRight">
         <ImageAtom
            :image="image"
            :imageAlt="imageAlt"
            data-aos="fade-up"
        />
        <TextAtom
            :headline="headline"
            :text="text"
            :image="image"
            :imageAlt="imageAlt"
            :keyFacts="keyFacts"
            :button="button"
            :textBlack="textBlack"
            :style="style"
            data-aos="fade-up"
         />
    </div>
    <div class="mb-fiftyfifty-container mt-6 row justify-content-center align-items-center me-0 p-5" v-else>
        <TextAtom
            :headline="headline"
            :text="text"
            :image="image"
            :imageAlt="imageAlt"
            :keyFacts="keyFacts"
            :button="button"
            :textBlack="textBlack"
            :style="style"
            data-aos="fade-up"
        />
        <ImageAtom
            :image="image"
            :imageAlt="imageAlt"
            data-aos="fade-up"
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