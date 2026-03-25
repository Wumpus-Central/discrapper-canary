t.d(s, { A: () => eM, l: () => ev }), t(321073);
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
    h = t(688810),
    C = t(822123),
    I = t(770335),
    T = t(263063),
    E = t(931959),
    g = t(148355),
    v = t(591179),
    M = t(950191),
    U = t(576622),
    y = t(270574),
    L = t(657331),
    R = t(915614),
    P = t(946356),
    b = t(939496),
    w = t(780964),
    S = t(840065),
    V = t(71393),
    k = t(287809),
    D = t(178368),
    O = t(954571),
    K = t(486020),
    z = t(975571),
    W = t(927578),
    F = t(837921),
    H = t(112848),
    G = t(627380),
    B = t(704640),
    J = t(149757),
    X = t(30084),
    Y = t(683793),
    Z = t(499369),
    $ = t(788868),
    q = t(652215),
    Q = t(985018),
    ee = t(565274),
    es = t(324770),
    et = t(838436),
    er = t(376038),
    ea = t(66889),
    ei = t(578586),
    el = t(955868),
    en = t(631294),
    eo = t(751297),
    ec = t(943298),
    em = t(33487),
    eu = t(581820);
let ed = F.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    ex = {
        boostItemVisual: ei,
        emojiStickersVisual: el,
        screenShareItemVisual: em,
        uploadsMessagesItemVisual: en,
        uploadsMessagesItemVisualV2: eo,
        PL: ec,
        TR: eu,
    },
    ep = {
        boostItemVisual: es,
        emojiStickersVisual: et,
        screenShareItemVisual: em,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: ea,
        PL: ec,
        TR: eu,
    };
