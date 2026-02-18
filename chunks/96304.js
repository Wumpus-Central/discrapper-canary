t.d(s, { A: () => eE, l: () => eh }), t(321073);
var i = t(627968),
    r = t(64700),
    a = t(503698),
    l = t.n(a),
    n = t(284009),
    o = t.n(n),
    c = t(735438),
    m = t.n(c),
    u = t(311907),
    d = t(732955),
    x = t(582754),
    p = t(397927),
    j = t(73153),
    f = t(923408),
    A = t(736653),
    _ = t(775602),
    N = t(793574),
    I = t(688810),
    T = t(822123),
    C = t(770335),
    h = t(263063),
    E = t(931959),
    g = t(148355),
    v = t(950191),
    U = t(576622),
    M = t(270574),
    L = t(915614),
    R = t(946356),
    y = t(939496),
    P = t(780964),
    b = t(840065),
    w = t(71393),
    S = t(287809),
    V = t(178368),
    D = t(954571),
    k = t(486020),
    O = t(975571),
    K = t(927578),
    z = t(837921),
    F = t(112848),
    H = t(704640),
    W = t(149757),
    G = t(30084),
    B = t(683793),
    J = t(499369),
    Z = t(788868),
    X = t(652215),
    Y = t(985018),
    $ = t(565274),
    q = t(324770),
    Q = t(838436),
    ee = t(376038),
    es = t(66889),
    et = t(578586),
    ei = t(955868),
    er = t(631294),
    ea = t(751297),
    el = t(943298),
    en = t(33487),
    eo = t(581820);
let ec = z.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    em = {
        boostItemVisual: et,
        emojiStickersVisual: ei,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: ea,
        PL: el,
        TR: eo,
    },
    eu = {
        boostItemVisual: q,
        emojiStickersVisual: Q,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: ee,
        uploadsMessagesItemVisualV2: es,
        PL: el,
        TR: eo,
    };
