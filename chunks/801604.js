n.d(t, { Z: () => W }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(780384),
    u = n(481060),
    c = n(358221),
    d = n(594190),
    m = n(687516),
    f = n(210887),
    p = n(937995),
    g = n(158776),
    v = n(594174),
    y = n(22095),
    x = n(617136),
    b = n(616022),
    j = n(49436),
    h = n(402275),
    S = n(535584),
    O = n(373370),
    E = n(968843),
    T = n(475595),
    N = n(304696),
    P = n(862657),
    C = n(759479),
    _ = n(254579),
    I = n(283689),
    Z = n(602667),
    w = n(698716),
    A = n(659302),
    M = n(340100),
    U = n(611855),
    k = n(644646),
    D = n(346592),
    R = n(110560),
    L = n(324805),
    Q = n(981631),
    H = n(354459),
    G = n(388032),
    F = n(838106);
function q(e) {
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
function V(e) {
    var t, n, i, p, h;
    let { channelId: Z, quest: V, previewQuest: z, isParticipatingOverride: W } = e,
        K = (0, x.O5)(),
        [Y, X] = l.useState(!1),
        J = l.useCallback(() => X(!0), []),
        $ = l.useCallback(() => X(!1), []),
        ee = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        et = (0, s.e7)([f.Z], () => f.Z.getState().theme),
        en = (0, o.wj)(et) ? Q.BRd.DARK : Q.BRd.LIGHT,
        er = (0, s.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        el = (0, s.e7)(
            [b.Z],
            () => (0, P.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, j.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: ei, isQuestInQuestBar: ea } = (0, s.cj)([g.Z], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != V &&
                    null != ee &&
                    ((e = g.Z),
                    er.some((t) => {
                        if (t.type !== H.fO.STREAM || t.user.id !== ee.id) return !1;
                        let n = (0, m.Um)(t.stream, e);
                        return null != n && (0, C._D)(n, V);
                    })),
                isQuestInQuestBar: (null == el ? void 0 : el.id) === (null == V ? void 0 : V.id),
            };
        }, [ee, V, er, el]),
        es = null == (t = (0, _.vj)(V)) ? void 0 : t[0],
        eo = (0, s.e7)([d.ZP, g.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, _.$H)(V) && null !== es && e.includes(es)) return !0;
            let t = null != ee ? g.Z.findActivity(ee.id, (e) => e.type !== Q.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, _.$J)(V) && (0, C._D)(t, V));
        }, [V, ee, es]),
        eu = !0 === W || ei || eo,
        ec = (0, s.e7)([b.Z], () => null != V && b.Z.isEnrolling(V.id), [V]),
        ed = (0, s.e7)(
            [c.Z],
            () => ((null == ee ? void 0 : ee.id) == null ? null : c.Z.getParticipant(Z, ee.id)) != null,
            [Z, ee],
        ),
        { launchInGameActivity: em } = (0, E.zB)(V),
        ef = (0, E.B6)(null == V ? void 0 : V.config.expiresAt),
        ep = (0, E.B6)(null == V ? void 0 : V.config.rewardsConfig.rewardsExpireAt),
        eg = l.useCallback(() => {
            (0, y.AH)(V.id, {
                questContent: j.jn.QUEST_LIVE_STREAM,
                questContentCTA: x.jZ.ACCEPT_QUEST,
                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
            }),
                (0, I.Rt)(V) && em();
        }, [V, em]),
        ev = l.useCallback(() => {
            K({
                questId: V.id,
                questContent: j.jn.QUEST_LIVE_STREAM,
                questContentCTA: x.jZ.TRACK_PROGRESS,
                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
            }),
                (0, R.navigateToQuestHome)({
                    fromContent: j.jn.QUEST_LIVE_STREAM,
                    questId: V.id,
                });
        }, [V, K]),
        ey = l.useCallback(() => {
            K({
                questId: V.id,
                questContent: j.jn.QUEST_LIVE_STREAM,
                questContentCTA: x.jZ.LEARN_MORE,
                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
            }),
                (0, R.navigateToQuestHome)({
                    fromContent: j.jn.QUEST_LIVE_STREAM,
                    questId: V.id,
                });
        }, [V, K]),
        ex = (0, A.hf)({
            quest: V,
            questContent: j.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
        }),
        eb = l.useMemo(
            () =>
                (0, S.T)({
                    quest: V,
                    location: L.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [V],
        ),
        ej = (0, O.CR)({ quest: V }),
        eh = (0, I.Rt)(V),
        eS = (0, E.tP)(V),
        eO = (null == (n = V.userStatus) ? void 0 : n.enrolledAt) != null,
        eE = (null == (i = V.userStatus) ? void 0 : i.completedAt) != null,
        eT = null != V.userStatus && (0, P.zE)(V.userStatus, j.jn.QUEST_LIVE_STREAM),
        eN = null != V.userStatus && (0, P.zE)(V.userStatus, j.jn.QUEST_BAR),
        eP = ea && !eN;
    eb.info({
        isQuestCallHeaderDismissed: eT,
        isQuestExpired: eS,
        isQuestBarShowing: eP,
        isCurrentUserCallParticipant: ed,
    });
    let eC = null != z && (null == (p = V.userStatus) ? void 0 : p.claimedAt) == null;
    if ((!eC && (eT || eS || eP)) || (!eC && !ed)) return null;
    let e_ = (0, _.il)(V),
        eI = (0, r.jsx)(k.Z, {
            className: F.rewardTile,
            autoplay: Y,
            quest: V,
            questContent: j.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: a()(F.wrapper, { [F.wrapperAccepted]: eO }),
        onFocus: J,
        onMouseEnter: J,
        onBlur: $,
        onMouseLeave: $,
        children: [
            !eO &&
                (0, r.jsxs)("div", {
                    className: F.rewardTileWrapper,
                    children: [
                        eI,
                        (0, r.jsx)(U.Z, {
                            bgOpacity: 0.32,
                            className: F.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: F.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: F.heading,
                        children: [
                            eO && eu
                                ? eI
                                : (0, r.jsx)("img", {
                                      className: F.gameTile,
                                      alt: V.config.messages.gameTitle,
                                      src: (0, T.fh)(V, T.eC.GAME_TILE, en).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: F.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: F.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eu
                                                    ? (0, N.AV)({
                                                          quest: V,
                                                          taskDetails: e_,
                                                      })
                                                    : G.intl.formatToPlainString(G.t.EQa7os, {
                                                          questName: V.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(w.i, {
                                                questContent: j.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
                                                quest: V,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (h = V.userStatus) ? void 0 : h.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        B(q({}, e), {
                                                            className: F.submenuWrapper,
                                                            "aria-label": G.intl.string(G.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: F.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eE
                                            ? G.intl.formatToPlainString(G.t.APddvF, { expirationDate: ep })
                                            : G.intl.formatToPlainString(G.t["pX+fmn"], { expirationDate: ef }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eO &&
                        !eE &&
                        !eu &&
                        (0, r.jsx)(D.Z, {
                            autoplay: Y,
                            quest: V,
                            questContent: j.jn.QUEST_LIVE_STREAM,
                            taskDetails: e_,
                            location: L.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: F.ctas,
                        children: [
                            !eO &&
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: G.intl.string(G.t.LLLLPD),
                                            onClick: ey,
                                            fullWidth: !eh || V.config.features.includes(L.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            fullWidth: !0,
                                            text: ej,
                                            onClick: eg,
                                            loading: ec,
                                        }),
                                    ],
                                }),
                            eO &&
                                !eE &&
                                eu &&
                                (0, r.jsx)(M.Z, {
                                    color: u.TVs.colors.BACKGROUND_BRAND,
                                    quest: V,
                                }),
                            eO &&
                                !eE &&
                                !eu &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: G.intl.string(G.t.VN1Ajl),
                                    onClick: ev,
                                }),
                            eE &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: G.intl.string(G.t.cfY4PE),
                                    onClick: ex,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    var t;
    let n = l.useContext(p.h9),
        i = (0, s.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil, []),
        { use_api_call: a } = h.w.getConfig({ location: "QuestChannelCallHeader" }),
        o = (0, s.e7)([b.Z], () => b.Z.quests),
        u = (0, E.Fy)(Array.from(o.values())),
        d = l.useMemo(() => (0, I.NI)(o, L.Lv), [o]),
        f = (0, s.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        v = (0, s.e7)(
            [g.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let a of e) {
                              var r, l, i;
                              if (a.type === H.fO.STREAM) {
                                  let e = null != (l = (0, m.Um)(a.stream, n)) ? l : null,
                                      i = (0, C.ZZ)(t, e);
                                  if (null != i && (null == (r = i.userStatus) ? void 0 : r.claimedAt) == null)
                                      return i;
                              }
                              for (let r of e)
                                  if (!(0, H.I)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, C.ZZ)(t, e);
                                          if (null != n && (null == (i = n.userStatus) ? void 0 : i.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(f, d, g.Z),
            [f, d, u, e.previewQuest],
        ),
        [x, S] = l.useState(null);
    l.useEffect(() => {
        if (null == e.previewQuest && a) {
            if (null == v) return void S(null);
            S(v.id), (0, y._)([v.id], j.jn.QUEST_LIVE_STREAM);
        }
    }, [v, e.previewQuest, a]);
    let O = (0, s.e7)([b.Z], () => {
            var e;
            let t = null == (e = b.Z.earnedQuestForPlacement.get(j.jn.QUEST_LIVE_STREAM)) ? void 0 : e.quest;
            return (null == t ? void 0 : t.id) === x ? t : null;
        }, [x]),
        [T, N] = l.useState(null);
    l.useEffect(() => {
        null != O ? N(O) : null === x && N(null);
    }, [O, x]);
    let P = null != O ? O : T,
        _ = null != (t = e.previewQuest) ? t : a ? P : v;
    return null == _ || i
        ? null
        : (0, r.jsx)(Z.A, {
              questOrQuests: _,
              overrideVisibility: !n,
              questContent: j.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(V, B(q({}, e), { quest: _ })),
          });
}
let W = function (e) {
    let t = (0, s.e7)([v.default], () => v.default.getCurrentUser());
    return (0, s.e7)(
        [c.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(z, q({}, e))
        : null;
};
