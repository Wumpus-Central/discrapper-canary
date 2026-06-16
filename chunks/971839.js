var i = n(173446),
    r = n(59248),
    s = n(602385),
    a = RegExp("['\u2019]", "g");
e.exports = function (e) {
    return function (t) {
        return i(s(r(t).replace(a, "")), e, "");
    };
};
