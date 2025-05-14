n.d(t, {
    AR: () => r,
    XR: () => i,
    nf: () => o
});
var r = (function (e) {
        return (e[(e.KeepAsIs = 0)] = 'KeepAsIs'), (e[(e.UseGreyDot = 1)] = 'UseGreyDot'), e;
    })({}),
    i = (function (e) {
        return (e[(e.Low = 0)] = 'Low'), (e[(e.Medium = 1)] = 'Medium'), (e[(e.High = 2)] = 'High'), e;
    })({});
let o = {
    careALot: {
        monthOpenPerc: 0.01,
        yearOpenPerc: 0.01,
        sentMessages: 1000
    },
    careALittle: {
        monthOpenPerc: 0.001,
        yearOpenPerc: 0.001,
        sentMessages: 5,
        minOpens: 2
    },
    smallServerSize: 50,
    mediumServerSize: 200,
    frecency: {
        yearMinOpensSmallServer: 10,
        yearMinOpensLargeServer: 50,
        monthMinOpens: 2,
        totalOpensPercent: 0.1
    }
};
