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
    A = s(834730),
    d = s(331322),
    S = s(821609),
    T = s(661531),
    _ = s(313961),
    m = s(952818),
    C = s(409626),
    Q = s(834757),
    x = s(363195),
    f = s(461782),
    L = s(290863),
    h = s(287809),
    v = s(340124),
    g = s(859703),
    R = s(507107),
    I = s(112142),
    U = s(3738),
    p = s(31587),
    N = s(551875),
    j = s(18437),
    M = s(590202),
    b = s(851936),
    q = s(651892),
    y = s(710969),
    V = s(639214),
    F = s(792620),
    D = s(814793),
    G = s(73473),
    w = s(270045),
    O = s(192551),
    P = s(79545);
s(134528), s(947204);
var H = s(885574),
    k = s(870788);
let z = n.forwardRef(function (e, t) {
    let { isInventory: s, style: n, children: u } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: k.Q,
        style: { marginTop: 8 * !!s, ...n },
        children: [
            (0, l.jsx)(H.m, {
                size: "custom",
                className: k.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? T.A.colors.TEXT_MUTED.css : T.A.colors.WHITE.css,
            }),
            (0, l.jsx)(A.E, {
                color: s ? "text-muted" : "always-white",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: u,
            }),
        ],
    });
});
var B = s(431540);
let W = function (e) {
    let { className: t, color: s = T.A.colors.WHITE, quest: n, isInventory: u } = e,
        i = (0, p.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, p.O9)(n);
    return !u && i.length > 0
        ? (0, l.jsx)(z, { children: i.at(0) })
        : (0, l.jsxs)("div", {
              className: r()(B.iE, t),
              style: { color: s.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: B.O,
                      children: [
                          (0, l.jsx)(A.E, { variant: "text-xs/semibold", className: B.Df, color: "none", children: o }),
                          (0, l.jsx)("div", { className: B.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: B.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, l.jsx)("div", { className: B.SX, style: { width: `${a}%` } }),
                  }),
                  i.length > 0 && (0, l.jsx)(z, { isInventory: u, children: i.at(0) }),
              ],
          });
};
var $ = s(847641),
    Y = s(646764),
    K = s(311243),
    J = s(617986),
    X = s(795965),
    Z = s(190107),
    ee = s(652215),
    et = s(806931),
    es = s(375708),
    el = s(347562);
