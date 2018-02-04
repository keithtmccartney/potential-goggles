eon.chart({
    channels: ['bitcoin-feed'],
    history: true,
    flow: true,
    limit: pointLimit,
    pubnub: pubnub,
    generate: {
        bindto: '#bitcoinChart',
        data: eonData,
        axis: eonAxis
    }
});

// Create the Ether Chart for BitCoin and bind its div
eon.chart({
    channels: ['ether-feed'],
    history: true,
    flow: true,
    limit: pointLimit,
    pubnub: pubnub,
    generate: {
        bindto: '#etherChart',
        data: eonData,
        axis: eonAxis
    }
});

// Create the LiteCoin Chart for BitCoin and bind its div
eon.chart({
    channels: ['litecoin-feed'],
    history: true,
    flow: true,
    limit: pointLimit,
    pubnub: pubnub,
    generate: {
        bindto: '#liteCoinChart',
        data: eonData,
        axis: eonAxis
    }
});
