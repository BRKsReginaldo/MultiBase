<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <base-field label="Binario" :base="2" base-name="binary" :formater="binary"/>
                <base-field label="Octal" :base="8" base-name="octal" :formater="octal"/>
                <base-field label="Decimal" :base="10" base-name="decimal" :formater="decimal"/>
                <base-field label="Hexadecimal" type="text" :base="16" base-name="hexadecimal" :formater="hexadecimal"/>
            </v-layout>
        </v-slide-y-transition>
        <base-path/>
    </v-container>
</template>

<script>
import BaseField from './BaseField'
import BasePath from './BasePath'
import binary from '../formaters/binary'
import octal from '../formaters/octal'
import decimal from '../formaters/decimal'
import hexadecimal from '../formaters/hexadecimal'

export default {
  name: 'BaseConverter',
  components: {
    BaseField,
    BasePath
  },
  data: () => ({binary, octal, decimal, hexadecimal})
}
</script>
