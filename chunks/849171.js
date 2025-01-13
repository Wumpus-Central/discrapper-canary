n.d(t, {
    OV: function () {
        return k;
    },
    ZP: function () {
        return U;
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
    _ = n(318891),
    x = n(884338),
    E = n(719296),
    C = n(958185),
    Z = n(100527),
    y = n(906732),
    b = n(890280),
    T = n(835473),
    A = n(522474),
    N = n(314897),
    w = n(819640),
    j = n(594174),
    P = n(823379),
    R = n(5192),
    M = n(388032),
    O = n(262745);
((l = i || (i = {}))[(l.SMALL = 0)] = 'SMALL'), (l[(l.MEDIUM = 1)] = 'MEDIUM'), (l[(l.LARGE = 2)] = 'LARGE');
let L = ['embedded_background'];
function k(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        a = null != t ? t : u.AvatarSizes.SIZE_32,
        s = (0, u.getAvatarSize)(a);
    return (0, r.jsx)(x.Z, {
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
function D(e) {
    var t, n, i, l;
    let { participants: s, application: h, channel: v, width: S } = e;
    let I = (i = S) > 400 ? 2 : i > 300 ? 1 : 0;
    let [_] = (l = S) > 400 ? [u.AvatarSizes.SIZE_56, 56] : l > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24],
        x = (0, c.Wu)([j.default, N.default], () =>
            Array.from(s)
                .map((e) => ((0, p.J)(e, N.default) ? null : j.default.getUser(e.userId)))
                .filter(P.lm)
        ),
        E = (0, c.e7)([m.ZP], () => m.ZP.getEmbeddedActivitiesForChannel(v.id).find((e) => e.applicationId === h.id)),
        { analyticsLocations: C } = (0, y.ZP)(),
        Z = (0, d.O)(),
        T = R.ZP.getName(v.getGuildId(), v.id, null == x ? void 0 : x[0]),
        A =
            (0, g.s5)({
                userId: null === (t = j.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                channelId: v.id,
                application: h
            }) === g.Fw.CAN_JOIN,
        w = null !== (n = v.getGuildId()) && void 0 !== n ? n : void 0,
        L = a.useId(),
        D = v.id,
        U = h.id,
        { submitting: V } = (0, b.Z)({
            applicationId: U,
            channelId: D,
            launchingComponentId: L
        });
    return (0, r.jsxs)('div', {
        className: O.splash,
        children: [
            (0, r.jsx)(k, {
                avatarSize: _,
                guildId: w,
                channelId: v.id,
                users: x
            }),
            (0, r.jsx)(u.Text, {
                className: o()(O.subheader, {
                    [O.small]: 0 === I,
                    [O.medium]: 1 === I
                }),
                variant: 'text-sm/normal',
                children:
                    x.length > 1
                        ? M.intl.formatToPlainString(M.t.cpe6CA, {
                              username: T,
                              count: x.length - 1
                          })
                        : M.intl.formatToPlainString(M.t['7Uuia2'], { username: T })
            }),
            (0, r.jsx)(u.Text, {
                className: o()(O.header, {
                    [O.small]: 0 === I,
                    [O.medium]: 1 === I
                }),
                variant: 'text-sm/normal',
                children: h.name
            }),
            (0, r.jsx)('div', {
                className: O.buttons,
                children: A
                    ? (0, r.jsx)(u.Button, {
                          onClick: function (e) {
                              if ((e.stopPropagation(), null != E))
                                  (0, f.Z)({
                                      applicationId: E.applicationId,
                                      activityChannelId: v.id,
                                      locationObject: Z.location,
                                      analyticsLocations: C,
                                      componentId: L
                                  });
                          },
                          submitting: V,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return u.Button.Sizes.LARGE;
                                  case 1:
                                      return u.Button.Sizes.MEDIUM;
                                  case 0:
                                      return u.Button.Sizes.SMALL;
                              }
                          })(I),
                          className: O.button,
                          color: u.Button.Colors.PRIMARY,
                          children: M.intl.string(M.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function U(e) {
    let { participant: t, width: n, selected: i, interactible: l, channel: s } = e,
        { analyticsLocations: o } = (0, y.ZP)(Z.Z.ACTIVITY_TILE),
        { id: u } = t,
        d = (0, v.Z)(),
        m = null != d && (0, h.p)(d.location) === s.id && d.applicationId === u,
        [f] = (0, T.Z)([u]),
        { url: p } = (0, S.Z)({
            applicationId: u,
            names: L,
            size: 1024
        }),
        g = !i && m,
        x = !m,
        b = !m && !i,
        N = (0, c.e7)([w.Z, A.Z], () =>
            (0, C.Z)({
                LayerStore: w.Z,
                PopoutWindowStore: A.Z
            })
        );
    return (
        a.useEffect(() => {
            if (g && null != d && !N) {
                let e = (0, E.Z)(d.location.id, d.applicationId);
                (0, _.jy)(e);
            }
        }, [g, d, N]),
        (0, r.jsx)(y.Gt, {
            value: o,
            children: (0, r.jsx)('div', {
                className: O.container,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        g &&
                            null != d &&
                            (0, r.jsx)(I.Z, {
                                className: O.iframe,
                                embedId: (0, E.Z)(d.location.id, u)
                            }),
                        x && null != f && null != p && '' !== p
                            ? (0, r.jsx)('img', {
                                  className: O.splashImage,
                                  alt: f.name,
                                  src: p
                              })
                            : null,
                        b &&
                            null != f &&
                            (0, r.jsx)(D, {
                                width: n,
                                channel: s,
                                participants: t.participants,
                                application: f
                            }),
                        l || x ? null : (0, r.jsx)('div', { className: O.clickShield })
                    ]
                })
            })
        })
    );
}
