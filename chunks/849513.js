t.exports = function (t, e) {
    return function (a) {
        return null != a && a[t] === e && (void 0 !== e || t in Object(a));
    };
};
