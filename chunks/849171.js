n.d(t, {
    OV: () => M,
    ZP: () => L,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(2052),
    d = n(317381),
    f = n(638880),
    p = n(413458),
    _ = n(16609),
    m = n(527805),
    g = n(716600),
    v = n(778569),
    b = n(563218),
    E = n(318891),
    h = n(884338),
    S = n(719296),
    y = n(958185),
    O = n(100527),
    I = n(906732),
    C = n(826405),
    w = n(835473),
    P = n(522474),
    Z = n(314897),
    j = n(819640),
    T = n(594174),
    A = n(823379),
    R = n(5192),
    x = n(388032),
    N = n(798242);
let D = ["embedded_background"];
function M(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        a = null != t ? t : s.EFr.SIZE_32,
        o = (0, s.pxk)(a);
    return (0, r.jsx)(h.ZP, {
        size: o,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === h.ag) return null;
            let t = R.ZP.getName(n, i, e);
            return (0, r.jsx)(
                c.u,
                {
                    text: t,
                    children: (0, r.jsx)(
                        "img",
                        {
                            src: e.getAvatarURL(n, o),
                            alt: t,
                            className: N.avatar,
                        },
                        e.id,
                    ),
                },
                e.id,
            );
        },
    });
}
function k(e) {
    var t, n;
    let { participants: l, application: c, channel: _, width: g } = e,
        v = g > 400 ? 2 : +(g > 300),
        [b] = g > 400 ? [s.EFr.SIZE_56, 56] : g > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24],
        E = (0, o.Wu)([T.default, Z.default], () =>
            Array.from(l)
                .map((e) => ((0, p.J)(e, Z.default) ? null : T.default.getUser(e.userId)))
                .filter(A.lm),
        ),
        h = (0, o.e7)([d.ZP], () => {
            var e;
            return null != (e = d.ZP.getEmbeddedActivitiesForChannel(_.id).find((e) => e.applicationId === c.id))
                ? e
                : d.ZP.getEmbeddedActivitiesForStartingChannel(_.id).find((e) => e.applicationId === c.id);
        }),
        { analyticsLocations: S } = (0, I.ZP)(),
        y = (0, u.O)(),
        O = R.ZP.getName(_.getGuildId(), _.id, null == E ? void 0 : E[0]),
        w =
            (0, m.s5)({
                userId: null == (t = T.default.getCurrentUser()) ? void 0 : t.id,
                channelId: _.id,
                application: c,
            }) === m.Fw.CAN_JOIN,
        P = null != (n = _.getGuildId()) ? n : void 0,
        j = i.useId(),
        D = c.id,
        k = i.useMemo(
            () => ({
                channel: _,
                type: "channel",
            }),
            [_],
        ),
        { submitting: L } = (0, C.Z)({
            applicationId: D,
            context: k,
            launchingComponentId: j,
        });
    return (0, r.jsxs)("div", {
        className: N.splash,
        children: [
            (0, r.jsx)(M, {
                avatarSize: b,
                guildId: P,
                channelId: _.id,
                users: E,
            }),
            (0, r.jsx)(s.Text, {
                className: a()(N.subheader, {
                    [N.small]: 0 === v,
                    [N.medium]: 1 === v,
                }),
                variant: "text-sm/normal",
                children:
                    E.length > 1
                        ? x.intl.formatToPlainString(x.t.cpe6CK, {
                              username: O,
                              count: E.length - 1,
                          })
                        : x.intl.formatToPlainString(x.t["7Uuia2"], { username: O }),
            }),
            (0, r.jsx)(s.Text, {
                className: a()(N.header, {
                    [N.small]: 0 === v,
                    [N.medium]: 1 === v,
                }),
                variant: "text-sm/normal",
                children: c.name,
            }),
            (0, r.jsx)("div", {
                className: N.buttons,
                children: w
                    ? (0, r.jsx)(s.Button, {
                          text: x.intl.string(x.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != h &&
                                      (0, f.Z)({
                                          applicationId: h.applicationId,
                                          activityChannelId: _.id,
                                          locationObject: y.location,
                                          analyticsLocations: S,
                                          componentId: j,
                                      });
                          },
                          loading: L,
                          size: 2 === v ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function L(e) {
    let { participant: t, width: n, selected: l, interactible: a, channel: c } = e,
        { analyticsLocations: s } = (0, I.ZP)(O.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, g.Z)(),
        f = null != d && (0, _.p)(d.location) === c.id && d.applicationId === u,
        [p] = (0, w.Z)([u]),
        { url: m } = (0, v.Z)({
            applicationId: u,
            names: D,
            size: 1024,
        }),
        h = !l && f,
        C = !f,
        Z = !f && !l,
        T = (0, o.e7)([j.Z, P.Z], () =>
            (0, y.Z)({
                LayerStore: j.Z,
                PopoutWindowStore: P.Z,
            }),
        );
    return (
        i.useEffect(() => {
            if (h && null != d && !T) {
                let e = (0, S.Z)(d.location.id, d.applicationId);
                (0, E.jy)(e);
            }
        }, [h, d, T]),
        (0, r.jsx)(I.Gt, {
            value: s,
            children: (0, r.jsxs)("div", {
                className: N.container,
                children: [
                    h &&
                        null != d &&
                        (0, r.jsx)(b.Z, {
                            className: N.iframe,
                            embedId: (0, S.Z)(d.location.id, u),
                        }),
                    C && null != p && null != m && "" !== m
                        ? (0, r.jsx)("img", {
                              className: N.splashImage,
                              alt: p.name,
                              src: m,
                          })
                        : null,
                    Z &&
                        null != p &&
                        (0, r.jsx)(k, {
                            width: n,
                            channel: c,
                            participants: t.participants,
                            application: p,
                        }),
                    a || C ? null : (0, r.jsx)("div", { className: N.clickShield }),
                ],
            }),
        })
    );
}
