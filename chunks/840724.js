n.d(t, {
    C: () => W,
    Z: () => H,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(793030),
    f = n(442837),
    p = n(622535),
    _ = n(481060),
    m = n(607070),
    h = n(100527),
    g = n(906732),
    E = n(220082),
    b = n(143941),
    y = n(104505),
    O = n(210887),
    v = n(55563),
    S = n(626135),
    I = n(937615),
    T = n(164670),
    A = n(590961),
    C = n(210218),
    N = n(705338),
    P = n(882508),
    R = n(594914),
    w = n(848118),
    D = n(433386),
    x = n(655409),
    L = n(785873),
    j = n(181268),
    M = n(981631),
    k = n(231338),
    U = n(388032),
    G = n(450433);
let Z = 80,
    B = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    F = 30,
    V = 3;
var H = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function Y(e) {
    let { sku: t, isCardHovered: n, onClick: i } = e;
    return (0, r.jsx)("div", {
        className: G.wishlistButtonContainer,
        children: (0, r.jsx)(b.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, P.c)(t),
            onClick: i,
        }),
    });
}
function W(e) {
    var t, n, a, s, c, b, P, H, W, K;
    let {
            positionInSection: z,
            applicationId: q,
            skuId: Q,
            variant: X = 0,
            guildId: J,
            onClick: $,
            className: ee,
            analyticsLocations: et,
        } = e,
        en = i.useRef(null),
        er = (0, f.e7)([v.Z], () => v.Z.get(Q)),
        ei = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)),
        ea = (0, f.e7)([m.Z], () => m.Z.useReducedMotion),
        { isHoveringOrFocusing: eo } = (0, y.Z)(en),
        es = (0, A.oR)(),
        { analyticsLocations: el } = (0, g.ZP)(null != et ? et : []),
        ec = i.useRef({
            positionInSection: z,
            analyticsLocations: el,
        }),
        { handleCardHover: eu, handleCardUnhover: ed } = (0, x.A)(Q, es, z, el),
        { handleCardVisibilityChange: ef } = (0, L.X)(Q, es, z, el),
        ep = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = ec.current,
                    {
                        sessionId: r,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: o,
                        pageSection: s,
                        pageSectionTitle: l,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = es;
                S.default.track(M.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: Q,
                    guild_id: i,
                    page_index: a,
                    page_title: o,
                    page_section: s,
                    page_section_title: l,
                    position_in_section: n,
                    is_user_guild_member: c,
                    page_has_leaderboard: u,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [Q, es],
        ),
        { primaryIconAsset: e_, primaryIconLabel: em } = i.useMemo(() => (0, T.FE)(er, q), [er, q]),
        eh = (0, f.e7)([C.Z], () => {
            var e, t;
            return null != J && null != (t = null == (e = C.Z.getStorefrontState(J)) ? void 0 : e.activePage) ? t : 0;
        }),
        eg = i.useMemo(() => {
            var e, t;
            if (
                (null == er || null == (t = er.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = Math.max(u()(er.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
            return r <= V ? U.intl.format(U.t.PWw4Vp, { days: r }) : null;
        }, [null == er || null == (n = er.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eE = (0, T.a7)(er),
        [eb, ey] = (0, E.Cf)(null == eE ? void 0 : eE.toString(), "#000000"),
        eO = i.useMemo(() => {
            let e = o()(eb).darken(1.5).alpha(0.9).hex(),
                t = o()(eb).alpha(0).hex(),
                [n, r] = B[X];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(F + n, "%, ")
                      .concat(t, " ")
                      .concat(F + r, "%)");
        }, [eb, X]),
        ev = i.useCallback(() => {
            ep(j.rZ.WISHLIST_BUTTON);
        }, [ep]),
        eS = i.useCallback(
            (e) => {
                if ((ep(j.rZ.CARD), null != $)) return void $(e);
                null != J &&
                    (0, N.default)({
                        guildId: J,
                        pageIndex: eh,
                        skuId: Q,
                        slug: null == er ? void 0 : er.slug,
                    });
            },
            [ep, J, eh, Q, null == er ? void 0 : er.slug, $],
        );
    if (null == er) return null;
    let eI = (0, T.Do)(er);
    return (0, r.jsx)(p.$, {
        innerRef: en,
        onChange: ef,
        threshold: 0,
        children: (0, r.jsx)(d.tEY, {
            children: (0, r.jsxs)(_.kL8, {
                onClick: eS,
                onMouseEnter: eu,
                onMouseLeave: ed,
                className: l()(
                    G.card,
                    {
                        [G.cardAnimation]: !ea && 2 !== X,
                        [G.cardDark]: ei,
                        [ei ? G.cardDarkHighlighted : G.cardHighlighted]: eo,
                        [G.cardSmall]: 0 === X,
                        [G.cardMedium]: 1 === X,
                        [G.cardEmbedded]: 2 === X,
                    },
                    ee,
                ),
                ref: en,
                "aria-label": er.name,
                children: [
                    null != eg &&
                        (0, r.jsx)(_.IGR, {
                            text: eg,
                            disableColor: !0,
                            className: G.badge,
                        }),
                    (0, r.jsx)(Y, {
                        sku: er,
                        isCardHovered: eo,
                        onClick: ev,
                    }),
                    null != eI
                        ? (0, r.jsx)(w.p, {
                              containerClassName: G.cardImageContainer,
                              foregroundImageClassName: G.cardImage,
                              cardImage: eI,
                              altText: er.name,
                              shape: "custom",
                              backgroundImageClassName: G.cardBackgroundImage,
                              cardBackgroundImage: eE,
                          })
                        : (0, r.jsx)("div", {
                              className: G.ticketIconContainer,
                              children: (0, r.jsx)(d.Prq, {
                                  color: "white",
                                  size: "custom",
                                  height: Z,
                                  width: Z,
                                  className: G.ticketIcon,
                              }),
                          }),
                    2 !== X
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: G.bottomGradient,
                                      style: { background: eO },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: G.details,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: G.titleContainer,
                                              children: (0, r.jsx)(_.Text, {
                                                  color: "always-white",
                                                  variant: "text-md/medium",
                                                  lineClamp: 1,
                                                  children: er.name,
                                              }),
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: G.descriptionContainer,
                                              children: [
                                                  null != e_ &&
                                                      (0, r.jsx)("img", {
                                                          src: e_.toString(),
                                                          alt: em,
                                                          className: G.iconAsset,
                                                      }),
                                                  (0, r.jsx)(_.Text, {
                                                      variant: "text-md/bold",
                                                      color: "always-white",
                                                      lineClamp: 1,
                                                      children: (0, I.T4)(
                                                          null != (P = null == (a = er.price) ? void 0 : a.amount)
                                                              ? P
                                                              : 0,
                                                          null != (H = null == (s = er.price) ? void 0 : s.currency)
                                                              ? H
                                                              : k.pK.USD,
                                                      ),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      className: G.buttonHover,
                                      children: (0, r.jsxs)(d.hE2, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(d.zxk, {
                                                  variant: "primary",
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          ep(j.rZ.BUY_BUTTON),
                                                          (0, R.P)(
                                                              er,
                                                              { isGift: !1 },
                                                              {
                                                                  analyticsLocations: [
                                                                      h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                              },
                                                          );
                                                  },
                                                  text: U.intl.format(U.t.Xp5WTn, {
                                                      price: (0, I.T4)(
                                                          null != (W = null == (c = er.price) ? void 0 : c.amount)
                                                              ? W
                                                              : 0,
                                                          null != (K = null == (b = er.price) ? void 0 : b.currency)
                                                              ? K
                                                              : k.pK.USD,
                                                      ),
                                                  }),
                                                  fullWidth: !0,
                                              }),
                                              (0, r.jsx)(D.Z, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          ep(j.rZ.GIFT_BUTTON),
                                                          (0, R.P)(
                                                              er,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      h.Z.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                  ],
                                                              },
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        }),
    });
}
