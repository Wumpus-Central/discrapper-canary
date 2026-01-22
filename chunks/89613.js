var r = n(971886),
    i = n(752909);
e.exports = function (e, t) {
    var n = -1,
        a = i(e) ? Array(e.length) : [];
    return (
        r(e, function (e, r, i) {
            a[++n] = t(e, r, i);
        }),
        a
    );
};
