n.d(t, {
    wl: () => O,
    yX: () => m,
}),
    n(388685),
    n(781311);
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e) {
    var { widgetType: t, widget: n, children: b } = e,
        m = p(e, ["widgetType", "widget", "children"]);
    let [O] = (0, o.ynZ)(),
        [y, j] = i.useState(""),
        x = i.useRef(""),
        v = i.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: h } = (0, c.KZ)(),
        _ = i.useCallback(
            (e) => {
                (0, s.ES)(t, { applicationId: e }),
                    o.uvj.announce(u.intl.string(u.t.q0U3DA)),
                    h({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    });
            },
            [t, h],
        ),
        { options: w, matchSorterOptions: P } = (0, l.h)(),
        I = i.useCallback(
            (e) => ("" === e.trim() ? w : (0, a.Lu)(w, e, g(f({}, P), { threshold: a.Lu.rankings.CONTAINS }))),
            [w, P],
        ),
        S = i.useCallback(
            (e) => {
                "" === y.trim() &&
                    "" !== e.trim() &&
                    h({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: e.trim().length,
                        numResults: I(e).length,
                    }),
                    j(e),
                    (x.current = e);
            },
            [y, h, t, I],
        ),
        E = i.useMemo(
            () =>
                "" !== y.trim()
                    ? u.intl.format(u.t.ZoearK, {
                          searchTerm: y.trim(),
                          surveyUrl: "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C",
                      })
                    : u.intl.string(u.t.QwSXv7),
            [y],
        );
    return (0, r.jsx)(
        o.yRy,
        g(f({}, m), {
            onRequestOpen: () => {
                h({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    j(""),
                    (x.current = "");
            },
            onRequestClose: () => {
                h({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: x.current.trim().length,
                    numResults: I(x.current).length,
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(o.DBG, {
                    className: d.gameSearchCombobox,
                    placeholder: u.intl.string(u.t["5h0QOD"]),
                    autoFocus: !0,
                    value: O,
                    onChange: (e) => {
                        _(e), t();
                    },
                    multiSelect: !1,
                    maxVisibleItems: 7,
                    emptyStateText: E,
                    emptyStateHeader: "",
                    onQueryChange: S,
                    children: (e) =>
                        I(e).map((e) =>
                            (0, r.jsx)(
                                o.lo1,
                                {
                                    disabled: v.has(e.value),
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
            children: (e) => b(e),
        }),
    );
}
function m(e) {
    var { disabled: t } = e,
        n = p(e, ["disabled"]);
    let a = i.useRef(null);
    return (0, r.jsx)(
        b,
        g(
            f(
                {
                    targetElementRef: a,
                    position: "bottom",
                    align: "center",
                },
                n,
            ),
            {
                children: (e) =>
                    (0, r.jsx)(
                        o.Button,
                        f(
                            {
                                buttonRef: a,
                                variant: "secondary",
                                size: "sm",
                                icon: o.qJs,
                                text: u.intl.string(u.t.SgTOtb),
                                disabled: t,
                            },
                            e,
                        ),
                    ),
            },
        ),
    );
}
function O(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        b,
        g(
            f(
                {
                    targetElementRef: t,
                    position: "right",
                    align: "top",
                },
                e,
            ),
            {
                children: (e) =>
                    (0, r.jsx)(
                        o.P3F,
                        g(
                            f(
                                {
                                    innerRef: t,
                                    className: d.coverButton,
                                    "aria-label": u.intl.string(u.t.SgTOtb),
                                },
                                e,
                            ),
                            { children: (0, r.jsx)(o.svS, { color: "currentColor" }) },
                        ),
                    ),
            },
        ),
    );
}
