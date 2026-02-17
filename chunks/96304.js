"use strict";
n.d(t, { A: () => eC, l: () => ev }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(735438),
    c = n.n(u),
    d = n(311907),
    _ = n(732955),
    f = n(582754),
    h = n(397927),
    p = n(73153),
    g = n(923408),
    E = n(736653),
    A = n(775602),
    I = n(793574),
    T = n(688810),
    y = n(822123),
    S = n(770335),
    v = n(263063),
    C = n(931959),
    b = n(148355),
    N = n(950191),
    R = n(576622),
    O = n(270574),
    D = n(915614),
    L = n(946356),
    w = n(939496),
    x = n(780964),
    P = n(840065),
    M = n(71393),
    k = n(287809),
    U = n(178368),
    G = n(954571),
    F = n(486020),
    V = n(975571),
    B = n(927578),
    j = n(837921),
    H = n(112848),
    Y = n(704640),
    W = n(149757),
    K = n(30084),
    $ = n(683793),
    z = n(499369),
    q = n(788868),
    X = n(652215),
    Z = n(985018),
    Q = n(565274),
    J = n(324770),
    ee = n(838436),
    et = n(376038),
    en = n(66889),
    er = n(578586),
    ei = n(955868),
    ea = n(631294),
    es = n(751297),
    eo = n(943298),
    el = n(33487),
    eu = n(581820);
let ec = j.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    ed = {
        boostItemVisual: er,
        emojiStickersVisual: ei,
        screenShareItemVisual: el,
        uploadsMessagesItemVisual: ea,
        uploadsMessagesItemVisualV2: es,
        PL: eo,
        TR: eu,
    },
    e_ = {
        boostItemVisual: J,
        emojiStickersVisual: ee,
        screenShareItemVisual: el,
        uploadsMessagesItemVisual: et,
        uploadsMessagesItemVisualV2: en,
        PL: eo,
        TR: eu,
    };
function ef() {
    let e = (0, E.Ay)();
    return (0, f.Mw)(e) ? e_ : ed;
}
function eh(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = eS();
    return (0, r.jsxs)("div", {
        className: s()(Q.Kw, { [Q.u0]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: s()(Q.p3, { [Q.u0]: a }),
                children: [
                    (0, r.jsx)(h.Text, { variant: "text-md/normal", children: t }),
                    (0, r.jsx)(h.QWc, { onClick: n, text: Z.intl.string(Z.t.hvVgAZ) }),
                ],
            }),
            (0, r.jsx)("div", { className: s()(Q.aS, { [Q.u0]: a }), children: i() }),
        ],
    });
}
function ep(e) {
    let { ...t } = e,
        { theme: n } = (0, w.E)(),
        i = (0, h.rdh)(h.LU0.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, r.jsx)(h.tvc, { size: "md", ...t, color: i });
}
function em(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        s = (0, N.Ay)(n.id),
        o = (0, d.bG)([A.A], () => A.A.useReducedMotion),
        l = i === q.PremiumTypes.TIER_1,
        u = () => {
            a(),
                (0, P.openUserSettings)(x.X.PROFILE_PANEL, { section: X.nc_.PROFILE_CUSTOMIZATION }),
                G.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            s?.premiumType === q.PremiumTypes.TIER_2
                ? (0, r.jsxs)(L.A, {
                      user: n,
                      displayProfile: s,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Q.Kq,
                      children: [
                          (0, r.jsx)(D.o, {
                              user: n,
                              displayProfile: s,
                              avatarSize: h._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(ec, {
                              className: Q.jU,
                              src: n.getAvatarURL(void 0, (0, h.FT9)(h._3J.SIZE_56), !o),
                              size: h._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.b$,
                              children: [
                                  (0, r.jsx)(O.A, { className: Q.Bj, usernameClass: Q.TE, name: n.toString() }),
                                  (0, r.jsx)(ep, { className: Q.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: Q.xl,
                      children: [
                          (0, r.jsx)(ec, {
                              className: Q.wK,
                              src: n.getAvatarURL(void 0, (0, h.FT9)(h._3J.SIZE_56), !o),
                              size: h._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.Un,
                              children: [
                                  (0, r.jsx)(O.A, { className: Q.Bj, usernameClass: Q.TE, name: n.toString() }),
                                  (0, r.jsx)(h.tvc, { size: "md", color: "currentColor", className: Q.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eh, {
            description: l ? Z.intl.format(Z.t.xCaYwE, {}) : Z.intl.format(Z.t["gpqr+n"], {}),
            onLearnMore: u,
            renderVisual: () => t,
        })
    );
}
function eg(e) {
    let { currentUser: t, onClose: n } = e,
        i = (0, H.$F)(),
        { analyticsLocations: a } = (0, T.Ay)(I.A.PREMIUM_UNCANCEL_MODAL),
        s = (0, H.Xb)(),
        o = i?.id ?? q.Ac.PREMIUM_TENURE_1_MONTH,
        l = (0, Y.A)(o);
    if (!(0, B.YE)(t, q.PremiumTypes.TIER_2) || null == s) return null;
    let u = i?.status ?? H.Wo.UPCOMING,
        c = i?.nameUnformatted ?? q.VD[q.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, W.I)(o),
        _ = Z.intl.string(c),
        f = u === H.Wo.EARNED,
        p = null != i && "daysLeft" in i ? i.daysLeft : 1,
        g = Z.t.pwkxYF;
    if (f) {
        let e = Math.max((0, B.To)(s), 1);
        e >= 365 ? ((p = Math.floor(e / 365)), (g = Z.t["/ojPfi"])) : ((p = e), (g = Z.t.IItWYo));
    }
    let E = () => {
        n(),
            (0, K.D)({ analyticsLocations: a, displayProfile: null }),
            G.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
    };
    return (0, r.jsx)(eh, {
        description: Z.intl.format(g, { time: p }),
        onLearnMore: E,
        renderVisual: () =>
            (0, r.jsx)(h.hLv, {
                className: Q.nc,
                color: l,
                children: (0, r.jsx)("img", { alt: _, src: d, className: Q.pq }),
            }),
    });
}
function eE(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.bG)([A.A], () => A.A.useReducedMotion),
        a = (0, y.Fj)(null)
            .filter((e) => e.type === S.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        s = (0, d.yK)([C.A], () => C.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        o = ef().emojiStickersVisual,
        l = t === q.PremiumTypes.TIER_1,
        u = () => {
            window.open(V.A.getArticleURL(X.MVz.PREMIUM_DETAILS)),
                G.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(eh, {
        description: l ? Z.intl.format(Z.t.couiKJ, {}) : Z.intl.format(Z.t["0hUHi6"], {}),
        onLearnMore: u,
        renderVisual: () =>
            (null != a && a.length > 0) || (!l && null != s && s.length > 0)
                ? (0, r.jsxs)("div", {
                      className: Q.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : F.Ay.getEmojiURL({ id: e.id, animated: !i && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, r.jsx)("img", { className: Q.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          l
                              ? null
                              : s.map((e) =>
                                    (0, r.jsx)(
                                        b.A,
                                        { disableAnimation: i, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, r.jsx)("img", { className: Q.OP, alt: "", src: o }),
    });
}
function eA(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => p.h.wait(() => (0, g.CD)()), []);
    let a = (0, d.bG)([A.A], () => A.A.useReducedMotion),
        [o, l] = (0, d.yK)([U.A, M.A], () => {
            let e = U.A.boostSlots,
                t = new Map();
            c()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != M.A.getGuild(e)) {
                        let n = t.get(e) ?? 0;
                        t.set(e, n + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [M.A.getGuild(n), r]
            );
        }),
        u = null != o && l > 0,
        _ = ef().boostItemVisual,
        f = () => {
            n(),
                (0, P.openUserSettings)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: X.nc_.GUILD_BOOSTING }),
                G.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(eh, {
        description: t === q.PremiumTypes.TIER_1 ? Z.intl.format(Z.t.K4Hv69, {}) : Z.intl.format(Z.t.wRxEDW, {}),
        onLearnMore: f,
        renderVisual: () =>
            u
                ? (0, r.jsx)("div", {
                      className: Q.Ht,
                      children: (0, r.jsxs)("div", {
                          className: Q.W5,
                          children: [
                              (0, r.jsx)(v.A, { guild: o, size: v.A.Sizes.MEDIUM, animate: !a, className: Q.Hc }),
                              (0, r.jsxs)("div", {
                                  className: Q.IA,
                                  children: [
                                      (0, r.jsx)(h.Text, {
                                          variant: "text-md/normal",
                                          className: s()(Q.v, Q.e0),
                                          children: o.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Q.i$,
                                          children: [
                                              (0, r.jsx)(h._Jp, {
                                                  color: h.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: Q.jZ,
                                              }),
                                              (0, r.jsx)(h.Text, {
                                                  variant: "text-xs/normal",
                                                  className: s()(Q.v, Q.x2),
                                                  children: Z.intl.format(Z.t["Ou/g/P"], { boostCount: l }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, r.jsx)("img", { alt: "", src: _ }),
    });
}
let eI = () => {
    let e = ef().screenShareItemVisual,
        t = () => {
            window.open(V.A.getArticleURL(X.MVz.STREAM_QUALITY_SETTINGS)),
                G.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(eh, {
        description: Z.intl.format(Z.t.wK04T1, {}),
        onLearnMore: t,
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: e }),
    });
};
function eT(e) {
    let { premiumType: t } = e,
        n = ef().uploadsMessagesItemVisual,
        i = () => {
            window.open(V.A.getArticleURL(X.MVz.PREMIUM_DETAILS)),
                G.default.track(X.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(eh, {
        description: t === q.PremiumTypes.TIER_2 ? Z.intl.format(Z.t.GsOFRJ, {}) : Z.intl.format(Z.t.wFWO6D, {}),
        onLearnMore: i,
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: n }),
    });
}
let ey = i.createContext({ isPremiumRebrand: !1 }),
    eS = () => i.useContext(ey).isPremiumRebrand;
function ev(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        u = i.useMemo(() => {
            let e = [];
            switch (n) {
                case q.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eE, { premiumType: n }), (0, r.jsx)(eT, { premiumType: n }));
                    break;
                case q.PremiumTypes.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(em, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eA, { premiumType: n, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, r.jsx)(em, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eE, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: n }, "uploads-item"),
                              (0, r.jsx)(eA, { premiumType: n, onClose: a }, "boost-item"),
                          );
                    break;
                case q.PremiumTypes.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(em, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eA, { premiumType: n, onClose: a }, "boost-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(eg, { currentUser: t, onClose: a }, "badge-item"),
                              (0, r.jsx)(em, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eE, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eA, { premiumType: n, onClose: a }, "boost-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, a, o]);
    return (0, r.jsx)(ey.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", { className: s()(Q.xP, { [Q.u0]: l, [Q.mK]: l && u.length <= 2 }), children: u }),
    });
}
let eC = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: a,
            footer: s,
            onClose: o,
            onDiscountClaim: u,
            onContinue: c,
            analyticsLocations: f,
            isLoading: p = !1,
            churnUserDiscountOffer: g = null,
            isDowngrade: E = !1,
            subtitleIcon: A,
            subtitleClassName: I,
        } = e,
        T = (0, d.bG)([k.default], () => {
            let e = k.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, R.A)(T.id, T.getAvatarURL(null, 80));
    }, [T]);
    let y = null != g && !p;
    return (i.useEffect(() => {
        y &&
            G.default.track(X.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: g?.discount_id,
            });
    }, [y, f, g]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(z.A, { premiumType: t, onClose: o }),
                  (0, r.jsx)(_.cwr, {
                      children: (0, r.jsx)("div", {
                          className: Q.rf,
                          children: (0, r.jsx)(h.y$y, { className: Q.u1 }),
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(z.A, { premiumType: t, onClose: o }),
                  (0, r.jsx)(_.cwr, {
                      children: (0, r.jsxs)("div", {
                          className: Q.rf,
                          children: [
                              (0, r.jsx)(h.Heading, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: Q.DD,
                                  children: n,
                              }),
                              (0, r.jsxs)("div", {
                                  className: I,
                                  children: [A, (0, r.jsx)(h.Text, { variant: "text-md/normal", children: a })],
                              }),
                              (0, r.jsx)(ev, { currentUser: T, premiumType: t, onClose: o, isDowngrade: E }),
                          ],
                      }),
                  }),
                  !y && (0, r.jsx)(_.jlY, { children: s }),
                  y && (0, r.jsx)($.A, { churnUserDiscountOffer: g, onDiscountClaim: u, onContinue: c }),
              ],
          });
};
