"use strict";
n.d(t, { A: () => eS, l: () => ey }), n(321073);
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
    p = n(73153),
    h = n(923408),
    m = n(736653),
    g = n(775602),
    E = n(793574),
    A = n(688810),
    I = n(822123),
    T = n(770335),
    y = n(263063),
    S = n(931959),
    v = n(148355),
    C = n(950191),
    b = n(576622),
    N = n(270574),
    R = n(915614),
    O = n(946356),
    D = n(939496),
    L = n(780964),
    w = n(840065),
    x = n(71393),
    P = n(287809),
    M = n(178368),
    k = n(954571),
    U = n(486020),
    G = n(975571),
    V = n(927578),
    F = n(837921),
    B = n(112848),
    j = n(704640),
    H = n(149757),
    Y = n(30084),
    W = n(683793),
    K = n(499369),
    z = n(788868),
    $ = n(652215),
    q = n(985018),
    Z = n(565274),
    Q = n(324770),
    X = n(838436),
    J = n(376038),
    ee = n(66889),
    et = n(578586),
    en = n(955868),
    er = n(631294),
    ei = n(751297),
    ea = n(943298),
    es = n(33487),
    eo = n(581820);
let el = F.Ay.getEnableHardwareAcceleration() ? f.JsQ : f.euF,
    eu = {
        boostItemVisual: et,
        emojiStickersVisual: en,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: ei,
        PL: ea,
        TR: eo,
    },
    ec = {
        boostItemVisual: Q,
        emojiStickersVisual: X,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: J,
        uploadsMessagesItemVisualV2: ee,
        PL: ea,
        TR: eo,
    };
