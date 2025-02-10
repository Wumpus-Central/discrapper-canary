n.d(t, {
    Ix: () => L,
    OV: () => z,
    V_: () => F,
    Ym: () => U,
    ZP: () => Y,
    ac: () => V,
    bn: () => D,
    nR: () => M
}),
    n(47120);
var l,
    i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(115911),
    u = n(442837),
    c = n(481060),
    d = n(2052),
    m = n(317381),
    f = n(638880),
    h = n(413458),
    p = n(16609),
    v = n(527805),
    g = n(716600),
    E = n(778569),
    x = n(563218),
    Z = n(318891),
    S = n(884338),
    C = n(719296),
    b = n(958185),
    I = n(100527),
    _ = n(906732),
    R = n(890280),
    y = n(835473),
    j = n(522474),
    N = n(314897),
    w = n(819640),
    A = n(594174),
    T = n(823379),
    k = n(5192),
    O = n(388032),
    P = n(334227),
    M = (((l = {})[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE'), l);
let D = 1024,
    L = ['embedded_background'];
function F(e) {
    return e > 400 ? 2 : e > 300 ? 1 : 0;
}
function U(e) {
    return e > 400 ? [c.EFr.SIZE_56, 56] : e > 300 ? [c.EFr.SIZE_32, 32] : [c.EFr.SIZE_24, 24];
}
function z(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: r } = e,
        a = null != t ? t : c.EFr.SIZE_32,
        s = (0, c.pxk)(a);
    return (0, i.jsx)(S.Z, {
        size: s,
        guildId: n,
        users: r,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = k.ZP.getName(n, l, e);
            return (0, i.jsx)(
                c.DY3,
                {
                    text: t,
                    color: c.FGA.GREY,
                    children: (0, i.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, s),
                            alt: t,
                            className: P.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function V(e) {
    switch (e) {
        case 2:
            return c.zxk.Sizes.LARGE;
        case 1:
            return c.zxk.Sizes.MEDIUM;
        case 0:
            return c.zxk.Sizes.SMALL;
    }
}
function W(e) {
    var t, n;
    let { participants: l, application: a, channel: p, width: g } = e,
        E = F(g),
        [x] = U(g),
        Z = (0, u.Wu)([A.default, N.default], () =>
            Array.from(l)
                .map((e) => ((0, h.J)(e, N.default) ? null : A.default.getUser(e.userId)))
                .filter(T.lm)
        ),
        S = (0, u.e7)([m.ZP], () => {
            var e;
            return null !== (e = m.ZP.getEmbeddedActivitiesForChannel(p.id).find((e) => e.applicationId === a.id)) && void 0 !== e ? e : m.ZP.getEmbeddedActivitiesForStartingChannel(p.id).find((e) => e.applicationId === a.id);
        }),
        { analyticsLocations: C } = (0, _.ZP)(),
        b = (0, d.O)(),
        I = k.ZP.getName(p.getGuildId(), p.id, null == Z ? void 0 : Z[0]),
        y =
            (0, v.s5)({
                userId: null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: p.id,
                application: a
            }) === v.Fw.CAN_JOIN,
        j = null !== (n = p.getGuildId()) && void 0 !== n ? n : void 0,
        w = r.useId(),
        M = a.id,
        D = r.useMemo(
            () => ({
                channel: p,
                type: 'channel'
            }),
            [p]
        ),
        { submitting: L } = (0, R.Z)({
            applicationId: M,
            context: D,
            launchingComponentId: w
        });
    return (0, i.jsxs)('div', {
        className: P.splash,
        children: [
            (0, i.jsx)(z, {
                avatarSize: x,
                guildId: j,
                channelId: p.id,
                users: Z
            }),
            (0, i.jsx)(c.Text, {
                className: s()(P.subheader, {
                    [P.small]: 0 === E,
                    [P.medium]: 1 === E
                }),
                variant: 'text-sm/normal',
                children:
                    Z.length > 1
                        ? O.intl.formatToPlainString(O.t.cpe6CA, {
                              username: I,
                              count: Z.length - 1
                          })
                        : O.intl.formatToPlainString(O.t['7Uuia2'], { username: I })
            }),
            (0, i.jsx)(c.Text, {
                className: s()(P.header, {
                    [P.small]: 0 === E,
                    [P.medium]: 1 === E
                }),
                variant: 'text-sm/normal',
                children: a.name
            }),
            (0, i.jsx)('div', {
                className: P.buttons,
                children: y
                    ? (0, i.jsx)(c.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != S &&
                                      (0, f.Z)({
                                          applicationId: S.applicationId,
                                          activityChannelId: p.id,
                                          locationObject: b.location,
                                          analyticsLocations: C,
                                          componentId: w,
                                          isContextlessActivity: S.location.kind === o.X.CONTEXTLESS,
                                          joinSecret: S.compositeInstanceId
                                      });
                          },
                          submitting: L,
                          size: V(E),
                          className: P.button,
                          look: c.iLD.FILLED,
                          color: c.zxk.Colors.WHITE,
                          children: O.intl.string(O.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function Y(e) {
    let { participant: t, width: n, selected: l, interactible: a, channel: s } = e,
        { analyticsLocations: o } = (0, _.ZP)(I.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, g.Z)(),
        m = null != d && (0, p.pY)(d.location) === s.id && d.applicationId === c,
        [f] = (0, y.Z)([c]),
        { url: h } = (0, E.Z)({
            applicationId: c,
            names: L,
            size: D
        }),
        v = !l && m,
        S = !m,
        R = !m && !l,
        N = (0, u.e7)([w.Z, j.Z], () =>
            (0, b.Z)({
                LayerStore: w.Z,
                PopoutWindowStore: j.Z
            })
        );
    return (
        r.useEffect(() => {
            if (v && null != d && !N) {
                let e = (0, C.Z)(d.location.id, d.applicationId);
                (0, Z.jy)(e);
            }
        }, [v, d, N]),
        (0, i.jsx)(_.Gt, {
            value: o,
            children: (0, i.jsx)('div', {
                className: P.container,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        v &&
                            null != d &&
                            (0, i.jsx)(x.Z, {
                                className: P.iframe,
                                embedId: (0, C.Z)(d.location.id, c)
                            }),
                        S && null != f && null != h && '' !== h
                            ? (0, i.jsx)('img', {
                                  className: P.splashImage,
                                  alt: f.name,
                                  src: h
                              })
                            : null,
                        R &&
                            null != f &&
                            (0, i.jsx)(W, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        a || S ? null : (0, i.jsx)('div', { className: P.clickShield })
                    ]
                })
            })
        })
    );
}
