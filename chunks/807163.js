t.d(s, {
    Z: () => eM,
    g: () => eb,
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
    p = t(755721),
    f = t(481060),
    x = t(570140),
    g = t(179360),
    j = t(410030),
    C = t(607070),
    N = t(100527),
    h = t(906732),
    I = t(543241),
    E = t(906411),
    _ = t(565138),
    T = t(822179),
    b = t(419922),
    M = t(687158),
    U = t(484459),
    v = t(813549),
    R = t(867176),
    P = t(502762),
    L = t(652853),
    O = t(313789),
    y = t(518596),
    A = t(430824),
    S = t(594174),
    w = t(314884),
    Z = t(626135),
    V = t(768581),
    k = t(55935),
    z = t(63063),
    F = t(998502),
    D = t(768634),
    G = t(848572),
    B = t(787528),
    K = t(768865),
    W = t(789155),
    H = t(798769),
    Y = t(474936),
    q = t(981631),
    Q = t(388032),
    X = t(819019),
    $ = t(834982),
    J = t(912450),
    ee = t(703548),
    es = t(869333),
    et = t(652528),
    er = t(874692),
    en = t(391458),
    ea = t(70967),
    ei = t(674264),
    eo = t(360088),
    el = t(304880);
function ec() {
    return (ec =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
let eu = {
        [Y.VU.PREMIUM_TENURE_1_MONTH]: X.badgeGradientBronze,
        [Y.VU.PREMIUM_TENURE_3_MONTH]: X.badgeGradientSilver,
        [Y.VU.PREMIUM_TENURE_6_MONTH]: X.badgeGradientGold,
        [Y.VU.PREMIUM_TENURE_12_MONTH]: X.badgeGradientPlatinum,
        [Y.VU.PREMIUM_TENURE_24_MONTH]: X.badgeGradientDiamond,
        [Y.VU.PREMIUM_TENURE_36_MONTH]: X.badgeGradientEmerald,
        [Y.VU.PREMIUM_TENURE_60_MONTH]: X.badgeGradientRuby,
        [Y.VU.PREMIUM_TENURE_72_MONTH]: X.badgeGradientOpal,
    },
    em = F.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ed = {
        boostItemVisual: et,
        emojiStickersVisual: er,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: en,
        uploadsMessagesItemVisualV2: ea,
        PL: ei,
        TR: el,
    },
    ep = {
        boostItemVisual: $,
        emojiStickersVisual: J,
        screenShareItemVisual: eo,
        uploadsMessagesItemVisual: ee,
        uploadsMessagesItemVisualV2: es,
        PL: ei,
        TR: el,
    };
function ef() {
    let e = (0, j.ZP)();
    return (0, d.wj)(e) ? ep : ed;
}
function ex(e) {
    let { description: s, onLearnMore: t, renderVisual: n } = e,
        a = eT();
    return (0, r.jsxs)("div", {
        className: i()(X.whatYouLoseItem, { [X.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: i()(X.whatYouLoseItemLeftColumn, { [X.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/normal",
                        children: s,
                    }),
                    (0, r.jsx)(p.zx, {
                        "data-migration-pending": !0,
                        look: p.zx.Looks.LINK,
                        color: p.zx.Colors.LINK,
                        size: p.zx.Sizes.NONE,
                        className: X.whatYouLoseItemLearnMore,
                        onClick: t,
                        children: Q.intl.string(Q.t.hvVgAQ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: i()(X.whatYouLoseItemRightColumn, { [X.premiumRebrand]: a }),
                children: n(),
            }),
        ],
    });
}
function eg(e) {
    var s,
        t,
        n = ec(
            {},
            (function (e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e;
            })(e),
        );
    let { theme: a } = (0, L.z)(),
        i = (0, f.dQu)(f.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
    return (0, r.jsx)(
        f.SrA,
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
function ej(e) {
    let s,
        { currentUser: t, premiumType: n, onClose: a } = e,
        i = (0, M.ZP)(t.id),
        o = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        l = n === Y.p9.TIER_1;
    return (
        (s =
            (null == i ? void 0 : i.premiumType) === Y.p9.TIER_2
                ? (0, r.jsxs)(P.Z, {
                      user: t,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: X.profileCard,
                      children: [
                          (0, r.jsx)(R.b, {
                              user: t,
                              displayProfile: i,
                              avatarSize: f.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(em, {
                              className: X.profileAvatar,
                              src: t.getAvatarURL(void 0, (0, f.pxk)(f.EFr.SIZE_56), !o),
                              size: f.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: X.profileUserInfo,
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      className: X.profileNameTag,
                                      usernameClass: X.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(eg, { className: X.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: X.profileCardTier1,
                      children: [
                          (0, r.jsx)(em, {
                              className: X.profileAvatarTier1,
                              src: t.getAvatarURL(void 0, (0, f.pxk)(f.EFr.SIZE_56), !o),
                              size: f.EFr.SIZE_56,
                              "aria-label": t.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: X.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      className: X.profileNameTag,
                                      usernameClass: X.profileNameTagUsername,
                                      name: t.toString(),
                                  }),
                                  (0, r.jsx)(f.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: X.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(ex, {
            description: l ? Q.intl.format(Q.t.xCaYwM, {}) : Q.intl.format(Q.t["gpqr+v"], {}),
            onLearnMore: () => {
                a(),
                    (0, y.openUserSettings)(O.n.PROFILE_PANEL, { section: q.oAB.PROFILE_CUSTOMIZATION }),
                    Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                        action: "user_profile_customization",
                    });
            },
            renderVisual: () => s,
        })
    );
}
function eC(e) {
    var s, t, n, a;
    let { premiumType: o, onClose: l } = e,
        c = (0, D.C)(o, "BadgeItem"),
        u = (0, G.Rw)(),
        { analyticsLocations: m } = (0, h.ZP)(N.Z.PREMIUM_UNCANCEL_MODAL),
        d = (0, G.GG)();
    if (!c || null == d) return null;
    let p = null != (s = null == u ? void 0 : u.id) ? s : Y.VU.PREMIUM_TENURE_1_MONTH,
        x = null != (t = null == u ? void 0 : u.status) ? t : G.Vq.UPCOMING,
        g =
            null != (n = null == u ? void 0 : u.nameUnformatted)
                ? n
                : Y.vK[Y.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        j = (0, B.J)(p),
        C = Q.intl.string(g),
        I = x === G.Vq.EARNED,
        E = null != u && "daysLeft" in u ? u.daysLeft : 1,
        _ = Q.t.pwkxYG;
    if (I) {
        let e = new Date(),
            s = Math.max((0, k.wY)(e, new Date(d)), 1);
        s >= 365 ? ((E = Math.floor(s / 365)), (_ = Q.t["/ojPfn"])) : ((E = s), (_ = Q.t.IItWYm));
    }
    let T = null != (a = eu[p]) ? a : X.badgeGradientBronze;
    return (0, r.jsx)(ex, {
        description: Q.intl.format(_, { time: E }),
        onLearnMore: () => {
            l(),
                (0, K.k)({
                    analyticsLocations: m,
                    displayProfile: null,
                }),
                Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "badges" });
        },
        renderVisual: () =>
            (0, r.jsxs)(f.$1m, {
                className: i()(X.badgeGradientWrapper, T),
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: j,
                        className: i()(X.badgeImage, X.blurredBadgeImage),
                    }),
                    (0, r.jsx)("img", {
                        alt: C,
                        src: j,
                        className: X.badgeImage,
                    }),
                ],
            }),
    });
}
function eN(e) {
    let { premiumType: s } = e,
        t = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        n = (0, I.wC)(null)
            .filter((e) => e.type === E.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, m.Wu)([T.Z], () => T.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        i = ef().emojiStickersVisual,
        o = s === Y.p9.TIER_1;
    return (0, r.jsx)(ex, {
        description: o ? Q.intl.format(Q.t.couiKC, {}) : Q.intl.format(Q.t["0hUHi4"], {}),
        onLearnMore: () => {
            window.open(z.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)),
                Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        },
        renderVisual: () =>
            (null != n && n.length > 0) || (!o && null != a && a.length > 0)
                ? (0, r.jsxs)("div", {
                      className: X.emojiStickersPersonalizedContainer,
                      children: [
                          n
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : V.ZP.getEmojiURL({
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
                                                className: X.personalizedEmoji,
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
                      className: X.nonPersonalizedGraphic,
                      alt: "",
                      src: i,
                  }),
    });
}
function eh(e) {
    let { premiumType: s, onClose: t } = e;
    n.useEffect(() => x.Z.wait(() => (0, g.X8)()), []);
    let a = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([w.Z, A.Z], () => {
            let e = w.Z.boostSlots,
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
        d = ef().boostItemVisual;
    return (0, r.jsx)(ex, {
        description: s === Y.p9.TIER_1 ? Q.intl.format(Q.t["K4Hv6+"], {}) : Q.intl.format(Q.t.wRxEDQ, {}),
        onLearnMore: () => {
            t(),
                (0, y.openUserSettings)(O.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: q.oAB.GUILD_BOOSTING }),
                Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        },
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: X.boostCardContainer,
                      children: (0, r.jsxs)("div", {
                          className: X.boostCard,
                          children: [
                              (0, r.jsx)(_.Z, {
                                  guild: o,
                                  size: _.Z.Sizes.MEDIUM,
                                  animate: !a,
                                  className: X.boostCardIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: X.boostCardInfo,
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-md/normal",
                                          className: i()(X.textSingleLineEllipsis, X.boostCardTitle),
                                          children: o.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: X.boostCardSubtitle,
                                          children: [
                                              (0, r.jsx)(f.$Eu, {
                                                  color: f.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: X.boostCardGem,
                                              }),
                                              (0, r.jsx)(f.Text, {
                                                  variant: "text-xs/normal",
                                                  className: i()(X.textSingleLineEllipsis, X.boostCardCount),
                                                  children: Q.intl.format(Q.t["Ou/g/P"], { boostCount: l }),
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
let eI = () => {
    let e = ef().screenShareItemVisual;
    return (0, r.jsx)(ex, {
        description: Q.intl.format(Q.t.wK04T0, {}),
        onLearnMore: () => {
            window.open(z.Z.getArticleURL(q.BhN.STREAM_QUALITY_SETTINGS)),
                Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
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
        t = ef().uploadsMessagesItemVisual;
    return (0, r.jsx)(ex, {
        description: s === Y.p9.TIER_2 ? Q.intl.format(Q.t.GsOFRE, {}) : Q.intl.format(Q.t.wFWO6O, {}),
        onLearnMore: () => {
            window.open(z.Z.getArticleURL(q.BhN.PREMIUM_DETAILS)),
                Z.default.track(q.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        },
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: t,
            }),
    });
}
let e_ = n.createContext({ isPremiumRebrand: !1 }),
    eT = () => n.useContext(e_).isPremiumRebrand;
function eb(e) {
    let { currentUser: s, premiumType: t, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        c = n.useMemo(() => {
            let e = [];
            switch (t) {
                case Y.p9.TIER_0:
                    e.push((0, r.jsx)(eN, { premiumType: t }), (0, r.jsx)(eE, { premiumType: t }));
                    break;
                case Y.p9.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  ej,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eh,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  ej,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eN, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eE, { premiumType: t }, "uploads-item"),
                              (0, r.jsx)(
                                  eh,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          );
                    break;
                case Y.p9.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  ej,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eh,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eC,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "badge-item",
                              ),
                              (0, r.jsx)(
                                  ej,
                                  {
                                      currentUser: s,
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(eN, { premiumType: t }, "emoji-stickers-item"),
                              (0, r.jsx)(
                                  eh,
                                  {
                                      premiumType: t,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(eI, {}, "screen-share-item"),
                              (0, r.jsx)(eE, { premiumType: t }, "uploads-item"),
                          );
            }
            return e;
        }, [t, s, a, o]);
    return (0, r.jsx)(e_.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", {
            className: i()(X.whatYouLoseItemContainer, {
                [X.premiumRebrand]: l,
                [X.noMargin]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let eM = function (e) {
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
            churnUserDiscountOffer: x = null,
            isDowngrade: g = !1,
            subtitleIcon: j,
            subtitleClassName: C,
        } = e,
        N = (0, m.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    n.useEffect(() => {
        (0, U.Z)(N.id, N.getAvatarURL(null, 80));
    }, [N]);
    let h = null != x && !p;
    return (n.useEffect(() => {
        h &&
            Z.default.track(q.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == x ? void 0 : x.discount_id,
            });
    }, [h, d, x]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(H.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsx)(f.hzk, {
                      "data-migration-pending": !0,
                      className: X.body,
                      children: (0, r.jsx)(f.$jN, { className: X.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(H.Z, {
                      premiumType: s,
                      onClose: o,
                  }),
                  (0, r.jsxs)(f.hzk, {
                      "data-migration-pending": !0,
                      className: X.body,
                      children: [
                          (0, r.jsx)(f.X6q, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: X.title,
                              children: t,
                          }),
                          (0, r.jsxs)("div", {
                              className: C,
                              children: [
                                  j,
                                  (0, r.jsx)(f.Text, {
                                      variant: "text-md/normal",
                                      children: a,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(eb, {
                              currentUser: N,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: g,
                          }),
                      ],
                  }),
                  !h &&
                      (0, r.jsx)(f.mzw, {
                          "data-migration-pending": !0,
                          children: i,
                      }),
                  h &&
                      (0, r.jsx)(W.Z, {
                          churnUserDiscountOffer: x,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
