n.d(t, {
    Z: () => eP,
    g: () => eR,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(442837),
    f = n(780384),
    _ = n(481060),
    p = n(570140),
    h = n(179360),
    m = n(410030),
    g = n(607070),
    E = n(100527),
    b = n(906732),
    y = n(543241),
    O = n(906411),
    v = n(565138),
    I = n(822179),
    T = n(419922),
    S = n(687158),
    A = n(484459),
    C = n(813549),
    N = n(867176),
    R = n(502762),
    P = n(652853),
    D = n(313789),
    w = n(518596),
    x = n(430824),
    L = n(594174),
    M = n(314884),
    j = n(626135),
    k = n(768581),
    U = n(63063),
    G = n(74538),
    B = n(998502),
    Z = n(768634),
    F = n(848572),
    V = n(787528),
    H = n(768865),
    Y = n(789155),
    W = n(798769),
    K = n(474936),
    z = n(981631),
    q = n(388032),
    X = n(616885),
    Q = n(834982),
    J = n(912450),
    $ = n(703548),
    ee = n(869333),
    et = n(652528),
    en = n(874692),
    er = n(391458),
    ei = n(70967),
    ea = n(674264),
    eo = n(360088),
    es = n(304880);
function el(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ec() {
    return (ec =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function eu(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                el(e, t, n[t]);
            });
    }
    return e;
}
function ef(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function e_(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ef(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ep = {
        [K.VU.PREMIUM_TENURE_1_MONTH]: X.badgeGradientBronze,
        [K.VU.PREMIUM_TENURE_3_MONTH]: X.badgeGradientSilver,
        [K.VU.PREMIUM_TENURE_6_MONTH]: X.badgeGradientGold,
        [K.VU.PREMIUM_TENURE_12_MONTH]: X.badgeGradientPlatinum,
        [K.VU.PREMIUM_TENURE_24_MONTH]: X.badgeGradientDiamond,
        [K.VU.PREMIUM_TENURE_36_MONTH]: X.badgeGradientEmerald,
        [K.VU.PREMIUM_TENURE_60_MONTH]: X.badgeGradientRuby,
        [K.VU.PREMIUM_TENURE_72_MONTH]: X.badgeGradientOpal,
    },
    eh = B.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    em = {
        boostItemVisual: et,
        emojiStickersVisual: en,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: ei,
        PL: ea,
        TR: es,
    },
    eg = {
        boostItemVisual: Q,
        emojiStickersVisual: J,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: $,
        uploadsMessagesItemVisualV2: ee,
        PL: ea,
        TR: es,
    };
function eE() {
    let e = (0, m.ZP)();
    return (0, f.wj)(e) ? eg : em;
}
function eb(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = eN();
    return (0, r.jsxs)("div", {
        className: o()(X.whatYouLoseItem, { [X.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: o()(X.whatYouLoseItemLeftColumn, { [X.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(_.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                    (0, r.jsx)(_.Avr, {
                        onClick: n,
                        text: q.intl.string(q.t.hvVgAZ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(X.whatYouLoseItemRightColumn, { [X.premiumRebrand]: a }),
                children: i(),
            }),
        ],
    });
}
function ey(e) {
    var t = ec({}, eu(e));
    let { theme: n } = (0, P.z)(),
        i = (0, _.dQu)(_.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
    return (0, r.jsx)(_.SrA, e_(ed({ size: "md" }, t), { color: i }));
}
function eO(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        o = (0, S.ZP)(n.id),
        s = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        l = i === K.PremiumTypes.TIER_1,
        c = () => {
            a(),
                (0, w.openUserSettings)(D.n.PROFILE_PANEL, { section: z.oAB.PROFILE_CUSTOMIZATION }),
                j.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            (null == o ? void 0 : o.premiumType) === K.PremiumTypes.TIER_2
                ? (0, r.jsxs)(R.Z, {
                      user: n,
                      displayProfile: o,
                      forceShowPremium: !0,
                      themeType: null,
                      className: X.profileCard,
                      children: [
                          (0, r.jsx)(N.b, {
                              user: n,
                              displayProfile: o,
                              avatarSize: _.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(eh, {
                              className: X.profileAvatar,
                              src: n.getAvatarURL(void 0, (0, _.pxk)(_.EFr.SIZE_56), !s),
                              size: _.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: X.profileUserInfo,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      className: X.profileNameTag,
                                      usernameClass: X.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(ey, { className: X.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: X.profileCardTier1,
                      children: [
                          (0, r.jsx)(eh, {
                              className: X.profileAvatarTier1,
                              src: n.getAvatarURL(void 0, (0, _.pxk)(_.EFr.SIZE_56), !s),
                              size: _.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: X.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      className: X.profileNameTag,
                                      usernameClass: X.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(_.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: X.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eb, {
            description: l ? q.intl.format(q.t.xCaYwE, {}) : q.intl.format(q.t["gpqr+n"], {}),
            onLearnMore: c,
            renderVisual: () => t,
        })
    );
}
function ev(e) {
    var t, n, i, a;
    let { currentUser: s, onClose: l } = e,
        c = (0, Z.C)(s, "BadgeItem"),
        u = (0, F.Rw)(),
        { analyticsLocations: d } = (0, b.ZP)(E.Z.PREMIUM_UNCANCEL_MODAL),
        f = (0, F.GG)();
    if (!c || null == f) return null;
    let p = null != (t = null == u ? void 0 : u.id) ? t : K.VU.PREMIUM_TENURE_1_MONTH,
        h = null != (n = null == u ? void 0 : u.status) ? n : F.Vq.UPCOMING,
        m =
            null != (i = null == u ? void 0 : u.nameUnformatted)
                ? i
                : K.vK[K.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        g = (0, V.J)(p),
        y = q.intl.string(m),
        O = h === F.Vq.EARNED,
        v = null != u && "daysLeft" in u ? u.daysLeft : 1,
        I = q.t.pwkxYF;
    if (O) {
        let e = Math.max((0, G.k)(f), 1);
        e >= 365 ? ((v = Math.floor(e / 365)), (I = q.t["/ojPfi"])) : ((v = e), (I = q.t.IItWYo));
    }
    let T = () => {
            l(),
                (0, H.k)({
                    analyticsLocations: d,
                    displayProfile: null,
                }),
                j.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        S = null != (a = ep[p]) ? a : X.badgeGradientBronze;
    return (0, r.jsx)(eb, {
        description: q.intl.format(I, { time: v }),
        onLearnMore: T,
        renderVisual: () =>
            (0, r.jsxs)(_.$1m, {
                className: o()(X.badgeGradientWrapper, S),
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: g,
                        className: o()(X.badgeImage, X.blurredBadgeImage),
                    }),
                    (0, r.jsx)("img", {
                        alt: y,
                        src: g,
                        className: X.badgeImage,
                    }),
                ],
            }),
    });
}
function eI(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        a = (0, y.wC)(null)
            .filter((e) => e.type === O.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        o = (0, d.Wu)([I.Z], () => I.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        s = eE().emojiStickersVisual,
        l = t === K.PremiumTypes.TIER_1,
        c = () => {
            window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)),
                j.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(eb, {
        description: l ? q.intl.format(q.t.couiKJ, {}) : q.intl.format(q.t["0hUHi6"], {}),
        onLearnMore: c,
        renderVisual: () =>
            (null != a && a.length > 0) || (!l && null != o && o.length > 0)
                ? (0, r.jsxs)("div", {
                      className: X.emojiStickersPersonalizedContainer,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : k.ZP.getEmojiURL({
                                            id: e.id,
                                            animated: !i && e.animated,
                                            size: 58,
                                        }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, r.jsx)(
                                            "img",
                                            {
                                                className: X.personalizedEmoji,
                                                alt: "",
                                                src: e,
                                            },
                                            "emoji-".concat(t),
                                        )
                                      : null,
                              ),
                          l
                              ? null
                              : o.map((e) =>
                                    (0, r.jsx)(
                                        T.Z,
                                        {
                                            disableAnimation: i,
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
                      className: X.nonPersonalizedGraphic,
                      alt: "",
                      src: s,
                  }),
    });
}
function eT(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => p.Z.wait(() => (0, h.X8)()), []);
    let a = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        [s, l] = (0, d.Wu)([M.Z, x.Z], () => {
            let e = M.Z.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != x.Z.getGuild(e)) {
                        var n;
                        let r = null != (n = t.get(e)) ? n : 0;
                        t.set(e, r + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [x.Z.getGuild(n), r]
            );
        }),
        c = null != s && l > 0,
        f = eE().boostItemVisual,
        m = () => {
            n(),
                (0, w.openUserSettings)(D.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: z.oAB.GUILD_BOOSTING }),
                j.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(eb, {
        description: t === K.PremiumTypes.TIER_1 ? q.intl.format(q.t.K4Hv69, {}) : q.intl.format(q.t.wRxEDW, {}),
        onLearnMore: m,
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: X.boostCardContainer,
                      children: (0, r.jsxs)("div", {
                          className: X.boostCard,
                          children: [
                              (0, r.jsx)(v.Z, {
                                  guild: s,
                                  size: v.Z.Sizes.MEDIUM,
                                  animate: !a,
                                  className: X.boostCardIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: X.boostCardInfo,
                                  children: [
                                      (0, r.jsx)(_.Text, {
                                          variant: "text-md/normal",
                                          className: o()(X.textSingleLineEllipsis, X.boostCardTitle),
                                          children: s.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: X.boostCardSubtitle,
                                          children: [
                                              (0, r.jsx)(_.Ucv, {
                                                  color: _.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: X.boostCardGem,
                                              }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-xs/normal",
                                                  className: o()(X.textSingleLineEllipsis, X.boostCardCount),
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
                      src: f,
                  }),
    });
}
let eS = () => {
    let e = eE().screenShareItemVisual,
        t = () => {
            window.open(U.Z.getArticleURL(z.BhN.STREAM_QUALITY_SETTINGS)),
                j.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(eb, {
        description: q.intl.format(q.t.wK04T1, {}),
        onLearnMore: t,
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: e,
            }),
    });
};
function eA(e) {
    let { premiumType: t } = e,
        n = eE().uploadsMessagesItemVisual,
        i = () => {
            window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)),
                j.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(eb, {
        description: t === K.PremiumTypes.TIER_2 ? q.intl.format(q.t.GsOFRJ, {}) : q.intl.format(q.t.wFWO6D, {}),
        onLearnMore: i,
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: n,
            }),
    });
}
let eC = i.createContext({ isPremiumRebrand: !1 }),
    eN = () => i.useContext(eC).isPremiumRebrand;
function eR(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: s = !1, isPremiumRebrand: l = !1 } = e,
        c = i.useMemo(() => {
            let e = [];
            switch (n) {
                case K.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eI, { premiumType: n }), (0, r.jsx)(eA, { premiumType: n }));
                    break;
                case K.PremiumTypes.TIER_1:
                    s
                        ? e.push(
                              (0, r.jsx)(
                                  eO,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eS, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eT,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eO,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eI, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eS, {}, "screen-share-item"),
                              (0, r.jsx)(eA, { premiumType: n }, "uploads-item"),
                              (0, r.jsx)(
                                  eT,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          );
                    break;
                case K.PremiumTypes.TIER_2:
                    s
                        ? e.push(
                              (0, r.jsx)(
                                  eO,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eT,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eS, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  ev,
                                  {
                                      currentUser: t,
                                      onClose: a,
                                  },
                                  "badge-item",
                              ),
                              (0, r.jsx)(
                                  eO,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eI, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(
                                  eT,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eS, {}, "screen-share-item"),
                              (0, r.jsx)(eA, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, a, s]);
    return (0, r.jsx)(eC.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", {
            className: o()(X.whatYouLoseItemContainer, {
                [X.premiumRebrand]: l,
                [X.noMargin]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let eP = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: a,
            footer: o,
            onClose: s,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: f,
            isLoading: p = !1,
            churnUserDiscountOffer: h = null,
            isDowngrade: m = !1,
            subtitleIcon: g,
            subtitleClassName: E,
        } = e,
        b = (0, d.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, A.Z)(b.id, b.getAvatarURL(null, 80));
    }, [b]);
    let y = null != h && !p;
    return (i.useEffect(() => {
        y &&
            j.default.track(z.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: null == h ? void 0 : h.discount_id,
            });
    }, [y, f, h]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(W.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsx)(_.hzk, {
                      "data-migration-pending": !0,
                      className: X.body,
                      children: (0, r.jsx)(_.$jN, { className: X.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(W.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)(_.hzk, {
                      "data-migration-pending": !0,
                      className: X.body,
                      children: [
                          (0, r.jsx)(_.Heading, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: X.title,
                              children: n,
                          }),
                          (0, r.jsxs)("div", {
                              className: E,
                              children: [
                                  g,
                                  (0, r.jsx)(_.Text, {
                                      variant: "text-md/normal",
                                      children: a,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(eR, {
                              currentUser: b,
                              premiumType: t,
                              onClose: s,
                              isDowngrade: m,
                          }),
                      ],
                  }),
                  !y &&
                      (0, r.jsx)(_.mzw, {
                          "data-migration-pending": !0,
                          children: o,
                      }),
                  y &&
                      (0, r.jsx)(Y.Z, {
                          churnUserDiscountOffer: h,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
