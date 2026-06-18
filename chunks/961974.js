s.d(t, { A: () => ec });
var l = s(627968),
    n = s(64700),
    u = s(503698),
    r = s.n(u),
    i = s(323889),
    a = s(17928),
    o = s(462887),
    E = s(534514),
    c = s(939249),
    A = s(365199),
    d = s(834730),
    T = s(331322),
    S = s(821609),
    _ = s(661531),
    C = s(274670),
    m = s(144779),
    Q = s(313961),
    L = s(952818),
    I = s(409626),
    x = s(834757),
    f = s(363195),
    R = s(461782),
    h = s(290863),
    v = s(287809),
    N = s(340124),
    U = s(859703),
    g = s(507107),
    p = s(104886),
    M = s(112142),
    j = s(3738),
    q = s(347135),
    y = s(551875),
    F = s(18437),
    V = s(590202),
    b = s(971649),
    D = s(851936),
    G = s(651892),
    P = s(710969),
    O = s(639214),
    w = s(792620),
    k = s(814793),
    H = s(73473),
    z = s(270045),
    B = s(368715),
    W = s(79545);
s(134528), s(947204);
var K = s(885574),
    $ = s(870788);
let Y = n.forwardRef(function (e, t) {
    let { isInventory: s, style: n, children: u } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: $.Q,
        style: { marginTop: 8 * !!s, ...n },
        children: [
            (0, l.jsx)(K.m, {
                size: "custom",
                className: $.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? _.A.colors.TEXT_MUTED.css : _.A.colors.WHITE.css,
            }),
            (0, l.jsx)(d.E, {
                color: s ? "text-muted" : "always-white",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: u,
            }),
        ],
    });
});
var J = s(431540);
let X = function (e) {
    let { className: t, color: s = _.A.colors.WHITE, quest: n, isInventory: u } = e,
        i = (0, q.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, q.O9)(n);
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
var Z = s(847641),
    ee = s(646764),
    et = s(311243),
    es = s(617986),
    el = s(795965),
    en = s(190107),
    eu = s(652215),
    er = s(806931),
    ei = s(375708),
    ea = s(347562);
function eo(e) {
    let { channelId: t, quest: s, previewQuest: u, isParticipatingOverride: R } = e,
        H = (0, F.Ut)(),
        K = (0, b.go)(),
        [$, Y] = n.useState(!1),
        J = n.useCallback(() => Y(!0), []),
        eo = n.useCallback(() => Y(!1), []),
        eE = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        ec = (0, a.bG)([f.A], () => f.A.getState().theme),
        eA = (0, o.M)(ec) ? eu.NJ8.DARK : eu.NJ8.LIGHT,
        ed = (0, a.bG)([Q.A], () => Q.A.getParticipants(e.channelId), [e.channelId]),
        eT = (0, a.bG)(
            [U.A],
            () => (0, P.t6)(U.A.quests, U.A.questToDeliverForPlacement, g.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eS, isQuestInQuestBar: e_ } = (0, a.cf)([h.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != s &&
                    null != eE &&
                    ((e = h.A),
                    ed.some((t) => {
                        if (t.type !== er.lp.STREAM || t.user.id !== eE.id) return !1;
                        let l = (0, x.nr)(t.stream, e);
                        return null != l && (0, O.zS)(l, s);
                    })),
                isQuestInQuestBar: eT?.id === s?.id,
            };
        }, [eE, s, ed, eT]),
        eC = (0, w.pU)(s)?.[0],
        em = (0, a.bG)([L.Ay, h.A], () => {
            let e = L.Ay.getRunningGames().map((e) => e.id);
            if ((0, w.xZ)(s) && null !== eC && e.includes(eC)) return !0;
            let t = null != eE ? h.A.findActivity(eE.id, (e) => e.type !== eu.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, w.g5)(s) && (0, O.zS)(t, s));
        }, [s, eE, eC]),
        eQ = !0 === R || eS || em,
        eL = (0, a.bG)([U.A], () => null != s && U.A.isEnrolling(s.id), [s]),
        eI = (0, a.bG)([Q.A], () => (eE?.id == null ? null : Q.A.getParticipant(t, eE.id)) != null, [t, eE]),
        { launchInGameActivity: ex } = (0, q.zW)(s),
        ef = (0, q.S5)(s?.config.expiresAt),
        eR = (0, q.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        eh = n.useCallback(() => {
            (0, N.Oy)(s.id, {
                questContent: g.uF.QUEST_LIVE_STREAM,
                questContentCTA: V.Cy.ACCEPT_QUEST,
                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            }),
                (0, k.vA)(s) && ex();
        }, [s, ex]),
        ev = n.useCallback(() => {
            (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, C.r)({
                      type: m.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      surfaceId: g.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                      impressionId: K,
                  })
                : H({
                      questId: s.id,
                      questContent: g.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                  }),
                (0, es.navigateToQuestHome)({ fromContent: g.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, H, K]),
        eN = n.useCallback(() => {
            (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, C.r)({
                      type: m.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.LEARN_MORE,
                      surfaceId: g.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                      impressionId: K,
                  })
                : H({
                      questId: s.id,
                      questContent: g.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.LEARN_MORE,
                      sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                  }),
                (0, es.navigateToQuestHome)({ fromContent: g.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, H, K]),
        eU = (0, el.D)({
            quest: s,
            questContent: g.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
            experimentLocation: en.rE.QUEST_CHANNEL_CALL_HEADER,
        }),
        eg = n.useMemo(() => (0, D.L)({ quest: s, location: en.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        ep = (0, j.NA)({ quest: s }),
        eM = (0, k.vA)(s),
        ej = (0, q.LS)(s),
        eq = s.userStatus?.enrolledAt != null,
        ey = s.userStatus?.completedAt != null,
        eF = null != s.userStatus && (0, P.gO)(s.userStatus, g.uF.QUEST_LIVE_STREAM),
        eV = null != s.userStatus && (0, P.gO)(s.userStatus, g.uF.QUEST_BAR),
        eb = e_ && !eV,
        eD = M.t.useConfig({ location: en.rE.QUEST_CHANNEL_CALL_HEADER }),
        eG = (0, W.Pd)(s);
    eg.info({
        isQuestCallHeaderDismissed: eF,
        isQuestExpired: ej,
        isQuestBarShowing: eb,
        isCurrentUserCallParticipant: eI,
    });
    let eP = null != u && s.userStatus?.claimedAt == null;
    if ((!eP && (eF || ej || eb)) || (!eP && !eI)) return null;
    let eO = (0, w.Yh)(s),
        ew = (0, l.jsx)(ee.A, {
            className: ea.Qq,
            autoplay: $,
            quest: s,
            questContent: g.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(ea.iE, { [ea.rH]: eq }),
        onFocus: J,
        onMouseEnter: J,
        onBlur: eo,
        onMouseLeave: eo,
        children: [
            !eq &&
                (0, l.jsxs)("div", {
                    className: ea.D9,
                    children: [(0, l.jsx)(Z.A, { bgOpacity: 0.32, className: ea.Pu }), ew],
                }),
            (0, l.jsxs)("div", {
                className: ea.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: ea.R_,
                        children: [
                            eq && eQ
                                ? ew
                                : (0, l.jsx)("img", {
                                      className: ea.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, y.tW)(s, y.fY.GAME_TILE, eA).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ea.Mg,
                                        children: [
                                            (0, l.jsx)(E.D, {
                                                className: ea.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eQ
                                                    ? (0, G.YT)({ quest: s, taskDetails: eO })
                                                    : ei.intl.formatToPlainString(ei.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(z.C, {
                                                questContent: g.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(c.D, {
                                                        ...e,
                                                        className: ea.rb,
                                                        "aria-label": ei.intl.string(ei.t.DEoVWZ),
                                                        children: (0, l.jsx)(A.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: ea.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(d.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: ey
                                            ? ei.intl.formatToPlainString(ei.t.APddvF, { expirationDate: eR })
                                            : ei.intl.formatToPlainString(ei.t["pX+fmn"], { expirationDate: ef }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eq &&
                        !ey &&
                        !eQ &&
                        (0, l.jsx)(et.A, {
                            autoplay: $,
                            quest: s,
                            questContent: g.uF.QUEST_LIVE_STREAM,
                            taskDetails: eO,
                            location: en.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: I.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: ea.uz,
                        children: [
                            !eq &&
                                (0, l.jsxs)(T.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(S.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: ei.intl.string(ei.t.LLLLPD),
                                            onClick: eN,
                                            fullWidth: !eM || s.config.features.includes(en.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eD.enabled &&
                                        eG === W.UA.UNENROLLED &&
                                        eD.enabledQuestStates.has(W.UA.UNENROLLED) &&
                                        !ej
                                            ? (0, l.jsx)(B.A, {
                                                  quest: s,
                                                  surface: W.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: g.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: g.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(S.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ep,
                                                  onClick: eh,
                                                  loading: eL,
                                              }),
                                    ],
                                }),
                            eq && !ey && eQ && (0, l.jsx)(X, { color: _.A.colors.BACKGROUND_BRAND, quest: s }),
                            eq &&
                                !ey &&
                                !eQ &&
                                (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: ei.intl.string(ei.t.VN1Ajl),
                                    onClick: ev,
                                }),
                            ey &&
                                (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: ei.intl.string(ei.t.cfY4PE),
                                    onClick: eU,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let t = n.useContext(R.vG),
        s = (0, a.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        u = (0, a.bG)([U.A], () => U.A.quests),
        r = (0, q.oH)(Array.from(u.values())),
        i = n.useMemo(() => (0, k.$e)(u, en.Ls), [u]),
        o = (0, a.bG)([Q.A], () => Q.A.getParticipants(e.channelId), [e.channelId]),
        E = (0, a.bG)(
            [h.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === er.lp.STREAM) {
                                  let e = (0, x.nr)(l.stream, s) ?? null,
                                      n = (0, O.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let l of e)
                                  if (!(0, er.PJ)(l))
                                      for (let e of s.getActivities(l.user.id)) {
                                          let s = (0, O.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, i, h.A),
            [o, i, r, e.previewQuest],
        ),
        c = E?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != c && (0, N.yO)([c], g.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [c, e.previewQuest]);
    let A = (0, a.bG)([U.A], () => {
            let e = U.A.earnedQuestForPlacement.get(g.uF.QUEST_LIVE_STREAM);
            if (null == e || null == c) return null;
            let t = e.earnedDecisionByQuestId.get(c);
            return (0, P.Oh)(t) && t.shouldDeliver ? U.A.getQuest(c) : null;
        }, [c]),
        [d, T] = n.useState(null);
    n.useEffect(() => {
        null != A ? T(A) : null === c && T(null);
    }, [A, c]);
    let S = A ?? (null !== c ? d : null),
        _ = e.previewQuest ?? S;
    return null == _ || s
        ? null
        : (0, l.jsx)(H.R, {
              questOrQuests: _,
              overrideVisibility: !t,
              questContent: g.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: g.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(eo, { ...e, quest: _ }),
          });
}
let ec = function (e) {
    let t = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        s = (0, a.bG)([Q.A], () => (t?.id == null ? null : Q.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, a.bG)([U.A], () => U.A.getQuestPreviewOverride(g.uF.QUEST_LIVE_STREAM), []),
        u = e.previewQuest ?? n;
    return s || null != u ? (0, l.jsx)(eE, { ...e, previewQuest: u }) : null;
};
