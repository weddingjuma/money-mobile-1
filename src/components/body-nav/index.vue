<template lang="pug">
  nav.body-nav
    router-link.item(":to"="{name: 'index'}" ":class"="{cn: language === 'cn'}") {{ $root.i18n('Index') }}
    router-link.item(":to"="{name: 'Promotions'}" ":class"="{cn: language === 'cn'}") {{ $root.i18n('Promotions') }}
    a.item(target="blank" ":href"="serviceLink" ":class"="{cn: language === 'cn'}") {{ $root.i18n('Customer Service') }}
    template(v-if="authStatus == 1")
      router-link.item(":to"="{name: 'My-account'}" ":class"="{cn: language === 'cn'}") {{ $root.i18n('My ACC') }}
    template(v-else)
      router-link.item(":to"="{name: 'Login'}" ":class"="{cn: language === 'cn'}") {{ $root.i18n('Login') }}
</template>

<script>
  import { mapState } from 'vuex'
  import { SERVICELINK } from '@/siteConfig'

  export default {
    name: 'body-nav',

    data () {
      return {
        serviceLink: SERVICELINK
      }
    },

    computed: mapState({
      authStatus: state => state.AUTH.status,
      language: state => state.USER.language
    })
  }
</script>

<style lang="scss" scoped>
  @import "./style";
</style>
