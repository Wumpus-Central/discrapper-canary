t.d(s, { Z: () => eg }), t(953529), t(314940), t(388685), t(539854);
var r = t(255367),
    n = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(392711),
    u = t.n(c),
    m = t(278074),
    d = t(442837),
    p = t(780384),
    x = t(481060),
    f = t(570140),
    j = t(179360),
    h = t(230711),
    C = t(410030),
    I = t(607070),
    g = t(44315),
    N = t(118012),
    T = t(543241),
    v = t(906411),
    E = t(565138),
    b = t(822179),
    _ = t(419922),
    L = t(687158),
    y = t(484459),
    A = t(813549),
    M = t(867176),
    Z = t(502762),
    O = t(652853),
    P = t(430824),
    U = t(594174),
    w = t(314884),
    S = t(709586),
    k = t(626135),
    R = t(768581),
    z = t(63063),
    F = t(998502),
    V = t(53900),
    D = t(789155),
    K = t(55610),
    B = t(798769),
    W = t(474936),
    G = t(981631),
    Y = t(388032),
    q = t(18908),
    H = t(834982),
    Q = t(912450),
    X = t(703548),
    $ = t(869333),
    J = t(652528),
    ee = t(874692),
    es = t(391458),
    et = t(70967),
    er = t(674264),
    en = t(360088),
    ei = t(304880);
