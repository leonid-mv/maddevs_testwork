<template>
  <div class="app">

    <div class="sidebar">
      <div class="logo">
        <img alt="Comedian" src="../assets/img/logo.svg">
      </div>

      <div class="workspace_button">
        <div class="avatar">
          <img src="../assets/temp/ws_avatar.png" alt="Workspace">
        </div>
        <span>Workspace</span>
      </div>

      <div class="sidebar_menu">
        <a href="#" class="item">Dashboard</a>
        <a href="#" class="item active">Standups</a>
        <a href="#" class="item">Triggers</a>
        <a href="#" class="item">Alerts</a>
        <a href="#" class="item">FAQ</a>
      </div>
    </div>


    <div class="main">
      <header>
        <div class="breadcrumbs">
          <a href="#">Standups</a>
          <span>Standup details</span>
        </div>

        <div class="header_container">
          <h1 class="header_title_accent">Design team</h1>
          <button class="button">Edit standup</button>
        </div>

        <div class="tabs">
          <div class="tab_button">Latest activity</div>
          <div class="tab_button active">Archive</div>
          <div class="tab_button">Details</div>
        </div>

      </header>

      <div class="content">

        <Posts />

        <FilterPost />

      </div>

    </div>

    

    
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import FilterPost from '@/components/FilterPost.vue'

export default {
  components: {
    Posts,
    FilterPost
  }

}
</script>