n.d(t, {
    Ix: () => L,
    OV: () => U,
    V_: () => W,
    Ym: () => F,
    ZP: () => H,
    ac: () => z,
    bn: () => M,
    nR: () => D
}),
    n(47120);
var r,
    l = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(115911),
    c = n(442837),
    u = n(481060),
    d = n(2052),
    f = n(317381),
    m = n(638880),
    p = n(413458),
    h = n(16609),
    v = n(527805),
    b = n(716600),
    g = n(778569),
    y = n(563218),
    E = n(318891),
    O = n(884338),
    S = n(719296),
    j = n(958185),
    x = n(100527),
    Z = n(906732),
    w = n(890280),
    C = n(835473),
    P = n(522474),
    N = n(314897),
    I = n(819640),
    R = n(594174),
    _ = n(823379),
    k = n(5192),
    A = n(388032),
    T = n(890479),
    D = (((r = {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (r[(r.LARGE = 2)] = 'LARGE'), r);
let M = 1024,
    L = ['embedded_background'];
function W(e) {
    return e > 400 ? 2 : +(e > 300);
}
function F(e) {
    return e > 400 ? [u.EFr.SIZE_56, 56] : e > 300 ? [u.EFr.SIZE_32, 32] : [u.EFr.SIZE_24, 24];
}
function U(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: i } = e,
        a = null != t ? t : u.EFr.SIZE_32,
        o = (0, u.pxk)(a);
    return (0, l.jsx)(O.Z, {
        size: o,
        guildId: n,
        users: i,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = k.ZP.getName(n, r, e);
            return (0, l.jsx)(
                u.DY3,
                {
                    text: t,
                    color: u.FGA.GREY,
                    children: (0, l.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, o),
                            alt: t,
                            className: T.avatar
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
    let { participants: r, application: a, channel: h, width: b } = e,
        g = W(b),
        [y] = F(b),
        E = (0, c.Wu)([R.default, N.default], () =>
            Array.from(r)
                .map((e) => ((0, p.J)(e, N.default) ? null : R.default.getUser(e.userId)))
                .filter(_.lm)
        ),
        O = (0, c.e7)([f.ZP], () => {
            var e;
            return null !== (e = f.ZP.getEmbeddedActivitiesForChannel(h.id).find((e) => e.applicationId === a.id)) && void 0 !== e ? e : f.ZP.getEmbeddedActivitiesForStartingChannel(h.id).find((e) => e.applicationId === a.id);
        }),
        { analyticsLocations: S } = (0, Z.ZP)(),
        j = (0, d.O)(),
        x = k.ZP.getName(h.getGuildId(), h.id, null == E ? void 0 : E[0]),
        C =
            (0, v.s5)({
                userId: null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: h.id,
                application: a
            }) === v.Fw.CAN_JOIN,
        P = null !== (n = h.getGuildId()) && void 0 !== n ? n : void 0,
        I = i.useId(),
        D = a.id,
        M = i.useMemo(
            () => ({
                channel: h,
                type: 'channel'
            }),
            [h]
        ),
        { submitting: L } = (0, w.Z)({
            applicationId: D,
            context: M,
            launchingComponentId: I
        });
    return (0, l.jsxs)('div', {
        className: T.splash,
        children: [
            (0, l.jsx)(U, {
                avatarSize: y,
                guildId: P,
                channelId: h.id,
                users: E
            }),
            (0, l.jsx)(u.Text, {
                className: o()(T.subheader, {
                    [T.small]: 0 === g,
                    [T.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children:
                    E.length > 1
                        ? A.NW.formatToPlainString(A.t.cpe6CA, {
                              username: x,
                              count: E.length - 1
                          })
                        : A.NW.formatToPlainString(A.t['7Uuia2'], { username: x })
            }),
            (0, l.jsx)(u.Text, {
                className: o()(T.header, {
                    [T.small]: 0 === g,
                    [T.medium]: 1 === g
                }),
                variant: 'text-sm/normal',
                children: a.name
            }),
            (0, l.jsx)('div', {
                className: T.buttons,
                children: C
                    ? (0, l.jsx)(u.zxk, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null == O)) return;
                              let t = O.location.kind === s.X.CONTEXTLESS;
                              (0, m.Z)({
                                  applicationId: O.applicationId,
                                  activityChannelId: h.id,
                                  locationObject: j.location,
                                  analyticsLocations: S,
                                  componentId: I,
                                  isContextlessActivity: t,
                                  joinSecret: t ? O.compositeInstanceId : void 0
                              });
                          },
                          submitting: L,
                          size: z(g),
                          className: T.button,
                          look: u.iLD.FILLED,
                          color: u.zxk.Colors.WHITE,
                          children: A.NW.string(A.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function H(e) {
    let { participant: t, width: n, selected: r, interactible: a, channel: o } = e,
        { analyticsLocations: s } = (0, Z.ZP)(x.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, b.Z)(),
        f = null != d && (0, h.pY)(d.location) === o.id && d.applicationId === u,
        [m] = (0, C.Z)([u]),
        { url: p } = (0, g.Z)({
            applicationId: u,
            names: L,
            size: M
        }),
        v = !r && f,
        O = !f,
        w = !f && !r,
        N = (0, c.e7)([I.Z, P.Z], () =>
            (0, j.Z)({
                LayerStore: I.Z,
                PopoutWindowStore: P.Z
            })
        );
    return (
        i.useEffect(() => {
            if (v && null != d && !N) {
                let e = (0, S.Z)(d.location.id, d.applicationId);
                (0, E.jy)(e);
            }
        }, [v, d, N]),
        (0, l.jsx)(Z.Gt, {
            value: s,
            children: (0, l.jsxs)('div', {
                className: T.container,
                children: [
                    v &&
                        null != d &&
                        (0, l.jsx)(y.Z, {
                            className: T.iframe,
                            embedId: (0, S.Z)(d.location.id, u)
                        }),
                    O && null != m && null != p && '' !== p
                        ? (0, l.jsx)('img', {
                              className: T.splashImage,
                              alt: m.name,
                              src: p
                          })
                        : null,
                    w &&
                        null != m &&
                        (0, l.jsx)(V, {
                            width: n,
                            channel: o,
                            participants: t.participants,
                            application: m
                        }),
                    a || O ? null : (0, l.jsx)('div', { className: T.clickShield })
                ]
            })
        })
    );
}