function ea() {
    return (ea =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
let eo = F.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    el = {
        boostItemVisual: J,
        emojiStickersVisual: ee,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: es,
        uploadsMessagesItemVisualV2: et,
        PL: er,
        TR: ei
    },
    ec = {
        boostItemVisual: H,
        emojiStickersVisual: Q,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: X,
        uploadsMessagesItemVisualV2: $,
        PL: er,
        TR: ei
    };
function eu() {
    let e = (0, C.ZP)();
    return (0, p.wj)(e) ? ec : el;
}
function em(e) {
    let { description: s, onLearnMore: t, renderVisual: n } = e;
    return (0, r.jsxs)('div', {
        className: q.whatYouLoseItem,
        children: [
            (0, r.jsxs)('div', {
                className: q.whatYouLoseItemLeftColumn,
                children: [
                    (0, r.jsx)(x.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, r.jsx)(x.zxk, {
                        look: x.zxk.Looks.LINK,
                        color: x.zxk.Colors.LINK,
                        size: x.zxk.Sizes.NONE,
                        className: q.whatYouLoseItemLearnMore,
                        onClick: t,
                        children: Y.intl.string(Y.t.hvVgAQ)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: q.whatYouLoseItemRightColumn,
                children: n()
            })
        ]
    });
}
function ed(e) {
    var s,
        t,
        n = ea(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
    let { theme: i } = (0, O.z)(),
        a = (0, g.O0)(G.tPk.INTERACTIVE_ACTIVE, i);
    return (0, r.jsx)(
        x.SrA,
        ((s = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = null != arguments[s] ? arguments[s] : {},
                    r = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    r.forEach(function (s) {
                        var r;
                        (r = t[s]),
                            s in e
                                ? Object.defineProperty(e, s, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[s] = r);
                    });
            }
            return e;
        })({ size: 'md' }, n)),
        (t = t = { color: a.hex }),
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
        s)
    );
}
function ep(e) {
    let { currentUser: s, premiumType: t, onClose: n } = e,
        i = (0, L.ZP)(s.id),
        a = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        o = t === W.p9.TIER_1,
        l = (0, m.EQ)(null == i ? void 0 : i.premiumType)
            .with(W.p9.TIER_2, () =>
                (0, r.jsxs)(Z.Z, {
                    user: s,
                    displayProfile: i,
                    forceShowPremium: !0,
                    themeType: null,
                    className: q.profileCard,
                    children: [
                        (0, r.jsx)(M.b, {
                            user: s,
                            displayProfile: i,
                            avatarSize: x.EFr.SIZE_56,
                            avatarOffsetX: 8,
                            avatarOffsetY: 2,
                            bannerWidth: 172,
                            bannerHeight: 60,
                            themePadding: 4
                        }),
                        (0, r.jsx)(eo, {
                            className: q.profileAvatar,
                            src: s.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !a),
                            size: x.EFr.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, r.jsxs)('div', {
                            className: q.profileUserInfo,
                            children: [
                                (0, r.jsx)(A.Z, {
                                    className: q.profileNameTag,
                                    usernameClass: q.profileNameTagUsername,
                                    name: s.toString()
                                }),
                                (0, r.jsx)(ed, { className: q.profilePremiumIcon })
                            ]
                        })
                    ]
                })
            )
            .otherwise(() =>
                (0, r.jsxs)('div', {
                    className: q.profileCardTier1,
                    children: [
                        (0, r.jsx)(eo, {
                            className: q.profileAvatarTier1,
                            src: s.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !a),
                            size: x.EFr.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, r.jsxs)('div', {
                            className: q.profileUserInfoTier1,
                            children: [
                                (0, r.jsx)(A.Z, {
                                    className: q.profileNameTag,
                                    usernameClass: q.profileNameTagUsername,
                                    name: s.toString()
                                }),
                                (0, r.jsx)(x.SrA, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: q.profilePremiumIcon
                                })
                            ]
                        })
                    ]
                })
            );
    return (0, r.jsx)(
        em,
        {
            description: o ? Y.intl.format(Y.t.xCaYwM, {}) : Y.intl.format(Y.t['gpqr+v'], {}),
            onLearnMore: () => {
                n(), h.Z.open(G.oAB.PROFILE_CUSTOMIZATION), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' });
            },
            renderVisual: () => l
        },
        'profile-item'
    );
}
function ex(e) {
    let { premiumType: s } = e,
        t = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        n = (0, T.wC)(null)
            .filter((e) => e.type === v.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, d.Wu)([b.Z], () => b.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        a = eu().emojiStickersVisual,
        o = s === W.p9.TIER_1;
    return (0, r.jsx)(
        em,
        {
            description: o ? Y.intl.format(Y.t.couiKC, {}) : Y.intl.format(Y.t['0hUHi4'], {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' });
            },
            renderVisual: () =>
                (null != n && n.length > 0) || (!o && null != i && i.length > 0)
                    ? (0, r.jsxs)('div', {
                          className: q.emojiStickersPersonalizedContainer,
                          children: [
                              n
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : R.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: !t && e.animated,
                                                size: 58
                                            })
                                  )
                                  .map((e) =>
                                      null != e
                                          ? (0, r.jsx)('img', {
                                                className: q.personalizedEmoji,
                                                alt: '',
                                                src: e
                                            })
                                          : null
                                  ),
                              o
                                  ? null
                                  : i.map((e) =>
                                        (0, r.jsx)(
                                            _.Z,
                                            {
                                                disableAnimation: t,
                                                sticker: e,
                                                size: 58,
                                                withLoadingIndicator: !1
                                            },
                                            e.id
                                        )
                                    )
                          ]
                      })
                    : (0, r.jsx)('img', {
                          className: q.nonPersonalizedGraphic,
                          alt: '',
                          src: a
                      })
        },
        'emoji-stickers-item'
    );
}
function ef(e) {
    let { premiumType: s, onClose: t } = e;
    n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
    let i = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        [o, l] = (0, d.Wu)([w.Z, P.Z], () => {
            let e = w.Z.boostSlots,
                s = new Map();
            u()(e)
                .map('premiumGuildSubscription')
                .map('guildId')
                .forEach((e) => {
                    if (null != P.Z.getGuild(e)) {
                        var t;
                        let r = null != (t = s.get(e)) ? t : 0;
                        s.set(e, r + 1);
                    }
                });
            let t = null,
                r = 0;
            return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [P.Z.getGuild(t), r];
        }),
        c = null != o && l > 0,
        m = eu().boostItemVisual;
    return (0, r.jsx)(
        em,
        {
            description: s === W.p9.TIER_1 ? Y.intl.format(Y.t['K4Hv6+'], {}) : Y.intl.format(Y.t.wRxEDQ, {}),
            onLearnMore: () => {
                t(), h.Z.open(G.oAB.GUILD_BOOSTING), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' });
            },
            renderVisual: () =>
                c
                    ? (0, r.jsx)('div', {
                          className: q.boostCardContainer,
                          children: (0, r.jsxs)('div', {
                              className: q.boostCard,
                              children: [
                                  (0, r.jsx)(E.Z, {
                                      guild: o,
                                      size: E.Z.Sizes.MEDIUM,
                                      animate: !i,
                                      className: q.boostCardIcon
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: q.boostCardInfo,
                                      children: [
                                          (0, r.jsx)(x.Text, {
                                              variant: 'text-md/normal',
                                              className: a()(q.textSingleLineEllipsis, q.boostCardTitle),
                                              children: o.name
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: q.boostCardSubtitle,
                                              children: [
                                                  (0, r.jsx)(S.Z, { className: q.boostCardGem }),
                                                  (0, r.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      className: a()(q.textSingleLineEllipsis, q.boostCardCount),
                                                      children: Y.intl.format(Y.t['Ou/g/P'], { boostCount: l })
                                                  })
                                              ]
                                          })
                                      ]
                                  })
                              ]
                          })
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: m
                      })
        },
        'boost-item'
    );
}
let ej = () => {
    let e = eu().screenShareItemVisual;
    return (0, r.jsx)(
        em,
        {
            description: Y.intl.format(Y.t.wK04T0, {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.STREAM_QUALITY_SETTINGS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' });
            },
            renderVisual: () =>
                (0, r.jsx)('img', {
                    alt: '',
                    src: e
                })
        },
        'screen-share-item'
    );
};
function eh(e) {
    let { premiumType: s } = e,
        t = eu().uploadsMessagesItemVisual;
    return (0, r.jsx)(
        em,
        {
            description: s === W.p9.TIER_2 ? Y.intl.format(Y.t.GsOFRE, {}) : Y.intl.format(Y.t.wFWO6O, {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' });
            },
            renderVisual: () =>
                (0, r.jsx)('img', {
                    alt: '',
                    src: t
                })
        },
        'uploads-item'
    );
}
let eC = (e) => {
    let { country: s } = e,
        t = eu(),
        n = 'PL' === s ? t.PL : t.TR;
    return (0, r.jsx)(
        em,
        {
            description: Y.intl.format('PL' === s ? Y.t['0MAev7'] : Y.t.p2CqUl, {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.LOCALIZED_PRICING)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' });
            },
            renderVisual: () =>
                (0, r.jsx)('img', {
                    alt: '',
                    src: n
                })
        },
        'grandfathered-prices-item'
    );
};
function eI(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: a = !1 } = e,
        o = (0, V.Z)(),
        c = (0, K.U)(),
        u = n.useMemo(() => {
            let e = [];
            switch ((c && (l()(null != o, 'Subscription billing country should not be null'), e.push((0, r.jsx)(eC, { country: o }))), t)) {
                case W.p9.TIER_0:
                    e.push((0, r.jsx)(ex, { premiumType: t }), (0, r.jsx)(eh, { premiumType: t }));
                    break;
                case W.p9.TIER_1:
                    a
                        ? e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ej, {}),
                              (0, r.jsx)(ef, {
                                  premiumType: t,
                                  onClose: i
                              })
                          )
                        : e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ex, { premiumType: t }),
                              (0, r.jsx)(ej, {}),
                              (0, r.jsx)(eh, { premiumType: t }),
                              (0, r.jsx)(ef, {
                                  premiumType: t,
                                  onClose: i
                              })
                          );
                    break;
                case W.p9.TIER_2:
                    a
                        ? e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ef, {
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ej, {})
                          )
                        : e.push(
                              (0, r.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ex, { premiumType: t }),
                              (0, r.jsx)(ef, {
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ej, {}),
                              (0, r.jsx)(eh, { premiumType: t })
                          );
            }
            return e;
        }, [t, s, i, a, c, o]);
    return (0, r.jsx)('div', {
        className: q.whatYouLoseItemContainer,
        children: u
    });
}
let eg = function (e) {
    let { premiumType: s, titleText: t, subtitleText: i, footer: a, onClose: o, onDiscountClaim: c, onContinue: u, analyticsLocations: m, isLoading: p = !1, churnUserDiscountOffer: f = null, isDowngrade: j = !1, subtitleIcon: h, subtitleClassName: C } = e,
        I = (0, d.e7)([U.default], () => {
            let e = U.default.getCurrentUser();
            return l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
        });
    n.useEffect(() => {
        (0, y.Z)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let g = null != f && !p;
    return (n.useEffect(() => {
        g &&
            k.default.track(G.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: m,
                discount_id: null == f ? void 0 : f.discount_id
            });
    }, [g, m, f]),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, r.jsx)(x.hzk, {
                      className: q.body,
                      children: (0, r.jsx)(x.$jN, { className: q.spinner })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, r.jsxs)(x.hzk, {
                      className: q.body,
                      children: [
                          (0, r.jsx)(N.Z, {
                              size: N.Z.Sizes.SIZE_24,
                              className: q.title,
                              children: t
                          }),
                          (0, r.jsxs)('div', {
                              className: C,
                              children: [
                                  h,
                                  (0, r.jsx)(x.Text, {
                                      variant: 'text-md/normal',
                                      children: i
                                  })
                              ]
                          }),
                          (0, r.jsx)(eI, {
                              currentUser: I,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: j
                          })
                      ]
                  }),
                  !g && (0, r.jsx)(x.mzw, { children: a }),
                  g &&
                      (0, r.jsx)(D.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
