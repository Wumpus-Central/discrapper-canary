n.d(t, {
    wl: () => y,
    yX: () => v,
}),
    n(388685),
    n(781311);
var r = n(951288),
    i = n(647438),
    a = n(423802),
    l = n(442837),
    o = n(481060),
    s = n(510231),
    c = n(706454),
    u = n(785717),
    d = n(86419),
    f = n(388032),
    g = n(302627);
function p(e) {
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
function m(e, t) {
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
function b(e, t) {
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
function h(e) {
    var { widgetType: t, widget: n, children: h } = e,
        v = b(e, ["widgetType", "widget", "children"]);
    let [y] = (0, o.ynZ)(),
        [j, O] = i.useState(""),
        x = i.useRef(""),
        _ = i.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: P } = (0, u.KZ)(),
        I = (0, l.e7)([c.default], () => ["en-US", "en-GB"].includes(c.default.locale)),
        w = i.useCallback(
            (e) => {
                (0, d.ES)(t, { applicationId: e }),
                    o.uvj.announce(f.intl.string(f.t.q0U3DA)),
                    P({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    });
            },
            [t, P],
        ),
        { options: S, matchSorterOptions: E } = (0, s.h)(),
        T = i.useCallback(
            (e) => ("" === e.trim() ? S : (0, a.Lu)(S, e, m(p({}, E), { threshold: a.Lu.rankings.CONTAINS }))),
            [S, E],
        ),
        C = i.useCallback(
            (e) => {
                "" === j.trim() &&
                    "" !== e.trim() &&
                    P({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: e.trim().length,
                        numResults: T(e).length,
                    }),
                    O(e),
                    (x.current = e);
            },
            [j, P, t, T],
        ),
        N = i.useMemo(
            () =>
                "" !== j.trim() && I ? f.intl.format(f.t.jhiTsL, { searchTerm: j.trim() }) : f.intl.string(f.t.QwSXv7),
            [j, I],
        );
    return (0, r.jsx)(
        o.yRy,
        m(p({}, v), {
            onRequestOpen: () => {
                P({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    O(""),
                    (x.current = "");
            },
            onRequestClose: () => {
                P({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: x.current.trim().length,
                    numResults: T(x.current).length,
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(o.DBG, {
                    className: g.gameSearchCombobox,
                    placeholder: f.intl.string(f.t["5h0QOD"]),
                    autoFocus: !0,
                    value: y,
                    onChange: (e) => {
                        w(e), t();
                    },
                    multiSelect: !1,
                    maxVisibleItems: 7,
                    emptyStateText: N,
                    emptyStateHeader: "",
                    onQueryChange: C,
                    children: (e) =>
                        T(e).map((e) =>
                            (0, r.jsx)(
                                o.lo1,
                                {
                                    disabled: _.has(e.value),
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
            children: (e) => h(e),
        }),
    );
}
function v(e) {
    var { disabled: t } = e,
        n = b(e, ["disabled"]);
    let a = i.useRef(null);
    return (0, r.jsx)(
        h,
        m(
            p(
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
                        p(
                            {
                                buttonRef: a,
                                variant: "secondary",
                                size: "sm",
                                icon: o.qJs,
                                text: f.intl.string(f.t.SgTOtb),
                                disabled: t,
                            },
                            e,
                        ),
                    ),
            },
        ),
    );
}
function y(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        h,
        m(
            p(
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
                        m(
                            p(
                                {
                                    innerRef: t,
                                    className: g.coverButton,
                                    "aria-label": f.intl.string(f.t.SgTOtb),
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
