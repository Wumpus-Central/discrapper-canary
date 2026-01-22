n.d(t, { q: () => d });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(732955),
    o = n(985018),
    l = n(248789);
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
function d(e) {
    let { onClick: t, "aria-label": n = o.intl.string(o.t.cpT0Cq), variant: c } = e,
        { firstFocusableItemProps: d } = i.useContext(a.MVj);
    return (0, r.jsx)("div", {
        className: l.closeButton,
        children: (0, r.jsx)(
            s.JnF,
            u(
                {
                    size: "sm",
                    "aria-label": n,
                    onClick: t,
                    variant: c,
                },
                d,
            ),
        ),
    });
}
