s.d(t, { A: () => eA });
var l = s(477900),
    n = s(582128),
    u = s(503698),
    r = s.n(u),
    i = s(323889),
    a = s(17928),
    o = s(462887),
    E = s(297264),
    c = s(939249),
    A = s(365199),
    d = s(834730),
    S = s(331322),
    T = s(821609),
    _ = s(661531),
    C = s(157559),
    m = s(274670),
    Q = s(144779),
    L = s(198052),
    I = s(952818),
    R = s(409626),
    x = s(834757),
    f = s(363195),
    h = s(461782),
    v = s(290863),
    g = s(287809),
    N = s(352774),
    p = s(859703),
    U = s(24001),
    M = s(104886),
    j = s(112142),
    y = s(3738),
    b = s(514547),
    q = s(291749),
    F = s(18437),
    V = s(590202),
    D = s(971649),
    G = s(851936),
    O = s(651892),
    P = s(710969),
    w = s(639214),
    k = s(792620),
    H = s(814793),
    W = s(73473),
    z = s(270045),
    B = s(657113),
    K = s(79545);
s(134528), s(947204);
var $ = s(885574),
    X = s(661644);
let Y = n.forwardRef(function (e, t) {
    let { isInventory: s, style: n, children: u } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: X.Q,
        style: { marginTop: 8 * !!s, ...n },
        children: [
            (0, l.jsx)($.m, {
                size: "custom",
                className: X.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? _.A.colors.TEXT_MUTED.css : _.A.colors.WHITE.css,
            }),
            (0, l.jsx)(d.E, {
                color: s ? "text-muted" : "text-overlay-light",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: u,
            }),
        ],
    });
});
var J = s(590524);
let Z = function (e) {
    let { className: t, color: s = _.A.colors.WHITE, quest: n, isInventory: u } = e,
        i = (0, b.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, b.O9)(n);
    return !u && i.length > 0
        ? (0, l.jsx)(Y, { children: i.at(0) })
        : (0, l.jsxs)("div", {
              className: r()(J.iE, t),
              style: { color: s.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: J.O,
                      children: [
                          (0, l.jsx)(d.E, { variant: "text-xs/semibold", className: J.Df, color: "none", children: o }),
                          (0, l.jsx)("div", { className: J.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: J.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, l.jsx)("div", { className: J.SX, style: { width: `${a}%` } }),
                  }),
                  i.length > 0 && (0, l.jsx)(Y, { isInventory: u, children: i.at(0) }),
              ],
          });
};
var ee = s(847641),
    et = s(646764),
    es = s(311243),
    el = s(617986),
    en = s(630037),
    eu = s(190107),
    er = s(652215),
    ei = s(806931),
    ea = s(375708),
    eo = s(838834);
