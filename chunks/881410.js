r.d(t, { Z: () => g }), r(388685), r(781311);
var n = r(951288),
    i = r(647438),
    o = r(423802),
    a = r(481060),
    l = r(510231),
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
        [p] = (0, a.ynZ)(),
        [b, m] = i.useState(""),
        O = i.useRef(null),
        y = i.useRef(""),
        j = i.useMemo(() => new Set(g.games.map((e) => e.applicationId)), [g.games]),
        { trackUserProfileEditAction: x } = (0, c.KZ)(),
        h = i.useCallback(
            (e) => {
                (0, s.ES)(r, { applicationId: e }),
                    a.uvj.announce(u.intl.string(u.t.q0U3DA)),
                    x({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: r,
                    });
            },
            [r, x],
        ),
        { options: v, matchSorterOptions: _ } = (0, l.h)(),
        w = i.useCallback(
            (e) => {
                var t, r;
                return "" === e.trim()
                    ? v
                    : (0, o.Lu)(
                          v,
                          e,
                          ((t = f({}, _)),
                          (r = r = { threshold: o.Lu.rankings.CONTAINS }),
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
            [v, _],
        ),
        P = i.useCallback(
            (e) => {
                "" === b.trim() &&
                    "" !== e.trim() &&
                    x({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: r,
                        numCharacters: e.trim().length,
                        numResults: w(e).length,
                    }),
                    m(e),
                    (y.current = e);
            },
            [b, x, r, w],
        ),
        E = i.useMemo(
            () =>
                "" !== b.trim()
                    ? u.intl.format(u.t.ZoearK, {
                          searchTerm: b.trim(),
                          surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C",
                      })
                    : u.intl.string(u.t.QwSXv7),
            [b],
        );
    return (0, n.jsx)(a.yRy, {
        targetElementRef: O,
        position: "bottom",
        align: "center",
        onRequestOpen: () => {
            x({
                action: "PRESS_ADD_GAME",
                widgetEdited: r,
            }),
                m(""),
                (y.current = "");
        },
        onRequestClose: () => {
            x({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: r,
                numCharacters: y.current.trim().length,
                numResults: w(y.current).length,
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(a.DBG, {
                className: d.gameSearchCombobox,
                placeholder: u.intl.string(u.t["5h0QOD"]),
                autoFocus: !0,
                value: p,
                onChange: (e) => {
                    h(e), t();
                },
                multiSelect: !1,
                maxVisibleItems: 7,
                emptyStateText: E,
                emptyStateHeader: "",
                onQueryChange: P,
                children: (e) =>
                    w(e).map((e) =>
                        (0, n.jsx)(
                            a.lo1,
                            {
                                disabled: j.has(e.value),
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
                ref: O,
                children: (0, n.jsx)(
                    a.zxk,
                    f(
                        {
                            variant: "secondary",
                            size: "sm",
                            icon: a.qJs,
                            text: u.intl.string(u.t.SgTOtb),
                            disabled: t,
                        },
                        e,
                    ),
                ),
            }),
    });
}
