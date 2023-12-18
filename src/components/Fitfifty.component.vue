<template>
    <div class="columns">
        <div class="column mr-6 mt-12">
            <p class="title text-white has-text-weight-bold">
                Mittelbot <br /><br />
                Get your server on the next level.
            </p>
            <p class="subtitle has-text-grey-light is-size-6 mt-3">
                Create Projects and Tasks. Be prepared for deadlines with reminders and protect your
                server tasks from evils with curtain permissions
                Set-up Moderation, Leveling, welcome message or logs with an easy command struture.
            </p>
            <ul class="content has-text-white">
                <li>
                    <img src="" alt="check" />
                    Moderation
                </li>
                <li>
                    <img src="" alt="check" />
                    Scamdetection
                </li>
                <li>
                    <img src="" alt="check" />
                    Welcome message
                </li>
                <li>
                    <img src="" alt="check" />
                    Leveling
                </li>
            </ul>
            <div class="buttons">
                <a href="<%= invite %>" class="button is-info" target="_blank" rel="no-referrer noopener">
                    <strong>Add To Discord</strong>
                </a>

                <!-- <a href="#" class="button is-primary is-outlined">
                  <strong><i class="fa-solid fa-crown"></i> Premium</strong>
                </a> -->
            </div>
        </div>

        <div class="column mt-6" data-aos="fade-up">
            <img class="image has-image-centered vert-move mt-4" src="" alt="hero image"
                style="width: 180rem !important;" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'FitfiftyComponent',
    props: {
        headline: String,
        subheadline: String,
        text: String,
        image: String,
        imageAlt: String,
        keyFacts: Array,
        buttonText: Object
    }
}
</script>