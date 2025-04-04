n.d(t, { Z: () => T }), n(388685);
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
    I = n(685613),
    v = n(981631),
    C = n(388032),
    S = n(45017);
let T = (0, i.memo)(function (e) {
    var t, n, l, T, P, j;
    let { quest: A } = e,
        [Z, x] = (0, i.useState)(!1),
        [w, L] = (0, i.useState)(24),
        [R, D] = (0, i.useState)(!1),
        k = (0, i.useRef)(null),
        M = (0, i.useRef)(null),
        U = (0, i.useRef)(null),
        G = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        { ref: W, height: V = 0 } = (0, p.Z)(),
        B = (0, h.ZP)(),
        H = (0, E.B6)(null == (t = A.userStatus) ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        F = null != (P = null == (n = A.userStatus) ? void 0 : n.claimedTier) ? P : 0,
        z = A.config.rewards[F],
        Y = (null == z ? void 0 : z.type) === s.w.FRACTIONAL_PREMIUM,
        K = (null == z ? void 0 : z.type) === s.w.COLLECTIBLE,
        q = null == z || null == (T = z.collectibleProduct) || null == (l = T.items) ? void 0 : l[0],
        Q = (null == q ? void 0 : q.type) === o.Z.AVATAR_DECORATION ? q : null;
    (0, p.P)(k, (e) => {
        let { height: t } = e;
        if (!K || null == t || null == M.current || null == k.current || null == U.current) return;
        let n = k.current.getBoundingClientRect(),
            r = M.current.getBoundingClientRect(),
            i = U.current.getBoundingClientRect();
        L((r.top - n.top - i.height) / 2);
    });
    let X = (0, u.wj)(B),
        J = (0, i.useMemo)(() => null != A.config.cosponsorMetadata, [A]),
        $ = (0, i.useMemo)(() => (0, N.fh)(A, N.eC.REWARD), [A]),
        ee = Z ? V + 8 : 0,
        et = (0, _.mH)(O.jn.TROPHY_CASE_CARD),
        { content_position: en, row_index: er } = et,
        ei = (function (e, t) {
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
        })(et, ['content_position', 'row_index']),
        el = () => {
            x(!0),
                b.default.track(
                    v.rMx.QUEST_HOVER,
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
                    })({ quest_id: A.id }, ei)
                );
        },
        ea = () => x(!1),
        eo = (e) => {
            D(!0),
                b.default.track(v.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: A.id
                });
        };
    return null == z || R
        ? null
        : (0, r.jsx)(d.tEY, {
              children: (0, r.jsxs)('div', {
                  ref: k,
                  tabIndex: 0,
                  onFocus: el,
                  onBlur: ea,
                  onMouseEnter: el,
                  onMouseLeave: ea,
                  className: a()(S.container, { [S.hovered]: Z }),
                  children: [
                      null != G &&
                          K &&
                          null != Q &&
                          (0, r.jsx)('div', {
                              ref: U,
                              className: S.decoWrapper,
                              style: { top: w },
                              children: (0, r.jsx)(f.Z, {
                                  avatarDecorationOverride: Q,
                                  user: G,
                                  guildId: null
                              })
                          }),
                      Y
                          ? (0, r.jsx)(y.Z, { className: S.image })
                          : $.isAnimated
                            ? (0, r.jsx)(g.Z, {
                                  className: S.assetBlurred,
                                  autoPlay: !1,
                                  children: (0, r.jsx)('source', {
                                      src: $.url,
                                      type: null != (j = $.mimetype) ? j : void 0,
                                      onError: () => eo($.url)
                                  })
                              })
                            : (0, r.jsx)('img', {
                                  className: S.image,
                                  src: $.url,
                                  alt: A.config.messages.questName,
                                  onError: () => eo($.url)
                              }),
                      (0, r.jsx)('div', {
                          className: a()(S.overlay, {
                              [S.darkThemeGradient]: X,
                              [S.lightThemeGradient]: !X
                          })
                      }),
                      (0, r.jsx)('div', {
                          ref: M,
                          className: S.logoContainer,
                          style: { transform: 'translateY(-'.concat(ee, 'px)') },
                          children: (0, r.jsx)(I.ZP, {
                              logotypeClassName: a()(S.logo, { [S.logoWithCosponsor]: J }),
                              quest: A,
                              withGameTile: !1
                          })
                      }),
                      (0, r.jsxs)('div', {
                          ref: W,
                          className: S.details,
                          children: [
                              (0, r.jsx)(d.X6q, {
                                  className: S.title,
                                  variant: 'heading-md/semibold',
                                  color: 'always-white',
                                  children: C.NW.format(C.t.EAYZAg, { questName: A.config.messages.questName })
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: X ? 'text-muted' : 'always-white',
                                  style: { opacity: X ? 1 : 0.75 },
                                  children: C.NW.format(C.t.kXVcV1, {
                                      reward: z.name,
                                      claimedDate: H
                                  })
                              })
                          ]
                      })
                  ]
              })
          });
});
