r.d(s, { Z: () => eI }), r(266796), r(627341), r(47120), r(653041);
var t = r(200651),
    n = r(192379),
    a = r(120356),
    o = r.n(a),
    i = r(512722),
    l = r.n(i),
    c = r(392711),
    u = r.n(c),
    m = r(278074),
    d = r(442837),
    p = r(780384),
    x = r(481060),
    f = r(570140),
    j = r(179360),
    h = r(230711),
    C = r(410030),
    N = r(607070),
    I = r(44315),
    g = r(118012),
    T = r(543241),
    v = r(906411),
    E = r(565138),
    b = r(822179),
    _ = r(419922),
    L = r(687158),
    y = r(484459),
    A = r(813549),
    M = r(867176),
    Z = r(502762),
    O = r(652853),
    P = r(430824),
    U = r(594174),
    w = r(314884),
    S = r(709586),
    k = r(626135),
    R = r(768581),
    z = r(63063),
    F = r(998502),
    W = r(53900),
    V = r(789155),
    D = r(55610),
    K = r(798769),
    B = r(474936),
    G = r(981631),
    Y = r(388032),
    q = r(18908),
    H = r(834982),
    Q = r(912450),
    X = r(703548),
    $ = r(869333),
    J = r(652528),
    ee = r(874692),
    es = r(391458),
    er = r(70967),
    et = r(674264),
    en = r(360088),
    ea = r(304880);
function eo() {
    return (eo =
        Object.assign ||
        function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var r = arguments[s];
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
            }
            return e;
        }).apply(this, arguments);
}
let ei = F.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    el = {
        boostItemVisual: J,
        emojiStickersVisual: ee,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: es,
        uploadsMessagesItemVisualV2: er,
        PL: et,
        TR: ea
    },
    ec = {
        boostItemVisual: H,
        emojiStickersVisual: Q,
        screenShareItemVisual: en,
        uploadsMessagesItemVisual: X,
        uploadsMessagesItemVisualV2: $,
        PL: et,
        TR: ea
    };
