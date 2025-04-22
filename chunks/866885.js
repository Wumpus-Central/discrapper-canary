n.d(t, { Z: () => Y }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(252258),
    l = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(475179),
    f = n(925549),
    _ = n(37234),
    p = n(100527),
    h = n(906732),
    m = n(835473),
    g = n(413523),
    E = n(358221),
    b = n(703656),
    y = n(607187),
    v = n(937995),
    O = n(366050),
    I = n(944486),
    S = n(594174),
    T = n(566620),
    A = n(317381),
    N = n(531826),
    C = n(175894),
    R = n(963614),
    P = n(917107),
    w = n(208156),
    D = n(748492),
    L = n(701488),
    x = n(918559),
    M = n(981631),
    k = n(354459),
    j = n(672058),
    U = n(992955),
    G = n(20795);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function H(e) {
    var t, n, a;
    let { channel: p, isLoading: h } = e,
        [C, B] = i.useState(!1),
        V = (0, l.e7)([A.ZP], () => A.ZP.getCurrentEmbeddedActivity()),
        F = (null == V ? void 0 : V.location.kind) === s.E.CONTEXTLESS,
        Z = (0, l.e7)([A.ZP], () => A.ZP.getActivityPanelMode()),
        H = (0, m.q)(null == V ? void 0 : V.applicationId),
        Y = null == V ? void 0 : V.launchId,
        W = (0, l.e7)([I.Z], () => I.Z.getChannelId() === (null == p ? void 0 : p.id)),
        { dockedRect: K, isHidden: z } = (0, l.cj)([O.Z], () => {
            let e = O.Z.pipWindow;
            return {
                dockedRect: null != e ? O.Z.getDockedRect(e.id) : null,
                isHidden: O.Z.isEmbeddedActivityHidden()
            };
        }),
        q = (0, N.sU)({ channelId: null == p ? void 0 : p.id }),
        {
            activityParticipant: Q,
            selectedParticipant: X,
            participantsOpen: J
        } = (0, l.cj)([E.Z], () => ({
            activityParticipant:
                null != V && null != p
                    ? E.Z.getParticipant(
                          p.id,
                          (0, g.gN)({
                              applicationId: V.applicationId,
                              instanceId: V.compositeInstanceId
                          })
                      )
                    : null,
            selectedParticipant: null != p ? E.Z.getSelectedParticipant(p.id) : null,
            participantsOpen: null != p && E.Z.getParticipantsOpen(p.id)
        })),
        $ = W || null != q,
        ee = (0, P.Z)(null == p ? void 0 : p.id),
        et = ee && (null == X ? void 0 : X.type) !== k.fO.ACTIVITY,
        en = !ee && Z === x.Ez.PIP,
        er = $ && (et || en) && null == K,
        ei = F ? Z === x.Ez.PIP && !z : (!$ || er) && !z,
        ea = ei && null != O.Z.pipVideoWindow && null != O.Z.pipActivityWindow;
    function eo() {
        if (null != p) {
            var e;
            null != V &&
                d.Z.selectParticipant(
                    p.id,
                    (0, g.gN)({
                        applicationId: V.applicationId,
                        instanceId: V.compositeInstanceId
                    })
                );
            let t = null != (e = p.getGuildId()) ? e : M.ME;
            f.Z.channelListScrollTo(t, p.id), (0, b.XU)(t, p.id);
        }
        null == q && (0, _.Ou)();
    }
    function es() {
        B(!C);
    }
    function el(e) {
        var t;
        let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: o, users: s, showPIPControlsForContextlessActivity: l } = e;
        return ei && null != V && (F || (null == Q ? void 0 : Q.type) === k.fO.ACTIVITY || o)
            ? (null == (t = V.config) ? void 0 : t.useInteractivePIP)
                ? (0, r.jsx)(D.of, {
                      onJumpToChannel: eo,
                      applicationId: V.applicationId,
                      channel: p,
                      showControls: !a,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: es,
                      isExpanded: C,
                      hideExpandedButton: o,
                      embeddedActivity: V
                  })
                : o || l
                  ? (0, r.jsx)(D.q5, {
                        idle: a,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            eo(), (0, T.tg)(x.Ez.PANEL);
                        },
                        channel: p,
                        applicationId: V.applicationId,
                        users: s,
                        embeddedActivity: V
                    })
                  : null == Q
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: j.clickShield,
                                  onDoubleClick: eo
                              }),
                              (0, r.jsx)(D.YB, {
                                  idle: a,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: eo,
                                  channel: p,
                                  applicationId: V.applicationId,
                                  selectedParticipant: Q,
                                  embeddedActivity: V
                              })
                          ]
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if ((null == V ? void 0 : V.applicationId) != null) {
                let e = ei ? L.cE.PIP : L.cE.FOCUSED;
                u.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: V.applicationId
                });
            }
        }, [null == V ? void 0 : V.applicationId, ei]),
        null == V || null == Y || ((0, P.Z)(null == p ? void 0 : p.id) && null == Q) || null == H)
    )
        return null;
    let ec = Array.from(V.userIds)
            .map((e) => S.default.getUser(e))
            .filter((e) => null != e),
        eu = {
            instance_id: null != (a = null != (n = V.compositeInstanceId) ? n : V.launchId) ? a : '',
            channel_id: null == p ? void 0 : p.id,
            location_id: null == (t = V.location) ? void 0 : t.id,
            launch_id: V.launchId,
            referrer_id: V.referrerId,
            custom_id: V.customId
        };
    return (
        (null == p ? void 0 : p.guild_id) != null && (null == p ? void 0 : p.guild_id) !== '' && (eu.guild_id = p.guild_id),
        (0, r.jsx)(v.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: i, onActive: a, onForceIdle: s } = e;
                return (0, r.jsxs)(y.Z, {
                    className: o()(j.root, {
                        [j.pipMode]: ei,
                        [G.elevationHigh]: ei,
                        [U.idle]: i && !(null == (t = V.config) ? void 0 : t.useInteractivePIP),
                        [j.pipModeShort]: ei && !C,
                        [j.pipModeTall]: ei && C,
                        [j.hidden]: z,
                        [j.multiPIPMode]: ea
                    }),
                    noBorder: !ei,
                    children: [
                        (0, r.jsx)('div', {
                            className: 'theme-dark',
                            children: el({
                                onActive: a,
                                onForceIdle: s,
                                idle: i,
                                isActivityInTextChannel: en,
                                users: ec,
                                showPIPControlsForContextlessActivity: F && Z === x.Ez.PIP
                            })
                        }),
                        h
                            ? (0, r.jsx)(c.$jN, {
                                  className: o()(j.iframe, {
                                      [j.pipModeShort]: ei && !C,
                                      [j.pipModeTall]: ei && C
                                  })
                              })
                            : (0, r.jsx)(w.J, {
                                  allowPopups: (0, R.h)(H),
                                  referrerPolicy: L.um.has(V.applicationId) ? 'no-referrer' : 'origin',
                                  url: V.url,
                                  queryParams: eu,
                                  className: o()(j.iframe, {
                                      [j.pipModeShort]: ei && !C,
                                      [j.pipModeTall]: ei && C,
                                      [j.pipNonInteractive]: ei && !(null == (n = V.config) ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !ei && W
                              }),
                        !ei &&
                            null != p &&
                            (0, r.jsx)(D.Ds, {
                                participantsOpen: J,
                                showToggleParticipants: !1,
                                channelId: p.id
                            })
                    ]
                });
            }
        })
    );
}
let Y = (e) => {
    var { channel: t } = e,
        n = F(e, ['channel']);
    let i = A.ZP.getCurrentEmbeddedActivity();
    (0, C.Z)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: a } = (0, h.ZP)(p.Z.ACTIVITY_PIP),
        o = null == i;
    return (0, r.jsx)(h.Gt, {
        value: a,
        children: (0, r.jsx)(
            H,
            V(
                {
                    channel: t,
                    isLoading: o
                },
                n
            )
        )
    });
};
