t.d(l, { A: () => C });
var n = t(627968),
    s = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(939249),
    o = t(366010),
    d = t(834730),
    c = t(926268),
    u = t(311907),
    _ = t(736653),
    g = t(793574),
    p = t(688810),
    x = t(742589),
    A = t(657331),
    f = t(287809),
    I = t(954571),
    h = t(975571),
    m = t(371794),
    E = t(439303),
    S = t(44724),
    j = t(995393),
    k = t(652215),
    b = t(518477),
    R = t(985018),
    N = t(718356);
function v(e) {
    let { content: l, onClick: t, ariaLabel: s, className: a } = e;
    return (0, n.jsx)(r.D, { className: i()(N.gb, a), onClick: t, "aria-label": s, children: l });
}
function C(e) {
    let { guildId: l, storefront: t, selectedPageIndex: a } = e,
        C = (0, o.M)((0, _.Ay)()),
        L = (0, u.bG)([f.default], () => f.default.getCurrentUser()),
        M = (0, E.jM)(),
        { analyticsLocations: T } = (0, p.Ay)(),
        O = s.useCallback(() => {
            L?.id != null &&
                (0, A.openUserProfileModal)({
                    userId: L.id,
                    tabSection: b.RP.WISHLIST,
                    sourceAnalyticsLocations: [g.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [L]),
        y = s.useCallback(() => {
            I.default.track(k.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: M?.sessionId,
                cta_type: j.ST.LEARN_MORE,
                location_stack: T,
            }),
                window.open(h.A.getArticleURL(k.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [M, T]);
    if (null == t) return null;
    let G = null != t.logoAssetId ? (0, m.YE)(t.applicationId, t.logoAssetId, 75) : null,
        D = null != t.lightThemeLogoAssetId ? (0, m.YE)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        w = null;
    return (
        (w = C ? (G ?? D) : (D ?? G)),
        (0, n.jsxs)(x.A, {
            disableDoubleClick: !0,
            className: N.N1,
            children: [
                (0, n.jsxs)(r.D, {
                    onClick: () => {
                        (0, S.default)({ guildId: l, pageIndex: 0 });
                    },
                    className: N.gn,
                    children: [
                        null != w && (0, n.jsx)("img", { className: N.wm, src: w, alt: t.title }),
                        (0, n.jsx)(x.A.Title, { children: t.title }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: N.YC,
                    children: t.pages.map((e, t) =>
                        (0, n.jsx)(
                            x.A.Title,
                            {
                                onClick: () => {
                                    (0, S.default)({ guildId: l, pageIndex: t });
                                },
                                wrapperClassName: N.oB,
                                className: i()(N.xT, { [N.ys]: a === t }),
                                children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                            },
                            `${e.title}-${t}`,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: N.sZ,
                    children: [
                        (0, n.jsx)(v, {
                            content: (0, n.jsx)(c.C, { size: "xs", color: "currentColor" }),
                            onClick: O,
                            ariaLabel: R.intl.string(R.t["7lZ31J"]),
                            className: N.ij,
                        }),
                        (0, n.jsx)(v, {
                            onClick: y,
                            ariaLabel: R.intl.string(R.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: R.intl.string(R.t.hvVgAZ),
                            }),
                            className: N.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
