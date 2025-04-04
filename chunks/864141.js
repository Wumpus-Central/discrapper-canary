n.d(t, { Z: () => U });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(442837),
    l = n(481060),
    c = n(287734),
    u = n(100527),
    d = n(906732),
    f = n(933557),
    _ = n(359110),
    p = n(769654),
    h = n(922482),
    m = n(706454),
    g = n(430824),
    E = n(957575),
    b = n(323038),
    y = n(960870),
    v = n(139793),
    O = n(652853),
    I = n(336383),
    S = n(194811),
    T = n(373826),
    N = n(340266),
    A = n(788858),
    C = n(849755),
    R = n(384298),
    P = n(670451),
    w = n(228168),
    D = n(388032),
    L = n(227832);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: x, onClose: k } = e,
        { profileType: U } = (0, O.z)(),
        G = { [L.fullSize]: U === w.y0.FULL_SIZE },
        { analyticsLocations: B } = (0, d.ZP)(u.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        F = (0, y.Z)({
            display: 'voice',
            activity: { type: 'VOICE' },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: B
        }),
        V = (0, v.Z)({
            userId: t.id,
            onAction: F
        }),
        Z = (0, s.e7)([g.Z], () => g.Z.getGuild(i.guild_id)),
        H = (0, b.Z)(i),
        W = (0, f.ZP)(i),
        { channelStatusEnabled: Y } = (0, E.D)({ location: 'UserProfileVoiceActivityCard' }),
        K = (0, s.e7)([m.default], () => m.default.locale),
        z = 'en-US' === K || 'en-GB' === K,
        q = () => (i.isDM() || i.isGroupDM() ? D.NW.string(D.t['9FaEzs']) : i.isGuildStageVoice() ? D.NW.string(D.t.QygGCA) : D.NW.string(D.t.msxteH)),
        Q = () => {
            if (t.id !== n.id || !z) return null;
            let e = i.isDM() || i.isGroupDM() ? D.NW.string(D.t['+DsWbW']) : D.NW.string(D.t.xOVEjY);
            return (0, r.jsx)(l.ua7, {
                text: e,
                children: (e) => (0, r.jsx)(l.d3s, j(M({}, e), { size: 'xxs' }))
            });
        },
        X = () => {
            let e = (e) => {
                    e.stopPropagation(), null == F || F({ action: 'OPEN_VOICE_CHANNEL' }), i.isGuildStageVoice() ? (0, h.Cq)(i) : (c.default.selectVoiceChannel(i.id), (0, _.Kh)(i.id)), null == k || k();
                },
                t = (e) => {
                    e.stopPropagation(), F({ action: 'OPEN_VOICE_GUILD' }), (0, p.X)(i.guild_id), null == k || k();
                };
            return (0, r.jsxs)('div', {
                className: L.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(a.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: L.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(A.Z, {
                                        channel: i,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: L.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: o()(L.clickableText, L.inline),
                                        onClick: e,
                                        children: W
                                    })
                                ]
                            }),
                            null != Z &&
                                (0, r.jsx)(T.Z, {
                                    variant: 'text-xs/normal',
                                    text: D.NW.formatToPlainString(D.t['hq/Qzc'], { guildName: Z.name }),
                                    onClick: t
                                })
                        ]
                    }),
                    Y &&
                        i.isGuildVoice() &&
                        (0, r.jsx)(C.Z, {
                            voiceChannel: i,
                            onAction: F,
                            onClose: k
                        })
                ]
            });
        },
        J = () =>
            (0, r.jsx)('div', {
                className: o()(L.actions, G),
                children: (0, r.jsx)(R.Z, {
                    channel: i,
                    onAction: F,
                    onClose: k
                })
            });
    return (0, r.jsx)(d.Gt, {
        value: B,
        children: (0, r.jsxs)(I.Z, {
            ref: V,
            className: o()(L.card, x),
            onAction: F,
            onClose: k,
            children: [
                (0, r.jsx)(S.Z, {
                    text: q(),
                    tags: Q(),
                    contextMenu: (0, r.jsx)(P.Z, {
                        display: 'voice',
                        user: t,
                        onClose: k
                    })
                }),
                (0, r.jsx)('div', {
                    className: L.body,
                    children: (0, r.jsxs)('div', {
                        className: o()(L.content, G),
                        children: [
                            (0, r.jsx)(N.Z, {
                                users: H,
                                channel: i
                            }),
                            X(),
                            U === w.y0.FULL_SIZE && J()
                        ]
                    })
                }),
                U !== w.y0.FULL_SIZE && J()
            ]
        })
    });
}
