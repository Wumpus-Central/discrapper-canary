t.d(l, { A: () => R });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(158954),
    o = t(311907),
    d = t(736653),
    c = t(793574),
    u = t(688810),
    _ = t(742589),
    g = t(657331),
    p = t(287809),
    x = t(954571),
    A = t(975571),
    f = t(371794),
    I = t(439303),
    h = t(44724),
    m = t(995393),
    E = t(652215),
    j = t(518477),
    S = t(985018),
    k = t(863413);
function b(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(r.DUT, { className: i()(k.gb, a), onClick: t, "aria-label": s, children: l });
}
function R(e) {
    let { guildId: l, storefront: t, selectedPageIndex: a } = e,
        R = (0, r.Mwr)((0, d.Ay)()),
        N = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        v = (0, I.jM)(),
        { analyticsLocations: C } = (0, u.Ay)(),
        L = s.useCallback(() => {
            N?.id != null &&
                (0, g.openUserProfileModal)({
                    userId: N.id,
                    tabSection: j.RP.WISHLIST,
                    sourceAnalyticsLocations: [c.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [N]),
        M = s.useCallback(() => {
            x.default.track(E.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: v?.sessionId,
                cta_type: m.ST.LEARN_MORE,
                location_stack: C,
            }),
                window.open(A.A.getArticleURL(E.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [v, C]);
    if (null == t) return null;
    let T = null != t.logoAssetId ? (0, f.YE)(t.applicationId, t.logoAssetId, 75) : null,
        y = null != t.lightThemeLogoAssetId ? (0, f.YE)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        O = null;
    return (
        (O = R ? (T ?? y) : (y ?? T)),
        (0, n.jsxs)(_.A, {
            disableDoubleClick: !0,
            className: k.N1,
            children: [
                (0, n.jsxs)(r.DUT, {
                    onClick: () => {
                        (0, h.default)({ guildId: l, pageIndex: 0 });
                    },
                    className: k.gn,
                    children: [
                        null != O && (0, n.jsx)("img", { className: k.wm, src: O, alt: t.title }),
                        (0, n.jsx)(_.A.Title, { children: t.title }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: k.YC,
                    children: t.pages.map((e, t) =>
                        (0, n.jsx)(
                            _.A.Title,
                            {
                                onClick: () => {
                                    (0, h.default)({ guildId: l, pageIndex: t });
                                },
                                wrapperClassName: k.oB,
                                className: i()(k.xT, { [k.ys]: a === t }),
                                children: (0, n.jsx)(r.EYj, { variant: "text-sm/medium", children: e.title }),
                            },
                            `${e.title}-${t}`,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: k.sZ,
                    children: [
                        (0, n.jsx)(b, {
                            content: (0, n.jsx)(r.C3E, { size: "xs", color: "currentColor" }),
                            onClick: L,
                            ariaLabel: S.intl.string(S.t["7lZ31J"]),
                            className: k.ij,
                        }),
                        (0, n.jsx)(b, {
                            onClick: M,
                            ariaLabel: S.intl.string(S.t.hvVgAZ),
                            content: (0, n.jsx)(r.EYj, {
                                variant: "text-sm/medium",
                                children: S.intl.string(S.t.hvVgAZ),
                            }),
                            className: k.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
