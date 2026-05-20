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
    _ = s(688810),
    x = s(742589),
    f = s(976860),
    I = s(975732),
    h = s(287809),
    A = s(174459),
    E = s(975571),
    S = s(371794),
    m = s(439303),
    j = s(353281),
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
    let { storefront: l, selectedPageIndex: s } = e,
        a = (0, o.M)((0, g.Ay)()),
        C = (0, u.bG)([h.default], () => h.default.getCurrentUser()),
        M = (0, m.jM)(),
        { analyticsLocations: y } = (0, _.Ay)(),
        { getSocialLayerStorefrontLink: O } = (0, j.H)(),
        T = n.useCallback(() => {
            C?.id != null &&
                (0, I.openUserProfileModal)({
                    userId: C.id,
                    tabSection: N.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [C]),
        G = n.useCallback(() => {
            A.default.track(R.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: M?.sessionId,
                cta_type: k.ST.LEARN_MORE,
                location_stack: y,
            }),
                window.open(E.A.getArticleURL(R.MVz.SOCIAL_LAYER_STOREFRONT));
        }, [M, y]),
        H = n.useCallback(() => {
            null != O && (0, f.pX)(O(0));
        }, [O]);
    if (null == l) return null;
    let D = null != l.logoAssetId ? (0, S.YE)(l.applicationId, l.logoAssetId, 128) : null,
        P = null != l.lightThemeLogoAssetId ? (0, S.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        w = null;
    return (
        (w = a ? (D ?? P) : (P ?? D)),
        (0, t.jsxs)(x.A, {
            disableDoubleClick: !0,
            className: b.N1,
            children: [
                (0, t.jsxs)(r.D, {
                    onClick: H,
                    className: b.gn,
                    children: [
                        null != w && (0, t.jsx)("img", { className: b.wm, src: w, alt: l.title }),
                        (0, t.jsx)(x.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, t.jsx)("div", {
                        className: b.YC,
                        children: l.pages.map((e, l) =>
                            (0, t.jsx)(
                                x.A.Title,
                                {
                                    onClick: () => {
                                        null != O && (0, f.pX)(O(l));
                                    },
                                    wrapperClassName: b.oB,
                                    className: i()(b.xT, { [b.ys]: s === l }),
                                    children: (0, t.jsx)(c.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, t.jsxs)("div", {
                    className: b.sZ,
                    children: [
                        (0, t.jsx)(L, {
                            content: (0, t.jsx)(d.C, { size: "xs", color: "currentColor" }),
                            onClick: T,
                            ariaLabel: v.intl.string(v.t["7lZ31J"]),
                            className: b.ij,
                        }),
                        (0, t.jsx)(L, {
                            onClick: G,
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
