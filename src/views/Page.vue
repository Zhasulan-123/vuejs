<template>
  <div class="bg_img">
    <div class="row position_block">
      <div class="col-8 clearfix position_top">
        <div class="float-end">
          <button type="button" class="btn btn-warning margin_left"><Download />Downloand</button>
        </div>
        <div class="icon_heart float-end">
          <Heart />
        </div>
      </div>
    </div>
    <div class="row position_block">
      <div class="col-8">
        <img :src="regular" class="block_img"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Heart from "@/icons/HeartIcon.vue";
import Download from "@/icons/Download.vue";

export default {
   name: "Page",
   components: {Heart, Download},
   data(){
        return {
            regular: ''
        }
    },
    watch: {
        $route (toR){
          this.id = toR.params['id']
        }
    },
    async beforeMount(){
        const ClientId = "";

        const response = await axios.get(`https://api.unsplash.com/photos/${this.$route.params['id']}`, {
            headers: {
                Authorization: `Client-ID ${ClientId}`
            }
        })
        this.regular = response.data.urls.regular;
    },
}
</script>

<style lang="scss" scoped>
.bg_img{
    background: rgba(0, 0, 0, 0.5) url("@/assets/51XAfkqcUrL\ 2.jpg") no-repeat;
    height: 774px;
}
.block_img{
  height: 774px;
  position: relative;
  top: 220px;
  width: 100%;
}
.position_block div{
    display: table;
    margin: 0 auto;
}
.position_top{
  position: relative;
  top: 110px;
  right: 20px;
}
.icon_heart{
  background: white;
  padding: 10px;
  border-radius: 20%;
}
.margin_left{
  margin-left: 20px;
}
</style>


