n.d(t, { default: () => z }), n(388685), n(704826), n(35282);
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
    C = n(607070),
    w = n(475271),
    y = n(530618),
    j = n(63954),
    v = n(454585),
    x = n(246946),
    O = n(572004),
    S = n(302221),
    A = n(617136),
    _ = n(509212),
    N = n(113434),
    R = n(569984),
    T = n(497505),
    I = n(685138),
    E = n(804127),
    D = n(566078),
    P = n(602667),
    Z = n(644646),
    k = n(78826),
    L = n(46140),
    M = n(675654),
    q = n(388032),
    B = n(777738);
function Q(e) {
    var t;
    let { quest: n, rewardCode: a, hasTieredRewardCodes: o, sourceQuestContent: s } = e,
        i = (0, d.wj)((0, h.ZP)()),
        u = (0, I.n)({
            location: L.dr.REWARD_CODE_MODAL,
            questConfig: n.config,
        }).enabled,
        m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = u ? m : n.config.colors.primary,
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
        g = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: C, subHeader: w } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: l, hasTieredRewardCodes: s } = e,
                i = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != l,
                c = s ? "" : q.intl.string(q.t.UUKbik),
                d = s
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
                u = D.r.build(o.config),
                p = null != d && null != (a = d.messages.name) ? a : u.defaultRewardName,
                m = s ? q.intl.string(q.t.cfY4PE) : u.defaultRewardName;
            return {
                subHeader: i ? q.intl.string(q.t.YpswQo) : c,
                header: i ? p : m,
            };
        })({
            quest: n,
            rewardCode: a,
            hasTieredRewardCodes: o,
        }),
        { hasError: y, isLoading: j } = (0, k.d7)();
    return (0, r.jsxs)("div", {
        style: b,
        className: B.rewardTile,
        children: [
            (0, r.jsxs)("div", {
                className: B.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": u ? m : n.config.colors.primary },
                children: [
                    j &&
                        !y &&
                        (0, r.jsx)(p.$jN, {
                            className: B.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE,
                        }),
                    y && (0, r.jsx)(p.fFY, { className: B.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(Z.Z, {
                        className: l()(B.rewardTileAsset, { [B.rewardTileAssetLoading]: j || y }),
                        quest: n,
                        questContent: T.jn.QUEST_BAR_V2,
                        location: L.dr.REWARD_CODE_MODAL,
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
                        children: w,
                    }),
                ],
            }),
            (0, r.jsx)(p.Heading, {
                variant: "display-sm",
                color: "header-primary",
                className: B.rewardHeading,
                children: C,
            }),
        ],
    });
}
function z(e) {
    let t = (0, i.e7)([R.Z], () => R.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, r.jsx)(P.A, {
              questOrQuests: t,
              questContent: T.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (n) => {
                  var a, o;
                  return (0, r.jsx)(
                      H,
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
function H(e) {
    var t;
    let {
            transitionState: n,
            onClose: o,
            quest: l,
            questContent: c,
            questContentPosition: d,
            impressionRef: h,
            preview: S,
            sourceQuestContent: I,
        } = e,
        P = (0, f.Z)(() => {
            var e;
            return (null == (e = l.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        Z = D.r.build(l.config).rewardPlatforms,
        z = Z.length > 1,
        [H, U] = a.useState(z ? null : Z[0]),
        W = a.useRef(new s.qA()),
        F = a.useRef(null),
        [$, Y] = a.useState(null),
        G = (0, i.e7)([C.Z], () => C.Z.useReducedMotion),
        V = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: X,
            isClaimingReward: K,
        } = (0, i.cj)([R.Z], () => ({
            questStoreRewardCode: R.Z.getRewardCode(l.id),
            isFetchingRewardCode: R.Z.isFetchingRewardCode(l.id),
            isClaimingReward: R.Z.isClaimingReward(l.id),
        })),
        ee = (0, A.O5)(),
        et = (0, _.oo)({ quest: l }),
        en = !0 === S ? (0, j.b)(l) : J,
        er = z && (null == (t = l.userStatus) ? void 0 : t.claimedAt) == null && null == en,
        {
            claimCode: ea,
            fetchCode: eo,
            hasError: el,
            setHasError: es,
        } = (0, E.uL)({
            isClaimingReward: K,
            isFetchingRewardCode: X,
            quest: l,
            questContent: c,
            requiresPlatformSelection: er,
            rewardCode: en,
            selectedPlatformType: H,
            preview: S,
        }),
        ei = el && !K && !X;
    !(function (e) {
        let t = (0, g.Z)(e),
            n = w.default.useIsCaptchaModalOpen(),
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
        ? (ec = q.intl.string(q.t.srzsU2))
        : null != en
          ? (ec = q.intl.string(q.t.PJBpda))
          : er && (ec = q.intl.string(q.t.JRU8dq));
    let ed =
            null != ec
                ? (0, r.jsx)(p.Heading, {
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
                s = D.r.build(t.config);
            if (a)
                return (0, r.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: B.bodyCopy,
                    children: l
                        ? q.intl.format(q.t.m0btAb, {})
                        : q.intl.format(q.t["ZUA/Ui"], { rewardName: s.defaultRewardName }),
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
                      children: v.Z.parse(i, !1, { allowLinks: !0 }),
                  })
                : null;
        })({
            quest: l,
            selectedPlatform: H,
            requiresPlatformSelection: er,
            rewardCode: en,
            hasTieredRewardCodes: et,
        }),
        ep = a.useMemo(
            () =>
                Z.map((e) => ({
                    label: (0, _.t2)(e),
                    value: e,
                })),
            [Z],
        ),
        em = null;
    er &&
        (em = (0, r.jsx)(p.PhF, {
            label: q.intl.string(q.t.vVcTtJ),
            errorMessage: ei ? q.intl.string(q.t.rbZBMR) : void 0,
            placeholder: q.intl.string(q.t.EMrUHQ),
            options: ep,
            select: (e) => {
                es(!1), U(e);
            },
            isSelected: (e) => e === H,
            serialize: (e) => (0, _.t2)(e),
            className: ei ? B.errorInput : "",
            isDisabled: K,
            renderLeading: (e) =>
                (function (e) {
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
                })(e.value),
        }));
    let ef = null == en && (X || K),
        eb = ef && !er ? (0, r.jsx)(p.$jN, {}) : null,
        eg = null;
    null != en
        ? (eg = (0, r.jsx)(p.gNt, {
              label: q.intl.string(q.t.srzsU2),
              children: (0, r.jsx)(m.Z, {
                  value: V ? q.intl.string(q.t["0n2u0k"]) : en.code,
                  delay: 1000,
                  buttonColor: u.zx.Colors.BRAND,
                  onCopy: () => {
                      V && (0, O.JG)(en.code),
                          ee({
                              questId: l.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: A.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: I,
                          });
                  },
              }),
          }))
        : ei &&
          !er &&
          (eg = (0, r.jsx)(p.oil, {
              label: q.intl.string(q.t.srzsU2),
              disabled: !0,
              error: q.intl.string(q.t.rbZBMR),
          }));
    let eh = a.useMemo(
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
        eC = a.useMemo(
            () =>
                (null == eh ? void 0 : eh.redemptionLink) == null || "" === eh.redemptionLink
                    ? null
                    : (null == en ? void 0 : en.code) == null || "" === en.code
                      ? eh.redemptionLink
                      : eh.redemptionLink.replace(L.Dp, encodeURIComponent(en.code)),
            [eh, en],
        ),
        ew = (0, E.G$)({
            claimCode: ea,
            fetchCode: eo,
            hasError: ei,
            onDismiss: o,
            quest: l,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: er,
            selectedPlatformType: H,
            redemptionLink: eC,
            sourceQuestContent: I,
        }),
        ey = er && K,
        ej = !ey && ((er && null == H) || ef),
        ev = null != eC && "" !== eC,
        ex = q.intl.string(q.t["23SS+z"]);
    er
        ? (ex = q.intl.string(q.t.SLZMi1))
        : !er && ei
          ? (ex = q.intl.string(q.t.gNJHHp))
          : ev && (ex = q.intl.string(q.t["+zx47d"]));
    let eO = !G && null != en && !P && !ei,
        eS = null != eb && et,
        eA = (0, N.Gd)(l.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: Y,
                className: B.confettiCanvas,
                environment: W.current,
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
                                !eS &&
                                    (0, r.jsx)(k.p, {
                                        source: L.dr.REWARD_CODE_MODAL,
                                        questId: l.id,
                                        children: (0, r.jsx)(Q, {
                                            quest: l,
                                            rewardCode: en,
                                            hasTieredRewardCodes: et,
                                            sourceQuestContent: I,
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
                                            null != eA &&
                                            (0, r.jsxs)("div", {
                                                className: B.cosponsorFooter,
                                                children: [
                                                    (0, r.jsx)("img", {
                                                        className: B.cosponsorLogotype,
                                                        alt: l.config.cosponsorMetadata.name,
                                                        src: eA.url,
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: B.cosponsorName,
                                                        children: q.intl.format(q.t.CSf4EX, {
                                                            cosponsorName: l.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: B.cosponsorRedemptionInstructions,
                                                        children: v.Z.parse(
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
                            children: (0, r.jsx)(p.Button, {
                                variant: "primary",
                                text: ex,
                                onClick: ew,
                                loading: ey,
                                disabled: ej,
                            }),
                        }),
                    ],
                }),
            }),
            eO &&
                (0, r.jsx)(y.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: $,
                    sprites: M.CA,
                    colors: M.Br,
                }),
        ],
    });
}
