n.d(t, { Ay: () => G, LN: () => L });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(17928),
    o = n(990078),
    d = n(778712),
    c = n(834730),
    u = n(821609),
    h = n(212245),
    m = n(933958),
    p = n(62583),
    g = n(878549),
    f = n(969151),
    _ = n(550151),
    x = n(902439),
    A = n(283488),
    E = n(732637),
    S = n(315206),
    I = n(104171),
    v = n(594007),
    b = n(227042),
    C = n(793574),
    T = n(688810),
    y = n(698141),
    j = n(429913),
    w = n(567249),
    N = n(495544),
    R = n(186111),
    M = n(287809),
    O = n(403362),
    k = n(562153),
    D = n(985018),
    z = n(301094);
let P = ["embedded_background"];
function L(e) {
    let { avatarSize: t, guildId: n, channelId: a, users: r } = e,
        l = t ?? d._3.SIZE_32,
        s = (0, d.FT)(l);
    return (0, i.jsx)(I.Ay, {
        size: s,
        guildId: n,
        users: r,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === I.mt) return null;
            let t = k.Ay.getName(n, a, e);
            return (0, i.jsx)(
                o.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, s), alt: t, className: z.my }, e.id) },
                e.id,
            );
        },
    });
}
function V(e) {
    let { participants: t, application: n, channel: r, width: o } = e,
        f = o > 400 ? 2 : +(o > 300),
        [x] = o > 400 ? [d._3.SIZE_56, 56] : o > 300 ? [d._3.SIZE_32, 32] : [d._3.SIZE_24, 24],
        A = (0, s.yK)([M.default, N.default], () =>
            Array.from(t)
                .map((e) => ((0, g.S)(e, N.default) ? null : M.default.getUser(e.userId)))
                .filter(O.Vq),
        ),
        E = (0, s.bG)(
            [m.Ay],
            () =>
                m.Ay.getEmbeddedActivitiesForChannel(r.id).find((e) => e.applicationId === n.id) ??
                m.Ay.getEmbeddedActivitiesForStartingChannel(r.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: S } = (0, T.Ay)(),
        I = (0, h.p)(),
        v = k.Ay.getName(r.getGuildId(), r.id, A?.[0]),
        b = (0, _.vG)({ userId: M.default.getCurrentUser()?.id, channelId: r.id, application: n }) === _.Gy.CAN_JOIN,
        C = r.getGuildId() ?? void 0,
        j = a.useId(),
        w = n.id,
        R = a.useMemo(() => ({ channel: r, type: "channel" }), [r]),
        { submitting: P } = (0, y.A)({ applicationId: w, context: R, launchingComponentId: j });
    return (0, i.jsxs)("div", {
        className: z.Yi,
        children: [
            (0, i.jsx)(L, { avatarSize: x, guildId: C, channelId: r.id, users: A }),
            (0, i.jsx)(c.E, {
                className: l()(z.m_, { [z.EX]: 0 === f, [z.Y]: 1 === f }),
                variant: "text-sm/normal",
                children:
                    A.length > 1
                        ? D.intl.formatToPlainString(D.t.cpe6CK, { username: v, count: A.length - 1 })
                        : D.intl.formatToPlainString(D.t["7Uuia2"], { username: v }),
            }),
            (0, i.jsx)(c.E, {
                className: l()(z.wx, { [z.EX]: 0 === f, [z.Y]: 1 === f }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: z.Uo,
                children: b
                    ? (0, i.jsx)(u.$, {
                          text: D.intl.string(D.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != E &&
                                      (0, p.A)({
                                          applicationId: E.applicationId,
                                          activityChannelId: r.id,
                                          locationObject: I.location,
                                          analyticsLocations: S,
                                          componentId: j,
                                      });
                          },
                          loading: P,
                          size: 2 === f ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function G(e) {
    let { participant: t, width: n, selected: r, interactible: l, channel: o } = e,
        { analyticsLocations: d } = (0, T.Ay)(C.A.ACTIVITY_TILE),
        { applicationId: c } = t,
        u = (0, x.A)(),
        h = null != u && (0, f.H)(u.location) === o.id && u.applicationId === c,
        [m] = (0, j.A)([c]),
        { url: p } = (0, A.A)({ applicationId: c, names: P, size: 1024 }),
        g = !r && h,
        _ = !h,
        I = !h && !r,
        y = (0, s.bG)([R.A, w.A], () => (0, b.A)({ LayerStore: R.A, PopoutWindowStore: w.A }));
    return (
        a.useEffect(() => {
            if (g && null != u && !y) {
                let e = (0, v.A)(u.location.id, u.applicationId);
                (0, S.cK)(e);
            }
        }, [g, u, y]),
        (0, i.jsx)(T.f5, {
            value: d,
            children: (0, i.jsxs)("div", {
                className: z.kL,
                children: [
                    g && null != u && (0, i.jsx)(E.A, { className: z.pU, embedId: (0, v.A)(u.location.id, c) }),
                    _ && null != m && null != p && "" !== p
                        ? (0, i.jsx)("img", { className: z.j0, alt: m.name, src: p })
                        : null,
                    I &&
                        null != m &&
                        (0, i.jsx)(V, { width: n, channel: o, participants: t.participants, application: m }),
                    l || _ ? null : (0, i.jsx)("div", { className: z.OB }),
                ],
            }),
        })
    );
}
