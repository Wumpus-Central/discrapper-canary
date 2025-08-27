r.d(t, { Z: () => g }), r(388685), r(781311);
var n = r(951288),
    a = r(647438),
    i = r(423802),
    l = r(481060),
    o = r(510231),
    c = r(785717),
    s = r(86419),
    u = r(388032),
    d = r(302627);
function f(e) {
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
function g(e) {
    let { disabled: t, widgetType: r, widget: g } = e,
        [b] = (0, l.ynZ)(),
        [p, m] = a.useState(""),
        O = a.useRef(null),
        j = a.useMemo(() => new Set(g.games.map((e) => e.applicationId)), [g.games]),
        { trackUserProfileAction: y } = (0, c.KZ)(),
        v = a.useCallback(
            (e) => {
                (0, s.ES)(r, { applicationId: e }), y({ action: "EDIT_ACTION" });
            },
            [r, y],
        ),
        { options: x, matchSorterOptions: h } = (0, o.h)(),
        _ = a.useMemo(
            () =>
                "" !== p.trim()
                    ? u.intl.formatToPlainString(u.t.ZoearK, { searchTerm: p.trim() })
                    : u.intl.string(u.t.QwSXv7),
            [p],
        ),
        P = a.useCallback(
            (e) => {
                var t, r;
                return "" === e.trim()
                    ? x
                    : (0, i.Lu)(
                          x,
                          e,
                          ((t = f({}, h)),
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
            [x, h],
        );
    return (0, n.jsx)(l.yRy, {
        targetElementRef: O,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(l.DBG, {
                className: d.gameSearchCombobox,
                placeholder: u.intl.string(u.t["5h0QOD"]),
                autoFocus: !0,
                value: b,
                onChange: (e) => {
                    v(e), t();
                },
                onClose: t,
                multiSelect: !1,
                showScrollbar: !0,
                maxVisibleItems: 7,
                emptyStateText: _,
                emptyStateHeader: "",
                onQueryChange: m,
                children: (e) =>
                    P(e).map((e) =>
                        (0, n.jsx)(
                            l.lo1,
                            {
                                disabled: j.has(e.value),
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
                ref: O,
                children: (0, n.jsx)(
                    l.zxk,
                    f(
                        {
                            variant: "secondary",
                            size: "sm",
                            icon: l.qJs,
                            text: u.intl.string(u.t.SgTOtb),
                            disabled: t,
                        },
                        e,
                    ),
                ),
            }),
    });
}
