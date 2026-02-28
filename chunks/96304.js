t.d(s, { A: () => eg, l: () => eE }), t(321073);
var r = t(627968),
    a = t(64700),
    i = t(503698),
    n = t.n(i),
    l = t(284009),
    o = t.n(l),
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
    y = t(915614),
    L = t(946356),
    R = t(939496),
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
    H = t(627380),
    W = t(704640),
    G = t(149757),
    B = t(30084),
    J = t(683793),
    Z = t(499369),
    X = t(788868),
    Y = t(652215),
    $ = t(985018),
    q = t(565274),
    Q = t(324770),
    ee = t(838436),
    es = t(376038),
    et = t(66889),
    er = t(578586),
    ea = t(955868),
    ei = t(631294),
    en = t(751297),
    el = t(943298),
    eo = t(33487),
    ec = t(581820);
let em = z.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    eu = {
        boostItemVisual: er,
        emojiStickersVisual: ea,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: ei,
        uploadsMessagesItemVisualV2: en,
        PL: el,
        TR: ec,
    },
    ed = {
        boostItemVisual: Q,
        emojiStickersVisual: ee,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: es,
        uploadsMessagesItemVisualV2: et,
        PL: el,
        TR: ec,
    };
function ex() {
    let e = (0, A.Ay)();
    return (0, x.Mw)(e) ? ed : eu;
}
function ep(e) {
    let { description: s, onLearnMore: t, renderVisual: a } = e,
        i = eh();
    return (0, r.jsxs)("div", {
        className: n()(q.Kw, { [q.u0]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: n()(q.p3, { [q.u0]: i }),
                children: [
                    (0, r.jsx)(p.Text, { variant: "text-md/normal", children: s }),
                    (0, r.jsx)(p.QWc, { onClick: t, text: $.intl.string($.t.hvVgAZ) }),
                ],
            }),
            (0, r.jsx)("div", { className: n()(q.aS, { [q.u0]: i }), children: a() }),
        ],
    });
}
function ej(e) {
    let { ...s } = e,
        { theme: t } = (0, R.E)(),
        a = (0, p.rdh)(p.LU0.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, r.jsx)(p.tvc, { size: "md", ...s, color: a });
}
function ef(e) {
    let s,
        { currentUser: t, premiumType: a, onClose: i } = e,
        n = (0, v.Ay)(t.id),
        l = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        o = a === X.PremiumTypes.TIER_1;
    return (
        (s =
            n?.premiumType === X.PremiumTypes.TIER_2
                ? (0, r.jsxs)(L.A, {
                      user: t,
                      displayProfile: n,
                      forceShowPremium: !0,
                      themeType: null,
                      className: q.Kq,
                      children: [
                          (0, r.jsx)(y.o, {
                              user: t,
                              displayProfile: n,
                              avatarSize: p._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(em, {
                              className: q.jU,
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !l),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: q.b$,
                              children: [
                                  (0, r.jsx)(M.A, { className: q.Bj, usernameClass: q.TE, name: t.toString() }),
                                  (0, r.jsx)(ej, { className: q.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: q.xl,
                      children: [
                          (0, r.jsx)(em, {
                              className: q.wK,
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !l),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: q.Un,
                              children: [
                                  (0, r.jsx)(M.A, { className: q.Bj, usernameClass: q.TE, name: t.toString() }),
                                  (0, r.jsx)(p.tvc, { size: "md", color: "currentColor", className: q.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(ep, {
            description: o ? $.intl.format($.t.xCaYwE, {}) : $.intl.format($.t["gpqr+n"], {}),
            onLearnMore: () => {
                i(),
                    (0, b.openUserSettings)(P.X.PROFILE_PANEL, { section: Y.nc_.PROFILE_CUSTOMIZATION }),
                    D.default.track(Y.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function eA(e) {
    let { currentUser: s, onClose: t } = e,
        a = (0, F.$F)(),
        { analyticsLocations: i } = (0, I.Ay)(N.A.PREMIUM_UNCANCEL_MODAL),
        n = (0, F.Xb)(),
        l = (0, H.t)(),
        o = a?.id ?? X.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, W.A)(o);
    if (!(0, K.YE)(s, X.PremiumTypes.TIER_2) || null == n) return null;
    let m = a?.status ?? F.Wo.UPCOMING,
        u = a?.nameUnformatted ?? X.VD[X.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, G.I)(o).standard,
        x = $.intl.string(u),
        j = m === F.Wo.EARNED,
        f = l?.days ?? 1,
        A = $.t.pwkxYF;
    if (j) {
        let e = Math.max((0, K.To)(n), 1);
        e >= 365 ? ((f = Math.floor(e / 365)), (A = $.t["/ojPfi"])) : ((f = e), (A = $.t.IItWYo));
    }
    return (0, r.jsx)(ep, {
        description: $.intl.format(A, { time: f }),
        onLearnMore: () => {
            t(),
                (0, B.D)({ analyticsLocations: i, displayProfile: null }),
                D.default.track(Y.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, r.jsx)(p.hLv, {
                className: q.nc,
                color: c,
                children: (0, r.jsx)("img", { alt: x, src: d, className: q.pq }),
            }),
    });
}
function e_(e) {
    let { premiumType: s } = e,
        t = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        a = (0, T.Fj)(null)
            .filter((e) => e.type === C.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, u.yK)([E.A], () => E.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)),
        n = ex().emojiStickersVisual,
        l = s === X.PremiumTypes.TIER_1;
    return (0, r.jsx)(ep, {
        description: l ? $.intl.format($.t.couiKJ, {}) : $.intl.format($.t["0hUHi6"], {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(Y.MVz.PREMIUM_DETAILS)),
                D.default.track(Y.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != a && a.length > 0) || (!l && null != i && i.length > 0)
                ? (0, r.jsxs)("div", {
                      className: q.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : k.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, r.jsx)("img", { className: q.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          l
                              ? null
                              : i.map((e) =>
                                    (0, r.jsx)(
                                        g.A,
                                        { disableAnimation: t, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, r.jsx)("img", { className: q.OP, alt: "", src: n }),
    });
}
function eN(e) {
    let { premiumType: s, onClose: t } = e;
    a.useEffect(() => j.h.wait(() => (0, f.CD)()), []);
    let i = (0, u.bG)([_.A], () => _.A.useReducedMotion),
        [l, o] = (0, u.yK)([V.A, w.A], () => {
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
                r = 0;
            return (
                s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [w.A.getGuild(t), r]
            );
        }),
        c = null != l && o > 0,
        d = ex().boostItemVisual;
    return (0, r.jsx)(ep, {
        description: s === X.PremiumTypes.TIER_1 ? $.intl.format($.t.K4Hv69, {}) : $.intl.format($.t.wRxEDW, {}),
        onLearnMore: () => {
            t(),
                (0, b.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: Y.nc_.GUILD_BOOSTING }),
                D.default.track(Y.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: q.Ht,
                      children: (0, r.jsxs)("div", {
                          className: q.W5,
                          children: [
                              (0, r.jsx)(h.Ay, { guild: l, size: h.Ay.Sizes.MEDIUM, animate: !i, className: q.Hc }),
                              (0, r.jsxs)("div", {
                                  className: q.IA,
                                  children: [
                                      (0, r.jsx)(p.Text, {
                                          variant: "text-md/normal",
                                          className: n()(q.v, q.e0),
                                          children: l.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: q.i$,
                                          children: [
                                              (0, r.jsx)(p._Jp, {
                                                  color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: q.jZ,
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  variant: "text-xs/normal",
                                                  className: n()(q.v, q.x2),
                                                  children: $.intl.format($.t["Ou/g/P"], { boostCount: o }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, r.jsx)("img", { alt: "", src: d }),
    });
}
let eI = () => {
    let e = ex().screenShareItemVisual;
    return (0, r.jsx)(ep, {
        description: $.intl.format($.t.wK04T1, {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(Y.MVz.STREAM_QUALITY_SETTINGS)),
                D.default.track(Y.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: e }),
    });
};
function eT(e) {
    let { premiumType: s } = e,
        t = ex().uploadsMessagesItemVisual;
    return (0, r.jsx)(ep, {
        description: s === X.PremiumTypes.TIER_2 ? $.intl.format($.t.GsOFRJ, {}) : $.intl.format($.t.wFWO6D, {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(Y.MVz.PREMIUM_DETAILS)),
                D.default.track(Y.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: t }),
    });
}
let eC = a.createContext({ isPremiumRebrand: !1 }),
    eh = () => a.useContext(eC).isPremiumRebrand;
function eE(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: l = !1, isPremiumRebrand: o = !1 } = e,
        c = a.useMemo(() => {
            let e = [];
            switch (t) {
                case X.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(e_, { premiumType: t }), (0, r.jsx)(eT, { premiumType: t }));
                    break;
                case X.PremiumTypes.TIER_1:
                    l
                        ? e.push(
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eN, { premiumType: t, onClose: i }, "boost-item"),
                          )
                        : e.push(
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(e_, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(eN, { premiumType: t, onClose: i }, "boost-item"),
                          );
                    break;
                case X.PremiumTypes.TIER_2:
                    l
                        ? e.push(
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eN, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(eA, { currentUser: s, onClose: i }, "badge-item"),
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(e_, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eN, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, i, l]);
    return (0, r.jsx)(eC.Provider, {
        value: { isPremiumRebrand: o },
        children: (0, r.jsx)("div", { className: n()(q.xP, { [q.u0]: o, [q.mK]: o && c.length <= 2 }), children: c }),
    });
}
let eg = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: i,
            footer: n,
            onClose: l,
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
    a.useEffect(() => {
        (0, U.A)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let T = null != f && !j;
    return (a.useEffect(() => {
        T &&
            D.default.track(Y.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: f?.discount_id,
            });
    }, [T, x, f]),
    j)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.A, { premiumType: s, onClose: l }),
                  (0, r.jsx)(d.cwr, {
                      children: (0, r.jsx)("div", {
                          className: q.rf,
                          children: (0, r.jsx)(p.y$y, { className: q.u1 }),
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.A, { premiumType: s, onClose: l }),
                  (0, r.jsx)(d.cwr, {
                      children: (0, r.jsxs)("div", {
                          className: q.rf,
                          children: [
                              (0, r.jsx)(p.Heading, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: q.DD,
                                  children: t,
                              }),
                              (0, r.jsxs)("div", {
                                  className: N,
                                  children: [_, (0, r.jsx)(p.Text, { variant: "text-md/normal", children: i })],
                              }),
                              (0, r.jsx)(eE, { currentUser: I, premiumType: s, onClose: l, isDowngrade: A }),
                          ],
                      }),
                  }),
                  !T && (0, r.jsx)(d.jlY, { children: n }),
                  T && (0, r.jsx)(J.A, { churnUserDiscountOffer: f, onDiscountClaim: c, onContinue: m }),
              ],
          });
};