function eE(e) {
    let { channelId: t, quest: s, previewQuest: u, isParticipatingOverride: h } = e,
        W = (0, F.Ut)(),
        $ = (0, D.go)(),
        [X, Y] = n.useState(!1),
        J = n.useCallback(() => Y(!0), []),
        eE = n.useCallback(() => Y(!1), []),
        ec = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        eA = (0, a.bG)([f.A], () => f.A.getState().theme),
        ed = (0, o.M)(eA) ? er.NJ8.DARK : er.NJ8.LIGHT,
        eS = (0, a.bG)([L.A], () => L.A.getParticipants(e.channelId), [e.channelId]),
        eT = (0, a.bG)(
            [p.A],
            () => (0, P.t6)(p.A.quests, p.A.questToDeliverForPlacement, U.p9.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: e_, isQuestInQuestBar: eC } = (0, a.cf)([v.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != s &&
                    null != ec &&
                    ((e = v.A),
                    eS.some((t) => {
                        if (t.type !== ei.lp.STREAM || t.user.id !== ec.id) return !1;
                        let l = (0, x.nr)(t.stream, e);
                        return null != l && (0, w.zS)(l, s);
                    })),
                isQuestInQuestBar: eT?.id === s?.id,
            };
        }, [ec, s, eS, eT]),
        em = (0, k.pU)(s)?.[0],
        eQ = (0, a.bG)([I.Ay, v.A], () => {
            let e = I.Ay.getRunningGames().map((e) => e.id);
            if ((0, k.xZ)(s) && null !== em && e.includes(em)) return !0;
            let t = null != ec ? v.A.findActivity(ec.id, (e) => e.type !== er.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, k.g5)(s) && (0, w.zS)(t, s));
        }, [s, ec, em]),
        eL = !0 === h || e_ || eQ,
        eI = (0, a.bG)([p.A], () => null != s && p.A.isEnrolling(s.id), [s]),
        eR = (0, a.bG)([L.A], () => (ec?.id == null ? null : L.A.getParticipant(t, ec.id)) != null, [t, ec]),
        { launchInGameActivity: ex } = (0, b.zW)(s),
        ef = (0, b.S5)(s?.config.expiresAt),
        eh = (0, b.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        ev = n.useCallback(async () => {
            let { type: e } = await (0, N.Oy)(s.id, {
                questContent: U.uF.QUEST_LIVE_STREAM,
                questContentCTA: V.Cy.ACCEPT_QUEST,
                sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case N.WM.SUCCESS:
                    (0, H.vA)(s) && ex();
                    break;
                case N.WM.CAPTCHA_FAILED:
                    C.A.show({ title: ea.intl.string(ea.t["/CidxO"]), body: ea.intl.string(ea.t.HQdHg6) });
                    break;
                case N.WM.UNKNOWN_ERROR:
                    C.A.show({ title: ea.intl.string(ea.t.R0RpRX), body: ea.intl.string(ea.t.OXD41D) });
            }
        }, [s, ex]),
        eg = n.useCallback(() => {
            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: Q.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      surfaceId: U.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                      impressionId: $,
                  })
                : W({
                      questId: s.id,
                      questContent: U.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                  }),
                (0, el.mA)({ fromContent: U.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, W, $]),
        eN = n.useCallback(() => {
            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: Q.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.LEARN_MORE,
                      surfaceId: U.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                      impressionId: $,
                  })
                : W({
                      questId: s.id,
                      questContent: U.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.LEARN_MORE,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                  }),
                (0, el.mA)({ fromContent: U.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, W, $]),
        ep = (0, en.D)({ quest: s, questContent: U.uF.QUEST_LIVE_STREAM, sourceQuestContent: U.uF.QUEST_LIVE_STREAM }),
        eU = n.useMemo(() => (0, G.L)({ quest: s, location: eu.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        eM = (0, y.NA)({ quest: s }),
        ej = (0, H.vA)(s),
        ey = (0, b.LS)(s),
        eb = s.userStatus?.enrolledAt != null,
        eq = s.userStatus?.completedAt != null,
        eF = null != u && s.userStatus?.claimedAt == null,
        eV = null != s.userStatus && (0, P.gO)(s.userStatus, U.uF.QUEST_LIVE_STREAM),
        eD = null != s.userStatus && (0, P.gO)(s.userStatus, U.uF.QUEST_BAR),
        eG = eC && !eD,
        eO = j.t.useConfig({ location: eu.rE.QUEST_CHANNEL_CALL_HEADER }),
        eP = (0, K.Pd)(s);
    if (
        (eU.info({
            isQuestCallHeaderDismissed: eV,
            isQuestExpired: ey,
            isQuestBarShowing: eG,
            isCurrentUserCallParticipant: eR,
        }),
        (!eF && (eV || ey || eG)) || (!eF && !eR))
    )
        return null;
    let ew = (0, k.Yh)(s),
        ek = (0, l.jsx)(et.A, {
            className: eo.Qq,
            autoplay: X,
            quest: s,
            questContent: U.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(eo.iE, { [eo.rH]: eb }),
        onFocus: J,
        onMouseEnter: J,
        onBlur: eE,
        onMouseLeave: eE,
        children: [
            !eb &&
                (0, l.jsxs)("div", {
                    className: eo.D9,
                    children: [(0, l.jsx)(ee.A, { bgOpacity: 0.32, className: eo.Pu }), ek],
                }),
            (0, l.jsxs)("div", {
                className: eo.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eo.R_,
                        children: [
                            eb && eL
                                ? ek
                                : (0, l.jsx)("img", {
                                      className: eo.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, q.tW)(s, q.fY.GAME_TILE, ed).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eo.Mg,
                                        children: [
                                            (0, l.jsx)(E.D, {
                                                className: eo.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eL
                                                    ? (0, O.YT)({ quest: s, taskDetails: ew })
                                                    : ea.intl.formatToPlainString(ea.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(z.C, {
                                                questContent: U.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(c.D, {
                                                        ...e,
                                                        className: eo.rb,
                                                        "aria-label": ea.intl.string(ea.t.DEoVWZ),
                                                        children: (0, l.jsx)(A.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: eo.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(d.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eq
                                            ? ea.intl.formatToPlainString(ea.t.APddvF, { expirationDate: eh })
                                            : ea.intl.formatToPlainString(ea.t["pX+fmn"], { expirationDate: ef }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eb &&
                        !eq &&
                        !eL &&
                        (0, l.jsx)(es.A, {
                            autoplay: X,
                            quest: s,
                            questContent: U.uF.QUEST_LIVE_STREAM,
                            taskDetails: ew,
                            location: eu.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: R.GameProfileSources.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: eo.uz,
                        children: [
                            !eb &&
                                (0, l.jsxs)(S.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(T.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: ea.intl.string(ea.t.LLLLPD),
                                            onClick: eN,
                                            fullWidth: !ej || s.config.features.includes(eu.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eO.enabled &&
                                        eP === K.UA.UNENROLLED &&
                                        eO.enabledQuestStates.has(K.UA.UNENROLLED) &&
                                        !ey
                                            ? (0, l.jsx)(B.A, {
                                                  quest: s,
                                                  surface: K.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: U.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(T.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eM,
                                                  onClick: ev,
                                                  loading: eI,
                                              }),
                                    ],
                                }),
                            eb && !eq && eL && (0, l.jsx)(Z, { color: _.A.colors.BACKGROUND_BRAND, quest: s }),
                            eb &&
                                !eq &&
                                !eL &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: ea.intl.string(ea.t.VN1Ajl),
                                    onClick: eg,
                                }),
                            eq &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: ea.intl.string(ea.t.cfY4PE),
                                    onClick: ep,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ec(e) {
    let t = n.useContext(h.vG),
        s = (0, a.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []),
        u = (0, a.bG)([p.A], () => p.A.quests),
        r = (0, b.oH)(Array.from(u.values())),
        i = n.useMemo(() => (0, H.$e)(u, eu.Ls), [u]),
        o = (0, a.bG)([L.A], () => L.A.getParticipants(e.channelId), [e.channelId]),
        E = (0, a.bG)(
            [v.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === ei.lp.STREAM) {
                                  let e = (0, x.nr)(l.stream, s) ?? null,
                                      n = (0, w.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let l of e)
                                  if (!(0, ei.PJ)(l))
                                      for (let e of s.getActivities(l.user.id)) {
                                          let s = (0, w.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, i, v.A),
            [o, i, r, e.previewQuest],
        ),
        c = E?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != c && (0, N.yO)([c], U.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [c, e.previewQuest]);
    let A = (0, a.bG)([p.A], () => {
            let e = p.A.earnedQuestForPlacement.get(U.uF.QUEST_LIVE_STREAM);
            if (null == e || null == c) return null;
            let t = e.earnedDecisionByQuestId.get(c);
            return (0, P.Oh)(t) && t.shouldDeliver ? p.A.getQuest(c) : null;
        }, [c]),
        [d, S] = n.useState(null);
    n.useEffect(() => {
        null != A ? S(A) : null === c && S(null);
    }, [A, c]);
    let T = A ?? (null !== c ? d : null),
        _ = e.previewQuest ?? T;
    return null == _ || s
        ? null
        : (0, l.jsx)(W.R, {
              questOrQuests: _,
              overrideVisibility: !t,
              questContent: U.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(eE, { ...e, quest: _ }),
          });
}
let eA = function (e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        s = (0, a.bG)([L.A], () => (t?.id == null ? null : L.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, a.bG)([p.A], () => p.A.getQuestPreviewOverride(U.uF.QUEST_LIVE_STREAM), []),
        u = e.previewQuest ?? n;
    return s || null != u ? (0, l.jsx)(ec, { ...e, previewQuest: u }) : null;
};
