t.d(s, { A: () => ek, l: () => eD }), t(321073);
var r = t(627968),
    a = t(64700),
    i = t(503698),
    l = t.n(i),
    n = t(284009),
    o = t.n(n),
    c = t(735438),
    m = t.n(c),
    u = t(311907),
    d = t(430993),
    x = t(364840),
    p = t(462887),
    j = t(97808),
    f = t(834730),
    A = t(123292),
    N = t(602853),
    _ = t(827734),
    C = t(403581),
    E = t(778712),
    h = t(315629),
    I = t(104510),
    T = t(289873),
    g = t(534514),
    v = t(73153),
    M = t(923408),
    U = t(736653),
    y = t(775602),
    R = t(793574),
    P = t(688810),
    L = t(822123),
    b = t(770335),
    S = t(263063),
    w = t(931959),
    V = t(148355),
    D = t(591179),
    k = t(950191),
    O = t(576622),
    K = t(270574),
    z = t(657331),
    W = t(915614),
    F = t(946356),
    H = t(939496),
    G = t(780964),
    B = t(858897),
    X = t(71393),
    Y = t(287809),
    Z = t(178368),
    $ = t(954571),
    q = t(486020),
    J = t(975571),
    Q = t(927578),
    ee = t(837921),
    es = t(112848),
    et = t(627380),
    er = t(704640),
    ea = t(149757),
    ei = t(30084),
    el = t(683793),
    en = t(499369),
    eo = t(788868),
    ec = t(652215),
    em = t(985018),
    eu = t(414135),
    ed = t(324770),
    ex = t(838436),
    ep = t(376038),
    ej = t(66889),
    ef = t(578586),
    eA = t(955868),
    eN = t(631294),
    e_ = t(751297),
    eC = t(943298),
    eE = t(33487),
    eh = t(581820);
let eI = ee.Ay.getEnableHardwareAcceleration() ? j.Js : j.eu,
    eT = {
        boostItemVisual: ef,
        emojiStickersVisual: eA,
        screenShareItemVisual: eE,
        uploadsMessagesItemVisual: eN,
        uploadsMessagesItemVisualV2: e_,
        PL: eC,
        TR: eh,
    },
    eg = {
        boostItemVisual: ed,
        emojiStickersVisual: ex,
        screenShareItemVisual: eE,
        uploadsMessagesItemVisual: ep,
        uploadsMessagesItemVisualV2: ej,
        PL: eC,
        TR: eh,
    };
