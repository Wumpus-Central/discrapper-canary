n.d(t, {
    wl: () => v,
    yX: () => y,
}),
    n(388685),
    n(781311);
var r = n(951288),
    i = n(647438),
    a = n(423802),
    l = n(442837),
    o = n(481060),
    c = n(510231),
    s = n(706454),
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
    var { widgetType: t, widget: n, onAddGame: h, children: y } = e,
        v = b(e, ["widgetType", "widget", "onAddGame", "children"]);
    let [O] = (0, o.ynZ)(),
        [j, x] = i.useState(""),
        _ = i.useRef(""),
        P = i.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: I } = (0, u.KZ)(),
        w = (0, l.e7)([s.default], () => ["en-US", "en-GB"].includes(s.default.locale)),
        S = i.useCallback(
            (e) => {
                (0, d.ES)(t, { applicationId: e }),
                    o.uvj.announce(f.intl.string(f.t.q0U3DE)),
                    I({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    }),
                    null == h || h();
            },
            [t, I, h],
        ),
        { options: E, matchSorterOptions: T } = (0, c.h)(),
        C = i.useCallback(
            (e) => ("" === e.trim() ? E : (0, a.Lu)(E, e, m(p({}, T), { threshold: a.Lu.rankings.CONTAINS }))),
            [E, T],
        ),
        D = i.useCallback(
            (e) => {
                "" === j.trim() &&
                    "" !== e.trim() &&
                    I({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: e.trim().length,
                        numResults: C(e).length,
                    }),
                    x(e),
                    (_.current = e);
            },
            [j, I, t, C],
        ),
        k = i.useMemo(
            () =>
                "" !== j.trim() && w ? f.intl.format(f.t.jhiTsN, { searchTerm: j.trim() }) : f.intl.string(f.t.QwSXv8),
            [j, w],
        );
    return (0, r.jsx)(
        o.yRy,
        m(p({}, v), {
            onRequestOpen: () => {
                I({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    x(""),
                    (_.current = "");
            },
            onRequestClose: () => {
                I({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: _.current.trim().length,
                    numResults: C(_.current).length,
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(o.DBG, {
                    className: g.gameSearchCombobox,
                    placeholder: f.intl.string(f.t["5h0QOP"]),
                    autoFocus: !0,
                    value: O,
                    onChange: (e) => {
                        S(e), t();
                    },
                    multiSelect: !1,
                    maxVisibleItems: 7,
                    emptyStateText: k,
                    emptyStateHeader: "",
                    onQueryChange: D,
                    children: (e) =>
                        C(e).map((e) =>
                            (0, r.jsx)(
                                o.lo1,
                                {
                                    disabled: P.has(e.value),
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
            children: (e) => y(e),
        }),
    );
}
function y(e) {
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
                                text: f.intl.string(f.t.SgTOtX),
                                disabled: t,
                            },
                            e,
                        ),
                    ),
            },
        ),
    );
}
function v(e) {
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
                                    "aria-label": f.intl.string(f.t.SgTOtX),
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
