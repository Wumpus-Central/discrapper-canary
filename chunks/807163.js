t.d(s, { Z: () => eI }), t(627341), t(47120), t(724458), t(653041);
var r = t(200651),
    i = t(192379),
    n = t(120356),
    a = t.n(n),
    o = t(512722),
    l = t.n(o),
    c = t(392711),
    u = t.n(c),
    m = t(278074),
    d = t(442837),
    p = t(780384),
    x = t(481060),
    f = t(570140),
    C = t(179360),
    h = t(230711),
    j = t(410030),
    I = t(607070),
    N = t(44315),
    g = t(118012),
    T = t(543241),
    E = t(906411),
    _ = t(565138),
    v = t(822179),
    L = t(419922),
    A = t(687158),
    M = t(484459),
    Z = t(813549),
    U = t(867176),
    b = t(502762),
    R = t(652853),
    S = t(430824),
    k = t(594174),
    P = t(314884),
    w = t(709586),
    y = t(626135),
    z = t(768581),
    F = t(63063),
    V = t(998502),
    O = t(53900),
    D = t(789155),
    K = t(55610),
    B = t(798769),
    W = t(474936),
    G = t(981631),
    Y = t(388032),
    q = t(196472),
    H = t(834982),
    Q = t(912450),
    X = t(703548),
    $ = t(869333),
    J = t(652528),
    ee = t(874692),
    es = t(391458),
    et = t(70967),
    er = t(674264),
    ei = t(360088),
    en = t(304880);
let ea = V.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    eo = {
        boostItemVisual: J,
        emojiStickersVisual: ee,
        screenShareItemVisual: ei,
        uploadsMessagesItemVisual: es,
        uploadsMessagesItemVisualV2: et,
        PL: er,
        TR: en
    },
    el = {
        boostItemVisual: H,
        emojiStickersVisual: Q,
        screenShareItemVisual: ei,
        uploadsMessagesItemVisual: X,
        uploadsMessagesItemVisualV2: $,
        PL: er,
        TR: en
    };
