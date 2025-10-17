n.d(t, {
    OV: () => D,
    ZP: () => k,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(2052),
    u = n(317381),
    d = n(638880),
    f = n(413458),
    p = n(16609),
    _ = n(527805),
    m = n(716600),
    g = n(778569),
    E = n(563218),
    b = n(318891),
    v = n(884338),
    h = n(719296),
    S = n(958185),
    y = n(100527),
    O = n(906732),
    I = n(826405),
    C = n(835473),
    w = n(522474),
    j = n(314897),
    Z = n(819640),
    P = n(594174),
    x = n(823379),
    A = n(5192),
    T = n(388032),
    R = n(798242);
let N = ["embedded_background"];
function D(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        a = null != t ? t : c.EFr.SIZE_32,
        o = (0, c.pxk)(a);
    return (0, r.jsx)(v.ZP, {
        size: o,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === v.ag) return null;
            let t = A.ZP.getName(n, i, e);
            return (0, r.jsx)(
                c.jSM,
                {
                    text: t,
                    color: c.r6K.GREY,
                    children: (0, r.jsx)(
                        "img",
                        {
                            src: e.getAvatarURL(n, o),
                            alt: t,
                            className: R.avatar,
                        },
                        e.id,
                    ),
                },
                e.id,
            );
        },
    });
}
function M(e) {
    var t, n;
    let { participants: l, application: p, channel: m, width: g } = e,
        E = g > 400 ? 2 : +(g > 300),
        [b] = g > 400 ? [c.EFr.SIZE_56, 56] : g > 300 ? [c.EFr.SIZE_32, 32] : [c.EFr.SIZE_24, 24],
        v = (0, o.Wu)([P.default, j.default], () =>
            Array.from(l)
                .map((e) => ((0, f.J)(e, j.default) ? null : P.default.getUser(e.userId)))
                .filter(x.lm),
        ),
        h = (0, o.e7)([u.ZP], () => {
            var e;
            return null != (e = u.ZP.getEmbeddedActivitiesForChannel(m.id).find((e) => e.applicationId === p.id))
                ? e
                : u.ZP.getEmbeddedActivitiesForStartingChannel(m.id).find((e) => e.applicationId === p.id);
        }),
        { analyticsLocations: S } = (0, O.ZP)(),
        y = (0, s.O)(),
        C = A.ZP.getName(m.getGuildId(), m.id, null == v ? void 0 : v[0]),
        w =
            (0, _.s5)({
                userId: null == (t = P.default.getCurrentUser()) ? void 0 : t.id,
                channelId: m.id,
                application: p,
            }) === _.Fw.CAN_JOIN,
        Z = null != (n = m.getGuildId()) ? n : void 0,
        N = i.useId(),
        M = p.id,
        k = i.useMemo(
            () => ({
                channel: m,
                type: "channel",
            }),
            [m],
        ),
        { submitting: F } = (0, I.Z)({
            applicationId: M,
            context: k,
            launchingComponentId: N,
        });
    return (0, r.jsxs)("div", {
        className: R.splash,
        children: [
            (0, r.jsx)(D, {
                avatarSize: b,
                guildId: Z,
                channelId: m.id,
                users: v,
            }),
            (0, r.jsx)(c.Text, {
                className: a()(R.subheader, {
                    [R.small]: 0 === E,
                    [R.medium]: 1 === E,
                }),
                variant: "text-sm/normal",
                children:
                    v.length > 1
                        ? T.intl.formatToPlainString(T.t.cpe6CA, {
                              username: C,
                              count: v.length - 1,
                          })
                        : T.intl.formatToPlainString(T.t["7Uuia2"], { username: C }),
            }),
            (0, r.jsx)(c.Text, {
                className: a()(R.header, {
                    [R.small]: 0 === E,
                    [R.medium]: 1 === E,
                }),
                variant: "text-sm/normal",
                children: p.name,
            }),
            (0, r.jsx)("div", {
                className: R.buttons,
                children: w
                    ? (0, r.jsx)(c.Button, {
                          text: T.intl.string(T.t["4i2vj4"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != h &&
                                      (0, d.Z)({
                                          applicationId: h.applicationId,
                                          activityChannelId: m.id,
                                          locationObject: y.location,
                                          analyticsLocations: S,
                                          componentId: N,
                                      });
                          },
                          loading: F,
                          size: 2 === E ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function k(e) {
    let { participant: t, width: n, selected: l, interactible: a, channel: c } = e,
        { analyticsLocations: s } = (0, O.ZP)(y.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, m.Z)(),
        f = null != d && (0, p.p)(d.location) === c.id && d.applicationId === u,
        [_] = (0, C.Z)([u]),
        { url: v } = (0, g.Z)({
            applicationId: u,
            names: N,
            size: 1024,
        }),
        I = !l && f,
        j = !f,
        P = !f && !l,
        x = (0, o.e7)([Z.Z, w.Z], () =>
            (0, S.Z)({
                LayerStore: Z.Z,
                PopoutWindowStore: w.Z,
            }),
        );
    return (
        i.useEffect(() => {
            if (I && null != d && !x) {
                let e = (0, h.Z)(d.location.id, d.applicationId);
                (0, b.jy)(e);
            }
        }, [I, d, x]),
        (0, r.jsx)(O.Gt, {
            value: s,
            children: (0, r.jsxs)("div", {
                className: R.container,
                children: [
                    I &&
                        null != d &&
                        (0, r.jsx)(E.Z, {
                            className: R.iframe,
                            embedId: (0, h.Z)(d.location.id, u),
                        }),
                    j && null != _ && null != v && "" !== v
                        ? (0, r.jsx)("img", {
                              className: R.splashImage,
                              alt: _.name,
                              src: v,
                          })
                        : null,
                    P &&
                        null != _ &&
                        (0, r.jsx)(M, {
                            width: n,
                            channel: c,
                            participants: t.participants,
                            application: _,
                        }),
                    a || j ? null : (0, r.jsx)("div", { className: R.clickShield }),
                ],
            }),
        })
    );
}