function eu() {
    let e = (0, C.ZP)();
    return (0, p.wj)(e) ? ec : el;
}
function em(e) {
    let { description: s, onLearnMore: r, renderVisual: n } = e;
    return (0, t.jsxs)('div', {
        className: q.whatYouLoseItem,
        children: [
            (0, t.jsxs)('div', {
                className: q.whatYouLoseItemLeftColumn,
                children: [
                    (0, t.jsx)(x.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, t.jsx)(x.zxk, {
                        look: x.zxk.Looks.LINK,
                        color: x.zxk.Colors.LINK,
                        size: x.zxk.Sizes.NONE,
                        className: q.whatYouLoseItemLearnMore,
                        onClick: r,
                        children: Y.NW.string(Y.t.hvVgAQ)
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: q.whatYouLoseItemRightColumn,
                children: n()
            })
        ]
    });
}
function ed(e) {
    var s,
        r,
        n = eo(
            {},
            (function (e) {
                if (null == e) throw TypeError('Cannot destructure ' + e);
                return e;
            })(e)
        );
    let { theme: a } = (0, O.z)(),
        o = (0, I.O0)(G.tPk.INTERACTIVE_ACTIVE, a);
    return (0, t.jsx)(
        x.SrA,
        ((s = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
                var r = null != arguments[s] ? arguments[s] : {},
                    t = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (t = t.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    t.forEach(function (s) {
                        var t;
                        (t = r[s]),
                            s in e
                                ? Object.defineProperty(e, s, {
                                      value: t,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[s] = t);
                    });
            }
            return e;
        })({ size: 'md' }, n)),
        (r = r = { color: o.hex }),
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
function ep(e) {
    let { currentUser: s, premiumType: r, onClose: n } = e,
        a = (0, L.ZP)(s.id),
        o = (0, d.e7)([N.Z], () => N.Z.useReducedMotion),
        i = r === B.p9.TIER_1,
        l = (0, m.EQ)(null == a ? void 0 : a.premiumType)
            .with(B.p9.TIER_2, () =>
                (0, t.jsxs)(Z.Z, {
                    user: s,
                    displayProfile: a,
                    forceShowPremium: !0,
                    profileType: null,
                    className: q.profileCard,
                    children: [
                        (0, t.jsx)(M.b, {
                            user: s,
                            displayProfile: a,
                            avatarSize: x.EFr.SIZE_56,
                            avatarOffsetX: 8,
                            avatarOffsetY: 2,
                            bannerWidth: 172,
                            bannerHeight: 60,
                            themePadding: 4
                        }),
                        (0, t.jsx)(ei, {
                            className: q.profileAvatar,
                            src: s.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                            size: x.EFr.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, t.jsxs)('div', {
                            className: q.profileUserInfo,
                            children: [
                                (0, t.jsx)(A.Z, {
                                    className: q.profileNameTag,
                                    usernameClass: q.profileNameTagUsername,
                                    name: s.toString()
                                }),
                                (0, t.jsx)(ed, { className: q.profilePremiumIcon })
                            ]
                        })
                    ]
                })
            )
            .otherwise(() =>
                (0, t.jsxs)('div', {
                    className: q.profileCardTier1,
                    children: [
                        (0, t.jsx)(ei, {
                            className: q.profileAvatarTier1,
                            src: s.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
                            size: x.EFr.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, t.jsxs)('div', {
                            className: q.profileUserInfoTier1,
                            children: [
                                (0, t.jsx)(A.Z, {
                                    className: q.profileNameTag,
                                    usernameClass: q.profileNameTagUsername,
                                    name: s.toString()
                                }),
                                (0, t.jsx)(x.SrA, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: q.profilePremiumIcon
                                })
                            ]
                        })
                    ]
                })
            );
    return (0, t.jsx)(
        em,
        {
            description: i ? Y.NW.format(Y.t.xCaYwM, {}) : Y.NW.format(Y.t['gpqr+v'], {}),
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
        r = (0, d.e7)([N.Z], () => N.Z.useReducedMotion),
        n = (0, T.wC)(null)
            .filter((e) => e.type === v.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        a = (0, d.Wu)([b.Z], () => b.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)),
        o = eu().emojiStickersVisual,
        i = s === B.p9.TIER_1;
    return (0, t.jsx)(
        em,
        {
            description: i ? Y.NW.format(Y.t.couiKC, {}) : Y.NW.format(Y.t['0hUHi4'], {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' });
            },
            renderVisual: () =>
                (null != n && n.length > 0) || (!i && null != a && a.length > 0)
                    ? (0, t.jsxs)('div', {
                          className: q.emojiStickersPersonalizedContainer,
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
                                                className: q.personalizedEmoji,
                                                alt: '',
                                                src: e
                                            })
                                          : null
                                  ),
                              i
                                  ? null
                                  : a.map((e) =>
                                        (0, t.jsx)(
                                            _.Z,
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
                          className: q.nonPersonalizedGraphic,
                          alt: '',
                          src: o
                      })
        },
        'emoji-stickers-item'
    );
}
function ef(e) {
    let { premiumType: s, onClose: r } = e;
    n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
    let a = (0, d.e7)([N.Z], () => N.Z.useReducedMotion),
        [i, l] = (0, d.Wu)([w.Z, P.Z], () => {
            let e = w.Z.boostSlots,
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
            return s.size > 0 && ([r, t] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [P.Z.getGuild(r), t];
        }),
        c = null != i && l > 0,
        m = eu().boostItemVisual;
    return (0, t.jsx)(
        em,
        {
            description: s === B.p9.TIER_1 ? Y.NW.format(Y.t['K4Hv6+'], {}) : Y.NW.format(Y.t.wRxEDQ, {}),
            onLearnMore: () => {
                r(), h.Z.open(G.oAB.GUILD_BOOSTING), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' });
            },
            renderVisual: () =>
                c
                    ? (0, t.jsx)('div', {
                          className: q.boostCardContainer,
                          children: (0, t.jsxs)('div', {
                              className: q.boostCard,
                              children: [
                                  (0, t.jsx)(E.Z, {
                                      guild: i,
                                      size: E.Z.Sizes.MEDIUM,
                                      animate: !a,
                                      className: q.boostCardIcon
                                  }),
                                  (0, t.jsxs)('div', {
                                      className: q.boostCardInfo,
                                      children: [
                                          (0, t.jsx)(x.Text, {
                                              variant: 'text-md/normal',
                                              className: o()(q.textSingleLineEllipsis, q.boostCardTitle),
                                              children: i.name
                                          }),
                                          (0, t.jsxs)('div', {
                                              className: q.boostCardSubtitle,
                                              children: [
                                                  (0, t.jsx)(S.Z, { className: q.boostCardGem }),
                                                  (0, t.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      className: o()(q.textSingleLineEllipsis, q.boostCardCount),
                                                      children: Y.NW.format(Y.t['Ou/g/P'], { boostCount: l })
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
                          src: m
                      })
        },
        'boost-item'
    );
}
let ej = () => {
    let e = eu().screenShareItemVisual;
    return (0, t.jsx)(
        em,
        {
            description: Y.NW.format(Y.t.wK04T0, {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.STREAM_QUALITY_SETTINGS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' });
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
function eh(e) {
    let { premiumType: s } = e,
        r = eu().uploadsMessagesItemVisual;
    return (0, t.jsx)(
        em,
        {
            description: s === B.p9.TIER_2 ? Y.NW.format(Y.t.GsOFRE, {}) : Y.NW.format(Y.t.wFWO6O, {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' });
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
let eC = (e) => {
    let { country: s } = e,
        r = eu(),
        n = 'PL' === s ? r.PL : r.TR;
    return (0, t.jsx)(
        em,
        {
            description: Y.NW.format('PL' === s ? Y.t['0MAev7'] : Y.t.p2CqUl, {}),
            onLearnMore: () => {
                window.open(z.Z.getArticleURL(G.BhN.LOCALIZED_PRICING)), k.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' });
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
function eN(e) {
    let { currentUser: s, premiumType: r, onClose: a, isDowngrade: o = !1 } = e,
        i = (0, W.Z)(),
        c = (0, D.U)(),
        u = n.useMemo(() => {
            let e = [];
            switch ((c && (l()(null != i, 'Subscription billing country should not be null'), e.push((0, t.jsx)(eC, { country: i }))), r)) {
                case B.p9.TIER_0:
                    e.push((0, t.jsx)(ex, { premiumType: r }), (0, t.jsx)(eh, { premiumType: r }));
                    break;
                case B.p9.TIER_1:
                    o
                        ? e.push(
                              (0, t.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ej, {}),
                              (0, t.jsx)(ef, {
                                  premiumType: r,
                                  onClose: a
                              })
                          )
                        : e.push(
                              (0, t.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ex, { premiumType: r }),
                              (0, t.jsx)(ej, {}),
                              (0, t.jsx)(eh, { premiumType: r }),
                              (0, t.jsx)(ef, {
                                  premiumType: r,
                                  onClose: a
                              })
                          );
                    break;
                case B.p9.TIER_2:
                    o
                        ? e.push(
                              (0, t.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ef, {
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ej, {})
                          )
                        : e.push(
                              (0, t.jsx)(ep, {
                                  currentUser: s,
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ex, { premiumType: r }),
                              (0, t.jsx)(ef, {
                                  premiumType: r,
                                  onClose: a
                              }),
                              (0, t.jsx)(ej, {}),
                              (0, t.jsx)(eh, { premiumType: r })
                          );
            }
            return e;
        }, [r, s, a, o, c, i]);
    return (0, t.jsx)('div', {
        className: q.whatYouLoseItemContainer,
        children: u
    });
}
let eI = function (e) {
    let { premiumType: s, titleText: r, subtitleText: a, footer: o, onClose: i, onDiscountClaim: c, onContinue: u, analyticsLocations: m, isLoading: p = !1, churnUserDiscountOffer: f = null, isDowngrade: j = !1, subtitleIcon: h, subtitleClassName: C } = e,
        N = (0, d.e7)([U.default], () => {
            let e = U.default.getCurrentUser();
            return l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
        });
    n.useEffect(() => {
        (0, y.Z)(N.id, N.getAvatarURL(null, 80));
    }, [N]);
    let I = null != f && !p;
    return (n.useEffect(() => {
        I &&
            k.default.track(G.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: m,
                discount_id: null == f ? void 0 : f.discount_id
            });
    }, [I, m, f]),
    p)
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(K.Z, {
                      premiumType: s,
                      onClose: i
                  }),
                  (0, t.jsx)(x.hzk, {
                      className: q.body,
                      children: (0, t.jsx)(x.$jN, { className: q.spinner })
                  })
              ]
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(K.Z, {
                      premiumType: s,
                      onClose: i
                  }),
                  (0, t.jsxs)(x.hzk, {
                      className: q.body,
                      children: [
                          (0, t.jsx)(g.Z, {
                              size: g.Z.Sizes.SIZE_24,
                              className: q.title,
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
                          (0, t.jsx)(eN, {
                              currentUser: N,
                              premiumType: s,
                              onClose: i,
                              isDowngrade: j
                          })
                      ]
                  }),
                  !I && (0, t.jsx)(x.mzw, { children: o }),
                  I &&
                      (0, t.jsx)(V.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
