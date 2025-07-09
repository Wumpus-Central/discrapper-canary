(n.d(t, {
    OV: () => M,
    ZP: () => k
}),
    n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    u = n(755721),
    s = n(481060),
    c = n(2052),
    d = n(317381),
    f = n(638880),
    p = n(413458),
    m = n(16609),
    g = n(527805),
    E = n(716600),
    h = n(778569),
    v = n(563218),
    S = n(318891),
    b = n(884338),
    O = n(719296),
    y = n(958185),
    Z = n(100527),
    j = n(906732),
    _ = n(890280),
    I = n(835473),
    w = n(522474),
    P = n(314897),
    A = n(819640),
    x = n(594174),
    R = n(823379),
    N = n(5192),
    C = n(388032),
    T = n(754438);
let D = ['embedded_background'];
function M(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: i } = e,
        a = null != t ? t : s.EFr.SIZE_32,
        o = (0, s.pxk)(a);
    return (0, r.jsx)(b.ZP, {
        size: o,
        guildId: n,
        users: i,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === b.ag) return null;
            let t = N.ZP.getName(n, l, e);
            return (0, r.jsx)(
                s.DY3,
                {
                    text: t,
                    color: s.FGA.GREY,
                    children: (0, r.jsx)(
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
function L(e) {
    var t, n;
    let { participants: i, application: m, channel: E, width: h } = e,
        v = h > 400 ? 2 : +(h > 300),
        [S] = h > 400 ? [s.EFr.SIZE_56, 56] : h > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24],
        b = (0, o.Wu)([x.default, P.default], () =>
            Array.from(i)
                .map((e) => ((0, p.J)(e, P.default) ? null : x.default.getUser(e.userId)))
                .filter(R.lm)
        ),
        O = (0, o.e7)([d.ZP], () => {
            var e;
            return null != (e = d.ZP.getEmbeddedActivitiesForChannel(E.id).find((e) => e.applicationId === m.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(E.id).find((e) => e.applicationId === m.id);
        }),
        { analyticsLocations: y } = (0, j.ZP)(),
        Z = (0, c.O)(),
        I = N.ZP.getName(E.getGuildId(), E.id, null == b ? void 0 : b[0]),
        w =
            (0, g.s5)({
                userId: null == (t = x.default.getCurrentUser()) ? void 0 : t.id,
                channelId: E.id,
                application: m
            }) === g.Fw.CAN_JOIN,
        A = null != (n = E.getGuildId()) ? n : void 0,
        D = l.useId(),
        L = m.id,
        k = l.useMemo(
            () => ({
                channel: E,
                type: 'channel'
            }),
            [E]
        ),
        { submitting: U } = (0, _.Z)({
            applicationId: L,
            context: k,
            launchingComponentId: D
        });
    return (0, r.jsxs)('div', {
        className: T.splash,
        children: [
            (0, r.jsx)(M, {
                avatarSize: S,
                guildId: A,
                channelId: E.id,
                users: b
            }),
            (0, r.jsx)(s.Text, {
                className: a()(T.subheader, {
                    [T.small]: 0 === v,
                    [T.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children:
                    b.length > 1
                        ? C.intl.formatToPlainString(C.t.cpe6CA, {
                              username: I,
                              count: b.length - 1
                          })
                        : C.intl.formatToPlainString(C.t['7Uuia2'], { username: I })
            }),
            (0, r.jsx)(s.Text, {
                className: a()(T.header, {
                    [T.small]: 0 === v,
                    [T.medium]: 1 === v
                }),
                variant: 'text-sm/normal',
                children: m.name
            }),
            (0, r.jsx)('div', {
                className: T.buttons,
                children: w
                    ? (0, r.jsx)(u.zx, {
                          onClick: function (e) {
                              (e.stopPropagation(),
                                  null != O &&
                                      (0, f.Z)({
                                          applicationId: O.applicationId,
                                          activityChannelId: E.id,
                                          locationObject: Z.location,
                                          analyticsLocations: y,
                                          componentId: D
                                      }));
                          },
                          submitting: U,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return u.zx.Sizes.LARGE;
                                  case 1:
                                      return u.zx.Sizes.MEDIUM;
                                  case 0:
                                      return u.zx.Sizes.SMALL;
                              }
                          })(v),
                          className: T.button,
                          look: u.iL.FILLED,
                          color: u.zx.Colors.WHITE,
                          children: C.intl.string(C.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function k(e) {
    let { participant: t, width: n, selected: i, interactible: a, channel: u } = e,
        { analyticsLocations: s } = (0, j.ZP)(Z.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, E.Z)(),
        f = null != d && (0, m.p)(d.location) === u.id && d.applicationId === c,
        [p] = (0, I.Z)([c]),
        { url: g } = (0, h.Z)({
            applicationId: c,
            names: D,
            size: 1024
        }),
        b = !i && f,
        _ = !f,
        P = !f && !i,
        x = (0, o.e7)([A.Z, w.Z], () =>
            (0, y.Z)({
                LayerStore: A.Z,
                PopoutWindowStore: w.Z
            })
        );
    return (
        l.useEffect(() => {
            if (b && null != d && !x) {
                let e = (0, O.Z)(d.location.id, d.applicationId);
                (0, S.jy)(e);
            }
        }, [b, d, x]),
        (0, r.jsx)(j.Gt, {
            value: s,
            children: (0, r.jsxs)('div', {
                className: T.container,
                children: [
                    b &&
                        null != d &&
                        (0, r.jsx)(v.Z, {
                            className: T.iframe,
                            embedId: (0, O.Z)(d.location.id, c)
                        }),
                    _ && null != p && null != g && '' !== g
                        ? (0, r.jsx)('img', {
                              className: T.splashImage,
                              alt: p.name,
                              src: g
                          })
                        : null,
                    P &&
                        null != p &&
                        (0, r.jsx)(L, {
                            width: n,
                            channel: u,
                            participants: t.participants,
                            application: p
                        }),
                    a || _ ? null : (0, r.jsx)('div', { className: T.clickShield })
                ]
            })
        })
    );
}
