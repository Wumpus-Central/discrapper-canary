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
    q = r(78826),
    L = r(46140),
    Z = r(675654),
    M = r(388032),
    W = r(442686);
function z(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a } = e,
        i = (0, c.wj)((0, C.ZP)()),
        l = (0, I.h)({
            location: L.dr.REWARD_CODE_MODAL,
            questConfig: r.config
        }),
        p = (0, u.dQu)(d.Z.colors.INTERACTIVE_NORMAL).hex(),
        _ = l ? p : r.config.colors.primary,
        m = {
            border: '1px solid '.concat(_),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, O.aD)(_, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, O.aD)(_, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        f = (0, A.B)(r, !1),
        g = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: b, subHeader: h } = (function (e) {
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
            claimRewardCopy: (0, E.up)(L.dr.REWARD_CODE_MODAL)
        }),
        { hasError: w, isLoading: y } = (0, q.d7)();
    return (0, n.jsxs)('div', {
        style: m,
        className: W.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: W.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': l ? p : r.config.colors.primary },
                children: [
                    y &&
                        !w &&
                        (0, n.jsx)(u.$jN, {
                            className: W.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    w && (0, n.jsx)(u.fFY, { className: W.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(N.Z, {
                        className: s()(W.rewardTileAsset, { [W.rewardTileAssetLoading]: y || w }),
                        quest: r,
                        questContent: f.trackingCtx.content,
                        location: L.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: W.rewardSubheading,
                children: [
                    g &&
                        (0, n.jsx)(u.kmB, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: W.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: W.rewardSubheadingText,
                        children: h
                    })
                ]
            }),
            (0, n.jsx)(u.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: W.rewardHeading,
                children: b
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
              children: (r) => {
                  var o, a;
                  return (0, n.jsx)(
                      F,
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
function F(e) {
    var t;
    let { transitionState: r, onClose: a, quest: s, location: d, questContentPosition: c, impressionRef: C, preview: O } = e,
        I = (0, _.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        E = D.r.build(s.config).rewardPlatforms,
        A = E.length > 1,
        [B, N] = o.useState(A ? null : E[0]),
        U = o.useRef(new i.qA()),
        F = o.useRef(null),
        [G, H] = o.useState(null),
        X = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        Q = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        {
            questStoreRewardCode: V,
            isFetchingRewardCode: J,
            isClaimingReward: Y
        } = (0, l.cj)([v.Z], () => ({
            questStoreRewardCode: v.Z.getRewardCode(s.id),
            isFetchingRewardCode: v.Z.isFetchingRewardCode(s.id),
            isClaimingReward: v.Z.isClaimingReward(s.id)
        })),
        $ = (0, j.O5)(),
        K = (0, R.oo)({ quest: s }),
        ee = !0 === O ? (0, P.b)(s) : V,
        et = A && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == ee,
        {
            claimCode: er,
            fetchCode: en,
            hasError: eo,
            setHasError: ea
        } = (0, k.u)({
            isClaimingReward: Y,
            isFetchingRewardCode: J,
            quest: s,
            questContent: d,
            requiresPlatformSelection: et,
            rewardCode: ee,
            selectedPlatformType: B,
            preview: O
        }),
        es = eo && !Y && !J;
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
    I && null != ee ? (ei = M.intl.string(M.t.srzsU1)) : null != ee ? (ei = M.intl.string(M.t.PJBpdX)) : et && (ei = M.intl.string(M.t.JRU8dn));
    let el =
            null != ei
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: W.heading,
                      children: ei
                  })
                : null,
        ed = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = D.r.build(t.config);
            if (o)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
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
                      color: 'text-normal',
                      className: W.bodyCopy,
                      children: w.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: B,
            requiresPlatformSelection: et,
            rewardCode: ee,
            hasTieredRewardCodes: K
        }),
        ec = o.useMemo(
            () =>
                E.map((e) => ({
                    label: (0, R.t2)(e),
                    value: e
                })),
            [E]
        ),
        eu = null;
    et &&
        (eu = (0, n.jsxs)(u.xJW, {
            title: M.intl.string(M.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: M.intl.string(M.t.EMrUHR),
                    options: ec,
                    select: (e) => {
                        ea(!1), N(e);
                    },
                    isSelected: (e) => e === B,
                    serialize: (e) => (0, R.t2)(e),
                    className: es ? W.errorInput : '',
                    isDisabled: Y,
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
                es ? (0, n.jsx)(u.pdY, { error: M.intl.string(M.t.rbZBMT) }) : null
            ]
        }));
    let ep = null == ee && (J || Y),
        e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != ee
        ? (em = (0, n.jsx)(u.xJW, {
              title: M.intl.string(M.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: Q ? M.intl.string(M.t['0n2u0t']) : ee.code,
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
              title: M.intl.string(M.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: M.intl.string(M.t.rbZBMT),
                  inputClassName: W.errorInput
              })
          }));
    let ef = o.useMemo(
            () =>
                K
                    ? (0, R.o9)({
                          quest: s,
                          idx: null == ee ? void 0 : ee.tier
                      })
                    : (0, R.o9)({
                          quest: s,
                          idx: 0
                      }),
            [K, s, null == ee ? void 0 : ee.tier]
        ),
        eC = o.useMemo(() => ((null == ef ? void 0 : ef.redemptionLink) == null || '' === ef.redemptionLink ? null : (null == ee ? void 0 : ee.code) == null || '' === ee.code ? ef.redemptionLink : ef.redemptionLink.replace(L.Dp, encodeURIComponent(ee.code))), [ef, ee]),
        eg = (0, k.G)({
            claimCode: er,
            fetchCode: en,
            hasError: es,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: et,
            selectedPlatformType: B,
            redemptionLink: eC
        }),
        eb = et && Y,
        eh = !eb && ((et && null == B) || ep),
        ew = null != eC && '' !== eC,
        ey = M.intl.string(M.t['23SS+/']);
    et ? (ey = M.intl.string(M.t.SLZMi4)) : !et && es ? (ey = M.intl.string(M.t.gNJHHh)) : ew && (ey = M.intl.string(M.t['+zx47e']));
    let ex = !X && null != ee && !I && !es,
        eO = null != e_ && K,
        ej = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: H,
                className: W.confettiCanvas,
                environment: U.current
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
                                !eO &&
                                    (0, n.jsx)(q.p, {
                                        source: L.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(z, {
                                            quest: s,
                                            rewardCode: ee,
                                            hasTieredRewardCodes: K
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: W.modalContent,
                                    children: [
                                        el,
                                        ed,
                                        eu,
                                        e_,
                                        em,
                                        null != s.config.cosponsorMetadata &&
                                            null != ej &&
                                            (0, n.jsxs)('div', {
                                                className: W.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: W.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ej.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: W.cosponsorName,
                                                        children: M.intl.format(M.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-normal',
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
                    sprites: Z.CA,
                    colors: Z.Br
                })
        ]
    });
}
