n.d(t, { default: () => U }), n(388685), n(704826), n(35282);
var r = n(951288),
    a = n(647438),
    o = n(120356),
    l = n.n(o),
    s = n(238651),
    i = n(442837),
    c = n(692547),
    u = n(780384),
    d = n(755721),
    p = n(481060),
    m = n(484614),
    f = n(211266),
    b = n(110924),
    h = n(448986),
    g = n(410030),
    y = n(607070),
    v = n(475271),
    j = n(530618),
    C = n(454585),
    w = n(246946),
    O = n(572004),
    x = n(302221),
    S = n(617136),
    _ = n(509212),
    A = n(113434),
    R = n(569984),
    T = n(497505),
    N = n(381176),
    I = n(804127),
    E = n(566078),
    P = n(617889),
    D = n(602667),
    k = n(652380),
    Z = n(644646),
    q = n(78826),
    L = n(46140),
    M = n(675654),
    V = n(388032),
    B = n(777738);
function Q(e) {
    var t;
    let { quest: n, rewardCode: a, hasTieredRewardCodes: o, sourceQuestContent: s } = e,
        i = (0, u.wj)((0, g.ZP)()),
        d = (0, N.h)({
            location: L.dr.REWARD_CODE_MODAL,
            questConfig: n.config,
        }),
        m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = d ? m : n.config.colors.primary,
        b = {
            border: "1px solid ".concat(f),
            background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                    (0, x.aD)(f, 0.2),
                    " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat((0, x.aD)(f, 0.6), " 44%,\n      transparent 76%\n    ),\n    ")
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
        },
        h = (0, P.B)(n, !1),
        y = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: v, subHeader: j } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: l, hasTieredRewardCodes: s } = e,
                i = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != l,
                c = s ? "" : V.intl.string(V.t.UUKbio),
                u = s
                    ? (0, _.o9)({
                          quest: o,
                          idx:
                              null != (r = null == l ? void 0 : l.tier)
                                  ? r
                                  : null == (n = o.userStatus)
                                    ? void 0
                                    : n.claimedTier,
                      })
                    : null,
                d = E.r.build(o.config),
                p = null != u && null != (a = u.messages.name) ? a : d.defaultRewardName,
                m = s ? V.intl.string(V.t.cfY4PD) : d.defaultRewardName;
            return {
                subHeader: i ? V.intl.string(V.t.YpswQk) : c,
                header: i ? p : m,
            };
        })({
            quest: n,
            rewardCode: a,
            hasTieredRewardCodes: o,
        }),
        { hasError: C, isLoading: w } = (0, q.d7)();
    return (0, r.jsxs)("div", {
        style: b,
        className: B.rewardTile,
        children: [
            (0, r.jsxs)("div", {
                className: B.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": d ? m : n.config.colors.primary },
                children: [
                    w &&
                        !C &&
                        (0, r.jsx)(p.$jN, {
                            className: B.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE,
                        }),
                    C && (0, r.jsx)(p.fFY, { className: B.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(Z.Z, {
                        className: l()(B.rewardTileAsset, { [B.rewardTileAssetLoading]: w || C }),
                        quest: n,
                        questContent: h.trackingCtx.content,
                        location: L.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: s,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: B.rewardSubheading,
                children: [
                    y &&
                        (0, r.jsx)(p.kmB, {
                            size: "xs",
                            color: c.Z.colors.TEXT_MUTED,
                            className: B.rewardSubheadingIcon,
                        }),
                    (0, r.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: B.rewardSubheadingText,
                        children: j,
                    }),
                ],
            }),
            (0, r.jsx)(p.X6q, {
                variant: "display-sm",
                color: "header-primary",
                className: B.rewardHeading,
                children: v,
            }),
        ],
    });
}
function U(e) {
    let t = (0, i.e7)([R.Z], () => R.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, r.jsx)(D.A, {
              questOrQuests: t,
              questContent: T.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (n) => {
                  var a, o;
                  return (0, r.jsx)(
                      W,
                      ((a = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (o = o =
                          {
                              impressionRef: n,
                              quest: t,
                              preview: e.preview,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      a),
                  );
              },
          })
        : null;
}
function W(e) {
    var t;
    let {
            transitionState: n,
            onClose: o,
            quest: l,
            questContent: c,
            questContentPosition: u,
            impressionRef: g,
            preview: x,
            sourceQuestContent: N,
        } = e,
        P = (0, f.Z)(() => {
            var e;
            return (null == (e = l.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        D = E.r.build(l.config).rewardPlatforms,
        Z = D.length > 1,
        [U, W] = a.useState(Z ? null : D[0]),
        z = a.useRef(new s.qA()),
        H = a.useRef(null),
        [F, $] = a.useState(null),
        X = (0, i.e7)([y.Z], () => y.Z.useReducedMotion),
        Y = (0, i.e7)([w.Z], () => w.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: G,
            isClaimingReward: K,
        } = (0, i.cj)([R.Z], () => ({
            questStoreRewardCode: R.Z.getRewardCode(l.id),
            isFetchingRewardCode: R.Z.isFetchingRewardCode(l.id),
            isClaimingReward: R.Z.isClaimingReward(l.id),
        })),
        ee = (0, S.O5)(),
        et = (0, _.oo)({ quest: l }),
        en = !0 === x ? (0, k.b)(l) : J,
        er = Z && (null == (t = l.userStatus) ? void 0 : t.claimedAt) == null && null == en,
        {
            claimCode: ea,
            fetchCode: eo,
            hasError: el,
            setHasError: es,
        } = (0, I.u)({
            isClaimingReward: K,
            isFetchingRewardCode: G,
            quest: l,
            questContent: c,
            requiresPlatformSelection: er,
            rewardCode: en,
            selectedPlatformType: U,
            preview: x,
        }),
        ei = el && !K && !G;
    !(function (e) {
        let t = (0, h.Z)(e),
            n = v.default.useIsCaptchaModalOpen(),
            r = (0, b.Z)(n),
            o = !!(!n && r);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        es(!0);
    });
    let ec = null;
    P && null != en
        ? (ec = V.intl.string(V.t.srzsU1))
        : null != en
          ? (ec = V.intl.string(V.t.PJBpdX))
          : er && (ec = V.intl.string(V.t.JRU8dn));
    let eu =
            null != ec
                ? (0, r.jsx)(p.X6q, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: B.heading,
                      children: ec,
                  })
                : null,
        ed = (function (e) {
            let {
                    quest: t,
                    selectedPlatform: n,
                    requiresPlatformSelection: a,
                    rewardCode: o,
                    hasTieredRewardCodes: l,
                } = e,
                s = E.r.build(t.config);
            if (a)
                return (0, r.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: B.bodyCopy,
                    children: l
                        ? V.intl.format(V.t.m0btAQ, {})
                        : V.intl.format(V.t["ZUA/Ul"], { rewardName: s.defaultRewardName }),
                });
            let i = (0, _.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: n,
                sharedQuestFields: s,
            });
            return null != o && null != i
                ? (0, r.jsx)(p.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: B.bodyCopy,
                      children: C.Z.parse(i, !1, { allowLinks: !0 }),
                  })
                : null;
        })({
            quest: l,
            selectedPlatform: U,
            requiresPlatformSelection: er,
            rewardCode: en,
            hasTieredRewardCodes: et,
        }),
        ep = a.useMemo(
            () =>
                D.map((e) => ({
                    label: (0, _.t2)(e),
                    value: e,
                })),
            [D],
        ),
        em = null;
    er &&
        (em = (0, r.jsxs)(p.xJW, {
            title: V.intl.string(V.t.vVcTtL),
            children: [
                (0, r.jsx)(p.PhF, {
                    placeholder: V.intl.string(V.t.EMrUHR),
                    options: ep,
                    select: (e) => {
                        es(!1), W(e);
                    },
                    isSelected: (e) => e === U,
                    serialize: (e) => (0, _.t2)(e),
                    className: ei ? B.errorInput : "",
                    isDisabled: K,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case T.y$.CROSS_PLATFORM:
                                    return (0, r.jsx)(p.Che, { className: B.platformSelectionOptionIcon });
                                case T.y$.PC:
                                    return (0, r.jsx)(p.pzj, { className: B.platformSelectionOptionIcon });
                                case T.y$.PLAYSTATION:
                                    return (0, r.jsx)(p.Tsp, { className: B.platformSelectionOptionIcon });
                                case T.y$.SWITCH:
                                    return (0, r.jsx)(p.aPH, { className: B.platformSelectionOptionIcon });
                                case T.y$.XBOX:
                                    return (0, r.jsx)(p.Mko, { className: B.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, r.jsxs)("div", {
                            className: B.platformSelectionOptionLabelContainer,
                            children: [t, e.label],
                        });
                    },
                }),
                ei ? (0, r.jsx)(p.pdY, { error: V.intl.string(V.t.rbZBMT) }) : null,
            ],
        }));
    let ef = null == en && (G || K),
        eb = ef && !er ? (0, r.jsx)(p.$jN, {}) : null,
        eh = null;
    null != en
        ? (eh = (0, r.jsx)(p.xJW, {
              title: V.intl.string(V.t.srzsU1),
              children: (0, r.jsx)(m.Z, {
                  value: Y ? V.intl.string(V.t["0n2u0t"]) : en.code,
                  delay: 1000,
                  buttonColor: d.zx.Colors.BRAND,
                  onCopy: () => {
                      Y && (0, O.JG)(en.code),
                          ee({
                              questId: l.id,
                              questContent: c,
                              questContentPosition: u,
                              questContentCTA: S.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: N,
                          });
                  },
              }),
          }))
        : ei &&
          !er &&
          (eh = (0, r.jsx)(p.xJW, {
              title: V.intl.string(V.t.srzsU1),
              children: (0, r.jsx)(p.oil, {
                  disabled: !0,
                  error: V.intl.string(V.t.rbZBMT),
              }),
          }));
    let eg = a.useMemo(
            () =>
                et
                    ? (0, _.o9)({
                          quest: l,
                          idx: null == en ? void 0 : en.tier,
                      })
                    : (0, _.o9)({
                          quest: l,
                          idx: 0,
                      }),
            [et, l, null == en ? void 0 : en.tier],
        ),
        ey = a.useMemo(
            () =>
                (null == eg ? void 0 : eg.redemptionLink) == null || "" === eg.redemptionLink
                    ? null
                    : (null == en ? void 0 : en.code) == null || "" === en.code
                      ? eg.redemptionLink
                      : eg.redemptionLink.replace(L.Dp, encodeURIComponent(en.code)),
            [eg, en],
        ),
        ev = (0, I.G)({
            claimCode: ea,
            fetchCode: eo,
            hasError: ei,
            onDismiss: o,
            quest: l,
            questContent: c,
            questContentPosition: u,
            requiresPlatformSelection: er,
            selectedPlatformType: U,
            redemptionLink: ey,
            sourceQuestContent: N,
        }),
        ej = er && K,
        eC = !ej && ((er && null == U) || ef),
        ew = null != ey && "" !== ey,
        eO = V.intl.string(V.t["23SS+/"]);
    er
        ? (eO = V.intl.string(V.t.SLZMi4))
        : !er && ei
          ? (eO = V.intl.string(V.t.gNJHHh))
          : ew && (eO = V.intl.string(V.t["+zx47e"]));
    let ex = !X && null != en && !P && !ei,
        eS = null != eb && et,
        e_ = (0, A.Gd)(l.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: $,
                className: B.confettiCanvas,
                environment: z.current,
            }),
            (0, r.jsx)("div", {
                ref: (e) => {
                    (H.current = e), (g.current = e);
                },
                children: (0, r.jsxs)(p.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: n,
                    size: p.CgR.DYNAMIC,
                    parentComponent: "QuestsRewardCodeModal",
                    children: [
                        (0, r.jsxs)("div", {
                            className: B.modalBody,
                            children: [
                                (0, r.jsx)(p.olH, {
                                    "data-migration-pending": !0,
                                    className: B.closeButton,
                                    onClick: () => o(),
                                }),
                                !eS &&
                                    (0, r.jsx)(q.p, {
                                        source: L.dr.REWARD_CODE_MODAL,
                                        questId: l.id,
                                        children: (0, r.jsx)(Q, {
                                            quest: l,
                                            rewardCode: en,
                                            hasTieredRewardCodes: et,
                                            sourceQuestContent: N,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    className: B.modalContent,
                                    children: [
                                        eu,
                                        ed,
                                        em,
                                        eb,
                                        eh,
                                        null != l.config.cosponsorMetadata &&
                                            null != e_ &&
                                            (0, r.jsxs)("div", {
                                                className: B.cosponsorFooter,
                                                children: [
                                                    (0, r.jsx)("img", {
                                                        className: B.cosponsorLogotype,
                                                        alt: l.config.cosponsorMetadata.name,
                                                        src: e_.url,
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: B.cosponsorName,
                                                        children: V.intl.format(V.t.CSf4ER, {
                                                            cosponsorName: l.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: B.cosponsorRedemptionInstructions,
                                                        children: C.Z.parse(
                                                            l.config.cosponsorMetadata.redemptionInstructions,
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
                        (0, r.jsx)(p.mzw, {
                            "data-migration-pending": !0,
                            children: (0, r.jsx)(p.zxk, {
                                variant: "primary",
                                text: eO,
                                onClick: ev,
                                loading: ej,
                                disabled: eC,
                            }),
                        }),
                    ],
                }),
            }),
            ex &&
                (0, r.jsx)(j.Z, {
                    confettiTarget: H.current,
                    confettiCanvas: F,
                    sprites: M.CA,
                    colors: M.Br,
                }),
        ],
    });
}
