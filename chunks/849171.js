n.d(t, {
    OV: () => D,
    ZP: () => L
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    u = n(481060),
    s = n(2052),
    c = n(317381),
    d = n(638880),
    f = n(413458),
    p = n(16609),
    m = n(527805),
    g = n(716600),
    E = n(778569),
    h = n(563218),
    v = n(318891),
    S = n(884338),
    b = n(719296),
    O = n(958185),
    y = n(100527),
    Z = n(906732),
    j = n(890280),
    _ = n(835473),
    I = n(522474),
    w = n(314897),
    P = n(819640),
    A = n(594174),
    x = n(823379),
    R = n(5192),
    N = n(388032),
    C = n(160214);
let T = ['embedded_background'];
function D(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: i } = e,
        a = null != t ? t : u.EFr.SIZE_32,
        o = (0, u.pxk)(a);
    return (0, r.jsx)(S.Z, {
        size: o,
        guildId: n,
        users: i,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = R.ZP.getName(n, l, e);
            return (0, r.jsx)(
                u.DY3,
                {
                    text: t,
                    color: u.FGA.GREY,
                    children: (0, r.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, o),
                            alt: t,
                            className: C.avatar
                        },
                        e.id
                    )
                },
                e.id
            );
        }
    });
}
function M(e) {
    var t, n;
    let { participants: i, application: p, channel: g, width: E } = e,
        h = E > 400 ? 2 : +(E > 300),
        [v] = E > 400 ? [u.EFr.SIZE_56, 56] : E > 300 ? [u.EFr.SIZE_32, 32] : [u.EFr.SIZE_24, 24],
        S = (0, o.Wu)([A.default, w.default], () =>
            Array.from(i)
                .map((e) => ((0, f.J)(e, w.default) ? null : A.default.getUser(e.userId)))
                .filter(x.lm)
        ),
        b = (0, o.e7)([c.ZP], () => {
            var e;
            return null != (e = c.ZP.getEmbeddedActivitiesForChannel(g.id).find((e) => e.applicationId === p.id)) ? e : c.ZP.getEmbeddedActivitiesForStartingChannel(g.id).find((e) => e.applicationId === p.id);
        }),
        { analyticsLocations: O } = (0, Z.ZP)(),
        y = (0, s.O)(),
        _ = R.ZP.getName(g.getGuildId(), g.id, null == S ? void 0 : S[0]),
        I =
            (0, m.s5)({
                userId: null == (t = A.default.getCurrentUser()) ? void 0 : t.id,
                channelId: g.id,
                application: p
            }) === m.Fw.CAN_JOIN,
        P = null != (n = g.getGuildId()) ? n : void 0,
        T = l.useId(),
        M = p.id,
        L = l.useMemo(
            () => ({
                channel: g,
                type: 'channel'
            }),
            [g]
        ),
        { submitting: k } = (0, j.Z)({
            applicationId: M,
            context: L,
            launchingComponentId: T
        });
    return (0, r.jsxs)('div', {
        className: C.splash,
        children: [
            (0, r.jsx)(D, {
                avatarSize: v,
                guildId: P,
                channelId: g.id,
                users: S
            }),
            (0, r.jsx)(u.Text, {
                className: a()(C.subheader, {
                    [C.small]: 0 === h,
                    [C.medium]: 1 === h
                }),
                variant: 'text-sm/normal',
                children:
                    S.length > 1
                        ? N.intl.formatToPlainString(N.t.cpe6CA, {
                              username: _,
                              count: S.length - 1
                          })
                        : N.intl.formatToPlainString(N.t['7Uuia2'], { username: _ })
            }),
            (0, r.jsx)(u.Text, {
                className: a()(C.header, {
                    [C.small]: 0 === h,
                    [C.medium]: 1 === h
                }),
                variant: 'text-sm/normal',
                children: p.name
            }),
            (0, r.jsx)('div', {
                className: C.buttons,
                children: I
                    ? (0, r.jsx)(u.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != b &&
                                      (0, d.Z)({
                                          applicationId: b.applicationId,
                                          activityChannelId: g.id,
                                          locationObject: y.location,
                                          analyticsLocations: O,
                                          componentId: T
                                      });
                          },
                          submitting: k,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return u.zxk.Sizes.LARGE;
                                  case 1:
                                      return u.zxk.Sizes.MEDIUM;
                                  case 0:
                                      return u.zxk.Sizes.SMALL;
                              }
                          })(h),
                          className: C.button,
                          look: u.iLD.FILLED,
                          color: u.zxk.Colors.WHITE,
                          children: N.intl.string(N.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function L(e) {
    let { participant: t, width: n, selected: i, interactible: a, channel: u } = e,
        { analyticsLocations: s } = (0, Z.ZP)(y.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, g.Z)(),
        f = null != d && (0, p.pY)(d.location) === u.id && d.applicationId === c,
        [m] = (0, _.Z)([c]),
        { url: S } = (0, E.Z)({
            applicationId: c,
            names: T,
            size: 1024
        }),
        j = !i && f,
        w = !f,
        A = !f && !i,
        x = (0, o.e7)([P.Z, I.Z], () =>
            (0, O.Z)({
                LayerStore: P.Z,
                PopoutWindowStore: I.Z
            })
        );
    return (
        l.useEffect(() => {
            if (j && null != d && !x) {
                let e = (0, b.Z)(d.location.id, d.applicationId);
                (0, v.jy)(e);
            }
        }, [j, d, x]),
        (0, r.jsx)(Z.Gt, {
            value: s,
            children: (0, r.jsxs)('div', {
                className: C.container,
                children: [
                    j &&
                        null != d &&
                        (0, r.jsx)(h.Z, {
                            className: C.iframe,
                            embedId: (0, b.Z)(d.location.id, c)
                        }),
                    w && null != m && null != S && '' !== S
                        ? (0, r.jsx)('img', {
                              className: C.splashImage,
                              alt: m.name,
                              src: S
                          })
                        : null,
                    A &&
                        null != m &&
                        (0, r.jsx)(M, {
                            width: n,
                            channel: u,
                            participants: t.participants,
                            application: m
                        }),
                    a || w ? null : (0, r.jsx)('div', { className: C.clickShield })
                ]
            })
        })
    );
}
