n.d(t, { Z: () => H }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(475179),
    d = n(925549),
    f = n(37234),
    p = n(100527),
    _ = n(906732),
    m = n(835473),
    h = n(413523),
    g = n(358221),
    E = n(703656),
    b = n(607187),
    y = n(937995),
    O = n(366050),
    v = n(944486),
    S = n(594174),
    I = n(566620),
    T = n(317381),
    A = n(531826),
    C = n(175894),
    N = n(963614),
    P = n(917107),
    R = n(208156),
    w = n(676526),
    D = n(701488),
    x = n(918559),
    L = n(981631),
    j = n(354459),
    M = n(505386),
    k = n(186880),
    U = n(315091);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function V(e) {
    var t, n, a;
    let { channel: p, isLoading: _ } = e,
        [C, G] = i.useState(!1),
        Z = (0, s.e7)([T.ZP], () => T.ZP.getCurrentEmbeddedActivity()),
        B = null == Z ? void 0 : Z.applicationId,
        F = (0, s.e7)([T.ZP], () => null != B && T.ZP.isProxyTicketRefreshing(B), [B]),
        V = (0, s.e7)([T.ZP], () => T.ZP.getActivityPanelMode()),
        H = (0, m.q)(B),
        Y = null == Z ? void 0 : Z.launchId,
        W = (0, s.e7)([v.Z], () => v.Z.getChannelId() === (null == p ? void 0 : p.id)),
        { dockedRect: K, isHidden: z } = (0, s.cj)([O.Z], () => {
            let e = O.Z.pipWindow;
            return {
                dockedRect: null != e ? O.Z.getDockedRect(e.id) : null,
                isHidden: O.Z.isEmbeddedActivityHidden(),
            };
        }),
        q = (0, A.sU)({ channelId: null == p ? void 0 : p.id }),
        {
            activityParticipant: Q,
            selectedParticipant: X,
            participantsOpen: J,
        } = (0, s.cj)([g.Z], () => ({
            activityParticipant:
                null != Z && null != p
                    ? g.Z.getParticipant(
                          p.id,
                          (0, h.gN)({
                              applicationId: Z.applicationId,
                              instanceId: Z.compositeInstanceId,
                          }),
                      )
                    : null,
            selectedParticipant: null != p ? g.Z.getSelectedParticipant(p.id) : null,
            participantsOpen: null != p && g.Z.getParticipantsOpen(p.id),
        })),
        $ = W || null != q,
        ee = (0, P.Z)(null == p ? void 0 : p.id),
        et = ee && (null == X ? void 0 : X.type) !== j.fO.ACTIVITY,
        en = !ee && V === x.Ez.PIP,
        er = $ && (et || en) && null == K,
        ei = (!$ || er) && !z,
        ea = ei && null != O.Z.pipVideoWindow && null != O.Z.pipActivityWindow;
    function eo() {
        if (null != p) {
            var e;
            null != Z &&
                u.Z.selectParticipant(
                    p.id,
                    (0, h.gN)({
                        applicationId: Z.applicationId,
                        instanceId: Z.compositeInstanceId,
                    }),
                );
            let t = null != (e = p.getGuildId()) ? e : L.ME;
            d.Z.channelListScrollTo(t, p.id), (0, E.XU)(t, p.id);
        }
        null == q && (0, f.Ou)();
    }
    function es() {
        G(!C);
    }
    function el(e) {
        var t;
        let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: o, users: s } = e;
        return ei && null != Z && ((null == Q ? void 0 : Q.type) === j.fO.ACTIVITY || o)
            ? (null == (t = Z.config) ? void 0 : t.useInteractivePIP)
                ? (0, r.jsx)(w.of, {
                      onJumpToChannel: eo,
                      applicationId: Z.applicationId,
                      channel: p,
                      showControls: !a,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: es,
                      isExpanded: C,
                      hideExpandedButton: o,
                      embeddedActivity: Z,
                  })
                : o
                  ? (0, r.jsx)(w.q5, {
                        idle: a,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            eo(), (0, I.tg)(x.Ez.PANEL);
                        },
                        channel: p,
                        applicationId: Z.applicationId,
                        users: s,
                        embeddedActivity: Z,
                    })
                  : null == Q
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: M.clickShield,
                                  onDoubleClick: eo,
                              }),
                              (0, r.jsx)(w.YB, {
                                  idle: a,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: eo,
                                  channel: p,
                                  applicationId: Z.applicationId,
                                  selectedParticipant: Q,
                                  embeddedActivity: Z,
                              }),
                          ],
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if (null != B) {
                let e = ei ? D.cE.PIP : D.cE.FOCUSED;
                c.Z.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: B,
                });
            }
        }, [B, ei]),
        null == Z || null == Y || ((0, P.Z)(null == p ? void 0 : p.id) && null == Q) || null == H)
    )
        return null;
    let ec = Array.from(Z.userIds)
            .map((e) => S.default.getUser(e))
            .filter((e) => null != e),
        eu = {
            instance_id: null != (a = null != (n = Z.compositeInstanceId) ? n : Z.launchId) ? a : "",
            location_id: null == (t = Z.location) ? void 0 : t.id,
            launch_id: Z.launchId,
            referrer_id: Z.referrerId,
            custom_id: Z.customId,
        };
    return (
        null != Z.proxyTicket && (eu.discord_proxy_ticket = Z.proxyTicket),
        (null == p ? void 0 : p.guild_id) != null &&
            (null == p ? void 0 : p.guild_id) !== "" &&
            (eu.guild_id = p.guild_id),
        (null == p ? void 0 : p.id) != null && (null == p ? void 0 : p.id) !== "" && (eu.channel_id = p.id),
        (0, r.jsx)(y.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: i, onActive: a, onForceIdle: s } = e;
                return (0, r.jsxs)(b.Z, {
                    className: o()(M.root, {
                        [M.pipMode]: ei,
                        [U.elevationHigh]: ei,
                        [k.idle]: i && !(null == (t = Z.config) ? void 0 : t.useInteractivePIP),
                        [M.pipModeShort]: ei && !C,
                        [M.pipModeTall]: ei && C,
                        [M.hidden]: z,
                        [M.multiPIPMode]: ea,
                    }),
                    noBorder: !ei,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: el({
                                onActive: a,
                                onForceIdle: s,
                                idle: i,
                                isActivityInTextChannel: en,
                                users: ec,
                            }),
                        }),
                        _ || F
                            ? (0, r.jsx)(l.$jN, {
                                  className: o()(M.iframe, {
                                      [M.pipModeShort]: ei && !C,
                                      [M.pipModeTall]: ei && C,
                                  }),
                              })
                            : (0, r.jsx)(R.J, {
                                  allowPopups: (0, N.h)(H),
                                  referrerPolicy: D.um.has(Z.applicationId) ? "no-referrer" : "origin",
                                  url: Z.url,
                                  queryParams: eu,
                                  className: o()(M.iframe, {
                                      [M.pipModeShort]: ei && !C,
                                      [M.pipModeTall]: ei && C,
                                      [M.pipNonInteractive]:
                                          ei && !(null == (n = Z.config) ? void 0 : n.useInteractivePIP),
                                  }),
                                  shouldRefocus: !ei && W,
                              }),
                        !ei &&
                            null != p &&
                            (0, r.jsx)(w.Ds, {
                                participantsOpen: J,
                                showToggleParticipants: !1,
                                channelId: p.id,
                            }),
                    ],
                });
            },
        })
    );
}
let H = (e) => {
    var { channel: t } = e,
        n = B(e, ["channel"]);
    let i = T.ZP.getCurrentEmbeddedActivity();
    (0, C.Z)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: a } = (0, _.ZP)(p.Z.ACTIVITY_PIP),
        o = null == i;
    return (0, r.jsx)(_.Gt, {
        value: a,
        children: (0, r.jsx)(
            V,
            Z(
                {
                    channel: t,
                    isLoading: o,
                },
                n,
            ),
        ),
    });
};
