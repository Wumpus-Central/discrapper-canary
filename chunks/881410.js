n.d(t, { Z: () => g }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(423802),
    o = n(481060),
    l = n(510231),
    c = n(785717),
    s = n(86419),
    u = n(388032),
    d = n(302627);
function f(e) {
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
function g(e) {
    let { disabled: t, widgetType: n, widget: g } = e,
        [p] = (0, o.ynZ)(),
        [b, m] = i.useState(""),
        O = i.useRef(null),
        y = i.useRef(""),
        j = i.useMemo(() => new Set(g.games.map((e) => e.applicationId)), [g.games]),
        { trackUserProfileEditAction: x } = (0, c.KZ)(),
        v = i.useCallback(
            (e) => {
                (0, s.ES)(n, { applicationId: e }),
                    o.uvj.announce(u.intl.string(u.t.q0U3DA)),
                    x({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: n,
                    });
            },
            [n, x],
        ),
        { options: h, matchSorterOptions: _ } = (0, l.h)(),
        w = i.useCallback(
            (e) => {
                var t, n;
                return "" === e.trim()
                    ? h
                    : (0, a.Lu)(
                          h,
                          e,
                          ((t = f({}, _)),
                          (n = n = { threshold: a.Lu.rankings.CONTAINS }),
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
            [h, _],
        ),
        P = i.useCallback(
            (e) => {
                "" === b.trim() &&
                    "" !== e.trim() &&
                    x({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: n,
                        numCharacters: e.trim().length,
                        numResults: w(e).length,
                    }),
                    m(e),
                    (y.current = e);
            },
            [b, x, n, w],
        ),
        I = i.useMemo(
            () =>
                "" !== b.trim()
                    ? u.intl.format(u.t.ZoearK, {
                          searchTerm: b.trim(),
                          surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C",
                      })
                    : u.intl.string(u.t.QwSXv7),
            [b],
        );
    return (0, r.jsx)(o.yRy, {
        targetElementRef: O,
        position: "bottom",
        align: "center",
        onRequestOpen: () => {
            x({
                action: "PRESS_ADD_GAME",
                widgetEdited: n,
            }),
                m(""),
                (y.current = "");
        },
        onRequestClose: () => {
            x({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: n,
                numCharacters: y.current.trim().length,
                numResults: w(y.current).length,
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.DBG, {
                className: d.gameSearchCombobox,
                placeholder: u.intl.string(u.t["5h0QOD"]),
                autoFocus: !0,
                value: p,
                onChange: (e) => {
                    v(e), t();
                },
                multiSelect: !1,
                maxVisibleItems: 7,
                emptyStateText: I,
                emptyStateHeader: "",
                onQueryChange: P,
                children: (e) =>
                    w(e).map((e) =>
                        (0, r.jsx)(
                            o.lo1,
                            {
                                disabled: j.has(e.value),
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
                ref: O,
                children: (0, r.jsx)(
                    o.Button,
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
