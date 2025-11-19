n.d(t, { default: () => Q }), n(388685), n(704826), n(35282);
var r = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(921254),
    i = n(442837),
    c = n(692547),
    d = n(780384),
    u = n(755721),
    p = n(481060),
    m = n(484614),
    f = n(211266),
    g = n(110924),
    b = n(448986),
    h = n(410030),
    C = n(607070),
    y = n(475271),
    w = n(530618),
    j = n(63954),
    v = n(454585),
    x = n(246946),
    O = n(572004),
    S = n(302221),
    A = n(617136),
    _ = n(509212),
    T = n(113434),
    N = n(569984),
    I = n(497505),
    R = n(685138),
    E = n(804127),
    D = n(602667),
    Z = n(644646),
    P = n(78826),
    k = n(46140),
    L = n(675654),
    M = n(388032),
    q = n(777738);
function B(e) {
    var t;
    let { quest: n, rewardCode: a, hasTieredRewardCodes: o, sourceQuestContent: l } = e,
        i = (0, d.wj)((0, h.ZP)()),
        u = (0, R.n)({
            location: k.dr.REWARD_CODE_MODAL,
            questConfig: n.config,
        }).enabled,
        m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = u ? m : n.config.colors.primary,
        g = {
            border: "1px solid ".concat(f),
            background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                    (0, S.aD)(f, 0.2),
                    " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat((0, S.aD)(f, 0.6), " 44%,\n      transparent 76%\n    ),\n    ")
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
        },
        b = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: C, subHeader: y } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: l } = e,
                i = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = l ? "" : M.intl.string(M.t.UUKbik),
                d = l
                    ? (0, _.o9)({
                          quest: o,
                          idx:
                              null != (r = null == s ? void 0 : s.tier)
                                  ? r
                                  : null == (n = o.userStatus)
                                    ? void 0
                                    : n.claimedTier,
                      })
                    : null,
                u = (0, _.w8)(o.config),
                p = null != d && null != (a = d.messages.name) ? a : u,
                m = l ? M.intl.string(M.t.cfY4PE) : u;
            return {
                subHeader: i ? M.intl.string(M.t.YpswQo) : c,
                header: i ? p : m,
            };
        })({
            quest: n,
            rewardCode: a,
            hasTieredRewardCodes: o,
        }),
        { hasError: w, isLoading: j } = (0, P.d7)();
    return (0, r.jsxs)("div", {
        style: g,
        className: q.rewardTile,
        children: [
            (0, r.jsxs)("div", {
                className: q.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": u ? m : n.config.colors.primary },
                children: [
                    j &&
                        !w &&
                        (0, r.jsx)(p.$jN, {
                            className: q.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE,
                        }),
                    w && (0, r.jsx)(p.fFY, { className: q.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(Z.Z, {
                        className: s()(q.rewardTileAsset, { [q.rewardTileAssetLoading]: j || w }),
                        quest: n,
                        questContent: I.jn.QUEST_BAR_V2,
                        location: k.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: l,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: q.rewardSubheading,
                children: [
                    b &&
                        (0, r.jsx)(p.kmB, {
                            size: "xs",
                            color: c.Z.colors.TEXT_MUTED,
                            className: q.rewardSubheadingIcon,
                        }),
                    (0, r.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: q.rewardSubheadingText,
                        children: y,
                    }),
                ],
            }),
            (0, r.jsx)(p.Heading, {
                variant: "display-sm",
                color: "header-primary",
                className: q.rewardHeading,
                children: C,
            }),
        ],
    });
}
function Q(e) {
    let t = (0, i.e7)([N.Z], () => N.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, r.jsx)(D.A, {
              questOrQuests: t,
              questContent: I.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (n) => {
                  var a, o;
                  return (0, r.jsx)(
                      z,
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
function z(e) {
    var t;
    let {
            transitionState: n,
            onClose: o,
            quest: s,
            questContent: c,
            questContentPosition: d,
            impressionRef: h,
            preview: S,
            sourceQuestContent: R,
        } = e,
        D = (0, f.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        Z = s.config.rewardsConfig.platforms,
        Q = Z.length > 1,
        [z, H] = a.useState(Q ? null : Z[0]),
        U = a.useRef(new l.qA()),
        W = a.useRef(null),
        [F, $] = a.useState(null),
        Y = (0, i.e7)([C.Z], () => C.Z.useReducedMotion),
        G = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
        {
            questStoreRewardCode: V,
            isFetchingRewardCode: J,
            isClaimingReward: X,
        } = (0, i.cj)([N.Z], () => ({
            questStoreRewardCode: N.Z.getRewardCode(s.id),
            isFetchingRewardCode: N.Z.isFetchingRewardCode(s.id),
            isClaimingReward: N.Z.isClaimingReward(s.id),
        })),
        K = (0, A.O5)(),
        ee = (0, _.oo)({ quest: s }),
        et = !0 === S ? (0, j.b)(s) : V,
        en = Q && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == et,
        {
            claimCode: er,
            fetchCode: ea,
            hasError: eo,
            setHasError: es,
        } = (0, E.uL)({
            isClaimingReward: X,
            isFetchingRewardCode: J,
            quest: s,
            questContent: c,
            requiresPlatformSelection: en,
            rewardCode: et,
            selectedPlatformType: z,
            preview: S,
        }),
        el = eo && !X && !J;
    !(function (e) {
        let t = (0, b.Z)(e),
            n = y.default.useIsCaptchaModalOpen(),
            r = (0, g.Z)(n),
            o = !!(!n && r);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        es(!0);
    });
    let ei = null;
    D && null != et
        ? (ei = M.intl.string(M.t.srzsU2))
        : null != et
          ? (ei = M.intl.string(M.t.PJBpda))
          : en && (ei = M.intl.string(M.t.JRU8dq));
    let ec =
            null != ei
                ? (0, r.jsx)(p.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: q.heading,
                      children: ei,
                  })
                : null,
        ed = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: a,
                rewardCode: o,
                hasTieredRewardCodes: s,
            } = e;
            if (a)
                return (0, r.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: q.bodyCopy,
                    children: s
                        ? M.intl.format(M.t.m0btAb, {})
                        : M.intl.format(M.t["ZUA/Ui"], { rewardName: (0, _.w8)(t.config) }),
                });
            let l = (0, _.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: n,
            });
            return null != o && null != l
                ? (0, r.jsx)(p.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: q.bodyCopy,
                      children: v.Z.parse(l, !1, { allowLinks: !0 }),
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: z,
            requiresPlatformSelection: en,
            rewardCode: et,
            hasTieredRewardCodes: ee,
        }),
        eu = a.useMemo(
            () =>
                Z.map((e) => ({
                    label: (0, _.t2)(e),
                    value: e,
                })),
            [Z],
        ),
        ep = null;
    en &&
        (ep = (0, r.jsx)(p.PhF, {
            label: M.intl.string(M.t.vVcTtJ),
            errorMessage: el ? M.intl.string(M.t.rbZBMR) : void 0,
            placeholder: M.intl.string(M.t.EMrUHQ),
            options: eu,
            select: (e) => {
                es(!1), H(e);
            },
            isSelected: (e) => e === z,
            serialize: (e) => (0, _.t2)(e),
            className: el ? q.errorInput : "",
            isDisabled: X,
            renderLeading: (e) =>
                (function (e) {
                    switch (e) {
                        case I.y$.CROSS_PLATFORM:
                            return (0, r.jsx)(p.Che, { className: q.platformSelectionOptionIcon });
                        case I.y$.PC:
                            return (0, r.jsx)(p.pzj, { className: q.platformSelectionOptionIcon });
                        case I.y$.PLAYSTATION:
                            return (0, r.jsx)(p.Tsp, { className: q.platformSelectionOptionIcon });
                        case I.y$.SWITCH:
                            return (0, r.jsx)(p.aPH, { className: q.platformSelectionOptionIcon });
                        case I.y$.XBOX:
                            return (0, r.jsx)(p.Mko, { className: q.platformSelectionOptionIcon });
                    }
                })(e.value),
        }));
    let em = null == et && (J || X),
        ef = em && !en ? (0, r.jsx)(p.$jN, {}) : null,
        eg = null;
    null != et
        ? (eg = (0, r.jsx)(p.gNt, {
              label: M.intl.string(M.t.srzsU2),
              children: (0, r.jsx)(m.Z, {
                  value: G ? M.intl.string(M.t["0n2u0k"]) : et.code,
                  delay: 1000,
                  buttonColor: u.zx.Colors.BRAND,
                  onCopy: () => {
                      G && (0, O.JG)(et.code),
                          K({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: A.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: R,
                          });
                  },
              }),
          }))
        : el &&
          !en &&
          (eg = (0, r.jsx)(p.oil, {
              label: M.intl.string(M.t.srzsU2),
              disabled: !0,
              error: M.intl.string(M.t.rbZBMR),
          }));
    let eb = a.useMemo(
            () =>
                ee
                    ? (0, _.o9)({
                          quest: s,
                          idx: null == et ? void 0 : et.tier,
                      })
                    : (0, _.o9)({
                          quest: s,
                          idx: 0,
                      }),
            [ee, s, null == et ? void 0 : et.tier],
        ),
        eh = a.useMemo(
            () =>
                (null == eb ? void 0 : eb.redemptionLink) == null || "" === eb.redemptionLink
                    ? null
                    : (null == et ? void 0 : et.code) == null || "" === et.code
                      ? eb.redemptionLink
                      : eb.redemptionLink.replace(k.Dp, encodeURIComponent(et.code)),
            [eb, et],
        ),
        eC = (0, E.G$)({
            claimCode: er,
            fetchCode: ea,
            hasError: el,
            onDismiss: o,
            quest: s,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: en,
            selectedPlatformType: z,
            redemptionLink: eh,
            sourceQuestContent: R,
        }),
        ey = en && X,
        ew = !ey && ((en && null == z) || em),
        ej = null != eh && "" !== eh,
        ev = M.intl.string(M.t["23SS+z"]);
    en
        ? (ev = M.intl.string(M.t.SLZMi1))
        : !en && el
          ? (ev = M.intl.string(M.t.gNJHHp))
          : ej && (ev = M.intl.string(M.t["+zx47d"]));
    let ex = !Y && null != et && !D && !el,
        eO = null != ef && ee,
        eS = (0, T.Gd)(s.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.O_, {
                ref: $,
                className: q.confettiCanvas,
                environment: U.current,
            }),
            (0, r.jsx)("div", {
                ref: (e) => {
                    (W.current = e), (h.current = e);
                },
                children: (0, r.jsxs)(p.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: n,
                    size: p.CgR.DYNAMIC,
                    parentComponent: "QuestsRewardCodeModal",
                    children: [
                        (0, r.jsxs)("div", {
                            className: q.modalBody,
                            children: [
                                (0, r.jsx)(p.olH, {
                                    "data-migration-pending": !0,
                                    className: q.closeButton,
                                    onClick: () => o(),
                                }),
                                !eO &&
                                    (0, r.jsx)(P.p, {
                                        source: k.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, r.jsx)(B, {
                                            quest: s,
                                            rewardCode: et,
                                            hasTieredRewardCodes: ee,
                                            sourceQuestContent: R,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    className: q.modalContent,
                                    children: [
                                        ec,
                                        ed,
                                        ep,
                                        ef,
                                        eg,
                                        null != s.config.cosponsorMetadata &&
                                            null != eS &&
                                            (0, r.jsxs)("div", {
                                                className: q.cosponsorFooter,
                                                children: [
                                                    (0, r.jsx)("img", {
                                                        className: q.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eS.url,
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: q.cosponsorName,
                                                        children: M.intl.format(M.t.CSf4EX, {
                                                            cosponsorName: s.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: q.cosponsorRedemptionInstructions,
                                                        children: v.Z.parse(
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
                        (0, r.jsx)(p.mzw, {
                            "data-migration-pending": !0,
                            children: (0, r.jsx)(p.Button, {
                                variant: "primary",
                                text: ev,
                                onClick: eC,
                                loading: ey,
                                disabled: ew,
                            }),
                        }),
                    ],
                }),
            }),
            ex &&
                (0, r.jsx)(w.Z, {
                    confettiTarget: W.current,
                    confettiCanvas: F,
                    sprites: L.CA,
                    colors: L.Br,
                }),
        ],
    });
}
