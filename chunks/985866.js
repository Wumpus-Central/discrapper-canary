r.d(t, { default: () => z }), r(388685), r(704826), r(35282);
var n = r(255367),
    o = r(73800),
    a = r(120356),
    s = r.n(a),
    i = r(505266),
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
    R = r(373370),
    E = r(804127),
    k = r(566078),
    D = r(617889),
    B = r(602667),
    P = r(652380),
    A = r(644646),
    N = r(78826),
    q = r(46140),
    L = r(675654),
    Z = r(388032),
    M = r(442686);
function W(e) {
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
        p = (0, D.B)(r, !1),
        _ = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: m, subHeader: f } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i, claimRewardCopy: l } = e,
                d = (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = i ? '' : Z.intl.string(Z.t.UUKbio),
                u = i
                    ? (0, I.o9)({
                          quest: a,
                          idx: null != (n = null == s ? void 0 : s.tier) ? n : null == (r = a.userStatus) ? void 0 : r.claimedTier
                      })
                    : null,
                p = k.r.build(a.config),
                _ = null != u && null != (o = u.messages.name) ? o : p.defaultReward.messages.name,
                m = i ? l : p.defaultReward.messages.name;
            return {
                subHeader: d ? Z.intl.string(Z.t.YpswQk) : c,
                header: d ? _ : m
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a,
            claimRewardCopy: (0, R.up)(q.dr.REWARD_CODE_MODAL)
        }),
        { hasError: g, isLoading: b } = (0, N.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: M.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: M.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    b &&
                        !g &&
                        (0, n.jsx)(u.$jN, {
                            className: M.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    g && (0, n.jsx)(u.fFY, { className: M.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(A.Z, {
                        className: s()(M.rewardTileAsset, { [M.rewardTileAssetLoading]: b || g }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: q.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: M.rewardSubheading,
                children: [
                    _ &&
                        (0, n.jsx)(u.kmB, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: M.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: M.rewardSubheadingText,
                        children: f
                    })
                ]
            }),
            (0, n.jsx)(u.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: M.rewardHeading,
                children: m
            })
        ]
    });
}
function z(e) {
    let t = (0, l.e7)([v.Z], () => v.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(B.A, {
              questOrQuests: t,
              questContent: T.jn.REWARD_MODAL,
              children: (r) => {
                  var o, a;
                  return (0, n.jsx)(
                      U,
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
function U(e) {
    var t;
    let { transitionState: r, onClose: a, quest: s, location: d, questContentPosition: c, impressionRef: C, preview: O } = e,
        R = (0, _.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        D = k.r.build(s.config).rewardPlatforms,
        B = D.length > 1,
        [A, z] = o.useState(B ? null : D[0]),
        U = o.useRef(new i.qA()),
        F = o.useRef(null),
        [G, H] = o.useState(null),
        X = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        Q = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: V,
            isClaimingReward: Y
        } = (0, l.cj)([v.Z], () => ({
            questStoreRewardCode: v.Z.getRewardCode(s.id),
            isFetchingRewardCode: v.Z.isFetchingRewardCode(s.id),
            isClaimingReward: v.Z.isClaimingReward(s.id)
        })),
        $ = (0, j.O5)(),
        K = (0, I.oo)({ quest: s }),
        ee = !0 === O ? (0, P.b)(s) : J,
        et = B && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == ee,
        {
            claimCode: er,
            fetchCode: en,
            hasError: eo,
            setHasError: ea
        } = (0, E.u)({
            isClaimingReward: Y,
            isFetchingRewardCode: V,
            quest: s,
            questContent: d,
            requiresPlatformSelection: et,
            rewardCode: ee,
            selectedPlatformType: A,
            preview: O
        }),
        es = eo && !Y && !V;
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
    R && null != ee ? (ei = Z.intl.string(Z.t.srzsU1)) : null != ee ? (ei = Z.intl.string(Z.t.PJBpdX)) : et && (ei = Z.intl.string(Z.t.JRU8dn));
    let el =
            null != ei
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: M.heading,
                      children: ei
                  })
                : null,
        ed = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = k.r.build(t.config);
            if (o)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: M.bodyCopy,
                    children: s ? Z.intl.format(Z.t.m0btAQ, {}) : Z.intl.format(Z.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
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
                      className: M.bodyCopy,
                      children: w.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: A,
            requiresPlatformSelection: et,
            rewardCode: ee,
            hasTieredRewardCodes: K
        }),
        ec = o.useMemo(
            () =>
                D.map((e) => ({
                    label: (0, I.t2)(e),
                    value: e
                })),
            [D]
        ),
        eu = null;
    et &&
        (eu = (0, n.jsxs)(u.xJW, {
            title: Z.intl.string(Z.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: Z.intl.string(Z.t.EMrUHR),
                    options: ec,
                    select: (e) => {
                        ea(!1), z(e);
                    },
                    isSelected: (e) => e === A,
                    serialize: (e) => (0, I.t2)(e),
                    className: es ? M.errorInput : '',
                    isDisabled: Y,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case T.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: M.platformSelectionOptionIcon });
                                case T.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: M.platformSelectionOptionIcon });
                                case T.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: M.platformSelectionOptionIcon });
                                case T.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: M.platformSelectionOptionIcon });
                                case T.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: M.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: M.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                es ? (0, n.jsx)(u.pdY, { error: Z.intl.string(Z.t.rbZBMT) }) : null
            ]
        }));
    let ep = null == ee && (V || Y),
        e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != ee
        ? (em = (0, n.jsx)(u.xJW, {
              title: Z.intl.string(Z.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: Q ? Z.intl.string(Z.t['0n2u0t']) : ee.code,
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
              title: Z.intl.string(Z.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: Z.intl.string(Z.t.rbZBMT),
                  inputClassName: M.errorInput
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
        eC = o.useMemo(() => ((null == ef ? void 0 : ef.redemptionLink) == null || '' === ef.redemptionLink ? null : (null == ee ? void 0 : ee.code) == null || '' === ee.code ? ef.redemptionLink : ef.redemptionLink.replace(q.Dp, encodeURIComponent(ee.code))), [ef, ee]),
        eg = (0, E.G)({
            claimCode: er,
            fetchCode: en,
            hasError: es,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: et,
            selectedPlatformType: A,
            redemptionLink: eC
        }),
        eb = et && Y,
        eh = !eb && ((et && null == A) || ep),
        ew = null != eC && '' !== eC,
        ey = Z.intl.string(Z.t['23SS+/']);
    et ? (ey = Z.intl.string(Z.t.SLZMi4)) : !et && es ? (ey = Z.intl.string(Z.t.gNJHHh)) : ew && (ey = Z.intl.string(Z.t['+zx47e']));
    let ex = !X && null != ee && !R && !es,
        eO = null != e_ && K,
        ej = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: H,
                className: M.confettiCanvas,
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
                            className: M.modalBody,
                            children: [
                                (0, n.jsx)(u.olH, {
                                    className: M.closeButton,
                                    onClick: () => a()
                                }),
                                !eO &&
                                    (0, n.jsx)(N.p, {
                                        source: q.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(W, {
                                            quest: s,
                                            rewardCode: ee,
                                            hasTieredRewardCodes: K
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: M.modalContent,
                                    children: [
                                        el,
                                        ed,
                                        eu,
                                        e_,
                                        em,
                                        null != s.config.cosponsorMetadata &&
                                            null != ej &&
                                            (0, n.jsxs)('div', {
                                                className: M.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: M.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ej.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: M.cosponsorName,
                                                        children: Z.intl.format(Z.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-normal',
                                                        className: M.cosponsorRedemptionInstructions,
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
                    sprites: L.CA,
                    colors: L.Br
                })
        ]
    });
}
