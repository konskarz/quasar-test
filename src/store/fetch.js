import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  if (!data.value) {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => (data.value = json))
  }
  return { data }
}
