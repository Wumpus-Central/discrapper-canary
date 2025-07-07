(r.d(t, { default: () => U }), r(388685), r(704826), r(35282));
var n = r(255367),
    o = r(73800),
    a = r(120356),
    s = r.n(a),
    i = r(505266),
    l = r(442837),
    c = r(692547),
    d = r(780384),
    u = r(481060),
    p = r(484614),
    _ = r(211266),
    f = r(110924),
    m = r(448986),
    C = r(410030),
    h = r(607070),
    b = r(475271),
    g = r(530618),
    y = r(454585),
    w = r(246946),
    O = r(572004),
    j = r(302221),
    v = r(617136),
    x = r(113434),
    S = r(569984),
    E = r(497505),
    R = r(918701),
    T = r(192023),
    I = r(373370),
    k = r(804127),
    P = r(566078),
    A = r(617889),
    N = r(602667),
    B = r(652380),
    D = r(644646),
    q = r(78826),
    L = r(46140),
    Z = r(675654),
    M = r(388032),
    W = r(442686);
function V(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a, sourceQuestContent: i } = e,
        l = (0, d.wj)((0, C.ZP)()),
        p = (0, T.h)({
            location: L.dr.REWARD_CODE_MODAL,
            questConfig: r.config
        }),
        _ = (0, u.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = p ? _ : r.config.colors.primary,
        m = {
            border: '1px solid '.concat(f),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, j.aD)(f, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, j.aD)(f, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        h = (0, A.B)(r, !1),
        b = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: g, subHeader: y } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i, claimRewardCopy: l } = e,
                c = (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : M.intl.string(M.t.UUKbio),
                u = i
                    ? (0, R.o9)({
                          quest: a,
                          idx: null != (n = null == s ? void 0 : s.tier) ? n : null == (r = a.userStatus) ? void 0 : r.claimedTier
                      })
                    : null,
                p = P.r.build(a.config),
                _ = null != u && null != (o = u.messages.name) ? o : p.defaultRewardName,
                f = i ? l : p.defaultRewardName;
            return {
                subHeader: c ? M.intl.string(M.t.YpswQk) : d,
                header: c ? _ : f
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a,
            claimRewardCopy: (0, I.up)(L.dr.REWARD_CODE_MODAL)
        }),
        { hasError: w, isLoading: O } = (0, q.d7)();
    return (0, n.jsxs)('div', {
        style: m,
        className: W.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: W.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': p ? _ : r.config.colors.primary },
                children: [
                    O &&
                        !w &&
                        (0, n.jsx)(u.$jN, {
                            className: W.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    w && (0, n.jsx)(u.fFY, { className: W.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(D.Z, {
                        className: s()(W.rewardTileAsset, { [W.rewardTileAssetLoading]: O || w }),
                        quest: r,
                        questContent: h.trackingCtx.content,
                        location: L.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: i
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: W.rewardSubheading,
                children: [
                    b &&
                        (0, n.jsx)(u.kmB, {
                            size: 'xs',
                            color: c.Z.colors.TEXT_MUTED,
                            className: W.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: W.rewardSubheadingText,
                        children: y
                    })
                ]
            }),
            (0, n.jsx)(u.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: W.rewardHeading,
                children: g
            })
        ]
    });
}
function U(e) {
    let t = (0, l.e7)([S.Z], () => S.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(N.A, {
              questOrQuests: t,
              questContent: E.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (r) => {
                  var o, a;
                  return (0, n.jsx)(
                      z,
                      ((o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      ((n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n));
                                  }));
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
    let { transitionState: r, onClose: a, quest: s, questContent: c, questContentPosition: d, impressionRef: C, preview: j, sourceQuestContent: T } = e,
        I = (0, _.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        A = P.r.build(s.config).rewardPlatforms,
        N = A.length > 1,
        [D, U] = o.useState(N ? null : A[0]),
        z = o.useRef(new i.qA()),
        F = o.useRef(null),
        [Q, G] = o.useState(null),
        X = (0, l.e7)([h.Z], () => h.Z.useReducedMotion),
        H = (0, l.e7)([w.Z], () => w.Z.hidePersonalInformation),
        {
            questStoreRewardCode: $,
            isFetchingRewardCode: J,
            isClaimingReward: Y
        } = (0, l.cj)([S.Z], () => ({
            questStoreRewardCode: S.Z.getRewardCode(s.id),
            isFetchingRewardCode: S.Z.isFetchingRewardCode(s.id),
            isClaimingReward: S.Z.isClaimingReward(s.id)
        })),
        K = (0, v.O5)(),
        ee = (0, R.oo)({ quest: s }),
        et = !0 === j ? (0, B.b)(s) : $,
        er = N && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == et,
        {
            claimCode: en,
            fetchCode: eo,
            hasError: ea,
            setHasError: es
        } = (0, k.u)({
            isClaimingReward: Y,
            isFetchingRewardCode: J,
            quest: s,
            questContent: c,
            requiresPlatformSelection: er,
            rewardCode: et,
            selectedPlatformType: D,
            preview: j
        }),
        ei = ea && !Y && !J;
    !(function (e) {
        let t = (0, m.Z)(e),
            r = b.default.useIsCaptchaModalOpen(),
            n = (0, f.Z)(r),
            a = !!(!r && n);
        o.useEffect(() => {
            a && t();
        }, [a, t]);
    })(() => {
        es(!0);
    });
    let el = null;
    I && null != et ? (el = M.intl.string(M.t.srzsU1)) : null != et ? (el = M.intl.string(M.t.PJBpdX)) : er && (el = M.intl.string(M.t.JRU8dn));
    let ec =
            null != el
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: W.heading,
                      children: el
                  })
                : null,
        ed = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = P.r.build(t.config);
            if (o)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    className: W.bodyCopy,
                    children: s ? M.intl.format(M.t.m0btAQ, {}) : M.intl.format(M.t['ZUA/Ul'], { rewardName: i.defaultRewardName })
                });
            let l = (0, R.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != a && null != l
                ? (0, n.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-default',
                      className: W.bodyCopy,
                      children: y.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: D,
            requiresPlatformSelection: er,
            rewardCode: et,
            hasTieredRewardCodes: ee
        }),
        eu = o.useMemo(
            () =>
                A.map((e) => ({
                    label: (0, R.t2)(e),
                    value: e
                })),
            [A]
        ),
        ep = null;
    er &&
        (ep = (0, n.jsxs)(u.xJW, {
            title: M.intl.string(M.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: M.intl.string(M.t.EMrUHR),
                    options: eu,
                    select: (e) => {
                        (es(!1), U(e));
                    },
                    isSelected: (e) => e === D,
                    serialize: (e) => (0, R.t2)(e),
                    className: ei ? W.errorInput : '',
                    isDisabled: Y,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case E.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: W.platformSelectionOptionIcon });
                                case E.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: W.platformSelectionOptionIcon });
                                case E.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: W.platformSelectionOptionIcon });
                                case E.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: W.platformSelectionOptionIcon });
                                case E.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: W.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: W.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                ei ? (0, n.jsx)(u.pdY, { error: M.intl.string(M.t.rbZBMT) }) : null
            ]
        }));
    let e_ = null == et && (J || Y),
        ef = e_ && !er ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != et
        ? (em = (0, n.jsx)(u.xJW, {
              title: M.intl.string(M.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: H ? M.intl.string(M.t['0n2u0t']) : et.code,
                  delay: 1000,
                  buttonColor: u.zxk.Colors.BRAND,
                  onCopy: () => {
                      (H && (0, O.JG)(et.code),
                          K({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: v.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: T
                          }));
                  }
              })
          }))
        : ei &&
          !er &&
          (em = (0, n.jsx)(u.xJW, {
              title: M.intl.string(M.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: M.intl.string(M.t.rbZBMT),
                  inputClassName: W.errorInput
              })
          }));
    let eC = o.useMemo(
            () =>
                ee
                    ? (0, R.o9)({
                          quest: s,
                          idx: null == et ? void 0 : et.tier
                      })
                    : (0, R.o9)({
                          quest: s,
                          idx: 0
                      }),
            [ee, s, null == et ? void 0 : et.tier]
        ),
        eh = o.useMemo(() => ((null == eC ? void 0 : eC.redemptionLink) == null || '' === eC.redemptionLink ? null : (null == et ? void 0 : et.code) == null || '' === et.code ? eC.redemptionLink : eC.redemptionLink.replace(L.Dp, encodeURIComponent(et.code))), [eC, et]),
        eb = (0, k.G)({
            claimCode: en,
            fetchCode: eo,
            hasError: ei,
            onDismiss: a,
            quest: s,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: er,
            selectedPlatformType: D,
            redemptionLink: eh,
            sourceQuestContent: T
        }),
        eg = er && Y,
        ey = !eg && ((er && null == D) || e_),
        ew = null != eh && '' !== eh,
        eO = M.intl.string(M.t['23SS+/']);
    er ? (eO = M.intl.string(M.t.SLZMi4)) : !er && ei ? (eO = M.intl.string(M.t.gNJHHh)) : ew && (eO = M.intl.string(M.t['+zx47e']));
    let ej = !X && null != et && !I && !ei,
        ev = null != ef && ee,
        ex = (0, x.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: G,
                className: W.confettiCanvas,
                environment: z.current
            }),
            (0, n.jsx)('div', {
                ref: (e) => {
                    ((F.current = e), (C.current = e));
                },
                children: (0, n.jsxs)(u.Y0X, {
                    transitionState: r,
                    size: u.CgR.DYNAMIC,
                    parentComponent: 'QuestsRewardCodeModal',
                    children: [
                        (0, n.jsxs)('div', {
                            className: W.modalBody,
                            children: [
                                (0, n.jsx)(u.olH, {
                                    className: W.closeButton,
                                    onClick: () => a()
                                }),
                                !ev &&
                                    (0, n.jsx)(q.p, {
                                        source: L.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(V, {
                                            quest: s,
                                            rewardCode: et,
                                            hasTieredRewardCodes: ee,
                                            sourceQuestContent: T
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: W.modalContent,
                                    children: [
                                        ec,
                                        ed,
                                        ep,
                                        ef,
                                        em,
                                        null != s.config.cosponsorMetadata &&
                                            null != ex &&
                                            (0, n.jsxs)('div', {
                                                className: W.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: W.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ex.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: W.cosponsorName,
                                                        children: M.intl.format(M.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-default',
                                                        className: W.cosponsorRedemptionInstructions,
                                                        children: y.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, !1, { allowLinks: !0 })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(u.mzw, {
                            children: (0, n.jsx)(u.zxk, {
                                onClick: eb,
                                submitting: eg,
                                disabled: ey,
                                children: eO
                            })
                        })
                    ]
                })
            }),
            ej &&
                (0, n.jsx)(g.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: Q,
                    sprites: Z.CA,
                    colors: Z.Br
                })
        ]
    });
}
