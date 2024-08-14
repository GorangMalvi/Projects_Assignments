function getData(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
          reject("error");
        } else {
          setTimeout(() => {
            if (data % 2 === 0) {
              resolve("even");
            } else {
              resolve("odd");
            }
          }, data % 2 === 0 ? 4000 : 2000);
        }
      });
}

export default getData
