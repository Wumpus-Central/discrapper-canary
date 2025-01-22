var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(570140),
    f = r(475179),
    p = r(925549),
    h = r(37234),
    _ = r(835473),
    m = r(413523),
    g = r(358221),
    E = r(703656),
    v = r(607187),
    y = r(937995),
    b = r(366050),
    I = r(944486),
    T = r(594174),
    S = r(566620),
    A = r(317381),
    C = r(531826),
    N = r(175894),
    R = r(246106),
    O = r(963614),
    D = r(917107),
    L = r(208156),
    x = r(748492),
    w = r(701488),
    P = r(918559),
    M = r(981631),
    k = r(354459),
    U = r(38855),
    B = r(880397),
    G = r(616926);
function Z(e) {
    var n, r, i;
    let { channel: s, isLoading: N } = e,
        [R, Z] = o.useState(!1),
        F = (0, u.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivityForChannel(s.id)),
        V = (0, u.e7)([A.ZP], () => A.ZP.getActivityPanelMode()),
        j = (0, _.q)(null == F ? void 0 : F.applicationId),
        H = null == F ? void 0 : F.launchId,
        Y = (0, u.e7)([I.Z], () => I.Z.getChannelId() === s.id),
        { dockedRect: W, isHidden: K } = (0, u.cj)([b.Z], () => {
            let e = b.Z.pipWindow;
            return {
                dockedRect: null != e ? b.Z.getDockedRect(e.id) : null,
                isHidden: b.Z.isEmbeddedActivityHidden()
            };
        }),
        z = (0, C.sU)({ channelId: s.id }),
        {
            activityParticipant: q,
            selectedParticipant: Q,
            participantsOpen: X
        } = (0, u.cj)([g.Z], () => ({
            activityParticipant: null != F ? g.Z.getParticipant(s.id, (0, m.oW)(F.applicationId)) : null,
            selectedParticipant: g.Z.getSelectedParticipant(s.id),
            participantsOpen: g.Z.getParticipantsOpen(s.id)
        })),
        J = Y || null != z,
        $ = (0, D.Z)(s.id),
        ee = $ && (null == Q ? void 0 : Q.type) !== k.fO.ACTIVITY,
        et = !$ && V === P.Ez.PIP,
        en = J && (ee || et) && null == W,
        er = (!J || en) && !K,
        ei = er && null != b.Z.pipVideoWindow && null != b.Z.pipActivityWindow;
    function ea() {
        var e;
        null != F && f.Z.selectParticipant(s.id, (0, m.oW)(F.applicationId));
        let n = null !== (e = s.getGuildId()) && void 0 !== e ? e : M.ME;
        p.Z.channelListScrollTo(n, s.id), (0, E.XU)(n, s.id), null == z && (0, h.Ou)();
    }
    function eo() {
        Z(!R);
    }
    function es(e, n, r, i, o) {
        var l;
        return er && null != F && ((null == q ? void 0 : q.type) === k.fO.ACTIVITY || i)
            ? (null === (l = F.config) || void 0 === l ? void 0 : l.useInteractivePIP)
                ? (0, a.jsx)(x.of, {
                      onJumpToChannel: ea,
                      applicationId: F.applicationId,
                      channel: s,
                      showControls: !r,
                      onMouseDown: e,
                      onMouseMove: e,
                      onMouseLeave: n,
                      onToggleHeight: eo,
                      isExpanded: R,
                      hideExpandedButton: i,
                      embeddedActivity: F
                  })
                : i
                  ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(x.q5, {
                            idle: r,
                            onMouseMove: e,
                            onMouseDown: e,
                            onMouseLeave: n,
                            onJumpToChannel: () => {
                                ea(), (0, S.tg)(P.Ez.PANEL);
                            },
                            channel: s,
                            applicationId: F.applicationId,
                            users: o,
                            embeddedActivity: F
                        })
                    })
                  : null == q
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: n,
                                  className: U.clickShield,
                                  onDoubleClick: ea
                              }),
                              (0, a.jsx)(x.YB, {
                                  idle: r,
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: n,
                                  onJumpToChannel: ea,
                                  channel: s,
                                  applicationId: F.applicationId,
                                  selectedParticipant: q,
                                  embeddedActivity: F
                              })
                          ]
                      })
            : null;
    }
    if (
        (o.useEffect(() => {
            if ((null == F ? void 0 : F.applicationId) != null) {
                let e = er ? w.cE.PIP : w.cE.FOCUSED;
                d.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: F.applicationId
                });
            }
        }, [null == F ? void 0 : F.applicationId, er]),
        null == F || null == H || (null == q && (0, D.Z)(s.id)) || null == j)
    )
        return null;
    let el = Array.from(F.userIds)
            .map((e) => T.default.getUser(e))
            .filter((e) => null != e),
        eu = {
            instance_id: null !== (i = null !== (r = F.compositeInstanceId) && void 0 !== r ? r : F.launchId) && void 0 !== i ? i : '',
            channel_id: s.id,
            location_id: null === (n = F.location) || void 0 === n ? void 0 : n.id,
            launch_id: F.launchId,
            referrer_id: F.referrerId,
            custom_id: F.customId
        };
    return (
        null != s.guild_id && '' !== s.guild_id && (eu.guild_id = s.guild_id),
        (0, a.jsx)(y.ZP, {
            timeout: 2000,
            children: (e) => {
                var n, r;
                let { idle: i, onActive: o, onForceIdle: u } = e;
                return (0, a.jsxs)(v.Z, {
                    className: l()(U.root, {
                        [U.pipMode]: er,
                        [G.elevationHigh]: er,
                        [B.idle]: i && !(null === (n = F.config) || void 0 === n ? void 0 : n.useInteractivePIP),
                        [U.pipModeShort]: er && !R,
                        [U.pipModeTall]: er && R,
                        [U.hidden]: K,
                        [U.multiPIPMode]: ei
                    }),
                    noBorder: !er,
                    children: [
                        (0, a.jsx)('div', {
                            className: 'theme-dark',
                            children: es(o, u, i, et, el)
                        }),
                        N
                            ? (0, a.jsx)(c.Spinner, {
                                  className: l()(U.iframe, {
                                      [U.pipModeShort]: er && !R,
                                      [U.pipModeTall]: er && R
                                  })
                              })
                            : (0, a.jsx)(L.J, {
                                  allowPopups: (0, O.h)(j),
                                  referrerPolicy: w.um.has(F.applicationId) ? 'no-referrer' : 'origin',
                                  url: F.url,
                                  queryParams: eu,
                                  className: l()(U.iframe, {
                                      [U.pipModeShort]: er && !R,
                                      [U.pipModeTall]: er && R,
                                      [U.pipNonInteractive]: er && !(null === (r = F.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                  }),
                                  shouldRefocus: !er && Y
                              }),
                        !er &&
                            (0, a.jsx)(x.Ds, {
                                participantsOpen: X,
                                showToggleParticipants: !1,
                                channelId: s.id
                            })
                    ]
                });
            }
        })
    );
}
let F = (e) => {
    let { channel: n, ...r } = e,
        { userActivity: i, inActivity: o } = (0, R.Z)(n.id);
    (0, N.Z)({ userActivity: i });
    let s = !o;
    return (0, a.jsx)(Z, {
        channel: n,
        isLoading: s,
        ...r
    });
};
n.Z = F;
