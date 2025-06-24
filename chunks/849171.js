n.d(t, {
    OV: () => D,
    ZP: () => L
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    u = n(442837),
    o = n(481060),
    s = n(2052),
    c = n(317381),
    d = n(638880),
    f = n(413458),
    m = n(16609),
    p = n(527805),
    E = n(716600),
    g = n(778569),
    h = n(563218),
    S = n(318891),
    O = n(884338),
    v = n(719296),
    b = n(958185),
    I = n(100527),
    _ = n(906732),
    y = n(890280),
    Z = n(835473),
    A = n(522474),
    N = n(314897),
    R = n(819640),
    P = n(594174),
    T = n(823379),
    j = n(5192),
    C = n(388032),
    w = n(754438);
let x = ['embedded_background'];
function D(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: i } = e,
        a = null != t ? t : o.EFr.SIZE_32,
        u = (0, o.pxk)(a);
    return (0, r.jsx)(O.Z, {
        size: u,
        guildId: n,
        users: i,
        max: 4,
        renderUser: (e) => {
            if (null == e) return null;
            let t = j.ZP.getName(n, l, e);
            return (0, r.jsx)(
                o.DY3,
                {
                    text: t,
                    color: o.FGA.GREY,
                    children: (0, r.jsx)(
                        'img',
                        {
                            src: e.getAvatarURL(n, u),
                            alt: t,
                            className: w.avatar
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
    let { participants: i, application: m, channel: E, width: g } = e,
        h = g > 400 ? 2 : +(g > 300),
        [S] = g > 400 ? [o.EFr.SIZE_56, 56] : g > 300 ? [o.EFr.SIZE_32, 32] : [o.EFr.SIZE_24, 24],
        O = (0, u.Wu)([P.default, N.default], () =>
            Array.from(i)
                .map((e) => ((0, f.J)(e, N.default) ? null : P.default.getUser(e.userId)))
                .filter(T.lm)
        ),
        v = (0, u.e7)([c.ZP], () => {
            var e;
            return null != (e = c.ZP.getEmbeddedActivitiesForChannel(E.id).find((e) => e.applicationId === m.id)) ? e : c.ZP.getEmbeddedActivitiesForStartingChannel(E.id).find((e) => e.applicationId === m.id);
        }),
        { analyticsLocations: b } = (0, _.ZP)(),
        I = (0, s.O)(),
        Z = j.ZP.getName(E.getGuildId(), E.id, null == O ? void 0 : O[0]),
        A =
            (0, p.s5)({
                userId: null == (t = P.default.getCurrentUser()) ? void 0 : t.id,
                channelId: E.id,
                application: m
            }) === p.Fw.CAN_JOIN,
        R = null != (n = E.getGuildId()) ? n : void 0,
        x = l.useId(),
        M = m.id,
        L = l.useMemo(
            () => ({
                channel: E,
                type: 'channel'
            }),
            [E]
        ),
        { submitting: k } = (0, y.Z)({
            applicationId: M,
            context: L,
            launchingComponentId: x
        });
    return (0, r.jsxs)('div', {
        className: w.splash,
        children: [
            (0, r.jsx)(D, {
                avatarSize: S,
                guildId: R,
                channelId: E.id,
                users: O
            }),
            (0, r.jsx)(o.Text, {
                className: a()(w.subheader, {
                    [w.small]: 0 === h,
                    [w.medium]: 1 === h
                }),
                variant: 'text-sm/normal',
                children:
                    O.length > 1
                        ? C.intl.formatToPlainString(C.t.cpe6CA, {
                              username: Z,
                              count: O.length - 1
                          })
                        : C.intl.formatToPlainString(C.t['7Uuia2'], { username: Z })
            }),
            (0, r.jsx)(o.Text, {
                className: a()(w.header, {
                    [w.small]: 0 === h,
                    [w.medium]: 1 === h
                }),
                variant: 'text-sm/normal',
                children: m.name
            }),
            (0, r.jsx)('div', {
                className: w.buttons,
                children: A
                    ? (0, r.jsx)(o.zxk, {
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != v &&
                                      (0, d.Z)({
                                          applicationId: v.applicationId,
                                          activityChannelId: E.id,
                                          locationObject: I.location,
                                          analyticsLocations: b,
                                          componentId: x
                                      });
                          },
                          submitting: k,
                          size: (function (e) {
                              switch (e) {
                                  case 2:
                                      return o.zxk.Sizes.LARGE;
                                  case 1:
                                      return o.zxk.Sizes.MEDIUM;
                                  case 0:
                                      return o.zxk.Sizes.SMALL;
                              }
                          })(h),
                          className: w.button,
                          look: o.iLD.FILLED,
                          color: o.zxk.Colors.WHITE,
                          children: C.intl.string(C.t['4i2vj4'])
                      })
                    : null
            })
        ]
    });
}
function L(e) {
    let { participant: t, width: n, selected: i, interactible: a, channel: o } = e,
        { analyticsLocations: s } = (0, _.ZP)(I.Z.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, E.Z)(),
        f = null != d && (0, m.p)(d.location) === o.id && d.applicationId === c,
        [p] = (0, Z.Z)([c]),
        { url: O } = (0, g.Z)({
            applicationId: c,
            names: x,
            size: 1024
        }),
        y = !i && f,
        N = !f,
        P = !f && !i,
        T = (0, u.e7)([R.Z, A.Z], () =>
            (0, b.Z)({
                LayerStore: R.Z,
                PopoutWindowStore: A.Z
            })
        );
    return (
        l.useEffect(() => {
            if (y && null != d && !T) {
                let e = (0, v.Z)(d.location.id, d.applicationId);
                (0, S.jy)(e);
            }
        }, [y, d, T]),
        (0, r.jsx)(_.Gt, {
            value: s,
            children: (0, r.jsxs)('div', {
                className: w.container,
                children: [
                    y &&
                        null != d &&
                        (0, r.jsx)(h.Z, {
                            className: w.iframe,
                            embedId: (0, v.Z)(d.location.id, c)
                        }),
                    N && null != p && null != O && '' !== O
                        ? (0, r.jsx)('img', {
                              className: w.splashImage,
                              alt: p.name,
                              src: O
                          })
                        : null,
                    P &&
                        null != p &&
                        (0, r.jsx)(M, {
                            width: n,
                            channel: o,
                            participants: t.participants,
                            application: p
                        }),
                    a || N ? null : (0, r.jsx)('div', { className: w.clickShield })
                ]
            })
        })
    );
}
