(n.d(t, {
    OV: () => B,
    ZP: () => V
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(2052),
    d = n(317381),
    f = n(638880),
    _ = n(413458),
    p = n(16609),
    h = n(527805),
    m = n(716600),
    g = n(778569),
    E = n(563218),
    b = n(318891),
    y = n(884338),
    O = n(719296),
    v = n(958185),
    I = n(100527),
    T = n(906732),
    S = n(890280),
    A = n(835473),
    N = n(522474),
    C = n(314897),
    R = n(819640),
    P = n(594174),
    w = n(823379),
    D = n(5192),
    L = n(388032),
    x = n(754438);
let M = 1024,
    k = ['embedded_background'];
function j(e) {
    return e > 400 ? 2 : +(e > 300);
}
let U = 4;
function G(e) {
    return e > 400 ? [c.EFr.SIZE_56, 56] : e > 300 ? [c.EFr.SIZE_32, 32] : [c.EFr.SIZE_24, 24];
}
function B(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: o } = e,
        a = null != t ? t : c.EFr.SIZE_32,
        s = (0, c.pxk)(a),
        l = (e) => {
            if (null == e || e === y.ag) return null;
            let t = D.ZP.getName(n, i, e);
            return (0, r.jsx)(
                c.DY3,
                {
                    text: t,
                    color: c.FGA.GREY,
                    children: (0, r.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, s),
                            alt: t,
                            className: x.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        };
    return (0, r.jsx)(y.ZP, {
        size: s,
        guildId: n,
        users: o,
        max: U,
        renderUser: l
    });
}
function Z(e) {
    switch (e) {
        case 2:
            return l.zx.Sizes.LARGE;
        case 1:
            return l.zx.Sizes.MEDIUM;
        case 0:
            return l.zx.Sizes.SMALL;
    }
}
function F(e) {
    var t, n;
    let { participants: o, application: p, channel: m, width: g } = e,
        E = j(g),
        [b] = G(g),
        y = (0, s.Wu)([P.default, C.default], () =>
            Array.from(o)
                .map((e) => ((0, _.J)(e, C.default) ? null : P.default.getUser(e.userId)))
                .filter(w.lm)
        ),
        O = (0, s.e7)([d.ZP], () => {
            var e;
            return null != (e = d.ZP.getEmbeddedActivitiesForChannel(m.id).find((e) => e.applicationId === p.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(m.id).find((e) => e.applicationId === p.id);
        }),
        { analyticsLocations: v } = (0, T.ZP)(),
        I = (0, u.O)(),
        A = D.ZP.getName(m.getGuildId(), m.id, null == y ? void 0 : y[0]),
        N =
            (0, h.s5)({
                userId: null == (t = P.default.getCurrentUser()) ? void 0 : t.id,
                channelId: m.id,
                application: p
            }) === h.Fw.CAN_JOIN,
        R = null != (n = m.getGuildId()) ? n : void 0,
        M = i.useId(),
        k = p.id,
        U = i.useMemo(
            () => ({
                channel: m,
                type: 'channel'
            }),
            [m]
        ),
        { submitting: F } = (0, S.Z)({
            applicationId: k,
            context: U,
            launchingComponentId: M
        });
    function V(e) {
        (e.stopPropagation(),
            null != O &&
                (0, f.Z)({
                    applicationId: O.applicationId,
                    activityChannelId: m.id,
                    locationObject: I.location,
                    analyticsLocations: v,
                    componentId: M
                }));
    }
    return (0, r.jsxs)('div', {
        className: x.splash,
        children: [
            (0, r.jsx)(B, {
                avatarSize: b,
                guildId: R,
                channelId: m.id,
                users: y
            }),
            (0, r.jsx)(c.Text, {
                className: a()(x.subheader, {
                    [x.small]: 0 === E,
                    [x.medium]: 1 === E
                }),
                variant: 'text-sm/normal',
                children:
                    y.length > 1
                        ? L.intl.formatToPlainString(L.t.cpe6CA, {
                              username: A,
                              count: y.length - 1
                          })
                        : L.intl.formatToPlainString(L.t['7Uuia2'], { username: A })
            }),
            (0, r.jsx)(c.Text, {
                className: a()(x.header, {
                    [x.small]: 0 === E,
                    [x.medium]: 1 === E
                }),
                variant: 'text-sm/normal',
                children: p.name
            }),
            (0, r.jsx)('div', {
                className: x.buttons,
                children: N
                    ? (0, r.jsx)(l.zx, {
                          onClick: V,
                          submitting: F,
                          size: Z(E),
                          className: x.button,
                          look: l.iL.FILLED,
                          color: l.zx.Colors.WHITE,
                          children: L.intl.string(L.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function V(e) {
    let { participant: t, width: n, selected: o, interactible: a, channel: l } = e,
        { analyticsLocations: c } = (0, T.ZP)(I.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, m.Z)(),
        f = null != d && (0, p.p)(d.location) === l.id && d.applicationId === u,
        [_] = (0, A.Z)([u]),
        { url: h } = (0, g.Z)({
            applicationId: u,
            names: k,
            size: M
        }),
        y = !o && f,
        S = !f,
        C = !f && !o,
        P = (0, s.e7)([R.Z, N.Z], () =>
            (0, v.Z)({
                LayerStore: R.Z,
                PopoutWindowStore: N.Z
            })
        );
    return (
        i.useEffect(() => {
            if (y && null != d && !P) {
                let e = (0, O.Z)(d.location.id, d.applicationId);
                (0, b.jy)(e);
            }
        }, [y, d, P]),
        (0, r.jsx)(T.Gt, {
            value: c,
            children: (0, r.jsxs)('div', {
                className: x.container,
                children: [
                    y &&
                        null != d &&
                        (0, r.jsx)(E.Z, {
                            className: x.iframe,
                            embedId: (0, O.Z)(d.location.id, u)
                        }),
                    S && null != _ && null != h && '' !== h
                        ? (0, r.jsx)('img', {
                              className: x.splashImage,
                              alt: _.name,
                              src: h
                          })
                        : null,
                    C &&
                        null != _ &&
                        (0, r.jsx)(F, {
                            width: n,
                            channel: l,
                            participants: t.participants,
                            application: _
                        }),
                    a || S ? null : (0, r.jsx)('div', { className: x.clickShield })
                ]
            })
        })
    );
}
