<template>
  <div class="gllist">
    <nav>
      <ul :key="navlist.length">
        <li v-for="(data, index) in navlist" @click="handleNavClick(data.gc_id)" :key="index"
          :class="(current === data.gc_id) ? 'active' : ''">
          {{ data.gc_name }}
        </li>
      </ul>
    </nav>
    <aside>
      <ul :key="asidelist.length">
        <li v-for="data in asidelist" @click="handleAsideClick(data.gc_id, data.gc_name)">
          <img :src="data.cate_img" alt="">
          <p>{{ data.gc_name }}</p>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {

    data() {
      return {
        current: 1,
        navlist: [],
        asidelist: []
      }
    },

    mounted () {

      axios.get(`/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562328567845&act=mobile_cate&op=index`)
        .then(res => {
        this.navlist = res.data.datas;
        this.current = res.data.datas[0].gc_id;
      });

      axios({

        url: `/lct?gc_id=1094api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562330605580&act=mobile_cate&op=index`,
        method: "get",
      }).then(res => {
        this.asidelist = res.data.datas;
      });

    },

    methods: {
      handleNavClick(gcid) {
        this.current = gcid;

        axios({
          url: `/lct?gc_id=${gcid}api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1562330605580&act=mobile_cate&op=index`,
          method: "get",
        }).then(res => {
          this.asidelist = res.data.datas;
        });
      },
      handleAsideClick(gcid, gcname) {
        this.$router.push({path: `/selectedlist/${JSON.stringify({gcid, gcname})}`});
      }
    }
  }

</script>

<style lang="scss" scoped>



  div.gllist {
    display: flex;

    nav {
      width: .88rem;
      background-color: #f0f0f0;
      ul {
        li {
          height: .45rem;
          line-height: .45rem;
          text-align: center;
          font-size: .13rem;
          color: #333;
        }

        li.active {
          background-color: white;
          color: #f81234;
        }
      }
    }

    aside {
      flex: 1;

      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 33.33%;
          height: 1.27rem;
          img {
            display: block;
            width: 100%;
          }

          p {
            font-size: .12rem;
            color: #333;
            text-align: center;
          }
        }
      }
    }
  }
</style>
