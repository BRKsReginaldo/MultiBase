<template>
    <v-app>
        <v-toolbar
            app
            color="teal"
            dark
        >
            <v-toolbar-title v-text="title"/>
        </v-toolbar>
        <v-content>
            <base-converter/>
        </v-content>
        <v-footer class="pa-3">
            <v-spacer/>
            <div>&copy; {{ new Date().getFullYear() }} - Reginaldo</div>
        </v-footer>
    </v-app>
</template>

<script>
  import BaseConverter from './components/BaseConverter'

  export default {
    name: 'App',
    components: {
      BaseConverter
    },
    data() {
      return {
        title: 'Multi Base | Fatec'
      }
    }
  }
</script>
