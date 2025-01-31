r.d(t, { default: () => D }), r(47120);
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
    m = r(410030),
    C = r(607070),
    g = r(530618),
    b = r(454585),
    f = r(246946),
    h = r(572004),
    w = r(302221),
    x = r(617136),
    T = r(113434),
    S = r(569984),
    v = r(497505),
    y = r(918701),
    I = r(804127),
    R = r(566078),
    j = r(617889),
    B = r(652380),
    N = r(644646),
    E = r(78826),
    k = r(46140),
    A = r(675654),
    O = r(388032),
    q = r(993950);
function L(e) {
    var t;
    let { quest: r, rewardCode: a, hasTieredRewardCodes: o } = e,
        i = (0, c.wj)((0, m.ZP)()),
        l = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, w.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, w.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, j.B)(r, !1),
        _ = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a,
        { header: C, subHeader: g } = (function (e) {
            var t, r, n, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : O.intl.string(O.t.UUKbio),
                c = i
                    ? (0, y.o9)({
                          quest: o,
                          idx: null !== (n = null == s ? void 0 : s.tier) && void 0 !== n ? n : null === (r = o.userStatus) || void 0 === r ? void 0 : r.claimedTier
                      })
                    : null,
                u = R.r.build(o.config),
                p = null != c && null !== (a = c.messages.name) && void 0 !== a ? a : u.defaultReward.messages.name,
                _ = i ? O.intl.string(O.t.cfY4PD) : u.defaultReward.messages.name;
            return {
                subHeader: l ? O.intl.string(O.t.YpswQk) : d,
                header: l ? p : _
            };
        })({
            quest: r,
            rewardCode: a,
            hasTieredRewardCodes: o
        }),
        { hasError: b, isLoading: f } = (0, E.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: q.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: q.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    f &&
                        !b &&
                        (0, n.jsx)(u.$jN, {
                            className: q.rewardTileAssetStatusIcon,
                            type: u.RAz.SPINNING_CIRCLE
                        }),
                    b && (0, n.jsx)(u.fFY, { className: q.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(N.Z, {
                        className: s()(q.rewardTileAsset, { [q.rewardTileAssetLoading]: f || b }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: k.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: q.rewardSubheading,
                children: [
                    _ &&
                        (0, n.jsx)(u.kmB, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: q.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: q.rewardSubheadingText,
                        children: g
                    })
                ]
            }),
            (0, n.jsx)(u.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: q.rewardHeading,
                children: C
            })
        ]
    });
}
function D(e) {
    let t = (0, l.e7)([S.Z], () => S.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(W, {
              ...e,
              quest: t,
              preview: e.preview
          })
        : null;
}
function W(e) {
    var t;
    let { transitionState: r, onClose: o, quest: s, location: d, questContentPosition: c, preview: m } = e,
        w = (0, _.Z)(() => {
            var e;
            return (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }),
        j = R.r.build(s.config).rewardPlatforms,
        N = j.length > 1,
        [D, W] = a.useState(N ? null : j[0]),
        P = a.useRef(new i.qA()),
        Z = a.useRef(null),
        [M, z] = a.useState(null),
        U = (0, l.e7)([C.Z], () => C.Z.useReducedMotion),
        F = (0, l.e7)([f.Z], () => f.Z.hidePersonalInformation),
        {
            questStoreRewardCode: G,
            isFetchingRewardCode: H,
            isClaimingReward: X
        } = (0, l.cj)([S.Z], () => ({
            questStoreRewardCode: S.Z.getRewardCode(s.id),
            isFetchingRewardCode: S.Z.isFetchingRewardCode(s.id),
            isClaimingReward: S.Z.isClaimingReward(s.id)
        })),
        J = (0, x.O5)(),
        Q = (0, y.oo)({ quest: s }),
        Y = !0 === m ? (0, B.b)(s) : G,
        $ = N && (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == Y,
        {
            claimCode: V,
            fetchCode: K,
            hasError: ee,
            setHasError: et
        } = (0, I.u)({
            isClaimingReward: X,
            isFetchingRewardCode: H,
            quest: s,
            questContent: d,
            requiresPlatformSelection: $,
            rewardCode: Y,
            selectedPlatformType: D,
            preview: m
        }),
        er = null;
    w && null != Y ? (er = O.intl.string(O.t.srzsU1)) : null != Y ? (er = O.intl.string(O.t.PJBpdX)) : $ && (er = O.intl.string(O.t.JRU8dn));
    let en =
            null != er
                ? (0, n.jsx)(u.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: q.heading,
                      children: er
                  })
                : null,
        ea = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: a, rewardCode: o, hasTieredRewardCodes: s } = e,
                i = R.r.build(t.config);
            if (a)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: q.bodyCopy,
                    children: s ? O.intl.format(O.t.m0btAQ, {}) : O.intl.format(O.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, y.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != o && null != l
                ? (0, n.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: q.bodyCopy,
                      children: b.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: D,
            requiresPlatformSelection: $,
            rewardCode: Y,
            hasTieredRewardCodes: Q
        }),
        eo = a.useMemo(
            () =>
                j.map((e) => ({
                    label: (0, y.t2)(e),
                    value: e
                })),
            [j]
        ),
        es = null;
    $ &&
        (es = (0, n.jsxs)(u.xJW, {
            title: O.intl.string(O.t.vVcTtL),
            children: [
                (0, n.jsx)(u.PhF, {
                    placeholder: O.intl.string(O.t.EMrUHR),
                    options: eo,
                    select: (e) => {
                        et(!1), W(e);
                    },
                    isSelected: (e) => e === D,
                    serialize: (e) => (0, y.t2)(e),
                    className: ee ? q.errorInput : '',
                    isDisabled: X,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case v.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.Che, { className: q.platformSelectionOptionIcon });
                                case v.y$.PC:
                                    return (0, n.jsx)(u.pzj, { className: q.platformSelectionOptionIcon });
                                case v.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.Tsp, { className: q.platformSelectionOptionIcon });
                                case v.y$.SWITCH:
                                    return (0, n.jsx)(u.aPH, { className: q.platformSelectionOptionIcon });
                                case v.y$.XBOX:
                                    return (0, n.jsx)(u.Mko, { className: q.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: q.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                ee ? (0, n.jsx)(u.pdY, { error: O.intl.string(O.t.rbZBMT) }) : null
            ]
        }));
    let ei = null == Y && (H || X),
        el = ei && !$ ? (0, n.jsx)(u.$jN, {}) : null,
        ed = null;
    null != Y
        ? (ed = (0, n.jsx)(u.xJW, {
              title: O.intl.string(O.t.srzsU1),
              children: (0, n.jsx)(p.Z, {
                  value: F ? O.intl.string(O.t['0n2u0t']) : Y.code,
                  delay: 1000,
                  buttonColor: u.zxk.Colors.BRAND,
                  onCopy: () => {
                      F && (0, h.JG)(Y.code),
                          J({
                              questId: s.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: x.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : ee &&
          !$ &&
          (ed = (0, n.jsx)(u.xJW, {
              title: O.intl.string(O.t.srzsU1),
              children: (0, n.jsx)(u.oil, {
                  disabled: !0,
                  error: O.intl.string(O.t.rbZBMT),
                  inputClassName: q.errorInput
              })
          }));
    let ec = (0, I.G)({
            claimCode: V,
            fetchCode: K,
            hasError: ee,
            onDismiss: o,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: $,
            selectedPlatformType: D
        }),
        eu = $ && X,
        ep = !eu && (($ && null == D) || ei),
        e_ = O.intl.string(O.t['23SS+/']);
    $ ? (e_ = O.intl.string(O.t.SLZMi4)) : !$ && ee && (e_ = O.intl.string(O.t.gNJHHh));
    let em = !U && null != Y && !w && !ee,
        eC = null != el && Q,
        eg = (0, T.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: z,
                className: q.confettiCanvas,
                environment: P.current
            }),
            (0, n.jsx)('div', {
                ref: Z,
                children: (0, n.jsxs)(u.Y0X, {
                    transitionState: r,
                    size: u.CgR.DYNAMIC,
                    children: [
                        (0, n.jsxs)('div', {
                            className: q.modalBody,
                            children: [
                                (0, n.jsx)(u.olH, {
                                    className: q.closeButton,
                                    onClick: () => o()
                                }),
                                !eC &&
                                    (0, n.jsx)(E.p, {
                                        source: k.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(L, {
                                            quest: s,
                                            rewardCode: Y,
                                            hasTieredRewardCodes: Q
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: q.modalContent,
                                    children: [
                                        en,
                                        ea,
                                        es,
                                        el,
                                        ed,
                                        null != s.config.cosponsorMetadata &&
                                            null != eg &&
                                            (0, n.jsxs)('div', {
                                                className: q.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: q.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eg.url
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: q.cosponsorName,
                                                        children: O.intl.format(O.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-normal',
                                                        className: q.cosponsorRedemptionInstructions,
                                                        children: b.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, !1, { allowLinks: !0 })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(u.mzw, {
                            children: (0, n.jsx)(u.zxk, {
                                onClick: ec,
                                submitting: eu,
                                disabled: ep,
                                children: e_
                            })
                        })
                    ]
                })
            }),
            em &&
                (0, n.jsx)(g.Z, {
                    confettiTarget: Z.current,
                    confettiCanvas: M,
                    sprites: A.CA,
                    colors: A.Br
                })
        ]
    });
}
