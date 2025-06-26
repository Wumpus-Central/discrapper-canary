r.d(t, { default: () => U }), r(388685), r(704826), r(35282);
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
    R = r(918701),
    I = r(192023),
    E = r(373370),
    k = r(804127),
    D = r(566078),
    A = r(617889),
    B = r(602667),
    P = r(652380),
    N = r(644646),
    L = r(78826),
    q = r(46140),
    Z = r(675654),
    M = r(388032),
    W = r(442686);
function z(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a, sourceQuestContent: i } = e,
        l = (0, c.wj)((0, C.ZP)()),
        p = (0, I.h)({
            location: q.dr.REWARD_CODE_MODAL,
            questConfig: r.config
        }),
        _ = (0, u.dQu)(d.Z.colors.INTERACTIVE_NORMAL).hex(),
        m = p ? _ : r.config.colors.primary,
        f = {
            border: '1px solid '.concat(m),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, O.aD)(m, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, O.aD)(m, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        g = (0, A.B)(r, !1),
        b = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: h, subHeader: w } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i, claimRewardCopy: l } = e,
                d = (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = i ? '' : M.intl.string(M.t.UUKbio),
                u = i
                    ? (0, R.o9)({
                          quest: a,
                          idx: null != (n = null == s ? void 0 : s.tier) ? n : null == (r = a.userStatus) ? void 0 : r.claimedTier
                      })
                    : null,
                p = D.r.build(a.config),
                _ = null != u && null != (o = u.messages.name) ? o : p.defaultRewardName,
                m = i ? l : p.defaultRewardName;
            return {
                subHeader: d ? M.intl.string(M.t.YpswQk) : c,
                header: d ? _ : m
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a,
            claimRewardCopy: (0, E.up)(q.dr.REWARD_CODE_MODAL)
        }),
        { hasError: y, isLoading: x } = (0, L.d7)();
    return (0, n.jsxs)('div', {
        style: f,
        className: W.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: W.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': p ? _ : r.config.colors.primary },
                children: [
                    x &&
                        !y &&
                        (0, n.jsx)(u.$jN, {
                            className: W.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    y && (0, n.jsx)(u.fFY, { className: W.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(N.Z, {
                        className: s()(W.rewardTileAsset, { [W.rewardTileAssetLoading]: x || y }),
                        quest: r,
                        questContent: g.trackingCtx.content,
                        location: q.dr.REWARD_CODE_MODAL,
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
                            color: d.Z.colors.TEXT_MUTED,
                            className: W.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: W.rewardSubheadingText,
                        children: w
                    })
                ]
            }),
            (0, n.jsx)(u.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: W.rewardHeading,
                children: h
            })
        ]
    });
}
function U(e) {
    let t = (0, l.e7)([v.Z], () => v.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(B.A, {
              questOrQuests: t,
              questContent: T.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (r) => {
                  var o, a;
                  return (0, n.jsx)(
                      Q,
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
function Q(e) {
    var t;
    let { transitionState: r, onClose: a, quest: s, questContent: d, questContentPosition: c, impressionRef: C, preview: O, sourceQuestContent: I } = e,
        E = (0, _.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        A = D.r.build(s.config).rewardPlatforms,
        B = A.length > 1,
        [N, U] = o.useState(B ? null : A[0]),
        Q = o.useRef(new i.qA()),
        F = o.useRef(null),
        [G, H] = o.useState(null),
        X = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        V = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: Y,
            isClaimingReward: $
        } = (0, l.cj)([v.Z], () => ({
            questStoreRewardCode: v.Z.getRewardCode(s.id),
            isFetchingRewardCode: v.Z.isFetchingRewardCode(s.id),
            isClaimingReward: v.Z.isClaimingReward(s.id)
        })),
        K = (0, j.O5)(),
        ee = (0, R.oo)({ quest: s }),
        et = !0 === O ? (0, P.b)(s) : J,
        er = B && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == et,
        {
            claimCode: en,
            fetchCode: eo,
            hasError: ea,
            setHasError: es
        } = (0, k.u)({
            isClaimingReward: $,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: d,
            requiresPlatformSelection: er,
            rewardCode: et,
            selectedPlatformType: N,
            preview: O
        }),
        ei = ea && !$ && !Y;
    !(function (e) {
        let t = (0, f.Z)(e),
            r = b.default.useIsCaptchaModalOpen(),
            n = (0, m.Z)(r),
            a = !!(!r && n);
        o.useEffect(() => {
            a && t();
        }, [a, t]);
    })(() => {
        es(!0);
    });
    let el = null;
    E && null != et ? (el = M.intl.string(M.t.srzsU1)) : null != et ? (el = M.intl.string(M.t.PJBpdX)) : er && (el = M.intl.string(M.t.JRU8dn));
    let ed =
            null != el
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: W.heading,
                      children: el
                  })
                : null,
        ec = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = D.r.build(t.config);
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
                      children: w.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: N,
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
                        es(!1), U(e);
                    },
                    isSelected: (e) => e === N,
                    serialize: (e) => (0, R.t2)(e),
                    className: ei ? W.errorInput : '',
                    isDisabled: $,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case T.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: W.platformSelectionOptionIcon });
                                case T.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: W.platformSelectionOptionIcon });
                                case T.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: W.platformSelectionOptionIcon });
                                case T.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: W.platformSelectionOptionIcon });
                                case T.y$.XBOX:
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
    let e_ = null == et && (Y || $),
        em = e_ && !er ? (0, n.jsx)(u.$jN, {}) : null,
        ef = null;
    null != et
        ? (ef = (0, n.jsx)(u.xJW, {
              title: M.intl.string(M.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: V ? M.intl.string(M.t['0n2u0t']) : et.code,
                  delay: 1000,
                  buttonColor: u.zxk.Colors.BRAND,
                  onCopy: () => {
                      V && (0, x.JG)(et.code),
                          K({
                              questId: s.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: j.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: I
                          });
                  }
              })
          }))
        : ei &&
          !er &&
          (ef = (0, n.jsx)(u.xJW, {
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
        eg = o.useMemo(() => ((null == eC ? void 0 : eC.redemptionLink) == null || '' === eC.redemptionLink ? null : (null == et ? void 0 : et.code) == null || '' === et.code ? eC.redemptionLink : eC.redemptionLink.replace(q.Dp, encodeURIComponent(et.code))), [eC, et]),
        eb = (0, k.G)({
            claimCode: en,
            fetchCode: eo,
            hasError: ei,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: er,
            selectedPlatformType: N,
            redemptionLink: eg,
            sourceQuestContent: I
        }),
        eh = er && $,
        ew = !eh && ((er && null == N) || e_),
        ey = null != eg && '' !== eg,
        ex = M.intl.string(M.t['23SS+/']);
    er ? (ex = M.intl.string(M.t.SLZMi4)) : !er && ei ? (ex = M.intl.string(M.t.gNJHHh)) : ey && (ex = M.intl.string(M.t['+zx47e']));
    let eO = !X && null != et && !E && !ei,
        ej = null != em && ee,
        eS = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: H,
                className: W.confettiCanvas,
                environment: Q.current
            }),
            (0, n.jsx)('div', {
                ref: (e) => {
                    (F.current = e), (C.current = e);
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
                                !ej &&
                                    (0, n.jsx)(L.p, {
                                        source: q.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(z, {
                                            quest: s,
                                            rewardCode: et,
                                            hasTieredRewardCodes: ee,
                                            sourceQuestContent: I
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: W.modalContent,
                                    children: [
                                        ed,
                                        ec,
                                        ep,
                                        em,
                                        ef,
                                        null != s.config.cosponsorMetadata &&
                                            null != eS &&
                                            (0, n.jsxs)('div', {
                                                className: W.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: W.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eS.url
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
                                onClick: eb,
                                submitting: eh,
                                disabled: ew,
                                children: ex
                            })
                        })
                    ]
                })
            }),
            eO &&
                (0, n.jsx)(h.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: G,
                    sprites: Z.CA,
                    colors: Z.Br
                })
        ]
    });
}
