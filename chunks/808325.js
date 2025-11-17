n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(365311),
    o = n(37812),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = new a.Z(() =>
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e("37971").then(n.bind(n, 848548));
            return (t) => (0, r.jsx)(e, c({}, t));
        },
        {
            modalKey: o._,
            onCloseRequest: s.VqG,
        },
    ),
);
