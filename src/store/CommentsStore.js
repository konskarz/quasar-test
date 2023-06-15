import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommentsStore = defineStore('CommentsStore', () => {
  const data = ref(null)
  const selected = ref(null)
  function refetch() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => (data.value = json))
      .catch((error) => console.log(error))
  }
  function getItem(itemId) {
    return data.value.find((item) => item.id === itemId)
  }
  if (!data.value) refetch()
  return {
    data,
    selected,
    getItem
  }
})
