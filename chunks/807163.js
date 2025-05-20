t.d(s, { Z: () => eI }), t(953529), t(388685), t(539854);
var r = t(255367),
    n = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(392711),
    u = t.n(c),
    m = t(442837),
    d = t(780384),
    p = t(481060),
    x = t(570140),
    f = t(179360),
    j = t(230711),
    C = t(410030),
    h = t(607070),
    I = t(44315),
    g = t(118012),
    N = t(543241),
    T = t(906411),
    v = t(565138),
    E = t(822179),
    b = t(419922),
    _ = t(687158),
    L = t(484459),
    y = t(813549),
    A = t(867176),
    M = t(502762),
    Z = t(652853),
    O = t(430824),
    P = t(594174),
    U = t(314884),
    S = t(709586),
    w = t(626135),
    k = t(768581),
    R = t(63063),
    z = t(998502),
    F = t(53900),
    V = t(789155),
    D = t(55610),
    K = t(798769),
    B = t(474936),
    W = t(981631),
    G = t(388032),
    Y = t(18908),
    q = t(834982),
    H = t(912450),
    Q = t(703548),
    X = t(869333),
    $ = t(652528),
    J = t(874692),
    ee = t(391458),
    es = t(70967),
    et = t(674264),
    er = t(360088),
    en = t(304880);
function ei() {
    return (ei =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var t = arguments[s];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
        }).apply(this, arguments);
}
let ea = z.ZP.getEnableHardwareAcceleration() ? p.Xo$ : p.qEK,
    eo = {
        boostItemVisual: $,
        emojiStickersVisual: J,
        screenShareItemVisual: er,
        uploadsMessagesItemVisual: ee,
        uploadsMessagesItemVisualV2: es,
        PL: et,
        TR: en
    },
    el = {
        boostItemVisual: q,
        emojiStickersVisual: H,
        screenShareItemVisual: er,
        uploadsMessagesItemVisual: Q,
        uploadsMessagesItemVisualV2: X,
        PL: et,
        TR: en
    };
