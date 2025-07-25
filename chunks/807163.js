(r.d(s, {
    Z: () => ej,
    g: () => ef
}),
    r(953529),
    r(388685),
    r(539854));
var t = r(255367),
    n = r(73800),
    a = r(120356),
    i = r.n(a),
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
    h = r(230711),
    C = r(410030),
    g = r(607070),
    I = r(543241),
    N = r(906411),
    T = r(565138),
    v = r(822179),
    b = r(419922),
    E = r(687158),
    _ = r(484459),
    y = r(813549),
    L = r(867176),
    O = r(502762),
    M = r(652853),
    A = r(430824),
    P = r(594174),
    Z = r(314884),
    w = r(626135),
    R = r(768581),
    S = r(63063),
    U = r(998502),
    k = r(789155),
    F = r(798769),
    z = r(474936),
    V = r(981631),
    D = r(388032),
    K = r(18908),
    B = r(834982),
    G = r(912450),
    W = r(703548),
    Y = r(869333),
    q = r(652528),
    H = r(874692),
    Q = r(391458),
    X = r(70967),
    $ = r(674264),
    J = r(360088),
    ee = r(304880);
function es() {
    return (es =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var r = arguments[s];
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
            }
            return e;
        }).apply(this, arguments);
}
let er = U.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    et = {
        boostItemVisual: q,
        emojiStickersVisual: H,
        screenShareItemVisual: J,
        uploadsMessagesItemVisual: Q,
        uploadsMessagesItemVisualV2: X,
        PL: $,
        TR: ee
    },
    en = {
        boostItemVisual: B,
        emojiStickersVisual: G,
        screenShareItemVisual: J,
        uploadsMessagesItemVisual: W,
        uploadsMessagesItemVisualV2: Y,
        PL: $,
        TR: ee
    };
