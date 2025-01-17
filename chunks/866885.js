var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(570140),
    f = r(475179),
    _ = r(925549),
    h = r(37234),
    p = r(835473),
    m = r(358221),
    g = r(703656),
    E = r(607187),
    v = r(937995),
    I = r(366050),
    T = r(944486),
    b = r(594174),
    y = r(566620),
    S = r(317381),
    A = r(531826),
    N = r(175894),
    C = r(246106),
    R = r(963614),
    O = r(917107),
    D = r(208156),
    L = r(748492),
    x = r(701488),
    w = r(918559),
    P = r(981631),
    M = r(354459),
    k = r(38855),
    U = r(880397),
    B = r(616926);
function G(e) {
    var n, r, i;
    let { channel: o, isLoading: N } = e,
        [C, G] = s.useState(!1),
        Z = (0, u.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(o.id)),
        F = (0, u.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
        V = (0, p.q)(null == Z ? void 0 : Z.applicationId),
        j = null == Z ? void 0 : Z.launchId,
        H = (0, u.e7)([T.Z], () => T.Z.getChannelId() === o.id),
        { dockedRect: Y, isHidden: W } = (0, u.cj)([I.Z], () => {
            let e = I.Z.pipWindow;
            return {
                dockedRect: null != e ? I.Z.getDockedRect(e.id) : null,
                isHidden: I.Z.isEmbeddedActivityHidden()
            };
        }),
        K = (0, A.sU)({ channelId: o.id }),
        {
            activityParticipant: z,
            selectedParticipant: q,
            participantsOpen: Q
        } = (0, u.cj)([m.Z], () => ({
            activityParticipant: null != Z ? m.Z.getParticipant(o.id, Z.applicationId) : null,
            selectedParticipant: m.Z.getSelectedParticipant(o.id),
            participantsOpen: m.Z.getParticipantsOpen(o.id)
        })),
        X = H || null != K,
        J = (0, O.Z)(o.id),
        $ = J && (null == q ? void 0 : q.type) !== M.fO.ACTIVITY,
        ee = !J && F === w.Ez.PIP,
        et = X && ($ || ee) && null == Y,
        en = (!X || et) && !W,
        er = en && null != I.Z.pipVideoWindow && null != I.Z.pipActivityWindow;
    function ei() {
        var e;
        null != Z && f.Z.selectParticipant(o.id, Z.applicationId);
        let n = null !== (e = o.getGuildId()) && void 0 !== e ? e : P.ME;
        _.Z.channelListScrollTo(n, o.id), (0, g.XU)(n, o.id), null == K && (0, h.Ou)();
    }
    function ea() {
        G(!C);
    }
    function es(e, n, r, i, s) {
        var l;
        return en && null != Z && ((null == z ? void 0 : z.type) === M.fO.ACTIVITY || i)
            ? (null === (l = Z.config) || void 0 === l ? void 0 : l.useInteractivePIP)
                ? (0, a.jsx)(L.of, {
                      onJumpToChannel: ei,
                      applicationId: Z.applicationId,
                      channel: o,
                      showControls: !r,
                      onMouseDown: e,
                      onMouseMove: e,
                      onMouseLeave: n,
                      onToggleHeight: ea,
                      isExpanded: C,
                      hideExpandedButton: i,
                      embeddedActivity: Z
                  })
                : i
                  ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(L.q5, {
                            idle: r,
                            onMouseMove: e,
                            onMouseDown: e,
                            onMouseLeave: n,
                            onJumpToChannel: () => {
                                ei(), (0, y.tg)(w.Ez.PANEL);
                            },
                            channel: o,
                            applicationId: Z.applicationId,
                            users: s,
                            embeddedActivity: Z
                        })
                    })
                  : null == z
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: n,
                                  className: k.clickShield,
                                  onDoubleClick: ei
                              }),
                              (0, a.jsx)(L.YB, {
                                  idle: r,
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: n,
                                  onJumpToChannel: ei,
                                  channel: o,
                                  applicationId: Z.applicationId,
                                  selectedParticipant: z,
                                  embeddedActivity: Z
                              })
                          ]
                      })
            : null;
    }
    if (
        (s.useEffect(() => {
            if ((null == Z ? void 0 : Z.applicationId) != null) {
                let e = en ? x.cE.PIP : x.cE.FOCUSED;
                d.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: Z.applicationId
                });
            }
        }, [null == Z ? void 0 : Z.applicationId, en]),
        null == Z || null == j || (null == z && (0, O.Z)(o.id)) || null == V)
    )
        return null;
    let eo = Array.from(Z.userIds)
            .map((e) => b.default.getUser(e))
            .filter((e) => null != e),
        el = {
            instance_id: null !== (i = null !== (r = Z.compositeInstanceId) && void 0 !== r ? r : Z.launchId) && void 0 !== i ? i : '',
            channel_id: o.id,
            location_id: null === (n = Z.location) || void 0 === n ? void 0 : n.id,
            launch_id: Z.launchId,
            referrer_id: Z.referrerId,
            custom_id: Z.customId
        };
    return (
        null != o.guild_id && '' !== o.guild_id && (el.guild_id = o.guild_id),
        (0, a.jsx)(v.ZP, {
            timeout: 2000,
            children: (e) => {
                var n, r;
                let { idle: i, onActive: s, onForceIdle: u } = e;
                return (0, a.jsxs)(E.Z, {
                    className: l()(k.root, {
                        [k.pipMode]: en,
                        [B.elevationHigh]: en,
                        [U.idle]: i && !(null === (n = Z.config) || void 0 === n ? void 0 : n.useInteractivePIP),
                        [k.pipModeShort]: en && !C,
                        [k.pipModeTall]: en && C,
                        [k.hidden]: W,
                        [k.multiPIPMode]: er
                    }),
                    noBorder: !en,
                    children: [
                        (0, a.jsx)('div', {
                            className: 'theme-dark',
                            children: es(s, u, i, ee, eo)
                        }),
                        N
                            ? (0, a.jsx)(c.Spinner, {
                                  className: l()(k.iframe, {
                                      [k.pipModeShort]: en && !C,
                                      [k.pipModeTall]: en && C
                                  })
                              })
                            : (0, a.jsx)(D.J, {
                                  allowPopups: (0, R.h)(V),
                                  referrerPolicy: x.um.has(Z.applicationId) ? 'no-referrer' : 'origin',
                                  url: Z.url,
                                  queryParams: el,
                                  className: l()(k.iframe, {
                                      [k.pipModeShort]: en && !C,
                                      [k.pipModeTall]: en && C,
                                      [k.pipNonInteractive]: en && !(null === (r = Z.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                  }),
                                  shouldRefocus: !en && H
                              }),
                        !en &&
                            (0, a.jsx)(L.Ds, {
                                participantsOpen: Q,
                                showToggleParticipants: !1,
                                channelId: o.id
                            })
                    ]
                });
            }
        })
    );
}
let Z = (e) => {
    let { channel: n, ...r } = e,
        { userActivity: i, inActivity: s } = (0, C.Z)(n.id);
    (0, N.Z)({ userActivity: i });
    let o = !s;
    return (0, a.jsx)(G, {
        channel: n,
        isLoading: o,
        ...r
    });
};
n.Z = Z;
