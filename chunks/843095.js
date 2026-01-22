l.d(t, { A: () => i });
var r = l(627968),
    n = l(397927);
function i(e) {
    return (0, n.mMO)(async () => {
        let { default: t } = await Promise.all([l.e("91284"), l.e("14691")]).then(l.bind(l, 314461));
        return (l) =>
            (0, r.jsx)(
                t,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(l);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = l[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, l, e),
            );
    });
}
