r.d(t, { default: () => M }), r(388685), r(704826), r(35282);
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
    N = r(918701),
    I = r(804127),
    R = r(566078),
    E = r(617889),
    k = r(602667),
    P = r(652380),
    D = r(644646),
    W = r(78826),
    B = r(46140),
    A = r(675654),
    q = r(388032),
    L = r(785951);
function Z(e) {
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
        p = (0, E.B)(r, !1),
        _ = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: m, subHeader: f } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : q.NW.string(q.t.UUKbio),
                c = i
                    ? (0, N.o9)({
                          quest: a,
                          idx: null != (n = null == s ? void 0 : s.tier) ? n : null == (r = a.userStatus) ? void 0 : r.claimedTier
                      })
                    : null,
                u = R.r.build(a.config),
                p = null != c && null != (o = c.messages.name) ? o : u.defaultReward.messages.name,
                _ = i ? q.NW.string(q.t.cfY4PD) : u.defaultReward.messages.name;
            return {
                subHeader: l ? q.NW.string(q.t.YpswQk) : d,
                header: l ? p : _
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a
        }),
        { hasError: g, isLoading: b } = (0, W.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: L.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: L.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    b &&
                        !g &&
                        (0, n.jsx)(u.$jN, {
                            className: L.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    g && (0, n.jsx)(u.fFY, { className: L.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(D.Z, {
                        className: s()(L.rewardTileAsset, { [L.rewardTileAssetLoading]: b || g }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: B.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: L.rewardSubheading,
                children: [
                    _ &&
                        (0, n.jsx)(u.kmB, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
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
    let t = (0, l.e7)([v.Z], () => v.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(k.A, {
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
        E = (0, _.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        k = R.r.build(s.config).rewardPlatforms,
        D = k.length > 1,
        [M, z] = o.useState(D ? null : k[0]),
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
        K = (0, N.oo)({ quest: s }),
        ee = !0 === O ? (0, P.b)(s) : J,
        et = D && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == ee,
        {
            claimCode: er,
            fetchCode: en,
            hasError: eo,
            setHasError: ea
        } = (0, I.u)({
            isClaimingReward: V,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: d,
            requiresPlatformSelection: et,
            rewardCode: ee,
            selectedPlatformType: M,
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
    E && null != ee ? (ei = q.NW.string(q.t.srzsU1)) : null != ee ? (ei = q.NW.string(q.t.PJBpdX)) : et && (ei = q.NW.string(q.t.JRU8dn));
    let el =
            null != ei
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: L.heading,
                      children: ei
                  })
                : null,
        ed = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = R.r.build(t.config);
            if (o)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: L.bodyCopy,
                    children: s ? q.NW.format(q.t.m0btAQ, {}) : q.NW.format(q.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, N.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != a && null != l
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
        ec = o.useMemo(
            () =>
                k.map((e) => ({
                    label: (0, N.t2)(e),
                    value: e
                })),
            [k]
        ),
        eu = null;
    et &&
        (eu = (0, n.jsxs)(u.xJW, {
            title: q.NW.string(q.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: q.NW.string(q.t.EMrUHR),
                    options: ec,
                    select: (e) => {
                        ea(!1), z(e);
                    },
                    isSelected: (e) => e === M,
                    serialize: (e) => (0, N.t2)(e),
                    className: es ? L.errorInput : '',
                    isDisabled: V,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case T.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: L.platformSelectionOptionIcon });
                                case T.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: L.platformSelectionOptionIcon });
                                case T.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: L.platformSelectionOptionIcon });
                                case T.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: L.platformSelectionOptionIcon });
                                case T.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: L.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: L.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                es ? (0, n.jsx)(u.pdY, { error: q.NW.string(q.t.rbZBMT) }) : null
            ]
        }));
    let ep = null == ee && (Y || V),
        e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != ee
        ? (em = (0, n.jsx)(u.xJW, {
              title: q.NW.string(q.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: Q ? q.NW.string(q.t['0n2u0t']) : ee.code,
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
              title: q.NW.string(q.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: q.NW.string(q.t.rbZBMT),
                  inputClassName: L.errorInput
              })
          }));
    let ef = o.useMemo(
            () =>
                K
                    ? (0, N.o9)({
                          quest: s,
                          idx: null == ee ? void 0 : ee.tier
                      })
                    : (0, N.o9)({
                          quest: s,
                          idx: 0
                      }),
            [K, s, null == ee ? void 0 : ee.tier]
        ),
        eC = o.useMemo(() => ((null == ef ? void 0 : ef.redemptionLink) == null || '' === ef.redemptionLink ? null : (null == ee ? void 0 : ee.code) == null || '' === ee.code ? ef.redemptionLink : ef.redemptionLink.replace(B.Dp, encodeURIComponent(ee.code))), [ef, ee]),
        eg = (0, I.G)({
            claimCode: er,
            fetchCode: en,
            hasError: es,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: et,
            selectedPlatformType: M,
            redemptionLink: eC
        }),
        eb = et && V,
        eh = !eb && ((et && null == M) || ep),
        ew = null != eC && '' !== eC,
        ey = q.NW.string(q.t['23SS+/']);
    et ? (ey = q.NW.string(q.t.SLZMi4)) : !et && es ? (ey = q.NW.string(q.t.gNJHHh)) : ew && (ey = q.NW.string(q.t['+zx47e']));
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
                    (F.current = e), (C.current = e);
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
                                    onClick: () => a()
                                }),
                                !eO &&
                                    (0, n.jsx)(W.p, {
                                        source: B.dr.REWARD_CODE_MODAL,
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
                                        ed,
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
                                                        children: q.NW.format(q.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
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
                    sprites: A.CA,
                    colors: A.Br
                })
        ]
    });
}
