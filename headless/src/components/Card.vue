<script setup>
import { computed } from 'vue'

const FALLBACK_IMAGE = 'https://placehold.co/640x480?text=No+Image'

const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})

const fullName = computed(() => {
  const { firstname = '', lastname = '' } = props.person
  return [firstname, lastname].filter(Boolean).join(' ')
})

const imageUrl = computed(() => {
  const raw = props.person?.image || ''
  if (!raw) return FALLBACK_IMAGE
  return raw.replace(/^http:\/\//i, 'https://')
})

const description = computed(() => {
  const address = props.person?.address
  if (!address) return 'No address information available.'
  const segments = [address.streetName, address.city, address.country].filter(Boolean)
  return segments.join(', ')
})
</script>

<template>
  <article class="card">
    <img
      :src="imageUrl"
      :alt="fullName || 'Profile image'"
      class="card__image"
      loading="lazy"
    />
    <div class="card__body">
      <h2 class="card__title">{{ fullName || 'Unknown Person' }}</h2>
      <p class="card__text">{{ description }}</p>
      <a v-if="person?.website" :href="person.website" class="card__link" target="_blank" rel="noopener">
        Visit website
      </a>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.25rem;
  background: rgba(244, 245, 246, 0.92);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.16);
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.22);
}

.card__image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card__body {
  padding: 1.25rem 1.5rem 1.75rem;
}

.card__title {
  margin: 0 0 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #101217;
}

.card__text {
  margin: 0;
  color: #35384a;
  line-height: 1.55;
}

.card__link {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
  color: #273b87;
}
</style>
