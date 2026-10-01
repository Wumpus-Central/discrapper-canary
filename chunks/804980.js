n.d(t, { Ay: () => G, LN: () => V });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(778712),
    u = n(866665),
    d = n(834730),
    c = n(821609),
    h = n(212245),
    f = n(933958),
    g = n(62583),
    C = n(878549),
    A = n(969151),
    p = n(550151),
    m = n(902439),
    E = n(283488),
    I = n(732637),
    S = n(315206),
    _ = n(104171),
    N = n(594007),
    T = n(227042),
    M = n(793574),
    v = n(688810),
    y = n(698141),
    L = n(429913),
    x = n(567249),
    R = n(280450),
    D = n(186111),
    O = n(287809),
    w = n(403362),
    U = n(562153),
    P = n(375708),
    b = n(782660);
let j = ["embedded_background"];
function V(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: r } = e,
        s = t ?? o._3.SIZE_32,
        a = (0, o.FT)(s);
    return (0, i.jsx)(_.Ay, {
        size: a,
        guildId: n,
        users: r,
        max: 4,
        renderUser: function (e) {
            if (null == e || e === _.mt) return null;
            let t = U.Ay.getName(n, l, e);
            return (0, i.jsx)(
                u.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, a), alt: t, className: b.my }, e.id) },
                e.id,
            );
        },
    });
}
function F(e) {
    let { participants: t, application: n, channel: r, width: u } = e,
        A = u > 400 ? 2 : +(u > 300),
        [m] = u > 400 ? [o._3.SIZE_56, 56] : u > 300 ? [o._3.SIZE_32, 32] : [o._3.SIZE_24, 24],
        E = (0, a.yK)([O.default, R.default], () =>
            Array.from(t)
                .map((e) => ((0, C.S)(e, R.default) ? null : O.default.getUser(e.userId)))
                .filter(w.Vq),
        ),
        I = (0, a.bG)([f.Ay], () =>
            f.Ay.getEmbeddedActivitiesForChannelIncludingHidden(r.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: S } = (0, v.Ay)(),
        _ = (0, h.p)(),
        N = U.Ay.getName(r.getGuildId(), r.id, E?.[0]),
        T = (0, p.vG)({ userId: O.default.getCurrentUser()?.id, channelId: r.id, application: n }) === p.Gy.CAN_JOIN,
        M = r.getGuildId() ?? void 0,
        L = l.useId(),
        x = n.id,
        D = l.useMemo(() => ({ channel: r, type: "channel" }), [r]),
        { submitting: j } = (0, y.A)({ applicationId: x, context: D, launchingComponentId: L });
    return (0, i.jsxs)("div", {
        className: b.Yi,
        children: [
            (0, i.jsx)(V, { avatarSize: m, guildId: M, channelId: r.id, users: E }),
            (0, i.jsx)(d.E, {
                className: s()(b.m_, { [b.EX]: 0 === A, [b.Y]: 1 === A }),
                variant: "text-sm/normal",
                children:
                    E.length > 1
                        ? P.intl.formatToPlainString(P.t.cpe6CK, { username: N, count: E.length - 1 })
                        : P.intl.formatToPlainString(P.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(d.E, {
                className: s()(b.wx, { [b.EX]: 0 === A, [b.Y]: 1 === A }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: b.Uo,
                children: T
                    ? (0, i.jsx)(c.$, {
                          text: P.intl.string(P.t["4i2vj+"]),
                          onClick: function (e) {
                              (e.stopPropagation(),
                                  null != I &&
                                      (0, g.A)({
                                          applicationId: I.applicationId,
                                          activityChannelId: r.id,
                                          locationObject: _.location,
                                          analyticsLocations: S,
                                          componentId: L,
                                      }));
                          },
                          loading: j,
                          size: 2 === A ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function G(e) {
    let { participant: t, width: n, selected: r, interactible: s, channel: o } = e,
        { analyticsLocations: u } = (0, v.Ay)(M.A.ACTIVITY_TILE),
        { applicationId: d } = t,
        c = (0, m.A)(),
        h = null != c && (0, A.H)(c.location) === o.id && c.applicationId === d,
        [f] = (0, L.A)([d]),
        { url: g } = (0, E.A)({ applicationId: d, names: j, size: 1024 }),
        C = !r && h,
        p = !h,
        _ = !h && !r,
        y = (0, a.bG)([D.A, x.A], () => (0, T.A)({ LayerStore: D.A, PopoutWindowStore: x.A }));
    return (
        l.useEffect(() => {
            if (C && null != c && !y) {
                let e = (0, N.A)(c.location.id, c.applicationId);
                (0, S.cK)(e);
            }
        }, [C, c, y]),
        (0, i.jsx)(v.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: b.kL,
                children: [
                    C && null != c && (0, i.jsx)(I.A, { className: b.pU, embedId: (0, N.A)(c.location.id, d) }),
                    p && null != f && null != g && "" !== g
                        ? (0, i.jsx)("img", { className: b.j0, alt: f.name, src: g })
                        : null,
                    _ &&
                        null != f &&
                        (0, i.jsx)(F, { width: n, channel: o, participants: t.participants, application: f }),
                    s || p ? null : (0, i.jsx)("div", { className: b.OB }),
                ],
            }),
        })
    );
}
