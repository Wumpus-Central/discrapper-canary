r.d(t, {
    wl: () => j,
    yX: () => y,
}),
    r(388685),
    r(781311);
var n = r(951288),
    i = r(647438),
    a = r(423802),
    o = r(442837),
    l = r(481060),
    c = r(510231),
    s = r(706454),
    u = r(785717),
    d = r(86419),
    g = r(388032),
    f = r(302627);
function p(e) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
            (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
function O(e) {
    var { widgetType: t, widget: r, children: O } = e,
        y = m(e, ["widgetType", "widget", "children"]);
    let [j] = (0, l.ynZ)(),
        [x, h] = i.useState(""),
        v = i.useRef(""),
        _ = i.useMemo(() => new Set(r.games.map((e) => e.applicationId)), [r.games]),
        { trackUserProfileEditAction: w } = (0, u.KZ)(),
        P = (0, o.e7)([s.default], () => ["en-US", "en-GB"].includes(s.default.locale)),
        I = i.useCallback(
            (e) => {
                (0, d.ES)(t, { applicationId: e }),
                    l.uvj.announce(g.intl.string(g.t.q0U3DA)),
                    w({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    });
            },
            [t, w],
        ),
        { options: S, matchSorterOptions: E } = (0, c.h)(),
        T = i.useCallback(
            (e) => ("" === e.trim() ? S : (0, a.Lu)(S, e, b(p({}, E), { threshold: a.Lu.rankings.CONTAINS }))),
            [S, E],
        ),
        D = i.useCallback(
            (e) => {
                "" === x.trim() &&
                    "" !== e.trim() &&
                    w({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: e.trim().length,
                        numResults: T(e).length,
                    }),
                    h(e),
                    (v.current = e);
            },
            [x, w, t, T],
        ),
        k = i.useMemo(
            () =>
                "" !== x.trim() && P ? g.intl.format(g.t.jhiTsL, { searchTerm: x.trim() }) : g.intl.string(g.t.QwSXv7),
            [x, P],
        );
    return (0, n.jsx)(
        l.yRy,
        b(p({}, y), {
            onRequestOpen: () => {
                w({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    h(""),
                    (v.current = "");
            },
            onRequestClose: () => {
                w({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: v.current.trim().length,
                    numResults: T(v.current).length,
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(l.DBG, {
                    className: f.gameSearchCombobox,
                    placeholder: g.intl.string(g.t["5h0QOD"]),
                    autoFocus: !0,
                    value: j,
                    onChange: (e) => {
                        I(e), t();
                    },
                    multiSelect: !1,
                    maxVisibleItems: 7,
                    emptyStateText: k,
                    emptyStateHeader: "",
                    onQueryChange: D,
                    children: (e) =>
                        T(e).map((e) =>
                            (0, n.jsx)(
                                l.lo1,
                                {
                                    disabled: _.has(e.value),
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
            children: (e) => O(e),
        }),
    );
}
function y(e) {
    var { disabled: t } = e,
        r = m(e, ["disabled"]);
    let a = i.useRef(null);
    return (0, n.jsx)(
        O,
        b(
            p(
                {
                    targetElementRef: a,
                    position: "bottom",
                    align: "center",
                },
                r,
            ),
            {
                children: (e) =>
                    (0, n.jsx)(
                        l.Button,
                        p(
                            {
                                buttonRef: a,
                                variant: "secondary",
                                size: "sm",
                                icon: l.qJs,
                                text: g.intl.string(g.t.SgTOtb),
                                disabled: t,
                            },
                            e,
                        ),
                    ),
            },
        ),
    );
}
function j(e) {
    let t = i.useRef(null);
    return (0, n.jsx)(
        O,
        b(
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
                    (0, n.jsx)(
                        l.P3F,
                        b(
                            p(
                                {
                                    innerRef: t,
                                    className: f.coverButton,
                                    "aria-label": g.intl.string(g.t.SgTOtb),
                                },
                                e,
                            ),
                            { children: (0, n.jsx)(l.svS, { color: "currentColor" }) },
                        ),
                    ),
            },
        ),
    );
}
