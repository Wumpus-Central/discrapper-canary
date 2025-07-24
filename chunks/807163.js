(r.d(s, {
    Z: () => eg,
    g: () => eh
}),
    r(953529),
    r(388685),
    r(539854));
var t = r(255367),
    n = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(512722),
    l = r.n(o),
    c = r(392711),
    u = r.n(c),
    m = r(442837),
    d = r(780384),
    p = r(755721),
    x = r(481060),
    f = r(570140),
    j = r(179360),
    C = r(230711),
    h = r(410030),
    g = r(607070),
    I = r(543241),
    N = r(906411),
    T = r(565138),
    b = r(822179),
    v = r(419922),
    E = r(687158),
    _ = r(484459),
    L = r(813549),
    y = r(867176),
    A = r(502762),
    M = r(652853),
    P = r(430824),
    O = r(594174),
    U = r(314884),
    R = r(626135),
    Z = r(768581),
    w = r(63063),
    S = r(998502),
    k = r(53900),
    F = r(789155),
    V = r(55610),
    z = r(798769),
    D = r(474936),
    K = r(981631),
    B = r(388032),
    G = r(18908),
    W = r(834982),
    Y = r(912450),
    q = r(703548),
    H = r(869333),
    Q = r(652528),
    X = r(874692),
    $ = r(391458),
    J = r(70967),
    ee = r(674264),
    es = r(360088),
    er = r(304880);
function et() {
    return (et =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var r = arguments[s];
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
            }
            return e;
        }).apply(this, arguments);
}
let en = S.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    ei = {
        boostItemVisual: Q,
        emojiStickersVisual: X,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: $,
        uploadsMessagesItemVisualV2: J,
        PL: ee,
        TR: er
    },
    ea = {
        boostItemVisual: W,
        emojiStickersVisual: Y,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: q,
        uploadsMessagesItemVisualV2: H,
        PL: ee,
        TR: er
    };
