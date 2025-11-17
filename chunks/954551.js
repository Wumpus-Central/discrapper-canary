n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(665149),
    o = n(388035),
    s = n(453473),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { onOpen: t, onClose: n, className: c } = e;
    return (0, r.jsx)(s.P, {
        onOpen: t,
        onClose: n,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, s, d) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        a.JO,
                        f(u({}, n), {
                            ref: d,
                            className: c,
                            onClick: e,
                            icon: i.plf,
                            "aria-label": l.intl.string(l.t["2pAkDA"]),
                            tooltip: t ? null : l.intl.string(l.t["2pAkDA"]),
                            selected: t,
                            showBadge: s,
                        }),
                    ),
                    (0, r.jsx)(o.U, {
                        location: "bookmarks-button",
                        targetElementRef: d,
                    }),
                ],
            }),
    });
}
