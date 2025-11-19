n.d(t, {
    Z: () => eP,
    g: () => eR,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
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
    L = n(430824),
    x = n(594174),
    M = n(314884),
    k = n(626135),
    j = n(768581),
    U = n(63063),
    G = n(74538),
    B = n(998502),
    Z = n(768634),
    F = n(848572),
    V = n(863504),
    H = n(787528),
    Y = n(768865),
    W = n(789155),
    K = n(798769),
    z = n(474936),
    q = n(981631),
    X = n(388032),
    Q = n(819019),
    J = n(834982),
    $ = n(912450),
    ee = n(703548),
    et = n(869333),
    en = n(652528),
    er = n(874692),
    ei = n(391458),
    ea = n(70967),
    eo = n(674264),
    es = n(360088),
    el = n(304880);
function ec(e, t, n) {
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
function eu() {
    return (eu =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function ed(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function ef(e) {
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
                ec(e, t, n[t]);
            });
    }
    return e;
}
function e_(e, t) {
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
function ep(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e_(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eh = B.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    em = {
        boostItemVisual: en,
        emojiStickersVisual: er,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: ei,
        uploadsMessagesItemVisualV2: ea,
        PL: eo,
        TR: el,
    },
    eg = {
        boostItemVisual: J,
        emojiStickersVisual: $,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: ee,
        uploadsMessagesItemVisualV2: et,
        PL: eo,
        TR: el,
    };
function eE() {
    let e = (0, m.ZP)();
    return (0, f.wj)(e) ? eg : em;
}
function eb(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = eN();
    return (0, r.jsxs)("div", {
        className: o()(Q.whatYouLoseItem, { [Q.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: o()(Q.whatYouLoseItemLeftColumn, { [Q.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(_.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                    (0, r.jsx)(_.Avr, {
                        onClick: n,
                        text: X.intl.string(X.t.hvVgAZ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(Q.whatYouLoseItemRightColumn, { [Q.premiumRebrand]: a }),
                children: i(),
            }),
        ],
    });
}
function ey(e) {
    var t = eu({}, ed(e));
    let { theme: n } = (0, P.z)(),
        i = (0, _.dQu)(_.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
    return (0, r.jsx)(_.SrA, ep(ef({ size: "md" }, t), { color: i }));
}
function eO(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        o = (0, S.ZP)(n.id),
        s = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        l = i === z.PremiumTypes.TIER_1,
        c = () => {
            a(),
                (0, w.openUserSettings)(D.n.PROFILE_PANEL, { section: q.oAB.PROFILE_CUSTOMIZATION }),
                k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            (null == o ? void 0 : o.premiumType) === z.PremiumTypes.TIER_2
                ? (0, r.jsxs)(R.Z, {
                      user: n,
                      displayProfile: o,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Q.profileCard,
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
                              className: Q.profileAvatar,
                              src: n.getAvatarURL(void 0, (0, _.pxk)(_.EFr.SIZE_56), !s),
                              size: _.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.profileUserInfo,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      className: Q.profileNameTag,
                                      usernameClass: Q.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(ey, { className: Q.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: Q.profileCardTier1,
                      children: [
                          (0, r.jsx)(eh, {
                              className: Q.profileAvatarTier1,
                              src: n.getAvatarURL(void 0, (0, _.pxk)(_.EFr.SIZE_56), !s),
                              size: _.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Q.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      className: Q.profileNameTag,
                                      usernameClass: Q.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(_.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Q.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eb, {
            description: l ? X.intl.format(X.t.xCaYwE, {}) : X.intl.format(X.t["gpqr+n"], {}),
            onLearnMore: c,
            renderVisual: () => t,
        })
    );
}
function ev(e) {
    var t, n, i;
    let { currentUser: a, onClose: o } = e,
        s = (0, Z.C)(a, "BadgeItem"),
        l = (0, F.Rw)(),
        { analyticsLocations: c } = (0, b.ZP)(E.Z.PREMIUM_UNCANCEL_MODAL),
        u = (0, F.GG)(),
        d = null != (t = null == l ? void 0 : l.id) ? t : z.VU.PREMIUM_TENURE_1_MONTH,
        f = (0, V.Z)(d);
    if (!s || null == u) return null;
    let p = null != (n = null == l ? void 0 : l.status) ? n : F.Vq.UPCOMING,
        h =
            null != (i = null == l ? void 0 : l.nameUnformatted)
                ? i
                : z.vK[z.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, H.J)(d),
        g = X.intl.string(h),
        y = p === F.Vq.EARNED,
        O = null != l && "daysLeft" in l ? l.daysLeft : 1,
        v = X.t.pwkxYF;
    if (y) {
        let e = Math.max((0, G.k)(u), 1);
        e >= 365 ? ((O = Math.floor(e / 365)), (v = X.t["/ojPfi"])) : ((O = e), (v = X.t.IItWYo));
    }
    let I = () => {
        o(),
            (0, Y.k)({
                analyticsLocations: c,
                displayProfile: null,
            }),
            k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
    };
    return (0, r.jsx)(eb, {
        description: X.intl.format(v, { time: O }),
        onLearnMore: I,
        renderVisual: () =>
            (0, r.jsx)(_.$1m, {
                className: Q.badgeGradientWrapper,
                color: f,
                children: (0, r.jsx)("img", {
                    alt: g,
                    src: m,
                    className: Q.badgeImage,
                }),
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
        l = t === z.PremiumTypes.TIER_1,
        c = () => {
            window.open(U.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)),
                k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(eb, {
        description: l ? X.intl.format(X.t.couiKJ, {}) : X.intl.format(X.t["0hUHi6"], {}),
        onLearnMore: c,
        renderVisual: () =>
            (null != a && a.length > 0) || (!l && null != o && o.length > 0)
                ? (0, r.jsxs)("div", {
                      className: Q.emojiStickersPersonalizedContainer,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : j.ZP.getEmojiURL({
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
                                                className: Q.personalizedEmoji,
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
                      className: Q.nonPersonalizedGraphic,
                      alt: "",
                      src: s,
                  }),
    });
}
function eT(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => p.Z.wait(() => (0, h.X8)()), []);
    let a = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        [s, l] = (0, d.Wu)([M.Z, L.Z], () => {
            let e = M.Z.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != L.Z.getGuild(e)) {
                        var n;
                        let r = null != (n = t.get(e)) ? n : 0;
                        t.set(e, r + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [L.Z.getGuild(n), r]
            );
        }),
        c = null != s && l > 0,
        f = eE().boostItemVisual,
        m = () => {
            n(),
                (0, w.openUserSettings)(D.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: q.oAB.GUILD_BOOSTING }),
                k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(eb, {
        description: t === z.PremiumTypes.TIER_1 ? X.intl.format(X.t.K4Hv69, {}) : X.intl.format(X.t.wRxEDW, {}),
        onLearnMore: m,
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: Q.boostCardContainer,
                      children: (0, r.jsxs)("div", {
                          className: Q.boostCard,
                          children: [
                              (0, r.jsx)(v.Z, {
                                  guild: s,
                                  size: v.Z.Sizes.MEDIUM,
                                  animate: !a,
                                  className: Q.boostCardIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: Q.boostCardInfo,
                                  children: [
                                      (0, r.jsx)(_.Text, {
                                          variant: "text-md/normal",
                                          className: o()(Q.textSingleLineEllipsis, Q.boostCardTitle),
                                          children: s.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Q.boostCardSubtitle,
                                          children: [
                                              (0, r.jsx)(_.Ucv, {
                                                  color: _.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: Q.boostCardGem,
                                              }),
                                              (0, r.jsx)(_.Text, {
                                                  variant: "text-xs/normal",
                                                  className: o()(Q.textSingleLineEllipsis, Q.boostCardCount),
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
                      src: f,
                  }),
    });
}
let eS = () => {
    let e = eE().screenShareItemVisual,
        t = () => {
            window.open(U.Z.getArticleURL(q.BhN.STREAM_QUALITY_SETTINGS)),
                k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(eb, {
        description: X.intl.format(X.t.wK04T1, {}),
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
            window.open(U.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)),
                k.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(eb, {
        description: t === z.PremiumTypes.TIER_2 ? X.intl.format(X.t.GsOFRJ, {}) : X.intl.format(X.t.wFWO6D, {}),
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
                case z.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(eI, { premiumType: n }), (0, r.jsx)(eA, { premiumType: n }));
                    break;
                case z.PremiumTypes.TIER_1:
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
                case z.PremiumTypes.TIER_2:
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
            className: o()(Q.whatYouLoseItemContainer, {
                [Q.premiumRebrand]: l,
                [Q.noMargin]: l && c.length <= 2,
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
        b = (0, d.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, A.Z)(b.id, b.getAvatarURL(null, 80));
    }, [b]);
    let y = null != h && !p;
    return (i.useEffect(() => {
        y &&
            k.default.track(q.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: null == h ? void 0 : h.discount_id,
            });
    }, [y, f, h]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsx)(_.hzk, {
                      "data-migration-pending": !0,
                      className: Q.body,
                      children: (0, r.jsx)(_.$jN, { className: Q.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)(_.hzk, {
                      "data-migration-pending": !0,
                      className: Q.body,
                      children: [
                          (0, r.jsx)(_.Heading, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: Q.title,
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
                      (0, r.jsx)(W.Z, {
                          churnUserDiscountOffer: h,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
