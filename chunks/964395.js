t.d(l, { A: () => S });
var n = t(627968),
    a = t(64700),
    s = t(503698),
    i = t.n(s),
    d = t(158954),
    r = t(311907),
    o = t(736653),
    c = t(793574),
    u = t(688810),
    f = t(742589),
    g = t(657331),
    p = t(287809),
    I = t(954571),
    _ = t(975571),
    x = t(371794),
    h = t(439303),
    A = t(44724),
    b = t(995393),
    m = t(652215),
    k = t(518477),
    v = t(985018),
    j = t(848464);
function E(e) {
    let { content: l, onClick: t, ariaLabel: a, className: s } = e;
    return (0, n.jsx)(d.DUT, {
        className: i()(j.gb, s),
        onClick: t,
        "aria-label": a,
        children: l,
    });
}
function S(e) {
    let { guildId: l, storefront: t, selectedPageIndex: s } = e,
        S = (0, d.Mwr)((0, o.Ay)()),
        N = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        L = (0, h.jM)(),
        { analyticsLocations: R } = (0, u.Ay)(),
        T = a.useCallback(() => {
            (null == N ? void 0 : N.id) != null &&
                (0, g.openUserProfileModal)({
                    userId: N.id,
                    tabSection: k.RP.WISHLIST,
                    showGuildProfile: !1,
                    sourceAnalyticsLocations: [c.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [N]),
        C = a.useCallback(() => {
            I.default.track(m.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == L ? void 0 : L.sessionId,
                cta_type: b.ST.LEARN_MORE,
                location_stack: R,
            }),
                window.open(_.A.getArticleURL(m.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [L, R]);
    if (null == t) return null;
    let y = null != t.logoAssetId ? (0, x.YE)(t.applicationId, t.logoAssetId, 75) : null,
        M = null != t.lightThemeLogoAssetId ? (0, x.YE)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
        O = null;
    return (
        (O = S ? (null != y ? y : M) : null != M ? M : y),
        (0, n.jsxs)(f.A, {
            disableDoubleClick: !0,
            className: j.N1,
            children: [
                (0, n.jsxs)(d.DUT, {
                    onClick: () => {
                        (0, A.default)({
                            guildId: l,
                            pageIndex: 0,
                        });
                    },
                    className: j.gn,
                    children: [
                        null != O &&
                            (0, n.jsx)("img", {
                                className: j.wm,
                                src: O,
                                alt: t.title,
                            }),
                        (0, n.jsx)(f.A.Title, { children: t.title }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: j.YC,
                    children: t.pages.map((e, t) =>
                        (0, n.jsx)(
                            f.A.Title,
                            {
                                onClick: () => {
                                    (0, A.default)({
                                        guildId: l,
                                        pageIndex: t,
                                    });
                                },
                                wrapperClassName: j.oB,
                                className: i()(j.xT, { [j.ys]: s === t }),
                                children: (0, n.jsx)(d.EYj, {
                                    variant: "text-sm/medium",
                                    children: e.title,
                                }),
                            },
                            "".concat(e.title, "-").concat(t),
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: j.sZ,
                    children: [
                        (0, n.jsx)(E, {
                            content: (0, n.jsx)(d.C3E, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            onClick: T,
                            ariaLabel: v.intl.string(v.t["7lZ31J"]),
                            className: j.ij,
                        }),
                        (0, n.jsx)(E, {
                            onClick: C,
                            ariaLabel: v.intl.string(v.t.hvVgAZ),
                            content: (0, n.jsx)(d.EYj, {
                                variant: "text-sm/medium",
                                children: v.intl.string(v.t.hvVgAZ),
                            }),
                            className: j.AJ,
                        }),
                    ],
                }),
            ],
        })
    );
}
