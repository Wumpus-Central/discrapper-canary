n.d(t, { Z: () => B }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(570140),
    c = n(475179),
    d = n(925549),
    f = n(37234),
    _ = n(835473),
    p = n(413523),
    h = n(358221),
    m = n(703656),
    g = n(607187),
    E = n(937995),
    v = n(366050),
    y = n(944486),
    I = n(594174),
    T = n(566620),
    b = n(317381),
    S = n(531826),
    A = n(175894),
    N = n(246106),
    C = n(963614),
    R = n(917107),
    O = n(208156),
    D = n(748492),
    L = n(701488),
    x = n(918559),
    P = n(981631),
    w = n(354459),
    M = n(979953),
    k = n(48480),
    U = n(801919);
function G(e) {
    var t, n, a;
    let { channel: A, isLoading: N } = e,
        [G, B] = r.useState(!1),
        Z = (0, o.e7)([b.ZP], () => b.ZP.getSelfEmbeddedActivityForChannel(A.id)),
        F = (0, o.e7)([b.ZP], () => b.ZP.getActivityPanelMode()),
        V = (0, _.q)(null == Z ? void 0 : Z.applicationId),
        j = null == Z ? void 0 : Z.launchId,
        H = (0, o.e7)([y.Z], () => y.Z.getChannelId() === A.id),
        { dockedRect: Y, isHidden: W } = (0, o.cj)([v.Z], () => {
            let e = v.Z.pipWindow;
            return {
                dockedRect: null != e ? v.Z.getDockedRect(e.id) : null,
                isHidden: v.Z.isEmbeddedActivityHidden()
            };
        }),
        K = (0, S.sU)({ channelId: A.id }),
        {
            activityParticipant: z,
            selectedParticipant: q,
            participantsOpen: Q
        } = (0, o.cj)([h.Z], () => ({
            activityParticipant: null != Z ? h.Z.getParticipant(A.id, (0, p.oW)(Z.applicationId)) : null,
            selectedParticipant: h.Z.getSelectedParticipant(A.id),
            participantsOpen: h.Z.getParticipantsOpen(A.id)
        })),
        X = H || null != K,
        J = (0, R.Z)(A.id),
        $ = J && (null == q ? void 0 : q.type) !== w.fO.ACTIVITY,
        ee = !J && F === x.Ez.PIP,
        et = X && ($ || ee) && null == Y,
        en = (!X || et) && !W,
        ei = en && null != v.Z.pipVideoWindow && null != v.Z.pipActivityWindow;
    function er() {
        var e;
        null != Z && c.Z.selectParticipant(A.id, (0, p.oW)(Z.applicationId));
        let t = null !== (e = A.getGuildId()) && void 0 !== e ? e : P.ME;
        d.Z.channelListScrollTo(t, A.id), (0, m.XU)(t, A.id), null == K && (0, f.Ou)();
    }
    function ea() {
        B(!G);
    }
    function es(e, t, n, r, a) {
        var s;
        return en && null != Z && ((null == z ? void 0 : z.type) === w.fO.ACTIVITY || r)
            ? (null === (s = Z.config) || void 0 === s ? void 0 : s.useInteractivePIP)
                ? (0, i.jsx)(D.of, {
                      onJumpToChannel: er,
                      applicationId: Z.applicationId,
                      channel: A,
                      showControls: !n,
                      onMouseDown: e,
                      onMouseMove: e,
                      onMouseLeave: t,
                      onToggleHeight: ea,
                      isExpanded: G,
                      hideExpandedButton: r,
                      embeddedActivity: Z
                  })
                : r
                  ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(D.q5, {
                            idle: n,
                            onMouseMove: e,
                            onMouseDown: e,
                            onMouseLeave: t,
                            onJumpToChannel: () => {
                                er(), (0, T.tg)(x.Ez.PANEL);
                            },
                            channel: A,
                            applicationId: Z.applicationId,
                            users: a,
                            embeddedActivity: Z
                        })
                    })
                  : null == z
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: t,
                                  className: M.clickShield,
                                  onDoubleClick: er
                              }),
                              (0, i.jsx)(D.YB, {
                                  idle: n,
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: t,
                                  onJumpToChannel: er,
                                  channel: A,
                                  applicationId: Z.applicationId,
                                  selectedParticipant: z,
                                  embeddedActivity: Z
                              })
                          ]
                      })
            : null;
    }
    if (
        (r.useEffect(() => {
            if ((null == Z ? void 0 : Z.applicationId) != null) {
                let e = en ? L.cE.PIP : L.cE.FOCUSED;
                u.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: Z.applicationId
                });
            }
        }, [null == Z ? void 0 : Z.applicationId, en]),
        null == Z || null == j || (null == z && (0, R.Z)(A.id)) || null == V)
    )
        return null;
    let eo = Array.from(Z.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e),
        el = {
            instance_id: null !== (a = null !== (n = Z.compositeInstanceId) && void 0 !== n ? n : Z.launchId) && void 0 !== a ? a : '',
            channel_id: A.id,
            location_id: null === (t = Z.location) || void 0 === t ? void 0 : t.id,
            launch_id: Z.launchId,
            referrer_id: Z.referrerId,
            custom_id: Z.customId
        };
    return (
        null != A.guild_id && '' !== A.guild_id && (el.guild_id = A.guild_id),
        (0, i.jsx)(E.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: r, onActive: a, onForceIdle: o } = e;
                return (0, i.jsxs)(g.Z, {
                    className: s()(M.root, {
                        [M.pipMode]: en,
                        [U.elevationHigh]: en,
                        [k.idle]: r && !(null === (t = Z.config) || void 0 === t ? void 0 : t.useInteractivePIP),
                        [M.pipModeShort]: en && !G,
                        [M.pipModeTall]: en && G,
                        [M.hidden]: W,
                        [M.multiPIPMode]: ei
                    }),
                    noBorder: !en,
                    children: [
                        (0, i.jsx)('div', {
                            className: 'theme-dark',
                            children: es(a, o, r, ee, eo)
                        }),
                        N
                            ? (0, i.jsx)(l.$jN, {
                                  className: s()(M.iframe, {
                                      [M.pipModeShort]: en && !G,
                                      [M.pipModeTall]: en && G
                                  })
                              })
                            : (0, i.jsx)(O.J, {
                                  allowPopups: (0, C.h)(V),
                                  referrerPolicy: L.um.has(Z.applicationId) ? 'no-referrer' : 'origin',
                                  url: Z.url,
                                  queryParams: el,
                                  className: s()(M.iframe, {
                                      [M.pipModeShort]: en && !G,
                                      [M.pipModeTall]: en && G,
                                      [M.pipNonInteractive]: en && !(null === (n = Z.config) || void 0 === n ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !en && H
                              }),
                        !en &&
                            (0, i.jsx)(D.Ds, {
                                participantsOpen: Q,
                                showToggleParticipants: !1,
                                channelId: A.id
                            })
                    ]
                });
            }
        })
    );
}
let B = (e) => {
    let { channel: t, ...n } = e,
        { userActivity: r, inActivity: a } = (0, N.Z)(t.id);
    (0, A.Z)({ userActivity: r });
    let s = !a;
    return (0, i.jsx)(G, {
        channel: t,
        isLoading: s,
        ...n
    });
};
