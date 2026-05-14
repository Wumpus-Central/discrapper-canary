s.d(l, { A: () => C });
var t = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(939249),
    o = s(366010),
    c = s(834730),
    d = s(926268),
    u = s(17928),
    g = s(736653),
    p = s(793574),
    x = s(688810),
    _ = s(742589),
    I = s(975732),
    f = s(287809),
    h = s(174459),
    A = s(975571),
    E = s(371794),
    S = s(439303),
    m = s(353281),
    j = s(44724),
    k = s(995393),
    R = s(652215),
    N = s(518477),
    v = s(375708),
    b = s(718356);
function L(e) {
    let { content: l, onClick: s, ariaLabel: n, className: a } = e;
    return (0, t.jsx)(r.D, { className: i()(b.gb, a), onClick: s, "aria-label": n, children: l });
}
function C(e) {
    let { guildId: l, storefront: s, selectedPageIndex: a } = e,
        C = (0, o.M)((0, g.Ay)()),
        M = (0, u.bG)([f.default], () => f.default.getCurrentUser()),
        y = (0, S.jM)(),
        { analyticsLocations: O } = (0, x.Ay)(),
        { getSocialLayerStorefrontLink: T } = (0, m.H)(),
        H = n.useCallback(() => {
            M?.id != null &&
                (0, I.openUserProfileModal)({
                    userId: M.id,
                    tabSection: N.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [M]),
        D = n.useCallback(() => {
            h.default.track(R.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: y?.sessionId,
                cta_type: k.ST.LEARN_MORE,
                location_stack: O,
            }),
                window.open(A.A.getArticleURL(R.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [y, O]),
        G = n.useCallback(() => {
            (0, j.default)({ getSocialLayerStorefrontLink: T, guildId: l, pageIndex: 0 });
        }, [T, l]);
    if (null == s) return null;
    let P = null != s.logoAssetId ? (0, E.YE)(s.applicationId, s.logoAssetId, 128) : null,
        w = null != s.lightThemeLogoAssetId ? (0, E.YE)(s.applicationId, s.lightThemeLogoAssetId, 128) : null,
        Y = null;
    return (
        (Y = C ? (P ?? w) : (w ?? P)),
        (0, t.jsxs)(_.A, {
            disableDoubleClick: !0,
            className: b.N1,
            children: [
                (0, t.jsxs)(r.D, {
                    onClick: G,
                    className: b.gn,
                    children: [
                        null != Y && (0, t.jsx)("img", { className: b.wm, src: Y, alt: s.title }),
                        (0, t.jsx)(_.A.Title, { children: s.title }),
                    ],
                }),
                s.pages.length > 1 &&
                    (0, t.jsx)("div", {
                        className: b.YC,
                        children: s.pages.map((e, s) =>
                            (0, t.jsx)(
                                _.A.Title,
                                {
                                    onClick: () => {
                                        (0, j.default)({ getSocialLayerStorefrontLink: T, guildId: l, pageIndex: s });
                                    },
                                    wrapperClassName: b.oB,
                                    className: i()(b.xT, { [b.ys]: a === s }),
                                    children: (0, t.jsx)(c.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${s}`,
                            ),
                        ),
                    }),
                (0, t.jsxs)("div", {
                    className: b.sZ,
                    children: [
                        (0, t.jsx)(L, {
                            content: (0, t.jsx)(d.C, { size: "xs", color: "currentColor" }),
                            onClick: H,
                            ariaLabel: v.intl.string(v.t["7lZ31J"]),
                            className: b.ij,
                        }),
                        (0, t.jsx)(L, {
                            onClick: D,
                            ariaLabel: v.intl.string(v.t.hvVgAZ),
                            content: (0, t.jsx)(c.E, {
                                variant: "text-sm/medium",
                                children: v.intl.string(v.t.hvVgAZ),
                            }),
                            className: b.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
