n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(53691),
    s = n(981631),
    o = n(388032),
    c = n(282600);
function u(e) {
    var { className: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['className']);
    return (0, r.jsx)(
        i.p,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                text: o.NW.string(o.t['2ZhEh4']),
                button: o.NW.string(o.t.pj0XBA),
                buttonAnalyticsObject: {
                    section: s.jXE.USER_PROFILE,
                    object: s.qAy.RECENT_AVATARS_UPSELL
                },
                className: l()(c.container, t)
            },
            n
        )
    );
}
