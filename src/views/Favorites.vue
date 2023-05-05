<template>
    <div>
      <hr class="hr_bg" />
      <div class="container">
        <div class="row">
            <div class="col mr_block_fix">
                <h2>Избранное</h2>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div 
            v-for="img in images"
            :key="img.id"
            class="col-4">
            <div class="card">
              <img :src="img.urls.regular" class="card-img-top">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Favorites',
    data() {
        return {
          images: []
        }
      },
    async beforeMount(){
      const ClientId = "";
  
      const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: { count: 8},
            headers: {
                Authorization: `Client-ID ${ClientId}`
            }
      })
        this.images = response.data;
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .mr_block_fix{
    text-align: center;
    margin: 5% 0 5% 0;
  }
  .card{
    margin-bottom: 5%;
  }
  .card-img-top{
    width: 100%;
    height: 265px;
  }
  .hr_bg{
    background: #C4C4C4;
    height: 13px;
    margin-top: 0;
  }
  @media only screen and (max-width: 768px) {
    .col-4{
      width: 100%;
      height: 265px;
      margin-bottom: 5%;
    }
  }
  </style>
