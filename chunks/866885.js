(n.d(t, { Z: () => H }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(475179),
    d = n(925549),
    f = n(37234),
    _ = n(100527),
    p = n(906732),
    h = n(835473),
    m = n(413523),
    g = n(358221),
    E = n(703656),
    b = n(607187),
    y = n(937995),
    O = n(366050),
    v = n(944486),
    I = n(594174),
    T = n(566620),
    S = n(317381),
    A = n(531826),
    N = n(175894),
    C = n(963614),
    R = n(917107),
    P = n(208156),
    w = n(748492),
    D = n(701488),
    L = n(918559),
    x = n(981631),
    k = n(354459),
    M = n(672058),
    j = n(992955),
    U = n(20795);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function Z(e) {
    var t, n, a;
    let { channel: _, isLoading: p } = e,
        [N, G] = i.useState(!1),
        B = (0, s.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        V = (0, s.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
        F = (0, h.q)(null == B ? void 0 : B.applicationId),
        Z = null == B ? void 0 : B.launchId,
        H = (0, s.e7)([v.Z], () => v.Z.getChannelId() === (null == _ ? void 0 : _.id)),
        { dockedRect: Y, isHidden: W } = (0, s.cj)([O.Z], () => {
            let e = O.Z.pipWindow;
            return {
                dockedRect: null != e ? O.Z.getDockedRect(e.id) : null,
                isHidden: O.Z.isEmbeddedActivityHidden()
            };
        }),
        K = (0, A.sU)({ channelId: null == _ ? void 0 : _.id }),
        {
            activityParticipant: z,
            selectedParticipant: q,
            participantsOpen: X
        } = (0, s.cj)([g.Z], () => ({
            activityParticipant:
                null != B && null != _
                    ? g.Z.getParticipant(
                          _.id,
                          (0, m.gN)({
                              applicationId: B.applicationId,
                              instanceId: B.compositeInstanceId
                          })
                      )
                    : null,
            selectedParticipant: null != _ ? g.Z.getSelectedParticipant(_.id) : null,
            participantsOpen: null != _ && g.Z.getParticipantsOpen(_.id)
        })),
        Q = H || null != K,
        J = (0, R.Z)(null == _ ? void 0 : _.id),
        $ = J && (null == q ? void 0 : q.type) !== k.fO.ACTIVITY,
        ee = !J && V === L.Ez.PIP,
        et = Q && ($ || ee) && null == Y,
        en = (!Q || et) && !W,
        er = en && null != O.Z.pipVideoWindow && null != O.Z.pipActivityWindow;
    function ei() {
        if (null != _) {
            var e;
            null != B &&
                u.Z.selectParticipant(
                    _.id,
                    (0, m.gN)({
                        applicationId: B.applicationId,
                        instanceId: B.compositeInstanceId
                    })
                );
            let t = null != (e = _.getGuildId()) ? e : x.ME;
            (d.Z.channelListScrollTo(t, _.id), (0, E.XU)(t, _.id));
        }
        null == K && (0, f.Ou)();
    }
    function ea() {
        G(!N);
    }
    function eo(e) {
        var t;
        let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: o, users: s } = e;
        return en && null != B && ((null == z ? void 0 : z.type) === k.fO.ACTIVITY || o)
            ? (null == (t = B.config) ? void 0 : t.useInteractivePIP)
                ? (0, r.jsx)(w.of, {
                      onJumpToChannel: ei,
                      applicationId: B.applicationId,
                      channel: _,
                      showControls: !a,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: ea,
                      isExpanded: N,
                      hideExpandedButton: o,
                      embeddedActivity: B
                  })
                : o
                  ? (0, r.jsx)(w.q5, {
                        idle: a,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            (ei(), (0, T.tg)(L.Ez.PANEL));
                        },
                        channel: _,
                        applicationId: B.applicationId,
                        users: s,
                        embeddedActivity: B
                    })
                  : null == z
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: M.clickShield,
                                  onDoubleClick: ei
                              }),
                              (0, r.jsx)(w.YB, {
                                  idle: a,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: ei,
                                  channel: _,
                                  applicationId: B.applicationId,
                                  selectedParticipant: z,
                                  embeddedActivity: B
                              })
                          ]
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if ((null == B ? void 0 : B.applicationId) != null) {
                let e = en ? D.cE.PIP : D.cE.FOCUSED;
                c.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: B.applicationId
                });
            }
        }, [null == B ? void 0 : B.applicationId, en]),
        null == B || null == Z || ((0, R.Z)(null == _ ? void 0 : _.id) && null == z) || null == F)
    )
        return null;
    let es = Array.from(B.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e),
        el = {
            instance_id: null != (a = null != (n = B.compositeInstanceId) ? n : B.launchId) ? a : '',
            location_id: null == (t = B.location) ? void 0 : t.id,
            launch_id: B.launchId,
            referrer_id: B.referrerId,
            custom_id: B.customId
        };
    return (
        (null == _ ? void 0 : _.guild_id) != null && (null == _ ? void 0 : _.guild_id) !== '' && (el.guild_id = _.guild_id),
        (null == _ ? void 0 : _.id) != null && (null == _ ? void 0 : _.id) !== '' && (el.channel_id = _.id),
        (0, r.jsx)(y.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: i, onActive: a, onForceIdle: s } = e;
                return (0, r.jsxs)(b.Z, {
                    className: o()(M.root, {
                        [M.pipMode]: en,
                        [U.elevationHigh]: en,
                        [j.idle]: i && !(null == (t = B.config) ? void 0 : t.useInteractivePIP),
                        [M.pipModeShort]: en && !N,
                        [M.pipModeTall]: en && N,
                        [M.hidden]: W,
                        [M.multiPIPMode]: er
                    }),
                    noBorder: !en,
                    children: [
                        (0, r.jsx)('div', {
                            className: 'theme-dark',
                            children: eo({
                                onActive: a,
                                onForceIdle: s,
                                idle: i,
                                isActivityInTextChannel: ee,
                                users: es
                            })
                        }),
                        p
                            ? (0, r.jsx)(l.$jN, {
                                  className: o()(M.iframe, {
                                      [M.pipModeShort]: en && !N,
                                      [M.pipModeTall]: en && N
                                  })
                              })
                            : (0, r.jsx)(P.J, {
                                  allowPopups: (0, C.h)(F),
                                  referrerPolicy: D.um.has(B.applicationId) ? 'no-referrer' : 'origin',
                                  url: B.url,
                                  queryParams: el,
                                  className: o()(M.iframe, {
                                      [M.pipModeShort]: en && !N,
                                      [M.pipModeTall]: en && N,
                                      [M.pipNonInteractive]: en && !(null == (n = B.config) ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !en && H
                              }),
                        !en &&
                            null != _ &&
                            (0, r.jsx)(w.Ds, {
                                participantsOpen: X,
                                showToggleParticipants: !1,
                                channelId: _.id
                            })
                    ]
                });
            }
        })
    );
}
let H = (e) => {
    var { channel: t } = e,
        n = V(e, ['channel']);
    let i = S.ZP.getCurrentEmbeddedActivity();
    (0, N.Z)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: a } = (0, p.ZP)(_.Z.ACTIVITY_PIP),
        o = null == i;
    return (0, r.jsx)(p.Gt, {
        value: a,
        children: (0, r.jsx)(
            Z,
            B(
                {
                    channel: t,
                    isLoading: o
                },
                n
            )
        )
    });
};
