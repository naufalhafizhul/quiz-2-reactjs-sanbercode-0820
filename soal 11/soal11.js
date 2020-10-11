function filterBookPromise(colorful, amountOfPage) {
    return new Promise(function(resolve, reject) {
      var books = [
        { name: 'Sinchan', totalPage: 50, isColorful: true },
        { name: 'Kalulus', totalPage: 250, isColorful: false },
        { name: 'Doraemon', totalPage: 40, isColorful: true },
        { name: 'Algoritma', totalPage: 300, isColorful: false }
      ]
      if (amountOfPage > 0) {
        resolve(books.filter(x => x.totalOfPage >= amountOfPage && isColorfull == colorful))
      } else {
        var reason = new Error('Maaf parameter salah')
        reject(reason)
      }
      if (colorful = true){
          resolve(books.filter(x=>x.isColorful = true))
      } else {
          var reason = new Error("Maaf buku tidak ada")
          reject (reason)
      }
    })
  }
  
  console.log(filterBookPromise());