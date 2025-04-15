n.d(t, { Z: () => P }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(979554),
    s = n(887003),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    p = n(393238),
    h = n(410030),
    f = n(204418),
    g = n(70097),
    m = n(594174),
    b = n(626135),
    _ = n(617136),
    E = n(113434),
    O = n(497505),
    N = n(475595),
    y = n(352084),
    I = n(125011),
    v = n(685613),
    C = n(981631),
    S = n(388032),
    T = n(45017);
let P = (0, i.memo)(function (e) {
    var t, n, l, P, j, A;
    let { quest: Z } = e,
        [x, w] = (0, i.useState)(!1),
        [L, R] = (0, i.useState)(24),
        [D, k] = (0, i.useState)(!1),
        M = (0, i.useRef)(null),
        U = (0, i.useRef)(null),
        G = (0, i.useRef)(null),
        W = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        { ref: V, height: B = 0 } = (0, p.ZP)(),
        H = (0, h.ZP)(),
        F = (0, E.B6)(null == (t = Z.userStatus) ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        z = null != (j = null == (n = Z.userStatus) ? void 0 : n.claimedTier) ? j : 0,
        Y = Z.config.rewards[z],
        K = (null == Y ? void 0 : Y.type) === s.w.FRACTIONAL_PREMIUM,
        q = (null == Y ? void 0 : Y.type) === s.w.COLLECTIBLE,
        Q = (null == Y ? void 0 : Y.type) === s.w.VIRTUAL_CURRENCY,
        X = null == Y || null == (P = Y.collectibleProduct) || null == (l = P.items) ? void 0 : l[0],
        J = (null == X ? void 0 : X.type) === o.Z.AVATAR_DECORATION ? X : null;
    (0, p.PM)(M, (e) => {
        let { height: t } = e;
        if (!q || null == t || null == U.current || null == M.current || null == G.current) return;
        let n = M.current.getBoundingClientRect(),
            r = U.current.getBoundingClientRect(),
            i = G.current.getBoundingClientRect();
        R((r.top - n.top - i.height) / 2);
    });
    let $ = (0, u.wj)(H),
        ee = (0, i.useMemo)(() => null != Z.config.cosponsorMetadata, [Z]),
        et = (0, i.useMemo)(() => (0, N.fh)(Z, N.eC.REWARD), [Z]),
        en = x ? B + 8 : 0,
        er = (0, _.mH)(O.jn.TROPHY_CASE_CARD),
        { content_position: ei, row_index: el } = er,
        ea = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(er, ['content_position', 'row_index']),
        eo = () => {
            w(!0),
                b.default.track(
                    C.rMx.QUEST_HOVER,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ quest_id: Z.id }, ea)
                );
        },
        es = () => w(!1),
        ec = (e) => {
            k(!0),
                b.default.track(C.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: Z.id
                });
        };
    return null == Y || D
        ? null
        : (0, r.jsx)(d.tEY, {
              children: (0, r.jsxs)('div', {
                  ref: M,
                  tabIndex: 0,
                  onFocus: eo,
                  onBlur: es,
                  onMouseEnter: eo,
                  onMouseLeave: es,
                  className: a()(T.container, { [T.hovered]: x }),
                  children: [
                      null != W &&
                          q &&
                          null != J &&
                          (0, r.jsx)('div', {
                              ref: G,
                              className: T.decoWrapper,
                              style: { top: L },
                              children: (0, r.jsx)(f.Z, {
                                  avatarDecorationOverride: J,
                                  user: W,
                                  guildId: null
                              })
                          }),
                      K
                          ? (0, r.jsx)(y.Z, { className: T.image })
                          : Q
                            ? (0, r.jsx)(I.Z, { className: T.image })
                            : et.isAnimated
                              ? (0, r.jsx)(g.Z, {
                                    className: T.assetBlurred,
                                    autoPlay: !1,
                                    children: (0, r.jsx)('source', {
                                        src: et.url,
                                        type: null != (A = et.mimetype) ? A : void 0,
                                        onError: () => ec(et.url)
                                    })
                                })
                              : (0, r.jsx)('img', {
                                    className: T.image,
                                    src: et.url,
                                    alt: Z.config.messages.questName,
                                    onError: () => ec(et.url)
                                }),
                      (0, r.jsx)('div', {
                          className: a()(T.overlay, {
                              [T.darkThemeGradient]: $,
                              [T.lightThemeGradient]: !$
                          })
                      }),
                      (0, r.jsx)('div', {
                          ref: U,
                          className: T.logoContainer,
                          style: { transform: 'translateY(-'.concat(en, 'px)') },
                          children: (0, r.jsx)(v.ZP, {
                              logotypeClassName: a()(T.logo, { [T.logoWithCosponsor]: ee }),
                              quest: Z,
                              withGameTile: !1
                          })
                      }),
                      (0, r.jsxs)('div', {
                          ref: V,
                          className: T.details,
                          children: [
                              (0, r.jsx)(d.X6q, {
                                  className: T.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: S.NW.format(S.t.EAYZAg, { questName: Z.config.messages.questName })
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: $ ? 'text-muted' : 'always-white',
                                  style: { opacity: $ ? 1 : 0.75 },
                                  children: S.NW.format(S.t.kXVcV1, {
                                      reward: Y.name,
                                      claimedDate: F
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
