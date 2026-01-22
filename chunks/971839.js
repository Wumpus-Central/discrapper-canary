var r = n(173446),
    i = n(59248),
    a = n(602385),
    s = RegExp("['\u2019]", "g");
e.exports = function (e) {
    return function (t) {
        return r(a(i(t).replace(s, "")), e, "");
    };
};