function eo() {
    let e = (0, h.ZP)();
    return (0, d.wj)(e) ? ea : ei;
}
function el(e) {
    let { description: s, onLearnMore: r, renderVisual: n } = e,
        i = eC();
    return (0, t.jsxs)('div', {
        className: a()(G.whatYouLoseItem, { [G.premiumRebrand]: i }),
        children: [
            (0, t.jsxs)('div', {
                className: a()(G.whatYouLoseItemLeftColumn, { [G.premiumRebrand]: i }),
                children: [
                    (0, t.jsx)(x.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, t.jsx)(p.zx, {
                        look: p.zx.Looks.LINK,
                        color: p.zx.Colors.LINK,
                        size: p.zx.Sizes.NONE,
                        className: G.whatYouLoseItemLearnMore,
                        onClick: r,
                        children: B.intl.string(B.t.hvVgAQ)
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: a()(G.whatYouLoseItemRightColumn, { [G.premiumRebrand]: i }),
                children: n()
            })
        ]
    });
}
function ec(e) {
    var s,
        r,
        n = et(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
    let { theme: i } = (0, M.z)(),
        a = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, i).hex();
    return (0, t.jsx)(
        x.SrA,
        ((s = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var r = null != arguments[s] ? arguments[s] : {},
                    t = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (t = t.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    t.forEach(function (s) {
                        var t;
                        ((t = r[s]),
                            s in e
                                ? Object.defineProperty(e, s, {
                                      value: t,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[s] = t));
                    }));
            }
            return e;
        })({ size: 'md' }, n)),
        (r = r = { color: a }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(r))
            : (function (e, s) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, t);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        s)
    );
}
function eu(e) {
    let s,
        { currentUser: r, premiumType: n, onClose: i } = e,
        a = (0, E.ZP)(r.id),
        o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        l = n === D.p9.TIER_1;
    return (
        (s =
            (null == a ? void 0 : a.premiumType) === D.p9.TIER_2
                ? (0, t.jsxs)(A.Z, {
                      user: r,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: G.profileCard,
                      children: [
                          (0, t.jsx)(y.b, {
                              user: r,
                              displayProfile: a,
                              avatarSize: x.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4
                          }),
                          (0, t.jsx)(en, {
                              className: G.profileAvatar,
                              src: r.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              'aria-label': r.username
                          }),
                          (0, t.jsxs)('div', {
                              className: G.profileUserInfo,
                              children: [
                                  (0, t.jsx)(L.Z, {
                                      className: G.profileNameTag,
                                      usernameClass: G.profileNameTagUsername,
                                      name: r.toString()
                                  }),
                                  (0, t.jsx)(ec, { className: G.profilePremiumIcon })
                              ]
                          })
                      ]
                  })
                : (0, t.jsxs)('div', {
                      className: G.profileCardTier1,
                      children: [
                          (0, t.jsx)(en, {
                              className: G.profileAvatarTier1,
                              src: r.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              'aria-label': r.username
                          }),
                          (0, t.jsxs)('div', {
                              className: G.profileUserInfoTier1,
                              children: [
                                  (0, t.jsx)(L.Z, {
                                      className: G.profileNameTag,
                                      usernameClass: G.profileNameTagUsername,
                                      name: r.toString()
                                  }),
                                  (0, t.jsx)(x.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: G.profilePremiumIcon
                                  })
                              ]
                          })
                      ]
                  })),
        (0, t.jsx)(
            el,
            {
                description: l ? B.intl.format(B.t.xCaYwM, {}) : B.intl.format(B.t['gpqr+v'], {}),
                onLearnMore: () => {
                    (i(), C.Z.open(K.oAB.PROFILE_CUSTOMIZATION), R.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' }));
                },
                renderVisual: () => s
            },
            'profile-item'
        )
    );
}
function em(e) {
    let { premiumType: s } = e,
        r = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        n = (0, I.wC)(null)
            .filter((e) => e.type === N.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, m.Wu)([b.Z], () => b.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        a = eo().emojiStickersVisual,
        o = s === D.p9.TIER_1;
    return (0, t.jsx)(
        el,
        {
            description: o ? B.intl.format(B.t.couiKC, {}) : B.intl.format(B.t['0hUHi4'], {}),
            onLearnMore: () => {
                (window.open(w.Z.getArticleURL(K.BhN.PREMIUM_DETAILS)), R.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' }));
            },
            renderVisual: () =>
                (null != n && n.length > 0) || (!o && null != i && i.length > 0)
                    ? (0, t.jsxs)('div', {
                          className: G.emojiStickersPersonalizedContainer,
                          children: [
                              n
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : Z.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: !r && e.animated,
                                                size: 58
                                            })
                                  )
                                  .map((e) =>
                                      null != e
                                          ? (0, t.jsx)('img', {
                                                className: G.personalizedEmoji,
                                                alt: '',
                                                src: e
                                            })
                                          : null
                                  ),
                              o
                                  ? null
                                  : i.map((e) =>
                                        (0, t.jsx)(
                                            v.Z,
                                            {
                                                disableAnimation: r,
                                                sticker: e,
                                                size: 58,
                                                withLoadingIndicator: !1
                                            },
                                            e.id
                                        )
                                    )
                          ]
                      })
                    : (0, t.jsx)('img', {
                          className: G.nonPersonalizedGraphic,
                          alt: '',
                          src: a
                      })
        },
        'emoji-stickers-item'
    );
}
function ed(e) {
    let { premiumType: s, onClose: r } = e;
    n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
    let i = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([U.Z, P.Z], () => {
            let e = U.Z.boostSlots,
                s = new Map();
            u()(e)
                .map('premiumGuildSubscription')
                .map('guildId')
                .forEach((e) => {
                    if (null != P.Z.getGuild(e)) {
                        var r;
                        let t = null != (r = s.get(e)) ? r : 0;
                        s.set(e, t + 1);
                    }
                });
            let r = null,
                t = 0;
            return (s.size > 0 && ([r, t] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [P.Z.getGuild(r), t]);
        }),
        c = null != o && l > 0,
        d = eo().boostItemVisual;
    return (0, t.jsx)(
        el,
        {
            description: s === D.p9.TIER_1 ? B.intl.format(B.t['K4Hv6+'], {}) : B.intl.format(B.t.wRxEDQ, {}),
            onLearnMore: () => {
                (r(), C.Z.open(K.oAB.GUILD_BOOSTING), R.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' }));
            },
            renderVisual: () =>
                c
                    ? (0, t.jsx)('div', {
                          className: G.boostCardContainer,
                          children: (0, t.jsxs)('div', {
                              className: G.boostCard,
                              children: [
                                  (0, t.jsx)(T.Z, {
                                      guild: o,
                                      size: T.Z.Sizes.MEDIUM,
                                      animate: !i,
                                      className: G.boostCardIcon
                                  }),
                                  (0, t.jsxs)('div', {
                                      className: G.boostCardInfo,
                                      children: [
                                          (0, t.jsx)(x.Text, {
                                              variant: 'text-md/normal',
                                              className: a()(G.textSingleLineEllipsis, G.boostCardTitle),
                                              children: o.name
                                          }),
                                          (0, t.jsxs)('div', {
                                              className: G.boostCardSubtitle,
                                              children: [
                                                  (0, t.jsx)(x.$Eu, {
                                                      color: x.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                      className: G.boostCardGem
                                                  }),
                                                  (0, t.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      className: a()(G.textSingleLineEllipsis, G.boostCardCount),
                                                      children: B.intl.format(B.t['Ou/g/P'], { boostCount: l })
                                                  })
                                              ]
                                          })
                                      ]
                                  })
                              ]
                          })
                      })
                    : (0, t.jsx)('img', {
                          alt: '',
                          src: d
                      })
        },
        'boost-item'
    );
}
let ep = () => {
    let e = eo().screenShareItemVisual;
    return (0, t.jsx)(
        el,
        {
            description: B.intl.format(B.t.wK04T0, {}),
            onLearnMore: () => {
                (window.open(w.Z.getArticleURL(K.BhN.STREAM_QUALITY_SETTINGS)), R.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' }));
            },
            renderVisual: () =>
                (0, t.jsx)('img', {
                    alt: '',
                    src: e
                })
        },
        'screen-share-item'
    );
};
function ex(e) {
    let { premiumType: s } = e,
        r = eo().uploadsMessagesItemVisual;
    return (0, t.jsx)(
        el,
        {
            description: s === D.p9.TIER_2 ? B.intl.format(B.t.GsOFRE, {}) : B.intl.format(B.t.wFWO6O, {}),
            onLearnMore: () => {
                (window.open(w.Z.getArticleURL(K.BhN.PREMIUM_DETAILS)), R.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' }));
            },
            renderVisual: () =>
                (0, t.jsx)('img', {
                    alt: '',
                    src: r
                })
        },
        'uploads-item'
    );
}
let ef = (e) => {
        let { country: s } = e,
            r = eo(),
            n = 'PL' === s ? r.PL : r.TR;
        return (0, t.jsx)(
            el,
            {
                description: B.intl.format('PL' === s ? B.t['0MAev7'] : B.t.p2CqUl, {}),
                onLearnMore: () => {
                    (window.open(w.Z.getArticleURL(K.BhN.LOCALIZED_PRICING)), R.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' }));
                },
                renderVisual: () =>
                    (0, t.jsx)('img', {
                        alt: '',
                        src: n
                    })
            },
            'grandfathered-prices-item'
        );
    },
    ej = n.createContext({ isPremiumRebrand: !1 }),
    eC = () => n.useContext(ej).isPremiumRebrand;
function eh(e) {
    let { currentUser: s, premiumType: r, onClose: i, isDowngrade: o = !1, isPremiumRebrand: c = !1 } = e,
        u = (0, k.Z)(),
        m = (0, V.U)(),
        d = n.useMemo(() => {
            let e = [];
            switch ((m && (l()(null != u, 'Subscription billing country should not be null'), e.push((0, t.jsx)(ef, { country: u }))), r)) {
                case D.p9.TIER_0:
                    e.push((0, t.jsx)(em, { premiumType: r }), (0, t.jsx)(ex, { premiumType: r }));
                    break;
                case D.p9.TIER_1:
                    o
                        ? e.push(
                              (0, t.jsx)(eu, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: i
                              }),
                              (0, t.jsx)(ep, {}),
                              (0, t.jsx)(ed, {
                                  premiumType: r,
                                  onClose: i
                              })
                          )
                        : e.push(
                              (0, t.jsx)(eu, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: i
                              }),
                              (0, t.jsx)(em, { premiumType: r }),
                              (0, t.jsx)(ep, {}),
                              (0, t.jsx)(ex, { premiumType: r }),
                              (0, t.jsx)(ed, {
                                  premiumType: r,
                                  onClose: i
                              })
                          );
                    break;
                case D.p9.TIER_2:
                    o
                        ? e.push(
                              (0, t.jsx)(eu, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: i
                              }),
                              (0, t.jsx)(ed, {
                                  premiumType: r,
                                  onClose: i
                              }),
                              (0, t.jsx)(ep, {})
                          )
                        : e.push(
                              (0, t.jsx)(eu, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: i
                              }),
                              (0, t.jsx)(em, { premiumType: r }),
                              (0, t.jsx)(ed, {
                                  premiumType: r,
                                  onClose: i
                              }),
                              (0, t.jsx)(ep, {}),
                              (0, t.jsx)(ex, { premiumType: r })
                          );
            }
            return e;
        }, [r, s, i, o, m, u]);
    return (0, t.jsx)(ej.Provider, {
        value: { isPremiumRebrand: c },
        children: (0, t.jsx)('div', {
            className: a()(G.whatYouLoseItemContainer, {
                [G.premiumRebrand]: c,
                [G.noMargin]: c && d.length <= 2
            }),
            children: d
        })
    });
}
let eg = function (e) {
    let { premiumType: s, titleText: r, subtitleText: i, footer: a, onClose: o, onDiscountClaim: c, onContinue: u, analyticsLocations: d, isLoading: p = !1, churnUserDiscountOffer: f = null, isDowngrade: j = !1, subtitleIcon: C, subtitleClassName: h } = e,
        g = (0, m.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return (l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e);
        });
    n.useEffect(() => {
        (0, _.Z)(g.id, g.getAvatarURL(null, 80));
    }, [g]);
    let I = null != f && !p;
    return (n.useEffect(() => {
        I &&
            R.default.track(K.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == f ? void 0 : f.discount_id
            });
    }, [I, d, f]),
    p)
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(z.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, t.jsx)(x.hzk, {
                      className: G.body,
                      children: (0, t.jsx)(x.$jN, { className: G.spinner })
                  })
              ]
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(z.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, t.jsxs)(x.hzk, {
                      className: G.body,
                      children: [
                          (0, t.jsx)(x.X6q, {
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              className: G.title,
                              children: r
                          }),
                          (0, t.jsxs)('div', {
                              className: h,
                              children: [
                                  C,
                                  (0, t.jsx)(x.Text, {
                                      variant: 'text-md/normal',
                                      children: i
                                  })
                              ]
                          }),
                          (0, t.jsx)(eh, {
                              currentUser: g,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: j
                          })
                      ]
                  }),
                  !I && (0, t.jsx)(x.mzw, { children: a }),
                  I &&
                      (0, t.jsx)(F.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
