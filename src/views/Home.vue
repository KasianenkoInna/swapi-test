<template>
  <div class="content-wrapper">
    <PromoBanner :text="text"/>
    <div class="home-content-wrapper">
      <Filters />
      <StarshipsTable />
    </div>
  </div>
</template>

<script>
  import Filters from "../components/Filters";
  import StarshipsTable from "../components/StarshipsTable";
  import PromoBanner from "../components/PromoBanner";

  export default {
    name: 'Home',
    data() {
      return {
        text: 'MAY THE FORCE BE WITH YOU'
      }
    },
    components:{
      Filters,
      StarshipsTable,
      PromoBanner
    }
  }
</script>
