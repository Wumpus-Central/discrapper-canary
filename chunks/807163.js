s.d(t, {
    Z: () => eb,
    g: () => eT,
}),
    s(953529),
    s(388685),
    s(539854);
var r = s(951288),
    n = s(647438),
    a = s(120356),
    i = s.n(a),
    o = s(512722),
    l = s.n(o),
    c = s(392711),
    u = s.n(c),
    m = s(442837),
    d = s(780384),
    p = s(481060),
    f = s(570140),
    x = s(179360),
    g = s(410030),
    j = s(607070),
    C = s(100527),
    N = s(906732),
    h = s(543241),
    E = s(906411),
    I = s(565138),
    _ = s(822179),
    T = s(419922),
    b = s(687158),
    M = s(484459),
    U = s(813549),
    v = s(867176),
    R = s(502762),
    P = s(652853),
    O = s(313789),
    y = s(518596),
    L = s(430824),
    A = s(594174),
    S = s(314884),
    w = s(626135),
    Z = s(768581),
    V = s(63063),
    k = s(74538),
    F = s(998502),
    G = s(768634),
    D = s(848572),
    z = s(787528),
    B = s(768865),
    K = s(789155),
    W = s(798769),
    H = s(474936),
    Y = s(981631),
    q = s(388032),
    Q = s(616885),
    X = s(834982),
    $ = s(912450),
    J = s(703548),
    ee = s(869333),
    et = s(652528),
    es = s(874692),
    er = s(391458),
    en = s(70967),
    ea = s(674264),
    ei = s(360088),
    eo = s(304880);
