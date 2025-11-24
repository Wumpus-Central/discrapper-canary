n.d(t, {
    C: () => z,
    Z: () => W,
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
    _ = n(622535),
    p = n(481060),
    h = n(607070),
    m = n(100527),
    g = n(906732),
    E = n(220082),
    b = n(143941),
    y = n(104505),
    O = n(210887),
    v = n(55563),
    I = n(626135),
    T = n(937615),
    S = n(73346),
    A = n(591759),
    C = n(164670),
    N = n(590961),
    R = n(210218),
    P = n(705338),
    D = n(882508),
    w = n(594914),
    L = n(848118),
    x = n(433386),
    M = n(655409),
    k = n(785873),
    j = n(181268),
    U = n(981631),
    G = n(231338),
    B = n(388032),
    Z = n(450433);
let F = 80,
    V = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    H = 30,
    Y = 3;
var W = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function K(e) {
    let { sku: t, isCardHovered: n, onClick: i } = e;
    return (0, r.jsx)("div", {
        className: Z.wishlistButtonContainer,
        children: (0, r.jsx)(b.s, {
            skuId: t.id,
            isCardHovered: n,
            nuxGraphic: (0, D.c)(t),
            onClick: i,
        }),
    });
}
function z(e) {
    var t, n, a, s, c, b, D, W, z, q, X, Q, J, $, ee, et;
    let {
            positionInSection: en,
            applicationId: er,
            skuId: ei,
            variant: ea = 0,
            guildId: eo,
            onClick: es,
            className: el,
            analyticsLocations: ec,
        } = e,
        eu = i.useRef(null),
        ed = (0, f.e7)([v.Z], () => v.Z.get(ei)),
        ef = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)),
        e_ = (0, f.e7)([h.Z], () => h.Z.useReducedMotion),
        { isHoveringOrFocusing: ep } = (0, y.Z)(eu),
        eh = (0, N.oR)(),
        { analyticsLocations: em } = (0, g.ZP)(null != ec ? ec : []),
        eg = i.useRef({
            positionInSection: en,
            analyticsLocations: em,
        }),
        { handleCardHover: eE, handleCardUnhover: eb } = (0, M.A)(ei, eh, en, em),
        { handleCardVisibilityChange: ey } = (0, k.X)(ei, eh, en, em),
        eO = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = eg.current,
                    {
                        sessionId: r,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: o,
                        pageSection: s,
                        pageSectionTitle: l,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = eh;
                I.default.track(U.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: ei,
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
            [ei, eh],
        ),
        { primaryIconAsset: ev, primaryIconLabel: eI } = i.useMemo(() => (0, C.FE)(ed, er), [ed, er]),
        eT = (0, f.e7)([R.Z], () => {
            var e, t;
            return null != eo && null != (t = null == (e = R.Z.getStorefrontState(eo)) ? void 0 : e.activePage) ? t : 0;
        }),
        eS = i.useMemo(() => {
            var e, t;
            if (
                (null == ed || null == (t = ed.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = Math.max(u()(ed.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
            return r <= Y ? B.intl.format(B.t.PWw4Vp, { days: r }) : null;
        }, [null == ed || null == (n = ed.tenantMetadata) || null == (t = n.socialLayer) ? void 0 : t.expiresAt]),
        eA =
            (null == ed || null == (s = ed.tenantMetadata) || null == (a = s.socialLayer)
                ? void 0
                : a.cardBackgroundImageAssetId) != null &&
            null !=
                (X = A.Z.toURLSafe(
                    (0, S._W)(
                        er,
                        null == ed ? void 0 : ed.tenantMetadata.socialLayer.cardBackgroundImageAssetId,
                        1024,
                        "png",
                    ),
                ))
                ? X
                : void 0,
        [eC, eN] = (0, E.Cf)(null == eA ? void 0 : eA.toString(), "#000000"),
        eR = i.useMemo(() => {
            let e = o()(eC).darken(1.5).alpha(0.9).hex(),
                t = o()(eC).alpha(0).hex(),
                [n, r] = V[ea];
            return 0 === n && 0 === r
                ? "none"
                : "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(H + n, "%, ")
                      .concat(t, " ")
                      .concat(H + r, "%)");
        }, [eC, ea]),
        eP = i.useCallback(() => {
            eO(j.rZ.WISHLIST_BUTTON);
        }, [eO]),
        eD = i.useCallback(
            (e) => {
                if ((eO(j.rZ.CARD), null != es)) return void es(e);
                null != eo &&
                    (0, P.Z)({
                        guildId: eo,
                        pageIndex: eT,
                        skuId: ei,
                        slug: null == ed ? void 0 : ed.slug,
                    });
            },
            [eO, eo, eT, ei, null == ed ? void 0 : ed.slug, es],
        );
    if (null == ed) return null;
    let ew =
        (null == (b = ed.tenantMetadata) || null == (c = b.socialLayer) ? void 0 : c.cardImageAssetId) != null &&
        null != (Q = A.Z.toURLSafe((0, S._W)(er, ed.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")))
            ? Q
            : void 0;
    return (0, r.jsx)(_.$, {
        innerRef: eu,
        onChange: ey,
        threshold: 0,
        children: (0, r.jsx)(d.tEY, {
            children: (0, r.jsxs)(p.kL8, {
                onClick: eD,
                onMouseEnter: eE,
                onMouseLeave: eb,
                className: l()(
                    Z.card,
                    {
                        [Z.cardAnimation]: !e_ && 2 !== ea,
                        [Z.cardDark]: ef,
                        [ef ? Z.cardDarkHighlighted : Z.cardHighlighted]: ep,
                        [Z.cardSmall]: 0 === ea,
                        [Z.cardMedium]: 1 === ea,
                        [Z.cardEmbedded]: 2 === ea,
                    },
                    el,
                ),
                ref: eu,
                "aria-label": ed.name,
                children: [
                    null != eS &&
                        (0, r.jsx)(p.IGR, {
                            text: eS,
                            disableColor: !0,
                            className: Z.badge,
                        }),
                    (0, r.jsx)(K, {
                        sku: ed,
                        isCardHovered: ep,
                        onClick: eP,
                    }),
                    null != ew
                        ? (0, r.jsx)(L.p, {
                              containerClassName: Z.cardImageContainer,
                              foregroundImageClassName: Z.cardImage,
                              cardImage: ew,
                              altText: ed.name,
                              shape: "custom",
                              backgroundImageClassName: Z.cardBackgroundImage,
                              cardBackgroundImage: eA,
                          })
                        : (0, r.jsx)("div", {
                              className: Z.ticketIconContainer,
                              children: (0, r.jsx)(d.Prq, {
                                  color: "white",
                                  size: "custom",
                                  height: F,
                                  width: F,
                                  className: Z.ticketIcon,
                              }),
                          }),
                    2 !== ea
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: Z.bottomGradient,
                                      style: { background: eR },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: Z.details,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: Z.titleContainer,
                                              children: (0, r.jsx)(p.Text, {
                                                  color: "always-white",
                                                  variant: "text-md/medium",
                                                  lineClamp: 1,
                                                  children: ed.name,
                                              }),
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: Z.descriptionContainer,
                                              children: [
                                                  null != ev &&
                                                      (0, r.jsx)("img", {
                                                          src: ev.toString(),
                                                          alt: eI,
                                                          className: Z.iconAsset,
                                                      }),
                                                  (0, r.jsx)(p.Text, {
                                                      variant: "text-md/bold",
                                                      color: "always-white",
                                                      lineClamp: 1,
                                                      children: (0, T.T4)(
                                                          null != (J = null == (D = ed.price) ? void 0 : D.amount)
                                                              ? J
                                                              : 0,
                                                          null != ($ = null == (W = ed.price) ? void 0 : W.currency)
                                                              ? $
                                                              : G.pK.USD,
                                                      ),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      className: Z.buttonHover,
                                      children: (0, r.jsxs)(d.hE2, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(d.zxk, {
                                                  variant: "primary",
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          eO(j.rZ.BUY_BUTTON),
                                                          (0, w.P)(
                                                              ed,
                                                              { isGift: !1 },
                                                              {
                                                                  analyticsLocations: [
                                                                      m.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                              },
                                                          );
                                                  },
                                                  text: B.intl.format(B.t.Xp5WTn, {
                                                      price: (0, T.T4)(
                                                          null != (ee = null == (z = ed.price) ? void 0 : z.amount)
                                                              ? ee
                                                              : 0,
                                                          null != (et = null == (q = ed.price) ? void 0 : q.currency)
                                                              ? et
                                                              : G.pK.USD,
                                                      ),
                                                  }),
                                                  fullWidth: !0,
                                              }),
                                              (0, r.jsx)(x.Z, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eO(j.rZ.GIFT_BUTTON),
                                                          (0, w.P)(
                                                              ed,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      m.Z.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
