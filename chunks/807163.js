t.d(s, {
    Z: () => eh,
    g: () => ej,
}),
    t(953529),
    t(388685),
    t(539854);
var r = t(951288),
    n = t(647438),
    i = t(120356),
    a = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(392711),
    u = t.n(c),
    m = t(442837),
    d = t(780384),
    p = t(755721),
    x = t(481060),
    f = t(570140),
    j = t(179360),
    h = t(410030),
    C = t(607070),
    g = t(543241),
    I = t(906411),
    N = t(565138),
    T = t(822179),
    b = t(419922),
    v = t(687158),
    E = t(484459),
    _ = t(813549),
    y = t(867176),
    L = t(502762),
    O = t(652853),
    P = t(313789),
    M = t(518596),
    A = t(430824),
    S = t(594174),
    U = t(314884),
    R = t(626135),
    w = t(768581),
    Z = t(63063),
    k = t(998502),
    F = t(789155),
    z = t(798769),
    V = t(474936),
    D = t(981631),
    B = t(388032),
    K = t(616885),
    G = t(834982),
    W = t(912450),
    Y = t(703548),
    q = t(869333),
    H = t(652528),
    Q = t(874692),
    X = t(391458),
    $ = t(70967),
    J = t(674264),
    ee = t(360088),
    es = t(304880);
