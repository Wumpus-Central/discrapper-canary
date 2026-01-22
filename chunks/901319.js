n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(884362),
    a = n(837381),
    s = n(311907),
    o = n(73939),
    c = n(397927),
    u = n(775602),
    d = n(652215),
    p = n(520936);
let f = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: f,
            hasSearchQuery: h,
            sectionFilter: A,
            footer: g,
            renderSectionFooter: m,
        } = e,
        b = (0, s.bG)([u.A], () => u.A.keyboardModeEnabled),
        _ = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        E = (0, l.Ay)({
            id: "people",
            isEnabled: b,
            async scrollToStart() {},
            async scrollToEnd() {},
        }),
        O = A !== d.m3P.ONLINE && A !== d.m3P.ALL,
        y = _ || h || O,
        I = i.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : y
                          ? (0, r.jsxs)(
                                "div",
                                {
                                    children: [f(t), e.map((e) => n(e, t)), null == m ? void 0 : m(t)],
                                },
                                t,
                            )
                          : (0, r.jsxs)(
                                o.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [f(t), e.map((e) => n(e, t)), null == m ? void 0 : m(t)],
                                },
                                t,
                            ),
                ),
            [n, f, m, t, y],
        );
    return (0, r.jsx)(a.hD, {
        navigator: E,
        children: (0, r.jsx)(a.PR, {
            children: (e) => {
                var t, n;
                let { ref: i } = e,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i,
                            l = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                            return l;
                        }
                        if (
                            ((l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.getOwnPropertyNames(e);
                                for (r = 0; r < l.length; r++)
                                    (n = l[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (i[n] = e[n]);
                                return i;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                        return l;
                    })(e, ["ref"]);
                return (0, r.jsxs)(
                    c.ArX,
                    ((t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            ref: i,
                            className: p.e3,
                        },
                        l,
                    )),
                    (n = n =
                        {
                            children: [I, g],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
        }),
    });
};