function ec() {
    let e = (0, C.ZP)();
    return (0, d.wj)(e) ? el : eo;
}
function eu(e) {
    let { description: s, onLearnMore: t, renderVisual: n } = e;
    return (0, r.jsxs)('div', {
        className: Y.whatYouLoseItem,
        children: [
            (0, r.jsxs)('div', {
                className: Y.whatYouLoseItemLeftColumn,
                children: [
                    (0, r.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, r.jsx)(p.zxk, {
                        look: p.zxk.Looks.LINK,
                        color: p.zxk.Colors.LINK,
                        size: p.zxk.Sizes.NONE,
                        className: Y.whatYouLoseItemLearnMore,
                        onClick: t,
                        children: G.intl.string(G.t.hvVgAQ)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: Y.whatYouLoseItemRightColumn,
                children: n()
            })
        ]
    });
}
function em(e) {
    var s,
        t,
        n = ei(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
    let { theme: i } = (0, Z.z)(),
        a = (0, I.O0)(W.tPk.INTERACTIVE_ACTIVE, i);
    return (0, r.jsx)(
        p.SrA,
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
function ed(e) {
    let s,
        { currentUser: t, premiumType: n, onClose: i } = e,
        a = (0, _.ZP)(t.id),
        o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion),
        l = n === B.p9.TIER_1;
    return (
        (s =
            (null == a ? void 0 : a.premiumType) === B.p9.TIER_2
                ? (0, r.jsxs)(M.Z, {
                      user: t,
                      displayProfile: a,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Y.profileCard,
                      children: [
                          (0, r.jsx)(A.b, {
                              user: t,
                              displayProfile: a,
                              avatarSize: p.EFr.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4
                          }),
                          (0, r.jsx)(ea, {
                              className: Y.profileAvatar,
                              src: t.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              'aria-label': t.username
                          }),
                          (0, r.jsxs)('div', {
                              className: Y.profileUserInfo,
                              children: [
                                  (0, r.jsx)(y.Z, {
                                      className: Y.profileNameTag,
                                      usernameClass: Y.profileNameTagUsername,
                                      name: t.toString()
                                  }),
                                  (0, r.jsx)(em, { className: Y.profilePremiumIcon })
                              ]
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: Y.profileCardTier1,
                      children: [
                          (0, r.jsx)(ea, {
                              className: Y.profileAvatarTier1,
                              src: t.getAvatarURL(void 0, (0, p.pxk)(p.EFr.SIZE_56), !o),
                              size: p.EFr.SIZE_56,
                              'aria-label': t.username
                          }),
                          (0, r.jsxs)('div', {
                              className: Y.profileUserInfoTier1,
                              children: [
                                  (0, r.jsx)(y.Z, {
                                      className: Y.profileNameTag,
                                      usernameClass: Y.profileNameTagUsername,
                                      name: t.toString()
                                  }),
                                  (0, r.jsx)(p.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: Y.profilePremiumIcon
                                  })
                              ]
                          })
                      ]
                  })),
        (0, r.jsx)(
            eu,
            {
                description: l ? G.intl.format(G.t.xCaYwM, {}) : G.intl.format(G.t['gpqr+v'], {}),
                onLearnMore: () => {
                    i(), j.Z.open(W.oAB.PROFILE_CUSTOMIZATION), w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' });
                },
                renderVisual: () => s
            },
            'profile-item'
        )
    );
}
function ep(e) {
    let { premiumType: s } = e,
        t = (0, m.e7)([h.Z], () => h.Z.useReducedMotion),
        n = (0, N.wC)(null)
            .filter((e) => e.type === T.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        i = (0, m.Wu)([E.Z], () => E.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        a = ec().emojiStickersVisual,
        o = s === B.p9.TIER_1;
    return (0, r.jsx)(
        eu,
        {
            description: o ? G.intl.format(G.t.couiKC, {}) : G.intl.format(G.t['0hUHi4'], {}),
            onLearnMore: () => {
                window.open(R.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)), w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' });
            },
            renderVisual: () =>
                (null != n && n.length > 0) || (!o && null != i && i.length > 0)
                    ? (0, r.jsxs)('div', {
                          className: Y.emojiStickersPersonalizedContainer,
                          children: [
                              n
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : k.ZP.getEmojiURL({
                                                id: e.id,
                                                animated: !t && e.animated,
                                                size: 58
                                            })
                                  )
                                  .map((e) =>
                                      null != e
                                          ? (0, r.jsx)('img', {
                                                className: Y.personalizedEmoji,
                                                alt: '',
                                                src: e
                                            })
                                          : null
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
                                                withLoadingIndicator: !1
                                            },
                                            e.id
                                        )
                                    )
                          ]
                      })
                    : (0, r.jsx)('img', {
                          className: Y.nonPersonalizedGraphic,
                          alt: '',
                          src: a
                      })
        },
        'emoji-stickers-item'
    );
}
function ex(e) {
    let { premiumType: s, onClose: t } = e;
    n.useEffect(() => x.Z.wait(() => (0, f.X8)()), []);
    let i = (0, m.e7)([h.Z], () => h.Z.useReducedMotion),
        [o, l] = (0, m.Wu)([U.Z, O.Z], () => {
            let e = U.Z.boostSlots,
                s = new Map();
            u()(e)
                .map('premiumGuildSubscription')
                .map('guildId')
                .forEach((e) => {
                    if (null != O.Z.getGuild(e)) {
                        var t;
                        let r = null != (t = s.get(e)) ? t : 0;
                        s.set(e, r + 1);
                    }
                });
            let t = null,
                r = 0;
            return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [O.Z.getGuild(t), r];
        }),
        c = null != o && l > 0,
        d = ec().boostItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: s === B.p9.TIER_1 ? G.intl.format(G.t['K4Hv6+'], {}) : G.intl.format(G.t.wRxEDQ, {}),
            onLearnMore: () => {
                t(), j.Z.open(W.oAB.GUILD_BOOSTING), w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' });
            },
            renderVisual: () =>
                c
                    ? (0, r.jsx)('div', {
                          className: Y.boostCardContainer,
                          children: (0, r.jsxs)('div', {
                              className: Y.boostCard,
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      guild: o,
                                      size: v.Z.Sizes.MEDIUM,
                                      animate: !i,
                                      className: Y.boostCardIcon
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: Y.boostCardInfo,
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              variant: 'text-md/normal',
                                              className: a()(Y.textSingleLineEllipsis, Y.boostCardTitle),
                                              children: o.name
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: Y.boostCardSubtitle,
                                              children: [
                                                  (0, r.jsx)(S.Z, { className: Y.boostCardGem }),
                                                  (0, r.jsx)(p.Text, {
                                                      variant: 'text-xs/normal',
                                                      className: a()(Y.textSingleLineEllipsis, Y.boostCardCount),
                                                      children: G.intl.format(G.t['Ou/g/P'], { boostCount: l })
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
                          src: d
                      })
        },
        'boost-item'
    );
}
let ef = () => {
    let e = ec().screenShareItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: G.intl.format(G.t.wK04T0, {}),
            onLearnMore: () => {
                window.open(R.Z.getArticleURL(W.BhN.STREAM_QUALITY_SETTINGS)), w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' });
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
function ej(e) {
    let { premiumType: s } = e,
        t = ec().uploadsMessagesItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: s === B.p9.TIER_2 ? G.intl.format(G.t.GsOFRE, {}) : G.intl.format(G.t.wFWO6O, {}),
            onLearnMore: () => {
                window.open(R.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)), w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' });
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
        t = ec(),
        n = 'PL' === s ? t.PL : t.TR;
    return (0, r.jsx)(
        eu,
        {
            description: G.intl.format('PL' === s ? G.t['0MAev7'] : G.t.p2CqUl, {}),
            onLearnMore: () => {
                window.open(R.Z.getArticleURL(W.BhN.LOCALIZED_PRICING)), w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' });
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
function eh(e) {
    let { currentUser: s, premiumType: t, onClose: i, isDowngrade: a = !1 } = e,
        o = (0, F.Z)(),
        c = (0, D.U)(),
        u = n.useMemo(() => {
            let e = [];
            switch ((c && (l()(null != o, 'Subscription billing country should not be null'), e.push((0, r.jsx)(eC, { country: o }))), t)) {
                case B.p9.TIER_0:
                    e.push((0, r.jsx)(ep, { premiumType: t }), (0, r.jsx)(ej, { premiumType: t }));
                    break;
                case B.p9.TIER_1:
                    a
                        ? e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ef, {}),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: i
                              })
                          )
                        : e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ep, { premiumType: t }),
                              (0, r.jsx)(ef, {}),
                              (0, r.jsx)(ej, { premiumType: t }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: i
                              })
                          );
                    break;
                case B.p9.TIER_2:
                    a
                        ? e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ef, {})
                          )
                        : e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ep, { premiumType: t }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: i
                              }),
                              (0, r.jsx)(ef, {}),
                              (0, r.jsx)(ej, { premiumType: t })
                          );
            }
            return e;
        }, [t, s, i, a, c, o]);
    return (0, r.jsx)('div', {
        className: Y.whatYouLoseItemContainer,
        children: u
    });
}
let eI = function (e) {
    let { premiumType: s, titleText: t, subtitleText: i, footer: a, onClose: o, onDiscountClaim: c, onContinue: u, analyticsLocations: d, isLoading: x = !1, churnUserDiscountOffer: f = null, isDowngrade: j = !1, subtitleIcon: C, subtitleClassName: h } = e,
        I = (0, m.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
        });
    n.useEffect(() => {
        (0, L.Z)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let N = null != f && !x;
    return (n.useEffect(() => {
        N &&
            w.default.track(W.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: d,
                discount_id: null == f ? void 0 : f.discount_id
            });
    }, [N, d, f]),
    x)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, r.jsx)(p.hzk, {
                      className: Y.body,
                      children: (0, r.jsx)(p.$jN, { className: Y.spinner })
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.Z, {
                      premiumType: s,
                      onClose: o
                  }),
                  (0, r.jsxs)(p.hzk, {
                      className: Y.body,
                      children: [
                          (0, r.jsx)(g.Z, {
                              size: g.Z.Sizes.SIZE_24,
                              className: Y.title,
                              children: t
                          }),
                          (0, r.jsxs)('div', {
                              className: h,
                              children: [
                                  C,
                                  (0, r.jsx)(p.Text, {
                                      variant: 'text-md/normal',
                                      children: i
                                  })
                              ]
                          }),
                          (0, r.jsx)(eh, {
                              currentUser: I,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: j
                          })
                      ]
                  }),
                  !N && (0, r.jsx)(p.mzw, { children: a }),
                  N &&
                      (0, r.jsx)(V.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
