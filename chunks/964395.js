t.d(l, { A: () => P });
var a = t(477900),
    n = t(582128),
    s = t(503698),
    i = t.n(s),
    r = t(17928),
    c = t(939249),
    o = t(366010),
    A = t(834730),
    u = t(926268),
    p = t(346411),
    d = t(736653),
    C = t(793574),
    E = t(688810),
    g = t(658997),
    L = t(793943),
    _ = t(742589),
    m = t(402860),
    N = t(71393),
    T = t(576705),
    I = t(287809),
    S = t(174459),
    h = t(975571),
    x = t(371794),
    O = t(871123),
    b = t(439303),
    j = t(353281),
    f = t(225647),
    k = t(676924),
    M = t(995393),
    R = t(652215),
    v = t(518477),
    y = t(105292),
    w = t(859425);
function D(e) {
    let { content: l, onClick: t, ariaLabel: n, className: s } = e;
    return (0, a.jsx)(c.D, { className: i()(w.gb, s), onClick: t, "aria-label": n, children: l });
}
function P(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        s = (0, o.M)((0, d.Ay)()),
        P = (0, r.bG)([I.default], () => I.default.getCurrentUser()),
        U = (0, b.jM)(),
        { analyticsLocations: G } = (0, E.Ay)(),
        { navigateToStorefrontPage: B } = (0, j.H)(),
        Y = l?.applicationId,
        { guildId: H } = (0, O.nG)(Y),
        V = (0, r.bG)([T.A, N.A], () => T.A.can(R.xBc.MANAGE_GUILD, N.A.getGuild(H))),
        Z = (0, g.A)(Y, V) || V || (P?.isStaff() ?? !1),
        F = (0, L.fy)((e) => e.activePanel === L.HP.APPLICATION_TEST_MODE_DEBUG && e.metadata?.applicationId === Y),
        J = n.useCallback(() => {
            P?.id != null &&
                (0, m.openUserProfileModal)({
                    userId: P.id,
                    tabSection: v.RP.WISHLIST,
                    sourceAnalyticsLocations: [C.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [P]),
        Q = n.useCallback(() => {
            (S.default.track(R.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: U?.sessionId,
                cta_type: M.ST.LEARN_MORE,
                location_stack: G,
            }),
                window.open(h.A.getArticleURL(R.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [U, G]),
        z = n.useCallback(() => {
            null != Y && (F ? (0, L.Jp)() : (0, L.nf)(L.HP.APPLICATION_TEST_MODE_DEBUG, { applicationId: Y }));
        }, [Y, F]),
        W = n.useCallback(() => {
            B?.(0);
        }, [B]);
    if (null == l) return null;
    let $ = null != l.logoAssetId ? (0, x.YE)(l.applicationId, l.logoAssetId, 128) : null,
        q = null != l.lightThemeLogoAssetId ? (0, x.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        K = null;
    return (
        (K = s ? ($ ?? q) : (q ?? $)),
        (0, a.jsxs)(_.A, {
            disableDoubleClick: !0,
            className: w.N1,
            children: [
                (0, a.jsxs)(c.D, {
                    onClick: W,
                    className: w.gn,
                    children: [
                        null != K && (0, a.jsx)("img", { className: w.wm, src: K, alt: l.title }),
                        (0, a.jsx)(_.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, a.jsx)("div", {
                        className: w.YC,
                        children: l.pages.map((e, l) =>
                            (0, a.jsx)(
                                _.A.Title,
                                {
                                    onClick: () => B?.(l),
                                    wrapperClassName: w.oB,
                                    className: i()(w.xT, { [w.ys]: t === l }),
                                    children: (0, a.jsx)(A.E, {
                                        variant: "body-sm/medium",
                                        children: (0, f.A)(e.title),
                                    }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, a.jsxs)("div", {
                    className: w.sZ,
                    children: [
                        (0, a.jsx)(D, {
                            content: (0, a.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: J,
                            ariaLabel: y.intl.string(y.t["7lZ31J"]),
                            className: w.ij,
                        }),
                        (0, a.jsx)(k.A, { location: C.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, a.jsx)(D, {
                            onClick: Q,
                            ariaLabel: y.intl.string(y.t.hvVgAZ),
                            content: (0, a.jsx)(A.E, {
                                variant: "body-sm/medium",
                                children: y.intl.string(y.t.hvVgAZ),
                            }),
                            className: w.AJ,
                        }),
                        Z &&
                            (0, a.jsx)(D, {
                                onClick: z,
                                ariaLabel: y.intl.string(y.t.QexSCe),
                                content: (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(p.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(A.E, {
                                            variant: "body-sm/medium",
                                            children: y.intl.string(y.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: w.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
