s.d(t, { A: () => er });
var l = s(627968),
    n = s(64700),
    u = s(503698),
    r = s.n(u),
    i = s(17928),
    a = s(462887),
    o = s(534514),
    c = s(939249),
    E = s(365199),
    d = s(834730),
    A = s(331322),
    S = s(821609),
    T = s(661531),
    m = s(313961),
    _ = s(952818),
    C = s(409626),
    x = s(834757),
    Q = s(363195),
    f = s(461782),
    h = s(290863),
    L = s(287809),
    v = s(340124),
    g = s(859703),
    I = s(507107),
    R = s(112142),
    U = s(838077),
    p = s(31587),
    N = s(859387),
    j = s(18437),
    M = s(590202),
    b = s(851936),
    q = s(651892),
    y = s(710969),
    V = s(639214),
    F = s(792620),
    D = s(814793),
    G = s(73473),
    O = s(270045),
    P = s(371912),
    w = s(368715),
    k = s(79545);
s(134528), s(947204);
var H = s(885574),
    z = s(870788);
let B = n.forwardRef(function (e, t) {
    let { isInventory: s, style: n, children: u } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: z.Q,
        style: { marginTop: 8 * !!s, ...n },
        children: [
            (0, l.jsx)(H.m, {
                size: "custom",
                className: z.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? T.A.colors.TEXT_MUTED.css : T.A.colors.WHITE.css,
            }),
            (0, l.jsx)(d.E, {
                color: s ? "text-muted" : "always-white",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: u,
            }),
        ],
    });
});
var W = s(431540);
let $ = function (e) {
    let { className: t, color: s = T.A.colors.WHITE, quest: n, isInventory: u } = e,
        i = (0, p.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, p.O9)(n);
    return !u && i.length > 0
        ? (0, l.jsx)(B, { children: i.at(0) })
        : (0, l.jsxs)("div", {
              className: r()(W.iE, t),
              style: { color: s.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: W.O,
                      children: [
                          (0, l.jsx)(d.E, { variant: "text-xs/semibold", className: W.Df, color: "none", children: o }),
                          (0, l.jsx)("div", { className: W.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: W.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, l.jsx)("div", { className: W.SX, style: { width: `${a}%` } }),
                  }),
                  i.length > 0 && (0, l.jsx)(B, { isInventory: u, children: i.at(0) }),
              ],
          });
};
var Y = s(847641),
    K = s(646764),
    J = s(311243),
    X = s(617986),
    Z = s(190107),
    ee = s(652215),
    et = s(806931),
    es = s(375708),
    el = s(347562);
