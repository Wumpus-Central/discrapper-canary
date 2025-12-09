n.d(t, {
    Z: () => eP,
    g: () => eN,
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
    p = n(481060),
    _ = n(570140),
    m = n(179360),
    h = n(410030),
    g = n(607070),
    E = n(100527),
    b = n(906732),
    y = n(543241),
    O = n(906411),
    v = n(565138),
    S = n(822179),
    I = n(419922),
    T = n(687158),
    A = n(484459),
    C = n(813549),
    N = n(867176),
    P = n(502762),
    R = n(652853),
    D = n(313789),
    w = n(518596),
    x = n(430824),
    L = n(594174),
    j = n(314884),
    M = n(626135),
    k = n(768581),
    U = n(63063),
    G = n(74538),
    Z = n(998502),
    B = n(848572),
    F = n(863504),
    V = n(787528),
    H = n(768865),
    Y = n(789155),
    W = n(798769),
    K = n(474936),
    z = n(981631),
    q = n(388032),
    Q = n(616885),
    X = n(834982),
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
function ep(e, t) {
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
let e_ = Z.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    em = {
        boostItemVisual: et,
        emojiStickersVisual: en,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: ei,
        PL: ea,
        TR: es,
    },
    eh = {
        boostItemVisual: X,
        emojiStickersVisual: J,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: $,
        uploadsMessagesItemVisualV2: ee,
        PL: ea,
        TR: es,
    };
function eg() {
    let e = (0, h.ZP)();
    return (0, f.wj)(e) ? eh : em;
}
function eE(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = eC();
    return (0, r.jsxs)("div", {
        className: o()(Q.whatYouLoseItem, { [Q.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: o()(Q.whatYouLoseItemLeftColumn, { [Q.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(p.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                    (0, r.jsx)(p.Avr, {
                        onClick: n,
                        text: q.intl.string(q.t.hvVgAZ),
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
function eb(e) {
    var t = ec({}, eu(e));
    let { theme: n } = (0, R.z)(),
        i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
    return (0, r.jsx)(p.SrA, ep(ed({ size: "md" }, t), { color: i }));
}
function ey(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        o = (0, T.ZP)(n.id),
        s = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        l = i === K.PremiumTypes.TIER_1,
        c = () => {
            a(),
                (0, w.openUserSettings)(D.n.PROFILE_PANEL, { section: z.oAB.PROFILE_CUSTOMIZATION }),
                M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            (null == o ? void 0 : o.premiumType) === K.PremiumTypes.TIER_2
                ? (0, r.jsxs)(P.Z, {
                      user: n,
                      displayProfile: o,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Q.profileCard,
                      children: [
                          (0, r.jsx)(N.b, {
                              user: n,
                              displayProfile: o,
                              avatarSize: p.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(e_, {
                              className: Q.profileAvatar,
                              src: n.getAvatarURL(void 0, (0, p.dcp)(p.EFr.SIZE_56), !s),
                              size: p.EFr.SIZE_56,
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
                                  (0, r.jsx)(eb, { className: Q.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: Q.profileCardTier1,
                      children: [
                          (0, r.jsx)(e_, {
                              className: Q.profileAvatarTier1,
                              src: n.getAvatarURL(void 0, (0, p.dcp)(p.EFr.SIZE_56), !s),
                              size: p.EFr.SIZE_56,
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
                                  (0, r.jsx)(p.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Q.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eE, {
            description: l ? q.intl.format(q.t.xCaYwE, {}) : q.intl.format(q.t["gpqr+n"], {}),
            onLearnMore: c,
            renderVisual: () => t,
        })
    );
}
function eO(e) {
    var t, n, i;
    let { currentUser: a, onClose: o } = e,
        s = (0, B.Rw)(),
        { analyticsLocations: l } = (0, b.ZP)(E.Z.PREMIUM_UNCANCEL_MODAL),
        c = (0, B.GG)(),
        u = null != (t = null == s ? void 0 : s.id) ? t : K.VU.PREMIUM_TENURE_1_MONTH,
        d = (0, F.Z)(u);
    if (!(0, G.M5)(a, K.PremiumTypes.TIER_2) || null == c) return null;
    let f = null != (n = null == s ? void 0 : s.status) ? n : B.Vq.UPCOMING,
        _ =
            null != (i = null == s ? void 0 : s.nameUnformatted)
                ? i
                : K.vK[K.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        m = (0, V.J)(u),
        h = q.intl.string(_),
        g = f === B.Vq.EARNED,
        y = null != s && "daysLeft" in s ? s.daysLeft : 1,
        O = q.t.pwkxYF;
    if (g) {
        let e = Math.max((0, G.k)(c), 1);
        e >= 365 ? ((y = Math.floor(e / 365)), (O = q.t["/ojPfi"])) : ((y = e), (O = q.t.IItWYo));
    }
    let v = () => {
        o(),
            (0, H.k)({
                analyticsLocations: l,
                displayProfile: null,
            }),
            M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
    };
    return (0, r.jsx)(eE, {
        description: q.intl.format(O, { time: y }),
        onLearnMore: v,
        renderVisual: () =>
            (0, r.jsx)(p.$1m, {
                className: Q.badgeGradientWrapper,
                color: d,
                children: (0, r.jsx)("img", {
                    alt: h,
                    src: m,
                    className: Q.badgeImage,
                }),
            }),
    });
}
function ev(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        a = (0, y.wC)(null)
            .filter((e) => e.type === O.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        o = (0, d.Wu)([S.Z], () => S.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        s = eg().emojiStickersVisual,
        l = t === K.PremiumTypes.TIER_1,
        c = () => {
            window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)),
                M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(eE, {
        description: l ? q.intl.format(q.t.couiKJ, {}) : q.intl.format(q.t["0hUHi6"], {}),
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
                                        I.Z,
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
function eS(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => _.Z.wait(() => (0, m.X8)()), []);
    let a = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        [s, l] = (0, d.Wu)([j.Z, x.Z], () => {
            let e = j.Z.boostSlots,
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
        f = eg().boostItemVisual,
        h = () => {
            n(),
                (0, w.openUserSettings)(D.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: z.oAB.GUILD_BOOSTING }),
                M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(eE, {
        description: t === K.PremiumTypes.TIER_1 ? q.intl.format(q.t.K4Hv69, {}) : q.intl.format(q.t.wRxEDW, {}),
        onLearnMore: h,
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
                                      (0, r.jsx)(p.Text, {
                                          variant: "text-md/normal",
                                          className: o()(Q.textSingleLineEllipsis, Q.boostCardTitle),
                                          children: s.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Q.boostCardSubtitle,
                                          children: [
                                              (0, r.jsx)(p.Ucv, {
                                                  color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: Q.boostCardGem,
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  variant: "text-xs/normal",
                                                  className: o()(Q.textSingleLineEllipsis, Q.boostCardCount),
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
let eI = () => {
    let e = eg().screenShareItemVisual,
        t = () => {
            window.open(U.Z.getArticleURL(z.BhN.STREAM_QUALITY_SETTINGS)),
                M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(eE, {
        description: q.intl.format(q.t.wK04T1, {}),
        onLearnMore: t,
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: e,
            }),
    });
};
function eT(e) {
    let { premiumType: t } = e,
        n = eg().uploadsMessagesItemVisual,
        i = () => {
            window.open(U.Z.getArticleURL(z.BhN.PREMIUM_DETAILS)),
                M.default.track(z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(eE, {
        description: t === K.PremiumTypes.TIER_2 ? q.intl.format(q.t.GsOFRJ, {}) : q.intl.format(q.t.wFWO6D, {}),
        onLearnMore: i,
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: n,
            }),
    });
}
let eA = i.createContext({ isPremiumRebrand: !1 }),
    eC = () => i.useContext(eA).isPremiumRebrand;
function eN(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: s = !1, isPremiumRebrand: l = !1 } = e,
        c = i.useMemo(() => {
            let e = [];
            switch (n) {
                case K.PremiumTypes.TIER_0:
                    e.push((0, r.jsx)(ev, { premiumType: n }), (0, r.jsx)(eT, { premiumType: n }));
                    break;
                case K.PremiumTypes.TIER_1:
                    s
                        ? e.push(
                              (0, r.jsx)(
                                  ey,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eS,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  ey,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(ev, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: n }, "uploads-item"),
                              (0, r.jsx)(
                                  eS,
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
                                  ey,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eS,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eO,
                                  {
                                      currentUser: t,
                                      onClose: a,
                                  },
                                  "badge-item",
                              ),
                              (0, r.jsx)(
                                  ey,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(ev, { premiumType: n }, "emoji-stickers-item"),
                              (0, r.jsx)(
                                  eS,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eT, { premiumType: n }, "uploads-item"),
                          );
            }
            return e;
        }, [n, t, a, s]);
    return (0, r.jsx)(eA.Provider, {
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
            isLoading: _ = !1,
            churnUserDiscountOffer: m = null,
            isDowngrade: h = !1,
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
    let y = null != m && !_;
    return (i.useEffect(() => {
        y &&
            M.default.track(z.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: null == m ? void 0 : m.discount_id,
            });
    }, [y, f, m]),
    _)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(W.Z, {
                      premiumType: t,
                      onClose: s,
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
                      onClose: s,
                  }),
                  (0, r.jsxs)(p.hzk, {
                      "data-migration-pending": !0,
                      className: Q.body,
                      children: [
                          (0, r.jsx)(p.Heading, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: Q.title,
                              children: n,
                          }),
                          (0, r.jsxs)("div", {
                              className: E,
                              children: [
                                  g,
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-md/normal",
                                      children: a,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(eN, {
                              currentUser: b,
                              premiumType: t,
                              onClose: s,
                              isDowngrade: h,
                          }),
                      ],
                  }),
                  !y &&
                      (0, r.jsx)(p.mzw, {
                          "data-migration-pending": !0,
                          children: o,
                      }),
                  y &&
                      (0, r.jsx)(Y.Z, {
                          churnUserDiscountOffer: m,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
