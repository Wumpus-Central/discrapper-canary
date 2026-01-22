n.d(t, {
    Ay: () => U,
    LN: () => L,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(212245),
    d = n(933958),
    f = n(447031),
    p = n(878549),
    b = n(969151),
    g = n(550151),
    m = n(902439),
    h = n(283488),
    A = n(732637),
    y = n(315206),
    _ = n(104171),
    E = n(594007),
    v = n(227042),
    O = n(793574),
    x = n(688810),
    S = n(698141),
    N = n(429913),
    C = n(87001),
    j = n(961350),
    T = n(186111),
    I = n(287809),
    w = n(403362),
    R = n(562153),
    P = n(985018),
    D = n(677406);
let k = ["embedded_background"];
function L(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: i } = e,
        a = null != t ? t : c._3J.SIZE_32,
        s = (0, c.FT9)(a);
    return (0, l.jsx)(_.Ay, {
        size: s,
        guildId: n,
        users: i,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === _.mt) return null;
            let t = R.Ay.getName(n, r, e);
            return (0, l.jsx)(
                o.m_,
                {
                    text: t,
                    children: (0, l.jsx)(
                        "img",
                        {
                            src: e.getAvatarURL(n, s),
                            alt: t,
                            className: D.my,
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
    let { participants: i, application: o, channel: b, width: m } = e,
        h = m > 400 ? 2 : +(m > 300),
        [A] = m > 400 ? [c._3J.SIZE_56, 56] : m > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24],
        y = (0, s.yK)([I.default, j.default], () =>
            Array.from(i)
                .map((e) => ((0, p.S)(e, j.default) ? null : I.default.getUser(e.userId)))
                .filter(w.Vq),
        ),
        _ = (0, s.bG)([d.Ay], () => {
            var e;
            return null != (e = d.Ay.getEmbeddedActivitiesForChannel(b.id).find((e) => e.applicationId === o.id))
                ? e
                : d.Ay.getEmbeddedActivitiesForStartingChannel(b.id).find((e) => e.applicationId === o.id);
        }),
        { analyticsLocations: E } = (0, x.Ay)(),
        v = (0, u.p)(),
        O = R.Ay.getName(b.getGuildId(), b.id, null == y ? void 0 : y[0]),
        N =
            (0, g.vG)({
                userId: null == (n = I.default.getCurrentUser()) ? void 0 : n.id,
                channelId: b.id,
                application: o,
            }) === g.Gy.CAN_JOIN,
        C = null != (t = b.getGuildId()) ? t : void 0,
        T = r.useId(),
        k = o.id,
        M = r.useMemo(
            () => ({
                channel: b,
                type: "channel",
            }),
            [b],
        ),
        { submitting: U } = (0, S.A)({
            applicationId: k,
            context: M,
            launchingComponentId: T,
        });
    return (0, l.jsxs)("div", {
        className: D.Yi,
        children: [
            (0, l.jsx)(L, {
                avatarSize: A,
                guildId: C,
                channelId: b.id,
                users: y,
            }),
            (0, l.jsx)(c.Text, {
                className: a()(D.m_, {
                    [D.EX]: 0 === h,
                    [D.Y]: 1 === h,
                }),
                variant: "text-sm/normal",
                children:
                    y.length > 1
                        ? P.intl.formatToPlainString(P.t.cpe6CK, {
                              username: O,
                              count: y.length - 1,
                          })
                        : P.intl.formatToPlainString(P.t["7Uuia2"], { username: O }),
            }),
            (0, l.jsx)(c.Text, {
                className: a()(D.wx, {
                    [D.EX]: 0 === h,
                    [D.Y]: 1 === h,
                }),
                variant: "text-sm/normal",
                children: o.name,
            }),
            (0, l.jsx)("div", {
                className: D.Uo,
                children: N
                    ? (0, l.jsx)(c.Button, {
                          text: P.intl.string(P.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != _ &&
                                      (0, f.A)({
                                          applicationId: _.applicationId,
                                          activityChannelId: b.id,
                                          locationObject: v.location,
                                          analyticsLocations: E,
                                          componentId: T,
                                      });
                          },
                          loading: U,
                          size: 2 === h ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function U(e) {
    let { participant: t, width: n, selected: i, interactible: a, channel: o } = e,
        { analyticsLocations: c } = (0, x.Ay)(O.A.ACTIVITY_TILE),
        { applicationId: u } = t,
        d = (0, m.A)(),
        f = null != d && (0, b.H)(d.location) === o.id && d.applicationId === u,
        [p] = (0, N.A)([u]),
        { url: g } = (0, h.A)({
            applicationId: u,
            names: k,
            size: 1024,
        }),
        _ = !i && f,
        S = !f,
        j = !f && !i,
        I = (0, s.bG)([T.A, C.A], () =>
            (0, v.A)({
                LayerStore: T.A,
                PopoutWindowStore: C.A,
            }),
        );
    return (
        r.useEffect(() => {
            if (_ && null != d && !I) {
                let e = (0, E.A)(d.location.id, d.applicationId);
                (0, y.cK)(e);
            }
        }, [_, d, I]),
        (0, l.jsx)(x.f5, {
            value: c,
            children: (0, l.jsxs)("div", {
                className: D.kL,
                children: [
                    _ &&
                        null != d &&
                        (0, l.jsx)(A.A, {
                            className: D.pU,
                            embedId: (0, E.A)(d.location.id, u),
                        }),
                    S && null != p && null != g && "" !== g
                        ? (0, l.jsx)("img", {
                              className: D.j0,
                              alt: p.name,
                              src: g,
                          })
                        : null,
                    j &&
                        null != p &&
                        (0, l.jsx)(M, {
                            width: n,
                            channel: o,
                            participants: t.participants,
                            application: p,
                        }),
                    a || S ? null : (0, l.jsx)("div", { className: D.OB }),
                ],
            }),
        })
    );
}
