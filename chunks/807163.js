(r.d(s, { Z: () => eh }), r(953529), r(388685), r(539854));
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
    p = r(481060),
    x = r(570140),
    f = r(179360),
    j = r(230711),
    h = r(410030),
    C = r(607070),
    g = r(543241),
    I = r(906411),
    N = r(565138),
    T = r(822179),
    v = r(419922),
    b = r(687158),
    E = r(484459),
    _ = r(813549),
    L = r(867176),
    y = r(502762),
    A = r(652853),
    M = r(430824),
    O = r(594174),
    Z = r(314884),
    P = r(709586),
    U = r(626135),
    w = r(768581),
    S = r(63063),
    k = r(998502),
    R = r(53900),
    F = r(789155),
    z = r(55610),
    V = r(798769),
    D = r(474936),
    K = r(981631),
    B = r(388032),
    W = r(18908),
    G = r(834982),
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
let en = k.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
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
        boostItemVisual: G,
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
    let { description: s, onLearnMore: r, renderVisual: n } = e;
    return (0, t.jsxs)('div', {
        className: W.whatYouLoseItem,
        children: [
            (0, t.jsxs)('div', {
                className: W.whatYouLoseItemLeftColumn,
                children: [
                    (0, t.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, t.jsx)(p.zxk, {
                        look: p.zxk.Looks.LINK,
                        color: p.zxk.Colors.LINK,
                        size: p.zxk.Sizes.NONE,
                        className: W.whatYouLoseItemLearnMore,
                        onClick: r,
                        children: B.intl.string(B.t.hvVgAQ)
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: W.whatYouLoseItemRightColumn,
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
    let { theme: i } = (0, A.z)(),
        a = (0, p.dQu)(p.TVs.colors.INTERACTIVE_ACTIVE, i).hex();
    return (0, t.jsx)(
        p.SrA,
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
        a = (0, b.ZP)(r.id),
        o = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        l = n === D.p9.TIER_1;
    return (
        (s =
            (null == a ? void 0 : a.premiumType) === D.p9.TIER_2
                ? (0, t.jsxs)(y.Z, {
                      user: r,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: W.profileCard,
                      children: [
                          (0, t.jsx)(L.b, {
                              user: r,
                              displayProfile: a,
                              avatarSize: p.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4
                          }),
                          (0, t.jsx)(en, {
                              className: W.profileAvatar,
                              src: r.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              'aria-label': r.username
                          }),
                          (0, t.jsxs)('div', {
                              className: W.profileUserInfo,
                              children: [
                                  (0, t.jsx)(_.Z, {
                                      className: W.profileNameTag,
                                      usernameClass: W.profileNameTagUsername,
                                      name: r.toString()
                                  }),
                                  (0, t.jsx)(ec, { className: W.profilePremiumIcon })
                              ]
                          })
                      ]
                  })
                : (0, t.jsxs)('div', {
                      className: W.profileCardTier1,
                      children: [
                          (0, t.jsx)(en, {
                              className: W.profileAvatarTier1,
                              src: r.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              'aria-label': r.username
                          }),
                          (0, t.jsxs)('div', {
                              className: W.profileUserInfoTier1,
                              children: [
                                  (0, t.jsx)(_.Z, {
                                      className: W.profileNameTag,
                                      usernameClass: W.profileNameTagUsername,
                                      name: r.toString()
                                  }),
                                  (0, t.jsx)(p.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: W.profilePremiumIcon
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
                    (i(), j.Z.open(K.oAB.PROFILE_CUSTOMIZATION), U.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' }));
                },
                renderVisual: () => s
            },
            'profile-item'
        )
    );
}
function em(e) {
    let { premiumType: s } = e,
        r = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        n = (0, g.wC)(null)
            .filter((e) => e.type === I.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, m.Wu)([T.Z], () => T.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        a = eo().emojiStickersVisual,
        o = s === D.p9.TIER_1;
    return (0, t.jsx)(
        el,
        {
            description: o ? B.intl.format(B.t.couiKC, {}) : B.intl.format(B.t['0hUHi4'], {}),
            onLearnMore: () => {
                (window.open(S.Z.getArticleURL(K.BhN.PREMIUM_DETAILS)), U.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' }));
            },
            renderVisual: () =>
                (null != n && n.length > 0) || (!o && null != i && i.length > 0)
                    ? (0, t.jsxs)('div', {
                          className: W.emojiStickersPersonalizedContainer,
                          children: [
                              n
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : w.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: !r && e.animated,
                                                size: 58
                                            })
                                  )
                                  .map((e) =>
                                      null != e
                                          ? (0, t.jsx)('img', {
                                                className: W.personalizedEmoji,
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
                          className: W.nonPersonalizedGraphic,
                          alt: '',
                          src: a
                      })
        },
        'emoji-stickers-item'
    );
}
function ed(e) {
    let { premiumType: s, onClose: r } = e;
    n.useEffect(() => x.Z.wait(() => (0, f.X8)()), []);
    let i = (0, m.e7)([C.Z], () => C.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([Z.Z, M.Z], () => {
            let e = Z.Z.boostSlots,
                s = new Map();
            u()(e)
                .map('premiumGuildSubscription')
                .map('guildId')
                .forEach((e) => {
                    if (null != M.Z.getGuild(e)) {
                        var r;
                        let t = null != (r = s.get(e)) ? r : 0;
                        s.set(e, t + 1);
                    }
                });
            let r = null,
                t = 0;
            return (s.size > 0 && ([r, t] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [M.Z.getGuild(r), t]);
        }),
        c = null != o && l > 0,
        d = eo().boostItemVisual;
    return (0, t.jsx)(
        el,
        {
            description: s === D.p9.TIER_1 ? B.intl.format(B.t['K4Hv6+'], {}) : B.intl.format(B.t.wRxEDQ, {}),
            onLearnMore: () => {
                (r(), j.Z.open(K.oAB.GUILD_BOOSTING), U.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' }));
            },
            renderVisual: () =>
                c
                    ? (0, t.jsx)('div', {
                          className: W.boostCardContainer,
                          children: (0, t.jsxs)('div', {
                              className: W.boostCard,
                              children: [
                                  (0, t.jsx)(N.Z, {
                                      guild: o,
                                      size: N.Z.Sizes.MEDIUM,
                                      animate: !i,
                                      className: W.boostCardIcon
                                  }),
                                  (0, t.jsxs)('div', {
                                      className: W.boostCardInfo,
                                      children: [
                                          (0, t.jsx)(p.Text, {
                                              variant: 'text-md/normal',
                                              className: a()(W.textSingleLineEllipsis, W.boostCardTitle),
                                              children: o.name
                                          }),
                                          (0, t.jsxs)('div', {
                                              className: W.boostCardSubtitle,
                                              children: [
                                                  (0, t.jsx)(P.Z, { className: W.boostCardGem }),
                                                  (0, t.jsx)(p.Text, {
                                                      variant: 'text-xs/normal',
                                                      className: a()(W.textSingleLineEllipsis, W.boostCardCount),
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
                (window.open(S.Z.getArticleURL(K.BhN.STREAM_QUALITY_SETTINGS)), U.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' }));
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
                (window.open(S.Z.getArticleURL(K.BhN.PREMIUM_DETAILS)), U.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' }));
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
                (window.open(S.Z.getArticleURL(K.BhN.LOCALIZED_PRICING)), U.default.track(K.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' }));
            },
            renderVisual: () =>
                (0, t.jsx)('img', {
                    alt: '',
                    src: n
                })
        },
        'grandfathered-prices-item'
    );
};
function ej(e) {
    let { currentUser: s, premiumType: r, onClose: i, isDowngrade: a = !1 } = e,
        o = (0, R.Z)(),
        c = (0, z.U)(),
        u = n.useMemo(() => {
            let e = [];
            switch ((c && (l()(null != o, 'Subscription billing country should not be null'), e.push((0, t.jsx)(ef, { country: o }))), r)) {
                case D.p9.TIER_0:
                    e.push((0, t.jsx)(em, { premiumType: r }), (0, t.jsx)(ex, { premiumType: r }));
                    break;
                case D.p9.TIER_1:
                    a
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
                    a
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
        }, [r, s, i, a, c, o]);
    return (0, t.jsx)('div', {
        className: W.whatYouLoseItemContainer,
        children: u
    });
}
let eh = function (e) {
    let { premiumType: s, titleText: r, subtitleText: i, footer: a, onClose: o, onDiscountClaim: c, onContinue: u, analyticsLocations: d, isLoading: x = !1, churnUserDiscountOffer: f = null, isDowngrade: j = !1, subtitleIcon: h, subtitleClassName: C } = e,
        g = (0, m.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return (l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e);
        });
    n.useEffect(() => {
        (0, E.Z)(g.id, g.getAvatarURL(null, 80));
    }, [g]);
    let I = null != f && !x;
    return (n.useEffect(() => {
        I &&
            U.default.track(K.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == f ? void 0 : f.discount_id
            });
    }, [I, d, f]),
    x)
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(V.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, t.jsx)(p.hzk, {
                      className: W.body,
                      children: (0, t.jsx)(p.$jN, { className: W.spinner })
                  })
              ]
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(V.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, t.jsxs)(p.hzk, {
                      className: W.body,
                      children: [
                          (0, t.jsx)(p.X6q, {
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              className: W.title,
                              children: r
                          }),
                          (0, t.jsxs)('div', {
                              className: C,
                              children: [
                                  h,
                                  (0, t.jsx)(p.Text, {
                                      variant: 'text-md/normal',
                                      children: i
                                  })
                              ]
                          }),
                          (0, t.jsx)(ej, {
                              currentUser: g,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: j
                          })
                      ]
                  }),
                  !I && (0, t.jsx)(p.mzw, { children: a }),
                  I &&
                      (0, t.jsx)(F.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
