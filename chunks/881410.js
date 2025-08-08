n.d(t, { Z: () => u }), n(388685), n(781311);
var r = n(255367),
    l = n(73800),
    i = n(423802),
    o = n(481060),
    a = n(510231),
    c = n(388032),
    s = n(591334);
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
}
function u() {
    let [e] = (0, o.ynZ)(),
        t = l.useRef(null),
        n = l.useCallback((e) => {}, []),
        { options: u, matchSorterOptions: f } = (0, a.h)(),
        p = l.useCallback(
            (e) => {
                var t, n;
                return "" === e.trim()
                    ? u
                    : (0, i.Lu)(
                          u,
                          e,
                          ((t = d({}, f)),
                          (n = n = { threshold: i.Lu.rankings.CONTAINS }),
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
            [u, f],
        );
    return (0, r.jsx)(o.yRy, {
        targetElementRef: t,
        position: "bottom",
        align: "center",
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, r.jsx)(o.DBG, {
                className: s.gameSearchCombobox,
                placeholder: c.intl.string(c.t["5h0QOD"]),
                autoFocus: !0,
                value: e,
                onChange: (e) => {
                    n(e), l();
                },
                onClose: l,
                multiSelect: !1,
                showScrollbar: !0,
                maxVisibleItems: 7,
                children: (e) =>
                    p(e).map((e) =>
                        (0, r.jsx)(
                            o.lo1,
                            {
                                value: String(e.value),
                                children: (0, r.jsx)(o.lo1.Label, {
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        color: "header-secondary",
                                        children: e.label,
                                    }),
                                }),
                            },
                            String(e.value),
                        ),
                    ),
            });
        },
        children: (e) =>
            (0, r.jsx)("div", {
                ref: t,
                children: (0, r.jsx)(
                    o.zxk,
                    d(
                        {
                            variant: "primary",
                            size: "sm",
                            text: c.intl.string(c.t.uqw8wM),
                            "aria-haspopup": "listbox",
                        },
                        e,
                    ),
                ),
            }),
    });
}
