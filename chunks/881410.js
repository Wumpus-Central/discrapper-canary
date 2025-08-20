r.d(t, { Z: () => f }), r(388685), r(781311);
var n = r(951288),
    l = r(647438),
    i = r(423802),
    a = r(481060),
    c = r(510231),
    o = r(86419),
    s = r(388032),
    u = r(302627);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f(e) {
    let { disabled: t, widgetType: r, widget: f } = e,
        [g] = (0, a.ynZ)(),
        b = l.useRef(null),
        p = l.useMemo(() => new Set(f.games.map((e) => e.applicationId)), [f.games]),
        O = l.useCallback(
            (e) => {
                (0, o.ES)(r, { applicationId: e });
            },
            [r],
        ),
        { options: m, matchSorterOptions: j } = (0, c.h)(),
        y = l.useCallback(
            (e) => {
                var t, r;
                return "" === e.trim()
                    ? m
                    : (0, i.Lu)(
                          m,
                          e,
                          ((t = d({}, j)),
                          (r = r = { threshold: i.Lu.rankings.CONTAINS }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n);
                                    }
                                    return r;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                }),
                          t),
                      );
            },
            [m, j],
        );
    return (0, n.jsx)(a.yRy, {
        targetElementRef: b,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(a.DBG, {
                className: u.gameSearchCombobox,
                placeholder: s.intl.string(s.t["5h0QOD"]),
                autoFocus: !0,
                value: g,
                onChange: (e) => {
                    O(e), t();
                },
                onClose: t,
                multiSelect: !1,
                showScrollbar: !0,
                maxVisibleItems: 7,
                children: (e) =>
                    y(e).map((e) =>
                        (0, n.jsx)(
                            a.lo1,
                            {
                                disabled: p.has(e.value),
                                value: String(e.value),
                                children: (0, n.jsx)(a.lo1.Label, {
                                    children: (0, n.jsx)(a.Text, {
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
            (0, n.jsx)("div", {
                ref: b,
                children: (0, n.jsx)(
                    a.zxk,
                    d(
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
