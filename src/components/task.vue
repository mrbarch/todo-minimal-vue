<template>
  <div>
    <div class="task">
      <div>
        <h3 class="task__title">{{ data.title}}</h3>
        <p class="task__desc">{{data.desc}}</p>
      </div>
      <button @click="deleteTask(index)" class="task__done">✔️</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex"

export default {
  name: 'task',
  data: function () {
    return {

    }
  },
  components: {},
  props: ['data', 'index'],
  methods: {
    ...mapMutations(['deleteTask'])

  },

}
</script>

<style>

</style>
