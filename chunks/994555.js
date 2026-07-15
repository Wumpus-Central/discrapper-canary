var t = u(24011),
    i = u(548178),
    p = u(790523),
    c = u(481814);
n.exports = function (n, r) {
    if (null == n) return {};
    var u = t(c(n), function (n) {
        return [n];
    });
    return (
        (r = i(r)),
        p(n, u, function (n, u) {
            return r(n, u[0]);
        })
    );
};
