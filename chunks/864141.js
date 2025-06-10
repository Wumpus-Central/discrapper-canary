n.d(t, { Z: () => w });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(933557),
    d = n(430824),
    f = n(957575),
    _ = n(323038),
    p = n(960870),
    h = n(139793),
    m = n(652853),
    g = n(336383),
    E = n(194811),
    b = n(265386),
    y = n(340266),
    O = n(849755),
    v = n(384298),
    I = n(670451),
    T = n(228168),
    S = n(388032),
    A = n(227832);
function N(e, t, n) {
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
function C(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: N, onClose: R } = e,
        { themeType: w } = (0, m.z)(),
        { analyticsLocations: D } = (0, c.ZP)(l.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        L = (0, p.Z)({
            display: 'voice',
            activity: { type: 'VOICE' },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: D
        }),
        x = (0, h.Z)({
            userId: t.id,
            onAction: L
        }),
        k = (0, o.e7)([d.Z], () => d.Z.getGuild(i.guild_id)),
        M = (0, _.Z)(i),
        j = (0, u.ZP)(i),
        { channelStatusEnabled: U } = (0, f.D)({ location: 'UserProfileVoiceActivityCard' }),
        G = () => {
            if (t.id !== n.id) return null;
            let e = i.isDM() || i.isGroupDM() ? S.intl.string(S.t['+DsWbW']) : S.intl.string(S.t.xOVEjY);
            return (0, r.jsx)(s.ua7, {
                text: e,
                children: (e) => (0, r.jsx)(s.d3s, P(C({}, e), { size: 'xxs' }))
            });
        },
        B = () =>
            (0, r.jsx)('div', {
                className: A.actions,
                children: (0, r.jsx)(v.Z, {
                    channel: i,
                    onAction: L,
                    onClose: R
                })
            }),
        F = i.isDM() || i.isGroupDM() ? S.intl.string(S.t['9FaEzs']) : i.isGuildStageVoice() ? S.intl.string(S.t.QygGCA) : S.intl.string(S.t.msxteH);
    return (0, r.jsx)(c.Gt, {
        value: D,
        children: (0, r.jsxs)(g.Z, {
            ref: x,
            className: a()(A.card, N),
            onAction: L,
            onClose: R,
            'aria-label': ''.concat(F, ', ').concat(j),
            children: [
                (0, r.jsx)(E.Z, {
                    text: F,
                    tags: G(),
                    contextMenu: (0, r.jsx)(I.Z, {
                        display: 'voice',
                        user: t,
                        onClose: R
                    })
                }),
                (0, r.jsx)('div', {
                    className: A.body,
                    children: (0, r.jsxs)('div', {
                        className: A.content,
                        children: [
                            (0, r.jsx)(y.Z, {
                                users: M,
                                channel: i
                            }),
                            (0, r.jsxs)('div', {
                                className: A.details,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        channel: i,
                                        guild: k,
                                        onAction: L,
                                        onClose: R
                                    }),
                                    U &&
                                        i.isGuildVoice() &&
                                        (0, r.jsx)(O.Z, {
                                            voiceChannel: i,
                                            onAction: L,
                                            onClose: R
                                        }),
                                    w === T.lY.MODAL_V2 && B()
                                ]
                            }),
                            w === T.lY.MODAL && B()
                        ]
                    })
                }),
                w !== T.lY.MODAL && w !== T.lY.MODAL_V2 && B()
            ]
        })
    });
}
