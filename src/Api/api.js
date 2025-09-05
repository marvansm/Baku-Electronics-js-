import axios from "axios";

class HttpService {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000,
    });
  }
  async GetApiData(url) {
    try {
      const res = await this.axiosInstance.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async PostNewData(url, payload) {
    try {
      const res = await this.axiosInstance.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteData(url) {
    try {
      const res = await this.axiosInstance.delete(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HttpService;
