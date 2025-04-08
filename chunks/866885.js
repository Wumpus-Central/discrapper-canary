n.d(t, { Z: () => H }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    v = n(366050),
    O = n(944486),
    I = n(594174),
    S = n(566620),
    T = n(317381),
    N = n(531826),
    A = n(175894),
    C = n(963614),
    R = n(917107),
    P = n(208156),
    w = n(748492),
    D = n(701488),
    L = n(918559),
    x = n(981631),
    M = n(354459),
    k = n(672058),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function Z(e) {
    var t, n, o;
    let { channel: _, isLoading: p } = e,
        [A, G] = i.useState(!1),
        B = (0, s.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivityForChannel(_.id)),
        V = (0, s.e7)([T.ZP], () => T.ZP.getActivityPanelMode()),
        F = (0, h.q)(null == B ? void 0 : B.applicationId),
        Z = null == B ? void 0 : B.launchId,
        H = (0, s.e7)([O.Z], () => O.Z.getChannelId() === _.id),
        { dockedRect: W, isHidden: Y } = (0, s.cj)([v.Z], () => {
            let e = v.Z.pipWindow;
            return {
                dockedRect: null != e ? v.Z.getDockedRect(e.id) : null,
                isHidden: v.Z.isEmbeddedActivityHidden()
            };
        }),
        K = (0, N.sU)({ channelId: _.id }),
        {
            activityParticipant: z,
            selectedParticipant: q,
            participantsOpen: Q
        } = (0, s.cj)([g.Z], () => ({
            activityParticipant:
                null != B
                    ? g.Z.getParticipant(
                          _.id,
                          (0, m.gN)({
                              applicationId: B.applicationId,
                              instanceId: B.compositeInstanceId
                          })
                      )
                    : null,
            selectedParticipant: g.Z.getSelectedParticipant(_.id),
            participantsOpen: g.Z.getParticipantsOpen(_.id)
        })),
        X = H || null != K,
        J = (0, R.Z)(_.id),
        $ = J && (null == q ? void 0 : q.type) !== M.fO.ACTIVITY,
        ee = !J && V === L.Ez.PIP,
        et = X && ($ || ee) && null == W,
        en = (!X || et) && !Y,
        er = en && null != v.Z.pipVideoWindow && null != v.Z.pipActivityWindow;
    function ei() {
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
        d.Z.channelListScrollTo(t, _.id), (0, E.XU)(t, _.id), null == K && (0, f.Ou)();
    }
    function eo() {
        G(!A);
    }
    function ea(e, t, n, i, o) {
        var a;
        return en && null != B && ((null == z ? void 0 : z.type) === M.fO.ACTIVITY || i)
            ? (null == (a = B.config) ? void 0 : a.useInteractivePIP)
                ? (0, r.jsx)(w.of, {
                      onJumpToChannel: ei,
                      applicationId: B.applicationId,
                      channel: _,
                      showControls: !n,
                      onMouseDown: e,
                      onMouseMove: e,
                      onMouseLeave: t,
                      onToggleHeight: eo,
                      isExpanded: A,
                      hideExpandedButton: i,
                      embeddedActivity: B
                  })
                : i
                  ? (0, r.jsx)(w.q5, {
                        idle: n,
                        onMouseMove: e,
                        onMouseDown: e,
                        onMouseLeave: t,
                        onJumpToChannel: () => {
                            ei(), (0, S.tg)(L.Ez.PANEL);
                        },
                        channel: _,
                        applicationId: B.applicationId,
                        users: o,
                        embeddedActivity: B
                    })
                  : null == z
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: t,
                                  className: k.clickShield,
                                  onDoubleClick: ei
                              }),
                              (0, r.jsx)(w.YB, {
                                  idle: n,
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: t,
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
        null == B || null == Z || (null == z && (0, R.Z)(_.id)) || null == F)
    )
        return null;
    let es = Array.from(B.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e),
        el = {
            instance_id: null != (o = null != (n = B.compositeInstanceId) ? n : B.launchId) ? o : '',
            channel_id: _.id,
            location_id: null == (t = B.location) ? void 0 : t.id,
            launch_id: B.launchId,
            referrer_id: B.referrerId,
            custom_id: B.customId
        };
    return (
        null != _.guild_id && '' !== _.guild_id && (el.guild_id = _.guild_id),
        (0, r.jsx)(y.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: i, onActive: o, onForceIdle: s } = e;
                return (0, r.jsxs)(b.Z, {
                    className: a()(k.root, {
                        [k.pipMode]: en,
                        [U.elevationHigh]: en,
                        [j.idle]: i && !(null == (t = B.config) ? void 0 : t.useInteractivePIP),
                        [k.pipModeShort]: en && !A,
                        [k.pipModeTall]: en && A,
                        [k.hidden]: Y,
                        [k.multiPIPMode]: er
                    }),
                    noBorder: !en,
                    children: [
                        (0, r.jsx)('div', {
                            className: 'theme-dark',
                            children: ea(o, s, i, ee, es)
                        }),
                        p
                            ? (0, r.jsx)(l.$jN, {
                                  className: a()(k.iframe, {
                                      [k.pipModeShort]: en && !A,
                                      [k.pipModeTall]: en && A
                                  })
                              })
                            : (0, r.jsx)(P.J, {
                                  allowPopups: (0, C.h)(F),
                                  referrerPolicy: D.um.has(B.applicationId) ? 'no-referrer' : 'origin',
                                  url: B.url,
                                  queryParams: el,
                                  className: a()(k.iframe, {
                                      [k.pipModeShort]: en && !A,
                                      [k.pipModeTall]: en && A,
                                      [k.pipNonInteractive]: en && !(null == (n = B.config) ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !en && H
                              }),
                        !en &&
                            (0, r.jsx)(w.Ds, {
                                participantsOpen: Q,
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
    let i = T.ZP.getCurrentEmbeddedActivity();
    (0, A.Z)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: o } = (0, p.ZP)(_.Z.ACTIVITY_PIP),
        a = null == i;
    return (0, r.jsx)(p.Gt, {
        value: o,
        children: (0, r.jsx)(
            Z,
            B(
                {
                    channel: t,
                    isLoading: a
                },
                n
            )
        )
    });
};
