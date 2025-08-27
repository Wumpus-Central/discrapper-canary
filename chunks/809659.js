t.d(A, { Z: () => a });
var n = t(951288);
t(647438);
var r = t(952265);
function a(e) {
    (0, r.ZD)(async () => {
        let { default: A } = await t.e("73322").then(t.bind(t, 776045));
        return (t) =>
            (0, n.jsx)(
                A,
                (function (e) {
                    for (var A = 1; A < arguments.length; A++) {
                        var t = null != arguments[A] ? arguments[A] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            n.forEach(function (A) {
                                var n;
                                (n = t[A]),
                                    A in e
                                        ? Object.defineProperty(e, A, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[A] = n);
                            });
                    }
                    return e;
                })({}, e, t),
            );
    });
}
