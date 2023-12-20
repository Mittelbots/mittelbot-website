<template>
    <div class="col-12 col-lg-6 p-4">
        <img class="w-75" :src="image" :alt="imageAlt" />
    </div>
</template>

<script lang="ts">
export default {
    name: 'ImageAtom',
    props: {
        image: String,
        imageAlt: String,
    },
};
</script>
