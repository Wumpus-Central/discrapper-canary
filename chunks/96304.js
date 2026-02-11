"use strict";
n.d(t, { A: () => ev, l: () => eS }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(735438),
    c = n.n(u),
    d = n(311907),
    _ = n(582754),
    f = n(397927),
    h = n(73153),
    p = n(923408),
    g = n(736653),
    E = n(775602),
    A = n(793574),
    I = n(688810),
    T = n(822123),
    y = n(770335),
    S = n(263063),
    v = n(931959),
    C = n(148355),
    b = n(950191),
    N = n(576622),
    R = n(270574),
    O = n(915614),
    D = n(946356),
    L = n(939496),
    w = n(780964),
    x = n(840065),
    P = n(71393),
    M = n(287809),
    k = n(178368),
    U = n(954571),
    G = n(486020),
    F = n(975571),
    V = n(927578),
    B = n(837921),
    j = n(112848),
    H = n(704640),
    Y = n(149757),
    W = n(30084),
    K = n(683793),
    $ = n(499369),
    z = n(788868),
    q = n(652215),
    X = n(985018),
    Z = n(565274),
    Q = n(324770),
    J = n(838436),
    ee = n(376038),
    et = n(66889),
    en = n(578586),
    er = n(955868),
    ei = n(631294),
    ea = n(751297),
    es = n(943298),
    eo = n(33487),
    el = n(581820);
let eu = B.Ay.getEnableHardwareAcceleration() ? f.JsQ : f.euF,
    ec = {
        boostItemVisual: en,
        emojiStickersVisual: er,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: ei,
        uploadsMessagesItemVisualV2: ea,
        PL: es,
        TR: el,
    },
    ed = {
        boostItemVisual: Q,
        emojiStickersVisual: J,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: ee,
        uploadsMessagesItemVisualV2: et,
        PL: es,
        TR: el,
    };
function e_() {
    let e = (0, g.Ay)();
    return (0, _.Mw)(e) ? ed : ec;
}
function ef(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = ey();
    return (0, r.jsxs)("div", {
        className: s()(Z.Kw, { [Z.u0]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: s()(Z.p3, { [Z.u0]: a }),
                children: [
                    (0, r.jsx)(f.Text, { variant: "text-md/normal", children: t }),
                    (0, r.jsx)(f.QWc, { onClick: n, text: X.intl.string(X.t.hvVgAZ) }),
                ],
            }),
            (0, r.jsx)("div", { className: s()(Z.aS, { [Z.u0]: a }), children: i() }),
        ],
    });
}
function eh(e) {
    let { ...t } = e,
        { theme: n } = (0, L.E)(),
        i = (0, f.rdh)(f.LU0.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, r.jsx)(f.tvc, { size: "md", ...t, color: i });
}
function ep(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        s = (0, b.Ay)(n.id),
        o = (0, d.bG)([E.A], () => E.A.useReducedMotion),
        l = i === z.PremiumTypes.TIER_1,
        u = () => {
            a(),
                (0, x.openUserSettings)(w.X.PROFILE_PANEL, { section: q.nc_.PROFILE_CUSTOMIZATION }),
                U.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            s?.premiumType === z.PremiumTypes.TIER_2
                ? (0, r.jsxs)(D.A, {
                      user: n,
                      displayProfile: s,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Z.Kq,
                      children: [
                          (0, r.jsx)(O.o, {
                              user: n,
                              displayProfile: s,
                              avatarSize: f._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(eu, {
                              className: Z.jU,
                              src: n.getAvatarURL(void 0, (0, f.FT9)(f._3J.SIZE_56), !o),
                              size: f._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Z.b$,
                              children: [
                                  (0, r.jsx)(R.A, { className: Z.Bj, usernameClass: Z.TE, name: n.toString() }),
                                  (0, r.jsx)(eh, { className: Z.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: Z.xl,
                      children: [
                          (0, r.jsx)(eu, {
                              className: Z.wK,
                              src: n.getAvatarURL(void 0, (0, f.FT9)(f._3J.SIZE_56), !o),
                              size: f._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Z.Un,
                              children: [
                                  (0, r.jsx)(R.A, { className: Z.Bj, usernameClass: Z.TE, name: n.toString() }),
                                  (0, r.jsx)(f.tvc, { size: "md", color: "currentColor", className: Z.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(ef, {
            description: l ? X.intl.format(X.t.xCaYwE, {}) : X.intl.format(X.t["gpqr+n"], {}),
            onLearnMore: u,
            renderVisual: () => t,
        })
    );
}
function em(e) {
    let { currentUser: t, onClose: n } = e,
        i = (0, j.$F)(),
        { analyticsLocations: a } = (0, I.Ay)(A.A.PREMIUM_UNCANCEL_MODAL),
        s = (0, j.Xb)(),
        o = i?.id ?? z.Ac.PREMIUM_TENURE_1_MONTH,
        l = (0, H.A)(o);
    if (!(0, V.YE)(t, z.PremiumTypes.TIER_2) || null == s) return null;
    let u = i?.status ?? j.Wo.UPCOMING,
        c = i?.nameUnformatted ?? z.VD[z.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, Y.I)(o),
        _ = X.intl.string(c),
        h = u === j.Wo.EARNED,
        p = null != i && "daysLeft" in i ? i.daysLeft : 1,
        g = X.t.pwkxYF;
    if (h) {
        let e = Math.max((0, V.To)(s), 1);
        e >= 365 ? ((p = Math.floor(e / 365)), (g = X.t["/ojPfi"])) : ((p = e), (g = X.t.IItWYo));
    }
    let E = () => {
        n(),
            (0, W.D)({ analyticsLocations: a, displayProfile: null }),
            U.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
    };
    return (0, r.jsx)(ef, {
        description: X.intl.format(g, { time: p }),
        onLearnMore: E,
        renderVisual: () =>
            (0, r.jsx)(f.hLv, {
                className: Z.nc,
                color: l,
                children: (0, r.jsx)("img", { alt: _, src: d, className: Z.pq }),
            }),
    });
}
function eg(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.bG)([E.A], () => E.A.useReducedMotion),
        a = (0, T.Fj)(null)
            .filter((e) => e.type === y.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        s = (0, d.yK)([v.A], () => v.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        o = e_().emojiStickersVisual,
        l = t === z.PremiumTypes.TIER_1,
        u = () => {
            window.open(F.A.getArticleURL(q.MVz.PREMIUM_DETAILS)),
                U.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(ef, {
        description: l ? X.intl.format(X.t.couiKJ, {}) : X.intl.format(X.t["0hUHi6"], {}),
        onLearnMore: u,
        renderVisual: () =>
            (null != a && a.length > 0) || (!l && null != s && s.length > 0)
                ? (0, r.jsxs)("div", {
                      className: Z.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : G.Ay.getEmojiURL({ id: e.id, animated: !i && e.animated, size: 58 }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, r.jsx)("img", { className: Z.d7, alt: "", src: e }, `emoji-${t}`)
                                      : null,
                              ),
                          l
                              ? null
                              : s.map((e) =>
                                    (0, r.jsx)(
                                        C.A,
                                        { disableAnimation: i, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, r.jsx)("img", { className: Z.OP, alt: "", src: o }),
    });
}
function eE(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => h.h.wait(() => (0, p.CD)()), []);
    let a = (0, d.bG)([E.A], () => E.A.useReducedMotion),
        [o, l] = (0, d.yK)([k.A, P.A], () => {
            let e = k.A.boostSlots,
                t = new Map();
            c()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != P.A.getGuild(e)) {
                        let n = t.get(e) ?? 0;
                        t.set(e, n + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [P.A.getGuild(n), r]
            );
        }),
        u = null != o && l > 0,
        _ = e_().boostItemVisual,
        g = () => {
            n(),
                (0, x.openUserSettings)(w.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: q.nc_.GUILD_BOOSTING }),
                U.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(ef, {
        description: t === z.PremiumTypes.TIER_1 ? X.intl.format(X.t.K4Hv69, {}) : X.intl.format(X.t.wRxEDW, {}),
        onLearnMore: g,
        renderVisual: () =>
            u
                ? (0, r.jsx)("div", {
                      className: Z.Ht,
                      children: (0, r.jsxs)("div", {
                          className: Z.W5,
                          children: [
                              (0, r.jsx)(S.A, { guild: o, size: S.A.Sizes.MEDIUM, animate: !a, className: Z.Hc }),
                              (0, r.jsxs)("div", {
                                  className: Z.IA,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-md/normal",
                                          className: s()(Z.v, Z.e0),
                                          children: o.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Z.i$,
                                          children: [
                                              (0, r.jsx)(f._Jp, {
                                                  color: f.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: Z.jZ,
                                              }),
                                              (0, r.jsx)(f.Text, {
                                                  variant: "text-xs/normal",
                                                  className: s()(Z.v, Z.x2),
                                                  children: X.intl.format(X.t["Ou/g/P"], { boostCount: l }),
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
let eA = () => {
    let e = e_().screenShareItemVisual,
        t = () => {
            window.open(F.A.getArticleURL(q.MVz.STREAM_QUALITY_SETTINGS)),
                U.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(ef, {
        description: X.intl.format(X.t.wK04T1, {}),
        onLearnMore: t,
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: e }),
    });
};
function eI(e) {
    let { premiumType: t } = e,
        n = e_().uploadsMessagesItemVisual,
        i = () => {
            window.open(F.A.getArticleURL(q.MVz.PREMIUM_DETAILS)),
                U.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(ef, {
        description: t === z.PremiumTypes.TIER_2 ? X.intl.format(X.t.GsOFRJ, {}) : X.intl.format(X.t.wFWO6D, {}),
        onLearnMore: i,
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: n }),
    });
}
let eT = i.createContext({ isPremiumRebrand: !1 }),
    ey = () => i.useContext(eT).isPremiumRebrand;
function eS(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        u = i.useMemo(() => {
            let e = [];
            switch (n) {
                case z.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eg, { premiumType: n }), (0, r.jsx)(eI, { premiumType: n }));
                    break;
                case z.PremiumTypes.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eA, {}, "screen-share-item"),
                              (0, r.jsx)(eE, { premiumType: n, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eg, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eA, {}, "screen-share-item"),
                              (0, r.jsx)(eI, { premiumType: n }, "uploads-item"),
                              (0, r.jsx)(eE, { premiumType: n, onClose: a }, "boost-item"),
                          );
                    break;
                case z.PremiumTypes.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eE, { premiumType: n, onClose: a }, "boost-item"),
                              (0, r.jsx)(eA, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(em, { currentUser: t, onClose: a }, "badge-item"),
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eg, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eE, { premiumType: n, onClose: a }, "boost-item"),
                              (0, r.jsx)(eA, {}, "screen-share-item"),
                              (0, r.jsx)(eI, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, a, o]);
    return (0, r.jsx)(eT.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", { className: s()(Z.xP, { [Z.u0]: l, [Z.mK]: l && u.length <= 2 }), children: u }),
    });
}
let ev = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: a,
            footer: s,
            onClose: o,
            onDiscountClaim: u,
            onContinue: c,
            analyticsLocations: _,
            isLoading: h = !1,
            churnUserDiscountOffer: p = null,
            isDowngrade: g = !1,
            subtitleIcon: E,
            subtitleClassName: A,
        } = e,
        I = (0, d.bG)([M.default], () => {
            let e = M.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, N.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let T = null != p && !h;
    return (i.useEffect(() => {
        T &&
            U.default.track(q.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: _,
                discount_id: p?.discount_id,
            });
    }, [T, _, p]),
    h)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)($.A, { premiumType: t, onClose: o }),
                  (0, r.jsx)(f.$mQ, {
                      "data-migration-pending": !0,
                      className: Z.rf,
                      children: (0, r.jsx)(f.y$y, { className: Z.u1 }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)($.A, { premiumType: t, onClose: o }),
                  (0, r.jsxs)(f.$mQ, {
                      "data-migration-pending": !0,
                      className: Z.rf,
                      children: [
                          (0, r.jsx)(f.Heading, {
                              variant: "heading-xl/semibold",
                              color: "text-strong",
                              className: Z.DD,
                              children: n,
                          }),
                          (0, r.jsxs)("div", {
                              className: A,
                              children: [E, (0, r.jsx)(f.Text, { variant: "text-md/normal", children: a })],
                          }),
                          (0, r.jsx)(eS, { currentUser: I, premiumType: t, onClose: o, isDowngrade: g }),
                      ],
                  }),
                  !T && (0, r.jsx)(f.jlY, { "data-migration-pending": !0, children: s }),
                  T && (0, r.jsx)(K.A, { churnUserDiscountOffer: p, onDiscountClaim: u, onContinue: c }),
              ],
          });
};
