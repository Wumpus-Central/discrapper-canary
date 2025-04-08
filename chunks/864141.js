n.d(t, { Z: () => j });
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
    m = n(430824),
    g = n(957575),
    E = n(323038),
    b = n(960870),
    y = n(139793),
    v = n(652853),
    O = n(336383),
    I = n(194811),
    S = n(373826),
    T = n(340266),
    N = n(788858),
    A = n(849755),
    C = n(384298),
    R = n(670451),
    P = n(228168),
    w = n(388032),
    D = n(227832);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: L, onClose: M } = e,
        { profileType: j } = (0, v.z)(),
        U = { [D.fullSize]: j === P.y0.FULL_SIZE },
        { analyticsLocations: G } = (0, d.ZP)(u.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        B = (0, b.Z)({
            display: 'voice',
            activity: { type: 'VOICE' },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: G
        }),
        V = (0, y.Z)({
            userId: t.id,
            onAction: B
        }),
        F = (0, s.e7)([m.Z], () => m.Z.getGuild(i.guild_id)),
        Z = (0, E.Z)(i),
        H = (0, f.ZP)(i),
        { channelStatusEnabled: W } = (0, g.D)({ location: 'UserProfileVoiceActivityCard' }),
        Y = () => (i.isDM() || i.isGroupDM() ? w.NW.string(w.t['9FaEzs']) : i.isGuildStageVoice() ? w.NW.string(w.t.QygGCA) : w.NW.string(w.t.msxteH)),
        K = () => {
            if (t.id !== n.id) return null;
            let e = i.isDM() || i.isGroupDM() ? w.NW.string(w.t['+DsWbW']) : w.NW.string(w.t.xOVEjY);
            return (0, r.jsx)(l.ua7, {
                text: e,
                children: (e) => (0, r.jsx)(l.d3s, k(x({}, e), { size: 'xxs' }))
            });
        },
        z = () => {
            let e = (e) => {
                    e.stopPropagation(), null == B || B({ action: 'OPEN_VOICE_CHANNEL' }), i.isGuildStageVoice() ? (0, h.Cq)(i) : (c.default.selectVoiceChannel(i.id), (0, _.Kh)(i.id)), null == M || M();
                },
                t = (e) => {
                    e.stopPropagation(), B({ action: 'OPEN_VOICE_GUILD' }), (0, p.X)(i.guild_id), null == M || M();
                };
            return (0, r.jsxs)('div', {
                className: D.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(a.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: D.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        channel: i,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: D.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: o()(D.clickableText, D.inline),
                                        onClick: e,
                                        children: H
                                    })
                                ]
                            }),
                            null != F &&
                                (0, r.jsx)(S.Z, {
                                    variant: 'text-xs/normal',
                                    text: w.NW.formatToPlainString(w.t['hq/Qzc'], { guildName: F.name }),
                                    onClick: t
                                })
                        ]
                    }),
                    W &&
                        i.isGuildVoice() &&
                        (0, r.jsx)(A.Z, {
                            voiceChannel: i,
                            onAction: B,
                            onClose: M
                        })
                ]
            });
        },
        q = () =>
            (0, r.jsx)('div', {
                className: o()(D.actions, U),
                children: (0, r.jsx)(C.Z, {
                    channel: i,
                    onAction: B,
                    onClose: M
                })
            });
    return (0, r.jsx)(d.Gt, {
        value: G,
        children: (0, r.jsxs)(O.Z, {
            ref: V,
            className: o()(D.card, L),
            onAction: B,
            onClose: M,
            children: [
                (0, r.jsx)(I.Z, {
                    text: Y(),
                    tags: K(),
                    contextMenu: (0, r.jsx)(R.Z, {
                        display: 'voice',
                        user: t,
                        onClose: M
                    })
                }),
                (0, r.jsx)('div', {
                    className: D.body,
                    children: (0, r.jsxs)('div', {
                        className: o()(D.content, U),
                        children: [
                            (0, r.jsx)(T.Z, {
                                users: Z,
                                channel: i
                            }),
                            z(),
                            j === P.y0.FULL_SIZE && q()
                        ]
                    })
                }),
                j !== P.y0.FULL_SIZE && q()
            ]
        })
    });
}
