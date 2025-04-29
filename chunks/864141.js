n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(430824),
    d = n(957575),
    f = n(323038),
    _ = n(960870),
    p = n(139793),
    h = n(652853),
    m = n(336383),
    g = n(194811),
    E = n(265386),
    b = n(340266),
    y = n(849755),
    O = n(384298),
    v = n(670451),
    I = n(228168),
    S = n(388032),
    T = n(227832);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: A, onClose: C } = e,
        { themeType: P } = (0, h.z)(),
        { analyticsLocations: w } = (0, c.ZP)(l.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        D = (0, _.Z)({
            display: 'voice',
            activity: { type: 'VOICE' },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: w
        }),
        L = (0, p.Z)({
            userId: t.id,
            onAction: D
        }),
        x = (0, a.e7)([u.Z], () => u.Z.getGuild(i.guild_id)),
        M = (0, f.Z)(i),
        { channelStatusEnabled: k } = (0, d.D)({ location: 'UserProfileVoiceActivityCard' }),
        j = () => (i.isDM() || i.isGroupDM() ? S.intl.string(S.t['9FaEzs']) : i.isGuildStageVoice() ? S.intl.string(S.t.QygGCA) : S.intl.string(S.t.msxteH)),
        U = () => {
            if (t.id !== n.id) return null;
            let e = i.isDM() || i.isGroupDM() ? S.intl.string(S.t['+DsWbW']) : S.intl.string(S.t.xOVEjY);
            return (0, r.jsx)(s.ua7, {
                text: e,
                children: (e) => (0, r.jsx)(s.d3s, R(N({}, e), { size: 'xxs' }))
            });
        },
        G = () =>
            (0, r.jsx)('div', {
                className: T.actions,
                children: (0, r.jsx)(O.Z, {
                    channel: i,
                    onAction: D,
                    onClose: C
                })
            });
    return (0, r.jsx)(c.Gt, {
        value: w,
        children: (0, r.jsxs)(m.Z, {
            ref: L,
            className: o()(T.card, A),
            onAction: D,
            onClose: C,
            children: [
                (0, r.jsx)(g.Z, {
                    text: j(),
                    tags: U(),
                    contextMenu: (0, r.jsx)(v.Z, {
                        display: 'voice',
                        user: t,
                        onClose: C
                    })
                }),
                (0, r.jsx)('div', {
                    className: T.body,
                    children: (0, r.jsxs)('div', {
                        className: T.content,
                        children: [
                            (0, r.jsx)(b.Z, {
                                users: M,
                                channel: i
                            }),
                            (0, r.jsxs)('div', {
                                className: T.details,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        channel: i,
                                        guild: x,
                                        onAction: D,
                                        onClose: C
                                    }),
                                    k &&
                                        i.isGuildVoice() &&
                                        (0, r.jsx)(y.Z, {
                                            voiceChannel: i,
                                            onAction: D,
                                            onClose: C
                                        }),
                                    P === I.lY.MODAL_V2 && G()
                                ]
                            }),
                            P === I.lY.MODAL && G()
                        ]
                    })
                }),
                P !== I.lY.MODAL && P !== I.lY.MODAL_V2 && G()
            ]
        })
    });
}
