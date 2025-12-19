n.d(t, {
    V: () => g,
    m: () => h,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(620792),
    o = n(481060),
    s = n(699682),
    l = n(388032),
    c = n(191228);
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
function p(e, t) {
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
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    let { validateOn: t, error: n, value: r, minLength: a, maxLength: o, defaultDirty: s } = e,
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
                      ? null != a && (null != (e = null == r ? void 0 : r.length) ? e : 0) < a
                          ? l.intl.formatToPlainString(l.t["62rk1K"], { minLength: a })
                          : null != o && (null != (i = null == r ? void 0 : r.length) ? i : 0) > o
                            ? l.intl.formatToPlainString(l.t.ICT5S6, { maxLength: o })
                            : null
                      : null;
        }, [t, n, c, a, null == r ? void 0 : r.length, o]),
        f = (null != n && "" !== n) || null != d;
    return {
        errorMessage: d,
        hasError: f,
        setShouldValidate: u,
    };
}
function g(e) {
    let { error: t } = e,
        n = (0, o.Yzy)(t, {
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
                f = _(e, ["transform"]);
            return null != n && "" !== n
                ? (0, r.jsx)(
                      a.animated.div,
                      {
                          style: p(d({}, f), { overflow: "hidden" }),
                          children: (0, r.jsxs)(a.animated.div, {
                              style: { transform: u },
                              className: c.inputError,
                              children: [
                                  (0, r.jsx)(o.Mgn, {
                                      size: "xs",
                                      color: o.TVs.colors.TEXT_FEEDBACK_CRITICAL.css,
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      color: "text-feedback-critical",
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
