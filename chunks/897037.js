n.d(t, {
    V: () => g,
    m: () => m,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(717976),
    a = n(481060),
    s = n(699682),
    l = n(388032),
    c = n(979712);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { validateOn: t, error: n, value: r, minLength: o, maxLength: a, defaultDirty: s } = e,
        [c, u] = i.useState(s),
        d = i.useMemo(() => {
            var e, i;
            return "change" !== t
                ? null
                : null === n || "" === n
                  ? null
                  : null != n
                    ? n
                    : c
                      ? null != o && (null != (e = null == r ? void 0 : r.length) ? e : 0) < o
                          ? l.intl.formatToPlainString(l.t["62rk1N"], { minLength: o })
                          : null != a && (null != (i = null == r ? void 0 : r.length) ? i : 0) > a
                            ? l.intl.formatToPlainString(l.t.ICT5S0, { maxLength: a })
                            : null
                      : null;
        }, [t, n, c, o, null == r ? void 0 : r.length, a]),
        f = (null != n && "" !== n) || null != d;
    return {
        errorMessage: d,
        hasError: f,
        setShouldValidate: u,
    };
}
function g(e) {
    let { error: t } = e,
        n = (0, a.Yzy)(t, {
            config: {
                tension: 250,
                clamp: !0,
            },
            from: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: "translate3d(0, -100%, 0)",
            },
            enter: {
                marginTop: 8,
                height: "auto",
                opacity: 1,
                transform: "translate3d(0, -0px, 0)",
            },
            leave: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: "translate3d(0, -100%, 0)",
            },
        }),
        i = (0, s.Z)(t);
    return (0, r.jsx)(r.Fragment, {
        children: n((e, n, s) => {
            let { key: l } = s,
                { transform: u } = e,
                f = p(e, ["transform"]);
            return null != n && "" !== n
                ? (0, r.jsx)(
                      o.animated.div,
                      {
                          style: _(d({}, f), { overflow: "hidden" }),
                          children: (0, r.jsxs)(o.animated.div, {
                              style: { transform: u },
                              className: c.inputError,
                              children: [
                                  (0, r.jsx)(a.Mgn, {
                                      size: "xs",
                                      color: a.TVs.colors.TEXT_DANGER.css,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      color: "text-danger",
                                      variant: "text-sm/medium",
                                      children: null != t && "" !== t ? t : i,
                                  }),
                              ],
                          }),
                      },
                      l,
                  )
                : null;
        }),
    });
}
