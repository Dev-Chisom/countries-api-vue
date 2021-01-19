<template>
  <div>
    <div class="search">
      <div>
        <i class="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          v-model="search"
          @keyup="searching"
        />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data() {
    return {
      countries: [],
      search: '',
      name: '',
      uri: 'https://restcountries.eu/rest/v2/region/europe',
    };
  },
  created() {
    return axios
      .get(this.uri)
      .then((response) => {
        this.countries = response.data;
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) => {
        return country.name.match(this.search);
      });
    },
  },
  methods: {
    searching() {
      this.$emit('change', this.search);
    },
  },
};
</script>

<style>
.container {
  overflow: hidden;
}
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 30%;
  height: 40px;
  background-color: hsl(207, 26%, 17%);
  margin: 1rem;
  border-radius: 5px;
  box-shadow: inset 0 0 5px 5px hsl(207, 26%, 17%);
}

.search i {
  padding: 1rem;
  font-weight: 600;
}
input {
  outline: none;
  border: none;
  background: none;
  font-size: 12px;
  color: #fff !important;
  font-weight: 600;
}
</style>
