<template>
  <div class="wrapper">
    <button class="wrapper__back" @click="$router.go(-1)">
      <i class="fas fa-arrow-left"></i>
      Back
    </button>
    <div class="country">
      <div>
        <img :src="countryDetails.flag" :alt="[countryDetails.name]" />
      </div>
      <div>
        <p>
          {{ countryDetails.name }}
        </p>
        <p>
          <span>Native Name:</span>
          {{ countryDetails.nativeName }}
        </p>
        <p>
          <span>Population:</span>
          {{ countryDetails.population }}
        </p>
        <p>
          <span>Region:</span>
          {{ countryDetails.region }}
        </p>
        <p>
          <span>Sub Region:</span>
          {{ countryDetails.subregion }}
        </p>
        <p>
          <span>Capital:</span>
          {{ countryDetails.capital }}
        </p>

        <p>
          <span>Top Level Domain:</span>
          <span v-for="domain in countryDetails.topLevelDomain" :key="domain">
            {{ domain }}
          </span>
        </p>
        <p>
          <span>Currencies:</span>
          <span
            v-for="currency in countryDetails.currencies"
            :key="currency.name"
          >
            {{ currency.name }}
          </span>
        </p>
        <p>
          <span>Languages:</span>
          <span
            v-for="(language, index) in countryDetails.languages"
            :key="index"
          >
            {{ language.name }}
            <span v-if="index != countryDetails.languages.length - 1">,</span>
          </span>
        </p>
        <div>
          <div>
            <span>Border Countries:</span>
            <div>
              <button
                v-for="(borders, index) in countryDetails.borders"
                :key="index"
                :class="[mode ? 'bg-veryLightGrayColor' : 'bg-darkBlueColor']"
              >
                {{ borders }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CountryDetail',
  data() {
    return {
      mode: true,
      country: '',
      countryDetails: {},
    };
  },
  props: {
    name: String,
  },
  mounted() {
    this.country = localStorage.getItem('countryName');
    console.log(this.country);
    return axios
      .get('https://restcountries.eu/rest/v2/name/' + this.country)
      .then((response) => {
        this.countryDetails = response.data[0];
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
.light {
  background-color: var(--Very-Light-Gray-Background);
  color: var(--Very-Dark-Blue-Text);
}
.dark {
  background-color: var(--Dark-Blue-Elements);
  color: var(--White);
}
.wrapper {
  max-width: 1440px;
  margin-top: 3rem;
}
.wrapper__back {
  margin: 2rem;
}
.country {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