function et() {
    return (et =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
let er = k.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    en = {
        boostItemVisual: H,
        emojiStickersVisual: Q,
        screenShareItemVisual: ee,
        uploadsMessagesItemVisual: X,
        uploadsMessagesItemVisualV2: $,
        PL: J,
        TR: es,
    },
    ei = {
        boostItemVisual: G,
        emojiStickersVisual: W,
        screenShareItemVisual: ee,
        uploadsMessagesItemVisual: Y,
        uploadsMessagesItemVisualV2: q,
        PL: J,
        TR: es,
    };
function ea() {
    let e = (0, h.ZP)();
    return (0, d.wj)(e) ? ei : en;
}
function eo(e) {
    let { description: s, onLearnMore: t, renderVisual: n } = e,
        i = ef();
    return (0, r.jsxs)("div", {
        className: a()(K.whatYouLoseItem, { [K.premiumRebrand]: i }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(K.whatYouLoseItemLeftColumn, { [K.premiumRebrand]: i }),
                children: [
                    (0, r.jsx)(x.Text, {
                        variant: "text-md/normal",
                        children: s,
                    }),
                    (0, r.jsx)(p.zx, {
                        "data-migration-pending": !0,
                        look: p.zx.Looks.LINK,
                        color: p.zx.Colors.LINK,
                        size: p.zx.Sizes.NONE,
                        className: K.whatYouLoseItemLearnMore,
                        onClick: t,
                        children: B.intl.string(B.t.hvVgAQ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(K.whatYouLoseItemRightColumn, { [K.premiumRebrand]: i }),
                children: n(),
            }),
        ],
    });
}
function el(e) {
    var s,
        t,
        n = et(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })(e),
        );
    let { theme: i } = (0, O.z)(),
        a = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, i).hex();
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
        (t = t = { color: a }),
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
function ec(e) {
    let s,
        { currentUser: t, premiumType: n, onClose: i } = e,
        a = (0, v.ZP)(t.id),
        o = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        l = n === V.p9.TIER_1;
    return (
        (s =
            (null == a ? void 0 : a.premiumType) === V.p9.TIER_2
                ? (0, r.jsxs)(L.Z, {
                      user: t,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: K.profileCard,
                      children: [
                          (0, r.jsx)(y.b, {
                              user: t,
                              displayProfile: a,
                              avatarSize: x.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(er, {
                              className: K.profileAvatar,
                              src: t.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: K.profileUserInfo,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      className: K.profileNameTag,
                                      usernameClass: K.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(el, { className: K.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: K.profileCardTier1,
                      children: [
                          (0, r.jsx)(er, {
                              className: K.profileAvatarTier1,
                              src: t.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: K.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      className: K.profileNameTag,
                                      usernameClass: K.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(x.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: K.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eo, {
            description: l ? B.intl.format(B.t.xCaYwM, {}) : B.intl.format(B.t["gpqr+v"], {}),
            onLearnMore: () => {
                i(),
                    (0, M.openUserSettings)(P.n.PROFILE_PANEL, { section: D.oAB.PROFILE_CUSTOMIZATION }),
                    R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function eu(e) {
    let { premiumType: s } = e,
        t = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        n = (0, g.wC)(null)
            .filter((e) => e.type === I.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, m.Wu)([T.Z], () => T.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        a = ea().emojiStickersVisual,
        o = s === V.p9.TIER_1;
    return (0, r.jsx)(eo, {
        description: o ? B.intl.format(B.t.couiKC, {}) : B.intl.format(B.t["0hUHi4"], {}),
        onLearnMore: () => {
            window.open(Z.Z.getArticleURL(D.BhN.PREMIUM_DETAILS)),
                R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != n && n.length > 0) || (!o && null != i && i.length > 0)
                ? (0, r.jsxs)("div", {
                      className: K.emojiStickersPersonalizedContainer,
                      children: [
                          n
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : w.ZP.getEmojiURL({
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
                                                className: K.personalizedEmoji,
                                                alt: "",
                                                src: e,
                                            },
                                            "emoji-".concat(s),
                                        )
                                      : null,
                              ),
                          o
                              ? null
                              : i.map((e) =>
                                    (0, r.jsx)(
                                        b.Z,
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
                      className: K.nonPersonalizedGraphic,
                      alt: "",
                      src: a,
                  }),
    });
}
function em(e) {
    let { premiumType: s, onClose: t } = e;
    n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
    let i = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([U.Z, A.Z], () => {
            let e = U.Z.boostSlots,
                s = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != A.Z.getGuild(e)) {
                        var t;
                        let r = null != (t = s.get(e)) ? t : 0;
                        s.set(e, r + 1);
                    }
                });
            let t = null,
                r = 0;
            return (
                s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))),
                [A.Z.getGuild(t), r]
            );
        }),
        c = null != o && l > 0,
        d = ea().boostItemVisual;
    return (0, r.jsx)(eo, {
        description: s === V.p9.TIER_1 ? B.intl.format(B.t["K4Hv6+"], {}) : B.intl.format(B.t.wRxEDQ, {}),
        onLearnMore: () => {
            t(),
                (0, M.openUserSettings)(P.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: D.oAB.GUILD_BOOSTING }),
                R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: K.boostCardContainer,
                      children: (0, r.jsxs)("div", {
                          className: K.boostCard,
                          children: [
                              (0, r.jsx)(N.Z, {
                                  guild: o,
                                  size: N.Z.Sizes.MEDIUM,
                                  animate: !i,
                                  className: K.boostCardIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: K.boostCardInfo,
                                  children: [
                                      (0, r.jsx)(x.Text, {
                                          variant: "text-md/normal",
                                          className: a()(K.textSingleLineEllipsis, K.boostCardTitle),
                                          children: o.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: K.boostCardSubtitle,
                                          children: [
                                              (0, r.jsx)(x.$Eu, {
                                                  color: x.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: K.boostCardGem,
                                              }),
                                              (0, r.jsx)(x.Text, {
                                                  variant: "text-xs/normal",
                                                  className: a()(K.textSingleLineEllipsis, K.boostCardCount),
                                                  children: B.intl.format(B.t["Ou/g/P"], { boostCount: l }),
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
let ed = () => {
    let e = ea().screenShareItemVisual;
    return (0, r.jsx)(eo, {
        description: B.intl.format(B.t.wK04T0, {}),
        onLearnMore: () => {
            window.open(Z.Z.getArticleURL(D.BhN.STREAM_QUALITY_SETTINGS)),
                R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: e,
            }),
    });
};
function ep(e) {
    let { premiumType: s } = e,
        t = ea().uploadsMessagesItemVisual;
    return (0, r.jsx)(eo, {
        description: s === V.p9.TIER_2 ? B.intl.format(B.t.GsOFRE, {}) : B.intl.format(B.t.wFWO6O, {}),
        onLearnMore: () => {
            window.open(Z.Z.getArticleURL(D.BhN.PREMIUM_DETAILS)),
                R.default.track(D.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: t,
            }),
    });
}
let ex = n.createContext({ isPremiumRebrand: !1 }),
    ef = () => n.useContext(ex).isPremiumRebrand;
function ej(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        c = n.useMemo(() => {
            let e = [];
            switch (t) {
                case V.p9.TIER_0:
                    e.push((0, r.jsx)(eu, { premiumType: t }), (0, r.jsx)(ep, { premiumType: t }));
                    break;
                case V.p9.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  ec,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(ed, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  em,
                                  {
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  ec,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eu, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(ed, {}, "screen-share-item"),
                              (0, r.jsx)(ep, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(
                                  em,
                                  {
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "boost-item",
                              ),
                          );
                    break;
                case V.p9.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  ec,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  em,
                                  {
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(ed, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  ec,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eu, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(
                                  em,
                                  {
                                      premiumType: t,
                                      onClose: i,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(ed, {}, "screen-share-item"),
                              (0, r.jsx)(ep, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, i, o]);
    return (0, r.jsx)(ex.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", {
            className: a()(K.whatYouLoseItemContainer, {
                [K.premiumRebrand]: l,
                [K.noMargin]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let eh = function (e) {
    let {
            premiumType: s,
            titleText: t,
            subtitleText: i,
            footer: a,
            onClose: o,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: d,
            isLoading: p = !1,
            churnUserDiscountOffer: f = null,
            isDowngrade: j = !1,
            subtitleIcon: h,
            subtitleClassName: C,
        } = e,
        g = (0, m.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    n.useEffect(() => {
        (0, E.Z)(g.id, g.getAvatarURL(null, 80));
    }, [g]);
    let I = null != f && !p;
    return (n.useEffect(() => {
        I &&
            R.default.track(D.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == f ? void 0 : f.discount_id,
            });
    }, [I, d, f]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(z.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsx)(x.hzk, {
                      "data-migration-pending": !0,
                      className: K.body,
                      children: (0, r.jsx)(x.$jN, { className: K.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(z.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsxs)(x.hzk, {
                      "data-migration-pending": !0,
                      className: K.body,
                      children: [
                          (0, r.jsx)(x.X6q, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: K.title,
                              children: t,
                          }),
                          (0, r.jsxs)("div", {
                              className: C,
                              children: [
                                  h,
                                  (0, r.jsx)(x.Text, {
                                      variant: "text-md/normal",
                                      children: i,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(ej, {
                              currentUser: g,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: j,
                          }),
                      ],
                  }),
                  !I &&
                      (0, r.jsx)(x.mzw, {
                          "data-migration-pending": !0,
                          children: a,
                      }),
                  I &&
                      (0, r.jsx)(F.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
