<template>
  <div class="wrapper">
    <button class="wrapper__back" @click="$router.go(-1)">
      <i class="fas fa-arrow-left"></i>
      Back
    </button>
    <div class="country">
      <div class="country__image">
        <img :src="countryDetails.flag" :alt="[countryDetails.name]" />
      </div>
      <div class="country__details">
        <h2 class="lead">
          {{ countryDetails.name }}
        </h2>
        <div class="flex">
          <div class="country__details-left">
            <p>
              <span class="lead">Native Name:</span>
              {{ countryDetails.nativeName }}
            </p>
            <p>
              <span class="lead">Population:</span>
              {{ countryDetails.population }}
            </p>
            <p>
              <span class="lead">Region:</span>
              {{ countryDetails.region }}
            </p>
            <p>
              <span class="lead">Sub Region:</span>
              {{ countryDetails.subregion }}
            </p>
          </div>
          <div>
            <p>
              <span class="lead">Capital:</span>
              {{ countryDetails.capital }}
            </p>
            <p>
              <span class="lead">Top Level Domain:</span>
              <span
                v-for="domain in countryDetails.topLevelDomain"
                :key="domain"
              >
                {{ domain }}
              </span>
            </p>
            <p>
              <span class="lead">Currencies:</span>
              <span
                v-for="currency in countryDetails.currencies"
                :key="currency.name"
              >
                {{ currency.name }}
              </span>
            </p>
            <p>
              <span class="lead">Languages:</span>
              <span
                v-for="(language, index) in countryDetails.languages"
                :key="index"
              >
                {{ language.name }}
                <span v-if="index != countryDetails.languages.length - 1"
                  >,</span
                >
              </span>
            </p>
          </div>
        </div>

        <div class="country__sub--details">
          <hr />
          <div class="flex">
            <span class="lead">Border Countries:</span>
            <div class="flex">
              <button
                class="box"
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
hr {
  margin-bottom: 1rem;
}
.light {
  background-color: var(--Very-Light-Gray-Background);
  color: var(--Very-Dark-Blue-Text);
}
.lead {
  font-weight: 900;
  padding: 10px;
}
.wrapper {
  width: 90%;
  margin: 0 auto;
}
.wrapper__back {
  padding: 5px 20px;
  cursor: pointer;
  outline: none;
  margin: 3rem;
}
.country {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1.5rem;
}
.country__image img {
  max-width: 100%;
  width: 100%;
  height: 300px;
}
.country__image {
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  object-fit: contain;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
.country__details-left,
.country__details-right {
  margin-bottom: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 15px;
}
.country__sub--details {
  margin-top: 15px;
}
.country__sub--details .box {
  padding: 5px 10px;
  border: 1px solid #000;
  border-radius: 3px;
  margin-left: 20px;
}

@media (max-width: 768px) {
  .country__image {
    height: 300px;
    max-width: 100%;
    width: 100%;
    object-fit: contain;
  }
  .country {
    grid-template-columns: auto;
  }
  .country__details-left,
  .country__details-right {
    align-items: center;
    padding: 0;
  }
}
</style>
