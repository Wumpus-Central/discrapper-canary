r.d(t, { default: () => W }), r(388685), r(704826), r(35282);
var n = r(200651),
    o = r(192379),
    a = r(120356),
    s = r.n(a),
    i = r(995899),
    l = r(442837),
    d = r(692547),
    c = r(780384),
    u = r(481060),
    p = r(484614),
    _ = r(211266),
    m = r(110924),
    f = r(448986),
    C = r(410030),
    g = r(607070),
    b = r(475271),
    h = r(530618),
    w = r(454585),
    y = r(246946),
    x = r(572004),
    O = r(302221),
    j = r(617136),
    S = r(113434),
    v = r(569984),
    T = r(497505),
    I = r(918701),
    R = r(804127),
    E = r(566078),
    k = r(617889),
    P = r(602667),
    D = r(652380),
    B = r(644646),
    A = r(78826),
    N = r(46140),
    q = r(675654),
    L = r(388032),
    Z = r(442686);
function M(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a } = e,
        i = (0, c.wj)((0, C.ZP)()),
        l = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, O.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, O.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, k.B)(r, !1),
        _ = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: m, subHeader: f } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : L.intl.string(L.t.UUKbio),
                c = i
                    ? (0, I.o9)({
                          quest: a,
                          idx: null != (n = null == s ? void 0 : s.tier) ? n : null == (r = a.userStatus) ? void 0 : r.claimedTier
                      })
                    : null,
                u = E.r.build(a.config),
                p = null != c && null != (o = c.messages.name) ? o : u.defaultReward.messages.name,
                _ = i ? L.intl.string(L.t.cfY4PD) : u.defaultReward.messages.name;
            return {
                subHeader: l ? L.intl.string(L.t.YpswQk) : d,
                header: l ? p : _
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a
        }),
        { hasError: g, isLoading: b } = (0, A.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: Z.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: Z.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    b &&
                        !g &&
                        (0, n.jsx)(u.$jN, {
                            className: Z.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    g && (0, n.jsx)(u.fFY, { className: Z.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(B.Z, {
                        className: s()(Z.rewardTileAsset, { [Z.rewardTileAssetLoading]: b || g }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: N.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: Z.rewardSubheading,
                children: [
                    _ &&
                        (0, n.jsx)(u.kmB, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: Z.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: Z.rewardSubheadingText,
                        children: f
                    })
                ]
            }),
            (0, n.jsx)(u.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: Z.rewardHeading,
                children: m
            })
        ]
    });
}
function W(e) {
    let t = (0, l.e7)([v.Z], () => v.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(P.A, {
              questOrQuests: t,
              questContent: T.jn.REWARD_MODAL,
              children: (r) => {
                  var o, a;
                  return (0, n.jsx)(
                      z,
                      ((o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (a = a =
                          {
                              impressionRef: r,
                              quest: t,
                              preview: e.preview
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      o)
                  );
              }
          })
        : null;
}
function z(e) {
    var t;
    let { transitionState: r, onClose: a, quest: s, location: d, questContentPosition: c, impressionRef: C, preview: O } = e,
        k = (0, _.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        P = E.r.build(s.config).rewardPlatforms,
        B = P.length > 1,
        [W, z] = o.useState(B ? null : P[0]),
        U = o.useRef(new i.qA()),
        F = o.useRef(null),
        [G, H] = o.useState(null),
        X = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        Q = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: Y,
            isClaimingReward: V
        } = (0, l.cj)([v.Z], () => ({
            questStoreRewardCode: v.Z.getRewardCode(s.id),
            isFetchingRewardCode: v.Z.isFetchingRewardCode(s.id),
            isClaimingReward: v.Z.isClaimingReward(s.id)
        })),
        $ = (0, j.O5)(),
        K = (0, I.oo)({ quest: s }),
        ee = !0 === O ? (0, D.b)(s) : J,
        et = B && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == ee,
        {
            claimCode: er,
            fetchCode: en,
            hasError: eo,
            setHasError: ea
        } = (0, R.u)({
            isClaimingReward: V,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: d,
            requiresPlatformSelection: et,
            rewardCode: ee,
            selectedPlatformType: W,
            preview: O
        }),
        es = eo && !V && !Y;
    !(function (e) {
        let t = (0, f.Z)(e),
            r = b.default.useIsCaptchaModalOpen(),
            n = (0, m.Z)(r),
            a = !!(!r && n);
        o.useEffect(() => {
            a && t();
        }, [a, t]);
    })(() => {
        ea(!0);
    });
    let ei = null;
    k && null != ee ? (ei = L.intl.string(L.t.srzsU1)) : null != ee ? (ei = L.intl.string(L.t.PJBpdX)) : et && (ei = L.intl.string(L.t.JRU8dn));
    let el =
            null != ei
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: Z.heading,
                      children: ei
                  })
                : null,
        ed = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = E.r.build(t.config);
            if (o)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: Z.bodyCopy,
                    children: s ? L.intl.format(L.t.m0btAQ, {}) : L.intl.format(L.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, I.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != a && null != l
                ? (0, n.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: Z.bodyCopy,
                      children: w.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: W,
            requiresPlatformSelection: et,
            rewardCode: ee,
            hasTieredRewardCodes: K
        }),
        ec = o.useMemo(
            () =>
                P.map((e) => ({
                    label: (0, I.t2)(e),
                    value: e
                })),
            [P]
        ),
        eu = null;
    et &&
        (eu = (0, n.jsxs)(u.xJW, {
            title: L.intl.string(L.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: L.intl.string(L.t.EMrUHR),
                    options: ec,
                    select: (e) => {
                        ea(!1), z(e);
                    },
                    isSelected: (e) => e === W,
                    serialize: (e) => (0, I.t2)(e),
                    className: es ? Z.errorInput : '',
                    isDisabled: V,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case T.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: Z.platformSelectionOptionIcon });
                                case T.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: Z.platformSelectionOptionIcon });
                                case T.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: Z.platformSelectionOptionIcon });
                                case T.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: Z.platformSelectionOptionIcon });
                                case T.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: Z.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: Z.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                es ? (0, n.jsx)(u.pdY, { error: L.intl.string(L.t.rbZBMT) }) : null
            ]
        }));
    let ep = null == ee && (Y || V),
        e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != ee
        ? (em = (0, n.jsx)(u.xJW, {
              title: L.intl.string(L.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: Q ? L.intl.string(L.t['0n2u0t']) : ee.code,
                  delay: 1000,
                  buttonColor: u.zxk.Colors.BRAND,
                  onCopy: () => {
                      Q && (0, x.JG)(ee.code),
                          $({
                              questId: s.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: j.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : es &&
          !et &&
          (em = (0, n.jsx)(u.xJW, {
              title: L.intl.string(L.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: L.intl.string(L.t.rbZBMT),
                  inputClassName: Z.errorInput
              })
          }));
    let ef = o.useMemo(
            () =>
                K
                    ? (0, I.o9)({
                          quest: s,
                          idx: null == ee ? void 0 : ee.tier
                      })
                    : (0, I.o9)({
                          quest: s,
                          idx: 0
                      }),
            [K, s, null == ee ? void 0 : ee.tier]
        ),
        eC = o.useMemo(() => ((null == ef ? void 0 : ef.redemptionLink) == null || '' === ef.redemptionLink ? null : (null == ee ? void 0 : ee.code) == null || '' === ee.code ? ef.redemptionLink : ef.redemptionLink.replace(N.Dp, encodeURIComponent(ee.code))), [ef, ee]),
        eg = (0, R.G)({
            claimCode: er,
            fetchCode: en,
            hasError: es,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: et,
            selectedPlatformType: W,
            redemptionLink: eC
        }),
        eb = et && V,
        eh = !eb && ((et && null == W) || ep),
        ew = null != eC && '' !== eC,
        ey = L.intl.string(L.t['23SS+/']);
    et ? (ey = L.intl.string(L.t.SLZMi4)) : !et && es ? (ey = L.intl.string(L.t.gNJHHh)) : ew && (ey = L.intl.string(L.t['+zx47e']));
    let ex = !X && null != ee && !k && !es,
        eO = null != e_ && K,
        ej = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: H,
                className: Z.confettiCanvas,
                environment: U.current
            }),
            (0, n.jsx)('div', {
                ref: (e) => {
                    (F.current = e), (C.current = e);
                },
                children: (0, n.jsxs)(u.Y0X, {
                    transitionState: r,
                    size: u.CgR.DYNAMIC,
                    children: [
                        (0, n.jsxs)('div', {
                            className: Z.modalBody,
                            children: [
                                (0, n.jsx)(u.olH, {
                                    className: Z.closeButton,
                                    onClick: () => a()
                                }),
                                !eO &&
                                    (0, n.jsx)(A.p, {
                                        source: N.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(M, {
                                            quest: s,
                                            rewardCode: ee,
                                            hasTieredRewardCodes: K
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: Z.modalContent,
                                    children: [
                                        el,
                                        ed,
                                        eu,
                                        e_,
                                        em,
                                        null != s.config.cosponsorMetadata &&
                                            null != ej &&
                                            (0, n.jsxs)('div', {
                                                className: Z.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: Z.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ej.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: Z.cosponsorName,
                                                        children: L.intl.format(L.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-normal',
                                                        className: Z.cosponsorRedemptionInstructions,
                                                        children: w.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, !1, { allowLinks: !0 })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(u.mzw, {
                            children: (0, n.jsx)(u.zxk, {
                                onClick: eg,
                                submitting: eb,
                                disabled: eh,
                                children: ey
                            })
                        })
                    ]
                })
            }),
            ex &&
                (0, n.jsx)(h.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: G,
                    sprites: q.CA,
                    colors: q.Br
                })
        ]
    });
}
