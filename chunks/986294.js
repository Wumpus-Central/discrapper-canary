a.d(t, { A: () => P });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(735438),
    o = a.n(r),
    d = a(681154),
    c = a(306264),
    u = a(311907),
    m = a(506774),
    h = a(834730),
    p = a(243721),
    x = a(573613),
    g = a(331322),
    v = a(821609),
    b = a(292666),
    _ = a(939249),
    f = a(73153),
    j = a(587895),
    A = a(429913),
    y = a(303054),
    C = a(409626),
    E = a(692969),
    S = a(760751),
    N = a(403362),
    k = a(435738),
    I = a(99753),
    D = a(476398),
    T = a(405311),
    w = a(424994),
    O = a(866839),
    R = a(505206);
let L = [
    {
        key: "type",
        cellClassName: s()(O.Hn, O.T$),
        render(e) {
            let { type: t } = e;
            return (0, n.jsx)(h.E, { variant: "text-md/semibold", children: d.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: s()(O.Hn, O.MX),
        render(e) {
            let { entries: t } = e;
            return (0, n.jsx)("div", { children: (0, n.jsx)(h.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: O.Hn,
        render(e) {
            let { type: t } = e;
            return (0, n.jsx)(M, { type: t });
        },
    },
];
function M(e) {
    let { type: t } = e,
        a = (0, u.bG)([I.A], () => I.A.getFilters()),
        l = a?.types?.has(t) ?? !1;
    return (0, n.jsx)(p.d, {
        checked: l,
        onChange: function () {
            l
                ? f.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : f.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function P() {
    var e;
    let t,
        a = (0, u.bG)([I.A], () => I.A.getFeed(w.X1.GLOBAL_FEED)),
        i = (0, u.bG)([I.A], () => I.A.getDebugImpressionCappingDisabled()),
        s = (0, u.bG)([k.A], () => k.A.getDebugFastImpressionCappingEnabled()),
        r =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = o().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        d = (0, u.bG)([I.A], () => I.A.getFeedState(w.X1.GLOBAL_FEED)?.loading === !0),
        [p, _] = l.useState(""),
        M = (0, u.bG)(
            [S.A, j.A],
            () => (parseInt(p) > 0 ? p : (S.A.searchGamesByName(p)[0] ?? j.A.getApplicationByName(p)?.id)),
            [p],
        ),
        P = (0, E.A)({ applicationId: M, location: "DevToolsContentInventory", source: C.Ob.DevTools }),
        B = Object.entries(m.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        G = (0, A.A)(B).filter(N.Vq);
    return (0, n.jsx)("div", {
        className: R.nd,
        children: (0, n.jsxs)(x.Ip, {
            className: O.Qs,
            children: [
                (0, n.jsxs)(g.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(h.E, { variant: "text-md/semibold", children: "Inventory" }),
                        r.length > 0 && (0, n.jsx)(y.A, { columns: L, data: r }),
                        (0, n.jsx)(T.A, {}),
                        (0, n.jsx)(v.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                f.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: w.X1.GLOBAL_FEED,
                                    feature: c.M.INBOX,
                                });
                            },
                            loading: d,
                        }),
                    ],
                }),
                (0, n.jsxs)(g.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(h.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, n.jsx)(v.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                f.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, n.jsx)(v.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                f.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, n.jsx)(v.$, {
                            variant: "primary",
                            text: i ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                f.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, n.jsx)(v.$, {
                            variant: "primary",
                            text: s ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                f.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, n.jsx)(D.A, {}),
                (0, n.jsxs)(g.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(h.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, n.jsx)(b.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && _(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (p === e.currentTarget.value ? P?.(e) : _(e.currentTarget.value));
                            },
                            error:
                                p.length > 0 && null == P ? `No game profile for ${M ?? p + " - try by id"}.` : void 0,
                            helperText: null != P ? "Game profile found" : void 0,
                        }),
                        (0, n.jsx)("ul", {
                            children: G.map((e) =>
                                (0, n.jsx)(
                                    "li",
                                    { children: (0, n.jsx)(U, { application: e }) },
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
let U = (e) => {
    let { application: t } = e,
        a = (0, E.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: C.Ob.DevTools });
    return (0, n.jsx)(_.D, {
        onClick: a,
        children: (0, n.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
