n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(979554),
    l = n(887003),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    f = n(393238),
    _ = n(410030),
    p = n(204418),
    h = n(70097),
    m = n(594174),
    g = n(626135),
    E = n(617136),
    b = n(113434),
    y = n(497505),
    O = n(475595),
    v = n(352084),
    I = n(125011),
    T = n(685613),
    S = n(981631),
    A = n(388032),
    C = n(199679);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function D(e) {
    var t, n, a, N, w, D;
    let { quest: x } = e,
        [L, j] = (0, i.useState)(!1),
        [M, k] = (0, i.useState)(24),
        [U, G] = (0, i.useState)(!1),
        B = (0, i.useRef)(null),
        Z = (0, i.useRef)(null),
        F = (0, i.useRef)(null),
        V = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        { ref: H, height: Y = 0 } = (0, f.ZP)(),
        W = (0, _.ZP)(),
        K = (0, b.B6)(null == (t = x.userStatus) ? void 0 : t.claimedAt, {
            month: "numeric",
            day: "numeric",
        }),
        z = null != (w = null == (n = x.userStatus) ? void 0 : n.claimedTier) ? w : 0,
        q = x.config.rewards[z],
        X = (null == q ? void 0 : q.type) === l.w.FRACTIONAL_PREMIUM,
        Q = (null == q ? void 0 : q.type) === l.w.COLLECTIBLE,
        J = (null == q ? void 0 : q.type) === l.w.VIRTUAL_CURRENCY,
        $ = null == q || null == (N = q.collectibleProduct) || null == (a = N.items) ? void 0 : a[0],
        ee = (null == $ ? void 0 : $.type) === s.Z.AVATAR_DECORATION ? $ : null;
    (0, f.PM)(B, (e) => {
        let { height: t } = e;
        if (!Q || null == t || null == Z.current || null == B.current || null == F.current) return;
        let n = B.current.getBoundingClientRect(),
            r = Z.current.getBoundingClientRect(),
            i = F.current.getBoundingClientRect();
        k((r.top - n.top - i.height) / 2);
    });
    let et = (0, u.wj)(W),
        en = (0, i.useMemo)(() => null != x.config.cosponsorMetadata, [x]),
        er = (0, i.useMemo)(() => (0, O.fh)(x, O.eC.REWARD), [x]),
        ei = L ? Y + 8 : 0,
        ea = (0, E.mH)(y.jn.TROPHY_CASE_CARD),
        { content_position: eo, row_index: es } = ea,
        el = P(ea, ["content_position", "row_index"]),
        ec = () => {
            j(!0), g.default.track(S.rMx.QUEST_HOVER, R({ quest_id: x.id }, el));
        },
        eu = () => j(!1),
        ed = (e) => {
            G(!0),
                g.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: x.id,
                });
        };
    return null == q || U
        ? null
        : (0, r.jsx)(d.tEY, {
              children: (0, r.jsxs)("div", {
                  ref: B,
                  tabIndex: 0,
                  onFocus: ec,
                  onBlur: eu,
                  onMouseEnter: ec,
                  onMouseLeave: eu,
                  className: o()(C.container, { [C.hovered]: L }),
                  children: [
                      null != V &&
                          Q &&
                          null != ee &&
                          (0, r.jsx)("div", {
                              ref: F,
                              className: C.decoWrapper,
                              style: { top: M },
                              children: (0, r.jsx)(p.Z, {
                                  avatarDecorationOverride: ee,
                                  user: V,
                                  guildId: null,
                              }),
                          }),
                      X
                          ? (0, r.jsx)(v.Z, { className: C.image })
                          : J
                            ? (0, r.jsx)(I.Z, { className: C.image })
                            : er.isAnimated
                              ? (0, r.jsx)(h.Z, {
                                    className: C.assetBlurred,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: er.url,
                                        type: null != (D = er.mimetype) ? D : void 0,
                                        onError: () => ed(er.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: C.image,
                                    src: er.url,
                                    alt: x.config.messages.questName,
                                    onError: () => ed(er.url),
                                }),
                      (0, r.jsx)("div", {
                          className: o()(C.overlay, {
                              [C.darkThemeGradient]: et,
                              [C.lightThemeGradient]: !et,
                          }),
                      }),
                      (0, r.jsx)("div", {
                          ref: Z,
                          className: C.logoContainer,
                          style: { transform: "translateY(-".concat(ei, "px)") },
                          children: (0, r.jsx)(T.ZP, {
                              logotypeClassName: o()(C.logo, { [C.logoWithCosponsor]: en }),
                              quest: x,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: H,
                          className: C.details,
                          children: [
                              (0, r.jsx)(d.X6q, {
                                  className: C.title,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: A.intl.format(A.t.EAYZAg, { questName: x.config.messages.questName }),
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: et ? "text-muted" : "always-white",
                                  style: { opacity: et ? 1 : 0.75 },
                                  children: A.intl.format(A.t.kXVcV1, {
                                      reward: q.name,
                                      claimedDate: K,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
let x = (0, i.memo)(D);
