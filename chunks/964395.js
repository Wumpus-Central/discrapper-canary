t.d(l, { A: () => v });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    d = t(158954),
    r = t(311907),
    o = t(736653),
    c = t(793574),
    u = t(688810),
    g = t(742589),
    _ = t(657331),
    p = t(287809),
    I = t(954571),
    f = t(975571),
    x = t(371794),
    h = t(439303),
    A = t(44724),
    m = t(995393),
    k = t(652215),
    j = t(518477),
    b = t(985018),
    E = t(848464);
function S(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(d.DUT, { className: i()(E.gb, a), onClick: t, "aria-label": s, children: l });
}
function v(e) {
    let { guildId: l, storefront: t, selectedPageIndex: a } = e,
        v = (0, d.Mwr)((0, o.Ay)()),
        C = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        N = (0, h.jM)(),
        { analyticsLocations: L } = (0, u.Ay)(),
        R = s.useCallback(() => {
            C?.id != null &&
                (0, _.openUserProfileModal)({
                    userId: C.id,
                    tabSection: j.RP.WISHLIST,
                    showGuildProfile: !1,
                    sourceAnalyticsLocations: [c.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [C]),
        T = s.useCallback(() => {
            I.default.track(k.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: N?.sessionId,
                cta_type: m.ST.LEARN_MORE,
                location_stack: L,
            }),
                window.open(f.A.getArticleURL(k.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [N, L]);
    if (null == t) return null;
    let y = null != t.logoAssetId ? (0, x.YE)(t.applicationId, t.logoAssetId, 75) : null,
        M = null != t.lightThemeLogoAssetId ? (0, x.YE)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        O = null;
    return (
        (O = v ? (y ?? M) : (M ?? y)),
        (0, n.jsxs)(g.A, {
            disableDoubleClick: !0,
            className: E.N1,
            children: [
                (0, n.jsxs)(d.DUT, {
                    onClick: () => {
                        (0, A.default)({ guildId: l, pageIndex: 0 });
                    },
                    className: E.gn,
                    children: [
                        null != O && (0, n.jsx)("img", { className: E.wm, src: O, alt: t.title }),
                        (0, n.jsx)(g.A.Title, { children: t.title }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: E.YC,
                    children: t.pages.map((e, t) =>
                        (0, n.jsx)(
                            g.A.Title,
                            {
                                onClick: () => {
                                    (0, A.default)({ guildId: l, pageIndex: t });
                                },
                                wrapperClassName: E.oB,
                                className: i()(E.xT, { [E.ys]: a === t }),
                                children: (0, n.jsx)(d.EYj, { variant: "text-sm/medium", children: e.title }),
                            },
                            `${e.title}-${t}`,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: E.sZ,
                    children: [
                        (0, n.jsx)(S, {
                            content: (0, n.jsx)(d.C3E, { size: "xs", color: "currentColor" }),
                            onClick: R,
                            ariaLabel: b.intl.string(b.t["7lZ31J"]),
                            className: E.ij,
                        }),
                        (0, n.jsx)(S, {
                            onClick: T,
                            ariaLabel: b.intl.string(b.t.hvVgAZ),
                            content: (0, n.jsx)(d.EYj, {
                                variant: "text-sm/medium",
                                children: b.intl.string(b.t.hvVgAZ),
                            }),
                            className: E.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
