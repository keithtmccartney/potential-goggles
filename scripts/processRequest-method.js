function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);

        pubnub.publish({
            channel: 'bitcoin-feed',
            message: {
                eon: {
                    'BitCoin': response.BTC.USD.toFixed(2)
                }
            }
        });

        pubnub.publish({
            channel: 'ether-feed',
            message: {
                eon: {
                    'Ether': response.ETH.USD.toFixed(2)
                }
            }
        });

        pubnub.publish({
            channel: 'litecoin-feed',
            message: {
                eon: {
                    'LiteCoin': response.LTC.USD.toFixed(2)
                }
            }
        });
    }
}