function en(e) {
    let { channelId: t, quest: s, previewQuest: u, isParticipatingOverride: f } = e,
        G = (0, j.Ut)(),
        [H, k] = n.useState(!1),
        z = n.useCallback(() => k(!0), []),
        B = n.useCallback(() => k(!1), []),
        en = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        eu = (0, i.bG)([x.A], () => x.A.getState().theme),
        er = (0, a.M)(eu) ? ee.NJ8.DARK : ee.NJ8.LIGHT,
        ei = (0, i.bG)([_.A], () => _.A.getParticipants(e.channelId), [e.channelId]),
        ea = (0, i.bG)(
            [g.A],
            () => (0, y.t6)(g.A.quests, g.A.questToDeliverForPlacement, R.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eo, isQuestInQuestBar: ec } = (0, i.cf)([L.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != s &&
                    null != en &&
                    ((e = L.A),
                    ei.some((t) => {
                        if (t.type !== et.lp.STREAM || t.user.id !== en.id) return !1;
                        let l = (0, Q.nr)(t.stream, e);
                        return null != l && (0, V.zS)(l, s);
                    })),
                isQuestInQuestBar: ea?.id === s?.id,
            };
        }, [en, s, ei, ea]),
        eE = (0, F.pU)(s)?.[0],
        eA = (0, i.bG)([m.Ay, L.A], () => {
            let e = m.Ay.getRunningGames().map((e) => e.id);
            if ((0, F.xZ)(s) && null !== eE && e.includes(eE)) return !0;
            let t = null != en ? L.A.findActivity(en.id, (e) => e.type !== ee.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, F.g5)(s) && (0, V.zS)(t, s));
        }, [s, en, eE]),
        ed = !0 === f || eo || eA,
        eS = (0, i.bG)([g.A], () => null != s && g.A.isEnrolling(s.id), [s]),
        eT = (0, i.bG)([_.A], () => (en?.id == null ? null : _.A.getParticipant(t, en.id)) != null, [t, en]),
        { launchInGameActivity: e_ } = (0, p.zW)(s),
        em = (0, p.S5)(s?.config.expiresAt),
        eC = (0, p.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        eQ = n.useCallback(() => {
            (0, v.Oy)(s.id, {
                questContent: R.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.ACCEPT_QUEST,
                sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
            }),
                (0, D.vA)(s) && e_();
        }, [s, e_]),
        ex = n.useCallback(() => {
            G({
                questId: s.id,
                questContent: R.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.TRACK_PROGRESS,
                sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
            }),
                (0, J.navigateToQuestHome)({ fromContent: R.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, G]),
        ef = n.useCallback(() => {
            G({
                questId: s.id,
                questContent: R.uF.QUEST_LIVE_STREAM,
                questContentCTA: M.Cy.LEARN_MORE,
                sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
            }),
                (0, J.navigateToQuestHome)({ fromContent: R.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, G]),
        eL = (0, X.D)({
            quest: s,
            questContent: R.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
            experimentLocation: Z.rE.QUEST_CHANNEL_CALL_HEADER,
        }),
        eh = n.useMemo(() => (0, b.L)({ quest: s, location: Z.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        ev = (0, U.NA)({ quest: s }),
        eg = (0, D.vA)(s),
        eR = (0, p.LS)(s),
        eI = s.userStatus?.enrolledAt != null,
        eU = s.userStatus?.completedAt != null,
        ep = null != s.userStatus && (0, y.gO)(s.userStatus, R.uF.QUEST_LIVE_STREAM),
        eN = null != s.userStatus && (0, y.gO)(s.userStatus, R.uF.QUEST_BAR),
        ej = ec && !eN,
        eM = I.t.useConfig({ location: Z.rE.QUEST_CHANNEL_CALL_HEADER }),
        eb = (0, P.Pd)(s);
    eh.info({
        isQuestCallHeaderDismissed: ep,
        isQuestExpired: eR,
        isQuestBarShowing: ej,
        isCurrentUserCallParticipant: eT,
    });
    let eq = null != u && s.userStatus?.claimedAt == null;
    if ((!eq && (ep || eR || ej)) || (!eq && !eT)) return null;
    let ey = (0, F.Yh)(s),
        eV = (0, l.jsx)(Y.A, {
            className: el.Qq,
            autoplay: H,
            quest: s,
            questContent: R.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(el.iE, { [el.rH]: eI }),
        onFocus: z,
        onMouseEnter: z,
        onBlur: B,
        onMouseLeave: B,
        children: [
            !eI &&
                (0, l.jsxs)("div", {
                    className: el.D9,
                    children: [(0, l.jsx)($.A, { bgOpacity: 0.32, className: el.Pu }), eV],
                }),
            (0, l.jsxs)("div", {
                className: el.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: el.R_,
                        children: [
                            eI && ed
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
                                                children: ed
                                                    ? (0, q.YT)({ quest: s, taskDetails: ey })
                                                    : es.intl.formatToPlainString(es.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(w.C, {
                                                questContent: R.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
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
                                    (0, l.jsx)(A.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eU
                                            ? es.intl.formatToPlainString(es.t.APddvF, { expirationDate: eC })
                                            : es.intl.formatToPlainString(es.t["pX+fmn"], { expirationDate: em }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eI &&
                        !eU &&
                        !ed &&
                        (0, l.jsx)(K.A, {
                            autoplay: H,
                            quest: s,
                            questContent: R.uF.QUEST_LIVE_STREAM,
                            taskDetails: ey,
                            location: Z.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: C.Ob.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: el.uz,
                        children: [
                            !eI &&
                                (0, l.jsxs)(d.B, {
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
                                        eb === P.UA.UNENROLLED &&
                                        eM.enabledQuestStates.has(P.UA.UNENROLLED) &&
                                        !eR
                                            ? (0, l.jsx)(O.A, {
                                                  quest: s,
                                                  surface: P.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: R.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: R.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(S.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ev,
                                                  onClick: eQ,
                                                  loading: eS,
                                              }),
                                    ],
                                }),
                            eI && !eU && ed && (0, l.jsx)(W, { color: T.A.colors.BACKGROUND_BRAND, quest: s }),
                            eI &&
                                !eU &&
                                !ed &&
                                (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.VN1Ajl),
                                    onClick: ex,
                                }),
                            eU &&
                                (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.cfY4PE),
                                    onClick: eL,
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
        o = (0, i.bG)([_.A], () => _.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, i.bG)(
            [L.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === et.lp.STREAM) {
                                  let e = (0, Q.nr)(l.stream, s) ?? null,
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
                      })(o, a, L.A),
            [o, a, r, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, v.yO)([E], R.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let A = (0, i.bG)([g.A], () => {
            let e = g.A.earnedQuestForPlacement.get(R.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.earnedDecisionByQuestId.get(E);
            return (0, y.Oh)(t) && t.shouldDeliver ? g.A.getQuest(E) : null;
        }, [E]),
        [d, S] = n.useState(null);
    n.useEffect(() => {
        null != A ? S(A) : null === E && S(null);
    }, [A, E]);
    let T = A ?? (null !== E ? d : null),
        m = e.previewQuest ?? T;
    return null == m || s
        ? null
        : (0, l.jsx)(G.R, {
              questOrQuests: m,
              overrideVisibility: !t,
              questContent: R.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: R.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(en, { ...e, quest: m }),
          });
}
let er = function (e) {
    let t = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        s = (0, i.bG)([_.A], () => (t?.id == null ? null : _.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, i.bG)([g.A], () => g.A.getQuestPreviewOverride(R.uF.QUEST_LIVE_STREAM), []),
        u = e.previewQuest ?? n;
    return s || null != u ? (0, l.jsx)(eu, { ...e, previewQuest: u }) : null;
};
