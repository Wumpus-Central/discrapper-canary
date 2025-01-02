n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(979554),
    s = n(887003),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    h = n(393238),
    m = n(410030),
    p = n(204418),
    g = n(70097),
    f = n(594174),
    _ = n(626135),
    E = n(617136),
    I = n(113434),
    C = n(497505),
    v = n(475595),
    S = n(352084),
    N = n(685613),
    T = n(981631),
    b = n(388032),
    x = n(625844);
t.Z = (0, r.memo)(function (e) {
    var t, n, l, A, Z, L;
    let { quest: P } = e,
        [y, O] = (0, r.useState)(!1),
        [R, j] = (0, r.useState)(24),
        [D, M] = (0, r.useState)(!1),
        w = (0, r.useRef)(null),
        k = (0, r.useRef)(null),
        U = (0, r.useRef)(null),
        G = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        { ref: B, height: H = 0 } = (0, h.Z)(),
        V = (0, m.ZP)(),
        F = (0, I.B6)(null === (t = P.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        z = null !== (Z = null === (n = P.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== Z ? Z : 0,
        W = P.config.rewards[z],
        Y = (null == W ? void 0 : W.type) === s.w.FRACTIONAL_PREMIUM,
        K = (null == W ? void 0 : W.type) === s.w.COLLECTIBLE,
        q = null == W ? void 0 : null === (A = W.collectibleProduct) || void 0 === A ? void 0 : null === (l = A.items) || void 0 === l ? void 0 : l[0],
        X = (null == q ? void 0 : q.type) === o.Z.AVATAR_DECORATION ? q : null;
    (0, h.P)(w, (e) => {
        let { height: t } = e;
        if (!K || null == t || null == k.current || null == w.current || null == U.current) return;
        let n = w.current.getBoundingClientRect(),
            i = k.current.getBoundingClientRect(),
            r = U.current.getBoundingClientRect();
        j((i.top - n.top - r.height) / 2);
    });
    let Q = (0, d.wj)(V),
        J = (0, r.useMemo)(() => null != P.config.cosponsorMetadata, [P]),
        $ = (0, r.useMemo)(() => (0, v.fh)(P, v.eC.REWARD), [P]),
        ee = y ? H + 8 : 0,
        et = () => {
            O(!0),
                _.default.track(T.rMx.QUEST_HOVER, {
                    quest_id: P.id,
                    ...(0, E.mH)(C.jn.TROPHY_CASE_CARD)
                });
        },
        en = () => O(!1),
        ei = (e) => {
            M(!0),
                _.default.track(T.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: P.id
                });
        };
    return null == W || D
        ? null
        : (0, i.jsx)(u.FocusRing, {
              children: (0, i.jsxs)('div', {
                  ref: w,
                  tabIndex: 0,
                  onFocus: et,
                  onBlur: en,
                  onMouseEnter: et,
                  onMouseLeave: en,
                  className: a()(x.container, { [x.hovered]: y }),
                  children: [
                      null != G &&
                          K &&
                          null != X &&
                          (0, i.jsx)('div', {
                              ref: U,
                              className: x.decoWrapper,
                              style: { top: R },
                              children: (0, i.jsx)(p.Z, {
                                  avatarDecorationOverride: X,
                                  user: G,
                                  guildId: null
                              })
                          }),
                      Y
                          ? (0, i.jsx)(S.Z, { className: x.image })
                          : $.isAnimated
                            ? (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(g.Z, {
                                      className: x.assetBlurred,
                                      autoPlay: !1,
                                      children: (0, i.jsx)('source', {
                                          src: $.url,
                                          type: null !== (L = $.mimetype) && void 0 !== L ? L : void 0,
                                          onError: () => ei($.url)
                                      })
                                  })
                              })
                            : (0, i.jsx)('img', {
                                  className: x.image,
                                  src: $.url,
                                  alt: P.config.messages.questName,
                                  onError: () => ei($.url)
                              }),
                      (0, i.jsx)('div', {
                          className: a()(x.overlay, {
                              [x.darkThemeGradient]: Q,
                              [x.lightThemeGradient]: !Q
                          })
                      }),
                      (0, i.jsx)('div', {
                          ref: k,
                          className: x.logoContainer,
                          style: { transform: 'translateY(-'.concat(ee, 'px)') },
                          children: (0, i.jsx)(N.ZP, {
                              logotypeClassName: a()(x.logo, { [x.logoWithCosponsor]: J }),
                              quest: P,
                              withGameTile: !1
                          })
                      }),
                      (0, i.jsxs)('div', {
                          ref: B,
                          className: x.details,
                          children: [
                              (0, i.jsx)(u.Heading, {
                                  className: x.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: b.intl.format(b.t.EAYZAg, { questName: P.config.messages.questName })
                              }),
                              (0, i.jsx)(u.Text, {
                                  variant: 'text-sm/medium',
                                  color: Q ? 'text-muted' : 'always-white',
                                  style: { opacity: Q ? 1 : 0.75 },
                                  children: b.intl.format(b.t.kXVcV1, {
                                      reward: W.name,
                                      claimedDate: F
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
