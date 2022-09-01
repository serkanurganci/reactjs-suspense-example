const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => res[0]);
};

export const randomNumber = () => {
  return new Promise((res) => setTimeout(() => res(Math.random()), 3000));
};

const containerPromise = (promise) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        console.log(promise);
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    },
  };
};

export const createResource = () => {
  return {
    post: containerPromise(fetchPosts()),
    number: containerPromise(randomNumber()),
  };
};
