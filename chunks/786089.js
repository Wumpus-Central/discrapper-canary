n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(979554),
    o = n(887003),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    p = n(393238),
    f = n(410030),
    h = n(204418),
    g = n(70097),
    m = n(594174),
    _ = n(626135),
    b = n(617136),
    E = n(113434),
    O = n(497505),
    y = n(475595),
    v = n(352084),
    I = n(125011),
    C = n(685613),
    S = n(981631),
    T = n(388032),
    N = n(199679);
let j = (0, i.memo)(function (e) {
    var t, n, l, j, P, x;
    let { quest: A } = e,
        [Z, w] = (0, i.useState)(!1),
        [L, R] = (0, i.useState)(24),
        [D, M] = (0, i.useState)(!1),
        k = (0, i.useRef)(null),
        U = (0, i.useRef)(null),
        G = (0, i.useRef)(null),
        B = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        { ref: H, height: V = 0 } = (0, p.ZP)(),
        F = (0, f.ZP)(),
        z = (0, E.B6)(null == (t = A.userStatus) ? void 0 : t.claimedAt, {
            month: "numeric",
            day: "numeric",
        }),
        Y = null != (P = null == (n = A.userStatus) ? void 0 : n.claimedTier) ? P : 0,
        W = A.config.rewards[Y],
        q = (null == W ? void 0 : W.type) === o.w.FRACTIONAL_PREMIUM,
        K = (null == W ? void 0 : W.type) === o.w.COLLECTIBLE,
        Q = (null == W ? void 0 : W.type) === o.w.VIRTUAL_CURRENCY,
        J = null == W || null == (j = W.collectibleProduct) || null == (l = j.items) ? void 0 : l[0],
        X = (null == J ? void 0 : J.type) === s.Z.AVATAR_DECORATION ? J : null;
    (0, p.PM)(k, (e) => {
        let { height: t } = e;
        if (!K || null == t || null == U.current || null == k.current || null == G.current) return;
        let n = k.current.getBoundingClientRect(),
            r = U.current.getBoundingClientRect(),
            i = G.current.getBoundingClientRect();
        R((r.top - n.top - i.height) / 2);
    });
    let $ = (0, u.wj)(F),
        ee = (0, i.useMemo)(() => null != A.config.cosponsorMetadata, [A]),
        et = (0, i.useMemo)(() => (0, y.fh)(A, y.eC.REWARD), [A]),
        en = Z ? V + 8 : 0,
        er = (0, b.mH)(O.jn.TROPHY_CASE_CARD),
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(er, ["content_position", "row_index"]),
        es = () => {
            w(!0),
                _.default.track(
                    S.rMx.QUEST_HOVER,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ quest_id: A.id }, ea),
                );
        },
        eo = () => {
            w(!1);
        },
        ec = (e) => {
            M(!0),
                _.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: A.id,
                });
        };
    return null == W || D
        ? null
        : (0, r.jsx)(d.tEY, {
              children: (0, r.jsxs)("div", {
                  ref: k,
                  tabIndex: 0,
                  onFocus: es,
                  onBlur: eo,
                  onMouseEnter: es,
                  onMouseLeave: eo,
                  className: a()(N.container, { [N.hovered]: Z }),
                  children: [
                      null != B &&
                          K &&
                          null != X &&
                          (0, r.jsx)("div", {
                              ref: G,
                              className: N.decoWrapper,
                              style: { top: L },
                              children: (0, r.jsx)(h.Z, {
                                  avatarDecorationOverride: X,
                                  user: B,
                                  guildId: null,
                                  animateOnHover: !Z,
                              }),
                          }),
                      q
                          ? (0, r.jsx)(v.Z, { className: N.image })
                          : Q
                            ? (0, r.jsx)(I.Z, {
                                  className: N.image,
                                  isAnimated: Z,
                                  questName: A.config.messages.questName,
                              })
                            : et.isAnimated
                              ? (0, r.jsx)(g.Z, {
                                    className: N.assetBlurred,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: et.url,
                                        type: null != (x = et.mimetype) ? x : void 0,
                                        onError: () => ec(et.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: N.image,
                                    src: et.url,
                                    alt: A.config.messages.questName,
                                    onError: () => ec(et.url),
                                }),
                      (0, r.jsx)("div", {
                          className: a()(N.overlay, {
                              [N.darkThemeGradient]: $,
                              [N.lightThemeGradient]: !$,
                          }),
                      }),
                      (0, r.jsx)("div", {
                          ref: U,
                          className: N.logoContainer,
                          style: { transform: "translateY(-".concat(en, "px)") },
                          children: (0, r.jsx)(C.ZP, {
                              logotypeClassName: a()(N.logo, { [N.logoWithCosponsor]: ee }),
                              quest: A,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: H,
                          className: N.details,
                          children: [
                              (0, r.jsx)(d.Heading, {
                                  className: N.title,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: T.intl.format(T.t.EAYZAr, { questName: A.config.messages.questName }),
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: $ ? "text-muted" : "always-white",
                                  style: { opacity: $ ? 1 : 0.75 },
                                  children: T.intl.format(T.t["kXVcV+"], {
                                      reward: W.name,
                                      claimedDate: z,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
