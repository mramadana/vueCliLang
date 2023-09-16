<template>
  <div class="mynav">
    <img src="@/assets/messi.gif" alt="" @click="emitEvent" />
    <ul>
      <li class="links" v-for="route in AllRoutes" :key="route.name">
        <!-- <router-link :to="{name : route.name}">{{route.meta.title}}</router-link> -->

        <router-link
          v-if="route.name == 'Profile'"
          :to="{
            name: route.name,
            params: { userId: 150, userName: 'Mohamed Ramadan' },
            query: { age: 28, gender: 'male' },
          }"
        >
          {{ route.meta.title }}
        </router-link>
        <router-link v-else :to="{ name: route.name }">
          {{ route.meta.title }}
        </router-link>
      </li>

      <router-link
        :to="{ name: 'About', query: { age_2: 0, gender_2: 'male' } }"
      >
        {{ $t("welcome") }}
      </router-link>

      <v-list>
        <v-item>
          <v-title>
            <button class="" @click="switchLang('ar')">العربيه</button>
          </v-title>
        </v-item>

        <v-item>
          <v-title>
            <button class="" @click="switchLang('en')">English</button>
          </v-title>
        </v-item>
      </v-list>
      <!-- <router-link :to="{name: 'About'}">test</router-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AllRoutes: [],
      onlyNavbar: [],
    };
  },

  inject: ["emitter"],

  methods: {
    emitEvent() {
      this.emitter.emit("globalEvent");
    },

    chageDir(dir) {
      let element = document.querySelector(".html_direction");
      element.setAttribute("lang", dir);
      if(dir == "ar") {
        console.log("dir ar")
        element.setAttribute("dir", "rtl");
      }
      if(dir == "en") {
        element.setAttribute("dir", "ltr");
      }
    },

    switchLang(newLang) {
      // this.language = newLang;

      sessionStorage.setItem("locale", newLang);

      

      location.reload();
    },
  },

  mounted() {
    this.AllRoutes = this.$router.options.routes;

    // single rout
    this.onlyNavbar = this.$router.options.routes.filter(
      (item) => item.slug == "navBar"
    );
    console.log(this.onlyNavbar);
    this.chageDir(sessionStorage.getItem("locale"))
  },
};
</script>
