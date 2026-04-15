t.d(i, { s: () => Q });
var r = t(627968),
    n = t(64700),
    a = t(503698),
    s = t.n(a),
    l = t(791282),
    o = t.n(l),
    c = t(835245),
    d = t(172218),
    _ = t(311907),
    u = t(397927),
    m = t(444927),
    p = t(793574),
    f = t(688810),
    h = t(871123),
    g = t(84511),
    I = t(950191),
    C = t(101928),
    b = t(195898),
    x = t(657331),
    S = t(299679),
    T = t(33190),
    w = t(332772),
    k = t(594832),
    A = t(631784),
    j = t(872472),
    L = t(721932),
    H = t(310209),
    v = t(878244),
    N = t(734057),
    O = t(309010),
    R = t(954571),
    y = t(427262),
    B = t(447719),
    M = t(652215),
    P = t(518477),
    W = t(985018),
    G = t(283573);
function E(e) {
    let { title: i, subtitle: t, showViewAll: n, themeClass: a, onOpenWishlist: l } = e;
    return (0, r.jsxs)("div", {
        className: s()(G.$R, a),
        children: [
            (0, r.jsxs)("div", {
                className: G.hy,
                children: [
                    (0, r.jsx)(u.Heading, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: t }),
                ],
            }),
            n &&
                (0, r.jsx)("div", {
                    className: G.Rb,
                    children: (0, r.jsx)(u.QWc, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: W.intl.string(W.t.y6PSA3),
                        onClick: l,
                    }),
                }),
        ],
    });
}
function D(e) {
    let { wishlistInDmLength: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.AC4, { children: W.intl.string(W.t.pfChQr) }),
            (0, r.jsx)("div", {
                className: s()(G.Md, G.e6),
                children: Array.from({ length: i }, (e, i) => (0, r.jsx)(v.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function U(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: a,
            onOpenWishlist: l,
            onWishlistItemClick: o,
            analyticsLocations: c,
            includedSources: d,
        } = e,
        m = (0, _.bG)([O.A, N.A], () => N.A.getChannel(O.A.getChannelId())),
        p = n.useCallback(() => {
            o?.(), (0, u.s7G)();
        }, [o]);
    return (
        (0, w.T)({ location: "wishlist_banner" }),
        (0, r.jsx)("ul", {
            className: s()(G.Md, G.e6),
            children: i.map((e, i) => {
                let { item: n, source: s } = e;
                return null == n || null == n.sku
                    ? null
                    : (0, r.jsx)(
                          "li",
                          {
                              className: G.XI,
                              children: (0, r.jsx)(S.dB, {
                                  newValue: {
                                      positionInSection: i,
                                      skuId: n.skuId,
                                      itemSource: s === k.uS.WISHLIST ? "organic" : "recommendation",
                                      productLine: n.skuProductLine,
                                  },
                                  children: (0, r.jsx)(v.A, {
                                      sku: n.sku,
                                      wishlistId: a,
                                      source: s,
                                      wishlistOwner: t,
                                      hasMultipleSources: d.size > 1,
                                      onOpenWishlist: l,
                                      onClick: p,
                                      analyticsLocations: c,
                                      guildId: m?.guild_id,
                                      channelId: m?.id,
                                  }),
                              }),
                          },
                          n.skuId,
                      );
            }),
        })
    );
}
function F(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: a,
            totalUnownedWishlistItemCount: l,
            displayItems: o,
            fetchState: _,
            defaultWishlistId: h,
            footerNotice: g,
        } = e,
        { analyticsLocations: I } = (0, f.Ay)(p.A.WISHLIST_BANNER),
        w = (0, m.A)(() => (0, c.A)()),
        A = (0, T.H)("wishlist_banner"),
        { theme: j, primaryColor: L, secondaryColor: H } = (0, C.A)({ user: i, displayProfile: a, forceUserTheme: A }),
        { profileThemeStyle: v, profileThemeClassName: N } = (0, b.A)({
            theme: j,
            themeType: null,
            primaryColor: L,
            secondaryColor: H,
            forceUserTheme: A,
        }),
        O = n.useCallback(() => {
            (0, x.openUserProfileModal)({ userId: i.id, tabSection: P.RP.WISHLIST });
        }, [i.id]),
        W = n.useMemo(() => "loading" === _, [_]),
        F = y.Ay.getName(i),
        Q = (0, B.l7)({
            totalUnownedWishlistItemCount: l,
            wishlistInDmLength: k.pl,
            displayItems: o,
            recipientName: F,
        }),
        V = a?.getBannerURL({ canAnimate: !1, size: 713 }),
        J = l > k.pl,
        K = n.useMemo(() => (J ? o.slice(0, k.pl) : o), [o, J]),
        [Z, $] = n.useState(!1),
        z = n.useCallback(
            (e) => {
                if (e && !W && o.length > 0) {
                    let e = o.map((e) => {
                        let { item: i } = e;
                        return i.skuId;
                    });
                    R.default.track(M.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: I,
                        product_lines: Array.from(
                            new Set(
                                o.map((e) => {
                                    let { item: i } = e;
                                    return i.skuProductLine;
                                }),
                            ),
                        ),
                    }),
                        $(!0);
                }
            },
            [W, o, i.id, I],
        ),
        X = (0, d.K)(z, void 0, !W && !Z),
        Y = n.useMemo(
            () =>
                new Set(
                    o.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [o],
        );
    return "error" === _
        ? null
        : (0, r.jsx)("div", {
              className: G.v8,
              children: (0, r.jsxs)("div", {
                  ref: X,
                  className: s()(G.A1, N),
                  style: v,
                  children: [
                      null != V && (0, r.jsx)("div", { className: G.iL, style: { backgroundImage: `url(${V})` } }),
                      (0, r.jsx)(u.NPJ, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(E, {
                                          title: Q.title,
                                          subtitle: Q.subtitle,
                                          showViewAll: l > k.pl,
                                          themeClass: e,
                                          onOpenWishlist: O,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: e,
                                          children:
                                              W || 0 === o.length
                                                  ? (0, r.jsx)(D, { wishlistInDmLength: k.pl })
                                                  : (0, r.jsx)(S.dB, {
                                                        newValue: {
                                                            impressionSessionId: w,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: h,
                                                            analyticsLocations: I,
                                                        },
                                                        children: (0, r.jsx)(U, {
                                                            items: K,
                                                            giftRecipient: i,
                                                            defaultWishlistId: h,
                                                            onOpenWishlist: O,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: I,
                                                            includedSources: Y,
                                                        }),
                                                    }),
                                      }),
                                      null != g && !W && o.length > 0
                                          ? (0, r.jsx)("div", { className: e, children: g })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function Q(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        a = (0, I.Ay)(i?.id),
        {
            wishlistAndRecommendations: s,
            totalUnownedWishlistItemCount: l,
            skusToUserAndReason: c,
            status: d,
            defaultWishlistId: _,
        } = (0, A.rg)({ userId: i.id, numItems: k.pl, source: k.B5.USER_PROFILE }),
        u = n.useMemo(
            () =>
                o()(
                    s.map((e) => {
                        let t = e.productLine === M.EZt.COLLECTIBLES ? j.A.fromSKU(e) : L.A.fromSKU(e),
                            r = null != c[e.id] && c[e.id][i.id] === H.j.WISHLIST ? k.uS.WISHLIST : k.uS.POPULAR;
                        return null != t ? { item: t, source: r } : null;
                    }),
                ),
            [s, i.id, c],
        ),
        m = n.useMemo(
            () =>
                u.some((e) => {
                    let { item: i } = e;
                    return (0, h.bF)(i.sku);
                }),
            [u],
        );
    return (0, r.jsx)(F, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: a,
        totalUnownedWishlistItemCount: l,
        fetchState: d,
        displayItems: u,
        defaultWishlistId: _,
        footerNotice: m
            ? (0, r.jsx)(g.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: G.jG })
            : null,
    });
}