function ed() {
    let e = (0, A.Ay)();
    return (0, x.Mw)(e) ? eu : em;
}
function ex(e) {
    let { description: s, onLearnMore: t, renderVisual: r } = e,
        a = eC();
    return (0, i.jsxs)("div", {
        className: l()($.Kw, { [$.u0]: a }),
        children: [
            (0, i.jsxs)("div", {
                className: l()($.p3, { [$.u0]: a }),
                children: [
                    (0, i.jsx)(p.Text, { variant: "text-md/normal", children: s }),
                    (0, i.jsx)(p.QWc, { onClick: t, text: Y.intl.string(Y.t.hvVgAZ) }),
                ],
            }),
            (0, i.jsx)("div", { className: l()($.aS, { [$.u0]: a }), children: r() }),
        ],
    });
}
function ep(e) {
    let { ...s } = e,
        { theme: t } = (0, y.E)(),
        r = (0, p.rdh)(p.LU0.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, i.jsx)(p.tvc, { size: "md", ...s, color: r });
}
function ej(e) {
    let s,
        { currentUser: t, premiumType: r, onClose: a } = e,
        l = (0, v.Ay)(t.id),
        n = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        o = r === Z.PremiumTypes.TIER_1;
    return (
        (s =
            l?.premiumType === Z.PremiumTypes.TIER_2
                ? (0, i.jsxs)(R.A, {
                      user: t,
                      displayProfile: l,
                      forceShowPremium: !0,
                      themeType: null,
                      className: $.Kq,
                      children: [
                          (0, i.jsx)(L.o, {
                              user: t,
                              displayProfile: l,
                              avatarSize: p._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, i.jsx)(ec, {
                              className: $.jU,
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !n),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, i.jsxs)("div", {
                              className: $.b$,
                              children: [
                                  (0, i.jsx)(M.A, { className: $.Bj, usernameClass: $.TE, name: t.toString() }),
                                  (0, i.jsx)(ep, { className: $.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)("div", {
                      className: $.xl,
                      children: [
                          (0, i.jsx)(ec, {
                              className: $.wK,
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !n),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, i.jsxs)("div", {
                              className: $.Un,
                              children: [
                                  (0, i.jsx)(M.A, { className: $.Bj, usernameClass: $.TE, name: t.toString() }),
                                  (0, i.jsx)(p.tvc, { size: "md", color: "currentColor", className: $.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, i.jsx)(ex, {
            description: o ? Y.intl.format(Y.t.xCaYwE, {}) : Y.intl.format(Y.t["gpqr+n"], {}),
            onLearnMore: () => {
                a(),
                    (0, b.openUserSettings)(P.X.PROFILE_PANEL, { section: X.nc_.PROFILE_CUSTOMIZATION }),
                    D.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function ef(e) {
    let { currentUser: s, onClose: t } = e,
        r = (0, F.$F)(),
        { analyticsLocations: a } = (0, I.Ay)(N.A.PREMIUM_UNCANCEL_MODAL),
        l = (0, F.Xb)(),
        n = r?.id ?? Z.Ac.PREMIUM_TENURE_1_MONTH,
        o = (0, H.A)(n);
    if (!(0, K.YE)(s, Z.PremiumTypes.TIER_2) || null == l) return null;
    let c = r?.status ?? F.Wo.UPCOMING,
        m = r?.nameUnformatted ?? Z.VD[Z.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        u = (0, W.I)(n),
        d = Y.intl.string(m),
        x = c === F.Wo.EARNED,
        j = null != r && "daysLeft" in r ? r.daysLeft : 1,
        f = Y.t.pwkxYF;
    if (x) {
        let e = Math.max((0, K.To)(l), 1);
        e >= 365 ? ((j = Math.floor(e / 365)), (f = Y.t["/ojPfi"])) : ((j = e), (f = Y.t.IItWYo));
    }
    return (0, i.jsx)(ex, {
        description: Y.intl.format(f, { time: j }),
        onLearnMore: () => {
            t(),
                (0, G.D)({ analyticsLocations: a, displayProfile: null }),
                D.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, i.jsx)(p.hLv, {
                className: $.nc,
                color: o,
                children: (0, i.jsx)("img", { alt: d, src: u, className: $.pq }),
            }),
    });
}
function eA(e) {
    let { premiumType: s } = e,
        t = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        r = (0, T.Fj)(null)
            .filter((e) => e.type === C.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, u.yK)([E.A], () => E.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)),
        l = ed().emojiStickersVisual,
        n = s === Z.PremiumTypes.TIER_1;
    return (0, i.jsx)(ex, {
        description: n ? Y.intl.format(Y.t.couiKJ, {}) : Y.intl.format(Y.t["0hUHi6"], {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(X.MVz.PREMIUM_DETAILS)),
                D.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != r && r.length > 0) || (!n && null != a && a.length > 0)
                ? (0, i.jsxs)("div", {
                      className: $.iB,
                      children: [
                          r
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : k.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, i.jsx)("img", { className: $.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          n
                              ? null
                              : a.map((e) =>
                                    (0, i.jsx)(
                                        g.A,
                                        { disableAnimation: t, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, i.jsx)("img", { className: $.OP, alt: "", src: l }),
    });
}
function e_(e) {
    let { premiumType: s, onClose: t } = e;
    r.useEffect(() => j.h.wait(() => (0, f.CD)()), []);
    let a = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        [n, o] = (0, u.yK)([V.A, w.A], () => {
            let e = V.A.boostSlots,
                s = new Map();
            m()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != w.A.getGuild(e)) {
                        let t = s.get(e) ?? 0;
                        s.set(e, t + 1);
                    }
                });
            let t = null,
                i = 0;
            return (
                s.size > 0 && ([t, i] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [w.A.getGuild(t), i]
            );
        }),
        c = null != n && o > 0,
        d = ed().boostItemVisual;
    return (0, i.jsx)(ex, {
        description: s === Z.PremiumTypes.TIER_1 ? Y.intl.format(Y.t.K4Hv69, {}) : Y.intl.format(Y.t.wRxEDW, {}),
        onLearnMore: () => {
            t(),
                (0, b.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: X.nc_.GUILD_BOOSTING }),
                D.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, i.jsx)("div", {
                      className: $.Ht,
                      children: (0, i.jsxs)("div", {
                          className: $.W5,
                          children: [
                              (0, i.jsx)(h.A, { guild: n, size: h.A.Sizes.MEDIUM, animate: !a, className: $.Hc }),
                              (0, i.jsxs)("div", {
                                  className: $.IA,
                                  children: [
                                      (0, i.jsx)(p.Text, {
                                          variant: "text-md/normal",
                                          className: l()($.v, $.e0),
                                          children: n.name,
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: $.i$,
                                          children: [
                                              (0, i.jsx)(p._Jp, {
                                                  color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: $.jZ,
                                              }),
                                              (0, i.jsx)(p.Text, {
                                                  variant: "text-xs/normal",
                                                  className: l()($.v, $.x2),
                                                  children: Y.intl.format(Y.t["Ou/g/P"], { boostCount: o }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, i.jsx)("img", { alt: "", src: d }),
    });
}
let eN = () => {
    let e = ed().screenShareItemVisual;
    return (0, i.jsx)(ex, {
        description: Y.intl.format(Y.t.wK04T1, {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(X.MVz.STREAM_QUALITY_SETTINGS)),
                D.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, i.jsx)("img", { alt: "", src: e }),
    });
};
function eI(e) {
    let { premiumType: s } = e,
        t = ed().uploadsMessagesItemVisual;
    return (0, i.jsx)(ex, {
        description: s === Z.PremiumTypes.TIER_2 ? Y.intl.format(Y.t.GsOFRJ, {}) : Y.intl.format(Y.t.wFWO6D, {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(X.MVz.PREMIUM_DETAILS)),
                D.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, i.jsx)("img", { alt: "", src: t }),
    });
}
let eT = r.createContext({ isPremiumRebrand: !1 }),
    eC = () => r.useContext(eT).isPremiumRebrand;
function eh(e) {
    let { currentUser: s, premiumType: t, onClose: a, isDowngrade: n = !1, isPremiumRebrand: o = !1 } = e,
        c = r.useMemo(() => {
            let e = [];
            switch (t) {
                case Z.PremiumTypes.TIER_0:
                    e.push((0, i.jsx)(eA, { premiumType: t }), (0, i.jsx)(eI, { premiumType: t }));
                    break;
                case Z.PremiumTypes.TIER_1:
                    n
                        ? e.push(
                              (0, i.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, i.jsx)(eN, {}, "screen-share-item"),
                              (0, i.jsx)(e_, { premiumType: t, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, i.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, i.jsx)(eA, { premiumType: t }, "emoji-stickers-item"),
                              (0, i.jsx)(eN, {}, "screen-share-item"),
                              (0, i.jsx)(eI, { premiumType: t }, "uploads-item"),
                              (0, i.jsx)(e_, { premiumType: t, onClose: a }, "boost-item"),
                          );
                    break;
                case Z.PremiumTypes.TIER_2:
                    n
                        ? e.push(
                              (0, i.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, i.jsx)(e_, { premiumType: t, onClose: a }, "boost-item"),
                              (0, i.jsx)(eN, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, i.jsx)(ef, { currentUser: s, onClose: a }, "badge-item"),
                              (0, i.jsx)(ej, { currentUser: s, premiumType: t, onClose: a }, "profile-item"),
                              (0, i.jsx)(eA, { premiumType: t }, "emoji-stickers-item"),
                              (0, i.jsx)(e_, { premiumType: t, onClose: a }, "boost-item"),
                              (0, i.jsx)(eN, {}, "screen-share-item"),
                              (0, i.jsx)(eI, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, a, n]);
    return (0, i.jsx)(eT.Provider, {
        value: { isPremiumRebrand: o },
        children: (0, i.jsx)("div", { className: l()($.xP, { [$.u0]: o, [$.mK]: o && c.length <= 2 }), children: c }),
    });
}
let eE = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: a,
            footer: l,
            onClose: n,
            onDiscountClaim: c,
            onContinue: m,
            analyticsLocations: x,
            isLoading: j = !1,
            churnUserDiscountOffer: f = null,
            isDowngrade: A = !1,
            subtitleIcon: _,
            subtitleClassName: N,
        } = e,
        I = (0, u.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    r.useEffect(() => {
        (0, U.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let T = null != f && !j;
    return (r.useEffect(() => {
        T &&
            D.default.track(X.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: f?.discount_id,
            });
    }, [T, x, f]),
    j)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(J.A, { premiumType: s, onClose: n }),
                  (0, i.jsx)(d.cwr, {
                      children: (0, i.jsx)("div", {
                          className: $.rf,
                          children: (0, i.jsx)(p.y$y, { className: $.u1 }),
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(J.A, { premiumType: s, onClose: n }),
                  (0, i.jsx)(d.cwr, {
                      children: (0, i.jsxs)("div", {
                          className: $.rf,
                          children: [
                              (0, i.jsx)(p.Heading, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: $.DD,
                                  children: t,
                              }),
                              (0, i.jsxs)("div", {
                                  className: N,
                                  children: [_, (0, i.jsx)(p.Text, { variant: "text-md/normal", children: a })],
                              }),
                              (0, i.jsx)(eh, { currentUser: I, premiumType: s, onClose: n, isDowngrade: A }),
                          ],
                      }),
                  }),
                  !T && (0, i.jsx)(d.jlY, { children: l }),
                  T && (0, i.jsx)(B.A, { churnUserDiscountOffer: f, onDiscountClaim: c, onContinue: m }),
              ],
          });
};
