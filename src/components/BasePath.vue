<template>
    <v-dialog
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            v-model="dialog">
        <v-card>
            <v-toolbar dark color="secondary">
                <v-btn icon dark @click.native="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Calculo Completo</v-toolbar-title>
            </v-toolbar>
            <v-tabs
                    color="teal"
                    v-model="tab"
                    dark
                    grow
                    slider-color="yellow">
                <v-tab
                        v-for="base in bases"
                        :key="base"
                        ripple>
                    Base {{ base }}
                </v-tab>
            </v-tabs>
            <v-card-text>
                <div v-for="(step,i) in path" :key="i" v-html="step"/>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'BasePath',
  computed: {
    ...mapGetters({
      originBase: 'originBase',
      pathFormater: 'pathFormater',
      showingPath: 'showingPath',
      baseNumber: 'baseNumber',
      parseToBase: 'parseToBase'
    }),
    dialog: {
      get () {
        return this.showingPath !== null
      },
      set (value) {
        if (!value) this.$store.dispatch('setShowingPath', null)
      }
    },
    tab: {
      get () {
        return this.bases.indexOf(this.originBase)
      },
      set (base) {
        if (!this.bases.length) return
        this.$store.dispatch('setOriginBase', this.bases[base])
      }
    },
    bases () {
      if (!this.showingPath) return []

      const allBases = [2, 8, 10, 16]

      return allBases.filter(base => base !== this.showingPath)
    },
    path () {
      if (!this.originBase) return []

      return this.pathFormater[this.originBase](this.parseToBase(this.showingPath))
    }
  }
}
</script>
