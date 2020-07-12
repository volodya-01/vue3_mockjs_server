<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<div>{{resdata}}</div>
  </div>
</template>

<script>
import UrlClass from "../http/Urlclass"
export default {
  name: 'HelloWorld',
  data(){
    return{
      resdata:""
    }
  },
  props: {
    msg: String
  },
  mounted(){
    this.GetMonthReportingState()
  },
  methods:{
    GetMonthReportingState(){
      this.$axios.post(UrlClass.axiosUrlRC+"GetMonthReportingState")
      .then(res=>{
        console.log("GetMonthReportingState----res",res)
        this.resdata=JSON.stringify(res.data)
      })
      .catch(erroe=>{
        console.log('error', error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
