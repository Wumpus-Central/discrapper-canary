n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    o = n(755721),
    a = n(481060),
    s = n(984168),
    l = n(314734),
    c = n(388032),
    u = n(556342);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 20;
function m(e) {
    let t,
        { sortOrder: n, onSortOptionClick: d } = e,
        _ = i.useRef(null);
    switch (n) {
        case l.bS.POPULAR:
            t = c.intl.string(c.t.SzxiqK);
            break;
        case l.bS.ALPHABETICAL:
            t = c.intl.string(c.t.m8xstr);
    }
    return (0, r.jsx)(a.yRy, {
        targetElementRef: _,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.Z, {
                sortOrder: n,
                onSortOptionClick: d,
                closePopout: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, r.jsxs)(
                o.zx,
                p(f({}, e), {
                    buttonRef: _,
                    size: o.zx.Sizes.MIN,
                    color: o.zx.Colors.CUSTOM,
                    className: u.sortDropdown,
                    innerClassName: u.sortDropdownInner,
                    "aria-label": c.intl.string(c.t.yeYaHR),
                    children: [
                        (0, r.jsx)(a.uVW, {
                            size: "xs",
                            color: "currentColor",
                            className: u.sortIconMargin,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: t,
                        }),
                        i
                            ? (0, r.jsx)(a.u04, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: h,
                              })
                            : (0, r.jsx)(a.CJ0, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: h,
                              }),
                    ],
                }),
            );
        },
    });
}
