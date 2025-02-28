n.d(t, { Z: () => W }), n(47120);
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
    g = n(413523),
    m = n(358221),
    E = n(703656),
    v = n(607187),
    b = n(937995),
    y = n(366050),
    O = n(944486),
    S = n(594174),
    I = n(566620),
    T = n(317381),
    N = n(531826),
    A = n(175894),
    C = n(246106),
    R = n(963614),
    P = n(917107),
    D = n(208156),
    w = n(748492),
    L = n(701488),
    x = n(918559),
    M = n(981631),
    k = n(354459),
    j = n(47148),
    U = n(54329),
    G = n(423308);
function B(e, t, n) {
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
function V(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function H(e) {
    var t, n, o;
    let { channel: _, isLoading: p } = e,
        [A, C] = i.useState(!1),
        B = (0, s.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivityForChannel(_.id)),
        V = (0, s.e7)([T.ZP], () => T.ZP.getActivityPanelMode()),
        F = (0, h.q)(null == B ? void 0 : B.applicationId),
        Z = null == B ? void 0 : B.launchId,
        H = (0, s.e7)([O.Z], () => O.Z.getChannelId() === _.id),
        { dockedRect: W, isHidden: Y } = (0, s.cj)([y.Z], () => {
            let e = y.Z.pipWindow;
            return {
                dockedRect: null != e ? y.Z.getDockedRect(e.id) : null,
                isHidden: y.Z.isEmbeddedActivityHidden()
            };
        }),
        K = (0, N.sU)({ channelId: _.id }),
        {
            activityParticipant: z,
            selectedParticipant: q,
            participantsOpen: Q
        } = (0, s.cj)([m.Z], () => ({
            activityParticipant:
                null != B
                    ? m.Z.getParticipant(
                          _.id,
                          (0, g.gN)({
                              applicationId: B.applicationId,
                              instanceId: B.compositeInstanceId
                          })
                      )
                    : null,
            selectedParticipant: m.Z.getSelectedParticipant(_.id),
            participantsOpen: m.Z.getParticipantsOpen(_.id)
        })),
        X = H || null != K,
        J = (0, P.Z)(_.id),
        $ = J && (null == q ? void 0 : q.type) !== k.fO.ACTIVITY,
        ee = !J && V === x.Ez.PIP,
        et = X && ($ || ee) && null == W,
        en = (!X || et) && !Y,
        er = en && null != y.Z.pipVideoWindow && null != y.Z.pipActivityWindow;
    function ei() {
        var e;
        null != B &&
            u.Z.selectParticipant(
                _.id,
                (0, g.gN)({
                    applicationId: B.applicationId,
                    instanceId: B.compositeInstanceId
                })
            );
        let t = null !== (e = _.getGuildId()) && void 0 !== e ? e : M.ME;
        d.Z.channelListScrollTo(t, _.id), (0, E.XU)(t, _.id), null == K && (0, f.Ou)();
    }
    function eo() {
        C(!A);
    }
    function ea(e, t, n, i, o) {
        var a;
        return en && null != B && ((null == z ? void 0 : z.type) === k.fO.ACTIVITY || i)
            ? (null === (a = B.config) || void 0 === a ? void 0 : a.useInteractivePIP)
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
                            ei(), (0, I.tg)(x.Ez.PANEL);
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
                                  className: j.clickShield,
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
                let e = en ? L.cE.PIP : L.cE.FOCUSED;
                c.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: B.applicationId
                });
            }
        }, [null == B ? void 0 : B.applicationId, en]),
        null == B || null == Z || (null == z && (0, P.Z)(_.id)) || null == F)
    )
        return null;
    let es = Array.from(B.userIds)
            .map((e) => S.default.getUser(e))
            .filter((e) => null != e),
        el = {
            instance_id: null !== (o = null !== (n = B.compositeInstanceId) && void 0 !== n ? n : B.launchId) && void 0 !== o ? o : '',
            channel_id: _.id,
            location_id: null === (t = B.location) || void 0 === t ? void 0 : t.id,
            launch_id: B.launchId,
            referrer_id: B.referrerId,
            custom_id: B.customId
        };
    return (
        null != _.guild_id && '' !== _.guild_id && (el.guild_id = _.guild_id),
        (0, r.jsx)(b.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: i, onActive: o, onForceIdle: s } = e;
                return (0, r.jsxs)(v.Z, {
                    className: a()(j.root, {
                        [j.pipMode]: en,
                        [G.elevationHigh]: en,
                        [U.idle]: i && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
                        [j.pipModeShort]: en && !A,
                        [j.pipModeTall]: en && A,
                        [j.hidden]: Y,
                        [j.multiPIPMode]: er
                    }),
                    noBorder: !en,
                    children: [
                        (0, r.jsx)('div', {
                            className: 'theme-dark',
                            children: ea(o, s, i, ee, es)
                        }),
                        p
                            ? (0, r.jsx)(l.$jN, {
                                  className: a()(j.iframe, {
                                      [j.pipModeShort]: en && !A,
                                      [j.pipModeTall]: en && A
                                  })
                              })
                            : (0, r.jsx)(D.J, {
                                  allowPopups: (0, R.h)(F),
                                  referrerPolicy: L.um.has(B.applicationId) ? 'no-referrer' : 'origin',
                                  url: B.url,
                                  queryParams: el,
                                  className: a()(j.iframe, {
                                      [j.pipModeShort]: en && !A,
                                      [j.pipModeTall]: en && A,
                                      [j.pipNonInteractive]: en && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
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
let W = (e) => {
    var { channel: t } = e,
        n = F(e, ['channel']);
    let { userActivity: i, inActivity: o } = (0, C.Z)(t.id);
    (0, A.Z)({ userActivity: i });
    let { analyticsLocations: a } = (0, p.ZP)(_.Z.ACTIVITY_PIP),
        s = !o;
    return (0, r.jsx)(p.Gt, {
        value: a,
        children: (0, r.jsx)(
            H,
            V(
                {
                    channel: t,
                    isLoading: s
                },
                n
            )
        )
    });
};
