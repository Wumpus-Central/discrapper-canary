r.r(t),
    r.d(t, {
        default: function () {
            return M;
        }
    }),
    r(47120);
var n = r(200651),
    o = r(192379),
    a = r(120356),
    s = r.n(a),
    i = r(119617),
    l = r(442837),
    d = r(692547),
    c = r(780384),
    p = r(481060),
    u = r(484614),
    m = r(211266),
    f = r(410030),
    _ = r(607070),
    C = r(530618),
    g = r(454585),
    h = r(246946),
    b = r(572004),
    w = r(302221),
    x = r(617136),
    T = r(113434),
    I = r(569984),
    S = r(497505),
    v = r(918701),
    y = r(804127),
    B = r(566078),
    R = r(617889),
    j = r(652380),
    N = r(644646),
    E = r(78826),
    W = r(46140),
    q = r(675654),
    A = r(388032),
    L = r(993950);
function P(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a } = e,
        i = (0, c.wj)((0, f.ZP)()),
        l = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, w.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, w.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        u = (0, R.B)(r, !1),
        m = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o,
        { header: _, subHeader: C } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : A.intl.string(A.t.UUKbio),
                c = i
                    ? (0, v.o9)({
                          quest: a,
                          idx: null !== (n = null == s ? void 0 : s.tier) && void 0 !== n ? n : null === (r = a.userStatus) || void 0 === r ? void 0 : r.claimedTier
                      })
                    : null,
                p = B.r.build(a.config),
                u = null != c && null !== (o = c.messages.name) && void 0 !== o ? o : p.defaultReward.messages.name,
                m = i ? A.intl.string(A.t.cfY4PD) : p.defaultReward.messages.name;
            return {
                subHeader: l ? A.intl.string(A.t.YpswQk) : d,
                header: l ? u : m
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a
        }),
        { hasError: g, isLoading: h } = (0, E.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: L.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: L.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    h &&
                        !g &&
                        (0, n.jsx)(p.Spinner, {
                            className: L.rewardTileAssetStatusIcon,
                            type: p.SpinnerTypes.SPINNING_CIRCLE
                        }),
                    g && (0, n.jsx)(p.ImageWarningIcon, { className: L.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(N.Z, {
                        className: s()(L.rewardTileAsset, { [L.rewardTileAssetLoading]: h || g }),
                        quest: r,
                        questContent: u.trackingCtx.content,
                        location: W.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: L.rewardSubheading,
                children: [
                    m &&
                        (0, n.jsx)(p.CheckmarkSmallIcon, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: L.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(p.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: L.rewardSubheadingText,
                        children: C
                    })
                ]
            }),
            (0, n.jsx)(p.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: L.rewardHeading,
                children: _
            })
        ]
    });
}
function M(e) {
    let t = (0, l.e7)([I.Z], () => I.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(k, {
              ...e,
              quest: t,
              preview: e.preview
          })
        : null;
}
function k(e) {
    var t;
    let { transitionState: r, onClose: a, quest: s, location: d, questContentPosition: c, preview: f } = e,
        w = (0, m.Z)(() => {
            var e;
            return (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }),
        R = B.r.build(s.config).rewardPlatforms,
        N = R.length > 1,
        [M, k] = o.useState(N ? null : R[0]),
        O = o.useRef(new i.qA()),
        Z = o.useRef(null),
        [D, U] = o.useState(null),
        F = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        G = (0, l.e7)([h.Z], () => h.Z.hidePersonalInformation),
        {
            questStoreRewardCode: H,
            isFetchingRewardCode: X,
            isClaimingReward: Q
        } = (0, l.cj)([I.Z], () => ({
            questStoreRewardCode: I.Z.getRewardCode(s.id),
            isFetchingRewardCode: I.Z.isFetchingRewardCode(s.id),
            isClaimingReward: I.Z.isClaimingReward(s.id)
        })),
        z = (0, x.O5)(),
        J = (0, v.oo)({ quest: s }),
        Y = !0 === f ? (0, j.b)(s) : H,
        $ = N && (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == Y,
        {
            claimCode: V,
            fetchCode: K,
            hasError: ee,
            setHasError: et
        } = (0, y.u)({
            isClaimingReward: Q,
            isFetchingRewardCode: X,
            quest: s,
            questContent: d,
            requiresPlatformSelection: $,
            rewardCode: Y,
            selectedPlatformType: M,
            preview: f
        }),
        er = null;
    w && null != Y ? (er = A.intl.string(A.t.srzsU1)) : null != Y ? (er = A.intl.string(A.t.PJBpdX)) : $ && (er = A.intl.string(A.t.JRU8dn));
    let en =
            null != er
                ? (0, n.jsx)(p.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: L.heading,
                      children: er
                  })
                : null,
        eo = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = B.r.build(t.config);
            if (o)
                return (0, n.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: L.bodyCopy,
                    children: s ? A.intl.format(A.t.m0btAQ, {}) : A.intl.format(A.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, v.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != a && null != l
                ? (0, n.jsx)(p.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: L.bodyCopy,
                      children: g.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: M,
            requiresPlatformSelection: $,
            rewardCode: Y,
            hasTieredRewardCodes: J
        }),
        ea = o.useMemo(
            () =>
                R.map((e) => ({
                    label: (0, v.t2)(e),
                    value: e
                })),
            [R]
        ),
        es = null;
    $ &&
        (es = (0, n.jsxs)(p.FormItem, {
            title: A.intl.string(A.t.vVcTtL),
            children: [
                (0, n.jsx)(p.Select, {
                    placeholder: A.intl.string(A.t.EMrUHR),
                    options: ea,
                    select: (e) => {
                        et(!1), k(e);
                    },
                    isSelected: (e) => e === M,
                    serialize: (e) => (0, v.t2)(e),
                    className: ee ? L.errorInput : '',
                    isDisabled: Q,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case S.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(p.ScienceIcon, { className: L.platformSelectionOptionIcon });
                                case S.y$.PC:
                                    return (0, n.jsx)(p.ScreenIcon, { className: L.platformSelectionOptionIcon });
                                case S.y$.PLAYSTATION:
                                    return (0, n.jsx)(p.PlaystationNeutralIcon, { className: L.platformSelectionOptionIcon });
                                case S.y$.SWITCH:
                                    return (0, n.jsx)(p.NintendoSwitchNeutralIcon, { className: L.platformSelectionOptionIcon });
                                case S.y$.XBOX:
                                    return (0, n.jsx)(p.XboxNeutralIcon, { className: L.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: L.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                ee ? (0, n.jsx)(p.InputError, { error: A.intl.string(A.t.rbZBMT) }) : null
            ]
        }));
    let ei = null == Y && (X || Q),
        el = ei && !$ ? (0, n.jsx)(p.Spinner, {}) : null,
        ed = null;
    null != Y
        ? (ed = (0, n.jsx)(p.FormItem, {
              title: A.intl.string(A.t.srzsU1),
              children: (0, n.jsx)(u.Z, {
                  value: G ? A.intl.string(A.t['0n2u0t']) : Y.code,
                  delay: 1000,
                  buttonColor: p.Button.Colors.BRAND,
                  onCopy: () => {
                      G && (0, b.JG)(Y.code),
                          z({
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
          (ed = (0, n.jsx)(p.FormItem, {
              title: A.intl.string(A.t.srzsU1),
              children: (0, n.jsx)(p.TextInput, {
                  disabled: !0,
                  error: A.intl.string(A.t.rbZBMT),
                  inputClassName: L.errorInput
              })
          }));
    let ec = (0, y.G)({
            claimCode: V,
            fetchCode: K,
            hasError: ee,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: $,
            selectedPlatformType: M
        }),
        ep = $ && Q,
        eu = !ep && (($ && null == M) || ei),
        em = A.intl.string(A.t['23SS+/']);
    $ ? (em = A.intl.string(A.t.SLZMi4)) : !$ && ee && (em = A.intl.string(A.t.gNJHHh));
    let ef = !F && null != Y && !w && !ee,
        e_ = null != el && J,
        eC = (0, T.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: U,
                className: L.confettiCanvas,
                environment: O.current
            }),
            (0, n.jsx)('div', {
                ref: Z,
                children: (0, n.jsxs)(p.ModalRoot, {
                    transitionState: r,
                    size: p.ModalSize.DYNAMIC,
                    children: [
                        (0, n.jsxs)('div', {
                            className: L.modalBody,
                            children: [
                                (0, n.jsx)(p.ModalCloseButton, {
                                    className: L.closeButton,
                                    onClick: () => a()
                                }),
                                !e_ &&
                                    (0, n.jsx)(E.p, {
                                        source: W.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(P, {
                                            quest: s,
                                            rewardCode: Y,
                                            hasTieredRewardCodes: J
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: L.modalContent,
                                    children: [
                                        en,
                                        eo,
                                        es,
                                        el,
                                        ed,
                                        null != s.config.cosponsorMetadata &&
                                            null != eC &&
                                            (0, n.jsxs)('div', {
                                                className: L.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: L.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eC.url
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: L.cosponsorName,
                                                        children: A.intl.format(A.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-normal',
                                                        className: L.cosponsorRedemptionInstructions,
                                                        children: g.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, !1, { allowLinks: !0 })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(p.ModalFooter, {
                            children: (0, n.jsx)(p.Button, {
                                onClick: ec,
                                submitting: ep,
                                disabled: eu,
                                children: em
                            })
                        })
                    ]
                })
            }),
            ef &&
                (0, n.jsx)(C.Z, {
                    confettiTarget: Z.current,
                    confettiCanvas: D,
                    sprites: q.CA,
                    colors: q.Br
                })
        ]
    });
}
