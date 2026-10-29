l.d(t, { A: () => U });
var a = l(477900),
    n = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(17928),
    c = l(939249),
    o = l(366010),
    A = l(834730),
    u = l(926268),
    p = l(346411),
    d = l(736653),
    C = l(793574),
    E = l(688810),
    g = l(658997),
    L = l(793943),
    _ = l(742589),
    m = l(402860),
    N = l(71393),
    x = l(576705),
    T = l(287809),
    I = l(174459),
    S = l(975571),
    h = l(371794),
    O = l(871123),
    j = l(439303),
    f = l(353281),
    b = l(225647),
    k = l(676924),
    M = l(995393),
    R = l(652215),
    v = l(518477),
    w = l(105292),
    D = l(859425);
function P(e) {
    let { content: t, onClick: l, ariaLabel: n, className: s } = e;
    return (0, a.jsx)(c.D, { className: i()(D.gb, s), onClick: l, "aria-label": n, children: t });
}
function U(e) {
    let { storefront: t, selectedPageIndex: l } = e,
        s = (0, o.M)((0, d.Ay)()),
        U = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        y = (0, j.jM)(),
        { analyticsLocations: G } = (0, E.Ay)(),
        { navigateToStorefrontPage: B } = (0, f.H)(),
        Y = t?.applicationId,
        { guildId: H } = (0, O.nG)(Y),
        V = (0, r.bG)([x.A, N.A], () => x.A.can(R.xBc.MANAGE_GUILD, N.A.getGuild(H))),
        Z = (0, g.A)(Y, V) || V || (U?.isStaff() ?? !1),
        F = (0, L.fy)((e) => e.activePanel === L.HP.APPLICATION_TEST_MODE_DEBUG && e.metadata?.applicationId === Y),
        J = n.useCallback(() => {
            U?.id != null &&
                (0, m.openUserProfileModal)({
                    userId: U.id,
                    tabSection: v.RP.WISHLIST,
                    sourceAnalyticsLocations: [C.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [U]),
        Q = n.useCallback(() => {
            (I.default.track(R.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: y?.sessionId,
                cta_type: M.ST.LEARN_MORE,
                location_stack: G,
            }),
                window.open(S.A.getArticleURL(R.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [y, G]),
        z = n.useCallback(() => {
            null != Y && (F ? (0, L.Jp)() : (0, L.nf)(L.HP.APPLICATION_TEST_MODE_DEBUG, { applicationId: Y }));
        }, [Y, F]),
        W = n.useCallback(() => {
            B?.(0);
        }, [B]);
    if (null == t) return null;
    let $ = null != t.logoAssetId ? (0, h.YE)(t.applicationId, t.logoAssetId, 128) : null,
        q = null != t.lightThemeLogoAssetId ? (0, h.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
        K = null;
    return (
        (K = s ? ($ ?? q) : (q ?? $)),
        (0, a.jsxs)(_.A, {
            disableDoubleClick: !0,
            className: D.N1,
            children: [
                (0, a.jsxs)(c.D, {
                    onClick: W,
                    className: D.gn,
                    children: [
                        null != K && (0, a.jsx)("img", { className: D.wm, src: K, alt: t.title }),
                        (0, a.jsx)(_.A.Title, { children: t.title }),
                    ],
                }),
                t.pages.length > 1 &&
                    (0, a.jsx)("div", {
                        className: D.YC,
                        children: t.pages.map((e, t) =>
                            (0, a.jsx)(
                                _.A.Title,
                                {
                                    onClick: () => B?.(t),
                                    wrapperClassName: D.oB,
                                    className: i()(D.xT, { [D.ys]: l === t }),
                                    children: (0, a.jsx)(A.E, {
                                        variant: "text-sm/medium",
                                        children: (0, b.A)(e.title),
                                    }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, a.jsxs)("div", {
                    className: D.sZ,
                    children: [
                        (0, a.jsx)(P, {
                            content: (0, a.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: J,
                            ariaLabel: w.intl.string(w.t["7lZ31J"]),
                            className: D.ij,
                        }),
                        (0, a.jsx)(k.A, { location: C.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, a.jsx)(P, {
                            onClick: Q,
                            ariaLabel: w.intl.string(w.t.hvVgAZ),
                            content: (0, a.jsx)(A.E, {
                                variant: "text-sm/medium",
                                children: w.intl.string(w.t.hvVgAZ),
                            }),
                            className: D.AJ,
                        }),
                        Z &&
                            (0, a.jsx)(P, {
                                onClick: z,
                                ariaLabel: w.intl.string(w.t.QexSCe),
                                content: (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(p.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            children: w.intl.string(w.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: D.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
