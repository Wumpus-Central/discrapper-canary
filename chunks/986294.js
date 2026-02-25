n.d(t, { A: () => w });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(681154),
    c = n(306264),
    u = n(311907),
    m = n(506774),
    h = n(397927),
    x = n(73153),
    p = n(587895),
    g = n(429913),
    _ = n(303054),
    f = n(409626),
    b = n(692969),
    v = n(760751),
    j = n(403362),
    C = n(603047),
    A = n(435738),
    T = n(99753),
    S = n(868068),
    y = n(476398),
    E = n(405311),
    N = n(424994),
    I = n(973350),
    k = n(930821);
let R = [
    {
        key: "type",
        cellClassName: l()(I.Hn, I.T$),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(h.Text, { variant: "text-md/semibold", children: d.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: l()(I.Hn, I.MX),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)("div", {
                children: (0, a.jsx)(h.Text, { variant: "text-md/normal", children: t.length }),
            });
        },
    },
    {
        key: "only?",
        cellClassName: I.Hn,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(O, { type: t });
        },
    },
];
function O(e) {
    let { type: t } = e,
        n = (0, u.bG)([T.A], () => T.A.getFilters()),
        i = n?.types?.has(t) ?? !1;
    return (0, a.jsx)(h.dOG, {
        checked: i,
        onChange: function () {
            i
                ? x.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : x.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function w() {
    var e;
    let t,
        n = (0, u.bG)([T.A], () => T.A.getFeed(N.X1.GLOBAL_FEED)),
        s = (0, u.bG)([T.A], () => T.A.getDebugImpressionCappingDisabled()),
        l = (0, u.bG)([A.A], () => A.A.getDebugFastImpressionCappingEnabled()),
        r =
            ((e = n?.entries?.map((e) => e.content)),
            Object.keys((t = o().groupBy(e, (e) => e.content_type))).map((e) => {
                let n = t[e];
                return { key: `${e}`, type: n[0].content_type, entries: n };
            })),
        d = (0, u.bG)([T.A], () => T.A.getFeedState(N.X1.GLOBAL_FEED)?.loading === !0),
        [O, w] = i.useState(""),
        M = (0, u.bG)(
            [v.A, p.A],
            () => (parseInt(O) > 0 ? O : (v.A.searchGamesByName(O)[0] ?? p.A.getApplicationByName(O)?.id)),
            [O],
        ),
        P = (0, b.A)({ applicationId: M, location: "DevToolsContentInventory", source: f.Ob.DevTools }),
        L = Object.entries(m.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        U = (0, g.A)(L).filter(j.Vq),
        B = (0, u.bG)([C.A], () => C.A.getFakeGameToShow());
    return (0, a.jsx)("div", {
        className: k.nd,
        children: (0, a.jsxs)(h.IpV, {
            className: I.Qs,
            children: [
                (0, a.jsxs)(h.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, { variant: "text-md/semibold", children: "Inventory" }),
                        r.length > 0 && (0, a.jsx)(_.A, { columns: R, data: r }),
                        (0, a.jsx)(E.A, {}),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                x.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: N.X1.GLOBAL_FEED,
                                    feature: c.M.INBOX,
                                });
                            },
                            loading: d,
                        }),
                    ],
                }),
                (0, a.jsxs)(h.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                x.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                x.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: s ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                x.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                x.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, a.jsx)(y.A, {}),
                (0, a.jsxs)(h.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, a.jsx)(h.ksK, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && w(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (O === e.currentTarget.value ? P?.(e) : w(e.currentTarget.value));
                            },
                            error:
                                O.length > 0 && null == P ? `No game profile for ${M ?? O + " - try by id"}.` : void 0,
                            helperText: null != P ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: U.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(D, { application: e }) },
                                    `follow-game-${e.id}`,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsxs)(h.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, { variant: "text-md/semibold", children: "Activity Sharing" }),
                        (0, a.jsx)(h.l6P, {
                            label: "Force show game",
                            options: S.K.map((e) => ({ label: e, value: e, id: e })),
                            value: B,
                            onSelectionChange: function (e) {
                                x.h.dispatch({ type: "CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING", gameToShow: e });
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
let D = (e) => {
    let { application: t } = e,
        n = (0, b.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: f.Ob.DevTools });
    return (0, a.jsx)(h.DUT, {
        onClick: n,
        children: (0, a.jsx)(h.Text, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
