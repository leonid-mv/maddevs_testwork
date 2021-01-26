<template>
  <div class="posts">

    <div 
      class="float_date_posts_container"
      :class="{visible: visibleFloatDate}"
    >
      <div class="float_date_posts">
        {{currentDateIndex | date('date')}}
      </div>
    </div>


    <div
      v-for="(post, index) in posts" 
      :key="post.id"
      ref="post"
    >

      <template v-if="posts[index + 1]">
        <StaticDatePost
          v-if="index === 0 || post.date !== posts[index - 1].date" 
          :date="post.date"
          :index="index"
          @intersect="changeCurrentDate(post.date)"
          @intersectPrevDate="changeCurrentDate(index !== 0 && posts[index - 1].date)"
          @isActiveFloatDate="isActiveFloatDate"
        />
      </template>

      <Post :post="post" />
    </div>


  </div>
</template>

<script>
import StaticDatePost from '@/components/StaticDatePost.vue'
import Post from '@/components/Post.vue'

export default {
  data() {
    return {
      visibleFloatDate: true,
      currentDateIndex: null
    }
  },

  methods: {
    changeCurrentDate: function (value) {
      value ? this.currentDateIndex = value : this.currentDateIndex = null
    },
    isActiveFloatDate: function (value) {
      this.visibleFloatDate = value
    }
  },

  computed: {
    posts() {
      return this.$store.getters.getPosts
    }
  },

  components: {
    StaticDatePost,
    Post
  }
}
</script>