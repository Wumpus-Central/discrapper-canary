n.d(t, {
    Z: () => ev,
    g: () => eO,
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
    g = n(410030),
    E = n(607070),
    b = n(543241),
    y = n(906411),
    O = n(565138),
    v = n(822179),
    I = n(419922),
    T = n(687158),
    S = n(484459),
    A = n(813549),
    C = n(867176),
    N = n(502762),
    R = n(652853),
    P = n(313789),
    w = n(518596),
    D = n(430824),
    x = n(594174),
    L = n(314884),
    j = n(626135),
    M = n(768581),
    k = n(63063),
    U = n(998502),
    G = n(789155),
    B = n(798769),
    Z = n(474936),
    F = n(981631),
    V = n(388032),
    H = n(616885),
    Y = n(834982),
    W = n(912450),
    K = n(703548),
    z = n(869333),
    q = n(652528),
    X = n(874692),
    Q = n(391458),
    J = n(70967),
    $ = n(674264),
    ee = n(360088),
    et = n(304880);
function en(e, t, n) {
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
function er() {
    return (er =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function ei(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function ea(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let el = U.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    ec = {
        boostItemVisual: q,
        emojiStickersVisual: X,
        screenShareItemVisual: ee,
        uploadsMessagesItemVisual: Q,
        uploadsMessagesItemVisualV2: J,
        PL: $,
        TR: et,
    },
    eu = {
        boostItemVisual: Y,
        emojiStickersVisual: W,
        screenShareItemVisual: ee,
        uploadsMessagesItemVisual: K,
        uploadsMessagesItemVisualV2: z,
        PL: $,
        TR: et,
    };
function ed() {
    let e = (0, g.ZP)();
    return (0, f.wj)(e) ? eu : ec;
}
function ef(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = ey();
    return (0, r.jsxs)("div", {
        className: o()(H.whatYouLoseItem, { [H.premiumRebrand]: a }),
        children: [
            (0, r.jsxs)("div", {
                className: o()(H.whatYouLoseItemLeftColumn, { [H.premiumRebrand]: a }),
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
                        className: H.whatYouLoseItemLearnMore,
                        onClick: n,
                        children: V.intl.string(V.t.hvVgAQ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(H.whatYouLoseItemRightColumn, { [H.premiumRebrand]: a }),
                children: i(),
            }),
        ],
    });
}
function e_(e) {
    var t = er({}, ei(e));
    let { theme: n } = (0, R.z)(),
        i = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, n).hex();
    return (0, r.jsx)(p.SrA, es(ea({ size: "md" }, t), { color: i }));
}
function ep(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        o = (0, T.ZP)(n.id),
        s = (0, d.e7)([E.Z], () => E.Z.useReducedMotion),
        l = i === Z.p9.TIER_1,
        c = () => {
            a(),
                (0, w.openUserSettings)(P.n.PROFILE_PANEL, { section: F.oAB.PROFILE_CUSTOMIZATION }),
                j.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "user_profile_customization" });
        };
    return (
        (t =
            (null == o ? void 0 : o.premiumType) === Z.p9.TIER_2
                ? (0, r.jsxs)(N.Z, {
                      user: n,
                      displayProfile: o,
                      forceShowPremium: !0,
                      themeType: null,
                      className: H.profileCard,
                      children: [
                          (0, r.jsx)(C.b, {
                              user: n,
                              displayProfile: o,
                              avatarSize: p.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(el, {
                              className: H.profileAvatar,
                              src: n.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !s),
                              size: p.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: H.profileUserInfo,
                              children: [
                                  (0, r.jsx)(A.Z, {
                                      className: H.profileNameTag,
                                      usernameClass: H.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(e_, { className: H.profilePremiumIcon }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: H.profileCardTier1,
                      children: [
                          (0, r.jsx)(el, {
                              className: H.profileAvatarTier1,
                              src: n.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !s),
                              size: p.EFr.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: H.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(A.Z, {
                                      className: H.profileNameTag,
                                      usernameClass: H.profileNameTagUsername,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(p.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: H.profilePremiumIcon,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(
            ef,
            {
                description: l ? V.intl.format(V.t.xCaYwM, {}) : V.intl.format(V.t["gpqr+v"], {}),
                onLearnMore: c,
                renderVisual: () => t,
            },
            "profile-item",
        )
    );
}
function eh(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.e7)([E.Z], () => E.Z.useReducedMotion),
        a = (0, b.wC)(null)
            .filter((e) => e.type === y.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        o = (0, d.Wu)([v.Z], () => v.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        s = ed().emojiStickersVisual,
        l = t === Z.p9.TIER_1,
        c = () => {
            window.open(k.Z.getArticleURL(F.BhN.PREMIUM_DETAILS)),
                j.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "emojis_stickers" });
        };
    return (0, r.jsx)(
        ef,
        {
            description: l ? V.intl.format(V.t.couiKC, {}) : V.intl.format(V.t["0hUHi4"], {}),
            onLearnMore: c,
            renderVisual: () =>
                (null != a && a.length > 0) || (!l && null != o && o.length > 0)
                    ? (0, r.jsxs)("div", {
                          className: H.emojiStickersPersonalizedContainer,
                          children: [
                              a
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : M.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: !i && e.animated,
                                                size: 58,
                                            }),
                                  )
                                  .map((e) =>
                                      null != e
                                          ? (0, r.jsx)("img", {
                                                className: H.personalizedEmoji,
                                                alt: "",
                                                src: e,
                                            })
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
                          className: H.nonPersonalizedGraphic,
                          alt: "",
                          src: s,
                      }),
        },
        "emoji-stickers-item",
    );
}
function em(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => h.Z.wait(() => (0, m.X8)()), []);
    let a = (0, d.e7)([E.Z], () => E.Z.useReducedMotion),
        [s, l] = (0, d.Wu)([L.Z, D.Z], () => {
            let e = L.Z.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != D.Z.getGuild(e)) {
                        var n;
                        let r = null != (n = t.get(e)) ? n : 0;
                        t.set(e, r + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [D.Z.getGuild(n), r]
            );
        }),
        c = null != s && l > 0,
        f = ed().boostItemVisual,
        _ = () => {
            n(),
                (0, w.openUserSettings)(P.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { section: F.oAB.GUILD_BOOSTING }),
                j.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "boosts" });
        };
    return (0, r.jsx)(
        ef,
        {
            description: t === Z.p9.TIER_1 ? V.intl.format(V.t["K4Hv6+"], {}) : V.intl.format(V.t.wRxEDQ, {}),
            onLearnMore: _,
            renderVisual: () =>
                c
                    ? (0, r.jsx)("div", {
                          className: H.boostCardContainer,
                          children: (0, r.jsxs)("div", {
                              className: H.boostCard,
                              children: [
                                  (0, r.jsx)(O.Z, {
                                      guild: s,
                                      size: O.Z.Sizes.MEDIUM,
                                      animate: !a,
                                      className: H.boostCardIcon,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: H.boostCardInfo,
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              variant: "text-md/normal",
                                              className: o()(H.textSingleLineEllipsis, H.boostCardTitle),
                                              children: s.name,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: H.boostCardSubtitle,
                                              children: [
                                                  (0, r.jsx)(p.$Eu, {
                                                      color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                      className: H.boostCardGem,
                                                  }),
                                                  (0, r.jsx)(p.Text, {
                                                      variant: "text-xs/normal",
                                                      className: o()(H.textSingleLineEllipsis, H.boostCardCount),
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
let eg = () => {
    let e = ed().screenShareItemVisual,
        t = () => {
            window.open(k.Z.getArticleURL(F.BhN.STREAM_QUALITY_SETTINGS)),
                j.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "screen_share" });
        };
    return (0, r.jsx)(
        ef,
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
function eE(e) {
    let { premiumType: t } = e,
        n = ed().uploadsMessagesItemVisual,
        i = () => {
            window.open(k.Z.getArticleURL(F.BhN.PREMIUM_DETAILS)),
                j.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: "msgs_uploads" });
        };
    return (0, r.jsx)(
        ef,
        {
            description: t === Z.p9.TIER_2 ? V.intl.format(V.t.GsOFRE, {}) : V.intl.format(V.t.wFWO6O, {}),
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
let eb = i.createContext({ isPremiumRebrand: !1 }),
    ey = () => i.useContext(eb).isPremiumRebrand;
function eO(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: s = !1, isPremiumRebrand: l = !1 } = e,
        c = i.useMemo(() => {
            let e = [];
            switch (n) {
                case Z.p9.TIER_0:
                    e.push((0, r.jsx)(eh, { premiumType: n }), (0, r.jsx)(eE, { premiumType: n }));
                    break;
                case Z.p9.TIER_1:
                    s
                        ? e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(eg, {}),
                              (0, r.jsx)(em, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                          )
                        : e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(eh, { premiumType: n }),
                              (0, r.jsx)(eg, {}),
                              (0, r.jsx)(eE, { premiumType: n }),
                              (0, r.jsx)(em, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                          );
                    break;
                case Z.p9.TIER_2:
                    s
                        ? e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(em, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(eg, {}),
                          )
                        : e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: t,
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(eh, { premiumType: n }),
                              (0, r.jsx)(em, {
                                  premiumType: n,
                                  onClose: a,
                              }),
                              (0, r.jsx)(eg, {}),
                              (0, r.jsx)(eE, { premiumType: n }),
                          );
            }
            return e;
        }, [n, t, a, s]);
    return (0, r.jsx)(eb.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, r.jsx)("div", {
            className: o()(H.whatYouLoseItemContainer, {
                [H.premiumRebrand]: l,
                [H.noMargin]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let ev = function (e) {
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
        b = (0, d.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, S.Z)(b.id, b.getAvatarURL(null, 80));
    }, [b]);
    let y = null != h && !_;
    return (i.useEffect(() => {
        y &&
            j.default.track(F.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: null == h ? void 0 : h.discount_id,
            });
    }, [y, f, h]),
    _)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsx)(p.hzk, {
                      "data-migration-pending": !0,
                      className: H.body,
                      children: (0, r.jsx)(p.$jN, { className: H.spinner }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.Z, {
                      premiumType: t,
                      onClose: s,
                  }),
                  (0, r.jsxs)(p.hzk, {
                      "data-migration-pending": !0,
                      className: H.body,
                      children: [
                          (0, r.jsx)(p.X6q, {
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              className: H.title,
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
                          (0, r.jsx)(eO, {
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
                      (0, r.jsx)(G.Z, {
                          churnUserDiscountOffer: h,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
