t.d(i, { Ay: () => K, LN: () => Z });
var a = t(627968),
    n = t(64700),
    l = t(503698),
    d = t.n(l),
    s = t(17928),
    r = t(990078),
    c = t(778712),
    o = t(834730),
    u = t(821609),
    m = t(212245),
    p = t(933958),
    A = t(62583),
    I = t(878549),
    h = t(969151),
    g = t(550151),
    x = t(902439),
    f = t(283488),
    v = t(732637),
    j = t(315206),
    y = t(104171),
    N = t(594007),
    _ = t(227042),
    E = t(793574),
    S = t(688810),
    C = t(698141),
    b = t(429913),
    k = t(567249),
    U = t(495544),
    G = t(186111),
    T = t(287809),
    w = t(403362),
    z = t(562153),
    L = t(985018),
    P = t(301094);
let Y = ["embedded_background"];
function Z(e) {
    let { avatarSize: i, guildId: t, channelId: n, users: l } = e,
        d = i ?? c._3.SIZE_32,
        s = (0, c.FT)(d);
    return (0, a.jsx)(y.Ay, {
        size: s,
        guildId: t,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === y.mt) return null;
            let i = z.Ay.getName(t, n, e);
            return (0, a.jsx)(
                r.m,
                { text: i, children: (0, a.jsx)("img", { src: e.getAvatarURL(t, s), alt: i, className: P.my }, e.id) },
                e.id,
            );
        },
    });
}
function F(e) {
    let { participants: i, application: t, channel: l, width: r } = e,
        h = r > 400 ? 2 : +(r > 300),
        [x] = r > 400 ? [c._3.SIZE_56, 56] : r > 300 ? [c._3.SIZE_32, 32] : [c._3.SIZE_24, 24],
        f = (0, s.yK)([T.default, U.default], () =>
            Array.from(i)
                .map((e) => ((0, I.S)(e, U.default) ? null : T.default.getUser(e.userId)))
                .filter(w.Vq),
        ),
        v = (0, s.bG)(
            [p.Ay],
            () =>
                p.Ay.getEmbeddedActivitiesForChannel(l.id).find((e) => e.applicationId === t.id) ??
                p.Ay.getEmbeddedActivitiesForStartingChannel(l.id).find((e) => e.applicationId === t.id),
        ),
        { analyticsLocations: j } = (0, S.Ay)(),
        y = (0, m.p)(),
        N = z.Ay.getName(l.getGuildId(), l.id, f?.[0]),
        _ = (0, g.vG)({ userId: T.default.getCurrentUser()?.id, channelId: l.id, application: t }) === g.Gy.CAN_JOIN,
        E = l.getGuildId() ?? void 0,
        b = n.useId(),
        k = t.id,
        G = n.useMemo(() => ({ channel: l, type: "channel" }), [l]),
        { submitting: Y } = (0, C.A)({ applicationId: k, context: G, launchingComponentId: b });
    return (0, a.jsxs)("div", {
        className: P.Yi,
        children: [
            (0, a.jsx)(Z, { avatarSize: x, guildId: E, channelId: l.id, users: f }),
            (0, a.jsx)(o.E, {
                className: d()(P.m_, { [P.EX]: 0 === h, [P.Y]: 1 === h }),
                variant: "text-sm/normal",
                children:
                    f.length > 1
                        ? L.intl.formatToPlainString(L.t.cpe6CK, { username: N, count: f.length - 1 })
                        : L.intl.formatToPlainString(L.t["7Uuia2"], { username: N }),
            }),
            (0, a.jsx)(o.E, {
                className: d()(P.wx, { [P.EX]: 0 === h, [P.Y]: 1 === h }),
                variant: "text-sm/normal",
                children: t.name,
            }),
            (0, a.jsx)("div", {
                className: P.Uo,
                children: _
                    ? (0, a.jsx)(u.$, {
                          text: L.intl.string(L.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != v &&
                                      (0, A.A)({
                                          applicationId: v.applicationId,
                                          activityChannelId: l.id,
                                          locationObject: y.location,
                                          analyticsLocations: j,
                                          componentId: b,
                                      });
                          },
                          loading: Y,
                          size: 2 === h ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function K(e) {
    let { participant: i, width: t, selected: l, interactible: d, channel: r } = e,
        { analyticsLocations: c } = (0, S.Ay)(E.A.ACTIVITY_TILE),
        { applicationId: o } = i,
        u = (0, x.A)(),
        m = null != u && (0, h.H)(u.location) === r.id && u.applicationId === o,
        [p] = (0, b.A)([o]),
        { url: A } = (0, f.A)({ applicationId: o, names: Y, size: 1024 }),
        I = !l && m,
        g = !m,
        y = !m && !l,
        C = (0, s.bG)([G.A, k.A], () => (0, _.A)({ LayerStore: G.A, PopoutWindowStore: k.A }));
    return (
        n.useEffect(() => {
            if (I && null != u && !C) {
                let e = (0, N.A)(u.location.id, u.applicationId);
                (0, j.cK)(e);
            }
        }, [I, u, C]),
        (0, a.jsx)(S.f5, {
            value: c,
            children: (0, a.jsxs)("div", {
                className: P.kL,
                children: [
                    I && null != u && (0, a.jsx)(v.A, { className: P.pU, embedId: (0, N.A)(u.location.id, o) }),
                    g && null != p && null != A && "" !== A
                        ? (0, a.jsx)("img", { className: P.j0, alt: p.name, src: A })
                        : null,
                    y &&
                        null != p &&
                        (0, a.jsx)(F, { width: t, channel: r, participants: i.participants, application: p }),
                    d || g ? null : (0, a.jsx)("div", { className: P.OB }),
                ],
            }),
        })
    );
}
