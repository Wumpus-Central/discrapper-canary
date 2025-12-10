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
    f = n(210887),
    p = n(937995),
    E = n(158776),
    j = n(594174),
    v = n(22095),
    b = n(617136),
    h = n(616022),
    S = n(49436),
    T = n(535584),
    x = n(373370),
    y = n(968843),
    g = n(475595),
    _ = n(304696),
    A = n(862657),
    C = n(759479),
    O = n(254579),
    N = n(283689),
    I = n(602667),
    w = n(698716),
    L = n(659302),
    P = n(340100),
    Z = n(611855),
    R = n(644646),
    M = n(346592),
    Q = n(110560),
    U = n(324805),
    D = n(981631),
    q = n(354459),
    k = n(388032),
    V = n(141538);
function H(e) {
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
function B(e, t) {
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
    var t, n, s, p, I;
    let { channelId: W, quest: G, previewQuest: z, isParticipatingOverride: K } = e,
        F = (0, b.O5)(),
        [X, Y] = l.useState(!1),
        $ = l.useCallback(() => Y(!0), []),
        J = l.useCallback(() => Y(!1), []),
        ee = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
        et = (0, a.e7)([f.Z], () => f.Z.getState().theme),
        en = (0, o.wj)(et) ? D.BRd.DARK : D.BRd.LIGHT,
        er = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        el = (0, a.e7)(
            [h.Z],
            () => (0, A.PM)(h.Z.quests, h.Z.questToDeliverForPlacement, S.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: es, isQuestInQuestBar: ei } = (0, a.cj)([E.Z], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != G &&
                    null != ee &&
                    ((e = E.Z),
                    er.some((t) => {
                        if (t.type !== q.fO.STREAM || t.user.id !== ee.id) return !1;
                        let n = (0, m.Um)(t.stream, e);
                        return null != n && (0, C._D)(n, G);
                    })),
                isQuestInQuestBar: (null == el ? void 0 : el.id) === (null == G ? void 0 : G.id),
            };
        }, [ee, G, er, el]),
        ea = null == (t = (0, O.vj)(G)) ? void 0 : t[0],
        eo = (0, a.e7)([d.ZP, E.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, O.$H)(G) && null !== ea && e.includes(ea)) return !0;
            let t = null != ee ? E.Z.findActivity(ee.id, (e) => e.type !== D.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, O.$J)(G) && (0, C._D)(t, G));
        }, [G, ee, ea]),
        eu = !0 === K || es || eo,
        ec = (0, a.e7)([h.Z], () => null != G && h.Z.isEnrolling(G.id), [G]),
        ed = (0, a.e7)(
            [c.Z],
            () => ((null == ee ? void 0 : ee.id) == null ? null : c.Z.getParticipant(W, ee.id)) != null,
            [W, ee],
        ),
        { launchInGameActivity: em } = (0, y.zB)(G),
        ef = (0, y.B6)(null == G ? void 0 : G.config.expiresAt),
        ep = (0, y.B6)(null == G ? void 0 : G.config.rewardsConfig.rewardsExpireAt),
        eE = l.useCallback(() => {
            (0, v.AH)(G.id, {
                questContent: S.jn.QUEST_LIVE_STREAM,
                questContentCTA: b.jZ.ACCEPT_QUEST,
                sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
            }),
                (0, N.Rt)(G) && em();
        }, [G, em]),
        ej = l.useCallback(() => {
            F({
                questId: G.id,
                questContent: S.jn.QUEST_LIVE_STREAM,
                questContentCTA: b.jZ.TRACK_PROGRESS,
                sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
            }),
                (0, Q.navigateToQuestHome)({
                    fromContent: S.jn.QUEST_LIVE_STREAM,
                    questId: G.id,
                });
        }, [G, F]),
        ev = l.useCallback(() => {
            F({
                questId: G.id,
                questContent: S.jn.QUEST_LIVE_STREAM,
                questContentCTA: b.jZ.LEARN_MORE,
                sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
            }),
                (0, Q.navigateToQuestHome)({
                    fromContent: S.jn.QUEST_LIVE_STREAM,
                    questId: G.id,
                });
        }, [G, F]),
        eb = (0, L.hf)({
            quest: G,
            questContent: S.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
        }),
        eh = l.useMemo(
            () =>
                (0, T.T)({
                    quest: G,
                    location: U.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [G],
        ),
        eS = (0, x.CR)({ quest: G }),
        eT = (0, N.Rt)(G),
        ex = (0, y.tP)(G),
        ey = (null == (n = G.userStatus) ? void 0 : n.enrolledAt) != null,
        eg = (null == (s = G.userStatus) ? void 0 : s.completedAt) != null,
        e_ = null != G.userStatus && (0, A.zE)(G.userStatus, S.jn.QUEST_LIVE_STREAM),
        eA = null != G.userStatus && (0, A.zE)(G.userStatus, S.jn.QUEST_BAR),
        eC = ei && !eA;
    eh.info({
        isQuestCallHeaderDismissed: e_,
        isQuestExpired: ex,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: ed,
    });
    let eO = null != z && (null == (p = G.userStatus) ? void 0 : p.claimedAt) == null;
    if ((!eO && (e_ || ex || eC)) || (!eO && !ed)) return null;
    let eN = (0, O.il)(G),
        eI = (0, r.jsx)(R.Z, {
            className: V.rewardTile,
            autoplay: X,
            quest: G,
            questContent: S.jn.QUEST_LIVE_STREAM,
            location: U.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: i()(V.wrapper, { [V.wrapperAccepted]: ey }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !ey &&
                (0, r.jsxs)("div", {
                    className: V.rewardTileWrapper,
                    children: [
                        eI,
                        (0, r.jsx)(Z.Z, {
                            bgOpacity: 0.32,
                            className: V.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: V.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: V.heading,
                        children: [
                            ey && eu
                                ? eI
                                : (0, r.jsx)("img", {
                                      className: V.gameTile,
                                      alt: G.config.messages.gameTitle,
                                      src: (0, g.fh)(G, g.eC.GAME_TILE, en).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: V.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: V.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "header-primary",
                                                children: eu
                                                    ? (0, _.AV)({
                                                          quest: G,
                                                          taskDetails: eN,
                                                      })
                                                    : k.intl.formatToPlainString(k.t.EQa7os, {
                                                          questName: G.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(w.i, {
                                                questContent: S.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
                                                quest: G,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (I = G.userStatus) ? void 0 : I.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        B(H({}, e), {
                                                            className: V.submenuWrapper,
                                                            "aria-label": k.intl.string(k.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: V.submenuIcon,
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
                                            ? k.intl.formatToPlainString(k.t.APddvF, { expirationDate: ep })
                                            : k.intl.formatToPlainString(k.t["pX+fmn"], { expirationDate: ef }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    ey &&
                        !eg &&
                        !eu &&
                        (0, r.jsx)(M.Z, {
                            autoplay: X,
                            quest: G,
                            questContent: S.jn.QUEST_LIVE_STREAM,
                            taskDetails: eN,
                            location: U.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: V.ctas,
                        children: [
                            !ey &&
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: k.intl.string(k.t.LLLLPD),
                                            onClick: ev,
                                            fullWidth: !eT || G.config.features.includes(U.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            fullWidth: !0,
                                            text: eS,
                                            onClick: eE,
                                            loading: ec,
                                        }),
                                    ],
                                }),
                            ey &&
                                !eg &&
                                eu &&
                                (0, r.jsx)(P.Z, {
                                    color: u.TVs.colors.BACKGROUND_BRAND,
                                    quest: G,
                                }),
                            ey &&
                                !eg &&
                                !eu &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: k.intl.string(k.t.VN1Ajl),
                                    onClick: ej,
                                }),
                            eg &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: k.intl.string(k.t.cfY4PE),
                                    onClick: eb,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let t = l.useContext(p.h9),
        n = (0, a.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []),
        s = (0, a.e7)([h.Z], () => h.Z.quests),
        i = (0, y.Fy)(Array.from(s.values())),
        o = l.useMemo(() => (0, N.NI)(s, U.Lv), [s]),
        u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        d = (0, a.e7)(
            [E.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var r, l, s;
                              if (i.type === q.fO.STREAM) {
                                  let e = null != (l = (0, m.Um)(i.stream, n)) ? l : null,
                                      s = (0, C.ZZ)(t, e);
                                  if (null != s && (null == (r = s.userStatus) ? void 0 : r.claimedAt) == null)
                                      return s;
                              }
                              for (let r of e)
                                  if (!(0, q.I)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, C.ZZ)(t, e);
                                          if (null != n && (null == (s = n.userStatus) ? void 0 : s.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(u, o, E.Z),
            [u, o, i, e.previewQuest],
        );
    return null == d || n
        ? null
        : (0, r.jsx)(I.A, {
              questOrQuests: d,
              overrideVisibility: !t,
              questContent: S.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: S.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(W, B(H({}, e), { quest: d })),
          });
}
let z = function (e) {
    let t = (0, a.e7)([j.default], () => j.default.getCurrentUser());
    return (0, a.e7)(
        [c.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(G, H({}, e))
        : null;
};
