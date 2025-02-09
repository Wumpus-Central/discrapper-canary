n.d(t, {
    Ix: () => D,
    OV: () => U,
    V_: () => L,
    Ym: () => F,
    ZP: () => W,
    ac: () => z,
    bn: () => M,
    nR: () => P
}),
    n(47120);
var l,
    i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    u = n(481060),
    c = n(2052),
    d = n(317381),
    m = n(638880),
    f = n(413458),
    h = n(16609),
    p = n(527805),
    v = n(716600),
    g = n(778569),
    E = n(563218),
    x = n(318891),
    Z = n(884338),
    S = n(719296),
    C = n(958185),
    b = n(100527),
    I = n(906732),
    _ = n(890280),
    R = n(835473),
    y = n(522474),
    j = n(314897),
    N = n(819640),
    w = n(594174),
    A = n(823379),
    T = n(5192),
    k = n(388032),
    O = n(334227),
    P = (((l = {})[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE'), l);
let M = 1024,
    D = ['embedded_background'];
function L(e) {
    return e > 400 ? 2 : e > 300 ? 1 : 0;
}
function F(e) {
    return e > 400 ? [u.EFr.SIZE_56, 56] : e > 300 ? [u.EFr.SIZE_32, 32] : [u.EFr.SIZE_24, 24];
}
function U(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: r } = e,
        a = null != t ? t : u.EFr.SIZE_32,
        s = (0, u.pxk)(a);
    return (0, i.jsx)(Z.Z, {
        size: s,
        guildId: n,
        users: r,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = T.ZP.getName(n, l, e);
            return (0, i.jsx)(
                u.DY3,
                {
                    text: t,
                    color: u.FGA.GREY,
                    children: (0, i.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, s),
                            alt: t,
                            className: O.avatar
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
            return u.zxk.Sizes.LARGE;
        case 1:
            return u.zxk.Sizes.MEDIUM;
        case 0:
            return u.zxk.Sizes.SMALL;
    }
}
function V(e) {
    var t, n;
    let { participants: l, application: a, channel: h, width: v } = e,
        g = L(v),
        [E] = F(v),
        x = (0, o.Wu)([w.default, j.default], () =>
            Array.from(l)
                .map((e) => ((0, f.J)(e, j.default) ? null : w.default.getUser(e.userId)))
                .filter(A.lm)
        ),
        Z = (0, o.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForChannel(h.id).find((e) => e.applicationId === a.id)),
        { analyticsLocations: S } = (0, I.ZP)(),
        C = (0, c.O)(),
        b = T.ZP.getName(h.getGuildId(), h.id, null == x ? void 0 : x[0]),
        R =
            (0, p.s5)({
                userId: null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: h.id,
                application: a
            }) === p.Fw.CAN_JOIN,
        y = null !== (n = h.getGuildId()) && void 0 !== n ? n : void 0,
        N = r.useId(),
        P = a.id,
        M = r.useMemo(
            () => ({
                channel: h,
                type: 'channel'
            }),
            [h]
        ),
        { submitting: D } = (0, _.Z)({
            applicationId: P,
            context: M,
            launchingComponentId: N
        });
    return (0, i.jsxs)('div', {
        className: O.splash,
        children: [
            (0, i.jsx)(U, {
                avatarSize: E,
                guildId: y,
                channelId: h.id,
                users: x
            }),
            (0, i.jsx)(u.Text, {
                className: s()(O.subheader, {
                    [O.small]: 0 === g,
                    [O.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children:
                    x.length > 1
                        ? k.intl.formatToPlainString(k.t.cpe6CA, {
                              username: b,
                              count: x.length - 1
                          })
                        : k.intl.formatToPlainString(k.t['7Uuia2'], { username: b })
            }),
            (0, i.jsx)(u.Text, {
                className: s()(O.header, {
                    [O.small]: 0 === g,
                    [O.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children: a.name
            }),
            (0, i.jsx)('div', {
                className: O.buttons,
                children: R
                    ? (0, i.jsx)(u.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != Z &&
                                      (0, m.Z)({
                                          applicationId: Z.applicationId,
                                          activityChannelId: h.id,
                                          locationObject: C.location,
                                          analyticsLocations: S,
                                          componentId: N
                                      });
                          },
                          submitting: D,
                          size: z(g),
                          className: O.button,
                          look: u.iLD.FILLED,
                          color: u.zxk.Colors.WHITE,
                          children: k.intl.string(k.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function W(e) {
    let { participant: t, width: n, selected: l, interactible: a, channel: s } = e,
        { analyticsLocations: u } = (0, I.ZP)(b.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, v.Z)(),
        m = null != d && (0, h.p)(d.location) === s.id && d.applicationId === c,
        [f] = (0, R.Z)([c]),
        { url: p } = (0, g.Z)({
            applicationId: c,
            names: D,
            size: M
        }),
        Z = !l && m,
        _ = !m,
        j = !m && !l,
        w = (0, o.e7)([N.Z, y.Z], () =>
            (0, C.Z)({
                LayerStore: N.Z,
                PopoutWindowStore: y.Z
            })
        );
    return (
        r.useEffect(() => {
            if (Z && null != d && !w) {
                let e = (0, S.Z)(d.location.id, d.applicationId);
                (0, x.jy)(e);
            }
        }, [Z, d, w]),
        (0, i.jsx)(I.Gt, {
            value: u,
            children: (0, i.jsx)('div', {
                className: O.container,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        Z &&
                            null != d &&
                            (0, i.jsx)(E.Z, {
                                className: O.iframe,
                                embedId: (0, S.Z)(d.location.id, c)
                            }),
                        _ && null != f && null != p && '' !== p
                            ? (0, i.jsx)('img', {
                                  className: O.splashImage,
                                  alt: f.name,
                                  src: p
                              })
                            : null,
                        j &&
                            null != f &&
                            (0, i.jsx)(V, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        a || _ ? null : (0, i.jsx)('div', { className: O.clickShield })
                    ]
                })
            })
        })
    );
}
