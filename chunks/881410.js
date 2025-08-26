r.d(t, { Z: () => f }), r(388685), r(781311);
var n = r(951288),
    a = r(647438),
    i = r(423802),
    l = r(481060),
    o = r(510231),
    c = r(86419),
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
        [g] = (0, l.ynZ)(),
        [b, p] = a.useState(""),
        m = a.useRef(null),
        O = a.useMemo(() => new Set(f.games.map((e) => e.applicationId)), [f.games]),
        j = a.useCallback(
            (e) => {
                (0, c.ES)(r, { applicationId: e });
            },
            [r],
        ),
        { options: y, matchSorterOptions: v } = (0, o.h)(),
        x = a.useMemo(
            () =>
                "" !== b.trim()
                    ? s.intl.formatToPlainString(s.t.ZoearK, { searchTerm: b.trim() })
                    : s.intl.string(s.t.QwSXv7),
            [b],
        ),
        h = a.useCallback(
            (e) => {
                var t, r;
                return "" === e.trim()
                    ? y
                    : (0, i.Lu)(
                          y,
                          e,
                          ((t = d({}, v)),
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
            [y, v],
        );
    return (0, n.jsx)(l.yRy, {
        targetElementRef: m,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(l.DBG, {
                className: u.gameSearchCombobox,
                placeholder: s.intl.string(s.t["5h0QOD"]),
                autoFocus: !0,
                value: g,
                onChange: (e) => {
                    j(e), t();
                },
                onClose: t,
                multiSelect: !1,
                showScrollbar: !0,
                maxVisibleItems: 7,
                emptyStateText: x,
                emptyStateHeader: "",
                onQueryChange: p,
                children: (e) =>
                    h(e).map((e) =>
                        (0, n.jsx)(
                            l.lo1,
                            {
                                disabled: O.has(e.value),
                                value: String(e.value),
                                children: (0, n.jsx)(l.lo1.Label, {
                                    children: (0, n.jsx)(l.Text, {
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
                ref: m,
                children: (0, n.jsx)(
                    l.zxk,
                    d(
                        {
                            variant: "secondary",
                            size: "sm",
                            icon: l.qJs,
                            text: s.intl.string(s.t.SgTOtb),
                            disabled: t,
                        },
                        e,
                    ),
                ),
            }),
    });
}
