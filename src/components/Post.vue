<template>
  <div class="post">
    <div class="post_header">
      <div class="user_block">
        <div class="user_avatar">
          <img :src="post.avatar + '?img=' + post.id" :alt="post.name">
        </div>
        <div class="user_info">
          <div class="user_title">
            <a href="#">{{post.name}}</a>
            <span>
              {{post.position}}
            </span>
          </div>
          <div class="user_desc">{{post.date | date('time')}}</div>
          <div class="user_desc">{{post.date | date('date')}}</div>
        </div>
      </div>
    </div>
    <div class="post_content">
      <div class="yesterday">
        <div class="yesterday_title">Yesterday</div>
        <div class="yesterday_content" v-html="post.yesterday"></div>
      </div>

      <div class="today">
        <div class="today_title">Today</div>
        <div class="today_content" v-html="post.today"></div>
      </div>

      <div class="problem">
        <div class="problem_title">Problems</div>
        <div class="problem_content" v-html="post.problem"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>