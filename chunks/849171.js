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
    s = n(681715),
    c = n(481060),
    u = n(2052),
    d = n(317381),
    p = n(638880),
    f = n(413458),
    h = n(16609),
    m = n(527805),
    g = n(716600),
    b = n(778569),
    _ = n(563218),
    y = n(318891),
    C = n(884338),
    v = n(719296),
    O = n(958185),
    x = n(100527),
    E = n(906732),
    j = n(826405),
    S = n(835473),
    P = n(522474),
    I = n(314897),
    Z = n(819640),
    T = n(594174),
    N = n(823379),
    A = n(5192),
    w = n(388032),
    M = n(798242);
let R = ["embedded_background"];
function D(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
        a = null != t ? t : c.EFr.SIZE_32,
        o = (0, c.pxk)(a);
    return (0, r.jsx)(C.ZP, {
        size: o,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === C.ag) return null;
            let t = A.ZP.getName(n, i, e);
            return (0, r.jsx)(
                s.u,
                {
                    text: t,
                    children: (0, r.jsx)(
                        "img",
                        {
                            src: e.getAvatarURL(n, o),
                            alt: t,
                            className: M.avatar,
                        },
                        e.id,
                    ),
                },
                e.id,
            );
        },
    });
}
function L(e) {
    var t, n;
    let { participants: l, application: s, channel: h, width: g } = e,
        b = g > 400 ? 2 : +(g > 300),
        [_] = g > 400 ? [c.EFr.SIZE_56, 56] : g > 300 ? [c.EFr.SIZE_32, 32] : [c.EFr.SIZE_24, 24],
        y = (0, o.Wu)([T.default, I.default], () =>
            Array.from(l)
                .map((e) => ((0, f.J)(e, I.default) ? null : T.default.getUser(e.userId)))
                .filter(N.lm),
        ),
        C = (0, o.e7)([d.ZP], () => {
            var e;
            return null != (e = d.ZP.getEmbeddedActivitiesForChannel(h.id).find((e) => e.applicationId === s.id))
                ? e
                : d.ZP.getEmbeddedActivitiesForStartingChannel(h.id).find((e) => e.applicationId === s.id);
        }),
        { analyticsLocations: v } = (0, E.ZP)(),
        O = (0, u.O)(),
        x = A.ZP.getName(h.getGuildId(), h.id, null == y ? void 0 : y[0]),
        S =
            (0, m.s5)({
                userId: null == (t = T.default.getCurrentUser()) ? void 0 : t.id,
                channelId: h.id,
                application: s,
            }) === m.Fw.CAN_JOIN,
        P = null != (n = h.getGuildId()) ? n : void 0,
        Z = i.useId(),
        R = s.id,
        L = i.useMemo(
            () => ({
                channel: h,
                type: "channel",
            }),
            [h],
        ),
        { submitting: k } = (0, j.Z)({
            applicationId: R,
            context: L,
            launchingComponentId: Z,
        });
    return (0, r.jsxs)("div", {
        className: M.splash,
        children: [
            (0, r.jsx)(D, {
                avatarSize: _,
                guildId: P,
                channelId: h.id,
                users: y,
            }),
            (0, r.jsx)(c.Text, {
                className: a()(M.subheader, {
                    [M.small]: 0 === b,
                    [M.medium]: 1 === b,
                }),
                variant: "text-sm/normal",
                children:
                    y.length > 1
                        ? w.intl.formatToPlainString(w.t.cpe6CK, {
                              username: x,
                              count: y.length - 1,
                          })
                        : w.intl.formatToPlainString(w.t["7Uuia2"], { username: x }),
            }),
            (0, r.jsx)(c.Text, {
                className: a()(M.header, {
                    [M.small]: 0 === b,
                    [M.medium]: 1 === b,
                }),
                variant: "text-sm/normal",
                children: s.name,
            }),
            (0, r.jsx)("div", {
                className: M.buttons,
                children: S
                    ? (0, r.jsx)(c.Button, {
                          text: w.intl.string(w.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != C &&
                                      (0, p.Z)({
                                          applicationId: C.applicationId,
                                          activityChannelId: h.id,
                                          locationObject: O.location,
                                          analyticsLocations: v,
                                          componentId: Z,
                                      });
                          },
                          loading: k,
                          size: 2 === b ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function k(e) {
    let { participant: t, width: n, selected: l, interactible: a, channel: s } = e,
        { analyticsLocations: c } = (0, E.ZP)(x.Z.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, g.Z)(),
        p = null != d && (0, h.p)(d.location) === s.id && d.applicationId === u,
        [f] = (0, S.Z)([u]),
        { url: m } = (0, b.Z)({
            applicationId: u,
            names: R,
            size: 1024,
        }),
        C = !l && p,
        j = !p,
        I = !p && !l,
        T = (0, o.e7)([Z.Z, P.Z], () =>
            (0, O.Z)({
                LayerStore: Z.Z,
                PopoutWindowStore: P.Z,
            }),
        );
    return (
        i.useEffect(() => {
            if (C && null != d && !T) {
                let e = (0, v.Z)(d.location.id, d.applicationId);
                (0, y.jy)(e);
            }
        }, [C, d, T]),
        (0, r.jsx)(E.Gt, {
            value: c,
            children: (0, r.jsxs)("div", {
                className: M.container,
                children: [
                    C &&
                        null != d &&
                        (0, r.jsx)(_.Z, {
                            className: M.iframe,
                            embedId: (0, v.Z)(d.location.id, u),
                        }),
                    j && null != f && null != m && "" !== m
                        ? (0, r.jsx)("img", {
                              className: M.splashImage,
                              alt: f.name,
                              src: m,
                          })
                        : null,
                    I &&
                        null != f &&
                        (0, r.jsx)(L, {
                            width: n,
                            channel: s,
                            participants: t.participants,
                            application: f,
                        }),
                    a || j ? null : (0, r.jsx)("div", { className: M.clickShield }),
                ],
            }),
        })
    );
}
