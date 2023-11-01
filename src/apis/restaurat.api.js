import axiosInstance from "./../configs/axiosInstance";

const RestaurantAPI = {
   async getRestaurant() {
      try {
         const response = await axiosInstance.get("/list");
         return response;
      } catch (err) {
         const { message } = err.response.data;
         throw new Error(message);
      }
   },
   async searchRestaurant(keyword) {
      try {
         const response = await axiosInstance.get(`/search?q=${keyword}`)
         return response
      } catch (err) {
         const { message } = err.response.data;
         throw new Error(message);
      }
   },
   async detailedRestaurant(id) {
      try {
         const response = await axiosInstance.get(`/detail/${id}`)
         return response
      } catch (err) {
         const { message } = err.response.data;
         throw new Error(message)
      }
   }
};

export default RestaurantAPI;
