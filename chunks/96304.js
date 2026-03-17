t.d(s, { A: () => eg, l: () => eE }), t(321073);
var r = t(627968),
    a = t(64700),
    i = t(503698),
    l = t.n(i),
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
    N = t(775602),
    _ = t(793574),
    C = t(688810),
    h = t(822123),
    T = t(770335),
    I = t(263063),
    E = t(931959),
    g = t(148355),
    v = t(950191),
    M = t(576622),
    U = t(270574),
    y = t(915614),
    R = t(946356),
    L = t(939496),
    P = t(780964),
    b = t(840065),
    w = t(71393),
    S = t(287809),
    V = t(178368),
    k = t(954571),
    D = t(486020),
    O = t(975571),
    K = t(927578),
    z = t(837921),
    F = t(112848),
    H = t(627380),
    W = t(704640),
    G = t(149757),
    B = t(30084),
    J = t(683793),
    X = t(499369),
    Y = t(788868),
    Z = t(652215),
    $ = t(985018),
    q = t(565274),
    Q = t(324770),
    ee = t(838436),
    es = t(376038),
    et = t(66889),
    er = t(578586),
    ea = t(955868),
    ei = t(631294),
    el = t(751297),
    en = t(943298),
    eo = t(33487),
    ec = t(581820);
let em = z.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    eu = {
        boostItemVisual: er,
        emojiStickersVisual: ea,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: ei,
        uploadsMessagesItemVisualV2: el,
        PL: en,
        TR: ec,
    },
    ed = {
        boostItemVisual: Q,
        emojiStickersVisual: ee,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: es,
        uploadsMessagesItemVisualV2: et,
        PL: en,
        TR: ec,
    };
