<template>
  <div class="filters_container">
    <div class="filters">
      <div class="filters_header">
        <div class="filters_title">Filters</div>
        <button class="button" @click="resetFilter">Reset filters</button>
      </div>

      <button class="button" @click="test">Test Name</button>

      <div class="select_container">
        <div class="select_title">Participants</div>

        <div class="select" @click="showDropDown = !showDropDown">
            <template v-if="selectedUsers.length">
              <span
                v-for="(user, index) in selectedUsers"
                :key="index"
              >
                <template v-if="user.active">
                  {{user.name}},
                </template>
              </span>
            </template>
            <template v-else>
              <span>
                Select Users
              </span>
            </template>
        </div>

        <div 
          class="select_dropdown"
          :class="{active: showDropDown}"
        >
          <div 
            v-for="(user, index) in users"
            :key="index"
            class="item"
            :class="{active: user.active}"
            @click="AddUser(user)"
          >
            {{user.name}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropDown: false,
      selectedUsers: []
    }
  },
  methods: {
    test: function () {
      this.$store.commit('filterData', {name: 'Vlada Arevkova'})
    },
    AddUser: function (user) {
      user.active = !user.active
    },
    resetFilter: function () {
      this.$store.commit('resetFilter')
    }
  },
  computed: {
    users() {
      this.$store.getters.getUsers.forEach(user => {
        this.selectedUsers.push({
          name: user,
          active: false
        })
      })
      return this.selectedUsers
    }
  },
}
</script>