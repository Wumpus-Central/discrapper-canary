n.d(t, { Z: () => z }), n(388685);
var r = n(54381),
    l = n(473749),
    s = n(120356),
    i = n.n(s),
    a = n(442837),
    o = n(780384),
    u = n(481060),
    c = n(358221),
    d = n(594190),
    m = n(687516),
    E = n(210887),
    f = n(937995),
    v = n(158776),
    p = n(594174),
    j = n(22095),
    S = n(617136),
    T = n(616022),
    x = n(49436),
    h = n(535584),
    _ = n(373370),
    A = n(968843),
    g = n(475595),
    C = n(304696),
    b = n(862657),
    I = n(759479),
    N = n(254579),
    y = n(283689),
    L = n(602667),
    Z = n(698716),
    R = n(659302),
    w = n(340100),
    M = n(611855),
    O = n(644646),
    Q = n(346592),
    P = n(110560),
    U = n(324805),
    q = n(981631),
    D = n(354459),
    V = n(388032),
    k = n(838106);
function B(e) {
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
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e) {
    var t, n, s, f, L;
    let { channelId: W, quest: G, previewQuest: z, isParticipatingOverride: K } = e,
        F = (0, S.O5)(),
        [X, Y] = l.useState(!1),
        $ = l.useCallback(() => Y(!0), []),
        J = l.useCallback(() => Y(!1), []),
        ee = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        et = (0, a.e7)([E.Z], () => E.Z.getState().theme),
        en = (0, o.wj)(et) ? q.BRd.DARK : q.BRd.LIGHT,
        er = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        el = (0, a.e7)(
            [T.Z],
            () => (0, b.PM)(T.Z.quests, T.Z.questToDeliverForPlacement, x.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: es, isQuestInQuestBar: ei } = (0, a.cj)([v.Z], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != G &&
                    null != ee &&
                    ((e = v.Z),
                    er.some((t) => {
                        if (t.type !== D.fO.STREAM || t.user.id !== ee.id) return !1;
                        let n = (0, m.Um)(t.stream, e);
                        return null != n && (0, I._D)(n, G);
                    })),
                isQuestInQuestBar: (null == el ? void 0 : el.id) === (null == G ? void 0 : G.id),
            };
        }, [ee, G, er, el]),
        ea = null == (t = (0, N.vj)(G)) ? void 0 : t[0],
        eo = (0, a.e7)([d.ZP, v.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, N.$H)(G) && null !== ea && e.includes(ea)) return !0;
            let t = null != ee ? v.Z.findActivity(ee.id, (e) => e.type !== q.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, N.$J)(G) && (0, I._D)(t, G));
        }, [G, ee, ea]),
        eu = !0 === K || es || eo,
        ec = (0, a.e7)([T.Z], () => null != G && T.Z.isEnrolling(G.id), [G]),
        ed = (0, a.e7)(
            [c.Z],
            () => ((null == ee ? void 0 : ee.id) == null ? null : c.Z.getParticipant(W, ee.id)) != null,
            [W, ee],
        ),
        { launchInGameActivity: em } = (0, A.zB)(G),
        eE = (0, A.B6)(null == G ? void 0 : G.config.expiresAt),
        ef = (0, A.B6)(null == G ? void 0 : G.config.rewardsConfig.rewardsExpireAt),
        ev = l.useCallback(() => {
            (0, j.AH)(G.id, {
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: S.jZ.ACCEPT_QUEST,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
            }),
                (0, y.Rt)(G) && em();
        }, [G, em]),
        ep = l.useCallback(() => {
            F({
                questId: G.id,
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: S.jZ.TRACK_PROGRESS,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
            }),
                (0, P.navigateToQuestHome)({
                    fromContent: x.jn.QUEST_LIVE_STREAM,
                    questId: G.id,
                });
        }, [G, F]),
        ej = l.useCallback(() => {
            F({
                questId: G.id,
                questContent: x.jn.QUEST_LIVE_STREAM,
                questContentCTA: S.jZ.LEARN_MORE,
                sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
            }),
                (0, P.navigateToQuestHome)({
                    fromContent: x.jn.QUEST_LIVE_STREAM,
                    questId: G.id,
                });
        }, [G, F]),
        eS = (0, R.hf)({
            quest: G,
            questContent: x.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
        }),
        eT = l.useMemo(
            () =>
                (0, h.T)({
                    quest: G,
                    location: U.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [G],
        ),
        ex = (0, _.CR)({ quest: G }),
        eh = (0, y.Rt)(G),
        e_ = (0, A.tP)(G),
        eA = (null == (n = G.userStatus) ? void 0 : n.enrolledAt) != null,
        eg = (null == (s = G.userStatus) ? void 0 : s.completedAt) != null,
        eC = null != G.userStatus && (0, b.zE)(G.userStatus, x.jn.QUEST_LIVE_STREAM),
        eb = null != G.userStatus && (0, b.zE)(G.userStatus, x.jn.QUEST_BAR),
        eI = ei && !eb;
    eT.info({
        isQuestCallHeaderDismissed: eC,
        isQuestExpired: e_,
        isQuestBarShowing: eI,
        isCurrentUserCallParticipant: ed,
    });
    let eN = null != z && (null == (f = G.userStatus) ? void 0 : f.claimedAt) == null;
    if ((!eN && (eC || e_ || eI)) || (!eN && !ed)) return null;
    let ey = (0, N.il)(G),
        eL = (0, r.jsx)(O.Z, {
            className: k.rewardTile,
            autoplay: X,
            quest: G,
            questContent: x.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: i()(k.wrapper, { [k.wrapperAccepted]: eA }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !eA &&
                (0, r.jsxs)("div", {
                    className: k.rewardTileWrapper,
                    children: [
                        eL,
                        (0, r.jsx)(M.Z, {
                            bgOpacity: 0.32,
                            className: k.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: k.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: k.heading,
                        children: [
                            eA && eu
                                ? eL
                                : (0, r.jsx)("img", {
                                      className: k.gameTile,
                                      alt: G.config.messages.gameTitle,
                                      src: (0, g.fh)(G, g.eC.GAME_TILE, en).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: k.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: k.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eu
                                                    ? (0, C.AV)({
                                                          quest: G,
                                                          taskDetails: ey,
                                                      })
                                                    : V.intl.formatToPlainString(V.t.EQa7os, {
                                                          questName: G.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(Z.i, {
                                                questContent: x.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
                                                quest: G,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (L = G.userStatus) ? void 0 : L.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        H(B({}, e), {
                                                            className: k.submenuWrapper,
                                                            "aria-label": V.intl.string(V.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: k.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eg
                                            ? V.intl.formatToPlainString(V.t.APddvF, { expirationDate: ef })
                                            : V.intl.formatToPlainString(V.t["pX+fmn"], { expirationDate: eE }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eA &&
                        !eg &&
                        !eu &&
                        (0, r.jsx)(Q.Z, {
                            autoplay: X,
                            quest: G,
                            questContent: x.jn.QUEST_LIVE_STREAM,
                            taskDetails: ey,
                            location: U.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: k.ctas,
                        children: [
                            !eA &&
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: V.intl.string(V.t.LLLLPD),
                                            onClick: ej,
                                            fullWidth: !eh || G.config.features.includes(U.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            fullWidth: !0,
                                            text: ex,
                                            onClick: ev,
                                            loading: ec,
                                        }),
                                    ],
                                }),
                            eA &&
                                !eg &&
                                eu &&
                                (0, r.jsx)(w.Z, {
                                    color: u.TVs.colors.BACKGROUND_BRAND,
                                    quest: G,
                                }),
                            eA &&
                                !eg &&
                                !eu &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.VN1Ajl),
                                    onClick: ep,
                                }),
                            eg &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.cfY4PE),
                                    onClick: eS,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let t = l.useContext(f.h9),
        n = (0, a.e7)([T.Z], () => null != T.Z.questEnrollmentBlockedUntil, []),
        s = (0, a.e7)([T.Z], () => T.Z.quests),
        i = (0, A.Fy)(Array.from(s.values())),
        o = l.useMemo(() => (0, y.NI)(s, U.Lv), [s]),
        u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        d = (0, a.e7)(
            [v.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var r, l, s;
                              if (i.type === D.fO.STREAM) {
                                  let e = null != (l = (0, m.Um)(i.stream, n)) ? l : null,
                                      s = (0, I.ZZ)(t, e);
                                  if (null != s && (null == (r = s.userStatus) ? void 0 : r.claimedAt) == null)
                                      return s;
                              }
                              for (let r of e)
                                  if (!(0, D.I)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, I.ZZ)(t, e);
                                          if (null != n && (null == (s = n.userStatus) ? void 0 : s.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(u, o, v.Z),
            [u, o, i, e.previewQuest],
        );
    return null == d || n
        ? null
        : (0, r.jsx)(L.A, {
              questOrQuests: d,
              overrideVisibility: !t,
              questContent: x.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(W, H(B({}, e), { quest: d })),
          });
}
let z = function (e) {
    let t = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    return (0, a.e7)(
        [c.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(G, B({}, e))
        : null;
};
