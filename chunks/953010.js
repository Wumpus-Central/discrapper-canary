var r = n(108778),
    i = 1.1920928955078125e-7,
    o = 3.4028234663852886e38,
    a = 1.1754943508222875e-38;
e.exports =
    Math.fround ||
    function (e) {
        return r(e, i, o, a);
    };
