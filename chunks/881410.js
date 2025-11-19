n.d(t, {
    wl: () => h,
    yX: () => b,
}),
    n(388685),
    n(781311);
var r = n(54381),
    i = n(473749),
    a = n(423802),
    l = n(481060),
    o = n(510231),
    c = n(785717),
    s = n(86419),
    u = n(388032),
    d = n(720641);
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
function m(e) {
    var { widgetType: t, widget: n, onAddGame: m, children: b } = e,
        h = p(e, ["widgetType", "widget", "onAddGame", "children"]);
    let [y] = (0, l.ynZ)(),
        [O, v] = i.useState(""),
        j = i.useRef(""),
        x = i.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: _ } = (0, c.KZ)(),
        P = i.useCallback(
            (e) => {
                (0, s.ES)(t, { applicationId: e }),
                    l.uvj.announce(u.intl.string(u.t.q0U3DE)),
                    _({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    }),
                    null == m || m();
            },
            [t, _, m],
        ),
        { options: I, matchSorterOptions: w } = (0, o.h)(),
        S = i.useCallback(
            (e) => ("" === e.trim() ? I : (0, a.Lu)(I, e, g(f({}, w), { threshold: a.Lu.rankings.CONTAINS }))),
            [I, w],
        ),
        E = i.useCallback(
            (e) => {
                "" === O.trim() &&
                    "" !== e.trim() &&
                    _({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: e.trim().length,
                        numResults: S(e).length,
                    }),
                    v(e),
                    (j.current = e);
            },
            [O, _, t, S],
        ),
        T = i.useMemo(
            () => ("" !== O.trim() ? u.intl.format(u.t.jhiTsN, { searchTerm: O.trim() }) : u.intl.string(u.t.QwSXv8)),
            [O],
        );
    return (0, r.jsx)(
        l.yRy,
        g(f({}, h), {
            onRequestOpen: () => {
                _({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    v(""),
                    (j.current = "");
            },
            onRequestClose: () => {
                _({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: j.current.trim().length,
                    numResults: S(j.current).length,
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(l.DBG, {
                    className: d.gameSearchCombobox,
                    placeholder: u.intl.string(u.t["5h0QOP"]),
                    autoFocus: !0,
                    value: y,
                    onChange: (e) => {
                        P(e), t();
                    },
                    multiSelect: !1,
                    maxVisibleItems: 7,
                    emptyStateText: T,
                    emptyStateHeader: "",
                    onQueryChange: E,
                    children: (e) =>
                        S(e).map((e) =>
                            (0, r.jsx)(
                                l.lo1,
                                {
                                    disabled: x.has(e.value),
                                    value: String(e.value),
                                    children: (0, r.jsx)(l.lo1.Label, {
                                        children: (0, r.jsx)(l.Text, {
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
function b(e) {
    var { disabled: t } = e,
        n = p(e, ["disabled"]);
    let a = i.useRef(null);
    return (0, r.jsx)(
        m,
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
                        l.Button,
                        f(
                            {
                                buttonRef: a,
                                variant: "secondary",
                                size: "sm",
                                icon: l.qJs,
                                text: u.intl.string(u.t.SgTOtX),
                                disabled: t,
                            },
                            e,
                        ),
                    ),
            },
        ),
    );
}
function h(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        m,
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
                        l.P3F,
                        g(
                            f(
                                {
                                    innerRef: t,
                                    className: d.coverButton,
                                    "aria-label": u.intl.string(u.t.SgTOtX),
                                },
                                e,
                            ),
                            { children: (0, r.jsx)(l.svS, { color: "currentColor" }) },
                        ),
                    ),
            },
        ),
    );
}
