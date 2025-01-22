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
    m = r(358221),
    g = r(703656),
    E = r(607187),
    v = r(937995),
    y = r(366050),
    b = r(944486),
    I = r(594174),
    T = r(566620),
    S = r(317381),
    A = r(531826),
    C = r(175894),
    N = r(246106),
    R = r(963614),
    O = r(917107),
    D = r(208156),
    x = r(748492),
    L = r(701488),
    w = r(918559),
    P = r(981631),
    M = r(354459),
    k = r(38855),
    U = r(880397),
    B = r(616926);
function G(e) {
    var n, r, i;
    let { channel: s, isLoading: C } = e,
        [N, G] = o.useState(!1),
        Z = (0, u.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(s.id)),
        F = (0, u.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
        V = (0, _.q)(null == Z ? void 0 : Z.applicationId),
        j = null == Z ? void 0 : Z.launchId,
        H = (0, u.e7)([b.Z], () => b.Z.getChannelId() === s.id),
        { dockedRect: Y, isHidden: W } = (0, u.cj)([y.Z], () => {
            let e = y.Z.pipWindow;
            return {
                dockedRect: null != e ? y.Z.getDockedRect(e.id) : null,
                isHidden: y.Z.isEmbeddedActivityHidden()
            };
        }),
        K = (0, A.sU)({ channelId: s.id }),
        {
            activityParticipant: z,
            selectedParticipant: q,
            participantsOpen: Q
        } = (0, u.cj)([m.Z], () => ({
            activityParticipant: null != Z ? m.Z.getParticipant(s.id, Z.applicationId) : null,
            selectedParticipant: m.Z.getSelectedParticipant(s.id),
            participantsOpen: m.Z.getParticipantsOpen(s.id)
        })),
        X = H || null != K,
        J = (0, O.Z)(s.id),
        $ = J && (null == q ? void 0 : q.type) !== M.fO.ACTIVITY,
        ee = !J && F === w.Ez.PIP,
        et = X && ($ || ee) && null == Y,
        en = (!X || et) && !W,
        er = en && null != y.Z.pipVideoWindow && null != y.Z.pipActivityWindow;
    function ei() {
        var e;
        null != Z && f.Z.selectParticipant(s.id, Z.applicationId);
        let n = null !== (e = s.getGuildId()) && void 0 !== e ? e : P.ME;
        p.Z.channelListScrollTo(n, s.id), (0, g.XU)(n, s.id), null == K && (0, h.Ou)();
    }
    function ea() {
        G(!N);
    }
    function eo(e, n, r, i, o) {
        var l;
        return en && null != Z && ((null == z ? void 0 : z.type) === M.fO.ACTIVITY || i)
            ? (null === (l = Z.config) || void 0 === l ? void 0 : l.useInteractivePIP)
                ? (0, a.jsx)(x.of, {
                      onJumpToChannel: ei,
                      applicationId: Z.applicationId,
                      channel: s,
                      showControls: !r,
                      onMouseDown: e,
                      onMouseMove: e,
                      onMouseLeave: n,
                      onToggleHeight: ea,
                      isExpanded: N,
                      hideExpandedButton: i,
                      embeddedActivity: Z
                  })
                : i
                  ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(x.q5, {
                            idle: r,
                            onMouseMove: e,
                            onMouseDown: e,
                            onMouseLeave: n,
                            onJumpToChannel: () => {
                                ei(), (0, T.tg)(w.Ez.PANEL);
                            },
                            channel: s,
                            applicationId: Z.applicationId,
                            users: o,
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
                              (0, a.jsx)(x.YB, {
                                  idle: r,
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: n,
                                  onJumpToChannel: ei,
                                  channel: s,
                                  applicationId: Z.applicationId,
                                  selectedParticipant: z,
                                  embeddedActivity: Z
                              })
                          ]
                      })
            : null;
    }
    if (
        (o.useEffect(() => {
            if ((null == Z ? void 0 : Z.applicationId) != null) {
                let e = en ? L.cE.PIP : L.cE.FOCUSED;
                d.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: Z.applicationId
                });
            }
        }, [null == Z ? void 0 : Z.applicationId, en]),
        null == Z || null == j || (null == z && (0, O.Z)(s.id)) || null == V)
    )
        return null;
    let es = Array.from(Z.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e),
        el = {
            instance_id: null !== (i = null !== (r = Z.compositeInstanceId) && void 0 !== r ? r : Z.launchId) && void 0 !== i ? i : '',
            channel_id: s.id,
            location_id: null === (n = Z.location) || void 0 === n ? void 0 : n.id,
            launch_id: Z.launchId,
            referrer_id: Z.referrerId,
            custom_id: Z.customId
        };
    return (
        null != s.guild_id && '' !== s.guild_id && (el.guild_id = s.guild_id),
        (0, a.jsx)(v.ZP, {
            timeout: 2000,
            children: (e) => {
                var n, r;
                let { idle: i, onActive: o, onForceIdle: u } = e;
                return (0, a.jsxs)(E.Z, {
                    className: l()(k.root, {
                        [k.pipMode]: en,
                        [B.elevationHigh]: en,
                        [U.idle]: i && !(null === (n = Z.config) || void 0 === n ? void 0 : n.useInteractivePIP),
                        [k.pipModeShort]: en && !N,
                        [k.pipModeTall]: en && N,
                        [k.hidden]: W,
                        [k.multiPIPMode]: er
                    }),
                    noBorder: !en,
                    children: [
                        (0, a.jsx)('div', {
                            className: 'theme-dark',
                            children: eo(o, u, i, ee, es)
                        }),
                        C
                            ? (0, a.jsx)(c.Spinner, {
                                  className: l()(k.iframe, {
                                      [k.pipModeShort]: en && !N,
                                      [k.pipModeTall]: en && N
                                  })
                              })
                            : (0, a.jsx)(D.J, {
                                  allowPopups: (0, R.h)(V),
                                  referrerPolicy: L.um.has(Z.applicationId) ? 'no-referrer' : 'origin',
                                  url: Z.url,
                                  queryParams: el,
                                  className: l()(k.iframe, {
                                      [k.pipModeShort]: en && !N,
                                      [k.pipModeTall]: en && N,
                                      [k.pipNonInteractive]: en && !(null === (r = Z.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                  }),
                                  shouldRefocus: !en && H
                              }),
                        !en &&
                            (0, a.jsx)(x.Ds, {
                                participantsOpen: Q,
                                showToggleParticipants: !1,
                                channelId: s.id
                            })
                    ]
                });
            }
        })
    );
}
let Z = (e) => {
    let { channel: n, ...r } = e,
        { userActivity: i, inActivity: o } = (0, N.Z)(n.id);
    (0, C.Z)({ userActivity: i });
    let s = !o;
    return (0, a.jsx)(G, {
        channel: n,
        isLoading: s,
        ...r
    });
};
n.Z = Z;
