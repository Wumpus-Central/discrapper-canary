t.d(s, {
    Z: () => eb,
    g: () => e_,
}),
    t(953529),
    t(388685),
    t(539854);
var r = t(951288),
    n = t(647438),
    a = t(120356),
    i = t.n(a),
    o = t(512722),
    l = t.n(o),
    c = t(392711),
    u = t.n(c),
    m = t(442837),
    d = t(780384),
    p = t(481060),
    f = t(570140),
    x = t(179360),
    g = t(410030),
    j = t(607070),
    C = t(100527),
    N = t(906732),
    h = t(543241),
    E = t(906411),
    I = t(565138),
    T = t(822179),
    _ = t(419922),
    b = t(687158),
    M = t(484459),
    U = t(813549),
    v = t(867176),
    P = t(502762),
    R = t(652853),
    y = t(313789),
    O = t(518596),
    L = t(430824),
    A = t(594174),
    S = t(314884),
    w = t(626135),
    Z = t(768581),
    V = t(63063),
    k = t(74538),
    F = t(998502),
    G = t(768634),
    D = t(848572),
    z = t(787528),
    B = t(768865),
    K = t(789155),
    W = t(798769),
    H = t(474936),
    Y = t(981631),
    q = t(388032),
    Q = t(616885),
    X = t(834982),
    $ = t(912450),
    J = t(703548),
    ee = t(869333),
    es = t(652528),
    et = t(874692),
    er = t(391458),
    en = t(70967),
    ea = t(674264),
    ei = t(360088),
    eo = t(304880);
