export const get = (url) => {
  const req = new Request(url, { method: "get" });
  return myFetch(req);
};

export const post = (url, data) => {
  const req = new Request(url, { method: "post", body: JSON.stringify(data) });
  return myFetch(req);
};

const myFetch = (req) => {
  return fetch(req)
    .then((res) => {
      res.request = req;
      return res
        .json()
        .catch(() => {
          // allow empty json data to continue along chain
        })
        .then((data) => {
          res.data = data;
          if (res.ok) {
            return res;
          } else {
            const error = new Error((data && data.message) || res.status);
            error.response = res;
            throw error;
          }
        });
    })
    .catch((error) => {
      // append request to error
      console.log("fail here");
      error.request = req;
      throw error;
    });
};
