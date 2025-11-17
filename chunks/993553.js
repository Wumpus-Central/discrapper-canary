n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(692547),
    o = n(481060),
    s = n(388032),
    l = n(270782);
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
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var { children: t, lineClamp: n = 2 } = e,
        c = _(e, ["children", "lineClamp"]);
    let [d, p] = i.useState(!1),
        [h, m] = i.useState(null),
        g =
            null != h &&
            (0, r.jsx)("button", {
                className: l.button,
                onClick: () => p((e) => !e),
                children: (0, r.jsxs)(o.Text, {
                    className: l.seeMore,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        d ? s.intl.string(s.t["JQX/Pb"]) : s.intl.string(s.t.Fbrd8J),
                        d
                            ? (0, r.jsx)(o.u04, {
                                  color: a.Z.colors.TEXT_BRAND,
                                  size: "xs",
                              })
                            : (0, r.jsx)(o.CJ0, {
                                  color: a.Z.colors.TEXT_BRAND,
                                  size: "xs",
                              }),
                    ],
                }),
            }),
        [E, b] = i.useState(null),
        y = i.useCallback(() => {
            if (null == E) return;
            let { scrollHeight: e, clientHeight: t } = E;
            e > t &&
                m({
                    truncatedHeight: t,
                    expandedHeight: e,
                });
        }, [E]);
    i.useEffect(() => {
        requestAnimationFrame(y);
    }, [y, t, n]);
    let O = "auto";
    return (
        null != h && (O = d ? "".concat(h.expandedHeight, "px") : "".concat(h.truncatedHeight, "px")),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(
                    o.Text,
                    f(u({}, c), {
                        className: l.content,
                        lineClamp: d ? void 0 : n,
                        ref: b,
                        style: { height: O },
                        children: t,
                    }),
                ),
                g,
            ],
        })
    );
}