function el() {
    return (el =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
let ec = {
        [H.VU.PREMIUM_TENURE_1_MONTH]: Q.badgeGradientBronze,
        [H.VU.PREMIUM_TENURE_3_MONTH]: Q.badgeGradientSilver,
        [H.VU.PREMIUM_TENURE_6_MONTH]: Q.badgeGradientGold,
        [H.VU.PREMIUM_TENURE_12_MONTH]: Q.badgeGradientPlatinum,
        [H.VU.PREMIUM_TENURE_24_MONTH]: Q.badgeGradientDiamond,
        [H.VU.PREMIUM_TENURE_36_MONTH]: Q.badgeGradientEmerald,
        [H.VU.PREMIUM_TENURE_60_MONTH]: Q.badgeGradientRuby,
        [H.VU.PREMIUM_TENURE_72_MONTH]: Q.badgeGradientOpal,
    },
    eu = F.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    em = {
        boostItemVisual: es,
        emojiStickersVisual: et,
        screenShareItemVisual: ei,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: en,
        PL: ea,
        TR: eo,
    },
    ed = {
        boostItemVisual: X,
        emojiStickersVisual: $,
        screenShareItemVisual: ei,
        uploadsMessagesItemVisual: J,
        uploadsMessagesItemVisualV2: ee,
        PL: ea,
        TR: eo,
    };
function ep() {
    let e = (0, g.ZP)();
    return (0, d.wj)(e) ? ed : em;
}
function ef(e) {
    let { description: s, onLearnMore: t, renderVisual: n } = e,
        a = eT();
    return (0, r.jsxs)("div", {
        className: i()(Q.whatYouLoseItem, { [Q.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: i()(Q.whatYouLoseItemLeftColumn, { [Q.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(p.Text, {
                        variant: "text-md/normal",
                        children: s,
                    }),
                    (0, r.jsx)(p.Avr, {
                        onClick: t,
                        text: q.intl.string(q.t.hvVgAQ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: i()(Q.whatYouLoseItemRightColumn, { [Q.premiumRebrand]: a }),
                children: n(),
            }),
        ],
    });
}
function ex(e) {
    var s,
        t,
        n = el(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })(e),
        );
    let { theme: a } = (0, R.z)(),
        i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
    return (0, r.jsx)(
        p.SrA,
        ((s = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = null != arguments[s] ? arguments[s] : {},
                    r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    r.forEach(function (s) {
                        var r;
                        (r = t[s]),
                            s in e
                                ? Object.defineProperty(e, s, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[s] = r);
                    });
            }
            return e;
        })({ size: "md" }, n)),
        (t = t = { color: i }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
            : (function (e, s) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        s),
    );
}
function eg(e) {
    let s,
        { currentUser: t, premiumType: n, onClose: a } = e,
        i = (0, b.ZP)(t.id),
        o = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
        l = n === H.PremiumTypes.TIER_1;
    return (
        (s =
            (null == i ? void 0 : i.premiumType) === H.PremiumTypes.TIER_2
                ? (0, r.jsxs)(P.Z, {
                      user: t,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Q.profileCard,
                      children: [
                          (0, r.jsx)(v.b, {
                              user: t,
                              displayProfile: i,
                              avatarSize: p.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(eu, {
                              className: Q.profileAvatar,
                              src: t.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.profileUserInfo,
                              children: [
                                  (0, r.jsx)(U.Z, {
                                      className: Q.profileNameTag,
                                      usernameClass: Q.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(ex, { className: Q.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: Q.profileCardTier1,
                      children: [
                          (0, r.jsx)(eu, {
                              className: Q.profileAvatarTier1,
                              src: t.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(U.Z, {
                                      className: Q.profileNameTag,
                                      usernameClass: Q.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(p.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Q.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(ef, {
            description: l ? q.intl.format(q.t.xCaYwM, {}) : q.intl.format(q.t["gpqr+v"], {}),
            onLearnMore: () => {
                a(),
                    (0, O.openUserSettings)(y.n.PROFILE_PANEL, { section: Y.oAB.PROFILE_CUSTOMIZATION }),
                    w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function ej(e) {
    var s, t, n, a;
    let { currentUser: o, onClose: l } = e,
        c = (0, G.C)(o, "BadgeItem"),
        u = (0, D.Rw)(),
        { analyticsLocations: m } = (0, N.ZP)(C.Z.PREMIUM_UNCANCEL_MODAL),
        d = (0, D.GG)();
    if (!c || null == d) return null;
    let f = null != (s = null == u ? void 0 : u.id) ? s : H.VU.PREMIUM_TENURE_1_MONTH,
        x = null != (t = null == u ? void 0 : u.status) ? t : D.Vq.UPCOMING,
        g =
            null != (n = null == u ? void 0 : u.nameUnformatted)
                ? n
                : H.vK[H.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        j = (0, z.J)(f),
        h = q.intl.string(g),
        E = x === D.Vq.EARNED,
        I = null != u && "daysLeft" in u ? u.daysLeft : 1,
        T = q.t.pwkxYG;
    if (E) {
        let e = Math.max((0, k.k)(d), 1);
        e >= 365 ? ((I = Math.floor(e / 365)), (T = q.t["/ojPfn"])) : ((I = e), (T = q.t.IItWYm));
    }
    let _ = null != (a = ec[f]) ? a : Q.badgeGradientBronze;
    return (0, r.jsx)(ef, {
        description: q.intl.format(T, { time: I }),
        onLearnMore: () => {
            l(),
                (0, B.k)({
                    analyticsLocations: m,
                    displayProfile: null,
                }),
                w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, r.jsxs)(p.$1m, {
                className: i()(Q.badgeGradientWrapper, _),
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: j,
                        className: i()(Q.badgeImage, Q.blurredBadgeImage),
                    }),
                    (0, r.jsx)("img", {
                        alt: h,
                        src: j,
                        className: Q.badgeImage,
                    }),
                ],
            }),
    });
}
function eC(e) {
    let { premiumType: s } = e,
        t = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
        n = (0, h.wC)(null)
            .filter((e) => e.type === E.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, m.Wu)([T.Z], () => T.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        i = ep().emojiStickersVisual,
        o = s === H.PremiumTypes.TIER_1;
    return (0, r.jsx)(ef, {
        description: o ? q.intl.format(q.t.couiKC, {}) : q.intl.format(q.t["0hUHi4"], {}),
        onLearnMore: () => {
            window.open(V.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS)),
                w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != n && n.length > 0) || (!o && null != a && a.length > 0)
                ? (0, r.jsxs)("div", {
                      className: Q.emojiStickersPersonalizedContainer,
                      children: [
                          n
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : Z.ZP.getEmojiURL({
                                            id: e.id,
                                            animated: !t && e.animated,
                                            size: 58,
                                        }),
                              )
                              .map((e, s) =>
                                  null != e
                                      ? (0, r.jsx)(
                                            "img",
                                            {
                                                className: Q.personalizedEmoji,
                                                alt: "",
                                                src: e,
                                            },
                                            "emoji-".concat(s),
                                        )
                                      : null,
                              ),
                          o
                              ? null
                              : a.map((e) =>
                                    (0, r.jsx)(
                                        _.Z,
                                        {
                                            disableAnimation: t,
                                            sticker: e,
                                            size: 58,
                                            withLoadingIndicator: !1,
                                        },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, r.jsx)("img", {
                      className: Q.nonPersonalizedGraphic,
                      alt: "",
                      src: i,
                  }),
    });
}
function eN(e) {
    let { premiumType: s, onClose: t } = e;
    n.useEffect(() => f.Z.wait(() => (0, x.X8)()), []);
    let a = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([S.Z, L.Z], () => {
            let e = S.Z.boostSlots,
                s = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != L.Z.getGuild(e)) {
                        var t;
                        let r = null != (t = s.get(e)) ? t : 0;
                        s.set(e, r + 1);
                    }
                });
            let t = null,
                r = 0;
            return (
                s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [L.Z.getGuild(t), r]
            );
        }),
        c = null != o && l > 0,
        d = ep().boostItemVisual;
    return (0, r.jsx)(ef, {
        description: s === H.PremiumTypes.TIER_1 ? q.intl.format(q.t["K4Hv6+"], {}) : q.intl.format(q.t.wRxEDQ, {}),
        onLearnMore: () => {
            t(),
                (0, O.openUserSettings)(y.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: Y.oAB.GUILD_BOOSTING }),
                w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: Q.boostCardContainer,
                      children: (0, r.jsxs)("div", {
                          className: Q.boostCard,
                          children: [
                              (0, r.jsx)(I.Z, {
                                  guild: o,
                                  size: I.Z.Sizes.MEDIUM,
                                  animate: !a,
                                  className: Q.boostCardIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: Q.boostCardInfo,
                                  children: [
                                      (0, r.jsx)(p.Text, {
                                          variant: "text-md/normal",
                                          className: i()(Q.textSingleLineEllipsis, Q.boostCardTitle),
                                          children: o.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Q.boostCardSubtitle,
                                          children: [
                                              (0, r.jsx)(p.$Eu, {
                                                  color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: Q.boostCardGem,
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  variant: "text-xs/normal",
                                                  className: i()(Q.textSingleLineEllipsis, Q.boostCardCount),
                                                  children: q.intl.format(q.t["Ou/g/P"], { boostCount: l }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: d,
                  }),
    });
}
let eh = () => {
    let e = ep().screenShareItemVisual;
    return (0, r.jsx)(ef, {
        description: q.intl.format(q.t.wK04T0, {}),
        onLearnMore: () => {
            window.open(V.Z.getArticleURL(Y.BhN.STREAM_QUALITY_SETTINGS)),
                w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: e,
            }),
    });
};
function eE(e) {
    let { premiumType: s } = e,
        t = ep().uploadsMessagesItemVisual;
    return (0, r.jsx)(ef, {
        description: s === H.PremiumTypes.TIER_2 ? q.intl.format(q.t.GsOFRE, {}) : q.intl.format(q.t.wFWO6O, {}),
        onLearnMore: () => {
            window.open(V.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS)),
                w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: t,
            }),
    });
}
let eI = n.createContext({ isPremiumRebrand: !1 }),
    eT = () => n.useContext(eI).isPremiumRebrand;
function e_(e) {
    let { currentUser: s, premiumType: t, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        c = n.useMemo(() => {
            let e = [];
            switch (t) {
                case H.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eC, { premiumType: t }), (0, r.jsx)(eE, { premiumType: t }));
                    break;
                case H.PremiumTypes.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eh, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eC, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eh, {}, "screen-share-item"),
                              (0, r.jsx)(eE, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          );
                    break;
                case H.PremiumTypes.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eh, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  ej,
                                  {
                                      currentUser: s,
                                      onClose: a,
                                  },
                                  "badge-item",
                              ),
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eC, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eh, {}, "screen-share-item"),
                              (0, r.jsx)(eE, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, a, o]);
    return (0, r.jsx)(eI.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", {
            className: i()(Q.whatYouLoseItemContainer, {
                [Q.premiumRebrand]: l,
                [Q.noMargin]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let eb = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: a,
            footer: i,
            onClose: o,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: d,
            isLoading: f = !1,
            churnUserDiscountOffer: x = null,
            isDowngrade: g = !1,
            subtitleIcon: j,
            subtitleClassName: C,
        } = e,
        N = (0, m.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    n.useEffect(() => {
        (0, M.Z)(N.id, N.getAvatarURL(null, 80));
    }, [N]);
    let h = null != x && !f;
    return (n.useEffect(() => {
        h &&
            w.default.track(Y.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == x ? void 0 : x.discount_id,
            });
    }, [h, d, x]),
    f)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(W.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsx)(p.hzk, {
                      "data-migration-pending": !0,
                      className: Q.body,
                      children: (0, r.jsx)(p.$jN, { className: Q.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(W.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsxs)(p.hzk, {
                      "data-migration-pending": !0,
                      className: Q.body,
                      children: [
                          (0, r.jsx)(p.X6q, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: Q.title,
                              children: t,
                          }),
                          (0, r.jsxs)("div", {
                              className: C,
                              children: [
                                  j,
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-md/normal",
                                      children: a,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(e_, {
                              currentUser: N,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: g,
                          }),
                      ],
                  }),
                  !h &&
                      (0, r.jsx)(p.mzw, {
                          "data-migration-pending": !0,
                          children: i,
                      }),
                  h &&
                      (0, r.jsx)(K.Z, {
                          churnUserDiscountOffer: x,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
