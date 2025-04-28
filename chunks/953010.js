var e = r(108778);
t.exports =
    Math.fround ||
    function (t) {
        return e(t, 1.1920928955078125e-7, 3.4028234663852886e38, 1.1754943508222875e-38);
    };
