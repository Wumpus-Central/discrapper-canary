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
    h = n(716600),
    v = n(778569),
    S = n(563218),
    b = n(318891),
    y = n(884338),
    O = n(719296),
    I = n(958185),
    Z = n(100527),
    _ = n(906732),
    j = n(890280),
    x = n(835473),
    P = n(522474),
    w = n(314897),
    R = n(819640),
    A = n(594174),
    C = n(823379),
    N = n(5192),
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
            let t = N.ZP.getName(n, r, e);
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
    let { participants: r, application: a, channel: E, width: h } = e,
        v = U(h),
        [S] = F(h),
        b = (0, u.Wu)([A.default, w.default], () =>
            Array.from(r)
                .map((e) => ((0, p.J)(e, w.default) ? null : A.default.getUser(e.userId)))
                .filter(C.lm)
        ),
        y = (0, u.e7)([f.ZP], () => {
            var e;
            return null != (e = f.ZP.getEmbeddedActivitiesForChannel(E.id).find((e) => e.applicationId === a.id)) ? e : f.ZP.getEmbeddedActivitiesForStartingChannel(E.id).find((e) => e.applicationId === a.id);
        }),
        { analyticsLocations: O } = (0, _.ZP)(),
        I = (0, d.O)(),
        Z = N.ZP.getName(E.getGuildId(), E.id, null == b ? void 0 : b[0]),
        x =
            (0, g.s5)({
                userId: null == (t = A.default.getCurrentUser()) ? void 0 : t.id,
                channelId: E.id,
                application: a
            }) === g.Fw.CAN_JOIN,
        P = null != (n = E.getGuildId()) ? n : void 0,
        R = i.useId(),
        M = a.id,
        L = i.useMemo(
            () => ({
                channel: E,
                type: 'channel'
            }),
            [E]
        ),
        { submitting: k } = (0, j.Z)({
            applicationId: M,
            context: L,
            launchingComponentId: R
        });
    return (0, l.jsxs)('div', {
        className: D.splash,
        children: [
            (0, l.jsx)(V, {
                avatarSize: S,
                guildId: P,
                channelId: E.id,
                users: b
            }),
            (0, l.jsx)(c.Text, {
                className: o()(D.subheader, {
                    [D.small]: 0 === v,
                    [D.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children:
                    b.length > 1
                        ? T.intl.formatToPlainString(T.t.cpe6CA, {
                              username: Z,
                              count: b.length - 1
                          })
                        : T.intl.formatToPlainString(T.t['7Uuia2'], { username: Z })
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
                children: x
                    ? (0, l.jsx)(c.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != y &&
                                      (0, m.Z)({
                                          applicationId: y.applicationId,
                                          activityChannelId: E.id,
                                          locationObject: I.location,
                                          analyticsLocations: O,
                                          componentId: R,
                                          instanceId: y.compositeInstanceId,
                                          isContextlessActivity: y.location.kind === s.E.CONTEXTLESS
                                      });
                          },
                          submitting: k,
                          size: W(v),
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
        { analyticsLocations: s } = (0, _.ZP)(Z.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, h.Z)(),
        f = null != d && (0, E.pY)(d.location) === o.id && d.applicationId === c,
        [m] = (0, x.Z)([c]),
        { url: p } = (0, v.Z)({
            applicationId: c,
            names: k,
            size: L
        }),
        g = !r && f,
        y = !f,
        j = !f && !r,
        w = (0, u.e7)([R.Z, P.Z], () =>
            (0, I.Z)({
                LayerStore: R.Z,
                PopoutWindowStore: P.Z
            })
        );
    return (
        i.useEffect(() => {
            if (g && null != d && !w) {
                let e = (0, O.Z)(d.location.id, d.applicationId);
                (0, b.jy)(e);
            }
        }, [g, d, w]),
        (0, l.jsx)(_.Gt, {
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
                    j &&
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
