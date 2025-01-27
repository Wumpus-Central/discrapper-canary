n.d(t, {
    Ix: function () {
        return L;
    },
    OV: function () {
        return V;
    },
    V_: function () {
        return D;
    },
    Ym: function () {
        return U;
    },
    ZP: function () {
        return B;
    },
    ac: function () {
        return F;
    },
    bn: function () {
        return k;
    },
    nR: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(2052),
    m = n(317381),
    f = n(638880),
    p = n(413458),
    h = n(16609),
    g = n(527805),
    v = n(716600),
    S = n(778569),
    I = n(563218),
    x = n(318891),
    _ = n(884338),
    C = n(719296),
    b = n(958185),
    E = n(100527),
    y = n(906732),
    Z = n(890280),
    T = n(835473),
    N = n(522474),
    A = n(314897),
    j = n(819640),
    w = n(594174),
    P = n(823379),
    R = n(5192),
    O = n(388032),
    M = n(262745);
((l = i || (i = {}))[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE');
let k = 1024,
    L = ['embedded_background'];
function D(e) {
    return e > 400 ? 2 : e > 300 ? 1 : 0;
}
function U(e) {
    return e > 400 ? [u.AvatarSizes.SIZE_56, 56] : e > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24];
}
function V(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        a = null != t ? t : u.AvatarSizes.SIZE_32,
        s = (0, u.getAvatarSize)(a);
    return (0, r.jsx)(_.Z, {
        size: s,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = R.ZP.getName(n, i, e);
            return (0, r.jsx)(
                u.TooltipContainer,
                {
                    text: t,
                    color: u.TooltipColors.GREY,
                    children: (0, r.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, s),
                            alt: t,
                            className: M.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function F(e) {
    switch (e) {
        case 2:
            return u.Button.Sizes.LARGE;
        case 1:
            return u.Button.Sizes.MEDIUM;
        case 0:
            return u.Button.Sizes.SMALL;
    }
}
function z(e) {
    var t, n;
    let { participants: i, application: l, channel: s, width: h } = e,
        v = D(h),
        [S] = U(h),
        I = (0, c.Wu)([w.default, A.default], () =>
            Array.from(i)
                .map((e) => ((0, p.J)(e, A.default) ? null : w.default.getUser(e.userId)))
                .filter(P.lm)
        ),
        x = (0, c.e7)([m.ZP], () => m.ZP.getEmbeddedActivitiesForChannel(s.id).find((e) => e.applicationId === l.id)),
        { analyticsLocations: _ } = (0, y.ZP)(),
        C = (0, d.O)(),
        b = R.ZP.getName(s.getGuildId(), s.id, null == I ? void 0 : I[0]),
        E =
            (0, g.s5)({
                userId: null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: s.id,
                application: l
            }) === g.Fw.CAN_JOIN,
        T = null !== (n = s.getGuildId()) && void 0 !== n ? n : void 0,
        N = a.useId(),
        j = l.id,
        k = a.useMemo(
            () => ({
                channel: s,
                type: 'channel'
            }),
            [s]
        ),
        { submitting: L } = (0, Z.Z)({
            applicationId: j,
            context: k,
            launchingComponentId: N
        });
    return (0, r.jsxs)('div', {
        className: M.splash,
        children: [
            (0, r.jsx)(V, {
                avatarSize: S,
                guildId: T,
                channelId: s.id,
                users: I
            }),
            (0, r.jsx)(u.Text, {
                className: o()(M.subheader, {
                    [M.small]: 0 === v,
                    [M.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children:
                    I.length > 1
                        ? O.intl.formatToPlainString(O.t.cpe6CA, {
                              username: b,
                              count: I.length - 1
                          })
                        : O.intl.formatToPlainString(O.t['7Uuia2'], { username: b })
            }),
            (0, r.jsx)(u.Text, {
                className: o()(M.header, {
                    [M.small]: 0 === v,
                    [M.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children: l.name
            }),
            (0, r.jsx)('div', {
                className: M.buttons,
                children: E
                    ? (0, r.jsx)(u.Button, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null != x))
                                  (0, f.Z)({
                                      applicationId: x.applicationId,
                                      activityChannelId: s.id,
                                      locationObject: C.location,
                                      analyticsLocations: _,
                                      componentId: N
                                  });
                          },
                          submitting: L,
                          size: F(v),
                          className: M.button,
                          look: u.ButtonLooks.FILLED,
                          color: u.Button.Colors.WHITE,
                          children: O.intl.string(O.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function B(e) {
    let { participant: t, width: n, selected: i, interactible: l, channel: s } = e,
        { analyticsLocations: o } = (0, y.ZP)(E.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, v.Z)(),
        m = null != d && (0, h.p)(d.location) === s.id && d.applicationId === u,
        [f] = (0, T.Z)([u]),
        { url: p } = (0, S.Z)({
            applicationId: u,
            names: L,
            size: k
        }),
        g = !i && m,
        _ = !m,
        Z = !m && !i,
        A = (0, c.e7)([j.Z, N.Z], () =>
            (0, b.Z)({
                LayerStore: j.Z,
                PopoutWindowStore: N.Z
            })
        );
    return (
        a.useEffect(() => {
            if (g && null != d && !A) {
                let e = (0, C.Z)(d.location.id, d.applicationId);
                (0, x.jy)(e);
            }
        }, [g, d, A]),
        (0, r.jsx)(y.Gt, {
            value: o,
            children: (0, r.jsx)('div', {
                className: M.container,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        g &&
                            null != d &&
                            (0, r.jsx)(I.Z, {
                                className: M.iframe,
                                embedId: (0, C.Z)(d.location.id, u)
                            }),
                        _ && null != f && null != p && '' !== p
                            ? (0, r.jsx)('img', {
                                  className: M.splashImage,
                                  alt: f.name,
                                  src: p
                              })
                            : null,
                        Z &&
                            null != f &&
                            (0, r.jsx)(z, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        l || _ ? null : (0, r.jsx)('div', { className: M.clickShield })
                    ]
                })
            })
        })
    );
}
