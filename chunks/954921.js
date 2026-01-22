n.d(t, {
    L: () => d,
    Te: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927);
n(515718);
var a = n(398094);

function s(e, t, n) {
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

function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function u(e) {
    return "number" != typeof e ? (0, i.FT9)(e) * a.Xq : e * a.Xq;
}
let d = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: a, guild: s, onClose: l } = e;
    (0, i.mMO)(async () => {
        let { default: e } = await n.e("68406").then(n.bind(n, 130453));
        return (n) =>
            (0, r.jsx)(
                e,
                c(o({}, n), {
                    onCloseModal: n.onClose,
                    onClose: l,
                    analyticsLocations: t,
                    initialSelectedDecoration: a,
                    guild: s,
                }),
            );
    }, {});
};
