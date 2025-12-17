n.d(t, {
    OV: () => M,
    ZP: () => L,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(2052),
    d = n(317381),
    f = n(638880),
    p = n(413458),
    b = n(16609),
    m = n(527805),
    g = n(716600),
    v = n(778569),
    h = n(563218),
    E = n(318891),
    _ = n(884338),
    y = n(719296),
    S = n(958185),
    O = n(100527),
    C = n(906732),
    w = n(890280),
    I = n(835473),
    P = n(522474),
    j = n(314897),
    x = n(819640),
    Z = n(594174),
    R = n(823379),
    T = n(5192),
    A = n(388032),
    N = n(404778);
let D = ["embedded_background"];
function M(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        a = null != t ? t : s.EFr.SIZE_32,
        o = (0, s.dcp)(a);
    return (0, r.jsx)(_.ZP, {
        size: o,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === _.ag) return null;
            let t = T.ZP.getName(n, i, e);
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
    let { participants: l, application: c, channel: b, width: g } = e,
        v = g > 400 ? 2 : +(g > 300),
        [h] = g > 400 ? [s.EFr.SIZE_56, 56] : g > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24],
        E = (0, o.Wu)([Z.default, j.default], () =>
            Array.from(l)
                .map((e) => ((0, p.J)(e, j.default) ? null : Z.default.getUser(e.userId)))
                .filter(R.lm),
        ),
        _ = (0, o.e7)([d.ZP], () => {
            var e;
            return null != (e = d.ZP.getEmbeddedActivitiesForChannel(b.id).find((e) => e.applicationId === c.id))
                ? e
                : d.ZP.getEmbeddedActivitiesForStartingChannel(b.id).find((e) => e.applicationId === c.id);
        }),
        { analyticsLocations: y } = (0, C.ZP)(),
        S = (0, u.O)(),
        O = T.ZP.getName(b.getGuildId(), b.id, null == E ? void 0 : E[0]),
        I =
            (0, m.s5)({
                userId: null == (t = Z.default.getCurrentUser()) ? void 0 : t.id,
                channelId: b.id,
                application: c,
            }) === m.Fw.CAN_JOIN,
        P = null != (n = b.getGuildId()) ? n : void 0,
        x = i.useId(),
        D = c.id,
        k = i.useMemo(
            () => ({
                channel: b,
                type: "channel",
            }),
            [b],
        ),
        { submitting: L } = (0, w.Z)({
            applicationId: D,
            context: k,
            launchingComponentId: x,
        });
    return (0, r.jsxs)("div", {
        className: N.splash,
        children: [
            (0, r.jsx)(M, {
                avatarSize: h,
                guildId: P,
                channelId: b.id,
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
                        ? A.intl.formatToPlainString(A.t.cpe6CK, {
                              username: O,
                              count: E.length - 1,
                          })
                        : A.intl.formatToPlainString(A.t["7Uuia2"], { username: O }),
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
                children: I
                    ? (0, r.jsx)(s.Button, {
                          text: A.intl.string(A.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != _ &&
                                      (0, f.Z)({
                                          applicationId: _.applicationId,
                                          activityChannelId: b.id,
                                          locationObject: S.location,
                                          analyticsLocations: y,
                                          componentId: x,
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
        { analyticsLocations: s } = (0, C.ZP)(O.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, g.Z)(),
        f = null != d && (0, b.p)(d.location) === c.id && d.applicationId === u,
        [p] = (0, I.Z)([u]),
        { url: m } = (0, v.Z)({
            applicationId: u,
            names: D,
            size: 1024,
        }),
        _ = !l && f,
        w = !f,
        j = !f && !l,
        Z = (0, o.e7)([x.Z, P.Z], () =>
            (0, S.Z)({
                LayerStore: x.Z,
                PopoutWindowStore: P.Z,
            }),
        );
    return (
        i.useEffect(() => {
            if (_ && null != d && !Z) {
                let e = (0, y.Z)(d.location.id, d.applicationId);
                (0, E.jy)(e);
            }
        }, [_, d, Z]),
        (0, r.jsx)(C.Gt, {
            value: s,
            children: (0, r.jsxs)("div", {
                className: N.container,
                children: [
                    _ &&
                        null != d &&
                        (0, r.jsx)(h.Z, {
                            className: N.iframe,
                            embedId: (0, y.Z)(d.location.id, u),
                        }),
                    w && null != p && null != m && "" !== m
                        ? (0, r.jsx)("img", {
                              className: N.splashImage,
                              alt: p.name,
                              src: m,
                          })
                        : null,
                    j &&
                        null != p &&
                        (0, r.jsx)(k, {
                            width: n,
                            channel: c,
                            participants: t.participants,
                            application: p,
                        }),
                    a || w ? null : (0, r.jsx)("div", { className: N.clickShield }),
                ],
            }),
        })
    );
}
