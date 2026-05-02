n.d(t, { Ay: () => V, LN: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(990078),
    u = n(778712),
    d = n(834730),
    c = n(821609),
    h = n(212245),
    g = n(933958),
    A = n(62583),
    f = n(878549),
    E = n(969151),
    I = n(550151),
    S = n(902439),
    m = n(283488),
    p = n(732637),
    C = n(315206),
    _ = n(104171),
    N = n(594007),
    T = n(227042),
    v = n(793574),
    M = n(688810),
    y = n(698141),
    D = n(429913),
    x = n(567249),
    R = n(495544),
    O = n(186111),
    U = n(287809),
    L = n(403362),
    w = n(562153),
    P = n(375708),
    G = n(301094);
let j = ["embedded_background"];
function b(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: s } = e,
        r = t ?? u._3.SIZE_32,
        a = (0, u.FT)(r);
    return (0, i.jsx)(_.Ay, {
        size: a,
        guildId: n,
        users: s,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === _.mt) return null;
            let t = w.Ay.getName(n, l, e);
            return (0, i.jsx)(
                o.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, a), alt: t, className: G.my }, e.id) },
                e.id,
            );
        },
    });
}
function F(e) {
    let { participants: t, application: n, channel: s, width: o } = e,
        E = o > 400 ? 2 : +(o > 300),
        [S] = o > 400 ? [u._3.SIZE_56, 56] : o > 300 ? [u._3.SIZE_32, 32] : [u._3.SIZE_24, 24],
        m = (0, a.yK)([U.default, R.default], () =>
            Array.from(t)
                .map((e) => ((0, f.S)(e, R.default) ? null : U.default.getUser(e.userId)))
                .filter(L.Vq),
        ),
        p = (0, a.bG)(
            [g.Ay],
            () =>
                g.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => e.applicationId === n.id) ??
                g.Ay.getEmbeddedActivitiesForStartingChannel(s.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: C } = (0, M.Ay)(),
        _ = (0, h.p)(),
        N = w.Ay.getName(s.getGuildId(), s.id, m?.[0]),
        T = (0, I.vG)({ userId: U.default.getCurrentUser()?.id, channelId: s.id, application: n }) === I.Gy.CAN_JOIN,
        v = s.getGuildId() ?? void 0,
        D = l.useId(),
        x = n.id,
        O = l.useMemo(() => ({ channel: s, type: "channel" }), [s]),
        { submitting: j } = (0, y.A)({ applicationId: x, context: O, launchingComponentId: D });
    return (0, i.jsxs)("div", {
        className: G.Yi,
        children: [
            (0, i.jsx)(b, { avatarSize: S, guildId: v, channelId: s.id, users: m }),
            (0, i.jsx)(d.E, {
                className: r()(G.m_, { [G.EX]: 0 === E, [G.Y]: 1 === E }),
                variant: "text-sm/normal",
                children:
                    m.length > 1
                        ? P.intl.formatToPlainString(P.t.cpe6CK, { username: N, count: m.length - 1 })
                        : P.intl.formatToPlainString(P.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(d.E, {
                className: r()(G.wx, { [G.EX]: 0 === E, [G.Y]: 1 === E }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: G.Uo,
                children: T
                    ? (0, i.jsx)(c.$, {
                          text: P.intl.string(P.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != p &&
                                      (0, A.A)({
                                          applicationId: p.applicationId,
                                          activityChannelId: s.id,
                                          locationObject: _.location,
                                          analyticsLocations: C,
                                          componentId: D,
                                      });
                          },
                          loading: j,
                          size: 2 === E ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function V(e) {
    let { participant: t, width: n, selected: s, interactible: r, channel: o } = e,
        { analyticsLocations: u } = (0, M.Ay)(v.A.ACTIVITY_TILE),
        { applicationId: d } = t,
        c = (0, S.A)(),
        h = null != c && (0, E.H)(c.location) === o.id && c.applicationId === d,
        [g] = (0, D.A)([d]),
        { url: A } = (0, m.A)({ applicationId: d, names: j, size: 1024 }),
        f = !s && h,
        I = !h,
        _ = !h && !s,
        y = (0, a.bG)([O.A, x.A], () => (0, T.A)({ LayerStore: O.A, PopoutWindowStore: x.A }));
    return (
        l.useEffect(() => {
            if (f && null != c && !y) {
                let e = (0, N.A)(c.location.id, c.applicationId);
                (0, C.cK)(e);
            }
        }, [f, c, y]),
        (0, i.jsx)(M.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: G.kL,
                children: [
                    f && null != c && (0, i.jsx)(p.A, { className: G.pU, embedId: (0, N.A)(c.location.id, d) }),
                    I && null != g && null != A && "" !== A
                        ? (0, i.jsx)("img", { className: G.j0, alt: g.name, src: A })
                        : null,
                    _ &&
                        null != g &&
                        (0, i.jsx)(F, { width: n, channel: o, participants: t.participants, application: g }),
                    r || I ? null : (0, i.jsx)("div", { className: G.OB }),
                ],
            }),
        })
    );
}
