r.d(t, { default: () => M }), r(47120);
var n = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    i = r(119617),
    l = r(442837),
    d = r(692547),
    c = r(780384),
    u = r(481060),
    p = r(484614),
    _ = r(211266),
    m = r(110924),
    C = r(448986),
    g = r(410030),
    h = r(607070),
    f = r(475271),
    b = r(530618),
    w = r(454585),
    x = r(246946),
    T = r(572004),
    y = r(302221),
    v = r(617136),
    S = r(113434),
    I = r(569984),
    R = r(497505),
    j = r(918701),
    k = r(804127),
    B = r(566078),
    E = r(617889),
    A = r(602667),
    N = r(652380),
    O = r(644646),
    q = r(78826),
    D = r(46140),
    L = r(675654),
    W = r(388032),
    Z = r(993950);
function P(e) {
    var t;
    let { quest: r, rewardCode: a, hasTieredRewardCodes: o } = e,
        i = (0, c.wj)((0, g.ZP)()),
        l = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, y.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, y.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, E.B)(r, !1),
        _ = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a,
        { header: m, subHeader: C } = (function (e) {
            var t, r, n, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : W.intl.string(W.t.UUKbio),
                c = i
                    ? (0, j.o9)({
                          quest: o,
                          idx: null !== (n = null == s ? void 0 : s.tier) && void 0 !== n ? n : null === (r = o.userStatus) || void 0 === r ? void 0 : r.claimedTier
                      })
                    : null,
                u = B.r.build(o.config),
                p = null != c && null !== (a = c.messages.name) && void 0 !== a ? a : u.defaultReward.messages.name,
                _ = i ? W.intl.string(W.t.cfY4PD) : u.defaultReward.messages.name;
            return {
                subHeader: l ? W.intl.string(W.t.YpswQk) : d,
                header: l ? p : _
            };
        })({
            quest: r,
            rewardCode: a,
            hasTieredRewardCodes: o
        }),
        { hasError: h, isLoading: f } = (0, q.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: Z.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: Z.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    f &&
                        !h &&
                        (0, n.jsx)(u.$jN, {
                            className: Z.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    h && (0, n.jsx)(u.fFY, { className: Z.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(O.Z, {
                        className: s()(Z.rewardTileAsset, { [Z.rewardTileAssetLoading]: f || h }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: D.dr.REWARD_CODE_MODAL
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
                        children: C
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
function M(e) {
    let t = (0, l.e7)([I.Z], () => I.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(A.A, {
              questOrQuests: t,
              questContent: R.jn.REWARD_MODAL,
              children: (r) =>
                  (0, n.jsx)(z, {
                      ...e,
                      impressionRef: r,
                      quest: t,
                      preview: e.preview
                  })
          })
        : null;
}
function z(e) {
    var t;
    let { transitionState: r, onClose: o, quest: s, location: d, questContentPosition: c, preview: g, impressionRef: y } = e,
        E = (0, _.Z)(() => {
            var e;
            return (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }),
        A = B.r.build(s.config).rewardPlatforms,
        O = A.length > 1,
        [M, z] = a.useState(O ? null : A[0]),
        U = a.useRef(new i.qA()),
        F = a.useRef(null),
        [G, H] = a.useState(null),
        X = (0, l.e7)([h.Z], () => h.Z.useReducedMotion),
        Q = (0, l.e7)([x.Z], () => x.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: Y,
            isClaimingReward: $
        } = (0, l.cj)([I.Z], () => ({
            questStoreRewardCode: I.Z.getRewardCode(s.id),
            isFetchingRewardCode: I.Z.isFetchingRewardCode(s.id),
            isClaimingReward: I.Z.isClaimingReward(s.id)
        })),
        V = (0, v.O5)(),
        K = (0, j.oo)({ quest: s }),
        ee = !0 === g ? (0, N.b)(s) : J,
        et = O && (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == ee,
        {
            claimCode: er,
            fetchCode: en,
            hasError: ea,
            setHasError: eo
        } = (0, k.u)({
            isClaimingReward: $,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: d,
            requiresPlatformSelection: et,
            rewardCode: ee,
            selectedPlatformType: M,
            preview: g
        }),
        es = ea && !$ && !Y;
    !(function (e) {
        let t = (0, C.Z)(e),
            r = f.default.useIsCaptchaModalOpen(),
            n = (0, m.Z)(r),
            o = !!(!r && n);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        eo(!0);
    });
    let ei = null;
    E && null != ee ? (ei = W.intl.string(W.t.srzsU1)) : null != ee ? (ei = W.intl.string(W.t.PJBpdX)) : et && (ei = W.intl.string(W.t.JRU8dn));
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
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: a, rewardCode: o, hasTieredRewardCodes: s } = e,
                i = B.r.build(t.config);
            if (a)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: Z.bodyCopy,
                    children: s ? W.intl.format(W.t.m0btAQ, {}) : W.intl.format(W.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, j.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != o && null != l
                ? (0, n.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: Z.bodyCopy,
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
        ec = a.useMemo(
            () =>
                A.map((e) => ({
                    label: (0, j.t2)(e),
                    value: e
                })),
            [A]
        ),
        eu = null;
    et &&
        (eu = (0, n.jsxs)(u.xJW, {
            title: W.intl.string(W.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: W.intl.string(W.t.EMrUHR),
                    options: ec,
                    select: (e) => {
                        eo(!1), z(e);
                    },
                    isSelected: (e) => e === M,
                    serialize: (e) => (0, j.t2)(e),
                    className: es ? Z.errorInput : '',
                    isDisabled: $,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case R.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: Z.platformSelectionOptionIcon });
                                case R.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: Z.platformSelectionOptionIcon });
                                case R.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: Z.platformSelectionOptionIcon });
                                case R.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: Z.platformSelectionOptionIcon });
                                case R.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: Z.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: Z.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                es ? (0, n.jsx)(u.pdY, { error: W.intl.string(W.t.rbZBMT) }) : null
            ]
        }));
    let ep = null == ee && (Y || $),
        e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != ee
        ? (em = (0, n.jsx)(u.xJW, {
              title: W.intl.string(W.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: Q ? W.intl.string(W.t['0n2u0t']) : ee.code,
                  delay: 1000,
                  buttonColor: u.zxk.Colors.BRAND,
                  onCopy: () => {
                      Q && (0, T.JG)(ee.code),
                          V({
                              questId: s.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: v.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : es &&
          !et &&
          (em = (0, n.jsx)(u.xJW, {
              title: W.intl.string(W.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: W.intl.string(W.t.rbZBMT),
                  inputClassName: Z.errorInput
              })
          }));
    let eC = (0, k.G)({
            claimCode: er,
            fetchCode: en,
            hasError: es,
            onDismiss: o,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: et,
            selectedPlatformType: M
        }),
        eg = et && $,
        eh = !eg && ((et && null == M) || ep),
        ef = W.intl.string(W.t['23SS+/']);
    et ? (ef = W.intl.string(W.t.SLZMi4)) : !et && es && (ef = W.intl.string(W.t.gNJHHh));
    let eb = !X && null != ee && !E && !es,
        ew = null != e_ && K,
        ex = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: H,
                className: Z.confettiCanvas,
                environment: U.current
            }),
            (0, n.jsx)('div', {
                ref: (e) => {
                    (F.current = e), (y.current = e);
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
                                    onClick: () => o()
                                }),
                                !ew &&
                                    (0, n.jsx)(q.p, {
                                        source: D.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(P, {
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
                                            null != ex &&
                                            (0, n.jsxs)('div', {
                                                className: Z.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: Z.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ex.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: Z.cosponsorName,
                                                        children: W.intl.format(W.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
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
                                onClick: eC,
                                submitting: eg,
                                disabled: eh,
                                children: ef
                            })
                        })
                    ]
                })
            }),
            eb &&
                (0, n.jsx)(b.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: G,
                    sprites: L.CA,
                    colors: L.Br
                })
        ]
    });
}
