n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(979554),
    o = n(887003),
    d = n(442837),
    c = n(780384),
    u = n(481060),
    h = n(393238),
    m = n(410030),
    p = n(204418),
    g = n(70097),
    _ = n(594174),
    f = n(626135),
    E = n(617136),
    I = n(113434),
    C = n(497505),
    N = n(475595),
    v = n(352084),
    T = n(685613),
    S = n(981631),
    A = n(388032),
    Z = n(738530);
let x = (0, l.memo)(function (e) {
    var t, n, r, x, b, L;
    let { quest: y } = e,
        [O, P] = (0, l.useState)(!1),
        [R, j] = (0, l.useState)(24),
        [D, w] = (0, l.useState)(!1),
        M = (0, l.useRef)(null),
        k = (0, l.useRef)(null),
        U = (0, l.useRef)(null),
        G = (0, d.e7)([_.default], () => _.default.getCurrentUser()),
        { ref: B, height: V = 0 } = (0, h.Z)(),
        H = (0, m.ZP)(),
        F = (0, I.B6)(null === (t = y.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        z = null !== (b = null === (n = y.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== b ? b : 0,
        W = y.config.rewards[z],
        Y = (null == W ? void 0 : W.type) === o.w.FRACTIONAL_PREMIUM,
        K = (null == W ? void 0 : W.type) === o.w.COLLECTIBLE,
        q = null == W ? void 0 : null === (x = W.collectibleProduct) || void 0 === x ? void 0 : null === (r = x.items) || void 0 === r ? void 0 : r[0],
        X = (null == q ? void 0 : q.type) === s.Z.AVATAR_DECORATION ? q : null;
    (0, h.P)(M, (e) => {
        let { height: t } = e;
        if (!K || null == t || null == k.current || null == M.current || null == U.current) return;
        let n = M.current.getBoundingClientRect(),
            i = k.current.getBoundingClientRect(),
            l = U.current.getBoundingClientRect();
        j((i.top - n.top - l.height) / 2);
    });
    let Q = (0, c.wj)(H),
        J = (0, l.useMemo)(() => null != y.config.cosponsorMetadata, [y]),
        $ = (0, l.useMemo)(() => (0, N.fh)(y, N.eC.REWARD), [y]),
        ee = O ? V + 8 : 0,
        et = () => {
            P(!0),
                f.default.track(S.rMx.QUEST_HOVER, {
                    quest_id: y.id,
                    ...(0, E.mH)(C.jn.TROPHY_CASE_CARD)
                });
        },
        en = () => P(!1),
        ei = (e) => {
            w(!0),
                f.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: y.id
                });
        };
    return null == W || D
        ? null
        : (0, i.jsx)(u.tEY, {
              children: (0, i.jsxs)('div', {
                  ref: M,
                  tabIndex: 0,
                  onFocus: et,
                  onBlur: en,
                  onMouseEnter: et,
                  onMouseLeave: en,
                  className: a()(Z.container, { [Z.hovered]: O }),
                  children: [
                      null != G &&
                          K &&
                          null != X &&
                          (0, i.jsx)('div', {
                              ref: U,
                              className: Z.decoWrapper,
                              style: { top: R },
                              children: (0, i.jsx)(p.Z, {
                                  avatarDecorationOverride: X,
                                  user: G,
                                  guildId: null
                              })
                          }),
                      Y
                          ? (0, i.jsx)(v.Z, { className: Z.image })
                          : $.isAnimated
                            ? (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(g.Z, {
                                      className: Z.assetBlurred,
                                      autoPlay: !1,
                                      children: (0, i.jsx)('source', {
                                          src: $.url,
                                          type: null !== (L = $.mimetype) && void 0 !== L ? L : void 0,
                                          onError: () => ei($.url)
                                      })
                                  })
                              })
                            : (0, i.jsx)('img', {
                                  className: Z.image,
                                  src: $.url,
                                  alt: y.config.messages.questName,
                                  onError: () => ei($.url)
                              }),
                      (0, i.jsx)('div', {
                          className: a()(Z.overlay, {
                              [Z.darkThemeGradient]: Q,
                              [Z.lightThemeGradient]: !Q
                          })
                      }),
                      (0, i.jsx)('div', {
                          ref: k,
                          className: Z.logoContainer,
                          style: { transform: 'translateY(-'.concat(ee, 'px)') },
                          children: (0, i.jsx)(T.ZP, {
                              logotypeClassName: a()(Z.logo, { [Z.logoWithCosponsor]: J }),
                              quest: y,
                              withGameTile: !1
                          })
                      }),
                      (0, i.jsxs)('div', {
                          ref: B,
                          className: Z.details,
                          children: [
                              (0, i.jsx)(u.X6q, {
                                  className: Z.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: A.intl.format(A.t.EAYZAg, { questName: y.config.messages.questName })
                              }),
                              (0, i.jsx)(u.Text, {
                                  variant: 'text-sm/medium',
                                  color: Q ? 'text-muted' : 'always-white',
                                  style: { opacity: Q ? 1 : 0.75 },
                                  children: A.intl.format(A.t.kXVcV1, {
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
