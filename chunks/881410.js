n.d(t, {
    wl: () => y,
    yX: () => h,
}),
    n(388685),
    n(781311);
var r = n(54381),
    i = n(473749),
    a = n(423802),
    l = n(496600),
    o = n(481060),
    c = n(510231),
    s = n(785717),
    u = n(86419),
    d = n(388032),
    f = n(935587);
function g(e) {
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
function p(e, t) {
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
function m(e) {
    var { widgetType: t, widget: n, onAddGame: m, children: h } = e,
        y = b(e, ["widgetType", "widget", "onAddGame", "children"]);
    let v = i.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: O } = (0, s.KZ)(),
        [j, x] = i.useState(""),
        P = i.useRef(""),
        I = i.useCallback(
            (e) => {
                (0, u.ES)({
                    widgetType: t,
                    game: { applicationId: e },
                }),
                    o.uvj.announce(d.intl.string(d.t.q0U3DE)),
                    O({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    }),
                    null == m || m();
            },
            [t, O, m],
        ),
        { options: w, matchSorterOptions: S } = (0, c.h)(),
        E = i.useMemo(
            () =>
                w.map((e) => ({
                    id: String(e.value),
                    value: String(e.value),
                    label: e.label,
                    disabled: v.has(e.value),
                })),
            [w, v],
        ),
        T = i.useMemo(
            () =>
                p(g({}, S), {
                    threshold: a.Lu.rankings.CONTAINS,
                    keys: ["label"],
                }),
            [S],
        ),
        _ = i.useCallback((e) => ("" === e.trim() ? E.length : (0, a.Lu)(E, e, T).length), [E, T]),
        C = i.useCallback(
            (e) => {
                let n = e.target.value;
                "" === j.trim() &&
                    "" !== n.trim() &&
                    O({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: _(n),
                    }),
                    x(n),
                    (P.current = n);
            },
            [j, O, t, _],
        );
    return (0, r.jsx)(
        o.yRy,
        p(g({}, y), {
            onRequestOpen: () => {
                O({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    x(""),
                    (P.current = "");
            },
            onRequestClose: () => {
                O({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: P.current.trim().length,
                    numResults: _(P.current),
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(o.VqE, {
                    className: f.gameSearchCombobox,
                    "aria-label": d.intl.string(d.t.uqw8wK),
                    children: (0, r.jsxs)(l.uz, {
                        selectionMode: "single",
                        value: null,
                        onSelectionChange: (e) => {
                            null != e && (I(e), t());
                        },
                        options: E,
                        matchSorterOptions: T,
                        children: [
                            (0, r.jsx)(l.Ct, {
                                label: d.intl.string(d.t["5h0QOP"]),
                                hideLabel: !0,
                                placeholder: d.intl.string(d.t["5h0QOP"]),
                                autoFocus: !0,
                                onQueryChange: C,
                            }),
                            (0, r.jsx)(l.px, { maxVisibleItems: 7 }),
                        ],
                    }),
                });
            },
            children: (e) => h(e),
        }),
    );
}
function h(e) {
    var { disabled: t } = e,
        n = b(e, ["disabled"]);
    let a = i.useRef(null);
    return (0, r.jsx)(
        m,
        p(
            g(
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
                        g(
                            {
                                buttonRef: a,
                                variant: "secondary",
                                size: "sm",
                                icon: o.qJs,
                                text: d.intl.string(d.t.SgTOtX),
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
        m,
        p(
            g(
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
                        p(
                            g(
                                {
                                    innerRef: t,
                                    className: f.coverButton,
                                    "aria-label": d.intl.string(d.t.SgTOtX),
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
