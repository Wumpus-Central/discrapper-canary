n.d(e, { Z: () => i });
var r = n(54381);
n(473749);
var o = n(410575);
function i(t, e) {
    return function (n) {
        return (0, r.jsx)(o.Z, {
            page: e.page,
            section: e.section,
            object: e.object,
            objectType: e.objectType,
            children: (0, r.jsx)(
                t,
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            r.forEach(function (e) {
                                var r;
                                (r = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = r);
                            });
                    }
                    return t;
                })({}, n),
            ),
        });
    };
}
