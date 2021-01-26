<template>
  <div class="static_date_posts">
      <span>{{date | date('date')}}</span>
  </div>
</template>

<script>
export default {
  props: ['date', 'index'],

  data() {
    return {
      observer: null
    }
  },

  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    }

    this.observer = new IntersectionObserver(([entry]) => {

      if (entry && entry.boundingClientRect.top < 0) {
        if (this.index === 0) {
          this.$emit("isActiveFloatDate", true)
        }
        this.$emit("intersect")
      }
      if (entry && entry.boundingClientRect.top > 0) {
        if (this.index === 0) {
          this.$emit("isActiveFloatDate", false)
        }
        this.$emit("intersectPrevDate")
      }

    }, options)

    this.observer.observe(this.$el)
  },

  destroyed() {
    this.observer.disconnect(this.$el)
  }

}
</script>