function ev() {
    let e = (0, U.Ay)();
    return (0, p.M)(e) ? eg : eT;
}
function eM(e) {
    let { description: s, onLearnMore: t, renderVisual: a } = e,
        i = eV();
    return (0, r.jsxs)("div", {
        className: l()(eu.Kw, { [eu.u0]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: l()(eu.p3, { [eu.u0]: i }),
                children: [
                    (0, r.jsx)(f.E, { variant: "text-md/normal", children: s }),
                    (0, r.jsx)(A.Q, { onClick: t, text: em.intl.string(em.t.hvVgAZ) }),
                ],
            }),
            (0, r.jsx)("div", { className: l()(eu.aS, { [eu.u0]: i }), children: a() }),
        ],
    });
}
function eU(e) {
    let { ...s } = e,
        { theme: t } = (0, H.E)(),
        a = (0, N.r)(_.A.colors.INTERACTIVE_TEXT_ACTIVE, t).hex();
    return (0, r.jsx)(C.t, { size: "md", ...s, color: a });
}
function ey(e) {
    let s,
        { currentUser: t, premiumType: a, onClose: i } = e,
        l = (0, k.Ay)(t.id),
        n = (0, u.bG)([y.A], () => y.A.useReducedMotion),
        o = (0, D.X)("PremiumSubscriptionWhatYouLoseModal"),
        c = a === eo.PremiumTypes.TIER_1;
    return (
        (s =
            l?.premiumType === eo.PremiumTypes.TIER_2
                ? (0, r.jsxs)(F.A, {
                      user: t,
                      displayProfile: l,
                      forceShowPremium: !0,
                      themeType: null,
                      className: eu.Kq,
                      children: [
                          (0, r.jsx)(W.o, {
                              user: t,
                              displayProfile: l,
                              avatarSize: E._3.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(eI, {
                              className: eu.jU,
                              src: t.getAvatarURL(void 0, (0, E.FT)(E._3.SIZE_56), !n),
                              size: E._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: eu.b$,
                              children: [
                                  (0, r.jsx)(K.A, { className: eu.Bj, usernameClass: eu.TE, name: t.toString() }),
                                  (0, r.jsx)(eU, { className: eu.kC }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: eu.xl,
                      children: [
                          (0, r.jsx)(eI, {
                              className: eu.wK,
                              src: t.getAvatarURL(void 0, (0, E.FT)(E._3.SIZE_56), !n),
                              size: E._3.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: eu.Un,
                              children: [
                                  (0, r.jsx)(K.A, { className: eu.Bj, usernameClass: eu.TE, name: t.toString() }),
                                  (0, r.jsx)(C.t, { size: "md", color: "currentColor", className: eu.kC }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eM, {
            description: c ? em.intl.format(em.t.xCaYwE, {}) : em.intl.format(em.t["gpqr+n"], {}),
            onLearnMore: () => {
                i(),
                    o ? (0, z.openUserProfileModal)({ userId: t.id }) : (0, B.openUserSettings)(G.X.PROFILE_PANEL),
                    $.default.track(ec.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function eR(e) {
    let { currentUser: s, onClose: t } = e,
        a = (0, es.$F)(),
        { analyticsLocations: i } = (0, P.Ay)(R.A.PREMIUM_UNCANCEL_MODAL),
        l = (0, es.Xb)(),
        n = (0, et.t)(),
        o = a?.id ?? eo.Ac.PREMIUM_TENURE_1_MONTH,
        c = (0, er.A)(o);
    if (!(0, Q.YE)(s, eo.PremiumTypes.TIER_2) || null == l) return null;
    let m = a?.status ?? es.Wo.UPCOMING,
        u = a?.nameUnformatted ?? eo.VD[eo.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        d = (0, ea.I)(o).standard,
        x = em.intl.string(u),
        p = m === es.Wo.EARNED,
        j = n?.days ?? 1,
        f = em.t.pwkxYF;
    if (p) {
        let e = Math.max((0, Q.To)(l), 1);
        e >= 365 ? ((j = Math.floor(e / 365)), (f = em.t["/ojPfi"])) : ((j = e), (f = em.t.IItWYo));
    }
    return (0, r.jsx)(eM, {
        description: em.intl.format(f, { time: j }),
        onLearnMore: () => {
            t(),
                (0, ei.D)({ analyticsLocations: i, displayProfile: null }),
                $.default.track(ec.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, r.jsx)(h.h, {
                className: eu.nc,
                color: c,
                children: (0, r.jsx)("img", { alt: x, src: d, className: eu.pq }),
            }),
    });
}
function eP(e) {
    let { premiumType: s } = e,
        t = (0, u.bG)([y.A], () => y.A.useReducedMotion),
        a = (0, L.Fj)(null)
            .filter((e) => e.type === b.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, u.yK)([w.A], () => w.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)),
        l = ev().emojiStickersVisual,
        n = s === eo.PremiumTypes.TIER_1;
    return (0, r.jsx)(eM, {
        description: n ? em.intl.format(em.t.couiKJ, {}) : em.intl.format(em.t["0hUHi6"], {}),
        onLearnMore: () => {
            window.open(J.A.getArticleURL(ec.MVz.PREMIUM_DETAILS)),
                $.default.track(ec.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != a && a.length > 0) || (!n && null != i && i.length > 0)
                ? (0, r.jsxs)("div", {
                      className: eu.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : q.Ay.getEmojiURL({ id: e.id, animated: !t && e.animated, size: 58 }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, r.jsx)("img", { className: eu.d7, alt: "", src: e }, `emoji-${s}`)
                                      : null,
                              ),
                          n
                              ? null
                              : i.map((e) =>
                                    (0, r.jsx)(
                                        V.A,
                                        { disableAnimation: t, sticker: e, size: 58, withLoadingIndicator: !1 },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, r.jsx)("img", { className: eu.OP, alt: "", src: l }),
    });
}
function eL(e) {
    let { premiumType: s, onClose: t } = e;
    a.useEffect(() => v.h.wait(() => (0, M.CD)()), []);
    let i = (0, u.bG)([y.A], () => y.A.useReducedMotion),
        [n, o] = (0, u.yK)([Z.A, X.A], () => {
            let e = Z.A.boostSlots,
                s = new Map();
            m()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != X.A.getGuild(e)) {
                        let t = s.get(e) ?? 0;
                        s.set(e, t + 1);
                    }
                });
            let t = null,
                r = 0;
            return (
                s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [X.A.getGuild(t), r]
            );
        }),
        c = null != n && o > 0,
        d = ev().boostItemVisual;
    return (0, r.jsx)(eM, {
        description: s === eo.PremiumTypes.TIER_1 ? em.intl.format(em.t.K4Hv69, {}) : em.intl.format(em.t.wRxEDW, {}),
        onLearnMore: () => {
            t(),
                (0, B.openUserSettings)(G.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                $.default.track(ec.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: eu.Ht,
                      children: (0, r.jsxs)("div", {
                          className: eu.W5,
                          children: [
                              (0, r.jsx)(S.Ay, { guild: n, size: S.Ay.Sizes.MEDIUM, animate: !i, className: eu.Hc }),
                              (0, r.jsxs)("div", {
                                  className: eu.IA,
                                  children: [
                                      (0, r.jsx)(f.E, {
                                          variant: "text-md/normal",
                                          className: l()(eu.v, eu.e0),
                                          children: n.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: eu.i$,
                                          children: [
                                              (0, r.jsx)(I._, {
                                                  color: _.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: eu.jZ,
                                              }),
                                              (0, r.jsx)(f.E, {
                                                  variant: "text-xs/normal",
                                                  className: l()(eu.v, eu.x2),
                                                  children: em.intl.format(em.t["Ou/g/P"], { boostCount: o }),
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
let eb = () => {
    let e = ev().screenShareItemVisual;
    return (0, r.jsx)(eM, {
        description: em.intl.format(em.t.wK04T1, {}),
        onLearnMore: () => {
            window.open(J.A.getArticleURL(ec.MVz.STREAM_QUALITY_SETTINGS)),
                $.default.track(ec.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: e }),
    });
};
function eS(e) {
    let { premiumType: s } = e,
        t = ev().uploadsMessagesItemVisual;
    return (0, r.jsx)(eM, {
        description: s === eo.PremiumTypes.TIER_2 ? em.intl.format(em.t.GsOFRJ, {}) : em.intl.format(em.t.wFWO6D, {}),
        onLearnMore: () => {
            window.open(J.A.getArticleURL(ec.MVz.PREMIUM_DETAILS)),
                $.default.track(ec.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () => (0, r.jsx)("img", { alt: "", src: t }),
    });
}
let ew = a.createContext({ isPremiumRebrand: !1 }),
    eV = () => a.useContext(ew).isPremiumRebrand;
function eD(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: n = !1, isPremiumRebrand: o = !1 } = e,
        c = a.useMemo(() => {
            let e = [];
            switch (t) {
                case eo.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eP, { premiumType: t }), (0, r.jsx)(eS, { premiumType: t }));
                    break;
                case eo.PremiumTypes.TIER_1:
                    n
                        ? e.push(
                              (0, r.jsx)(ey, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eb, {}, "screen-share-item"),
                              (0, r.jsx)(eL, { premiumType: t, onClose: i }, "boost-item"),
                          )
                        : e.push(
                              (0, r.jsx)(ey, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eP, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eb, {}, "screen-share-item"),
                              (0, r.jsx)(eS, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(eL, { premiumType: t, onClose: i }, "boost-item"),
                          );
                    break;
                case eo.PremiumTypes.TIER_2:
                    n
                        ? e.push(
                              (0, r.jsx)(ey, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eL, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eb, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(eR, { currentUser: s, onClose: i }, "badge-item"),
                              (0, r.jsx)(ey, { currentUser: s, premiumType: t, onClose: i }, "profile-item"),
                              (0, r.jsx)(eP, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eL, { premiumType: t, onClose: i }, "boost-item"),
                              (0, r.jsx)(eb, {}, "screen-share-item"),
                              (0, r.jsx)(eS, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, i, n]);
    return (0, r.jsx)(ew.Provider, {
        value: { isPremiumRebrand: o },
        children: (0, r.jsx)("div", {
            className: l()(eu.xP, { [eu.u0]: o, [eu.mK]: o && c.length <= 2 }),
            children: c,
        }),
    });
}
let ek = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: i,
            footer: l,
            onClose: n,
            onDiscountClaim: c,
            onContinue: m,
            analyticsLocations: p,
            isLoading: j = !1,
            churnUserDiscountOffer: A = null,
            isDowngrade: N = !1,
            subtitleIcon: _,
            subtitleClassName: C,
        } = e,
        E = (0, u.bG)([Y.default], () => {
            let e = Y.default.getCurrentUser();
            return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    a.useEffect(() => {
        (0, O.A)(E.id, E.getAvatarURL(null, 80));
    }, [E]);
    let h = null != A && !j;
    return (a.useEffect(() => {
        h &&
            $.default.track(ec.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: p,
                discount_id: A?.discount_id,
            });
    }, [h, p, A]),
    j)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(en.A, { premiumType: s, onClose: n }),
                  (0, r.jsx)(d.c, {
                      children: (0, r.jsx)("div", {
                          className: eu.rf,
                          children: (0, r.jsx)(T.y, { className: eu.u1 }),
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(en.A, { premiumType: s, onClose: n }),
                  (0, r.jsx)(d.c, {
                      children: (0, r.jsxs)("div", {
                          className: eu.rf,
                          children: [
                              (0, r.jsx)(g.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  className: eu.DD,
                                  children: t,
                              }),
                              (0, r.jsxs)("div", {
                                  className: C,
                                  children: [_, (0, r.jsx)(f.E, { variant: "text-md/normal", children: i })],
                              }),
                              (0, r.jsx)(eD, { currentUser: E, premiumType: s, onClose: n, isDowngrade: N }),
                          ],
                      }),
                  }),
                  !h && (0, r.jsx)(x.j, { children: l }),
                  h && (0, r.jsx)(el.A, { churnUserDiscountOffer: A, onDiscountClaim: c, onContinue: m }),
              ],
          });
};
