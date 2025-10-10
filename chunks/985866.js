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
    x = n(454585),
    v = n(246946),
    O = n(572004),
    S = n(302221),
    A = n(617136),
    T = n(509212),
    _ = n(113434),
    N = n(569984),
    R = n(497505),
    I = n(685138),
    E = n(804127),
    D = n(566078),
    P = n(602667),
    Z = n(644646),
    k = n(78826),
    L = n(46140),
    q = n(675654),
    M = n(388032),
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
                u = D.r.build(o.config),
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
                        questContent: R.jn.QUEST_BAR_V2,
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
            (0, r.jsx)(p.X6q, {
                variant: "display-sm",
                color: "header-primary",
                className: B.rewardHeading,
                children: C,
            }),
        ],
    });
}
function z(e) {
    let t = (0, i.e7)([N.Z], () => N.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, r.jsx)(P.A, {
              questOrQuests: t,
              questContent: R.jn.REWARD_MODAL,
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
        [W, U] = a.useState(z ? null : Z[0]),
        H = a.useRef(new s.qA()),
        F = a.useRef(null),
        [$, Y] = a.useState(null),
        X = (0, i.e7)([C.Z], () => C.Z.useReducedMotion),
        G = (0, i.e7)([v.Z], () => v.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: V,
            isClaimingReward: K,
        } = (0, i.cj)([N.Z], () => ({
            questStoreRewardCode: N.Z.getRewardCode(l.id),
            isFetchingRewardCode: N.Z.isFetchingRewardCode(l.id),
            isClaimingReward: N.Z.isClaimingReward(l.id),
        })),
        ee = (0, A.O5)(),
        et = (0, T.oo)({ quest: l }),
        en = !0 === S ? (0, j.b)(l) : J,
        er = z && (null == (t = l.userStatus) ? void 0 : t.claimedAt) == null && null == en,
        {
            claimCode: ea,
            fetchCode: eo,
            hasError: el,
            setHasError: es,
        } = (0, E.uL)({
            isClaimingReward: K,
            isFetchingRewardCode: V,
            quest: l,
            questContent: c,
            requiresPlatformSelection: er,
            rewardCode: en,
            selectedPlatformType: W,
            preview: S,
        }),
        ei = el && !K && !V;
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
                s = D.r.build(t.config);
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
            selectedPlatform: W,
            requiresPlatformSelection: er,
            rewardCode: en,
            hasTieredRewardCodes: et,
        }),
        ep = a.useMemo(
            () =>
                Z.map((e) => ({
                    label: (0, T.t2)(e),
                    value: e,
                })),
            [Z],
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
                        es(!1), U(e);
                    },
                    isSelected: (e) => e === W,
                    serialize: (e) => (0, T.t2)(e),
                    className: ei ? B.errorInput : "",
                    isDisabled: K,
                    renderLeading: (e) =>
                        (function (e) {
                            switch (e) {
                                case R.y$.CROSS_PLATFORM:
                                    return (0, r.jsx)(p.Che, { className: B.platformSelectionOptionIcon });
                                case R.y$.PC:
                                    return (0, r.jsx)(p.pzj, { className: B.platformSelectionOptionIcon });
                                case R.y$.PLAYSTATION:
                                    return (0, r.jsx)(p.Tsp, { className: B.platformSelectionOptionIcon });
                                case R.y$.SWITCH:
                                    return (0, r.jsx)(p.aPH, { className: B.platformSelectionOptionIcon });
                                case R.y$.XBOX:
                                    return (0, r.jsx)(p.Mko, { className: B.platformSelectionOptionIcon });
                            }
                        })(e.value),
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
                      G && (0, O.JG)(en.code),
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
            selectedPlatformType: W,
            redemptionLink: eC,
            sourceQuestContent: I,
        }),
        ey = er && K,
        ej = !ey && ((er && null == W) || ef),
        ex = null != eC && "" !== eC,
        ev = M.intl.string(M.t["23SS+/"]);
    er
        ? (ev = M.intl.string(M.t.SLZMi4))
        : !er && ei
          ? (ev = M.intl.string(M.t.gNJHHh))
          : ex && (ev = M.intl.string(M.t["+zx47e"]));
    let eO = !X && null != en && !P && !ei,
        eS = null != eb && et,
        eA = (0, _.Gd)(l.id);
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
                                text: ev,
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
                    sprites: q.CA,
                    colors: q.Br,
                }),
        ],
    });
}
