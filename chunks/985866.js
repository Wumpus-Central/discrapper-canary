r.d(t, { default: () => M }), r(47120), r(757143), r(301563);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    i = r(48026),
    l = r(442837),
    c = r(692547),
    d = r(780384),
    u = r(481060),
    p = r(484614),
    _ = r(211266),
    m = r(110924),
    f = r(448986),
    b = r(410030),
    g = r(607070),
    C = r(475271),
    h = r(530618),
    w = r(454585),
    y = r(246946),
    x = r(572004),
    O = r(302221),
    j = r(617136),
    S = r(113434),
    T = r(569984),
    v = r(497505),
    I = r(918701),
    N = r(804127),
    R = r(566078),
    E = r(617889),
    k = r(602667),
    W = r(652380),
    P = r(644646),
    D = r(78826),
    q = r(46140),
    A = r(675654),
    B = r(388032),
    L = r(442686);
function Z(e) {
    var t;
    let { quest: r, rewardCode: a, hasTieredRewardCodes: o } = e,
        i = (0, d.wj)((0, b.ZP)()),
        l = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, O.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, O.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, E.B)(r, !1),
        _ = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: m, subHeader: f } = (function (e) {
            var t, r, n, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = i ? '' : B.NW.string(B.t.UUKbio),
                d = i
                    ? (0, I.o9)({
                          quest: o,
                          idx: null != (n = null == s ? void 0 : s.tier) ? n : null == (r = o.userStatus) ? void 0 : r.claimedTier
                      })
                    : null,
                u = R.r.build(o.config),
                p = null != d && null != (a = d.messages.name) ? a : u.defaultReward.messages.name,
                _ = i ? B.NW.string(B.t.cfY4PD) : u.defaultReward.messages.name;
            return {
                subHeader: l ? B.NW.string(B.t.YpswQk) : c,
                header: l ? p : _
            };
        })({
            quest: r,
            rewardCode: a,
            hasTieredRewardCodes: o
        }),
        { hasError: g, isLoading: C } = (0, D.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: L.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: L.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    C &&
                        !g &&
                        (0, n.jsx)(u.$jN, {
                            className: L.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    g && (0, n.jsx)(u.fFY, { className: L.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(P.Z, {
                        className: s()(L.rewardTileAsset, { [L.rewardTileAssetLoading]: C || g }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: q.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: L.rewardSubheading,
                children: [
                    _ &&
                        (0, n.jsx)(u.kmB, {
                            size: 'xs',
                            color: c.Z.colors.TEXT_MUTED,
                            className: L.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: L.rewardSubheadingText,
                        children: f
                    })
                ]
            }),
            (0, n.jsx)(u.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: L.rewardHeading,
                children: m
            })
        ]
    });
}
function M(e) {
    let t = (0, l.e7)([T.Z], () => T.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(k.A, {
              questOrQuests: t,
              questContent: v.jn.REWARD_MODAL,
              children: (r) => {
                  var a, o;
                  return (0, n.jsx)(
                      z,
                      ((a = (function (e) {
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
                      (o = o =
                          {
                              impressionRef: r,
                              quest: t,
                              preview: e.preview
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      a)
                  );
              }
          })
        : null;
}
function z(e) {
    var t;
    let { transitionState: r, onClose: o, quest: s, location: c, questContentPosition: d, impressionRef: b, preview: O } = e,
        E = (0, _.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        k = R.r.build(s.config).rewardPlatforms,
        P = k.length > 1,
        [M, z] = a.useState(P ? null : k[0]),
        U = a.useRef(new i.qA()),
        F = a.useRef(null),
        [G, H] = a.useState(null),
        X = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
        Q = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: Y,
            isClaimingReward: V
        } = (0, l.cj)([T.Z], () => ({
            questStoreRewardCode: T.Z.getRewardCode(s.id),
            isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
            isClaimingReward: T.Z.isClaimingReward(s.id)
        })),
        $ = (0, j.O5)(),
        K = (0, I.oo)({ quest: s }),
        ee = !0 === O ? (0, W.b)(s) : J,
        et = P && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == ee,
        {
            claimCode: er,
            fetchCode: en,
            hasError: ea,
            setHasError: eo
        } = (0, N.u)({
            isClaimingReward: V,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: c,
            requiresPlatformSelection: et,
            rewardCode: ee,
            selectedPlatformType: M,
            preview: O
        }),
        es = ea && !V && !Y;
    !(function (e) {
        let t = (0, f.Z)(e),
            r = C.default.useIsCaptchaModalOpen(),
            n = (0, m.Z)(r),
            o = !!(!r && n);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        eo(!0);
    });
    let ei = null;
    E && null != ee ? (ei = B.NW.string(B.t.srzsU1)) : null != ee ? (ei = B.NW.string(B.t.PJBpdX)) : et && (ei = B.NW.string(B.t.JRU8dn));
    let el =
            null != ei
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: L.heading,
                      children: ei
                  })
                : null,
        ec = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: a, rewardCode: o, hasTieredRewardCodes: s } = e,
                i = R.r.build(t.config);
            if (a)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: L.bodyCopy,
                    children: s ? B.NW.format(B.t.m0btAQ, {}) : B.NW.format(B.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, I.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != o && null != l
                ? (0, n.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: L.bodyCopy,
                      children: w.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: M,
            requiresPlatformSelection: et,
            rewardCode: ee,
            hasTieredRewardCodes: K
        }),
        ed = a.useMemo(
            () =>
                k.map((e) => ({
                    label: (0, I.t2)(e),
                    value: e
                })),
            [k]
        ),
        eu = null;
    et &&
        (eu = (0, n.jsxs)(u.xJW, {
            title: B.NW.string(B.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: B.NW.string(B.t.EMrUHR),
                    options: ed,
                    select: (e) => {
                        eo(!1), z(e);
                    },
                    isSelected: (e) => e === M,
                    serialize: (e) => (0, I.t2)(e),
                    className: es ? L.errorInput : '',
                    isDisabled: V,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case v.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: L.platformSelectionOptionIcon });
                                case v.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: L.platformSelectionOptionIcon });
                                case v.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: L.platformSelectionOptionIcon });
                                case v.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: L.platformSelectionOptionIcon });
                                case v.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: L.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: L.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                es ? (0, n.jsx)(u.pdY, { error: B.NW.string(B.t.rbZBMT) }) : null
            ]
        }));
    let ep = null == ee && (Y || V),
        e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != ee
        ? (em = (0, n.jsx)(u.xJW, {
              title: B.NW.string(B.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: Q ? B.NW.string(B.t['0n2u0t']) : ee.code,
                  delay: 1000,
                  buttonColor: u.zxk.Colors.BRAND,
                  onCopy: () => {
                      Q && (0, x.JG)(ee.code),
                          $({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: j.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : es &&
          !et &&
          (em = (0, n.jsx)(u.xJW, {
              title: B.NW.string(B.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: B.NW.string(B.t.rbZBMT),
                  inputClassName: L.errorInput
              })
          }));
    let ef = a.useMemo(
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
        eb = a.useMemo(() => ((null == ef ? void 0 : ef.redemptionLink) == null || '' === ef.redemptionLink ? null : (null == ee ? void 0 : ee.code) == null || '' === ee.code ? ef.redemptionLink : ef.redemptionLink.replace(q.Dp, encodeURIComponent(ee.code))), [ef, ee]),
        eg = (0, N.G)({
            claimCode: er,
            fetchCode: en,
            hasError: es,
            onDismiss: o,
            quest: s,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: et,
            selectedPlatformType: M,
            redemptionLink: eb
        }),
        eC = et && V,
        eh = !eC && ((et && null == M) || ep),
        ew = null != eb && '' !== eb,
        ey = B.NW.string(B.t['23SS+/']);
    et ? (ey = B.NW.string(B.t.SLZMi4)) : !et && es ? (ey = B.NW.string(B.t.gNJHHh)) : ew && (ey = B.NW.string(B.t['+zx47e']));
    let ex = !X && null != ee && !E && !es,
        eO = null != e_ && K,
        ej = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: H,
                className: L.confettiCanvas,
                environment: U.current
            }),
            (0, n.jsx)('div', {
                ref: (e) => {
                    (F.current = e), (b.current = e);
                },
                children: (0, n.jsxs)(u.Y0X, {
                    transitionState: r,
                    size: u.CgR.DYNAMIC,
                    children: [
                        (0, n.jsxs)('div', {
                            className: L.modalBody,
                            children: [
                                (0, n.jsx)(u.olH, {
                                    className: L.closeButton,
                                    onClick: () => o()
                                }),
                                !eO &&
                                    (0, n.jsx)(D.p, {
                                        source: q.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(Z, {
                                            quest: s,
                                            rewardCode: ee,
                                            hasTieredRewardCodes: K
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: L.modalContent,
                                    children: [
                                        el,
                                        ec,
                                        eu,
                                        e_,
                                        em,
                                        null != s.config.cosponsorMetadata &&
                                            null != ej &&
                                            (0, n.jsxs)('div', {
                                                className: L.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: L.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ej.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: L.cosponsorName,
                                                        children: B.NW.format(B.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-normal',
                                                        className: L.cosponsorRedemptionInstructions,
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
                                submitting: eC,
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
                    sprites: A.CA,
                    colors: A.Br
                })
        ]
    });
}
