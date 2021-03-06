import http from "../http-common";
// all of the node stuff here
// here's where we will fetch the pet data
class getPetInfoService {
  getAll(page = 0) {
    return http.get(`pets?page=${page}`);
  }

  get(id) {
    return http.get(`/pets?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`pets?${by}=${query}&page=${page}`);
  } 

  createReview(data) {
    return http.post("/review-new", data);
  }

  updateReview(data) {
    return http.put("/review-edit", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
  }

}
export default new getPetInfoService();
