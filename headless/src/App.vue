<script setup>
import { onMounted, ref } from 'vue'
import PageHeader from './components/Header.vue'
import ProfileCard from './components/Card.vue'

const persons = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

async function fetchPersons() {
  try {
    const response = await fetch('https://fakerapi.it/api/v2/persons?_quantity=10')
    if (!response.ok) {
      throw new Error('Failed to load profiles')
    }

    const payload = await response.json()
    persons.value = Array.isArray(payload?.data) ? payload.data : []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Unexpected error'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchPersons)
</script>

<template>
  <div class="page">
    <PageHeader title="HTL Dornbirn 5bWI"/>

    <section class="cards">
      <p v-if="isLoading" class="cards__status">Loading profiles...</p>
      <p v-else-if="errorMessage" class="cards__status cards__status--error">
        {{ errorMessage }}
      </p>
      <div v-else class="cards__grid">
        <ProfileCard v-for="person in persons" :key="person.id || person.email" :person="person" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 2rem 1.25rem 4rem;
  background: #292500;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cards {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cards__status {
  align-self: center;
  margin-top: 2rem;
  font-size: 1.125rem;
  color: #fefcf7;
}

.cards__status--error {
  color: #ffb4ab;
}

.cards__grid {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (min-width: 1024px) {
  .page {
    padding: 3rem;
  }

  .cards__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2.25rem;
  }
}
</style>
