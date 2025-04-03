n.d(t, {
    Ix: () => L,
    OV: () => V,
    V_: () => U,
    Ym: () => F,
    ZP: () => z,
    ac: () => W,
    bn: () => k,
    nR: () => M
}),
    n(47120);
var r,
    l = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(252258),
    u = n(442837),
    c = n(481060),
    d = n(2052),
    f = n(317381),
    m = n(638880),
    p = n(413458),
    g = n(16609),
    E = n(527805),
    h = n(716600),
    v = n(778569),
    b = n(563218),
    S = n(318891),
    y = n(884338),
    O = n(719296),
    Z = n(958185),
    I = n(100527),
    j = n(906732),
    x = n(890280),
    N = n(835473),
    _ = n(522474),
    w = n(314897),
    P = n(819640),
    R = n(594174),
    A = n(823379),
    C = n(5192),
    T = n(388032),
    D = n(754438),
    M = (((r = {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (r[(r.LARGE = 2)] = 'LARGE'), r);
let k = 1024,
    L = ['embedded_background'];
function U(e) {
    return e > 400 ? 2 : +(e > 300);
}
function F(e) {
    return e > 400 ? [c.EFr.SIZE_56, 56] : e > 300 ? [c.EFr.SIZE_32, 32] : [c.EFr.SIZE_24, 24];
}
function V(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: i } = e,
        a = null != t ? t : c.EFr.SIZE_32,
        o = (0, c.pxk)(a);
    return (0, l.jsx)(y.Z, {
        size: o,
        guildId: n,
        users: i,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = C.ZP.getName(n, r, e);
            return (0, l.jsx)(
                c.DY3,
                {
                    text: t,
                    color: c.FGA.GREY,
                    children: (0, l.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, o),
                            alt: t,
                            className: D.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function W(e) {
    switch (e) {
        case 2:
            return c.zxk.Sizes.LARGE;
        case 1:
            return c.zxk.Sizes.MEDIUM;
        case 0:
            return c.zxk.Sizes.SMALL;
    }
}
function Y(e) {
    var t, n;
    let { participants: r, application: a, channel: g, width: h } = e,
        v = U(h),
        [b] = F(h),
        S = (0, u.Wu)([R.default, w.default], () =>
            Array.from(r)
                .map((e) => ((0, p.J)(e, w.default) ? null : R.default.getUser(e.userId)))
                .filter(A.lm)
        ),
        y = (0, u.e7)([f.ZP], () => {
            var e;
            return null != (e = f.ZP.getEmbeddedActivitiesForChannel(g.id).find((e) => e.applicationId === a.id)) ? e : f.ZP.getEmbeddedActivitiesForStartingChannel(g.id).find((e) => e.applicationId === a.id);
        }),
        { analyticsLocations: O } = (0, j.ZP)(),
        Z = (0, d.O)(),
        I = C.ZP.getName(g.getGuildId(), g.id, null == S ? void 0 : S[0]),
        N =
            (0, E.s5)({
                userId: null == (t = R.default.getCurrentUser()) ? void 0 : t.id,
                channelId: g.id,
                application: a
            }) === E.Fw.CAN_JOIN,
        _ = null != (n = g.getGuildId()) ? n : void 0,
        P = i.useId(),
        M = a.id,
        k = i.useMemo(
            () => ({
                channel: g,
                type: 'channel'
            }),
            [g]
        ),
        { submitting: L } = (0, x.Z)({
            applicationId: M,
            context: k,
            launchingComponentId: P
        });
    return (0, l.jsxs)('div', {
        className: D.splash,
        children: [
            (0, l.jsx)(V, {
                avatarSize: b,
                guildId: _,
                channelId: g.id,
                users: S
            }),
            (0, l.jsx)(c.Text, {
                className: o()(D.subheader, {
                    [D.small]: 0 === v,
                    [D.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children:
                    S.length > 1
                        ? T.NW.formatToPlainString(T.t.cpe6CA, {
                              username: I,
                              count: S.length - 1
                          })
                        : T.NW.formatToPlainString(T.t['7Uuia2'], { username: I })
            }),
            (0, l.jsx)(c.Text, {
                className: o()(D.header, {
                    [D.small]: 0 === v,
                    [D.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children: a.name
            }),
            (0, l.jsx)('div', {
                className: D.buttons,
                children: N
                    ? (0, l.jsx)(c.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != y &&
                                      (0, m.Z)({
                                          applicationId: y.applicationId,
                                          activityChannelId: g.id,
                                          locationObject: Z.location,
                                          analyticsLocations: O,
                                          componentId: P,
                                          instanceId: y.compositeInstanceId,
                                          isContextlessActivity: y.location.kind === s.E.CONTEXTLESS
                                      });
                          },
                          submitting: L,
                          size: W(v),
                          className: D.button,
                          look: c.iLD.FILLED,
                          color: c.zxk.Colors.WHITE,
                          children: T.NW.string(T.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function z(e) {
    let { participant: t, width: n, selected: r, interactible: a, channel: o } = e,
        { analyticsLocations: s } = (0, j.ZP)(I.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, h.Z)(),
        f = null != d && (0, g.pY)(d.location) === o.id && d.applicationId === c,
        [m] = (0, N.Z)([c]),
        { url: p } = (0, v.Z)({
            applicationId: c,
            names: L,
            size: k
        }),
        E = !r && f,
        y = !f,
        x = !f && !r,
        w = (0, u.e7)([P.Z, _.Z], () =>
            (0, Z.Z)({
                LayerStore: P.Z,
                PopoutWindowStore: _.Z
            })
        );
    return (
        i.useEffect(() => {
            if (E && null != d && !w) {
                let e = (0, O.Z)(d.location.id, d.applicationId);
                (0, S.jy)(e);
            }
        }, [E, d, w]),
        (0, l.jsx)(j.Gt, {
            value: s,
            children: (0, l.jsxs)('div', {
                className: D.container,
                children: [
                    E &&
                        null != d &&
                        (0, l.jsx)(b.Z, {
                            className: D.iframe,
                            embedId: (0, O.Z)(d.location.id, c)
                        }),
                    y && null != m && null != p && '' !== p
                        ? (0, l.jsx)('img', {
                              className: D.splashImage,
                              alt: m.name,
                              src: p
                          })
                        : null,
                    x &&
                        null != m &&
                        (0, l.jsx)(Y, {
                            width: n,
                            channel: o,
                            participants: t.participants,
                            application: m
                        }),
                    a || y ? null : (0, l.jsx)('div', { className: D.clickShield })
                ]
            })
        })
    );
}
