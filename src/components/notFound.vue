<template>
  <div>
      <p>{{title}}</p>
      <p>{{message}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'notFound',
    data(){
        return {
            title: 'ERROR!'
        }
    },
    computed: mapState(['message']), // 映射this.message为store.state.message
    mounted: function() {
        this.$store.commit('message', {info:'404 Not Found!'});
    }
}
</script>