function el() {
    return (el =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
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
        boostItemVisual: et,
        emojiStickersVisual: es,
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
    let { description: t, onLearnMore: s, renderVisual: n } = e,
        a = e_();
    return (0, r.jsxs)("div", {
        className: i()(Q.whatYouLoseItem, { [Q.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: i()(Q.whatYouLoseItemLeftColumn, { [Q.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(p.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                    (0, r.jsx)(p.Avr, {
                        onClick: s,
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
    var t,
        s,
        n = el(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })(e),
        );
    let { theme: a } = (0, P.z)(),
        i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
    return (0, r.jsx)(
        p.SrA,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(s);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(s).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(s, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = s[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({ size: "md" }, n)),
        (s = s = { color: i }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, r);
                  }
                  return s;
              })(Object(s)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
              }),
        t),
    );
}
function eg(e) {
    let t,
        { currentUser: s, premiumType: n, onClose: a } = e,
        i = (0, b.ZP)(s.id),
        o = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
        l = n === H.p9.TIER_1;
    return (
        (t =
            (null == i ? void 0 : i.premiumType) === H.p9.TIER_2
                ? (0, r.jsxs)(R.Z, {
                      user: s,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Q.profileCard,
                      children: [
                          (0, r.jsx)(v.b, {
                              user: s,
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
                              src: s.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.profileUserInfo,
                              children: [
                                  (0, r.jsx)(U.Z, {
                                      className: Q.profileNameTag,
                                      usernameClass: Q.profileNameTagUsername,
                                      name: s.toString(),
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
                              src: s.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              "aria-label": s.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(U.Z, {
                                      className: Q.profileNameTag,
                                      usernameClass: Q.profileNameTagUsername,
                                      name: s.toString(),
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
                    (0, y.openUserSettings)(O.n.PROFILE_PANEL, { section: Y.oAB.PROFILE_CUSTOMIZATION }),
                    w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => t,
        })
    );
}
function ej(e) {
    var t, s, n, a;
    let { currentUser: o, onClose: l } = e,
        c = (0, G.C)(o, "BadgeItem"),
        u = (0, D.Rw)(),
        { analyticsLocations: m } = (0, N.ZP)(C.Z.PREMIUM_UNCANCEL_MODAL),
        d = (0, D.GG)();
    if (!c || null == d) return null;
    let f = null != (t = null == u ? void 0 : u.id) ? t : H.VU.PREMIUM_TENURE_1_MONTH,
        x = null != (s = null == u ? void 0 : u.status) ? s : D.Vq.UPCOMING,
        g =
            null != (n = null == u ? void 0 : u.nameUnformatted)
                ? n
                : H.vK[H.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        j = (0, z.J)(f),
        h = q.intl.string(g),
        E = x === D.Vq.EARNED,
        I = null != u && "daysLeft" in u ? u.daysLeft : 1,
        _ = q.t.pwkxYG;
    if (E) {
        let e = Math.max((0, k.k)(d), 1);
        e >= 365 ? ((I = Math.floor(e / 365)), (_ = q.t["/ojPfn"])) : ((I = e), (_ = q.t.IItWYm));
    }
    let T = null != (a = ec[f]) ? a : Q.badgeGradientBronze;
    return (0, r.jsx)(ef, {
        description: q.intl.format(_, { time: I }),
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
                className: i()(Q.badgeGradientWrapper, T),
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
    let { premiumType: t } = e,
        s = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
        n = (0, h.wC)(null)
            .filter((e) => e.type === E.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, m.Wu)([_.Z], () => _.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        i = ep().emojiStickersVisual,
        o = t === H.p9.TIER_1;
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
                                            animated: !s && e.animated,
                                            size: 58,
                                        }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, r.jsx)(
                                            "img",
                                            {
                                                className: Q.personalizedEmoji,
                                                alt: "",
                                                src: e,
                                            },
                                            "emoji-".concat(t),
                                        )
                                      : null,
                              ),
                          o
                              ? null
                              : a.map((e) =>
                                    (0, r.jsx)(
                                        T.Z,
                                        {
                                            disableAnimation: s,
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
    let { premiumType: t, onClose: s } = e;
    n.useEffect(() => f.Z.wait(() => (0, x.X8)()), []);
    let a = (0, m.e7)([j.Z], () => j.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([S.Z, L.Z], () => {
            let e = S.Z.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != L.Z.getGuild(e)) {
                        var s;
                        let r = null != (s = t.get(e)) ? s : 0;
                        t.set(e, r + 1);
                    }
                });
            let s = null,
                r = 0;
            return (
                t.size > 0 && ([s, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [L.Z.getGuild(s), r]
            );
        }),
        c = null != o && l > 0,
        d = ep().boostItemVisual;
    return (0, r.jsx)(ef, {
        description: t === H.p9.TIER_1 ? q.intl.format(q.t["K4Hv6+"], {}) : q.intl.format(q.t.wRxEDQ, {}),
        onLearnMore: () => {
            s(),
                (0, y.openUserSettings)(O.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: Y.oAB.GUILD_BOOSTING }),
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
    let { premiumType: t } = e,
        s = ep().uploadsMessagesItemVisual;
    return (0, r.jsx)(ef, {
        description: t === H.p9.TIER_2 ? q.intl.format(q.t.GsOFRE, {}) : q.intl.format(q.t.wFWO6O, {}),
        onLearnMore: () => {
            window.open(V.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS)),
                w.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: s,
            }),
    });
}
let eI = n.createContext({ isPremiumRebrand: !1 }),
    e_ = () => n.useContext(eI).isPremiumRebrand;
function eT(e) {
    let { currentUser: t, premiumType: s, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        c = n.useMemo(() => {
            let e = [];
            switch (s) {
                case H.p9.TIER_0:
                    e.push((0, r.jsx)(eC, { premiumType: s }), (0, r.jsx)(eE, { premiumType: s }));
                    break;
                case H.p9.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: t,
                                      premiumType: s,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eh, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: s,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: t,
                                      premiumType: s,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eC, { premiumType: s }, "emoji-stickers-item"),
                              (0, r.jsx)(eh, {}, "screen-share-item"),
                              (0, r.jsx)(eE, { premiumType: s }, "uploads-item"),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: s,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          );
                    break;
                case H.p9.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: t,
                                      premiumType: s,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: s,
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
                                      currentUser: t,
                                      onClose: a,
                                  },
                                  "badge-item",
                              ),
                              (0, r.jsx)(
                                  eg,
                                  {
                                      currentUser: t,
                                      premiumType: s,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eC, { premiumType: s }, "emoji-stickers-item"),
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: s,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eh, {}, "screen-share-item"),
                              (0, r.jsx)(eE, { premiumType: s }, "uploads-item"),
                          );
            }
            return e;
        }, [s, t, a, o]);
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
            premiumType: t,
            titleText: s,
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
                      premiumType: t,
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
                      premiumType: t,
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
                              children: s,
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
                          (0, r.jsx)(eT, {
                              currentUser: N,
                              premiumType: t,
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
