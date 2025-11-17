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
    m = n(16609),
    _ = n(527805),
    g = n(716600),
    v = n(778569),
    b = n(563218),
    E = n(318891),
    h = n(884338),
    y = n(719296),
    S = n(958185),
    O = n(100527),
    C = n(906732),
    I = n(890280),
    w = n(835473),
    P = n(522474),
    j = n(314897),
    x = n(819640),
    Z = n(594174),
    R = n(823379),
    T = n(5192),
    A = n(388032),
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
    let { participants: l, application: c, channel: m, width: g } = e,
        v = g > 400 ? 2 : +(g > 300),
        [b] = g > 400 ? [s.EFr.SIZE_56, 56] : g > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24],
        E = (0, o.Wu)([Z.default, j.default], () =>
            Array.from(l)
                .map((e) => ((0, p.J)(e, j.default) ? null : Z.default.getUser(e.userId)))
                .filter(R.lm),
        ),
        h = (0, o.e7)([d.ZP], () => {
            var e;
            return null != (e = d.ZP.getEmbeddedActivitiesForChannel(m.id).find((e) => e.applicationId === c.id))
                ? e
                : d.ZP.getEmbeddedActivitiesForStartingChannel(m.id).find((e) => e.applicationId === c.id);
        }),
        { analyticsLocations: y } = (0, C.ZP)(),
        S = (0, u.O)(),
        O = T.ZP.getName(m.getGuildId(), m.id, null == E ? void 0 : E[0]),
        w =
            (0, _.s5)({
                userId: null == (t = Z.default.getCurrentUser()) ? void 0 : t.id,
                channelId: m.id,
                application: c,
            }) === _.Fw.CAN_JOIN,
        P = null != (n = m.getGuildId()) ? n : void 0,
        x = i.useId(),
        D = c.id,
        k = i.useMemo(
            () => ({
                channel: m,
                type: "channel",
            }),
            [m],
        ),
        { submitting: L } = (0, I.Z)({
            applicationId: D,
            context: k,
            launchingComponentId: x,
        });
    return (0, r.jsxs)("div", {
        className: N.splash,
        children: [
            (0, r.jsx)(M, {
                avatarSize: b,
                guildId: P,
                channelId: m.id,
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
                children: w
                    ? (0, r.jsx)(s.Button, {
                          text: A.intl.string(A.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != h &&
                                      (0, f.Z)({
                                          applicationId: h.applicationId,
                                          activityChannelId: m.id,
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
        f = null != d && (0, m.p)(d.location) === c.id && d.applicationId === u,
        [p] = (0, w.Z)([u]),
        { url: _ } = (0, v.Z)({
            applicationId: u,
            names: D,
            size: 1024,
        }),
        h = !l && f,
        I = !f,
        j = !f && !l,
        Z = (0, o.e7)([x.Z, P.Z], () =>
            (0, S.Z)({
                LayerStore: x.Z,
                PopoutWindowStore: P.Z,
            }),
        );
    return (
        i.useEffect(() => {
            if (h && null != d && !Z) {
                let e = (0, y.Z)(d.location.id, d.applicationId);
                (0, E.jy)(e);
            }
        }, [h, d, Z]),
        (0, r.jsx)(C.Gt, {
            value: s,
            children: (0, r.jsxs)("div", {
                className: N.container,
                children: [
                    h &&
                        null != d &&
                        (0, r.jsx)(b.Z, {
                            className: N.iframe,
                            embedId: (0, y.Z)(d.location.id, u),
                        }),
                    I && null != p && null != _ && "" !== _
                        ? (0, r.jsx)("img", {
                              className: N.splashImage,
                              alt: p.name,
                              src: _,
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
                    a || I ? null : (0, r.jsx)("div", { className: N.clickShield }),
                ],
            }),
        })
    );
}
