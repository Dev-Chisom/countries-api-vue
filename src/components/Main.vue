<template>
  <div>
    <Search v-model="search" v-on:change="listen" />

    <div v-if="loading">
      <Loading />
    </div>
    <div class="gallery">
      <div
        class="card"
        v-for="country in filteredCountries"
        :key="country.name"
      >
        <!-- <router-link :to="'/countrydetail/' + country.name"> -->
        <img :src="country.flag" :alt="[country.name]" />
        <div class="card__content" @click.prevent="getCountry(country.name)">
          <h4>{{ country.name }}</h4>
          <div class="card__info">
            <p><span>Population:&nbsp;</span>{{ country.population }}</p>
            <p><span>Region:&nbsp; </span>{{ country.region }}</p>
            <p><span>Capital:&nbsp; </span>{{ country.capital }}</p>
          </div>
        </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search';
import Loading from './Loading';
import axios from 'axios';

export default {
  name: 'Main',
  components: {
    Search,
    Loading,
  },
  data() {
    return {
      loading: false,
      countries: [],
      search: '',
      name: '',
      uri: 'https://restcountries.eu/rest/v2/all',
    };
  },
  created() {
    this.loading = true;
    return axios
      .get(this.uri)
      .then((response) => {
        this.countries = response.data;
        // console.log(response.data);
        this.loading = false;
      })

      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    listen(value) {
      this.search = value;
      // console.log(value);
    },
    getCountry(country) {
      console.log(country);
      localStorage.setItem('countryName', country);
      this.$router.push('/countrydetail/' + country);
    },
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(this.search.toString().toLowerCase());
      });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
body.light .card {
  background-color: var(--White);
  color: var(--Very-Dark-Blue-Text);
}
/* .dark {
  background-color: var(--Dark-Blue-Elements);
  color: var(--White);
} */
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  /* grid-column-gap: 20px; */
}
.card {
  width: 270px;
  border-radius: 5px;
  color: var(--White);
  object-fit: contain;
  background-color: hsl(207, 26%, 17%);
  text-align: justify;
  margin: 1rem;
}
img {
  display: inline-block;
  width: 270px;
  object-fit: cover;
  height: 150px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.card__content {
  margin: 1rem;
}
.card h4 {
  padding: 10px 10px 10px 0;
}
.card span {
  display: inline-block;
  font-weight: 400;
}
.card__info {
  padding: 5px 5px 20px 0;
}
.card__info p {
  font-weight: 300;
}

@media (max-width: 990px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(1, 1fr);
  }
}
/* @media(max-width: 1200px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
} */
</style>
