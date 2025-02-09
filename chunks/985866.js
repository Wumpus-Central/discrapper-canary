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
    f = r(448986),
    C = r(410030),
    h = r(607070),
    g = r(475271),
    b = r(530618),
    w = r(454585),
    x = r(246946),
    v = r(572004),
    y = r(302221),
    T = r(617136),
    S = r(113434),
    I = r(569984),
    B = r(497505),
    R = r(918701),
    j = r(804127),
    k = r(566078),
    E = r(617889),
    q = r(602667),
    A = r(652380),
    W = r(644646),
    N = r(78826),
    P = r(46140),
    O = r(675654),
    D = r(388032),
    L = r(344816);
function Z(e) {
    var t;
    let { quest: r, rewardCode: a, hasTieredRewardCodes: o } = e,
        i = (0, c.wj)((0, C.ZP)()),
        l = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, y.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, y.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, E.B)(r, !1),
        _ = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a,
        { header: m, subHeader: f } = (function (e) {
            var t, r, n, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : D.intl.string(D.t.UUKbio),
                c = i
                    ? (0, R.o9)({
                          quest: o,
                          idx: null !== (n = null == s ? void 0 : s.tier) && void 0 !== n ? n : null === (r = o.userStatus) || void 0 === r ? void 0 : r.claimedTier
                      })
                    : null,
                u = k.r.build(o.config),
                p = null != c && null !== (a = c.messages.name) && void 0 !== a ? a : u.defaultReward.messages.name,
                _ = i ? D.intl.string(D.t.cfY4PD) : u.defaultReward.messages.name;
            return {
                subHeader: l ? D.intl.string(D.t.YpswQk) : d,
                header: l ? p : _
            };
        })({
            quest: r,
            rewardCode: a,
            hasTieredRewardCodes: o
        }),
        { hasError: h, isLoading: g } = (0, N.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: L.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: L.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    g &&
                        !h &&
                        (0, n.jsx)(u.$jN, {
                            className: L.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    h && (0, n.jsx)(u.fFY, { className: L.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(W.Z, {
                        className: s()(L.rewardTileAsset, { [L.rewardTileAssetLoading]: g || h }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: P.dr.REWARD_CODE_MODAL
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
    let t = (0, l.e7)([I.Z], () => I.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(q.A, {
              questOrQuests: t,
              questContent: B.jn.REWARD_MODAL,
              children: (r) =>
                  (0, n.jsx)(U, {
                      ...e,
                      impressionRef: r,
                      quest: t,
                      preview: e.preview
                  })
          })
        : null;
}
function U(e) {
    var t;
    let { transitionState: r, onClose: o, quest: s, location: d, questContentPosition: c, preview: C, impressionRef: y } = e,
        E = (0, _.Z)(() => {
            var e;
            return (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }),
        q = k.r.build(s.config).rewardPlatforms,
        W = q.length > 1,
        [M, U] = a.useState(W ? null : q[0]),
        z = a.useRef(new i.qA()),
        H = a.useRef(null),
        [F, G] = a.useState(null),
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
        V = (0, T.O5)(),
        K = (0, R.oo)({ quest: s }),
        ee = !0 === C ? (0, A.b)(s) : J,
        et = W && (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == ee,
        {
            claimCode: er,
            fetchCode: en,
            hasError: ea,
            setHasError: eo
        } = (0, j.u)({
            isClaimingReward: $,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: d,
            requiresPlatformSelection: et,
            rewardCode: ee,
            selectedPlatformType: M,
            preview: C
        }),
        es = ea && !$ && !Y;
    !(function (e) {
        let t = (0, f.Z)(e),
            r = g.default.useIsCaptchaModalOpen(),
            n = (0, m.Z)(r),
            o = !!(!r && n);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        eo(!0);
    });
    let ei = null;
    E && null != ee ? (ei = D.intl.string(D.t.srzsU1)) : null != ee ? (ei = D.intl.string(D.t.PJBpdX)) : et && (ei = D.intl.string(D.t.JRU8dn));
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
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: a, rewardCode: o, hasTieredRewardCodes: s } = e,
                i = k.r.build(t.config);
            if (a)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: L.bodyCopy,
                    children: s ? D.intl.format(D.t.m0btAQ, {}) : D.intl.format(D.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, R.C1)({
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
        ec = a.useMemo(
            () =>
                q.map((e) => ({
                    label: (0, R.t2)(e),
                    value: e
                })),
            [q]
        ),
        eu = null;
    et &&
        (eu = (0, n.jsxs)(u.xJW, {
            title: D.intl.string(D.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: D.intl.string(D.t.EMrUHR),
                    options: ec,
                    select: (e) => {
                        eo(!1), U(e);
                    },
                    isSelected: (e) => e === M,
                    serialize: (e) => (0, R.t2)(e),
                    className: es ? L.errorInput : '',
                    isDisabled: $,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case B.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: L.platformSelectionOptionIcon });
                                case B.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: L.platformSelectionOptionIcon });
                                case B.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: L.platformSelectionOptionIcon });
                                case B.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: L.platformSelectionOptionIcon });
                                case B.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: L.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: L.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                es ? (0, n.jsx)(u.pdY, { error: D.intl.string(D.t.rbZBMT) }) : null
            ]
        }));
    let ep = null == ee && (Y || $),
        e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
        em = null;
    null != ee
        ? (em = (0, n.jsx)(u.xJW, {
              title: D.intl.string(D.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: Q ? D.intl.string(D.t['0n2u0t']) : ee.code,
                  delay: 1000,
                  buttonColor: u.zxk.Colors.BRAND,
                  onCopy: () => {
                      Q && (0, v.JG)(ee.code),
                          V({
                              questId: s.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: T.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : es &&
          !et &&
          (em = (0, n.jsx)(u.xJW, {
              title: D.intl.string(D.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: D.intl.string(D.t.rbZBMT),
                  inputClassName: L.errorInput
              })
          }));
    let ef = (0, j.G)({
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
        eC = et && $,
        eh = !eC && ((et && null == M) || ep),
        eg = D.intl.string(D.t['23SS+/']);
    et ? (eg = D.intl.string(D.t.SLZMi4)) : !et && es && (eg = D.intl.string(D.t.gNJHHh));
    let eb = !X && null != ee && !E && !es,
        ew = null != e_ && K,
        ex = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: G,
                className: L.confettiCanvas,
                environment: z.current
            }),
            (0, n.jsx)('div', {
                ref: (e) => {
                    (H.current = e), (y.current = e);
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
                                !ew &&
                                    (0, n.jsx)(N.p, {
                                        source: P.dr.REWARD_CODE_MODAL,
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
                                            null != ex &&
                                            (0, n.jsxs)('div', {
                                                className: L.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: L.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ex.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: L.cosponsorName,
                                                        children: D.intl.format(D.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
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
                                onClick: ef,
                                submitting: eC,
                                disabled: eh,
                                children: eg
                            })
                        })
                    ]
                })
            }),
            eb &&
                (0, n.jsx)(b.Z, {
                    confettiTarget: H.current,
                    confettiCanvas: F,
                    sprites: O.CA,
                    colors: O.Br
                })
        ]
    });
}
