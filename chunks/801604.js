n.d(t, { Z: () => Y }), n(388685);
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
    x = n(22095),
    y = n(617136),
    b = n(616022),
    j = n(49436),
    h = n(937797),
    S = n(402275),
    E = n(535584),
    O = n(373370),
    T = n(968843),
    N = n(475595),
    P = n(304696),
    C = n(862657),
    _ = n(759479),
    I = n(254579),
    Z = n(283689),
    w = n(602667),
    A = n(698716),
    M = n(659302),
    U = n(504411),
    L = n(340100),
    D = n(611855),
    R = n(644646),
    k = n(346592),
    Q = n(110560),
    H = n(324805),
    G = n(981631),
    q = n(354459),
    F = n(388032),
    B = n(838106);
function V(e) {
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
function z(e, t) {
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
    var t, n, i, p, S;
    let { channelId: w, quest: W, previewQuest: K, isParticipatingOverride: Y } = e,
        X = (0, y.O5)(),
        [J, $] = l.useState(!1),
        ee = l.useCallback(() => $(!0), []),
        et = l.useCallback(() => $(!1), []),
        en = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        er = (0, s.e7)([f.Z], () => f.Z.getState().theme),
        el = (0, o.wj)(er) ? G.BRd.DARK : G.BRd.LIGHT,
        ei = (0, s.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        ea = (0, s.e7)(
            [b.Z],
            () => (0, C.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, j.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: es, isQuestInQuestBar: eo } = (0, s.cj)([g.Z], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != W &&
                    null != en &&
                    ((e = g.Z),
                    ei.some((t) => {
                        if (t.type !== q.fO.STREAM || t.user.id !== en.id) return !1;
                        let n = (0, m.Um)(t.stream, e);
                        return null != n && (0, _._D)(n, W);
                    })),
                isQuestInQuestBar: (null == ea ? void 0 : ea.id) === (null == W ? void 0 : W.id),
            };
        }, [en, W, ei, ea]),
        eu = null == (t = (0, I.vj)(W)) ? void 0 : t[0],
        ec = (0, s.e7)([d.ZP, g.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, I.$H)(W) && null !== eu && e.includes(eu)) return !0;
            let t = null != en ? g.Z.findActivity(en.id, (e) => e.type !== G.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, I.$J)(W) && (0, _._D)(t, W));
        }, [W, en, eu]),
        ed = !0 === Y || es || ec,
        em = (0, s.e7)([b.Z], () => null != W && b.Z.isEnrolling(W.id), [W]),
        ef = (0, s.e7)(
            [c.Z],
            () => ((null == en ? void 0 : en.id) == null ? null : c.Z.getParticipant(w, en.id)) != null,
            [w, en],
        ),
        { launchInGameActivity: ep } = (0, T.zB)(W),
        eg = (0, T.B6)(null == W ? void 0 : W.config.expiresAt),
        ev = (0, T.B6)(null == W ? void 0 : W.config.rewardsConfig.rewardsExpireAt),
        ex = l.useCallback(() => {
            (0, x.AH)(W.id, {
                questContent: j.jn.QUEST_LIVE_STREAM,
                questContentCTA: y.jZ.ACCEPT_QUEST,
                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
            }),
                (0, Z.Rt)(W) && ep();
        }, [W, ep]),
        ey = l.useCallback(() => {
            X({
                questId: W.id,
                questContent: j.jn.QUEST_LIVE_STREAM,
                questContentCTA: y.jZ.TRACK_PROGRESS,
                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
            }),
                (0, Q.navigateToQuestHome)({
                    fromContent: j.jn.QUEST_LIVE_STREAM,
                    questId: W.id,
                });
        }, [W, X]),
        eb = l.useCallback(() => {
            X({
                questId: W.id,
                questContent: j.jn.QUEST_LIVE_STREAM,
                questContentCTA: y.jZ.LEARN_MORE,
                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
            }),
                (0, Q.navigateToQuestHome)({
                    fromContent: j.jn.QUEST_LIVE_STREAM,
                    questId: W.id,
                });
        }, [W, X]),
        ej = (0, M.hf)({
            quest: W,
            questContent: j.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
        }),
        eh = l.useMemo(
            () =>
                (0, E.T)({
                    quest: W,
                    location: H.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [W],
        ),
        eS = (0, O.CR)({ quest: W }),
        eE = (0, Z.Rt)(W),
        eO = (0, T.tP)(W),
        eT = (null == (n = W.userStatus) ? void 0 : n.enrolledAt) != null,
        eN = (null == (i = W.userStatus) ? void 0 : i.completedAt) != null,
        eP = null != W.userStatus && (0, C.zE)(W.userStatus, j.jn.QUEST_LIVE_STREAM),
        eC = null != W.userStatus && (0, C.zE)(W.userStatus, j.jn.QUEST_BAR),
        e_ = eo && !eC,
        eI = h.Cx.useConfig({ location: H.dr.QUEST_CHANNEL_CALL_HEADER }).enabled;
    eh.info({
        isQuestCallHeaderDismissed: eP,
        isQuestExpired: eO,
        isQuestBarShowing: e_,
        isCurrentUserCallParticipant: ef,
    });
    let eZ = null != K && (null == (p = W.userStatus) ? void 0 : p.claimedAt) == null;
    if ((!eZ && (eP || eO || e_)) || (!eZ && !ef)) return null;
    let ew = (0, I.il)(W),
        eA = (0, r.jsx)(R.Z, {
            className: B.rewardTile,
            autoplay: J,
            quest: W,
            questContent: j.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: a()(B.wrapper, { [B.wrapperAccepted]: eT }),
        onFocus: ee,
        onMouseEnter: ee,
        onBlur: et,
        onMouseLeave: et,
        children: [
            !eT &&
                (0, r.jsxs)("div", {
                    className: B.rewardTileWrapper,
                    children: [
                        eA,
                        (0, r.jsx)(D.Z, {
                            bgOpacity: 0.32,
                            className: B.promotedTag,
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: B.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: B.heading,
                        children: [
                            eT && ed
                                ? eA
                                : (0, r.jsx)("img", {
                                      className: B.gameTile,
                                      alt: W.config.messages.gameTitle,
                                      src: (0, N.fh)(W, N.eC.GAME_TILE, el).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: B.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: B.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: ed
                                                    ? (0, P.AV)({
                                                          quest: W,
                                                          taskDetails: ew,
                                                      })
                                                    : F.intl.formatToPlainString(F.t.EQa7os, {
                                                          questName: W.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(A.i, {
                                                questContent: j.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
                                                quest: W,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (S = W.userStatus) ? void 0 : S.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        z(V({}, e), {
                                                            className: B.submenuWrapper,
                                                            "aria-label": F.intl.string(F.t.DEoVWZ),
                                                            children: (0, r.jsx)(u.xhG, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: B.submenuIcon,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eN
                                            ? F.intl.formatToPlainString(F.t.APddvF, { expirationDate: ev })
                                            : F.intl.formatToPlainString(F.t["pX+fmn"], { expirationDate: eg }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eT &&
                        !eN &&
                        !ed &&
                        (0, r.jsx)(k.Z, {
                            autoplay: J,
                            quest: W,
                            questContent: j.jn.QUEST_LIVE_STREAM,
                            taskDetails: ew,
                            location: H.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: B.ctas,
                        children: [
                            !eT &&
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: F.intl.string(F.t.LLLLPD),
                                            onClick: eb,
                                            fullWidth: !eE || W.config.features.includes(H.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eI && !eO
                                            ? (0, r.jsx)(U.Z, {
                                                  quest: W,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: j.jn.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: j.jn.QUEST_LIVE_STREAM,
                                              })
                                            : (0, r.jsx)(u.Button, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eS,
                                                  onClick: ex,
                                                  loading: em,
                                              }),
                                    ],
                                }),
                            eT &&
                                !eN &&
                                ed &&
                                (0, r.jsx)(L.Z, {
                                    color: u.TVs.colors.BACKGROUND_BRAND,
                                    quest: W,
                                }),
                            eT &&
                                !eN &&
                                !ed &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: F.intl.string(F.t.VN1Ajl),
                                    onClick: ey,
                                }),
                            eN &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: F.intl.string(F.t.cfY4PE),
                                    onClick: ej,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    var t;
    let n = l.useContext(p.h9),
        i = (0, s.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil, []),
        { use_api_call: a } = S.w.getConfig({ location: "QuestChannelCallHeader" }),
        o = (0, s.e7)([b.Z], () => b.Z.quests),
        u = (0, T.Fy)(Array.from(o.values())),
        d = l.useMemo(() => (0, Z.NI)(o, H.Lv), [o]),
        f = (0, s.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        v = (0, s.e7)(
            [g.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let a of e) {
                              var r, l, i;
                              if (a.type === q.fO.STREAM) {
                                  let e = null != (l = (0, m.Um)(a.stream, n)) ? l : null,
                                      i = (0, _.ZZ)(t, e);
                                  if (null != i && (null == (r = i.userStatus) ? void 0 : r.claimedAt) == null)
                                      return i;
                              }
                              for (let r of e)
                                  if (!(0, q.I)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, _.ZZ)(t, e);
                                          if (null != n && (null == (i = n.userStatus) ? void 0 : i.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(f, d, g.Z),
            [f, d, u, e.previewQuest],
        ),
        y = l.useMemo(() => {
            var e;
            return a && null != (e = null == v ? void 0 : v.id) ? e : null;
        }, [v, a]);
    l.useEffect(() => {
        null == e.previewQuest && null != y && (0, x._)([y], j.jn.QUEST_LIVE_STREAM);
    }, [y, e.previewQuest]);
    let h = (0, s.e7)([b.Z], () => {
            var e;
            let t = b.Z.earnedQuestForPlacement.get(j.jn.QUEST_LIVE_STREAM);
            return null == t || null == y ? null : null != (e = t.quests.get(y)) ? e : null;
        }, [y]),
        [E, O] = l.useState(null);
    l.useEffect(() => {
        null != h ? O(h) : null === y && O(null);
    }, [h, y]);
    let N = null != h ? h : null !== y ? E : null,
        P = null != (t = e.previewQuest) ? t : a ? N : v;
    return null == P || i
        ? null
        : (0, r.jsx)(w.A, {
              questOrQuests: P,
              overrideVisibility: !n,
              questContent: j.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(W, z(V({}, e), { quest: P })),
          });
}
let Y = function (e) {
    let t = (0, s.e7)([v.default], () => v.default.getCurrentUser());
    return (0, s.e7)(
        [c.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(K, V({}, e))
        : null;
};
