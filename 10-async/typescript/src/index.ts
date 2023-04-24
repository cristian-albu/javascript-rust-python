// ?------------------- Promises--------------
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "promise";
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ?---------------- Async/Await---------------

const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "async";
      resolve(data);
    }, 500);
  });
};

const getData = async () => {
  try {
    const data = await fetchData2();

    // Parallel fetching if data does not depend on each other
    const [data2, data3] = await Promise.all([fetchData2(), fetchData2()]);

    console.log(data);
    console.log(data2, data3);
  } catch (error) {
    console.log(error);
  }
};

getData();

//?-------------- Callback--------------------

const fetchData3 = (callback: (error: null, data: string) => void) => {
  setTimeout(() => {
    const data = "callback";
    callback(null, data);
  }, 1000);
};

fetchData3((error: null, data: string) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
