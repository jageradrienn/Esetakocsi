<script setup>


const props = defineProps({
    avatarImg: String,
    avatarImgSize: String,
    avatarLabel: String,
    avatarDirection: Boolean,
})
</script>

<template>
    <div v-if="avatarDirection" class="avatar">
        <NuxtImg :src="avatarImg" :class="avatarImgSize" />
        <div>{{ avatarLabel }}</div>
    </div>
    <div v-else class="avatar">
        <div>{{ avatarLabel }}</div>
        <NuxtImg :src="avatarImg" :class="avatarImgSize" />
    </div>
</template>

<style scoped>
.avatar {
    @apply flex items-center
}
</style>