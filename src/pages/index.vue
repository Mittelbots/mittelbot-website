<template>
    <NavComponent class="bg-primary" />
    
    <FitfiftyComponent
        class="bg-primary"
        :headline="elements.first.headline"
        :text="elements.first.text"
        :image="elements.first.image"
        :imageAlt="elements.first.imageAlt"
        :keyFacts="elements.first.keyFacts"
        :button="elements.first.button"
        :textRight="elements.first.textRight"
        :textBlack="elements.first.textBlack"
        :style="elements.first.style"
    />
    <img src="/img/elements/waves.svg" alt="line" class="line" style="margin-top: -60px;"/>

    <h2 class="text-center my-3 fw-bolder" id="features">{{ lang.content.homepageHeadline }}</h2>
    <hr class="lined" style="height: 2px;"/>

    <FitfiftyComponent
        :headline="elements.second.headline"
        :text="elements.second.text"
        :image="elements.second.image"
        :imageAlt="elements.second.imageAlt"
        :keyFacts="elements.second.keyFacts"
        :button="elements.second.button"
        :textRight="elements.second.textRight"
        :textBlack="elements.second.textBlack"
        :style="elements.second.style"
    />

    <FitfiftyComponent
        :headline="elements.third.headline"
        :text="elements.third.text"
        :image="elements.third.image"
        :imageAlt="elements.third.imageAlt"
        :keyFacts="elements.third.keyFacts"
        :button="elements.third.button"
        :textRight="elements.third.textRight"
        :textBlack="elements.third.textBlack"
        :style="elements.third.style"
    />

    <FitfiftyComponent
        :headline="elements.fourth.headline"
        :text="elements.fourth.text"
        :image="elements.fourth.image"
        :imageAlt="elements.fourth.imageAlt"
        :keyFacts="elements.fourth.keyFacts"
        :button="elements.fourth.button"
        :textRight="elements.fourth.textRight"
        :textBlack="elements.fourth.textBlack"
        :style="elements.fourth.style"
    />

    <div class="d-flex justify-content-center align-items-center flex-column my-5" data-aos="fade-up">
        <h2 class="fw-bolder">{{ lang.content.readyText }}</h2>
        <a class="btn btn-success my-3" :href="links.invite.path">{{lang.content.readyButton}}</a>
    </div>

    <FooterComponent />
</template>

<script lang="ts">
import * as lang from '~/assets/json/text/en_US.json';
import * as links from '~/assets/json/links.json';
export default {
    name: 'Homepage',
    data() {
        return {
            elements: lang.content.fifthyfifthy,
            lang,
            links,
        }
    },
};
</script>