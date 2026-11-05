var l = a(477900),
    s = a(582128),
    n = a(503698),
    i = a.n(n),
    r = a(855986);
if (221552 == a.j) var c = a(939249);
if (221552 == a.j) var o = a(366010);
if (221552 == a.j) var A = a(834730);
if (221552 == a.j) var E = a(926268);
if (221552 == a.j) var p = a(346411);
var d = a(736653),
    C = a(793574),
    I = a(688810),
    L = a(658997),
    u = a(793943),
    _ = a(742589),
    T = a(702476),
    O = a(71393),
    S = a(576705),
    N = a(287809),
    h = a(129230),
    m = a(975571),
    g = a(371794),
    R = a(871123),
    P = a(439303),
    D = a(353281),
    j = a(225647),
    x = a(676924),
    f = a(995393),
    v = a(652215),
    y = a(518477),
    b = a(792996),
    k = a(859425);
function w(e) {
    let { content: t, onClick: a, ariaLabel: s, className: n } = e;
    return (0, l.jsx)(c.D, { className: i()(k.gb, n), onClick: a, "aria-label": s, children: t });
}
a.d(
    t,
    {},
    {
        A: function (e) {
            let { storefront: t, selectedPageIndex: a } = e,
                n = (0, o.M)((0, d.Ay)()),
                M = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
                F = (0, P.jM)(),
                { analyticsLocations: U } = (0, I.Ay)(),
                { navigateToStorefrontPage: Z } = (0, D.H)(),
                G = t?.applicationId,
                { guildId: H } = (0, R.nG)(G),
                V = (0, r.bG)([S.A, O.A], () => S.A.can(v.xBc.MANAGE_GUILD, O.A.getGuild(H))),
                B = (0, L.A)(G, V) || V || (M?.isStaff() ?? !1),
                Y = (0, u.fy)(
                    (e) => e.activePanel === u.HP.APPLICATION_TEST_MODE_DEBUG && e.metadata?.applicationId === G,
                ),
                J = s.useCallback(() => {
                    M?.id != null &&
                        (0, T.openUserProfileModal)({
                            userId: M.id,
                            tabSection: y.RP.WISHLIST,
                            sourceAnalyticsLocations: [C.A.SOCIAL_LAYER_STOREFRONT],
                        });
                }, [M]),
                z = s.useCallback(() => {
                    (h.default.track(v.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                        slayer_storefront_session_id: F?.sessionId,
                        cta_type: f.ST.LEARN_MORE,
                        location_stack: U,
                    }),
                        window.open(m.A.getArticleURL(v.MVz.SOCIAL_LAYER_STOREFRONT)));
                }, [F, U]),
                Q = s.useCallback(() => {
                    null != G && (Y ? (0, u.Jp)() : (0, u.nf)(u.HP.APPLICATION_TEST_MODE_DEBUG, { applicationId: G }));
                }, [G, Y]),
                W = s.useCallback(() => {
                    Z?.(0);
                }, [Z]);
            if (null == t) return null;
            let q = null != t.logoAssetId ? (0, g.YE)(t.applicationId, t.logoAssetId, 128) : null,
                $ = null != t.lightThemeLogoAssetId ? (0, g.YE)(t.applicationId, t.lightThemeLogoAssetId, 128) : null,
                K = null;
            return (
                (K = n ? (q ?? $) : ($ ?? q)),
                (0, l.jsxs)(_.A, {
                    disableDoubleClick: !0,
                    className: k.N1,
                    children: [
                        (0, l.jsxs)(c.D, {
                            onClick: W,
                            className: k.gn,
                            children: [
                                null != K && (0, l.jsx)("img", { className: k.wm, src: K, alt: t.title }),
                                (0, l.jsx)(_.A.Title, { children: t.title }),
                            ],
                        }),
                        t.pages.length > 1 &&
                            (0, l.jsx)("div", {
                                className: k.YC,
                                children: t.pages.map((e, t) =>
                                    (0, l.jsx)(
                                        _.A.Title,
                                        {
                                            onClick: () => Z?.(t),
                                            wrapperClassName: k.oB,
                                            className: i()(k.xT, { [k.ys]: a === t }),
                                            children: (0, l.jsx)(A.E, {
                                                variant: "body-sm/medium",
                                                children: (0, j.A)(e.title),
                                            }),
                                        },
                                        `${e.title}-${t}`,
                                    ),
                                ),
                            }),
                        (0, l.jsxs)("div", {
                            className: k.sZ,
                            children: [
                                (0, l.jsx)(w, {
                                    content: (0, l.jsx)(E.HeartIcon, { size: "xs", color: "currentColor" }),
                                    onClick: J,
                                    ariaLabel: b.intl.string(b.t["7lZ31J"]),
                                    className: k.ij,
                                }),
                                (0, l.jsx)(x.A, { location: C.A.SOCIAL_LAYER_STOREFRONT }),
                                (0, l.jsx)(w, {
                                    onClick: z,
                                    ariaLabel: b.intl.string(b.t.hvVgAZ),
                                    content: (0, l.jsx)(A.E, {
                                        variant: "body-sm/medium",
                                        children: b.intl.string(b.t.hvVgAZ),
                                    }),
                                    className: k.AJ,
                                }),
                                B &&
                                    (0, l.jsx)(w, {
                                        onClick: Q,
                                        ariaLabel: b.intl.string(b.t.QexSCe),
                                        content: (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                (0, l.jsx)(p.WrenchIcon, { size: "xs", color: "currentColor" }),
                                                (0, l.jsx)(A.E, {
                                                    variant: "body-sm/medium",
                                                    children: b.intl.string(b.t.QexSCe),
                                                }),
                                            ],
                                        }),
                                        className: k.pL,
                                    }),
                            ],
                        }),
                    ],
                })
            );
        },
    },
);
