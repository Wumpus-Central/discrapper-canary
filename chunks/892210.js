for (var o = n(946282), r = 'undefined' == typeof window ? n.g : window, i = ['moz', 'webkit'], a = 'AnimationFrame', u = r['request' + a], s = r['cancel' + a] || r['cancelRequest' + a], l = 0; !u && l < i.length; l++) (u = r[i[l] + 'Request' + a]), (s = r[i[l] + 'Cancel' + a] || r[i[l] + 'CancelRequest' + a]);
if (!u || !s) {
    var c = 0,
        p = 0,
        d = [],
        f = 1000 / 60;
    (u = function (e) {
        if (0 === d.length) {
            var t = o(),
                n = Math.max(0, f - (t - c));
            (c = n + t),
                setTimeout(function () {
                    var e = d.slice(0);
                    d.length = 0;
                    for (var t = 0; t < e.length; t++)
                        if (!e[t].cancelled)
                            try {
                                e[t].callback(c);
                            } catch (e) {
                                setTimeout(function () {
                                    throw e;
                                }, 0);
                            }
                }, Math.round(n));
        }
        return (
            d.push({
                handle: ++p,
                callback: e,
                cancelled: !1
            }),
            p
        );
    }),
        (s = function (e) {
            for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0);
        });
}
(e.exports = function (e) {
    return u.call(r, e);
}),
    (e.exports.cancel = function () {
        s.apply(r, arguments);
    }),
    (e.exports.polyfill = function (e) {
        e || (e = r), (e.requestAnimationFrame = u), (e.cancelAnimationFrame = s);
    });
