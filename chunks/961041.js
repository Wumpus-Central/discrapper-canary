var r = n(127849),
    i = n(630489),
    o = n(880181),
    a = n(275717),
    s = n(845691),
    l = n(751736),
    c = n(284955),
    u = n(511696),
    d = n(287353),
    f = i && i.prototype,
    _ = l('species'),
    p = !1,
    h = o(r.PromiseRejectionEvent);
e.exports = {
    CONSTRUCTOR: a('Promise', function () {
        var e = s(i),
            t = e !== String(i);
        if ((!t && 66 === d) || (u && !(f.catch && f.finally))) return !0;
        if (!d || d < 51 || !/native code/.test(e)) {
            var n = new i(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((n.constructor = {})[_] = r), !(p = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && ('BROWSER' === c || 'DENO' === c) && !h;
    }),
    REJECTION_EVENT: h,
    SUBCLASSING: p
};
