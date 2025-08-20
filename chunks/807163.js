n.d(t, {
    Z: () => eO,
    g: () => ey,
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
    _ = n(755721),
    p = n(481060),
    h = n(570140),
    m = n(179360),
    g = n(230711),
    E = n(410030),
    b = n(607070),
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
    w = n(430824),
    D = n(594174),
    x = n(314884),
    L = n(626135),
    j = n(768581),
    M = n(63063),
    k = n(998502),
    U = n(789155),
    G = n(798769),
    B = n(474936),
    Z = n(981631),
    V = n(388032),
    F = n(616885),
    H = n(834982),
    Y = n(912450),
    W = n(703548),
    K = n(869333),
    z = n(652528),
    q = n(874692),
    X = n(391458),
    Q = n(70967),
    J = n(674264),
    $ = n(360088),
    ee = n(304880);
function et(e, t, n) {
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
function en() {
    return (en =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function er(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function ei(e) {
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
                et(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let es = k.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    el = {
        boostItemVisual: z,
        emojiStickersVisual: q,
        screenShareItemVisual: $,
        uploadsMessagesItemVisual: X,
        uploadsMessagesItemVisualV2: Q,
        PL: J,
        TR: ee,
    },
    ec = {
        boostItemVisual: H,
        emojiStickersVisual: Y,
        screenShareItemVisual: $,
        uploadsMessagesItemVisual: W,
        uploadsMessagesItemVisualV2: K,
        PL: J,
        TR: ee,
    };
function eu() {
    let e = (0, E.ZP)();
    return (0, f.wj)(e) ? ec : el;
}
function ed(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = eb();
    return (0, r.jsxs)("div", {
        className: o()(F.whatYouLoseItem, { [F.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: o()(F.whatYouLoseItemLeftColumn, { [F.premiumRebrand]: a }),
                children: [
                    (0, r.jsx)(p.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                    (0, r.jsx)(_.zx, {
                        "data-migration-pending": !0,
                        look: _.zx.Looks.LINK,
                        color: _.zx.Colors.LINK,
                        size: _.zx.Sizes.NONE,
                        className: F.whatYouLoseItemLearnMore,
                        onClick: n,
                        children: V.intl.string(V.t.hvVgAQ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(F.whatYouLoseItemRightColumn, { [F.premiumRebrand]: a }),
                children: i(),
            }),
        ],
    });
}
function ef(e) {
    var t = en({}, er(e));
    let { theme: n } = (0, P.z)(),
        i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
    return (0, r.jsx)(p.SrA, eo(ei({ size: "md" }, t), { color: i }));
}
function e_(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        o = (0, S.ZP)(n.id),
        s = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
        l = i === B.p9.TIER_1,
        c = () => {
            a(),
                g.Z.open(Z.oAB.PROFILE_CUSTOMIZATION),
                L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            (null == o ? void 0 : o.premiumType) === B.p9.TIER_2
                ? (0, r.jsxs)(R.Z, {
                      user: n,
                      displayProfile: o,
                      forceShowPremium: !0,
                      themeType: null,
                      className: F.profileCard,
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
                          (0, r.jsx)(es, {
                              className: F.profileAvatar,
                              src: n.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !s),
                              size: p.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: F.profileUserInfo,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      className: F.profileNameTag,
                                      usernameClass: F.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(ef, { className: F.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: F.profileCardTier1,
                      children: [
                          (0, r.jsx)(es, {
                              className: F.profileAvatarTier1,
                              src: n.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !s),
                              size: p.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: F.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(C.Z, {
                                      className: F.profileNameTag,
                                      usernameClass: F.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(p.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: F.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(
            ed,
            {
                description: l ? V.intl.format(V.t.xCaYwM, {}) : V.intl.format(V.t["gpqr+v"], {}),
                onLearnMore: c,
                renderVisual: () => t,
            },
            "profile-item",
        )
    );
}
function ep(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
        a = (0, y.wC)(null)
            .filter((e) => e.type === O.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        o = (0, d.Wu)([I.Z], () => I.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        s = eu().emojiStickersVisual,
        l = t === B.p9.TIER_1,
        c = () => {
            window.open(M.Z.getArticleURL(Z.BhN.PREMIUM_DETAILS)),
                L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(
        ed,
        {
            description: l ? V.intl.format(V.t.couiKC, {}) : V.intl.format(V.t["0hUHi4"], {}),
            onLearnMore: c,
            renderVisual: () =>
                (null != a && a.length > 0) || (!l && null != o && o.length > 0)
                    ? (0, r.jsxs)("div", {
                          className: F.emojiStickersPersonalizedContainer,
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
                                  .map((e) =>
                                      null != e
                                          ? (0, r.jsx)("img", {
                                                className: F.personalizedEmoji,
                                                alt: "",
                                                src: e,
                                            })
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
                          className: F.nonPersonalizedGraphic,
                          alt: "",
                          src: s,
                      }),
        },
        "emoji-stickers-item",
    );
}
function eh(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => h.Z.wait(() => (0, m.X8)()), []);
    let a = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
        [s, l] = (0, d.Wu)([x.Z, w.Z], () => {
            let e = x.Z.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != w.Z.getGuild(e)) {
                        var n;
                        let r = null != (n = t.get(e)) ? n : 0;
                        t.set(e, r + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [w.Z.getGuild(n), r]
            );
        }),
        c = null != s && l > 0,
        f = eu().boostItemVisual,
        _ = () => {
            n(),
                g.Z.open(Z.oAB.GUILD_BOOSTING),
                L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(
        ed,
        {
            description: t === B.p9.TIER_1 ? V.intl.format(V.t["K4Hv6+"], {}) : V.intl.format(V.t.wRxEDQ, {}),
            onLearnMore: _,
            renderVisual: () =>
                c
                    ? (0, r.jsx)("div", {
                          className: F.boostCardContainer,
                          children: (0, r.jsxs)("div", {
                              className: F.boostCard,
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      guild: s,
                                      size: v.Z.Sizes.MEDIUM,
                                      animate: !a,
                                      className: F.boostCardIcon,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: F.boostCardInfo,
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              variant: "text-md/normal",
                                              className: o()(F.textSingleLineEllipsis, F.boostCardTitle),
                                              children: s.name,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: F.boostCardSubtitle,
                                              children: [
                                                  (0, r.jsx)(p.$Eu, {
                                                      color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                      className: F.boostCardGem,
                                                  }),
                                                  (0, r.jsx)(p.Text, {
                                                      variant: "text-xs/normal",
                                                      className: o()(F.textSingleLineEllipsis, F.boostCardCount),
                                                      children: V.intl.format(V.t["Ou/g/P"], { boostCount: l }),
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
        },
        "boost-item",
    );
}
let em = () => {
    let e = eu().screenShareItemVisual,
        t = () => {
            window.open(M.Z.getArticleURL(Z.BhN.STREAM_QUALITY_SETTINGS)),
                L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(
        ed,
        {
            description: V.intl.format(V.t.wK04T0, {}),
            onLearnMore: t,
            renderVisual: () =>
                (0, r.jsx)("img", {
                    alt: "",
                    src: e,
                }),
        },
        "screen-share-item",
    );
};
function eg(e) {
    let { premiumType: t } = e,
        n = eu().uploadsMessagesItemVisual,
        i = () => {
            window.open(M.Z.getArticleURL(Z.BhN.PREMIUM_DETAILS)),
                L.default.track(Z.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(
        ed,
        {
            description: t === B.p9.TIER_2 ? V.intl.format(V.t.GsOFRE, {}) : V.intl.format(V.t.wFWO6O, {}),
            onLearnMore: i,
            renderVisual: () =>
                (0, r.jsx)("img", {
                    alt: "",
                    src: n,
                }),
        },
        "uploads-item",
    );
}
let eE = i.createContext({ isPremiumRebrand: !1 }),
    eb = () => i.useContext(eE).isPremiumRebrand;
function ey(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: s = !1, isPremiumRebrand: l = !1 } = e,
        c = i.useMemo(() => {
            let e = [];
            switch (n) {
                case B.p9.TIER_0:
                    e.push((0, r.jsx)(ep, { premiumType: n }), (0, r.jsx)(eg, { premiumType: n }));
                    break;
                case B.p9.TIER_1:
                    s
                        ? e.push(
                              (0, r.jsx)(e_, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(em, {}),
                              (0, r.jsx)(eh, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                          )
                        : e.push(
                              (0, r.jsx)(e_, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(ep, { premiumType: n }),
                              (0, r.jsx)(em, {}),
                              (0, r.jsx)(eg, { premiumType: n }),
                              (0, r.jsx)(eh, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                          );
                    break;
                case B.p9.TIER_2:
                    s
                        ? e.push(
                              (0, r.jsx)(e_, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(eh, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(em, {}),
                          )
                        : e.push(
                              (0, r.jsx)(e_, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(ep, { premiumType: n }),
                              (0, r.jsx)(eh, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(em, {}),
                              (0, r.jsx)(eg, { premiumType: n }),
                          );
            }
            return e;
        }, [n, t, a, s]);
    return (0, r.jsx)(eE.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", {
            className: o()(F.whatYouLoseItemContainer, {
                [F.premiumRebrand]: l,
                [F.noMargin]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let eO = function (e) {
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
            churnUserDiscountOffer: h = null,
            isDowngrade: m = !1,
            subtitleIcon: g,
            subtitleClassName: E,
        } = e,
        b = (0, d.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, A.Z)(b.id, b.getAvatarURL(null, 80));
    }, [b]);
    let y = null != h && !_;
    return (i.useEffect(() => {
        y &&
            L.default.track(Z.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: null == h ? void 0 : h.discount_id,
            });
    }, [y, f, h]),
    _)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(G.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsx)(p.hzk, {
                      "data-migration-pending": !0,
                      className: F.body,
                      children: (0, r.jsx)(p.$jN, { className: F.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(G.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)(p.hzk, {
                      "data-migration-pending": !0,
                      className: F.body,
                      children: [
                          (0, r.jsx)(p.X6q, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: F.title,
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
                          (0, r.jsx)(ey, {
                              currentUser: b,
                              premiumType: t,
                              onClose: s,
                              isDowngrade: m,
                          }),
                      ],
                  }),
                  !y &&
                      (0, r.jsx)(p.mzw, {
                          "data-migration-pending": !0,
                          children: o,
                      }),
                  y &&
                      (0, r.jsx)(U.Z, {
                          churnUserDiscountOffer: h,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
