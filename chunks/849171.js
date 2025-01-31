n.d(t, {
    Ix: () => M,
    OV: () => F,
    V_: () => D,
    Ym: () => U,
    ZP: () => W,
    ac: () => z,
    bn: () => O,
    nR: () => L
}),
    n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(442837),
    c = n(481060),
    u = n(2052),
    d = n(317381),
    m = n(638880),
    f = n(413458),
    p = n(16609),
    h = n(527805),
    g = n(716600),
    v = n(778569),
    _ = n(563218),
    S = n(318891),
    I = n(884338),
    x = n(719296),
    E = n(958185),
    C = n(100527),
    Z = n(906732),
    y = n(890280),
    b = n(835473),
    N = n(522474),
    T = n(314897),
    A = n(819640),
    w = n(594174),
    P = n(823379),
    j = n(5192),
    R = n(388032),
    k = n(262745),
    L = (((i = {})[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), (i[(i.LARGE = 2)] = 'LARGE'), i);
let O = 1024,
    M = ['embedded_background'];
function D(e) {
    return e > 400 ? 2 : e > 300 ? 1 : 0;
}
function U(e) {
    return e > 400 ? [c.EFr.SIZE_56, 56] : e > 300 ? [c.EFr.SIZE_32, 32] : [c.EFr.SIZE_24, 24];
}
function F(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: a } = e,
        r = null != t ? t : c.EFr.SIZE_32,
        s = (0, c.pxk)(r);
    return (0, l.jsx)(I.Z, {
        size: s,
        guildId: n,
        users: a,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = j.ZP.getName(n, i, e);
            return (0, l.jsx)(
                c.DY3,
                {
                    text: t,
                    color: c.FGA.GREY,
                    children: (0, l.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, s),
                            alt: t,
                            className: k.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function z(e) {
    switch (e) {
        case 2:
            return c.zxk.Sizes.LARGE;
        case 1:
            return c.zxk.Sizes.MEDIUM;
        case 0:
            return c.zxk.Sizes.SMALL;
    }
}
function V(e) {
    var t, n;
    let { participants: i, application: r, channel: p, width: g } = e,
        v = D(g),
        [_] = U(g),
        S = (0, o.Wu)([w.default, T.default], () =>
            Array.from(i)
                .map((e) => ((0, f.J)(e, T.default) ? null : w.default.getUser(e.userId)))
                .filter(P.lm)
        ),
        I = (0, o.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForChannel(p.id).find((e) => e.applicationId === r.id)),
        { analyticsLocations: x } = (0, Z.ZP)(),
        E = (0, u.O)(),
        C = j.ZP.getName(p.getGuildId(), p.id, null == S ? void 0 : S[0]),
        b =
            (0, h.s5)({
                userId: null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: p.id,
                application: r
            }) === h.Fw.CAN_JOIN,
        N = null !== (n = p.getGuildId()) && void 0 !== n ? n : void 0,
        A = a.useId(),
        L = r.id,
        O = a.useMemo(
            () => ({
                channel: p,
                type: 'channel'
            }),
            [p]
        ),
        { submitting: M } = (0, y.Z)({
            applicationId: L,
            context: O,
            launchingComponentId: A
        });
    return (0, l.jsxs)('div', {
        className: k.splash,
        children: [
            (0, l.jsx)(F, {
                avatarSize: _,
                guildId: N,
                channelId: p.id,
                users: S
            }),
            (0, l.jsx)(c.Text, {
                className: s()(k.subheader, {
                    [k.small]: 0 === v,
                    [k.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children:
                    S.length > 1
                        ? R.intl.formatToPlainString(R.t.cpe6CA, {
                              username: C,
                              count: S.length - 1
                          })
                        : R.intl.formatToPlainString(R.t['7Uuia2'], { username: C })
            }),
            (0, l.jsx)(c.Text, {
                className: s()(k.header, {
                    [k.small]: 0 === v,
                    [k.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children: r.name
            }),
            (0, l.jsx)('div', {
                className: k.buttons,
                children: b
                    ? (0, l.jsx)(c.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != I &&
                                      (0, m.Z)({
                                          applicationId: I.applicationId,
                                          activityChannelId: p.id,
                                          locationObject: E.location,
                                          analyticsLocations: x,
                                          componentId: A
                                      });
                          },
                          submitting: M,
                          size: z(v),
                          className: k.button,
                          look: c.iLD.FILLED,
                          color: c.zxk.Colors.WHITE,
                          children: R.intl.string(R.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function W(e) {
    let { participant: t, width: n, selected: i, interactible: r, channel: s } = e,
        { analyticsLocations: c } = (0, Z.ZP)(C.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, g.Z)(),
        m = null != d && (0, p.p)(d.location) === s.id && d.applicationId === u,
        [f] = (0, b.Z)([u]),
        { url: h } = (0, v.Z)({
            applicationId: u,
            names: M,
            size: O
        }),
        I = !i && m,
        y = !m,
        T = !m && !i,
        w = (0, o.e7)([A.Z, N.Z], () =>
            (0, E.Z)({
                LayerStore: A.Z,
                PopoutWindowStore: N.Z
            })
        );
    return (
        a.useEffect(() => {
            if (I && null != d && !w) {
                let e = (0, x.Z)(d.location.id, d.applicationId);
                (0, S.jy)(e);
            }
        }, [I, d, w]),
        (0, l.jsx)(Z.Gt, {
            value: c,
            children: (0, l.jsx)('div', {
                className: k.container,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        I &&
                            null != d &&
                            (0, l.jsx)(_.Z, {
                                className: k.iframe,
                                embedId: (0, x.Z)(d.location.id, u)
                            }),
                        y && null != f && null != h && '' !== h
                            ? (0, l.jsx)('img', {
                                  className: k.splashImage,
                                  alt: f.name,
                                  src: h
                              })
                            : null,
                        T &&
                            null != f &&
                            (0, l.jsx)(V, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        r || y ? null : (0, l.jsx)('div', { className: k.clickShield })
                    ]
                })
            })
        })
    );
}