function ed() {
    let e = (0, m.Ay)();
    return (0, _.Mw)(e) ? ec : eu;
}
function e_(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = eT();
    return (0, r.jsxs)("div", {
        className: s()(Z.Kw, { [Z.u0]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: s()(Z.p3, { [Z.u0]: a }),
                children: [
                    (0, r.jsx)(f.Text, { variant: "text-md/normal", children: t }),
                    (0, r.jsx)(f.QWc, { onClick: n, text: q.intl.string(q.t.hvVgAZ) }),
                ],
            }),
            (0, r.jsx)("div", { className: s()(Z.aS, { [Z.u0]: a }), children: i() }),
        ],
    });
}
function ef(e) {
    let { ...t } = e,
        { theme: n } = (0, D.E)(),
        i = (0, f.rdh)(f.LU0.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, r.jsx)(f.tvc, { size: "md", ...t, color: i });
}
function ep(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        s = (0, C.Ay)(n.id),
        o = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        l = i === z.PremiumTypes.TIER_1,
        u = () => {
            a(),
                (0, w.openUserSettings)(L.X.PROFILE_PANEL, { section: $.nc_.PROFILE_CUSTOMIZATION }),
                k.default.track($.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            s?.premiumType === z.PremiumTypes.TIER_2
                ? (0, r.jsxs)(O.A, {
                      user: n,
                      displayProfile: s,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Z.Kq,
                      children: [
                          (0, r.jsx)(R.o, {
                              user: n,
                              displayProfile: s,
                              avatarSize: f._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(el, {
                              className: Z.jU,
                              src: n.getAvatarURL(void 0, (0, f.FT9)(f._3J.SIZE_56), !o),
                              size: f._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Z.b$,
                              children: [
                                  (0, r.jsx)(N.A, { className: Z.Bj, usernameClass: Z.TE, name: n.toString() }),
                                  (0, r.jsx)(ef, { className: Z.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: Z.xl,
                      children: [
                          (0, r.jsx)(el, {
                              className: Z.wK,
                              src: n.getAvatarURL(void 0, (0, f.FT9)(f._3J.SIZE_56), !o),
                              size: f._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Z.Un,
                              children: [
                                  (0, r.jsx)(N.A, { className: Z.Bj, usernameClass: Z.TE, name: n.toString() }),
                                  (0, r.jsx)(f.tvc, { size: "md", color: "currentColor", className: Z.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(e_, {
            description: l ? q.intl.format(q.t.xCaYwE, {}) : q.intl.format(q.t["gpqr+n"], {}),
            onLearnMore: u,
            renderVisual: () => t,
        })
    );
}
function eh(e) {
    let { currentUser: t, onClose: n } = e,
        i = (0, B.$F)(),
        { analyticsLocations: a } = (0, A.Ay)(E.A.PREMIUM_UNCANCEL_MODAL),
        s = (0, B.Xb)(),
        o = i?.id ?? z.Ac.PREMIUM_TENURE_1_MONTH,
        l = (0, j.A)(o);
    if (!(0, V.YE)(t, z.PremiumTypes.TIER_2) || null == s) return null;
    let u = i?.status ?? B.Wo.UPCOMING,
        c = i?.nameUnformatted ?? z.VD[z.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, H.I)(o),
        _ = q.intl.string(c),
        p = u === B.Wo.EARNED,
        h = null != i && "daysLeft" in i ? i.daysLeft : 1,
        m = q.t.pwkxYF;
    if (p) {
        let e = Math.max((0, V.To)(s), 1);
        e >= 365 ? ((h = Math.floor(e / 365)), (m = q.t["/ojPfi"])) : ((h = e), (m = q.t.IItWYo));
    }
    let g = () => {
        n(),
            (0, Y.D)({ analyticsLocations: a, displayProfile: null }),
            k.default.track($.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
    };
    return (0, r.jsx)(e_, {
        description: q.intl.format(m, { time: h }),
        onLearnMore: g,
        renderVisual: () =>
            (0, r.jsx)(f.hLv, {
                className: Z.nc,
                color: l,
                children: (0, r.jsx)("img", { alt: _, src: d, className: Z.pq }),
            }),
    });
}
function em(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        a = (0, I.Fj)(null)
            .filter((e) => e.type === T.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        s = (0, d.yK)([S.A], () => S.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        o = ed().emojiStickersVisual,
        l = t === z.PremiumTypes.TIER_1,
        u = () => {
            window.open(G.A.getArticleURL($.MVz.PREMIUM_DETAILS)),
                k.default.track($.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(e_, {
        description: l ? q.intl.format(q.t.couiKJ, {}) : q.intl.format(q.t["0hUHi6"], {}),
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
                                      : U.Ay.getEmojiURL({ id: e.id, animated: !i && e.animated, size: 58 }),
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
                                        v.A,
                                        { disableAnimation: i, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, r.jsx)("img", { className: Z.OP, alt: "", src: o }),
    });
}
function eg(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => p.h.wait(() => (0, h.CD)()), []);
    let a = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        [o, l] = (0, d.yK)([M.A, x.A], () => {
            let e = M.A.boostSlots,
                t = new Map();
            c()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != x.A.getGuild(e)) {
                        let n = t.get(e) ?? 0;
                        t.set(e, n + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [x.A.getGuild(n), r]
            );
        }),
        u = null != o && l > 0,
        _ = ed().boostItemVisual,
        m = () => {
            n(),
                (0, w.openUserSettings)(L.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: $.nc_.GUILD_BOOSTING }),
                k.default.track($.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(e_, {
        description: t === z.PremiumTypes.TIER_1 ? q.intl.format(q.t.K4Hv69, {}) : q.intl.format(q.t.wRxEDW, {}),
        onLearnMore: m,
        renderVisual: () =>
            u
                ? (0, r.jsx)("div", {
                      className: Z.Ht,
                      children: (0, r.jsxs)("div", {
                          className: Z.W5,
                          children: [
                              (0, r.jsx)(y.A, { guild: o, size: y.A.Sizes.MEDIUM, animate: !a, className: Z.Hc }),
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
                                                  children: q.intl.format(q.t["Ou/g/P"], { boostCount: l }),
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
let eE = () => {
    let e = ed().screenShareItemVisual,
        t = () => {
            window.open(G.A.getArticleURL($.MVz.STREAM_QUALITY_SETTINGS)),
                k.default.track($.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(e_, {
        description: q.intl.format(q.t.wK04T1, {}),
        onLearnMore: t,
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: e }),
    });
};
function eA(e) {
    let { premiumType: t } = e,
        n = ed().uploadsMessagesItemVisual,
        i = () => {
            window.open(G.A.getArticleURL($.MVz.PREMIUM_DETAILS)),
                k.default.track($.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(e_, {
        description: t === z.PremiumTypes.TIER_2 ? q.intl.format(q.t.GsOFRJ, {}) : q.intl.format(q.t.wFWO6D, {}),
        onLearnMore: i,
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: n }),
    });
}
let eI = i.createContext({ isPremiumRebrand: !1 }),
    eT = () => i.useContext(eI).isPremiumRebrand;
function ey(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        u = i.useMemo(() => {
            let e = [];
            switch (n) {
                case z.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(em, { premiumType: n }), (0, r.jsx)(eA, { premiumType: n }));
                    break;
                case z.PremiumTypes.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                              (0, r.jsx)(eg, { premiumType: n, onClose: a }, "boost-item"),
                          )
                        : e.push(
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(em, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                              (0, r.jsx)(eA, { premiumType: n }, "uploads-item"),
                              (0, r.jsx)(eg, { premiumType: n, onClose: a }, "boost-item"),
                          );
                    break;
                case z.PremiumTypes.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(eg, { premiumType: n, onClose: a }, "boost-item"),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(eh, { currentUser: t, onClose: a }, "badge-item"),
                              (0, r.jsx)(ep, { currentUser: t, premiumType: n, onClose: a }, "profile-item"),
                              (0, r.jsx)(em, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eg, { premiumType: n, onClose: a }, "boost-item"),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                              (0, r.jsx)(eA, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, a, o]);
    return (0, r.jsx)(eI.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", { className: s()(Z.xP, { [Z.u0]: l, [Z.mK]: l && u.length <= 2 }), children: u }),
    });
}
let eS = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: a,
            footer: s,
            onClose: o,
            onDiscountClaim: u,
            onContinue: c,
            analyticsLocations: _,
            isLoading: p = !1,
            churnUserDiscountOffer: h = null,
            isDowngrade: m = !1,
            subtitleIcon: g,
            subtitleClassName: E,
        } = e,
        A = (0, d.bG)([P.default], () => {
            let e = P.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, b.A)(A.id, A.getAvatarURL(null, 80));
    }, [A]);
    let I = null != h && !p;
    return (i.useEffect(() => {
        I &&
            k.default.track($.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: _,
                discount_id: h?.discount_id,
            });
    }, [I, _, h]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.A, { premiumType: t, onClose: o }),
                  (0, r.jsx)(f.$mQ, {
                      "data-migration-pending": !0,
                      className: Z.rf,
                      children: (0, r.jsx)(f.y$y, { className: Z.u1 }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.A, { premiumType: t, onClose: o }),
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
                              className: E,
                              children: [g, (0, r.jsx)(f.Text, { variant: "text-md/normal", children: a })],
                          }),
                          (0, r.jsx)(ey, { currentUser: A, premiumType: t, onClose: o, isDowngrade: m }),
                      ],
                  }),
                  !I && (0, r.jsx)(f.jlY, { "data-migration-pending": !0, children: s }),
                  I && (0, r.jsx)(W.A, { churnUserDiscountOffer: h, onDiscountClaim: u, onContinue: c }),
              ],
          });
};
