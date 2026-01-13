n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(442837),
    c = n(681715),
    u = n(481060),
    d = n(906732),
    p = n(835473),
    f = n(525302),
    g = n(104505),
    h = n(863886),
    m = n(688192),
    b = n(277511),
    _ = n(602733),
    E = n(594174),
    O = n(164670),
    v = n(927613),
    I = n(848118),
    y = n(851397),
    C = n(582113),
    S = n(228168),
    T = n(388032),
    N = n(702631);
function j(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: l, analyticsLocations: a } = e,
        s = i.useRef(null),
        { analyticsLocations: p } = (0, d.ZP)(null != a ? a : []),
        { isHoveringOrFocusing: m } = (0, g.Z)(s),
        [E, O] = i.useState(!1),
        v = i.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !E)) {
                    O(!0);
                    try {
                        await b.Z.addSkuToWishlist(n.id, p), null == l || l({ tabSection: S.oh.WISHLIST });
                    } catch (e) {
                        (0, u.showToast)((0, u.createToast)(T.intl.string(T.t.F8FvUy), u.ToastType.FAILURE)),
                            o.uvj.announce(T.intl.string(T.t.F8FvUy));
                    } finally {
                        O(!1);
                    }
                }
            },
            [n.id, p, l, E],
        );
    return (0, r.jsx)(c.i_, {
        title: T.intl.string(T.t["8DkMEQ"]),
        body: n.name,
        asset: (0, r.jsx)(f.No, { application: t }),
        assetSize: _.EU,
        children: (0, r.jsxs)(o.kL8, {
            className: N.card,
            ref: s,
            "aria-label": n.name,
            onClick: v,
            children: [
                (0, r.jsx)(
                    I.A,
                    {
                        shape: "custom",
                        containerClassName: N.card,
                        foregroundImageClassName: N.cardImage,
                        backgroundImageClassName: N.cardBackgroundImage,
                        sku: n,
                    },
                    n.id,
                ),
                (m || E) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: N.highlightOverlay }),
                            (0, r.jsx)("div", {
                                className: N.plusIconContainer,
                                children: E
                                    ? (0, r.jsx)(h.T, {})
                                    : (0, r.jsx)(o.svS, {
                                          size: "lg",
                                          color: u.TVs.unsafe_rawColors.WHITE_500,
                                      }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function P(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: l,
            numWishlistItemsToRecommend: o,
            maxWishlistItemsToShow: c = o,
            className: u,
        } = e,
        d = (0, p.q)(C.t9),
        f = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        g = (0, s.e7)([E.default], () => E.default.getUser(null == t ? void 0 : t.userId)),
        b = null == t || (null != f && null != t && t.userId === f.id),
        _ = i.useMemo(() => (null == t ? (null != f ? [f.id] : void 0) : [t.userId]), [t, f]),
        I = (0, v.Z)({
            guildId: (0, O.ac)(),
            numWishlistItems: o,
            location: "SocialLayerAddToWishlistGrid",
            applicationId: C.t9,
            userIds: _,
            includeWishlists: !1,
        }),
        S = i.useMemo(() => {
            var e;
            return new Set(null != (e = null == t ? void 0 : t.items.map((e) => e.skuId)) ? e : []);
        }, [t]),
        T = I.recommendations.filter((e) => !S.has(e.skuId)).slice(0, c);
    return "success" !== I.state
        ? (0, r.jsx)("div", {
              className: N.loadingContainer,
              children: (0, r.jsx)(h.T, {}),
          })
        : (0, r.jsx)("ul", {
              className: a()(N.grid, u),
              children: T.map((e) =>
                  b
                      ? (0, r.jsx)(
                            j,
                            {
                                application: d,
                                sku: e.sku,
                                handleOpenUserProfileModal: n,
                                analyticsLocations: l,
                            },
                            e.skuId,
                        )
                      : (0, r.jsx)(
                            y.Z,
                            {
                                item: e,
                                wishlistId: t.id,
                                isOwner: !1,
                                profileOwner: g,
                                cardSize: m.U.FLEX,
                                showOverlayButton: !0,
                                hideButtonIcon: !0,
                                isDragging: !1,
                            },
                            e.skuId,
                        ),
              ),
          });
}
