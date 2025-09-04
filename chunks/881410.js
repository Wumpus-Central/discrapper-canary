r.d(t, { Z: () => b }), r(388685), r(781311);
var n = r(951288),
    i = r(647438),
    l = r(423802),
    o = r(481060),
    a = r(510231),
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
function b(e) {
    let { disabled: t, widgetType: r, widget: b } = e,
        [p] = (0, o.ynZ)(),
        [g, O] = i.useState(""),
        y = i.useRef(null),
        j = i.useRef(""),
        m = i.useMemo(() => new Set(b.games.map((e) => e.applicationId)), [b.games]),
        { trackUserProfileEditAction: v } = (0, c.KZ)(),
        h = i.useCallback(
            (e) => {
                (0, s.ES)(r, { applicationId: e }),
                    v({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: r,
                    });
            },
            [r, v],
        ),
        { options: x, matchSorterOptions: w } = (0, a.h)(),
        P = i.useCallback(
            (e) => {
                var t, r;
                return "" === e.trim()
                    ? x
                    : (0, l.Lu)(
                          x,
                          e,
                          ((t = f({}, w)),
                          (r = r = { threshold: l.Lu.rankings.CONTAINS }),
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
            [x, w],
        ),
        S = i.useCallback(
            (e) => {
                "" === g.trim() &&
                    "" !== e.trim() &&
                    v({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: r,
                        numCharacters: e.trim().length,
                        numResults: P(e).length,
                    }),
                    O(e),
                    (j.current = e);
            },
            [g, v, r, P],
        ),
        E = i.useMemo(
            () =>
                "" !== g.trim()
                    ? u.intl.formatToPlainString(u.t.ZoearK, { searchTerm: g.trim() })
                    : u.intl.string(u.t.QwSXv7),
            [g],
        );
    return (0, n.jsx)(o.yRy, {
        targetElementRef: y,
        position: "bottom",
        align: "center",
        onRequestOpen: () => {
            v({
                action: "PRESS_ADD_GAME",
                widgetEdited: r,
            }),
                O(""),
                (j.current = "");
        },
        onRequestClose: () => {
            v({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: r,
                numCharacters: j.current.trim().length,
                numResults: P(j.current).length,
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(o.DBG, {
                className: d.gameSearchCombobox,
                placeholder: u.intl.string(u.t["5h0QOD"]),
                autoFocus: !0,
                value: p,
                onChange: (e) => {
                    h(e), t();
                },
                multiSelect: !1,
                showScrollbar: !0,
                maxVisibleItems: 7,
                emptyStateText: E,
                emptyStateHeader: "",
                onQueryChange: S,
                children: (e) =>
                    P(e).map((e) =>
                        (0, n.jsx)(
                            o.lo1,
                            {
                                disabled: m.has(e.value),
                                value: String(e.value),
                                children: (0, n.jsx)(o.lo1.Label, {
                                    children: (0, n.jsx)(o.Text, {
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
                ref: y,
                children: (0, n.jsx)(
                    o.zxk,
                    f(
                        {
                            variant: "secondary",
                            size: "sm",
                            icon: o.qJs,
                            text: u.intl.string(u.t.SgTOtb),
                            disabled: t,
                        },
                        e,
                    ),
                ),
            }),
    });
}