function en(e) {
    let { channelId: t, quest: s, previewQuest: u, isParticipatingOverride: f } = e,
        G = (0, j.Ut)(),
        [H, z] = n.useState(!1),
        B = n.useCallback(() => z(!0), []),
        W = n.useCallback(() => z(!1), []),
        en = (0, i.bG)([L.default], () => L.default.getCurrentUser()),
        eu = (0, i.bG)([Q.A], () => Q.A.getState().theme),
        er = (0, a.M)(eu) ? ee.NJ8.DARK : ee.NJ8.LIGHT,
        ei = (0, i.bG)([m.A], () => m.A.getParticipants(e.channelId), [e.channelId]),
        ea = (0, i.bG)(
            [g.A],
            () => (0, y.t6)(g.A.quests, g.A.questToDeliverForPlacement, I.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eo, isQuestInQuestBar: ec } = (0, i.cf)([h.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != s &&
                    null != en &&
                    ((e = h.A),
                    ei.some((t) => {
                        if (t.type !== et.lp.STREAM || t.user.id !== en.id) return !1;
                        let l = (0, x.nr)(t.stream, e);
                        return null != l && (0, V.zS)(l, s);
                    })),
                isQuestInQuestBar: ea?.id === s?.id,
            };
        }, [en, s, ei, ea]),
        eE = (0, F.pU)(s)?.[0],
        ed = (0, i.bG)([_.Ay, h.A], () => {
            let e = _.Ay.getRunningGames().map((e) => e.id);
            if ((0, F.xZ)(s) && null !== eE && e.includes(eE)) return !0;
            let t = null != en ? h.A.findActivity(en.id, (e) => e.type !== ee.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, F.g5)(s) && (0, V.zS)(t, s));
        }, [s, en, eE]),
        eA = !0 === f || eo || ed,
        eS = (0, i.bG)([g.A], () => null != s && g.A.isEnrolling(s.id), [s]),
        eT = (0, i.bG)([m.A], () => (en?.id == null ? null : m.A.getParticipant(t, en.id)) != null, [t, en]),
        { launchInGameActivity: em } = (0, p.zW)(s),
        e_ = (0, p.S5)(s?.config.expiresAt),
        eC = (0, p.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        ex = n.useCallback(() => {
            (0, v.Oy)(s.id, {
                questContent: I.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.ACCEPT_QUEST,
                sourceQuestContent: I.uF.QUEST_LIVE_STREAM,
            }),
                (0, D.vA)(s) && em();
        }, [s, em]),
        eQ = n.useCallback(() => {
            G({
                questId: s.id,
                questContent: I.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.TRACK_PROGRESS,
                sourceQuestContent: I.uF.QUEST_LIVE_STREAM,
            }),
                (0, X.navigateToQuestHome)({ fromContent: I.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, G]),
        ef = n.useCallback(() => {
            G({
                questId: s.id,
                questContent: I.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.LEARN_MORE,
                sourceQuestContent: I.uF.QUEST_LIVE_STREAM,
            }),
                (0, X.navigateToQuestHome)({ fromContent: I.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, G]),
        eh = (0, P.ix)({ quest: s, questContent: I.uF.QUEST_LIVE_STREAM, sourceQuestContent: I.uF.QUEST_LIVE_STREAM }),
        eL = n.useMemo(() => (0, b.L)({ quest: s, location: Z.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        ev = (0, U.NA)({ quest: s }),
        eg = (0, D.vA)(s),
        eI = (0, p.LS)(s),
        eR = s.userStatus?.enrolledAt != null,
        eU = s.userStatus?.completedAt != null,
        ep = null != s.userStatus && (0, y.gO)(s.userStatus, I.uF.QUEST_LIVE_STREAM),
        eN = null != s.userStatus && (0, y.gO)(s.userStatus, I.uF.QUEST_BAR),
        ej = ec && !eN,
        eM = R.t.useConfig({ location: Z.rE.QUEST_CHANNEL_CALL_HEADER }),
        eb = (0, k.Pd)(s);
    eL.info({
        isQuestCallHeaderDismissed: ep,
        isQuestExpired: eI,
        isQuestBarShowing: ej,
        isCurrentUserCallParticipant: eT,
    });
    let eq = null != u && s.userStatus?.claimedAt == null;
    if ((!eq && (ep || eI || ej)) || (!eq && !eT)) return null;
    let ey = (0, F.Yh)(s),
        eV = (0, l.jsx)(K.A, {
            className: el.Qq,
            autoplay: H,
            quest: s,
            questContent: I.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: I.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(el.iE, { [el.rH]: eR }),
        onFocus: B,
        onMouseEnter: B,
        onBlur: W,
        onMouseLeave: W,
        children: [
            !eR &&
                (0, l.jsxs)("div", {
                    className: el.D9,
                    children: [(0, l.jsx)(Y.A, { bgOpacity: 0.32, className: el.Pu }), eV],
                }),
            (0, l.jsxs)("div", {
                className: el.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: el.R_,
                        children: [
                            eR && eA
                                ? eV
                                : (0, l.jsx)("img", {
                                      className: el.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, N.tW)(s, N.fY.GAME_TILE, er).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: el.Mg,
                                        children: [
                                            (0, l.jsx)(o.D, {
                                                className: el.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eA
                                                    ? (0, q.YT)({ quest: s, taskDetails: ey })
                                                    : es.intl.formatToPlainString(es.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(O.C, {
                                                questContent: I.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: I.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(c.D, {
                                                        ...e,
                                                        className: el.rb,
                                                        "aria-label": es.intl.string(es.t.DEoVWZ),
                                                        children: (0, l.jsx)(E.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: el.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(d.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eU
                                            ? es.intl.formatToPlainString(es.t.APddvF, { expirationDate: eC })
                                            : es.intl.formatToPlainString(es.t["pX+fmn"], { expirationDate: e_ }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eR &&
                        !eU &&
                        !eA &&
                        (0, l.jsx)(J.A, {
                            autoplay: H,
                            quest: s,
                            questContent: I.uF.QUEST_LIVE_STREAM,
                            taskDetails: ey,
                            location: Z.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: I.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: C.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: el.uz,
                        children: [
                            !eR &&
                                (0, l.jsxs)(A.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(S.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: es.intl.string(es.t.LLLLPD),
                                            onClick: ef,
                                            fullWidth: !eg || s.config.features.includes(Z.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eM.enabled &&
                                        eb === k.UA.UNENROLLED &&
                                        eM.enabledQuestStates.has(k.UA.UNENROLLED) &&
                                        !eI
                                            ? (0, l.jsx)(w.A, {
                                                  quest: s,
                                                  surface: k.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: I.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: I.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(S.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ev,
                                                  onClick: ex,
                                                  loading: eS,
                                              }),
                                    ],
                                }),
                            eR && !eU && eA && (0, l.jsx)($, { color: T.A.colors.BACKGROUND_BRAND, quest: s }),
                            eR &&
                                !eU &&
                                !eA &&
                                (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.VN1Ajl),
                                    onClick: eQ,
                                }),
                            eU &&
                                (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.cfY4PE),
                                    onClick: eh,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let t = n.useContext(f.vG),
        s = (0, i.bG)([g.A], () => null != g.A.questEnrollmentBlockedUntil, []),
        u = (0, i.bG)([g.A], () => g.A.quests),
        r = (0, p.oH)(Array.from(u.values())),
        a = n.useMemo(() => (0, D.$e)(u, Z.Ls), [u]),
        o = (0, i.bG)([m.A], () => m.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, i.bG)(
            [h.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === et.lp.STREAM) {
                                  let e = (0, x.nr)(l.stream, s) ?? null,
                                      n = (0, V.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let l of e)
                                  if (!(0, et.PJ)(l))
                                      for (let e of s.getActivities(l.user.id)) {
                                          let s = (0, V.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, a, h.A),
            [o, a, r, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, v.yO)([E], I.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let d = (0, i.bG)([g.A], () => {
            let e = g.A.earnedQuestForPlacement.get(I.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.earnedDecisionByQuestId.get(E);
            return (0, y.Oh)(t) && t.shouldDeliver ? g.A.getQuest(E) : null;
        }, [E]),
        [A, S] = n.useState(null);
    n.useEffect(() => {
        null != d ? S(d) : null === E && S(null);
    }, [d, E]);
    let T = d ?? (null !== E ? A : null),
        _ = e.previewQuest ?? T;
    return null == _ || s
        ? null
        : (0, l.jsx)(G.R, {
              questOrQuests: _,
              overrideVisibility: !t,
              questContent: I.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: I.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(en, { ...e, quest: _ }),
          });
}
let er = function (e) {
    let t = (0, i.bG)([L.default], () => L.default.getCurrentUser());
    return (0, i.bG)([m.A], () => (t?.id == null ? null : m.A.getParticipant(e.channelId, t.id)) != null, [
        e.channelId,
        t,
    ]) || null != e.previewQuest
        ? (0, l.jsx)(eu, { ...e })
        : null;
};
