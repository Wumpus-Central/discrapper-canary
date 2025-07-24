n.d(t, { gM: () => c });
var r = n(255367),
    i = n(73800);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            }));
    }
    return e;
}
let s = {
        1: () => n.e('48221').then(n.bind(n, 740106)),
        0: () => Promise.resolve().then(n.bind(n, 669636))
    },
    l = {
        1: i.lazy(s[1]),
        0: i.lazy(s[0])
    };
function c(e) {
    let { data: t } = e,
        n = l[t.type],
        a = t.props;
    return (0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(n, o({}, a))
    });
}
