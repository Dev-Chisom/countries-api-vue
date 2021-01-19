<template>
  <div>
    <div>
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
      countryDetails: [],
    };
  },
  props: {
    name: String,
  },
  mounted() {
    return axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        this.countryDetails = response.data;
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style></style>
