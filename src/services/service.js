export default class imgService {
    getResource = async (search) => {
      const id = "f4635834b0593b42dbed73f52ee4e9ed0a8298244cc3fada281829973303cbe0";
      const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=${id}&query=${search}&page=1`);
      if (!res.ok) {
        throw (`Cound not fetch, status: ${res.status}`);
      }
      return await res.json();
    };
  
    getImgItems = async (arg) => {
      return await this.getResource(arg);
    };
  }
  