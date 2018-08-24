<template>
    <v-flex xs12>
        <v-text-field
                aria-autocomplete="none"
                autocomplete="off"
                :type="type"
                :label="label"
                :value="value"
                autocorrect="off"
                autocapitalize="off"
                v-on:keyup.prevent="onInput"
                append-icon="code"
                @click:append="openSource"/>
    </v-flex>
</template>

<script>
export default {
  name: 'BaseField',
  props: {
    label: {
      required: true,
      type: String
    },
    base: {
      required: true,
      type: Number
    },
    baseName: {
      required: true,
      type: String
    },
    type: {
      required: false,
      type: String,
      default: 'number'
    },
    formater: {
      required: true,
      type: Object,
      validator (value) {
        const hasBase = base => value.hasOwnProperty(base)
        return hasBase('2') && hasBase('8') && hasBase('10') && hasBase('16')
      }
    }
  },
  computed: {
    value: {
      get () {
        return this.$store.getters[this.$props.baseName]
      },
      set (value) {
        const base = this.$props.base
        this.$store.dispatch('setBaseNumber', {value, base})
      }
    }
  },
  methods: {
    onInput (ev) {
      this.value = ev.target.value
    },
    openSource () {
      this.$store.dispatch('setShowingPath', this.$props.base)
      this.$store.dispatch('setPathFormater', this.$props.formater)
    }
  }
}
</script>
