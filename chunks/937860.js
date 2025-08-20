n.d(t, { s: () => f });
var r = n(951288),
    i = n(755721),
    a = n(481060),
    o = n(388032),
    s = n(157448);
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
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = (e) =>
    (0, r.jsx)(
        i.zx,
        d(c({ "data-migration-pending": !0 }, e), {
            "aria-label": o.intl.string(o.t.cpT0Cg),
            look: i.zx.Looks.BLANK,
            size: i.zx.Sizes.NONE,
            wrapperClassName: s.closeButton,
            innerClassName: s.closeButtonInner,
            children: (0, r.jsx)(a.Uz9, {
                size: "refresh_sm",
                className: s.closeButtonIcon,
            }),
        }),
    );