function ec() {
    let e = (0, j.ZP)();
    return (0, p.wj)(e) ? el : eo;
}
function eu(e) {
    let { description: s, onLearnMore: t, renderVisual: i } = e;
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
                children: i()
            })
        ]
    });
}
function em(e) {
    let { ...s } = e,
        { theme: t } = (0, R.z)(),
        i = (0, N.O0)(G.tPk.INTERACTIVE_ACTIVE, t);
    return (0, r.jsx)(x.SrA, {
        size: 'md',
        ...s,
        color: i.hex
    });
}
function ed(e) {
    let { currentUser: s, premiumType: t, onClose: i } = e,
        n = (0, A.ZP)(s.id),
        a = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        o = t === W.p9.TIER_1,
        l = (0, m.EQ)(null == n ? void 0 : n.premiumType)
            .with(W.p9.TIER_2, () =>
                (0, r.jsxs)(b.Z, {
                    user: s,
                    displayProfile: n,
                    forceShowPremium: !0,
                    profileType: null,
                    className: q.profileCard,
                    children: [
                        (0, r.jsx)(U.b, {
                            user: s,
                            displayProfile: n,
                            avatarSize: x.EFr.SIZE_56,
                            avatarOffsetX: 8,
                            avatarOffsetY: 2,
                            bannerWidth: 172,
                            bannerHeight: 60,
                            themePadding: 4
                        }),
                        (0, r.jsx)(ea, {
                            className: q.profileAvatar,
                            src: s.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !a),
                            size: x.EFr.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, r.jsxs)('div', {
                            className: q.profileUserInfo,
                            children: [
                                (0, r.jsx)(Z.Z, {
                                    className: q.profileNameTag,
                                    usernameClass: q.profileNameTagUsername,
                                    name: s.toString()
                                }),
                                (0, r.jsx)(em, { className: q.profilePremiumIcon })
                            ]
                        })
                    ]
                })
            )
            .otherwise(() =>
                (0, r.jsxs)('div', {
                    className: q.profileCardTier1,
                    children: [
                        (0, r.jsx)(ea, {
                            className: q.profileAvatarTier1,
                            src: s.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !a),
                            size: x.EFr.SIZE_56,
                            'aria-label': s.username
                        }),
                        (0, r.jsxs)('div', {
                            className: q.profileUserInfoTier1,
                            children: [
                                (0, r.jsx)(Z.Z, {
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
        eu,
        {
            description: o ? Y.intl.format(Y.t.xCaYwM, {}) : Y.intl.format(Y.t['gpqr+v'], {}),
            onLearnMore: () => {
                i(), h.Z.open(G.oAB.PROFILE_CUSTOMIZATION), y.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' });
            },
            renderVisual: () => l
        },
        'profile-item'
    );
}
function ep(e) {
    let { premiumType: s } = e,
        t = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        i = (0, T.wC)(null)
            .filter((e) => e.type === E.B.GUILD && (e.animated || null != e.guildId))
            .slice(0, 3),
        n = (0, d.Wu)([v.Z], () => v.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - i.length)),
        a = ec().emojiStickersVisual,
        o = s === W.p9.TIER_1;
    return (0, r.jsx)(
        eu,
        {
            description: o ? Y.intl.format(Y.t.couiKC, {}) : Y.intl.format(Y.t['0hUHi4'], {}),
            onLearnMore: () => {
                window.open(F.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), y.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' });
            },
            renderVisual: () =>
                (null != i && i.length > 0) || (!o && null != n && n.length > 0)
                    ? (0, r.jsxs)('div', {
                          className: q.emojiStickersPersonalizedContainer,
                          children: [
                              i
                                  .map((e) =>
                                      null == e.id
                                          ? e.url
                                          : z.ZP.getEmojiURL({
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
                                  : n.map((e) =>
                                        (0, r.jsx)(
                                            L.ZP,
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
function ex(e) {
    let { premiumType: s, onClose: t } = e;
    i.useEffect(() => f.Z.wait(() => (0, C.X8)()), []);
    let n = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
        [o, l] = (0, d.Wu)([P.Z, S.Z], () => {
            let e = P.Z.boostSlots,
                s = new Map();
            u()(e)
                .map('premiumGuildSubscription')
                .map('guildId')
                .forEach((e) => {
                    if (null != S.Z.getGuild(e)) {
                        var t;
                        let r = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
                        s.set(e, r + 1);
                    }
                });
            let t = null,
                r = 0;
            return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [S.Z.getGuild(t), r];
        }),
        c = null != o && l > 0,
        m = ec().boostItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: s === W.p9.TIER_1 ? Y.intl.format(Y.t['K4Hv6+'], {}) : Y.intl.format(Y.t.wRxEDQ, {}),
            onLearnMore: () => {
                t(), h.Z.open(G.oAB.GUILD_BOOSTING), y.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' });
            },
            renderVisual: () =>
                c
                    ? (0, r.jsx)('div', {
                          className: q.boostCardContainer,
                          children: (0, r.jsxs)('div', {
                              className: q.boostCard,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      guild: o,
                                      size: _.Z.Sizes.MEDIUM,
                                      animate: !n,
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
                                                  (0, r.jsx)(w.Z, { className: q.boostCardGem }),
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
let ef = () => {
    let e = ec().screenShareItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: Y.intl.format(Y.t.wK04T0, {}),
            onLearnMore: () => {
                window.open(F.Z.getArticleURL(G.BhN.STREAM_QUALITY_SETTINGS)), y.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' });
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
function eC(e) {
    let { premiumType: s } = e,
        t = ec().uploadsMessagesItemVisual;
    return (0, r.jsx)(
        eu,
        {
            description: s === W.p9.TIER_2 ? Y.intl.format(Y.t.GsOFRE, {}) : Y.intl.format(Y.t.wFWO6O, {}),
            onLearnMore: () => {
                window.open(F.Z.getArticleURL(G.BhN.PREMIUM_DETAILS)), y.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' });
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
let eh = (e) => {
    let { country: s } = e,
        t = ec(),
        i = 'PL' === s ? t.PL : t.TR;
    return (0, r.jsx)(
        eu,
        {
            description: Y.intl.format('PL' === s ? Y.t['0MAev7'] : Y.t.p2CqUl, {}),
            onLearnMore: () => {
                window.open(F.Z.getArticleURL(G.BhN.LOCALIZED_PRICING)), y.default.track(G.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' });
            },
            renderVisual: () =>
                (0, r.jsx)('img', {
                    alt: '',
                    src: i
                })
        },
        'grandfathered-prices-item'
    );
};
function ej(e) {
    let { currentUser: s, premiumType: t, onClose: n, isDowngrade: a = !1 } = e,
        o = (0, O.Z)(),
        c = (0, K.U)(),
        u = i.useMemo(() => {
            let e = [];
            switch ((c && (l()(null != o, 'Subscription billing country should not be null'), e.push((0, r.jsx)(eh, { country: o }))), t)) {
                case W.p9.TIER_0:
                    e.push((0, r.jsx)(ep, { premiumType: t }), (0, r.jsx)(eC, { premiumType: t }));
                    break;
                case W.p9.TIER_1:
                    a
                        ? e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: n
                              }),
                              (0, r.jsx)(ef, {}),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: n
                              })
                          )
                        : e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: n
                              }),
                              (0, r.jsx)(ep, { premiumType: t }),
                              (0, r.jsx)(ef, {}),
                              (0, r.jsx)(eC, { premiumType: t }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: n
                              })
                          );
                    break;
                case W.p9.TIER_2:
                    a
                        ? e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: n
                              }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: n
                              }),
                              (0, r.jsx)(ef, {})
                          )
                        : e.push(
                              (0, r.jsx)(ed, {
                                  currentUser: s,
                                  premiumType: t,
                                  onClose: n
                              }),
                              (0, r.jsx)(ep, { premiumType: t }),
                              (0, r.jsx)(ex, {
                                  premiumType: t,
                                  onClose: n
                              }),
                              (0, r.jsx)(ef, {}),
                              (0, r.jsx)(eC, { premiumType: t })
                          );
            }
            return e;
        }, [t, s, n, a, c, o]);
    return (0, r.jsx)('div', {
        className: q.whatYouLoseItemContainer,
        children: u
    });
}
let eI = function (e) {
    let { premiumType: s, titleText: t, subtitleText: n, footer: a, onClose: o, onDiscountClaim: c, onContinue: u, analyticsLocations: m, isLoading: p = !1, churnUserDiscountOffer: f = null, isDowngrade: C = !1, subtitleIcon: h, subtitleClassName: j } = e,
        I = (0, d.e7)([k.default], () => {
            let e = k.default.getCurrentUser();
            return l()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
        });
    i.useEffect(() => {
        (0, M.Z)(I.id, I.getAvatarURL(null, 80));
    }, [I]);
    let N = null != f && !p;
    return (i.useEffect(() => {
        N &&
            y.default.track(G.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: m,
                discount_id: null == f ? void 0 : f.discount_id
            });
    }, [N, m, f]),
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
                          (0, r.jsx)(g.Z, {
                              size: g.Z.Sizes.SIZE_24,
                              className: q.title,
                              children: t
                          }),
                          (0, r.jsxs)('div', {
                              className: j,
                              children: [
                                  h,
                                  (0, r.jsx)(x.Text, {
                                      variant: 'text-md/normal',
                                      children: n
                                  })
                              ]
                          }),
                          (0, r.jsx)(ej, {
                              currentUser: I,
                              premiumType: s,
                              onClose: o,
                              isDowngrade: C
                          })
                      ]
                  }),
                  !N && (0, r.jsx)(x.mzw, { children: a }),
                  N &&
                      (0, r.jsx)(D.Z, {
                          churnUserDiscountOffer: f,
                          onDiscountClaim: c,
                          onContinue: u
                      })
              ]
          });
};
