n.d(t, {
    Ix: () => D,
    OV: () => U,
    V_: () => L,
    Ym: () => F,
    ZP: () => W,
    ac: () => V,
    bn: () => M,
    nR: () => k
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
    Z = n(318891),
    x = n(884338),
    S = n(719296),
    C = n(958185),
    b = n(100527),
    I = n(906732),
    _ = n(890280),
    N = n(835473),
    R = n(522474),
    y = n(314897),
    T = n(819640),
    j = n(594174),
    w = n(823379),
    A = n(5192),
    O = n(388032),
    P = n(262745),
    k = (((l = {})[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE'), l);
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
    return (0, i.jsx)(x.Z, {
        size: s,
        guildId: n,
        users: r,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = A.ZP.getName(n, l, e);
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
            return u.zxk.Sizes.LARGE;
        case 1:
            return u.zxk.Sizes.MEDIUM;
        case 0:
            return u.zxk.Sizes.SMALL;
    }
}
function z(e) {
    var t, n;
    let { participants: l, application: a, channel: h, width: v } = e,
        g = L(v),
        [E] = F(v),
        Z = (0, o.Wu)([j.default, y.default], () =>
            Array.from(l)
                .map((e) => ((0, f.J)(e, y.default) ? null : j.default.getUser(e.userId)))
                .filter(w.lm)
        ),
        x = (0, o.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForChannel(h.id).find((e) => e.applicationId === a.id)),
        { analyticsLocations: S } = (0, I.ZP)(),
        C = (0, c.O)(),
        b = A.ZP.getName(h.getGuildId(), h.id, null == Z ? void 0 : Z[0]),
        N =
            (0, p.s5)({
                userId: null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: h.id,
                application: a
            }) === p.Fw.CAN_JOIN,
        R = null !== (n = h.getGuildId()) && void 0 !== n ? n : void 0,
        T = r.useId(),
        k = a.id,
        M = r.useMemo(
            () => ({
                channel: h,
                type: 'channel'
            }),
            [h]
        ),
        { submitting: D } = (0, _.Z)({
            applicationId: k,
            context: M,
            launchingComponentId: T
        });
    return (0, i.jsxs)('div', {
        className: P.splash,
        children: [
            (0, i.jsx)(U, {
                avatarSize: E,
                guildId: R,
                channelId: h.id,
                users: Z
            }),
            (0, i.jsx)(u.Text, {
                className: s()(P.subheader, {
                    [P.small]: 0 === g,
                    [P.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children:
                    Z.length > 1
                        ? O.intl.formatToPlainString(O.t.cpe6CA, {
                              username: b,
                              count: Z.length - 1
                          })
                        : O.intl.formatToPlainString(O.t['7Uuia2'], { username: b })
            }),
            (0, i.jsx)(u.Text, {
                className: s()(P.header, {
                    [P.small]: 0 === g,
                    [P.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children: a.name
            }),
            (0, i.jsx)('div', {
                className: P.buttons,
                children: N
                    ? (0, i.jsx)(u.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != x &&
                                      (0, m.Z)({
                                          applicationId: x.applicationId,
                                          activityChannelId: h.id,
                                          locationObject: C.location,
                                          analyticsLocations: S,
                                          componentId: T
                                      });
                          },
                          submitting: D,
                          size: V(g),
                          className: P.button,
                          look: u.iLD.FILLED,
                          color: u.zxk.Colors.WHITE,
                          children: O.intl.string(O.t['4i2vj4'])
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
        [f] = (0, N.Z)([c]),
        { url: p } = (0, g.Z)({
            applicationId: c,
            names: D,
            size: M
        }),
        x = !l && m,
        _ = !m,
        y = !m && !l,
        j = (0, o.e7)([T.Z, R.Z], () =>
            (0, C.Z)({
                LayerStore: T.Z,
                PopoutWindowStore: R.Z
            })
        );
    return (
        r.useEffect(() => {
            if (x && null != d && !j) {
                let e = (0, S.Z)(d.location.id, d.applicationId);
                (0, Z.jy)(e);
            }
        }, [x, d, j]),
        (0, i.jsx)(I.Gt, {
            value: u,
            children: (0, i.jsx)('div', {
                className: P.container,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        x &&
                            null != d &&
                            (0, i.jsx)(E.Z, {
                                className: P.iframe,
                                embedId: (0, S.Z)(d.location.id, c)
                            }),
                        _ && null != f && null != p && '' !== p
                            ? (0, i.jsx)('img', {
                                  className: P.splashImage,
                                  alt: f.name,
                                  src: p
                              })
                            : null,
                        y &&
                            null != f &&
                            (0, i.jsx)(z, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        a || _ ? null : (0, i.jsx)('div', { className: P.clickShield })
                    ]
                })
            })
        })
    );
}
