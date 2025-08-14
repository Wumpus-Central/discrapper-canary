r.d(t, { default: () => z }), r(388685), r(704826), r(35282);
var n = r(255367),
    o = r(73800),
    a = r(120356),
    s = r.n(a),
    l = r(505266),
    i = r(442837),
    c = r(692547),
    u = r(780384),
    d = r(755721),
    p = r(481060),
    m = r(484614),
    f = r(211266),
    b = r(110924),
    h = r(448986),
    y = r(410030),
    O = r(607070),
    g = r(475271),
    C = r(530618),
    j = r(454585),
    v = r(246946),
    w = r(572004),
    S = r(302221),
    x = r(617136),
    _ = r(509212),
    R = r(113434),
    P = r(569984),
    E = r(497505),
    A = r(381176),
    N = r(804127),
    T = r(566078),
    I = r(617889),
    D = r(602667),
    k = r(652380),
    Z = r(644646),
    L = r(78826),
    M = r(46140),
    q = r(675654),
    V = r(388032),
    U = r(777738);
function B(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a, sourceQuestContent: l } = e,
        i = (0, u.wj)((0, y.ZP)()),
        d = (0, A.h)({
            location: M.dr.REWARD_CODE_MODAL,
            questConfig: r.config,
        }),
        m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = d ? m : r.config.colors.primary,
        b = {
            border: "1px solid ".concat(f),
            background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                    (0, S.aD)(f, 0.2),
                    " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat((0, S.aD)(f, 0.6), " 44%,\n      transparent 76%\n    ),\n    ")
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
        },
        h = (0, I.B)(r, !1),
        O = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != o,
        { header: g, subHeader: C } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: l } = e,
                i = (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = l ? "" : V.intl.string(V.t.UUKbio),
                u = l
                    ? (0, _.o9)({
                          quest: a,
                          idx:
                              null != (n = null == s ? void 0 : s.tier)
                                  ? n
                                  : null == (r = a.userStatus)
                                    ? void 0
                                    : r.claimedTier,
                      })
                    : null,
                d = T.r.build(a.config),
                p = null != u && null != (o = u.messages.name) ? o : d.defaultRewardName,
                m = l ? V.intl.string(V.t.cfY4PD) : d.defaultRewardName;
            return {
                subHeader: i ? V.intl.string(V.t.YpswQk) : c,
                header: i ? p : m,
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a,
        }),
        { hasError: j, isLoading: v } = (0, L.d7)();
    return (0, n.jsxs)("div", {
        style: b,
        className: U.rewardTile,
        children: [
            (0, n.jsxs)("div", {
                className: U.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": d ? m : r.config.colors.primary },
                children: [
                    v &&
                        !j &&
                        (0, n.jsx)(p.$jN, {
                            className: U.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE,
                        }),
                    j && (0, n.jsx)(p.fFY, { className: U.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(Z.Z, {
                        className: s()(U.rewardTileAsset, { [U.rewardTileAssetLoading]: v || j }),
                        quest: r,
                        questContent: h.trackingCtx.content,
                        location: M.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: l,
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: U.rewardSubheading,
                children: [
                    O &&
                        (0, n.jsx)(p.kmB, {
                            size: "xs",
                            color: c.Z.colors.TEXT_MUTED,
                            className: U.rewardSubheadingIcon,
                        }),
                    (0, n.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: U.rewardSubheadingText,
                        children: C,
                    }),
                ],
            }),
            (0, n.jsx)(p.X6q, {
                variant: "display-sm",
                color: "header-primary",
                className: U.rewardHeading,
                children: g,
            }),
        ],
    });
}
function z(e) {
    let t = (0, i.e7)([P.Z], () => P.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(D.A, {
              questOrQuests: t,
              questContent: E.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (r) => {
                  var o, a;
                  return (0, n.jsx)(
                      W,
                      ((o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
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
                              preview: e.preview,
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
                      o),
                  );
              },
          })
        : null;
}
function W(e) {
    var t;
    let {
            transitionState: r,
            onClose: a,
            quest: s,
            questContent: c,
            questContentPosition: u,
            impressionRef: y,
            preview: S,
            sourceQuestContent: A,
        } = e,
        I = (0, f.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        D = T.r.build(s.config).rewardPlatforms,
        Z = D.length > 1,
        [z, W] = o.useState(Z ? null : D[0]),
        Q = o.useRef(new l.qA()),
        F = o.useRef(null),
        [H, G] = o.useState(null),
        $ = (0, i.e7)([O.Z], () => O.Z.useReducedMotion),
        J = (0, i.e7)([v.Z], () => v.Z.hidePersonalInformation),
        {
            questStoreRewardCode: X,
            isFetchingRewardCode: Y,
            isClaimingReward: K,
        } = (0, i.cj)([P.Z], () => ({
            questStoreRewardCode: P.Z.getRewardCode(s.id),
            isFetchingRewardCode: P.Z.isFetchingRewardCode(s.id),
            isClaimingReward: P.Z.isClaimingReward(s.id),
        })),
        ee = (0, x.O5)(),
        et = (0, _.oo)({ quest: s }),
        er = !0 === S ? (0, k.b)(s) : X,
        en = Z && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == er,
        {
            claimCode: eo,
            fetchCode: ea,
            hasError: es,
            setHasError: el,
        } = (0, N.u)({
            isClaimingReward: K,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: c,
            requiresPlatformSelection: en,
            rewardCode: er,
            selectedPlatformType: z,
            preview: S,
        }),
        ei = es && !K && !Y;
    !(function (e) {
        let t = (0, h.Z)(e),
            r = g.default.useIsCaptchaModalOpen(),
            n = (0, b.Z)(r),
            a = !!(!r && n);
        o.useEffect(() => {
            a && t();
        }, [a, t]);
    })(() => {
        el(!0);
    });
    let ec = null;
    I && null != er
        ? (ec = V.intl.string(V.t.srzsU1))
        : null != er
          ? (ec = V.intl.string(V.t.PJBpdX))
          : en && (ec = V.intl.string(V.t.JRU8dn));
    let eu =
            null != ec
                ? (0, n.jsx)(p.X6q, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: U.heading,
                      children: ec,
                  })
                : null,
        ed = (function (e) {
            let {
                    quest: t,
                    selectedPlatform: r,
                    requiresPlatformSelection: o,
                    rewardCode: a,
                    hasTieredRewardCodes: s,
                } = e,
                l = T.r.build(t.config);
            if (o)
                return (0, n.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: U.bodyCopy,
                    children: s
                        ? V.intl.format(V.t.m0btAQ, {})
                        : V.intl.format(V.t["ZUA/Ul"], { rewardName: l.defaultRewardName }),
                });
            let i = (0, _.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: r,
                sharedQuestFields: l,
            });
            return null != a && null != i
                ? (0, n.jsx)(p.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: U.bodyCopy,
                      children: j.Z.parse(i, !1, { allowLinks: !0 }),
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: z,
            requiresPlatformSelection: en,
            rewardCode: er,
            hasTieredRewardCodes: et,
        }),
        ep = o.useMemo(
            () =>
                D.map((e) => ({
                    label: (0, _.t2)(e),
                    value: e,
                })),
            [D],
        ),
        em = null;
    en &&
        (em = (0, n.jsxs)(p.xJW, {
            title: V.intl.string(V.t.vVcTtL),
            children: [
                (0, n.jsx)(p.PhF, {
                    placeholder: V.intl.string(V.t.EMrUHR),
                    options: ep,
                    select: (e) => {
                        el(!1), W(e);
                    },
                    isSelected: (e) => e === z,
                    serialize: (e) => (0, _.t2)(e),
                    className: ei ? U.errorInput : "",
                    isDisabled: K,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case E.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(p.Che, { className: U.platformSelectionOptionIcon });
                                case E.y$.PC:
                                    return (0, n.jsx)(p.pzj, { className: U.platformSelectionOptionIcon });
                                case E.y$.PLAYSTATION:
                                    return (0, n.jsx)(p.Tsp, { className: U.platformSelectionOptionIcon });
                                case E.y$.SWITCH:
                                    return (0, n.jsx)(p.aPH, { className: U.platformSelectionOptionIcon });
                                case E.y$.XBOX:
                                    return (0, n.jsx)(p.Mko, { className: U.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)("div", {
                            className: U.platformSelectionOptionLabelContainer,
                            children: [t, e.label],
                        });
                    },
                }),
                ei ? (0, n.jsx)(p.pdY, { error: V.intl.string(V.t.rbZBMT) }) : null,
            ],
        }));
    let ef = null == er && (Y || K),
        eb = ef && !en ? (0, n.jsx)(p.$jN, {}) : null,
        eh = null;
    null != er
        ? (eh = (0, n.jsx)(p.xJW, {
              title: V.intl.string(V.t.srzsU1),
              children: (0, n.jsx)(m.Z, {
                  value: J ? V.intl.string(V.t["0n2u0t"]) : er.code,
                  delay: 1000,
                  buttonColor: d.zx.Colors.BRAND,
                  onCopy: () => {
                      J && (0, w.JG)(er.code),
                          ee({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: u,
                              questContentCTA: x.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: A,
                          });
                  },
              }),
          }))
        : ei &&
          !en &&
          (eh = (0, n.jsx)(p.xJW, {
              title: V.intl.string(V.t.srzsU1),
              children: (0, n.jsx)(d.Is, {
                  disabled: !0,
                  error: V.intl.string(V.t.rbZBMT),
                  inputClassName: U.errorInput,
              }),
          }));
    let ey = o.useMemo(
            () =>
                et
                    ? (0, _.o9)({
                          quest: s,
                          idx: null == er ? void 0 : er.tier,
                      })
                    : (0, _.o9)({
                          quest: s,
                          idx: 0,
                      }),
            [et, s, null == er ? void 0 : er.tier],
        ),
        eO = o.useMemo(
            () =>
                (null == ey ? void 0 : ey.redemptionLink) == null || "" === ey.redemptionLink
                    ? null
                    : (null == er ? void 0 : er.code) == null || "" === er.code
                      ? ey.redemptionLink
                      : ey.redemptionLink.replace(M.Dp, encodeURIComponent(er.code)),
            [ey, er],
        ),
        eg = (0, N.G)({
            claimCode: eo,
            fetchCode: ea,
            hasError: ei,
            onDismiss: a,
            quest: s,
            questContent: c,
            questContentPosition: u,
            requiresPlatformSelection: en,
            selectedPlatformType: z,
            redemptionLink: eO,
            sourceQuestContent: A,
        }),
        eC = en && K,
        ej = !eC && ((en && null == z) || ef),
        ev = null != eO && "" !== eO,
        ew = V.intl.string(V.t["23SS+/"]);
    en
        ? (ew = V.intl.string(V.t.SLZMi4))
        : !en && ei
          ? (ew = V.intl.string(V.t.gNJHHh))
          : ev && (ew = V.intl.string(V.t["+zx47e"]));
    let eS = !$ && null != er && !I && !ei,
        ex = null != eb && et,
        e_ = (0, R.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(l.O_, {
                ref: G,
                className: U.confettiCanvas,
                environment: Q.current,
            }),
            (0, n.jsx)("div", {
                ref: (e) => {
                    (F.current = e), (y.current = e);
                },
                children: (0, n.jsxs)(p.Y0X, {
                    transitionState: r,
                    size: p.CgR.DYNAMIC,
                    parentComponent: "QuestsRewardCodeModal",
                    children: [
                        (0, n.jsxs)("div", {
                            className: U.modalBody,
                            children: [
                                (0, n.jsx)(p.olH, {
                                    className: U.closeButton,
                                    onClick: () => a(),
                                }),
                                !ex &&
                                    (0, n.jsx)(L.p, {
                                        source: M.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(B, {
                                            quest: s,
                                            rewardCode: er,
                                            hasTieredRewardCodes: et,
                                            sourceQuestContent: A,
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: U.modalContent,
                                    children: [
                                        eu,
                                        ed,
                                        em,
                                        eb,
                                        eh,
                                        null != s.config.cosponsorMetadata &&
                                            null != e_ &&
                                            (0, n.jsxs)("div", {
                                                className: U.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)("img", {
                                                        className: U.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: e_.url,
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: U.cosponsorName,
                                                        children: V.intl.format(V.t.CSf4ER, {
                                                            cosponsorName: s.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: U.cosponsorRedemptionInstructions,
                                                        children: j.Z.parse(
                                                            s.config.cosponsorMetadata.redemptionInstructions,
                                                            !1,
                                                            { allowLinks: !0 },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)(p.mzw, {
                            children: (0, n.jsx)(p.zxk, {
                                variant: "primary",
                                text: ew,
                                onClick: eg,
                                loading: eC,
                                disabled: ej,
                            }),
                        }),
                    ],
                }),
            }),
            eS &&
                (0, n.jsx)(C.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: H,
                    sprites: q.CA,
                    colors: q.Br,
                }),
        ],
    });
}
