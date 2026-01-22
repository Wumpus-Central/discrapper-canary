n.d(t, { A: () => P }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(681154),
    d = n(306264),
    u = n(311907),
    m = n(506774),
    p = n(397927),
    h = n(73153),
    f = n(587895),
    x = n(429913),
    b = n(303054),
    g = n(409626),
    v = n(692969),
    j = n(760751),
    y = n(403362),
    _ = n(603047),
    A = n(435738),
    C = n(99753),
    S = n(868068),
    O = n(476398),
    E = n(405311),
    N = n(424994),
    T = n(750100),
    I = n(661251);
let w = [
    {
        key: "type",
        cellClassName: r()(T.Hn, T.T$),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(p.Text, {
                variant: "text-md/semibold",
                children: c.I[t],
            });
        },
    },
    {
        key: "count",
        cellClassName: r()(T.Hn, T.MX),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)("div", {
                children: (0, a.jsx)(p.Text, {
                    variant: "text-md/normal",
                    children: t.length,
                }),
            });
        },
    },
    {
        key: "only?",
        cellClassName: T.Hn,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(k, { type: t });
        },
    },
];
function k(e) {
    var t, n;
    let { type: l } = e,
        i = (0, u.bG)([C.A], () => C.A.getFilters()),
        r = null != (t = null == i || null == (n = i.types) ? void 0 : n.has(l)) && t;
    return (0, a.jsx)(p.dOG, {
        checked: r,
        onChange: function () {
            r
                ? h.h.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: void 0,
                  })
                : h.h.dispatch({
                      type: "CONTENT_INVENTORY_SET_FILTERS",
                      filters: { types: new Set([l]) },
                  });
        },
    });
}
function P() {
    var e, t, n;
    let i,
        r = (0, u.bG)([C.A], () => C.A.getFeed(N.X1.GLOBAL_FEED)),
        s = (0, u.bG)([C.A], () => C.A.getDebugImpressionCappingDisabled()),
        c = (0, u.bG)([A.A], () => A.A.getDebugFastImpressionCappingEnabled()),
        k =
            ((n = null == r || null == (t = r.entries) ? void 0 : t.map((e) => e.content)),
            Object.keys((i = o().groupBy(n, (e) => e.content_type))).map((e) => {
                let t = i[e];
                return {
                    key: "".concat(e),
                    type: t[0].content_type,
                    entries: t,
                };
            })),
        P = (0, u.bG)([C.A], () => {
            var e;
            return (null == (e = C.A.getFeedState(N.X1.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [D, M] = l.useState(""),
        L = (0, u.bG)([j.A, f.A], () => {
            var e, t, n;
            return parseInt(D) > 0
                ? D
                : null != (e = null == (t = j.A.getGameByName(D)) ? void 0 : t.id)
                  ? e
                  : null == (n = f.A.getApplicationByName(D))
                    ? void 0
                    : n.id;
        }, [D]),
        U = (0, v.A)({
            applicationId: L,
            location: "DevToolsContentInventory",
            source: g.Ob.DevTools,
        }),
        B = Object.entries(null != (e = m.w.get("GameProfileModal")) ? e : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        G = (0, x.A)(B).filter(y.Vq),
        F = (0, u.bG)([_.A], () => _.A.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: I.nd,
        children: (0, a.jsxs)(p.IpV, {
            className: T.Qs,
            children: [
                (0, a.jsxs)(p.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Inventory",
                        }),
                        k.length > 0 &&
                            (0, a.jsx)(b.A, {
                                columns: w,
                                data: k,
                            }),
                        (0, a.jsx)(E.A, {}),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                h.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: N.X1.GLOBAL_FEED,
                                    feature: d.M.INBOX,
                                });
                            },
                            loading: P,
                        }),
                    ],
                }),
                (0, a.jsxs)(p.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Impression Capping",
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                h.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                h.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: s ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, a.jsx)(p.Button, {
                            variant: "primary",
                            text: c ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                h.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, a.jsx)(O.A, {}),
                (0, a.jsxs)(p.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Game Profile",
                        }),
                        (0, a.jsx)(p.ksK, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && M(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key &&
                                    (D === e.currentTarget.value ? null == U || U(e) : M(e.currentTarget.value));
                            },
                            error:
                                D.length > 0 && null == U
                                    ? "No game profile for ".concat(null != L ? L : D + " - try by id", ".")
                                    : void 0,
                            helperText: null != U ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: G.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(R, { application: e }) },
                                    "follow-game-".concat(e.id),
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsxs)(p.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            children: "Activity Sharing",
                        }),
                        (0, a.jsx)(p.l6P, {
                            label: "Force show game",
                            options: S.K.map((e) => ({
                                label: e,
                                value: e,
                                id: e,
                            })),
                            value: F,
                            onSelectionChange: function (e) {
                                h.h.dispatch({
                                    type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING",
                                    gameToShow: e,
                                });
                            },
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let R = (e) => {
    let { application: t } = e,
        n = (0, v.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: g.Ob.DevTools,
        });
    return (0, a.jsx)(p.DUT, {
        onClick: n,
        children: (0, a.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.name,
        }),
    });
};
