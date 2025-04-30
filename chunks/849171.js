n.d(t, {
    Ix: () => k,
    OV: () => V,
    V_: () => U,
    Ym: () => F,
    ZP: () => H,
    ac: () => W,
    bn: () => L,
    nR: () => M
}),
    n(388685);
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
    E = n(16609),
    g = n(527805),
    v = n(716600),
    h = n(778569),
    S = n(563218),
    b = n(318891),
    y = n(884338),
    O = n(719296),
    Z = n(958185),
    j = n(100527),
    I = n(906732),
    _ = n(890280),
    P = n(835473),
    w = n(522474),
    x = n(314897),
    A = n(819640),
    R = n(594174),
    N = n(823379),
    C = n(5192),
    T = n(388032),
    D = n(754438),
    M = (((r = {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (r[(r.LARGE = 2)] = 'LARGE'), r);
let L = 1024,
    k = ['embedded_background'];
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
    let { participants: r, application: a, channel: E, width: v } = e,
        h = U(v),
        [S] = F(v),
        b = (0, u.Wu)([R.default, x.default], () =>
            Array.from(r)
                .map((e) => ((0, p.J)(e, x.default) ? null : R.default.getUser(e.userId)))
                .filter(N.lm)
        ),
        y = (0, u.e7)([f.ZP], () => {
            var e;
            return null != (e = f.ZP.getEmbeddedActivitiesForChannel(E.id).find((e) => e.applicationId === a.id)) ? e : f.ZP.getEmbeddedActivitiesForStartingChannel(E.id).find((e) => e.applicationId === a.id);
        }),
        { analyticsLocations: O } = (0, I.ZP)(),
        Z = (0, d.O)(),
        j = C.ZP.getName(E.getGuildId(), E.id, null == b ? void 0 : b[0]),
        P =
            (0, g.s5)({
                userId: null == (t = R.default.getCurrentUser()) ? void 0 : t.id,
                channelId: E.id,
                application: a
            }) === g.Fw.CAN_JOIN,
        w = null != (n = E.getGuildId()) ? n : void 0,
        A = i.useId(),
        M = a.id,
        L = i.useMemo(
            () => ({
                channel: E,
                type: 'channel'
            }),
            [E]
        ),
        { submitting: k } = (0, _.Z)({
            applicationId: M,
            context: L,
            launchingComponentId: A
        });
    return (0, l.jsxs)('div', {
        className: D.splash,
        children: [
            (0, l.jsx)(V, {
                avatarSize: S,
                guildId: w,
                channelId: E.id,
                users: b
            }),
            (0, l.jsx)(c.Text, {
                className: o()(D.subheader, {
                    [D.small]: 0 === h,
                    [D.medium]: 1 === h
                }),
                variant: 'text-sm/normal',
                children:
                    b.length > 1
                        ? T.intl.formatToPlainString(T.t.cpe6CA, {
                              username: j,
                              count: b.length - 1
                          })
                        : T.intl.formatToPlainString(T.t['7Uuia2'], { username: j })
            }),
            (0, l.jsx)(c.Text, {
                className: o()(D.header, {
                    [D.small]: 0 === h,
                    [D.medium]: 1 === h
                }),
                variant: 'text-sm/normal',
                children: a.name
            }),
            (0, l.jsx)('div', {
                className: D.buttons,
                children: P
                    ? (0, l.jsx)(c.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != y &&
                                      (0, m.Z)({
                                          applicationId: y.applicationId,
                                          activityChannelId: E.id,
                                          locationObject: Z.location,
                                          analyticsLocations: O,
                                          componentId: A,
                                          instanceId: y.compositeInstanceId,
                                          isContextlessActivity: y.location.kind === s.E.CONTEXTLESS
                                      });
                          },
                          submitting: k,
                          size: W(h),
                          className: D.button,
                          look: c.iLD.FILLED,
                          color: c.zxk.Colors.WHITE,
                          children: T.intl.string(T.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function H(e) {
    let { participant: t, width: n, selected: r, interactible: a, channel: o } = e,
        { analyticsLocations: s } = (0, I.ZP)(j.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, v.Z)(),
        f = null != d && (0, E.pY)(d.location) === o.id && d.applicationId === c,
        [m] = (0, P.Z)([c]),
        { url: p } = (0, h.Z)({
            applicationId: c,
            names: k,
            size: L
        }),
        g = !r && f,
        y = !f,
        _ = !f && !r,
        x = (0, u.e7)([A.Z, w.Z], () =>
            (0, Z.Z)({
                LayerStore: A.Z,
                PopoutWindowStore: w.Z
            })
        );
    return (
        i.useEffect(() => {
            if (g && null != d && !x) {
                let e = (0, O.Z)(d.location.id, d.applicationId);
                (0, b.jy)(e);
            }
        }, [g, d, x]),
        (0, l.jsx)(I.Gt, {
            value: s,
            children: (0, l.jsxs)('div', {
                className: D.container,
                children: [
                    g &&
                        null != d &&
                        (0, l.jsx)(S.Z, {
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
                    _ &&
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