function ea() {
    let e = (0, C.ZP)();
    return (0, d.wj)(e) ? en : et;
}
function ei(e) {
    let { description: s, onLearnMore: r, renderVisual: n } = e,
        a = ex();
    return (0, t.jsxs)('div', {
        className: i()(K.whatYouLoseItem, { [K.premiumRebrand]: a }),
        children: [
            (0, t.jsxs)('div', {
                className: i()(K.whatYouLoseItemLeftColumn, { [K.premiumRebrand]: a }),
                children: [
                    (0, t.jsx)(x.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, t.jsx)(p.zx, {
                        look: p.zx.Looks.LINK,
                        color: p.zx.Colors.LINK,
                        size: p.zx.Sizes.NONE,
                        className: K.whatYouLoseItemLearnMore,
                        onClick: r,
                        children: D.intl.string(D.t.hvVgAQ)
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: i()(K.whatYouLoseItemRightColumn, { [K.premiumRebrand]: a }),
                children: n()
            })
        ]
    });
}
function eo(e) {
    var s,
        r,
        n = es(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
    let { theme: a } = (0, M.z)(),
        i = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, a).hex();
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
        (r = r = { color: i }),
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
function el(e) {
    let s,
        { currentUser: r, premiumType: n, onClose: a } = e,
        i = (0, E.ZP)(r.id),
        o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        l = n === z.p9.TIER_1;
    return (
        (s =
            (null == i ? void 0 : i.premiumType) === z.p9.TIER_2
                ? (0, t.jsxs)(O.Z, {
                      user: r,
                      displayProfile: i,
                      forceShowPremium: !0,
                      themeType: null,
                      className: K.profileCard,
                      children: [
                          (0, t.jsx)(L.b, {
                              user: r,
                              displayProfile: i,
                              avatarSize: x.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4
                          }),
                          (0, t.jsx)(er, {
                              className: K.profileAvatar,
                              src: r.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              'aria-label': r.username
                          }),
                          (0, t.jsxs)('div', {
                              className: K.profileUserInfo,
                              children: [
                                  (0, t.jsx)(y.Z, {
                                      className: K.profileNameTag,
                                      usernameClass: K.profileNameTagUsername,
                                      name: r.toString()
                                  }),
                                  (0, t.jsx)(eo, { className: K.profilePremiumIcon })
                              ]
                          })
                      ]
                  })
                : (0, t.jsxs)('div', {
                      className: K.profileCardTier1,
                      children: [
                          (0, t.jsx)(er, {
                              className: K.profileAvatarTier1,
                              src: r.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                              size: x.EFr.SIZE_56,
                              'aria-label': r.username
                          }),
                          (0, t.jsxs)('div', {
                              className: K.profileUserInfoTier1,
                              children: [
                                  (0, t.jsx)(y.Z, {
                                      className: K.profileNameTag,
                                      usernameClass: K.profileNameTagUsername,
                                      name: r.toString()
                                  }),
                                  (0, t.jsx)(x.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: K.profilePremiumIcon
                                  })
                              ]
                          })
                      ]
                  })),
        (0, t.jsx)(
            ei,
            {
                description: l ? D.intl.format(D.t.xCaYwM, {}) : D.intl.format(D.t['gpqr+v'], {}),
                onLearnMore: () => {
                    (a(), h.Z.open(V.oAB.PROFILE_CUSTOMIZATION), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' }));
                },
                renderVisual: () => s
            },
            'profile-item'
        )
    );
}
function ec(e) {
    let { premiumType: s } = e,
        r = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        n = (0, I.wC)(null)
            .filter((e) => e.type === N.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, m.Wu)([v.Z], () => v.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        i = ea().emojiStickersVisual,
        o = s === z.p9.TIER_1;
    return (0, t.jsx)(
        ei,
        {
            description: o ? D.intl.format(D.t.couiKC, {}) : D.intl.format(D.t['0hUHi4'], {}),
            onLearnMore: () => {
                (window.open(S.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' }));
            },
            renderVisual: () =>
                (null != n && n.length > 0) || (!o && null != a && a.length > 0)
                    ? (0, t.jsxs)('div', {
                          className: K.emojiStickersPersonalizedContainer,
                          children: [
                              n
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : R.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: !r && e.animated,
                                                size: 58
                                            })
                                  )
                                  .map((e) =>
                                      null != e
                                          ? (0, t.jsx)('img', {
                                                className: K.personalizedEmoji,
                                                alt: '',
                                                src: e
                                            })
                                          : null
                                  ),
                              o
                                  ? null
                                  : a.map((e) =>
                                        (0, t.jsx)(
                                            b.Z,
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
                          className: K.nonPersonalizedGraphic,
                          alt: '',
                          src: i
                      })
        },
        'emoji-stickers-item'
    );
}
function eu(e) {
    let { premiumType: s, onClose: r } = e;
    n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
    let a = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([Z.Z, A.Z], () => {
            let e = Z.Z.boostSlots,
                s = new Map();
            u()(e)
                .map('premiumGuildSubscription')
                .map('guildId')
                .forEach((e) => {
                    if (null != A.Z.getGuild(e)) {
                        var r;
                        let t = null != (r = s.get(e)) ? r : 0;
                        s.set(e, t + 1);
                    }
                });
            let r = null,
                t = 0;
            return (s.size > 0 && ([r, t] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [A.Z.getGuild(r), t]);
        }),
        c = null != o && l > 0,
        d = ea().boostItemVisual;
    return (0, t.jsx)(
        ei,
        {
            description: s === z.p9.TIER_1 ? D.intl.format(D.t['K4Hv6+'], {}) : D.intl.format(D.t.wRxEDQ, {}),
            onLearnMore: () => {
                (r(), h.Z.open(V.oAB.GUILD_BOOSTING), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' }));
            },
            renderVisual: () =>
                c
                    ? (0, t.jsx)('div', {
                          className: K.boostCardContainer,
                          children: (0, t.jsxs)('div', {
                              className: K.boostCard,
                              children: [
                                  (0, t.jsx)(T.Z, {
                                      guild: o,
                                      size: T.Z.Sizes.MEDIUM,
                                      animate: !a,
                                      className: K.boostCardIcon
                                  }),
                                  (0, t.jsxs)('div', {
                                      className: K.boostCardInfo,
                                      children: [
                                          (0, t.jsx)(x.Text, {
                                              variant: 'text-md/normal',
                                              className: i()(K.textSingleLineEllipsis, K.boostCardTitle),
                                              children: o.name
                                          }),
                                          (0, t.jsxs)('div', {
                                              className: K.boostCardSubtitle,
                                              children: [
                                                  (0, t.jsx)(x.$Eu, {
                                                      color: x.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                      className: K.boostCardGem
                                                  }),
                                                  (0, t.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      className: i()(K.textSingleLineEllipsis, K.boostCardCount),
                                                      children: D.intl.format(D.t['Ou/g/P'], { boostCount: l })
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
let em = () => {
    let e = ea().screenShareItemVisual;
    return (0, t.jsx)(
        ei,
        {
            description: D.intl.format(D.t.wK04T0, {}),
            onLearnMore: () => {
                (window.open(S.Z.getArticleURL(V.BhN.STREAM_QUALITY_SETTINGS)), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' }));
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
function ed(e) {
    let { premiumType: s } = e,
        r = ea().uploadsMessagesItemVisual;
    return (0, t.jsx)(
        ei,
        {
            description: s === z.p9.TIER_2 ? D.intl.format(D.t.GsOFRE, {}) : D.intl.format(D.t.wFWO6O, {}),
            onLearnMore: () => {
                (window.open(S.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), w.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' }));
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
let ep = n.createContext({ isPremiumRebrand: !1 }),
    ex = () => n.useContext(ep).isPremiumRebrand;
function ef(e) {
    let { currentUser: s, premiumType: r, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        c = n.useMemo(() => {
            let e = [];
            switch (r) {
                case z.p9.TIER_0:
                    e.push((0, t.jsx)(ec, { premiumType: r }), (0, t.jsx)(ed, { premiumType: r }));
                    break;
                case z.p9.TIER_1:
                    o
                        ? e.push(
                              (0, t.jsx)(el, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(em, {}),
                              (0, t.jsx)(eu, {
                                  premiumType: r,
                                  onClose: a
                              })
                          )
                        : e.push(
                              (0, t.jsx)(el, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ec, { premiumType: r }),
                              (0, t.jsx)(em, {}),
                              (0, t.jsx)(ed, { premiumType: r }),
                              (0, t.jsx)(eu, {
                                  premiumType: r,
                                  onClose: a
                              })
                          );
                    break;
                case z.p9.TIER_2:
                    o
                        ? e.push(
                              (0, t.jsx)(el, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(eu, {
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(em, {})
                          )
                        : e.push(
                              (0, t.jsx)(el, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ec, { premiumType: r }),
                              (0, t.jsx)(eu, {
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(em, {}),
                              (0, t.jsx)(ed, { premiumType: r })
                          );
            }
            return e;
        }, [r, s, a, o]);
    return (0, t.jsx)(ep.Provider, {
        value: { isPremiumRebrand: l },
        children: (0, t.jsx)('div', {
            className: i()(K.whatYouLoseItemContainer, {
                [K.premiumRebrand]: l,
                [K.noMargin]: l && c.length <= 2
            }),
            children: c
        })
    });
}
let ej = function (e) {
    let { premiumType: s, titleText: r, subtitleText: a, footer: i, onClose: o, onDiscountClaim: c, onContinue: u, analyticsLocations: d, isLoading: p = !1, churnUserDiscountOffer: f = null, isDowngrade: j = !1, subtitleIcon: h, subtitleClassName: C } = e,
        g = (0, m.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return (l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e);
        });
    n.useEffect(() => {
        (0, _.Z)(g.id, g.getAvatarURL(null, 80));
    }, [g]);
    let I = null != f && !p;
    return (n.useEffect(() => {
        I &&
            w.default.track(V.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == f ? void 0 : f.discount_id
            });
    }, [I, d, f]),
    p)
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(F.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, t.jsx)(x.hzk, {
                      className: K.body,
                      children: (0, t.jsx)(x.$jN, { className: K.spinner })
                  })
              ]
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(F.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, t.jsxs)(x.hzk, {
                      className: K.body,
                      children: [
                          (0, t.jsx)(x.X6q, {
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              className: K.title,
                              children: r
                          }),
                          (0, t.jsxs)('div', {
                              className: C,
                              children: [
                                  h,
                                  (0, t.jsx)(x.Text, {
                                      variant: 'text-md/normal',
                                      children: a
                                  })
                              ]
                          }),
                          (0, t.jsx)(ef, {
                              currentUser: g,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: j
                          })
                      ]
                  }),
                  !I && (0, t.jsx)(x.mzw, { children: i }),
                  I &&
                      (0, t.jsx)(k.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
