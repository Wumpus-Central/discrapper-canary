t.d(e, { Z: () => l });
var r = t(54381);
t(473749);
var i = t(410575);
function l(n, e) {
    return function (t) {
        return (0, r.jsx)(i.Z, {
            page: e.page,
            section: e.section,
            object: e.object,
            objectType: e.objectType,
            children: (0, r.jsx)(
                n,
                (function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                                }),
                            )),
                            r.forEach(function (e) {
                                var r;
                                (r = t[e]),
                                    e in n
                                        ? Object.defineProperty(n, e, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (n[e] = r);
                            });
                    }
                    return n;
                })({}, t),
            ),
        });
    };
}
