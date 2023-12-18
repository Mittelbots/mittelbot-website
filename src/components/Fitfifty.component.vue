<template>
    <div class="mb-fiftyfifty-container mt-6 row justify-content-center align-items-center me-0">
        <div class="col-12 col-lg-6 p-4 text-white">
            <h1 class="fw-bold display-3">
                Get your server on the next level.
            </h1>
            <p class="subtitle has-text-grey-light is-size-6 mt-3">
                Create Projects and Tasks. Be prepared for deadlines with reminders and protect your
                server tasks from evils with curtain permissions
                Set-up Moderation, Leveling, welcome message or logs with an easy command struture.
            </p>
            <ul class="list-unstyled">
                <li>
                    <img src="~/assets/img/icons/check.svg" alt="check" width="20" />
                    Moderation
                </li>
                <li>
                    <img src="~/assets/img/icons/check.svg" alt="check" width="20" />
                    Scamdetection
                </li>
                <li>
                    <img src="~/assets/img/icons/check.svg" alt="check" width="20" />
                    Welcome message
                </li>
                <li>
                    <img src="~/assets/img/icons/check.svg" alt="check" width="20" />
                    Leveling
                </li>
            </ul>
            <div class="buttons">
                <a href="#" class="btn btn-primary" target="_blank" rel="no-referrer noopener fw-bold">Add To Discord</a>
            </div>
        </div>

        <div class="col-12 col-lg-6 p-4">
            <img class="w-75" src="~/assets/img/schedule-planning.svg" alt="hero image" />
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