n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    l = n(473749),
    s = n(120356),
    i = n.n(s),
    a = n(442837),
    o = n(780384),
    u = n(481060),
    c = n(358221),
    d = n(594190),
    p = n(687516),
    f = n(210887),
    m = n(937995),
    b = n(158776),
    E = n(594174),
    j = n(22095),
    v = n(617136),
    T = n(616022),
    g = n(49436),
    S = n(535584),
    h = n(373370),
    y = n(968843),
    x = n(475595),
    A = n(304696),
    O = n(862657),
    C = n(759479),
    _ = n(254579),
    w = n(283689),
    Z = n(602667),
    I = n(698716),
    P = n(659302),
    Q = n(340100),
    L = n(611855),
    N = n(644646),
    R = n(346592),
    U = n(110560),
    q = n(324805),
    M = n(981631),
    D = n(354459),
    V = n(388032),
    k = n(141538);
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
function W(e, t) {
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
function H(e) {
    var t, n, s, m, Z;
    let { channelId: H, quest: z, previewQuest: G, isParticipatingOverride: F } = e,
        K = (0, v.O5)(),
        [X, Y] = l.useState(!1),
        $ = l.useCallback(() => Y(!0), []),
        J = l.useCallback(() => Y(!1), []),
        ee = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        et = (0, a.e7)([f.Z], () => f.Z.getState().theme),
        en = (0, o.wj)(et) ? M.BRd.DARK : M.BRd.LIGHT,
        er = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        el = (0, a.e7)(
            [T.Z],
            () => (0, O.PM)(T.Z.quests, T.Z.questToDeliverForPlacement, g.Ok.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: es, isQuestInQuestBar: ei } = (0, a.cj)([b.Z], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != z &&
                    null != ee &&
                    ((e = b.Z),
                    er.some((t) => {
                        if (t.type !== D.fO.STREAM || t.user.id !== ee.id) return !1;
                        let n = (0, p.Um)(t.stream, e);
                        return null != n && (0, C._D)(n, z);
                    })),
                isQuestInQuestBar: (null == el ? void 0 : el.id) === (null == z ? void 0 : z.id),
            };
        }, [ee, z, er, el]),
        ea = null == (t = (0, _.vj)(z)) ? void 0 : t[0],
        eo = (0, a.e7)([d.ZP, b.Z], () => {
            let e = d.ZP.getRunningGames().map((e) => e.id);
            if ((0, _.$H)(z) && null !== ea && e.includes(ea)) return !0;
            let t = null != ee ? b.Z.findActivity(ee.id, (e) => e.type !== M.IIU.CUSTOM_STATUS) : null;
            return !!(null != t && (0, _.$J)(z) && (0, C._D)(t, z));
        }, [z, ee, ea]),
        eu = !0 === F || es || eo,
        ec = (0, a.e7)([T.Z], () => null != z && T.Z.isEnrolling(z.id), [z]),
        ed = (0, a.e7)(
            [c.Z],
            () => ((null == ee ? void 0 : ee.id) == null ? null : c.Z.getParticipant(H, ee.id)) != null,
            [H, ee],
        ),
        { launchInGameActivity: ep } = (0, y.zB)(z),
        ef = (0, y.B6)(null == z ? void 0 : z.config.expiresAt),
        em = (0, y.B6)(null == z ? void 0 : z.config.rewardsConfig.rewardsExpireAt),
        eb = l.useCallback(() => {
            (0, j.AH)(z.id, {
                questContent: g.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.ACCEPT_QUEST,
                sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
            }),
                (0, w.Rt)(z) && ep();
        }, [z, ep]),
        eE = l.useCallback(() => {
            K({
                questId: z.id,
                questContent: g.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.TRACK_PROGRESS,
                sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
            }),
                (0, U.navigateToQuestHome)({
                    fromContent: g.jn.QUEST_LIVE_STREAM,
                    questId: z.id,
                });
        }, [z, K]),
        ej = l.useCallback(() => {
            K({
                questId: z.id,
                questContent: g.jn.QUEST_LIVE_STREAM,
                questContentCTA: v.jZ.LEARN_MORE,
                sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
            }),
                (0, U.navigateToQuestHome)({
                    fromContent: g.jn.QUEST_LIVE_STREAM,
                    questId: z.id,
                });
        }, [z, K]),
        ev = (0, P.hf)({
            quest: z,
            questContent: g.jn.QUEST_LIVE_STREAM,
            sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
        }),
        eT = l.useMemo(
            () =>
                (0, S.T)({
                    quest: z,
                    location: q.dr.QUEST_CHANNEL_CALL_HEADER,
                }),
            [z],
        ),
        eg = (0, h.CR)({ quest: z }),
        eS = (0, w.Rt)(z),
        eh = (0, y.tP)(z),
        ey = (null == (n = z.userStatus) ? void 0 : n.enrolledAt) != null,
        ex = (null == (s = z.userStatus) ? void 0 : s.completedAt) != null,
        eA = null != z.userStatus && (0, O.zE)(z.userStatus, g.jn.QUEST_LIVE_STREAM),
        eO = null != z.userStatus && (0, O.zE)(z.userStatus, g.jn.QUEST_BAR),
        eC = ei && !eO;
    eT.info({
        isQuestCallHeaderDismissed: eA,
        isQuestExpired: eh,
        isQuestBarShowing: eC,
        isCurrentUserCallParticipant: ed,
    });
    let e_ = null != G && (null == (m = z.userStatus) ? void 0 : m.claimedAt) == null;
    if ((!e_ && (eA || eh || eC)) || (!e_ && !ed)) return null;
    let ew = (0, _.il)(z),
        eZ = (0, r.jsx)(N.Z, {
            className: k.rewardTile,
            autoplay: X,
            quest: z,
            questContent: g.jn.QUEST_LIVE_STREAM,
            location: q.dr.QUEST_CHANNEL_CALL_HEADER,
            sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
        });
    return (0, r.jsxs)("div", {
        className: i()(k.wrapper, { [k.wrapperAccepted]: ey }),
        onFocus: $,
        onMouseEnter: $,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !ey &&
                (0, r.jsxs)("div", {
                    className: k.rewardTileWrapper,
                    children: [
                        eZ,
                        (0, r.jsx)(L.Z, {
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
                            ey && eu
                                ? eZ
                                : (0, r.jsx)("img", {
                                      className: k.gameTile,
                                      alt: z.config.messages.gameTitle,
                                      src: (0, x.fh)(z, x.eC.GAME_TILE, en).url,
                                  }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: k.headingWithSubmenu,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                className: k.questTitle,
                                                variant: "heading-md/semibold",
                                                color: "header-primary",
                                                children: eu
                                                    ? (0, A.AV)({
                                                          quest: z,
                                                          taskDetails: ew,
                                                      })
                                                    : V.intl.formatToPlainString(V.t.EQa7os, {
                                                          questName: z.config.messages.questName,
                                                      }),
                                            }),
                                            (0, r.jsx)(I.i, {
                                                questContent: g.jn.QUEST_LIVE_STREAM,
                                                sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
                                                quest: z,
                                                preventIdle: !0,
                                                shouldShowDisclosure:
                                                    (null == (Z = z.userStatus) ? void 0 : Z.enrolledAt) == null,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        u.P3F,
                                                        W(B({}, e), {
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
                                        children: ex
                                            ? V.intl.formatToPlainString(V.t.APddvF, { expirationDate: em })
                                            : V.intl.formatToPlainString(V.t["pX+fmn"], { expirationDate: ef }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    ey &&
                        !ex &&
                        !eu &&
                        (0, r.jsx)(R.Z, {
                            autoplay: X,
                            quest: z,
                            questContent: g.jn.QUEST_LIVE_STREAM,
                            taskDetails: ew,
                            location: q.dr.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
                        }),
                    (0, r.jsxs)("div", {
                        className: k.ctas,
                        children: [
                            !ey &&
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: V.intl.string(V.t.LLLLPD),
                                            onClick: ej,
                                            fullWidth: !eS || z.config.features.includes(q.S7.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            fullWidth: !0,
                                            text: eg,
                                            onClick: eb,
                                            loading: ec,
                                        }),
                                    ],
                                }),
                            ey &&
                                !ex &&
                                eu &&
                                (0, r.jsx)(Q.Z, {
                                    color: u.TVs.colors.BG_BRAND,
                                    quest: z,
                                }),
                            ey &&
                                !ex &&
                                !eu &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.VN1Ajl),
                                    onClick: eE,
                                }),
                            ex &&
                                (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: V.intl.string(V.t.cfY4PE),
                                    onClick: ev,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    let t = l.useContext(m.h9),
        n = (0, a.e7)([T.Z], () => null != T.Z.questEnrollmentBlockedUntil, []),
        s = (0, a.e7)([T.Z], () => T.Z.quests),
        i = (0, y.Fy)(Array.from(s.values())),
        o = l.useMemo(() => (0, w.NI)(s, q.Lv), [s]),
        u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
        d = (0, a.e7)(
            [b.Z],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, n) {
                          for (let i of e) {
                              var r, l, s;
                              if (i.type === D.fO.STREAM) {
                                  let e = null != (l = (0, p.Um)(i.stream, n)) ? l : null,
                                      s = (0, C.ZZ)(t, e);
                                  if (null != s && (null == (r = s.userStatus) ? void 0 : r.claimedAt) == null)
                                      return s;
                              }
                              for (let r of e)
                                  if (!(0, D.I)(r))
                                      for (let e of n.getActivities(r.user.id)) {
                                          let n = (0, C.ZZ)(t, e);
                                          if (null != n && (null == (s = n.userStatus) ? void 0 : s.claimedAt) == null)
                                              return n;
                                      }
                          }
                          return null;
                      })(u, o, b.Z),
            [u, o, i, e.previewQuest],
        );
    return null == d || n
        ? null
        : (0, r.jsx)(Z.A, {
              questOrQuests: d,
              overrideVisibility: !t,
              questContent: g.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: g.jn.QUEST_LIVE_STREAM,
              children: () => (0, r.jsx)(H, W(B({}, e), { quest: d })),
          });
}
let G = function (e) {
    let t = (0, a.e7)([E.default], () => E.default.getCurrentUser());
    return (0, a.e7)(
        [c.Z],
        () => ((null == t ? void 0 : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null,
        [e.channelId, t],
    ) || null != e.previewQuest
        ? (0, r.jsx)(z, B({}, e))
        : null;
};
