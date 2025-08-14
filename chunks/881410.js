n.d(t, { Z: () => f }), n(388685), n(781311);
var r = n(255367),
    l = n(73800),
    i = n(423802),
    o = n(481060),
    a = n(510231),
    c = n(86419),
    s = n(388032),
    d = n(302627);
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
function f(e) {
    let { disabled: t, widgetType: n } = e,
        [f] = (0, o.ynZ)(),
        p = l.useRef(null),
        m = l.useCallback(
            (e) => {
                (0, c.ES)(n, { applicationId: e });
            },
            [n],
        ),
        { options: g, matchSorterOptions: b } = (0, a.h)(),
        j = l.useCallback(
            (e) => {
                var t, n;
                return "" === e.trim()
                    ? g
                    : (0, i.Lu)(
                          g,
                          e,
                          ((t = u({}, b)),
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
            [g, b],
        );
    return (0, r.jsx)(o.yRy, {
        targetElementRef: p,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.DBG, {
                className: d.gameSearchCombobox,
                placeholder: s.intl.string(s.t["5h0QOD"]),
                autoFocus: !0,
                value: f,
                onChange: (e) => {
                    m(e), t();
                },
                onClose: t,
                multiSelect: !1,
                showScrollbar: !0,
                maxVisibleItems: 7,
                children: (e) =>
                    j(e).map((e) =>
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
                ref: p,
                children: (0, r.jsx)(
                    o.zxk,
                    u(
                        {
                            variant: "secondary",
                            size: "sm",
                            text: s.intl.string(s.t.uqw8wM),
                            disabled: t,
                        },
                        e,
                    ),
                ),
            }),
    });
}