function ex() {
    let e = (0, A.Ay)();
    return (0, x.Mw)(e) ? ed : eu;
}
function ep(e) {
    let { description: s, onLearnMore: t, renderVisual: a } = e,
        i = eI();
    return (0, r.jsxs)("div", {
        className: l()(q.Kw, { [q.u0]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: l()(q.p3, { [q.u0]: i }),
                children: [
                    (0, r.jsx)(p.Text, { variant: "text-md/normal", children: s }),
                    (0, r.jsx)(p.QWc, { onClick: t, text: $.intl.string($.t.hvVgAZ) }),
                ],
            }),
            (0, r.jsx)("div", { className: l()(q.aS, { [q.u0]: i }), children: a() }),
        ],
    });
}
function ej(e) {
    let { ...s } = e,
        { theme: t } = (0, L.E)(),
        a = (0, p.rdh)(p.LU0.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, r.jsx)(p.tvc, { size: "md", ...s, color: a });
}
function ef(e) {
    let s,
        { currentUser: t, premiumType: a, onClose: i } = e,
        l = (0, v.Ay)(t.id),
        n = (0, u.bG)([N.A], () => N.A.useReducedMotion),
        o = a === Y.PremiumTypes.TIER_1;
    return (
        (s =
            l?.premiumType === Y.PremiumTypes.TIER_2
                ? (0, r.jsxs)(R.A, {
                      user: t,
                      displayProfile: l,
                      forceShowPremium: !0,
                      themeType: null,
                      className: q.Kq,
                      children: [
                          (0, r.jsx)(y.o, {
                              user: t,
                              displayProfile: l,
                              avatarSize: p._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(em, {
                              className: q.jU,
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !n),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: q.b$,
                              children: [
                                  (0, r.jsx)(U.A, { className: q.Bj, usernameClass: q.TE, name: t.toString() }),
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
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !n),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: q.Un,
                              children: [
                                  (0, r.jsx)(U.A, { className: q.Bj, usernameClass: q.TE, name: t.toString() }),
                                  (0, r.jsx)(p.tvc, { size: "md", color: "currentColor", className: q.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(ep, {
            description: o ? $.intl.format($.t.xCaYwE, {}) : $.intl.format($.t["gpqr+n"], {}),
            onLearnMore: () => {
                i(),
                    (0, b.openUserSettings)(P.X.PROFILE_PANEL),
                    k.default.track(Z.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
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
        { analyticsLocations: i } = (0, C.Ay)(_.A.PREMIUM_UNCANCEL_MODAL),
        l = (0, F.Xb)(),
        n = (0, H.t)(),
        o = a?.id ?? Y.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, W.A)(o);
    if (!(0, K.YE)(s, Y.PremiumTypes.TIER_2) || null == l) return null;
    let m = a?.status ?? F.Wo.UPCOMING,
        u = a?.nameUnformatted ?? Y.VD[Y.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, G.I)(o).standard,
        x = $.intl.string(u),
        j = m === F.Wo.EARNED,
        f = n?.days ?? 1,
        A = $.t.pwkxYF;
    if (j) {
        let e = Math.max((0, K.To)(l), 1);
        e >= 365 ? ((f = Math.floor(e / 365)), (A = $.t["/ojPfi"])) : ((f = e), (A = $.t.IItWYo));
    }
    return (0, r.jsx)(ep, {
        description: $.intl.format(A, { time: f }),
        onLearnMore: () => {
            t(),
                (0, B.D)({ analyticsLocations: i, displayProfile: null }),
                k.default.track(Z.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, r.jsx)(p.hLv, {
                className: q.nc,
                color: c,
                children: (0, r.jsx)("img", { alt: x, src: d, className: q.pq }),
            }),
    });
}
function eN(e) {
    let { premiumType: s } = e,
        t = (0, u.bG)([N.A], () => N.A.useReducedMotion),
        a = (0, h.Fj)(null)
            .filter((e) => e.type === T.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, u.yK)([E.A], () => E.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)),
        l = ex().emojiStickersVisual,
        n = s === Y.PremiumTypes.TIER_1;
    return (0, r.jsx)(ep, {
        description: n ? $.intl.format($.t.couiKJ, {}) : $.intl.format($.t["0hUHi6"], {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(Z.MVz.PREMIUM_DETAILS)),
                k.default.track(Z.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != a && a.length > 0) || (!n && null != i && i.length > 0)
                ? (0, r.jsxs)("div", {
                      className: q.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : D.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, r.jsx)("img", { className: q.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          n
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
                : (0, r.jsx)("img", { className: q.OP, alt: "", src: l }),
    });
}
function e_(e) {
    let { premiumType: s, onClose: t } = e;
    a.useEffect(() => j.h.wait(() => (0, f.CD)()), []);
    let i = (0, u.bG)([N.A], () => N.A.useReducedMotion),
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
                r = 0;
            return (
                s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [w.A.getGuild(t), r]
            );
        }),
        c = null != n && o > 0,
        d = ex().boostItemVisual;
    return (0, r.jsx)(ep, {
        description: s === Y.PremiumTypes.TIER_1 ? $.intl.format($.t.K4Hv69, {}) : $.intl.format($.t.wRxEDW, {}),
        onLearnMore: () => {
            t(),
                (0, b.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                k.default.track(Z.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: q.Ht,
                      children: (0, r.jsxs)("div", {
                          className: q.W5,
                          children: [
                              (0, r.jsx)(I.Ay, { guild: n, size: I.Ay.Sizes.MEDIUM, animate: !i, className: q.Hc }),
                              (0, r.jsxs)("div", {
                                  className: q.IA,
                                  children: [
                                      (0, r.jsx)(p.Text, {
                                          variant: "text-md/normal",
                                          className: l()(q.v, q.e0),
                                          children: n.name,
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
                                                  className: l()(q.v, q.x2),
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
let eC = () => {
    let e = ex().screenShareItemVisual;
    return (0, r.jsx)(ep, {
        description: $.intl.format($.t.wK04T1, {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(Z.MVz.STREAM_QUALITY_SETTINGS)),
                k.default.track(Z.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: e }),
    });
};
function eh(e) {
    let { premiumType: s } = e,
        t = ex().uploadsMessagesItemVisual;
    return (0, r.jsx)(ep, {
        description: s === Y.PremiumTypes.TIER_2 ? $.intl.format($.t.GsOFRJ, {}) : $.intl.format($.t.wFWO6D, {}),
        onLearnMore: () => {
            window.open(O.A.getArticleURL(Z.MVz.PREMIUM_DETAILS)),
                k.default.track(Z.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: t }),
    });
}
let eT = a.createContext({ isPremiumRebrand: !1 }),
    eI = () => a.useContext(eT).isPremiumRebrand;
function eE(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: n = !1, isPremiumRebrand: o = !1 } = e,
        c = a.useMemo(() => {
            let e = [];
            switch (t) {
                case Y.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eN, { premiumType: t }), (0, r.jsx)(eh, { premiumType: t }));
                    break;
                case Y.PremiumTypes.TIER_1:
                    n
                        ? e.push(
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eC, {}, "screen-share-item"),
                              (0, r.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                          )
                        : e.push(
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eN, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eC, {}, "screen-share-item"),
                              (0, r.jsx)(eh, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                          );
                    break;
                case Y.PremiumTypes.TIER_2:
                    n
                        ? e.push(
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eC, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(eA, { currentUser: s, onClose: i }, "badge-item"),
                              (0, r.jsx)(ef, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eN, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(e_, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eC, {}, "screen-share-item"),
                              (0, r.jsx)(eh, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, i, n]);
    return (0, r.jsx)(eT.Provider, {
        value: { isPremiumRebrand: o },
        children: (0, r.jsx)("div", { className: l()(q.xP, { [q.u0]: o, [q.mK]: o && c.length <= 2 }), children: c }),
    });
}
let eg = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: i,
            footer: l,
            onClose: n,
            onDiscountClaim: c,
            onContinue: m,
            analyticsLocations: x,
            isLoading: j = !1,
            churnUserDiscountOffer: f = null,
            isDowngrade: A = !1,
            subtitleIcon: N,
            subtitleClassName: _,
        } = e,
        C = (0, u.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    a.useEffect(() => {
        (0, M.A)(C.id, C.getAvatarURL(null, 80));
    }, [C]);
    let h = null != f && !j;
    return (a.useEffect(() => {
        h &&
            k.default.track(Z.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: f?.discount_id,
            });
    }, [h, x, f]),
    j)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(X.A, { premiumType: s, onClose: n }),
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
                  (0, r.jsx)(X.A, { premiumType: s, onClose: n }),
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
                                  className: _,
                                  children: [N, (0, r.jsx)(p.Text, { variant: "text-md/normal", children: i })],
                              }),
                              (0, r.jsx)(eE, { currentUser: C, premiumType: s, onClose: n, isDowngrade: A }),
                          ],
                      }),
                  }),
                  !h && (0, r.jsx)(d.jlY, { children: l }),
                  h && (0, r.jsx)(J.A, { churnUserDiscountOffer: f, onDiscountClaim: c, onContinue: m }),
              ],
          });
};
