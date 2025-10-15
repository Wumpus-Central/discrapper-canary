n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(979554),
    s = n(887003),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    p = n(393238),
    f = n(410030),
    h = n(204418),
    g = n(70097),
    m = n(594174),
    b = n(626135),
    _ = n(617136),
    O = n(113434),
    E = n(497505),
    v = n(475595),
    y = n(352084),
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
        [D, k] = (0, i.useState)(!1),
        M = (0, i.useRef)(null),
        U = (0, i.useRef)(null),
        G = (0, i.useRef)(null),
        B = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        { ref: H, height: V = 0 } = (0, p.ZP)(),
        F = (0, f.ZP)(),
        z = (0, O.B6)(null == (t = A.userStatus) ? void 0 : t.claimedAt, {
            month: "numeric",
            day: "numeric",
        }),
        W = null != (P = null == (n = A.userStatus) ? void 0 : n.claimedTier) ? P : 0,
        Y = A.config.rewards[W],
        q = (null == Y ? void 0 : Y.type) === s.w.FRACTIONAL_PREMIUM,
        K = (null == Y ? void 0 : Y.type) === s.w.COLLECTIBLE,
        Q = (null == Y ? void 0 : Y.type) === s.w.VIRTUAL_CURRENCY,
        X = null == Y || null == (j = Y.collectibleProduct) || null == (l = j.items) ? void 0 : l[0],
        J = (null == X ? void 0 : X.type) === o.Z.AVATAR_DECORATION ? X : null;
    (0, p.PM)(M, (e) => {
        let { height: t } = e;
        if (!K || null == t || null == U.current || null == M.current || null == G.current) return;
        let n = M.current.getBoundingClientRect(),
            r = U.current.getBoundingClientRect(),
            i = G.current.getBoundingClientRect();
        R((r.top - n.top - i.height) / 2);
    });
    let $ = (0, u.wj)(F),
        ee = (0, i.useMemo)(() => null != A.config.cosponsorMetadata, [A]),
        et = (0, i.useMemo)(() => (0, v.fh)(A, v.eC.REWARD), [A]),
        en = Z ? V + 8 : 0,
        er = (0, _.mH)(E.jn.TROPHY_CASE_CARD),
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
        eo = () => {
            w(!0),
                b.default.track(
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
        es = () => w(!1),
        ec = (e) => {
            k(!0),
                b.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: A.id,
                });
        };
    return null == Y || D
        ? null
        : (0, r.jsx)(d.tEY, {
              children: (0, r.jsxs)("div", {
                  ref: M,
                  tabIndex: 0,
                  onFocus: eo,
                  onBlur: es,
                  onMouseEnter: eo,
                  onMouseLeave: es,
                  className: a()(N.container, { [N.hovered]: Z }),
                  children: [
                      null != B &&
                          K &&
                          null != J &&
                          (0, r.jsx)("div", {
                              ref: G,
                              className: N.decoWrapper,
                              style: { top: L },
                              children: (0, r.jsx)(h.Z, {
                                  avatarDecorationOverride: J,
                                  user: B,
                                  guildId: null,
                              }),
                          }),
                      q
                          ? (0, r.jsx)(y.Z, { className: N.image })
                          : Q
                            ? (0, r.jsx)(I.Z, { className: N.image })
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
                                      reward: Y.name,
                                      claimedDate: z,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
