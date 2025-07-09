(r.d(t, { default: () => z }), r(388685), r(704826), r(35282));
var n = r(255367),
    o = r(73800),
    a = r(120356),
    s = r.n(a),
    i = r(505266),
    l = r(442837),
    c = r(692547),
    d = r(780384),
    u = r(755721),
    p = r(481060),
    _ = r(484614),
    f = r(211266),
    m = r(110924),
    C = r(448986),
    h = r(410030),
    b = r(607070),
    g = r(475271),
    y = r(530618),
    w = r(454585),
    O = r(246946),
    v = r(572004),
    x = r(302221),
    j = r(617136),
    S = r(113434),
    E = r(569984),
    R = r(497505),
    T = r(918701),
    I = r(192023),
    P = r(373370),
    k = r(804127),
    A = r(566078),
    N = r(617889),
    B = r(602667),
    D = r(652380),
    q = r(644646),
    L = r(78826),
    Z = r(46140),
    M = r(675654),
    W = r(388032),
    V = r(442686);
function U(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a, sourceQuestContent: i } = e,
        l = (0, d.wj)((0, h.ZP)()),
        u = (0, I.h)({
            location: Z.dr.REWARD_CODE_MODAL,
            questConfig: r.config
        }),
        _ = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = u ? _ : r.config.colors.primary,
        m = {
            border: '1px solid '.concat(f),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, x.aD)(f, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, x.aD)(f, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        C = (0, N.B)(r, !1),
        b = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: g, subHeader: y } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i, claimRewardCopy: l } = e,
                c = (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : W.intl.string(W.t.UUKbio),
                u = i
                    ? (0, T.o9)({
                          quest: a,
                          idx: null != (n = null == s ? void 0 : s.tier) ? n : null == (r = a.userStatus) ? void 0 : r.claimedTier
                      })
                    : null,
                p = A.r.build(a.config),
                _ = null != u && null != (o = u.messages.name) ? o : p.defaultRewardName,
                f = i ? l : p.defaultRewardName;
            return {
                subHeader: c ? W.intl.string(W.t.YpswQk) : d,
                header: c ? _ : f
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a,
            claimRewardCopy: (0, P.up)(Z.dr.REWARD_CODE_MODAL)
        }),
        { hasError: w, isLoading: O } = (0, L.d7)();
    return (0, n.jsxs)('div', {
        style: m,
        className: V.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: V.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': u ? _ : r.config.colors.primary },
                children: [
                    O &&
                        !w &&
                        (0, n.jsx)(p.$jN, {
                            className: V.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE
                        }),
                    w && (0, n.jsx)(p.fFY, { className: V.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(q.Z, {
                        className: s()(V.rewardTileAsset, { [V.rewardTileAssetLoading]: O || w }),
                        quest: r,
                        questContent: C.trackingCtx.content,
                        location: Z.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: i
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: V.rewardSubheading,
                children: [
                    b &&
                        (0, n.jsx)(p.kmB, {
                            size: 'xs',
                            color: c.Z.colors.TEXT_MUTED,
                            className: V.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(p.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: V.rewardSubheadingText,
                        children: y
                    })
                ]
            }),
            (0, n.jsx)(p.X6q, {
                variant: 'display-sm',
                color: 'header-primary',
                className: V.rewardHeading,
                children: g
            })
        ]
    });
}
function z(e) {
    let t = (0, l.e7)([E.Z], () => E.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(B.A, {
              questOrQuests: t,
              questContent: R.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (r) => {
                  var o, a;
                  return (0, n.jsx)(
                      F,
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
function F(e) {
    var t;
    let { transitionState: r, onClose: a, quest: s, questContent: c, questContentPosition: d, impressionRef: h, preview: x, sourceQuestContent: I } = e,
        P = (0, f.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        N = A.r.build(s.config).rewardPlatforms,
        B = N.length > 1,
        [q, z] = o.useState(B ? null : N[0]),
        F = o.useRef(new i.qA()),
        Q = o.useRef(null),
        [G, X] = o.useState(null),
        H = (0, l.e7)([b.Z], () => b.Z.useReducedMotion),
        $ = (0, l.e7)([O.Z], () => O.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: Y,
            isClaimingReward: K
        } = (0, l.cj)([E.Z], () => ({
            questStoreRewardCode: E.Z.getRewardCode(s.id),
            isFetchingRewardCode: E.Z.isFetchingRewardCode(s.id),
            isClaimingReward: E.Z.isClaimingReward(s.id)
        })),
        ee = (0, j.O5)(),
        et = (0, T.oo)({ quest: s }),
        er = !0 === x ? (0, D.b)(s) : J,
        en = B && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == er,
        {
            claimCode: eo,
            fetchCode: ea,
            hasError: es,
            setHasError: ei
        } = (0, k.u)({
            isClaimingReward: K,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: c,
            requiresPlatformSelection: en,
            rewardCode: er,
            selectedPlatformType: q,
            preview: x
        }),
        el = es && !K && !Y;
    !(function (e) {
        let t = (0, C.Z)(e),
            r = g.default.useIsCaptchaModalOpen(),
            n = (0, m.Z)(r),
            a = !!(!r && n);
        o.useEffect(() => {
            a && t();
        }, [a, t]);
    })(() => {
        ei(!0);
    });
    let ec = null;
    P && null != er ? (ec = W.intl.string(W.t.srzsU1)) : null != er ? (ec = W.intl.string(W.t.PJBpdX)) : en && (ec = W.intl.string(W.t.JRU8dn));
    let ed =
            null != ec
                ? (0, n.jsx)(p.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: V.heading,
                      children: ec
                  })
                : null,
        eu = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = A.r.build(t.config);
            if (o)
                return (0, n.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-default',
                    className: V.bodyCopy,
                    children: s ? W.intl.format(W.t.m0btAQ, {}) : W.intl.format(W.t['ZUA/Ul'], { rewardName: i.defaultRewardName })
                });
            let l = (0, T.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != a && null != l
                ? (0, n.jsx)(p.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-default',
                      className: V.bodyCopy,
                      children: w.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: q,
            requiresPlatformSelection: en,
            rewardCode: er,
            hasTieredRewardCodes: et
        }),
        ep = o.useMemo(
            () =>
                N.map((e) => ({
                    label: (0, T.t2)(e),
                    value: e
                })),
            [N]
        ),
        e_ = null;
    en &&
        (e_ = (0, n.jsxs)(p.xJW, {
            title: W.intl.string(W.t.vVcTtL),
            children: [
                (0, n.jsx)(p.PhF, {
                    placeholder: W.intl.string(W.t.EMrUHR),
                    options: ep,
                    select: (e) => {
                        (ei(!1), z(e));
                    },
                    isSelected: (e) => e === q,
                    serialize: (e) => (0, T.t2)(e),
                    className: el ? V.errorInput : '',
                    isDisabled: K,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case R.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(p.Che, { className: V.platformSelectionOptionIcon });
                                case R.y$.PC:
                                    return (0, n.jsx)(p.pzj, { className: V.platformSelectionOptionIcon });
                                case R.y$.PLAYSTATION:
                                    return (0, n.jsx)(p.Tsp, { className: V.platformSelectionOptionIcon });
                                case R.y$.SWITCH:
                                    return (0, n.jsx)(p.aPH, { className: V.platformSelectionOptionIcon });
                                case R.y$.XBOX:
                                    return (0, n.jsx)(p.Mko, { className: V.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: V.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                el ? (0, n.jsx)(p.pdY, { error: W.intl.string(W.t.rbZBMT) }) : null
            ]
        }));
    let ef = null == er && (Y || K),
        em = ef && !en ? (0, n.jsx)(p.$jN, {}) : null,
        eC = null;
    null != er
        ? (eC = (0, n.jsx)(p.xJW, {
              title: W.intl.string(W.t.srzsU1),
              children: (0, n.jsx)(_.Z, {
                  value: $ ? W.intl.string(W.t['0n2u0t']) : er.code,
                  delay: 1000,
                  buttonColor: u.zx.Colors.BRAND,
                  onCopy: () => {
                      ($ && (0, v.JG)(er.code),
                          ee({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: j.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: I
                          }));
                  }
              })
          }))
        : el &&
          !en &&
          (eC = (0, n.jsx)(p.xJW, {
              title: W.intl.string(W.t.srzsU1),
              children: (0, n.jsx)(p.oil, {
                  disabled: !0,
                  error: W.intl.string(W.t.rbZBMT),
                  inputClassName: V.errorInput
              })
          }));
    let eh = o.useMemo(
            () =>
                et
                    ? (0, T.o9)({
                          quest: s,
                          idx: null == er ? void 0 : er.tier
                      })
                    : (0, T.o9)({
                          quest: s,
                          idx: 0
                      }),
            [et, s, null == er ? void 0 : er.tier]
        ),
        eb = o.useMemo(() => ((null == eh ? void 0 : eh.redemptionLink) == null || '' === eh.redemptionLink ? null : (null == er ? void 0 : er.code) == null || '' === er.code ? eh.redemptionLink : eh.redemptionLink.replace(Z.Dp, encodeURIComponent(er.code))), [eh, er]),
        eg = (0, k.G)({
            claimCode: eo,
            fetchCode: ea,
            hasError: el,
            onDismiss: a,
            quest: s,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: en,
            selectedPlatformType: q,
            redemptionLink: eb,
            sourceQuestContent: I
        }),
        ey = en && K,
        ew = !ey && ((en && null == q) || ef),
        eO = null != eb && '' !== eb,
        ev = W.intl.string(W.t['23SS+/']);
    en ? (ev = W.intl.string(W.t.SLZMi4)) : !en && el ? (ev = W.intl.string(W.t.gNJHHh)) : eO && (ev = W.intl.string(W.t['+zx47e']));
    let ex = !H && null != er && !P && !el,
        ej = null != em && et,
        eS = (0, S.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: X,
                className: V.confettiCanvas,
                environment: F.current
            }),
            (0, n.jsx)('div', {
                ref: (e) => {
                    ((Q.current = e), (h.current = e));
                },
                children: (0, n.jsxs)(p.Y0X, {
                    transitionState: r,
                    size: p.CgR.DYNAMIC,
                    parentComponent: 'QuestsRewardCodeModal',
                    children: [
                        (0, n.jsxs)('div', {
                            className: V.modalBody,
                            children: [
                                (0, n.jsx)(p.olH, {
                                    className: V.closeButton,
                                    onClick: () => a()
                                }),
                                !ej &&
                                    (0, n.jsx)(L.p, {
                                        source: Z.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(U, {
                                            quest: s,
                                            rewardCode: er,
                                            hasTieredRewardCodes: et,
                                            sourceQuestContent: I
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: V.modalContent,
                                    children: [
                                        ed,
                                        eu,
                                        e_,
                                        em,
                                        eC,
                                        null != s.config.cosponsorMetadata &&
                                            null != eS &&
                                            (0, n.jsxs)('div', {
                                                className: V.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: V.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eS.url
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: V.cosponsorName,
                                                        children: W.intl.format(W.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-default',
                                                        className: V.cosponsorRedemptionInstructions,
                                                        children: w.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, !1, { allowLinks: !0 })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(p.mzw, {
                            children: (0, n.jsx)(p.zxk, {
                                variant: 'primary',
                                text: ev,
                                onClick: eg,
                                loading: ey,
                                disabled: ew
                            })
                        })
                    ]
                })
            }),
            ex &&
                (0, n.jsx)(y.Z, {
                    confettiTarget: Q.current,
                    confettiCanvas: G,
                    sprites: M.CA,
                    colors: M.Br
                })
        ]
    });
}