function ej() {
    let e = (0, A.Ay)();
    return (0, x.Mw)(e) ? ep : ex;
}
function ef(e) {
    let { description: s, onLearnMore: t, renderVisual: a } = e,
        i = eg();
    return (0, r.jsxs)("div", {
        className: l()(ee.Kw, { [ee.u0]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: l()(ee.p3, { [ee.u0]: i }),
                children: [
                    (0, r.jsx)(p.Text, { variant: "text-md/normal", children: s }),
                    (0, r.jsx)(p.QWc, { onClick: t, text: Q.intl.string(Q.t.hvVgAZ) }),
                ],
            }),
            (0, r.jsx)("div", { className: l()(ee.aS, { [ee.u0]: i }), children: a() }),
        ],
    });
}
function eA(e) {
    let { ...s } = e,
        { theme: t } = (0, b.E)(),
        a = (0, p.rdh)(p.LU0.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, r.jsx)(p.tvc, { size: "md", ...s, color: a });
}
function eN(e) {
    let s,
        { currentUser: t, premiumType: a, onClose: i } = e,
        l = (0, M.Ay)(t.id),
        n = (0, u.bG)([N.A], () => N.A.useReducedMotion),
        o = (0, v.X)("PremiumSubscriptionWhatYouLoseModal"),
        c = a === $.PremiumTypes.TIER_1;
    return (
        (s =
            l?.premiumType === $.PremiumTypes.TIER_2
                ? (0, r.jsxs)(P.A, {
                      user: t,
                      displayProfile: l,
                      forceShowPremium: !0,
                      themeType: null,
                      className: ee.Kq,
                      children: [
                          (0, r.jsx)(R.o, {
                              user: t,
                              displayProfile: l,
                              avatarSize: p._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(ed, {
                              className: ee.jU,
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !n),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: ee.b$,
                              children: [
                                  (0, r.jsx)(y.A, { className: ee.Bj, usernameClass: ee.TE, name: t.toString() }),
                                  (0, r.jsx)(eA, { className: ee.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: ee.xl,
                      children: [
                          (0, r.jsx)(ed, {
                              className: ee.wK,
                              src: t.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !n),
                              size: p._3J.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: ee.Un,
                              children: [
                                  (0, r.jsx)(y.A, { className: ee.Bj, usernameClass: ee.TE, name: t.toString() }),
                                  (0, r.jsx)(p.tvc, { size: "md", color: "currentColor", className: ee.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(ef, {
            description: c ? Q.intl.format(Q.t.xCaYwE, {}) : Q.intl.format(Q.t["gpqr+n"], {}),
            onLearnMore: () => {
                i(),
                    o ? (0, L.openUserProfileModal)({ userId: t.id }) : (0, S.openUserSettings)(w.X.PROFILE_PANEL),
                    O.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function e_(e) {
    let { currentUser: s, onClose: t } = e,
        a = (0, H.$F)(),
        { analyticsLocations: i } = (0, h.Ay)(_.A.PREMIUM_UNCANCEL_MODAL),
        l = (0, H.Xb)(),
        n = (0, G.t)(),
        o = a?.id ?? $.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, B.A)(o);
    if (!(0, W.YE)(s, $.PremiumTypes.TIER_2) || null == l) return null;
    let m = a?.status ?? H.Wo.UPCOMING,
        u = a?.nameUnformatted ?? $.VD[$.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, J.I)(o).standard,
        x = Q.intl.string(u),
        j = m === H.Wo.EARNED,
        f = n?.days ?? 1,
        A = Q.t.pwkxYF;
    if (j) {
        let e = Math.max((0, W.To)(l), 1);
        e >= 365 ? ((f = Math.floor(e / 365)), (A = Q.t["/ojPfi"])) : ((f = e), (A = Q.t.IItWYo));
    }
    return (0, r.jsx)(ef, {
        description: Q.intl.format(A, { time: f }),
        onLearnMore: () => {
            t(),
                (0, X.D)({ analyticsLocations: i, displayProfile: null }),
                O.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, r.jsx)(p.hLv, {
                className: ee.nc,
                color: c,
                children: (0, r.jsx)("img", { alt: x, src: d, className: ee.pq }),
            }),
    });
}
function eh(e) {
    let { premiumType: s } = e,
        t = (0, u.bG)([N.A], () => N.A.useReducedMotion),
        a = (0, C.Fj)(null)
            .filter((e) => e.type === I.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, u.yK)([E.A], () => E.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)),
        l = ej().emojiStickersVisual,
        n = s === $.PremiumTypes.TIER_1;
    return (0, r.jsx)(ef, {
        description: n ? Q.intl.format(Q.t.couiKJ, {}) : Q.intl.format(Q.t["0hUHi6"], {}),
        onLearnMore: () => {
            window.open(z.A.getArticleURL(q.MVz.PREMIUM_DETAILS)),
                O.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != a && a.length > 0) || (!n && null != i && i.length > 0)
                ? (0, r.jsxs)("div", {
                      className: ee.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : K.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, r.jsx)("img", { className: ee.d7, alt: "", src: e }, `emoji-${s}`)
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
                : (0, r.jsx)("img", { className: ee.OP, alt: "", src: l }),
    });
}
function eC(e) {
    let { premiumType: s, onClose: t } = e;
    a.useEffect(() => j.h.wait(() => (0, f.CD)()), []);
    let i = (0, u.bG)([N.A], () => N.A.useReducedMotion),
        [n, o] = (0, u.yK)([D.A, V.A], () => {
            let e = D.A.boostSlots,
                s = new Map();
            m()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != V.A.getGuild(e)) {
                        let t = s.get(e) ?? 0;
                        s.set(e, t + 1);
                    }
                });
            let t = null,
                r = 0;
            return (
                s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [V.A.getGuild(t), r]
            );
        }),
        c = null != n && o > 0,
        d = ej().boostItemVisual;
    return (0, r.jsx)(ef, {
        description: s === $.PremiumTypes.TIER_1 ? Q.intl.format(Q.t.K4Hv69, {}) : Q.intl.format(Q.t.wRxEDW, {}),
        onLearnMore: () => {
            t(),
                (0, S.openUserSettings)(w.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                O.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: ee.Ht,
                      children: (0, r.jsxs)("div", {
                          className: ee.W5,
                          children: [
                              (0, r.jsx)(T.Ay, { guild: n, size: T.Ay.Sizes.MEDIUM, animate: !i, className: ee.Hc }),
                              (0, r.jsxs)("div", {
                                  className: ee.IA,
                                  children: [
                                      (0, r.jsx)(p.Text, {
                                          variant: "text-md/normal",
                                          className: l()(ee.v, ee.e0),
                                          children: n.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: ee.i$,
                                          children: [
                                              (0, r.jsx)(p._Jp, {
                                                  color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: ee.jZ,
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  variant: "text-xs/normal",
                                                  className: l()(ee.v, ee.x2),
                                                  children: Q.intl.format(Q.t["Ou/g/P"], { boostCount: o }),
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
    let e = ej().screenShareItemVisual;
    return (0, r.jsx)(ef, {
        description: Q.intl.format(Q.t.wK04T1, {}),
        onLearnMore: () => {
            window.open(z.A.getArticleURL(q.MVz.STREAM_QUALITY_SETTINGS)),
                O.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: e }),
    });
};
function eT(e) {
    let { premiumType: s } = e,
        t = ej().uploadsMessagesItemVisual;
    return (0, r.jsx)(ef, {
        description: s === $.PremiumTypes.TIER_2 ? Q.intl.format(Q.t.GsOFRJ, {}) : Q.intl.format(Q.t.wFWO6D, {}),
        onLearnMore: () => {
            window.open(z.A.getArticleURL(q.MVz.PREMIUM_DETAILS)),
                O.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: t }),
    });
}
let eE = a.createContext({ isPremiumRebrand: !1 }),
    eg = () => a.useContext(eE).isPremiumRebrand;
function ev(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: n = !1, isPremiumRebrand: o = !1 } = e,
        c = a.useMemo(() => {
            let e = [];
            switch (t) {
                case $.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eh, { premiumType: t }), (0, r.jsx)(eT, { premiumType: t }));
                    break;
                case $.PremiumTypes.TIER_1:
                    n
                        ? e.push(
                              (0, r.jsx)(eN, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eC, { premiumType: t, onClose: i }, "boost-item"),
                          )
                        : e.push(
                              (0, r.jsx)(eN, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eh, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(eC, { premiumType: t, onClose: i }, "boost-item"),
                          );
                    break;
                case $.PremiumTypes.TIER_2:
                    n
                        ? e.push(
                              (0, r.jsx)(eN, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eC, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(e_, { currentUser: s, onClose: i }, "badge-item"),
                              (0, r.jsx)(eN, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eh, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eC, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, i, n]);
    return (0, r.jsx)(eE.Provider, {
        value: { isPremiumRebrand: o },
        children: (0, r.jsx)("div", {
            className: l()(ee.xP, { [ee.u0]: o, [ee.mK]: o && c.length <= 2 }),
            children: c,
        }),
    });
}
let eM = function (e) {
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
        h = (0, u.bG)([k.default], () => {
            let e = k.default.getCurrentUser();
            return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    a.useEffect(() => {
        (0, U.A)(h.id, h.getAvatarURL(null, 80));
    }, [h]);
    let C = null != f && !j;
    return (a.useEffect(() => {
        C &&
            O.default.track(q.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: x,
                discount_id: f?.discount_id,
            });
    }, [C, x, f]),
    j)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.A, { premiumType: s, onClose: n }),
                  (0, r.jsx)(d.cwr, {
                      children: (0, r.jsx)("div", {
                          className: ee.rf,
                          children: (0, r.jsx)(p.y$y, { className: ee.u1 }),
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.A, { premiumType: s, onClose: n }),
                  (0, r.jsx)(d.cwr, {
                      children: (0, r.jsxs)("div", {
                          className: ee.rf,
                          children: [
                              (0, r.jsx)(p.Heading, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: ee.DD,
                                  children: t,
                              }),
                              (0, r.jsxs)("div", {
                                  className: _,
                                  children: [N, (0, r.jsx)(p.Text, { variant: "text-md/normal", children: i })],
                              }),
                              (0, r.jsx)(ev, { currentUser: h, premiumType: s, onClose: n, isDowngrade: A }),
                          ],
                      }),
                  }),
                  !C && (0, r.jsx)(d.jlY, { children: l }),
                  C && (0, r.jsx)(Y.A, { churnUserDiscountOffer: f, onDiscountClaim: c, onContinue: m }),
              ],
          });
};
