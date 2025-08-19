r.d(t, { default: () => U }), r(388685), r(704826), r(35282);
var n = r(951288),
    a = r(647438),
    o = r(120356),
    s = r.n(o),
    i = r(238651),
    l = r(442837),
    c = r(692547),
    d = r(780384),
    u = r(755721),
    p = r(481060),
    m = r(484614),
    f = r(211266),
    _ = r(110924),
    C = r(448986),
    h = r(410030),
    b = r(607070),
    g = r(475271),
    y = r(530618),
    O = r(454585),
    w = r(246946),
    j = r(572004),
    v = r(302221),
    x = r(617136),
    S = r(509212),
    E = r(113434),
    T = r(569984),
    R = r(497505),
    I = r(192023),
    P = r(804127),
    k = r(566078),
    A = r(617889),
    N = r(602667),
    D = r(652380),
    q = r(644646),
    B = r(78826),
    L = r(46140),
    Z = r(675654),
    M = r(388032),
    W = r(777738);
function V(e) {
    var t;
    let { quest: r, rewardCode: a, hasTieredRewardCodes: o, sourceQuestContent: i } = e,
        l = (0, d.wj)((0, h.ZP)()),
        u = (0, I.h)({
            location: L.dr.REWARD_CODE_MODAL,
            questConfig: r.config,
        }),
        m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = u ? m : r.config.colors.primary,
        _ = {
            border: "1px solid ".concat(f),
            background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                    (0, v.aD)(f, 0.2),
                    " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat((0, v.aD)(f, 0.6), " 44%,\n      transparent 76%\n    ),\n    ")
                .concat(l ? "var(--black)" : "var(--white)", "\n    "),
        },
        C = (0, A.B)(r, !1),
        b = (null == (t = r.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: g, subHeader: y } = (function (e) {
            var t, r, n, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = i ? "" : M.intl.string(M.t.UUKbio),
                d = i
                    ? (0, S.o9)({
                          quest: o,
                          idx:
                              null != (n = null == s ? void 0 : s.tier)
                                  ? n
                                  : null == (r = o.userStatus)
                                    ? void 0
                                    : r.claimedTier,
                      })
                    : null,
                u = k.r.build(o.config),
                p = null != d && null != (a = d.messages.name) ? a : u.defaultRewardName,
                m = i ? M.intl.string(M.t.cfY4PD) : u.defaultRewardName;
            return {
                subHeader: l ? M.intl.string(M.t.YpswQk) : c,
                header: l ? p : m,
            };
        })({
            quest: r,
            rewardCode: a,
            hasTieredRewardCodes: o,
        }),
        { hasError: O, isLoading: w } = (0, B.d7)();
    return (0, n.jsxs)("div", {
        style: _,
        className: W.rewardTile,
        children: [
            (0, n.jsxs)("div", {
                className: W.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": u ? m : r.config.colors.primary },
                children: [
                    w &&
                        !O &&
                        (0, n.jsx)(p.$jN, {
                            className: W.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE,
                        }),
                    O && (0, n.jsx)(p.fFY, { className: W.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(q.Z, {
                        className: s()(W.rewardTileAsset, { [W.rewardTileAssetLoading]: w || O }),
                        quest: r,
                        questContent: C.trackingCtx.content,
                        location: L.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: i,
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: W.rewardSubheading,
                children: [
                    b &&
                        (0, n.jsx)(p.kmB, {
                            size: "xs",
                            color: c.Z.colors.TEXT_MUTED,
                            className: W.rewardSubheadingIcon,
                        }),
                    (0, n.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: W.rewardSubheadingText,
                        children: y,
                    }),
                ],
            }),
            (0, n.jsx)(p.X6q, {
                variant: "display-sm",
                color: "header-primary",
                className: W.rewardHeading,
                children: g,
            }),
        ],
    });
}
function U(e) {
    let t = (0, l.e7)([T.Z], () => T.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, n.jsx)(N.A, {
              questOrQuests: t,
              questContent: R.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (r) => {
                  var a, o;
                  return (0, n.jsx)(
                      z,
                      ((a = (function (e) {
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
                      (o = o =
                          {
                              impressionRef: r,
                              quest: t,
                              preview: e.preview,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
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
            transitionState: r,
            onClose: o,
            quest: s,
            questContent: c,
            questContentPosition: d,
            impressionRef: h,
            preview: v,
            sourceQuestContent: I,
        } = e,
        A = (0, f.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        N = k.r.build(s.config).rewardPlatforms,
        q = N.length > 1,
        [U, z] = a.useState(q ? null : N[0]),
        Q = a.useRef(new i.qA()),
        X = a.useRef(null),
        [G, F] = a.useState(null),
        H = (0, l.e7)([b.Z], () => b.Z.useReducedMotion),
        $ = (0, l.e7)([w.Z], () => w.Z.hidePersonalInformation),
        {
            questStoreRewardCode: J,
            isFetchingRewardCode: Y,
            isClaimingReward: K,
        } = (0, l.cj)([T.Z], () => ({
            questStoreRewardCode: T.Z.getRewardCode(s.id),
            isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
            isClaimingReward: T.Z.isClaimingReward(s.id),
        })),
        ee = (0, x.O5)(),
        et = (0, S.oo)({ quest: s }),
        er = !0 === v ? (0, D.b)(s) : J,
        en = q && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == er,
        {
            claimCode: ea,
            fetchCode: eo,
            hasError: es,
            setHasError: ei,
        } = (0, P.u)({
            isClaimingReward: K,
            isFetchingRewardCode: Y,
            quest: s,
            questContent: c,
            requiresPlatformSelection: en,
            rewardCode: er,
            selectedPlatformType: U,
            preview: v,
        }),
        el = es && !K && !Y;
    !(function (e) {
        let t = (0, C.Z)(e),
            r = g.default.useIsCaptchaModalOpen(),
            n = (0, _.Z)(r),
            o = !!(!r && n);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        ei(!0);
    });
    let ec = null;
    A && null != er
        ? (ec = M.intl.string(M.t.srzsU1))
        : null != er
          ? (ec = M.intl.string(M.t.PJBpdX))
          : en && (ec = M.intl.string(M.t.JRU8dn));
    let ed =
            null != ec
                ? (0, n.jsx)(p.X6q, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: W.heading,
                      children: ec,
                  })
                : null,
        eu = (function (e) {
            let {
                    quest: t,
                    selectedPlatform: r,
                    requiresPlatformSelection: a,
                    rewardCode: o,
                    hasTieredRewardCodes: s,
                } = e,
                i = k.r.build(t.config);
            if (a)
                return (0, n.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: W.bodyCopy,
                    children: s
                        ? M.intl.format(M.t.m0btAQ, {})
                        : M.intl.format(M.t["ZUA/Ul"], { rewardName: i.defaultRewardName }),
                });
            let l = (0, S.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: r,
                sharedQuestFields: i,
            });
            return null != o && null != l
                ? (0, n.jsx)(p.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: W.bodyCopy,
                      children: O.Z.parse(l, !1, { allowLinks: !0 }),
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: U,
            requiresPlatformSelection: en,
            rewardCode: er,
            hasTieredRewardCodes: et,
        }),
        ep = a.useMemo(
            () =>
                N.map((e) => ({
                    label: (0, S.t2)(e),
                    value: e,
                })),
            [N],
        ),
        em = null;
    en &&
        (em = (0, n.jsxs)(p.xJW, {
            title: M.intl.string(M.t.vVcTtL),
            children: [
                (0, n.jsx)(p.PhF, {
                    placeholder: M.intl.string(M.t.EMrUHR),
                    options: ep,
                    select: (e) => {
                        ei(!1), z(e);
                    },
                    isSelected: (e) => e === U,
                    serialize: (e) => (0, S.t2)(e),
                    className: el ? W.errorInput : "",
                    isDisabled: K,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case R.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(p.Che, { className: W.platformSelectionOptionIcon });
                                case R.y$.PC:
                                    return (0, n.jsx)(p.pzj, { className: W.platformSelectionOptionIcon });
                                case R.y$.PLAYSTATION:
                                    return (0, n.jsx)(p.Tsp, { className: W.platformSelectionOptionIcon });
                                case R.y$.SWITCH:
                                    return (0, n.jsx)(p.aPH, { className: W.platformSelectionOptionIcon });
                                case R.y$.XBOX:
                                    return (0, n.jsx)(p.Mko, { className: W.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)("div", {
                            className: W.platformSelectionOptionLabelContainer,
                            children: [t, e.label],
                        });
                    },
                }),
                el ? (0, n.jsx)(p.pdY, { error: M.intl.string(M.t.rbZBMT) }) : null,
            ],
        }));
    let ef = null == er && (Y || K),
        e_ = ef && !en ? (0, n.jsx)(p.$jN, {}) : null,
        eC = null;
    null != er
        ? (eC = (0, n.jsx)(p.xJW, {
              title: M.intl.string(M.t.srzsU1),
              children: (0, n.jsx)(m.Z, {
                  value: $ ? M.intl.string(M.t["0n2u0t"]) : er.code,
                  delay: 1000,
                  buttonColor: u.zx.Colors.BRAND,
                  onCopy: () => {
                      $ && (0, j.JG)(er.code),
                          ee({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: x.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: I,
                          });
                  },
              }),
          }))
        : el &&
          !en &&
          (eC = (0, n.jsx)(p.xJW, {
              title: M.intl.string(M.t.srzsU1),
              children: (0, n.jsx)(p.oil, {
                  disabled: !0,
                  error: M.intl.string(M.t.rbZBMT),
              }),
          }));
    let eh = a.useMemo(
            () =>
                et
                    ? (0, S.o9)({
                          quest: s,
                          idx: null == er ? void 0 : er.tier,
                      })
                    : (0, S.o9)({
                          quest: s,
                          idx: 0,
                      }),
            [et, s, null == er ? void 0 : er.tier],
        ),
        eb = a.useMemo(
            () =>
                (null == eh ? void 0 : eh.redemptionLink) == null || "" === eh.redemptionLink
                    ? null
                    : (null == er ? void 0 : er.code) == null || "" === er.code
                      ? eh.redemptionLink
                      : eh.redemptionLink.replace(L.Dp, encodeURIComponent(er.code)),
            [eh, er],
        ),
        eg = (0, P.G)({
            claimCode: ea,
            fetchCode: eo,
            hasError: el,
            onDismiss: o,
            quest: s,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: en,
            selectedPlatformType: U,
            redemptionLink: eb,
            sourceQuestContent: I,
        }),
        ey = en && K,
        eO = !ey && ((en && null == U) || ef),
        ew = null != eb && "" !== eb,
        ej = M.intl.string(M.t["23SS+/"]);
    en
        ? (ej = M.intl.string(M.t.SLZMi4))
        : !en && el
          ? (ej = M.intl.string(M.t.gNJHHh))
          : ew && (ej = M.intl.string(M.t["+zx47e"]));
    let ev = !H && null != er && !A && !el,
        ex = null != e_ && et,
        eS = (0, E.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: F,
                className: W.confettiCanvas,
                environment: Q.current,
            }),
            (0, n.jsx)("div", {
                ref: (e) => {
                    (X.current = e), (h.current = e);
                },
                children: (0, n.jsxs)(p.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    size: p.CgR.DYNAMIC,
                    parentComponent: "QuestsRewardCodeModal",
                    children: [
                        (0, n.jsxs)("div", {
                            className: W.modalBody,
                            children: [
                                (0, n.jsx)(p.olH, {
                                    "data-migration-pending": !0,
                                    className: W.closeButton,
                                    onClick: () => o(),
                                }),
                                !ex &&
                                    (0, n.jsx)(B.p, {
                                        source: L.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(V, {
                                            quest: s,
                                            rewardCode: er,
                                            hasTieredRewardCodes: et,
                                            sourceQuestContent: I,
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: W.modalContent,
                                    children: [
                                        ed,
                                        eu,
                                        em,
                                        e_,
                                        eC,
                                        null != s.config.cosponsorMetadata &&
                                            null != eS &&
                                            (0, n.jsxs)("div", {
                                                className: W.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)("img", {
                                                        className: W.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eS.url,
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: W.cosponsorName,
                                                        children: M.intl.format(M.t.CSf4ER, {
                                                            cosponsorName: s.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: W.cosponsorRedemptionInstructions,
                                                        children: O.Z.parse(
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
                            "data-migration-pending": !0,
                            children: (0, n.jsx)(p.zxk, {
                                variant: "primary",
                                text: ej,
                                onClick: eg,
                                loading: ey,
                                disabled: eO,
                            }),
                        }),
                    ],
                }),
            }),
            ev &&
                (0, n.jsx)(y.Z, {
                    confettiTarget: X.current,
                    confettiCanvas: G,
                    sprites: Z.CA,
                    colors: Z.Br,
                }),
        ],
    });
}
