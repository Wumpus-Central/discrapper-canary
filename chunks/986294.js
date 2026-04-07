n.d(t, { A: () => O });
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
    f = n(303054),
    _ = n(409626),
    v = n(692969),
    b = n(760751),
    j = n(403362),
    A = n(435738),
    C = n(99753),
    y = n(476398),
    S = n(405311),
    E = n(424994),
    T = n(913351),
    N = n(310086);
let I = [
    {
        key: "type",
        cellClassName: l()(T.Hn, T.T$),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(h.Text, { variant: "text-md/semibold", children: d.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: l()(T.Hn, T.MX),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)("div", {
                children: (0, a.jsx)(h.Text, { variant: "text-md/normal", children: t.length }),
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
    let { type: t } = e,
        n = (0, u.bG)([C.A], () => C.A.getFilters()),
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
function O() {
    var e;
    let t,
        n = (0, u.bG)([C.A], () => C.A.getFeed(E.X1.GLOBAL_FEED)),
        s = (0, u.bG)([C.A], () => C.A.getDebugImpressionCappingDisabled()),
        l = (0, u.bG)([A.A], () => A.A.getDebugFastImpressionCappingEnabled()),
        r =
            ((e = n?.entries?.map((e) => e.content)),
            Object.keys((t = o().groupBy(e, (e) => e.content_type))).map((e) => {
                let n = t[e];
                return { key: `${e}`, type: n[0].content_type, entries: n };
            })),
        d = (0, u.bG)([C.A], () => C.A.getFeedState(E.X1.GLOBAL_FEED)?.loading === !0),
        [k, O] = i.useState(""),
        w = (0, u.bG)(
            [b.A, p.A],
            () => (parseInt(k) > 0 ? k : (b.A.searchGamesByName(k)[0] ?? p.A.getApplicationByName(k)?.id)),
            [k],
        ),
        D = (0, v.A)({ applicationId: w, location: "DevToolsContentInventory", source: _.Ob.DevTools }),
        M = Object.entries(m.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        P = (0, g.A)(M).filter(j.Vq);
    return (0, a.jsx)("div", {
        className: N.nd,
        children: (0, a.jsxs)(h.IpV, {
            className: T.Qs,
            children: [
                (0, a.jsxs)(h.BJc, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(h.Text, { variant: "text-md/semibold", children: "Inventory" }),
                        r.length > 0 && (0, a.jsx)(f.A, { columns: I, data: r }),
                        (0, a.jsx)(S.A, {}),
                        (0, a.jsx)(h.Button, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                x.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: E.X1.GLOBAL_FEED,
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
                            onChange: (e) => (0 === e.length || e.length >= 18) && O(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (k === e.currentTarget.value ? D?.(e) : O(e.currentTarget.value));
                            },
                            error:
                                k.length > 0 && null == D ? `No game profile for ${w ?? k + " - try by id"}.` : void 0,
                            helperText: null != D ? "Game profile found" : void 0,
                        }),
                        (0, a.jsx)("ul", {
                            children: P.map((e) =>
                                (0, a.jsx)(
                                    "li",
                                    { children: (0, a.jsx)(R, { application: e }) },
                                    `follow-game-${e.id}`,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
let R = (e) => {
    let { application: t } = e,
        n = (0, v.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: _.Ob.DevTools });
    return (0, a.jsx)(h.DUT, {
        onClick: n,
        children: (0, a.jsx)(h.Text, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
