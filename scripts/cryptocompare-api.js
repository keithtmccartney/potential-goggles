function mainApp() {
    setInterval(function () {
        xhr.open('GET', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD', true)
        xhr.send();
        xhr.onreadystatechange = processRequest;
    }, 10000)
};

mainApp();
