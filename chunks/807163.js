t.d(s, {
    Z: () => eU,
    g: () => eM,
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
    d = t(304789),
    p = t(780384),
    f = t(755721),
    x = t(481060),
    g = t(570140),
    j = t(179360),
    C = t(410030),
    N = t(607070),
    h = t(100527),
    I = t(906732),
    E = t(543241),
    _ = t(906411),
    T = t(565138),
    b = t(822179),
    M = t(419922),
    U = t(687158),
    v = t(484459),
    R = t(813549),
    P = t(867176),
    L = t(502762),
    O = t(652853),
    y = t(313789),
    A = t(518596),
    S = t(430824),
    w = t(594174),
    Z = t(314884),
    V = t(626135),
    k = t(768581),
    z = t(55935),
    F = t(63063),
    D = t(998502),
    G = t(768634),
    B = t(848572),
    K = t(787528),
    W = t(768865),
    H = t(789155),
    Y = t(798769),
    q = t(474936),
    Q = t(981631),
    X = t(388032),
    $ = t(616885),
    J = t(834982),
    ee = t(912450),
    es = t(703548),
    et = t(869333),
    er = t(652528),
    en = t(874692),
    ea = t(391458),
    ei = t(70967),
    eo = t(674264),
    el = t(360088),
    ec = t(304880);
function eu() {
    return (eu =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
let em = {
        [q.VU.PREMIUM_TENURE_1_MONTH]: $.badgeGradientBronze,
        [q.VU.PREMIUM_TENURE_3_MONTH]: $.badgeGradientSilver,
        [q.VU.PREMIUM_TENURE_6_MONTH]: $.badgeGradientGold,
        [q.VU.PREMIUM_TENURE_12_MONTH]: $.badgeGradientPlatinum,
        [q.VU.PREMIUM_TENURE_24_MONTH]: $.badgeGradientDiamond,
        [q.VU.PREMIUM_TENURE_36_MONTH]: $.badgeGradientEmerald,
        [q.VU.PREMIUM_TENURE_60_MONTH]: $.badgeGradientRuby,
        [q.VU.PREMIUM_TENURE_72_MONTH]: $.badgeGradientOpal,
    },
    ed = D.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    ep = {
        boostItemVisual: er,
        emojiStickersVisual: en,
        screenShareItemVisual: el,
        uploadsMessagesItemVisual: ea,
        uploadsMessagesItemVisualV2: ei,
        PL: eo,
        TR: ec,
    },
    ef = {
        boostItemVisual: J,
        emojiStickersVisual: ee,
        screenShareItemVisual: el,
        uploadsMessagesItemVisual: es,
        uploadsMessagesItemVisualV2: et,
        PL: eo,
        TR: ec,
    };
function ex() {
    let e = (0, C.ZP)();
    return (0, p.wj)(e) ? ef : ep;
}
function eg(e) {
    let { description: s, onLearnMore: t, renderVisual: n } = e,
        a = eb();
    return (0, r.jsxs)("div", {
        className: i()($.whatYouLoseItem, { [$.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: i()($.whatYouLoseItemLeftColumn, { [$.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(x.Text, {
                        variant: "text-md/normal",
                        children: s,
                    }),
                    (0, r.jsx)(f.zx, {
                        "data-migration-pending": !0,
                        look: f.zx.Looks.LINK,
                        color: f.zx.Colors.LINK,
                        size: f.zx.Sizes.NONE,
                        className: $.whatYouLoseItemLearnMore,
                        onClick: t,
                        children: X.intl.string(X.t.hvVgAQ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: i()($.whatYouLoseItemRightColumn, { [$.premiumRebrand]: a }),
                children: n(),
            }),
        ],
    });
}
function ej(e) {
    var s,
        t,
        n = eu(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })(e),
        );
    let { theme: a } = (0, O.z)(),
        i = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
    return (0, r.jsx)(
        x.SrA,
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
function eC(e) {
    let s,
        { currentUser: t, premiumType: n, onClose: a } = e,
        i = (0, U.ZP)(t.id),
        o = (0, m.e7)([N.Z], () => N.Z.useReducedMotion),
        l = n === q.p9.TIER_1;
    return (
        (s =
            (null == i ? void 0 : i.premiumType) === q.p9.TIER_2
                ? (0, r.jsxs)(L.Z, {
                      user: t,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: $.profileCard,
                      children: [
                          (0, r.jsx)(P.b, {
                              user: t,
                              displayProfile: i,
                              avatarSize: x.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(ed, {
                              className: $.profileAvatar,
                              src: t.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: $.profileUserInfo,
                              children: [
                                  (0, r.jsx)(R.Z, {
                                      className: $.profileNameTag,
                                      usernameClass: $.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(ej, { className: $.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: $.profileCardTier1,
                      children: [
                          (0, r.jsx)(ed, {
                              className: $.profileAvatarTier1,
                              src: t.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: $.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(R.Z, {
                                      className: $.profileNameTag,
                                      usernameClass: $.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(x.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: $.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eg, {
            description: l ? X.intl.format(X.t.xCaYwM, {}) : X.intl.format(X.t["gpqr+v"], {}),
            onLearnMore: () => {
                a(),
                    (0, A.openUserSettings)(y.n.PROFILE_PANEL, { section: Q.oAB.PROFILE_CUSTOMIZATION }),
                    V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function eN(e) {
    var s, t, n, a;
    let { premiumType: o, onClose: l } = e,
        c = (0, G.C)(o, "BadgeItem"),
        u = (0, B.Rw)(),
        { analyticsLocations: m } = (0, I.ZP)(h.Z.PREMIUM_UNCANCEL_MODAL),
        p = (0, B.GG)();
    if (!c || null == p) return null;
    let f = null != (s = null == u ? void 0 : u.id) ? s : q.VU.PREMIUM_TENURE_1_MONTH,
        x = null != (t = null == u ? void 0 : u.status) ? t : B.Vq.UPCOMING,
        g =
            null != (n = null == u ? void 0 : u.nameUnformatted)
                ? n
                : q.vK[q.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        j = (0, K.J)(f),
        C = X.intl.string(g),
        N = x === B.Vq.EARNED,
        E = null != u && "daysLeft" in u ? u.daysLeft : 1,
        _ = X.t.pwkxYG;
    if (N) {
        let e = new Date(),
            s = Math.max((0, z.wY)(e, new Date(p)), 1);
        s >= 365 ? ((E = Math.floor(s / 365)), (_ = X.t["/ojPfn"])) : ((E = s), (_ = X.t.IItWYm));
    }
    let T = null != (a = em[f]) ? a : $.badgeGradientBronze;
    return (0, r.jsx)(eg, {
        description: X.intl.format(_, { time: E }),
        onLearnMore: () => {
            l(),
                (0, W.k)({
                    analyticsLocations: m,
                    displayProfile: null,
                }),
                V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, r.jsxs)(d.$, {
                className: i()($.badgeGradientWrapper, T),
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: j,
                        className: i()($.badgeImage, $.blurredBadgeImage),
                    }),
                    (0, r.jsx)("img", {
                        alt: C,
                        src: j,
                        className: $.badgeImage,
                    }),
                ],
            }),
    });
}
function eh(e) {
    let { premiumType: s } = e,
        t = (0, m.e7)([N.Z], () => N.Z.useReducedMotion),
        n = (0, E.wC)(null)
            .filter((e) => e.type === _.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, m.Wu)([b.Z], () => b.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        i = ex().emojiStickersVisual,
        o = s === q.p9.TIER_1;
    return (0, r.jsx)(eg, {
        description: o ? X.intl.format(X.t.couiKC, {}) : X.intl.format(X.t["0hUHi4"], {}),
        onLearnMore: () => {
            window.open(F.Z.getArticleURL(Q.BhN.PREMIUM_DETAILS)),
                V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != n && n.length > 0) || (!o && null != a && a.length > 0)
                ? (0, r.jsxs)("div", {
                      className: $.emojiStickersPersonalizedContainer,
                      children: [
                          n
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : k.ZP.getEmojiURL({
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
                                                className: $.personalizedEmoji,
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
                                        M.Z,
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
                      className: $.nonPersonalizedGraphic,
                      alt: "",
                      src: i,
                  }),
    });
}
function eI(e) {
    let { premiumType: s, onClose: t } = e;
    n.useEffect(() => g.Z.wait(() => (0, j.X8)()), []);
    let a = (0, m.e7)([N.Z], () => N.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([Z.Z, S.Z], () => {
            let e = Z.Z.boostSlots,
                s = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != S.Z.getGuild(e)) {
                        var t;
                        let r = null != (t = s.get(e)) ? t : 0;
                        s.set(e, r + 1);
                    }
                });
            let t = null,
                r = 0;
            return (
                s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [S.Z.getGuild(t), r]
            );
        }),
        c = null != o && l > 0,
        d = ex().boostItemVisual;
    return (0, r.jsx)(eg, {
        description: s === q.p9.TIER_1 ? X.intl.format(X.t["K4Hv6+"], {}) : X.intl.format(X.t.wRxEDQ, {}),
        onLearnMore: () => {
            t(),
                (0, A.openUserSettings)(y.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: Q.oAB.GUILD_BOOSTING }),
                V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: $.boostCardContainer,
                      children: (0, r.jsxs)("div", {
                          className: $.boostCard,
                          children: [
                              (0, r.jsx)(T.Z, {
                                  guild: o,
                                  size: T.Z.Sizes.MEDIUM,
                                  animate: !a,
                                  className: $.boostCardIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: $.boostCardInfo,
                                  children: [
                                      (0, r.jsx)(x.Text, {
                                          variant: "text-md/normal",
                                          className: i()($.textSingleLineEllipsis, $.boostCardTitle),
                                          children: o.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: $.boostCardSubtitle,
                                          children: [
                                              (0, r.jsx)(x.$Eu, {
                                                  color: x.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: $.boostCardGem,
                                              }),
                                              (0, r.jsx)(x.Text, {
                                                  variant: "text-xs/normal",
                                                  className: i()($.textSingleLineEllipsis, $.boostCardCount),
                                                  children: X.intl.format(X.t["Ou/g/P"], { boostCount: l }),
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
let eE = () => {
    let e = ex().screenShareItemVisual;
    return (0, r.jsx)(eg, {
        description: X.intl.format(X.t.wK04T0, {}),
        onLearnMore: () => {
            window.open(F.Z.getArticleURL(Q.BhN.STREAM_QUALITY_SETTINGS)),
                V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: e,
            }),
    });
};
function e_(e) {
    let { premiumType: s } = e,
        t = ex().uploadsMessagesItemVisual;
    return (0, r.jsx)(eg, {
        description: s === q.p9.TIER_2 ? X.intl.format(X.t.GsOFRE, {}) : X.intl.format(X.t.wFWO6O, {}),
        onLearnMore: () => {
            window.open(F.Z.getArticleURL(Q.BhN.PREMIUM_DETAILS)),
                V.default.track(Q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: t,
            }),
    });
}
let eT = n.createContext({ isPremiumRebrand: !1 }),
    eb = () => n.useContext(eT).isPremiumRebrand;
function eM(e) {
    let { currentUser: s, premiumType: t, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        c = n.useMemo(() => {
            let e = [];
            switch (t) {
                case q.p9.TIER_0:
                    e.push((0, r.jsx)(eh, { premiumType: t }), (0, r.jsx)(e_, { premiumType: t }));
                    break;
                case q.p9.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eC,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eI,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eC,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eh, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                              (0, r.jsx)(e_, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(
                                  eI,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          );
                    break;
                case q.p9.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eC,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eI,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eN,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "badge-item",
                              ),
                              (0, r.jsx)(
                                  eC,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eh, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(
                                  eI,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eE, {}, "screen-share-item"),
                              (0, r.jsx)(e_, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, a, o]);
    return (0, r.jsx)(eT.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", {
            className: i()($.whatYouLoseItemContainer, {
                [$.premiumRebrand]: l,
                [$.noMargin]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let eU = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: a,
            footer: i,
            onClose: o,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: d,
            isLoading: p = !1,
            churnUserDiscountOffer: f = null,
            isDowngrade: g = !1,
            subtitleIcon: j,
            subtitleClassName: C,
        } = e,
        N = (0, m.e7)([w.default], () => {
            let e = w.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    n.useEffect(() => {
        (0, v.Z)(N.id, N.getAvatarURL(null, 80));
    }, [N]);
    let h = null != f && !p;
    return (n.useEffect(() => {
        h &&
            V.default.track(Q.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == f ? void 0 : f.discount_id,
            });
    }, [h, d, f]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Y.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsx)(x.hzk, {
                      "data-migration-pending": !0,
                      className: $.body,
                      children: (0, r.jsx)(x.$jN, { className: $.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Y.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsxs)(x.hzk, {
                      "data-migration-pending": !0,
                      className: $.body,
                      children: [
                          (0, r.jsx)(x.X6q, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: $.title,
                              children: t,
                          }),
                          (0, r.jsxs)("div", {
                              className: C,
                              children: [
                                  j,
                                  (0, r.jsx)(x.Text, {
                                      variant: "text-md/normal",
                                      children: a,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(eM, {
                              currentUser: N,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: g,
                          }),
                      ],
                  }),
                  !h &&
                      (0, r.jsx)(x.mzw, {
                          "data-migration-pending": !0,
                          children: i,
                      }),
                  h &&
                      (0, r.jsx)(H.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
