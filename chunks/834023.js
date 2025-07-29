n.d(t, {
    gM: () => u,
    tK: () => s
});
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
var s = (function (e) {
    return ((e[(e.COLLECTIBLES_PREVIEW = 0)] = 'COLLECTIBLES_PREVIEW'), (e[(e.LOOPING_VIDEO = 1)] = 'LOOPING_VIDEO'), (e[(e.DEMO = 2)] = 'DEMO'), e);
})({});
let l = {
        2: () => n.e('48221').then(n.bind(n, 740106)),
        1: () => n.e('17094').then(n.bind(n, 326379)),
        0: () => Promise.resolve().then(n.bind(n, 669636))
    },
    c = {
        2: i.lazy(l[2]),
        1: i.lazy(l[1]),
        0: i.lazy(l[0])
    };
function u(e) {
    let { data: t } = e,
        n = c[t.type],
        a = t.props;
    return (0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(n, o({}, a))
    });
}
