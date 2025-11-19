n.d(t, { N: () => d });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(159691),
    s = n(388032),
    l = n(37751);
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
    let { onClick: t, "aria-label": n = s.intl.string(s.t.cpT0Cq) } = e,
        { firstFocusableItemProps: c } = i.useContext(a.MJU);
    return (0, r.jsx)("div", {
        className: l.closeButton,
        children: (0, r.jsx)(
            o.PZ7,
            u(
                {
                    size: "xs",
                    "aria-label": n,
                    onClick: t,
                    variant: "overlay-secondary",
                },
                c,
            ),
        ),
    });
}
