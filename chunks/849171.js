n.d(t, {
    Ix: function () {
        return k;
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
        return W;
    },
    ac: function () {
        return F;
    },
    bn: function () {
        return L;
    },
    nR: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    a = n(200651),
    r = n(192379),
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
    I = n(778569),
    S = n(563218),
    _ = n(318891),
    x = n(884338),
    E = n(719296),
    C = n(958185),
    y = n(100527),
    Z = n(906732),
    b = n(890280),
    T = n(835473),
    N = n(522474),
    A = n(314897),
    j = n(819640),
    w = n(594174),
    P = n(823379),
    R = n(5192),
    M = n(388032),
    O = n(262745);
((l = i || (i = {}))[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE');
let L = 1024,
    k = ['embedded_background'];
function D(e) {
    return e > 400 ? 2 : e > 300 ? 1 : 0;
}
function U(e) {
    return e > 400 ? [u.AvatarSizes.SIZE_56, 56] : e > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24];
}
function V(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        r = null != t ? t : u.AvatarSizes.SIZE_32,
        s = (0, u.getAvatarSize)(r);
    return (0, a.jsx)(x.Z, {
        size: s,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = R.ZP.getName(n, i, e);
            return (0, a.jsx)(
                u.TooltipContainer,
                {
                    text: t,
                    color: u.TooltipColors.GREY,
                    children: (0, a.jsx)(
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
function B(e) {
    var t, n;
    let { participants: i, application: l, channel: s, width: h } = e,
        v = D(h),
        [I] = U(h),
        S = (0, c.Wu)([w.default, A.default], () =>
            Array.from(i)
                .map((e) => ((0, p.J)(e, A.default) ? null : w.default.getUser(e.userId)))
                .filter(P.lm)
        ),
        _ = (0, c.e7)([m.ZP], () => m.ZP.getEmbeddedActivitiesForChannel(s.id).find((e) => e.applicationId === l.id)),
        { analyticsLocations: x } = (0, Z.ZP)(),
        E = (0, d.O)(),
        C = R.ZP.getName(s.getGuildId(), s.id, null == S ? void 0 : S[0]),
        y =
            (0, g.s5)({
                userId: null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: s.id,
                application: l
            }) === g.Fw.CAN_JOIN,
        T = null !== (n = s.getGuildId()) && void 0 !== n ? n : void 0,
        N = r.useId(),
        j = l.id,
        L = r.useMemo(
            () => ({
                channel: s,
                type: 'channel'
            }),
            [s]
        ),
        { submitting: k } = (0, b.Z)({
            applicationId: j,
            context: L,
            launchingComponentId: N
        });
    return (0, a.jsxs)('div', {
        className: O.splash,
        children: [
            (0, a.jsx)(V, {
                avatarSize: I,
                guildId: T,
                channelId: s.id,
                users: S
            }),
            (0, a.jsx)(u.Text, {
                className: o()(O.subheader, {
                    [O.small]: 0 === v,
                    [O.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children:
                    S.length > 1
                        ? M.intl.formatToPlainString(M.t.cpe6CA, {
                              username: C,
                              count: S.length - 1
                          })
                        : M.intl.formatToPlainString(M.t['7Uuia2'], { username: C })
            }),
            (0, a.jsx)(u.Text, {
                className: o()(O.header, {
                    [O.small]: 0 === v,
                    [O.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children: l.name
            }),
            (0, a.jsx)('div', {
                className: O.buttons,
                children: y
                    ? (0, a.jsx)(u.Button, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null != _))
                                  (0, f.Z)({
                                      applicationId: _.applicationId,
                                      activityChannelId: s.id,
                                      locationObject: E.location,
                                      analyticsLocations: x,
                                      componentId: N
                                  });
                          },
                          submitting: k,
                          size: F(v),
                          className: O.button,
                          look: u.ButtonLooks.FILLED,
                          color: u.Button.Colors.WHITE,
                          children: M.intl.string(M.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function W(e) {
    let { participant: t, width: n, selected: i, interactible: l, channel: s } = e,
        { analyticsLocations: o } = (0, Z.ZP)(y.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, v.Z)(),
        m = null != d && (0, h.p)(d.location) === s.id && d.applicationId === u,
        [f] = (0, T.Z)([u]),
        { url: p } = (0, I.Z)({
            applicationId: u,
            names: k,
            size: L
        }),
        g = !i && m,
        x = !m,
        b = !m && !i,
        A = (0, c.e7)([j.Z, N.Z], () =>
            (0, C.Z)({
                LayerStore: j.Z,
                PopoutWindowStore: N.Z
            })
        );
    return (
        r.useEffect(() => {
            if (g && null != d && !A) {
                let e = (0, E.Z)(d.location.id, d.applicationId);
                (0, _.jy)(e);
            }
        }, [g, d, A]),
        (0, a.jsx)(Z.Gt, {
            value: o,
            children: (0, a.jsx)('div', {
                className: O.container,
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        g &&
                            null != d &&
                            (0, a.jsx)(S.Z, {
                                className: O.iframe,
                                embedId: (0, E.Z)(d.location.id, u)
                            }),
                        x && null != f && null != p && '' !== p
                            ? (0, a.jsx)('img', {
                                  className: O.splashImage,
                                  alt: f.name,
                                  src: p
                              })
                            : null,
                        b &&
                            null != f &&
                            (0, a.jsx)(B, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        l || x ? null : (0, a.jsx)('div', { className: O.clickShield })
                    ]
                })
            })
        })
    );
}
