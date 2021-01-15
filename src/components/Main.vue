<template>
  <div>
    <Search v-model="search" v-on:change="listen" />
    <!-- <div class="search">
      <div>
        <i class="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          v-model="search"
        />
      </div>
    </div> -->
    <div v-if="loading">
      <Loading />
    </div>
    <div class="gallery">
      <div
        class="card"
        v-for="country in filteredCountries"
        :key="country.name"
      >
        <img :src="country.flag" :alt="[country.name]" />
        <div class="card__content">
          <h4>{{ country.name }}</h4>
          <div class="card__info">
            <p><span>Population:&nbsp;</span>{{ country.population }}</p>
            <p><span>Region:&nbsp; </span>{{ country.region }}</p>
            <p><span>Capital:&nbsp; </span>{{ country.capital }}</p>
          </div>
        </div>
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
      search: "",
      name: "",
      uri: 'https://restcountries.eu/rest/v2/all',
    };
  },
  created() {
    this.loading = true;
    return axios
      .get(this.uri)
      .then((response) => {
        this.countries = response.data;
        console.log(response.data);
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
  },
  computed: {
    filteredCountries() {
      return this.countries.filter((country) => {
        return country.name.toLowerCase().includes(this.search.toString().toLowerCase());
      });
    },
  },
};
</script>

<style>
/* .search {
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
} */
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  /* overflow: hidden; */
  /* gap: 10px; */
}
.card {
  width: 270px;
  border-radius: 5px;
  /* height: 300px; */
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
  color: #fff;
  padding: 10px 10px 10px 0;
}
.card span {
  display: inline-block;
  color: #fff;
  font-weight: 400;
}
.card__info {
  padding: 5px 5px 20px 0;
}
.card__info p {
  color: #fff;
  font-weight: 300;
}
/* @media screen and (max-width: 768px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    overflow: hidden;
    gap: 10px;
  }
}
@media screen and (max-width: 4klw40px) {
  .gallery {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    overflow: hidden;
    gap: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    overflow: hidden;
    gap: 10px;
  }
} */
</style>
