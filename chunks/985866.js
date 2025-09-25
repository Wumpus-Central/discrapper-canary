n.d(t, { default: () => Q }), n(388685), n(704826), n(35282);
var r = n(951288),
    a = n(647438),
    o = n(120356),
    l = n.n(o),
    s = n(238651),
    i = n(442837),
    c = n(692547),
    d = n(780384),
    u = n(755721),
    p = n(481060),
    m = n(484614),
    f = n(211266),
    b = n(110924),
    g = n(448986),
    h = n(410030),
    w = n(607070),
    C = n(475271),
    v = n(530618),
    y = n(63954),
    x = n(454585),
    j = n(246946),
    _ = n(572004),
    O = n(302221),
    S = n(617136),
    T = n(509212),
    A = n(113434),
    P = n(569984),
    I = n(497505),
    N = n(685138),
    R = n(804127),
    E = n(566078),
    q = n(602667),
    D = n(644646),
    k = n(78826),
    Z = n(46140),
    L = n(675654),
    M = n(388032),
    B = n(607535);
function W(e) {
    var t;
    let { quest: n, rewardCode: a, hasTieredRewardCodes: o, sourceQuestContent: s } = e,
        i = (0, d.wj)((0, h.ZP)()),
        u = (0, N.n)({
            location: Z.dr.REWARD_CODE_MODAL,
            questConfig: n.config,
        }).enabled,
        m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = u ? m : n.config.colors.primary,
        b = {
            border: "1px solid ".concat(f),
            background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                    (0, O.aD)(f, 0.2),
                    " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat((0, O.aD)(f, 0.6), " 44%,\n      transparent 76%\n    ),\n    ")
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
        },
        g = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: w, subHeader: C } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: l, hasTieredRewardCodes: s } = e,
                i = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != l,
                c = s ? "" : M.intl.string(M.t.UUKbio),
                d = s
                    ? (0, T.o9)({
                          quest: o,
                          idx:
                              null != (r = null == l ? void 0 : l.tier)
                                  ? r
                                  : null == (n = o.userStatus)
                                    ? void 0
                                    : n.claimedTier,
                      })
                    : null,
                u = E.r.build(o.config),
                p = null != d && null != (a = d.messages.name) ? a : u.defaultRewardName,
                m = s ? M.intl.string(M.t.cfY4PD) : u.defaultRewardName;
            return {
                subHeader: i ? M.intl.string(M.t.YpswQk) : c,
                header: i ? p : m,
            };
        })({
            quest: n,
            rewardCode: a,
            hasTieredRewardCodes: o,
        }),
        { hasError: v, isLoading: y } = (0, k.d7)();
    return (0, r.jsxs)("div", {
        style: b,
        className: B.rewardTile,
        children: [
            (0, r.jsxs)("div", {
                className: B.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": u ? m : n.config.colors.primary },
                children: [
                    y &&
                        !v &&
                        (0, r.jsx)(p.$jN, {
                            className: B.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE,
                        }),
                    v && (0, r.jsx)(p.fFY, { className: B.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(D.Z, {
                        className: l()(B.rewardTileAsset, { [B.rewardTileAssetLoading]: y || v }),
                        quest: n,
                        questContent: I.jn.QUEST_BAR_V2,
                        location: Z.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: s,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: B.rewardSubheading,
                children: [
                    g &&
                        (0, r.jsx)(p.kmB, {
                            size: "xs",
                            color: c.Z.colors.TEXT_MUTED,
                            className: B.rewardSubheadingIcon,
                        }),
                    (0, r.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: B.rewardSubheadingText,
                        children: C,
                    }),
                ],
            }),
            (0, r.jsx)(p.X6q, {
                variant: "display-sm",
                color: "header-primary",
                className: B.rewardHeading,
                children: w,
            }),
        ],
    });
}
function Q(e) {
    let t = (0, i.e7)([P.Z], () => P.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, r.jsx)(q.A, {
              questOrQuests: t,
              questContent: I.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (n) => {
                  var a, o;
                  return (0, r.jsx)(
                      U,
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
function U(e) {
    var t;
    let {
            transitionState: n,
            onClose: o,
            quest: l,
            questContent: c,
            questContentPosition: d,
            impressionRef: h,
            preview: O,
            sourceQuestContent: N,
        } = e,
        q = (0, f.Z)(() => {
            var e;
            return (null == (e = l.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        D = E.r.build(l.config).rewardPlatforms,
        Q = D.length > 1,
        [U, z] = a.useState(Q ? null : D[0]),
        H = a.useRef(new s.qA()),
        F = a.useRef(null),
        [$, Y] = a.useState(null),
        X = (0, i.e7)([w.Z], () => w.Z.useReducedMotion),
        G = (0, i.e7)([j.Z], () => j.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: V,
            isClaimingReward: K,
        } = (0, i.cj)([P.Z], () => ({
            questStoreRewardCode: P.Z.getRewardCode(l.id),
            isFetchingRewardCode: P.Z.isFetchingRewardCode(l.id),
            isClaimingReward: P.Z.isClaimingReward(l.id),
        })),
        ee = (0, S.O5)(),
        et = (0, T.oo)({ quest: l }),
        en = !0 === O ? (0, y.b)(l) : J,
        er = Q && (null == (t = l.userStatus) ? void 0 : t.claimedAt) == null && null == en,
        {
            claimCode: ea,
            fetchCode: eo,
            hasError: el,
            setHasError: es,
        } = (0, R.uL)({
            isClaimingReward: K,
            isFetchingRewardCode: V,
            quest: l,
            questContent: c,
            requiresPlatformSelection: er,
            rewardCode: en,
            selectedPlatformType: U,
            preview: O,
        }),
        ei = el && !K && !V;
    !(function (e) {
        let t = (0, g.Z)(e),
            n = C.default.useIsCaptchaModalOpen(),
            r = (0, b.Z)(n),
            o = !!(!n && r);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        es(!0);
    });
    let ec = null;
    q && null != en
        ? (ec = M.intl.string(M.t.srzsU1))
        : null != en
          ? (ec = M.intl.string(M.t.PJBpdX))
          : er && (ec = M.intl.string(M.t.JRU8dn));
    let ed =
            null != ec
                ? (0, r.jsx)(p.X6q, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: B.heading,
                      children: ec,
                  })
                : null,
        eu = (function (e) {
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
                        ? M.intl.format(M.t.m0btAQ, {})
                        : M.intl.format(M.t["ZUA/Ul"], { rewardName: s.defaultRewardName }),
                });
            let i = (0, T.C1)({
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
                      children: x.Z.parse(i, !1, { allowLinks: !0 }),
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
                    label: (0, T.t2)(e),
                    value: e,
                })),
            [D],
        ),
        em = null;
    er &&
        (em = (0, r.jsxs)(p.xJW, {
            title: M.intl.string(M.t.vVcTtL),
            children: [
                (0, r.jsx)(p.PhF, {
                    placeholder: M.intl.string(M.t.EMrUHR),
                    options: ep,
                    select: (e) => {
                        es(!1), z(e);
                    },
                    isSelected: (e) => e === U,
                    serialize: (e) => (0, T.t2)(e),
                    className: ei ? B.errorInput : "",
                    isDisabled: K,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case I.y$.CROSS_PLATFORM:
                                    return (0, r.jsx)(p.Che, { className: B.platformSelectionOptionIcon });
                                case I.y$.PC:
                                    return (0, r.jsx)(p.pzj, { className: B.platformSelectionOptionIcon });
                                case I.y$.PLAYSTATION:
                                    return (0, r.jsx)(p.Tsp, { className: B.platformSelectionOptionIcon });
                                case I.y$.SWITCH:
                                    return (0, r.jsx)(p.aPH, { className: B.platformSelectionOptionIcon });
                                case I.y$.XBOX:
                                    return (0, r.jsx)(p.Mko, { className: B.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, r.jsxs)("div", {
                            className: B.platformSelectionOptionLabelContainer,
                            children: [t, e.label],
                        });
                    },
                }),
                ei ? (0, r.jsx)(p.pdY, { error: M.intl.string(M.t.rbZBMT) }) : null,
            ],
        }));
    let ef = null == en && (V || K),
        eb = ef && !er ? (0, r.jsx)(p.$jN, {}) : null,
        eg = null;
    null != en
        ? (eg = (0, r.jsx)(p.xJW, {
              title: M.intl.string(M.t.srzsU1),
              children: (0, r.jsx)(m.Z, {
                  value: G ? M.intl.string(M.t["0n2u0t"]) : en.code,
                  delay: 1000,
                  buttonColor: u.zx.Colors.BRAND,
                  onCopy: () => {
                      G && (0, _.JG)(en.code),
                          ee({
                              questId: l.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: S.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: N,
                          });
                  },
              }),
          }))
        : ei &&
          !er &&
          (eg = (0, r.jsx)(p.oil, {
              label: M.intl.string(M.t.srzsU1),
              disabled: !0,
              error: M.intl.string(M.t.rbZBMT),
          }));
    let eh = a.useMemo(
            () =>
                et
                    ? (0, T.o9)({
                          quest: l,
                          idx: null == en ? void 0 : en.tier,
                      })
                    : (0, T.o9)({
                          quest: l,
                          idx: 0,
                      }),
            [et, l, null == en ? void 0 : en.tier],
        ),
        ew = a.useMemo(
            () =>
                (null == eh ? void 0 : eh.redemptionLink) == null || "" === eh.redemptionLink
                    ? null
                    : (null == en ? void 0 : en.code) == null || "" === en.code
                      ? eh.redemptionLink
                      : eh.redemptionLink.replace(Z.Dp, encodeURIComponent(en.code)),
            [eh, en],
        ),
        eC = (0, R.G$)({
            claimCode: ea,
            fetchCode: eo,
            hasError: ei,
            onDismiss: o,
            quest: l,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: er,
            selectedPlatformType: U,
            redemptionLink: ew,
            sourceQuestContent: N,
        }),
        ev = er && K,
        ey = !ev && ((er && null == U) || ef),
        ex = null != ew && "" !== ew,
        ej = M.intl.string(M.t["23SS+/"]);
    er
        ? (ej = M.intl.string(M.t.SLZMi4))
        : !er && ei
          ? (ej = M.intl.string(M.t.gNJHHh))
          : ex && (ej = M.intl.string(M.t["+zx47e"]));
    let e_ = !X && null != en && !q && !ei,
        eO = null != eb && et,
        eS = (0, A.Gd)(l.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: Y,
                className: B.confettiCanvas,
                environment: H.current,
            }),
            (0, r.jsx)("div", {
                ref: (e) => {
                    (F.current = e), (h.current = e);
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
                                !eO &&
                                    (0, r.jsx)(k.p, {
                                        source: Z.dr.REWARD_CODE_MODAL,
                                        questId: l.id,
                                        children: (0, r.jsx)(W, {
                                            quest: l,
                                            rewardCode: en,
                                            hasTieredRewardCodes: et,
                                            sourceQuestContent: N,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    className: B.modalContent,
                                    children: [
                                        ed,
                                        eu,
                                        em,
                                        eb,
                                        eg,
                                        null != l.config.cosponsorMetadata &&
                                            null != eS &&
                                            (0, r.jsxs)("div", {
                                                className: B.cosponsorFooter,
                                                children: [
                                                    (0, r.jsx)("img", {
                                                        className: B.cosponsorLogotype,
                                                        alt: l.config.cosponsorMetadata.name,
                                                        src: eS.url,
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: B.cosponsorName,
                                                        children: M.intl.format(M.t.CSf4ER, {
                                                            cosponsorName: l.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: B.cosponsorRedemptionInstructions,
                                                        children: x.Z.parse(
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
                                text: ej,
                                onClick: eC,
                                loading: ev,
                                disabled: ey,
                            }),
                        }),
                    ],
                }),
            }),
            e_ &&
                (0, r.jsx)(v.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: $,
                    sprites: L.CA,
                    colors: L.Br,
                }),
        ],
    });
}
