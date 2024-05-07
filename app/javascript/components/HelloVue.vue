<template>
  <div>
    <h1>Hello {{ name }}!</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'Vue'
    }
  }
}
</script>
