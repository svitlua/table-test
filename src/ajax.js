export default {
  async fetchData(){
    try {
      const response = await fetch(`http://api.jsonbin.io/b/5b14fbb3c83f6d4cc734a933`);
      const responseJson = await response.json();
      console.log(responseJson.data);
      return responseJson.items;
    } catch (error) {
      console.error(error);
    }
  }
};


//http://api.jsonbin.io/b/5b14fbb3c83f6d4cc734a933
