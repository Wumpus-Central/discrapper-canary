n.d(t, { Ay: () => V, LN: () => F });
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
    g = n(933958),
    f = n(62583),
    A = n(878549),
    E = n(969151),
    p = n(550151),
    m = n(902439),
    I = n(283488),
    S = n(732637),
    C = n(315206),
    _ = n(104171),
    N = n(594007),
    T = n(227042),
    v = n(793574),
    y = n(688810),
    M = n(698141),
    D = n(429913),
    R = n(567249),
    x = n(280450),
    O = n(186111),
    U = n(287809),
    w = n(403362),
    P = n(562153),
    L = n(375708),
    b = n(782660);
let G = ["embedded_background"];
function F(e) {
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
            let t = P.Ay.getName(n, l, e);
            return (0, i.jsx)(
                u.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, a), alt: t, className: b.my }, e.id) },
                e.id,
            );
        },
    });
}
function j(e) {
    let { participants: t, application: n, channel: r, width: u } = e,
        E = u > 400 ? 2 : +(u > 300),
        [m] = u > 400 ? [o._3.SIZE_56, 56] : u > 300 ? [o._3.SIZE_32, 32] : [o._3.SIZE_24, 24],
        I = (0, a.yK)([U.default, x.default], () =>
            Array.from(t)
                .map((e) => ((0, A.S)(e, x.default) ? null : U.default.getUser(e.userId)))
                .filter(w.Vq),
        ),
        S = (0, a.bG)([g.Ay], () =>
            g.Ay.getEmbeddedActivitiesForChannelIncludingHidden(r.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: C } = (0, y.Ay)(),
        _ = (0, h.p)(),
        N = P.Ay.getName(r.getGuildId(), r.id, I?.[0]),
        T = (0, p.vG)({ userId: U.default.getCurrentUser()?.id, channelId: r.id, application: n }) === p.Gy.CAN_JOIN,
        v = r.getGuildId() ?? void 0,
        D = l.useId(),
        R = n.id,
        O = l.useMemo(() => ({ channel: r, type: "channel" }), [r]),
        { submitting: G } = (0, M.A)({ applicationId: R, context: O, launchingComponentId: D });
    return (0, i.jsxs)("div", {
        className: b.Yi,
        children: [
            (0, i.jsx)(F, { avatarSize: m, guildId: v, channelId: r.id, users: I }),
            (0, i.jsx)(d.E, {
                className: s()(b.m_, { [b.EX]: 0 === E, [b.Y]: 1 === E }),
                variant: "text-sm/normal",
                children:
                    I.length > 1
                        ? L.intl.formatToPlainString(L.t.cpe6CK, { username: N, count: I.length - 1 })
                        : L.intl.formatToPlainString(L.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(d.E, {
                className: s()(b.wx, { [b.EX]: 0 === E, [b.Y]: 1 === E }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: b.Uo,
                children: T
                    ? (0, i.jsx)(c.$, {
                          text: L.intl.string(L.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != S &&
                                      (0, f.A)({
                                          applicationId: S.applicationId,
                                          activityChannelId: r.id,
                                          locationObject: _.location,
                                          analyticsLocations: C,
                                          componentId: D,
                                      });
                          },
                          loading: G,
                          size: 2 === E ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function V(e) {
    let { participant: t, width: n, selected: r, interactible: s, channel: o } = e,
        { analyticsLocations: u } = (0, y.Ay)(v.A.ACTIVITY_TILE),
        { applicationId: d } = t,
        c = (0, m.A)(),
        h = null != c && (0, E.H)(c.location) === o.id && c.applicationId === d,
        [g] = (0, D.A)([d]),
        { url: f } = (0, I.A)({ applicationId: d, names: G, size: 1024 }),
        A = !r && h,
        p = !h,
        _ = !h && !r,
        M = (0, a.bG)([O.A, R.A], () => (0, T.A)({ LayerStore: O.A, PopoutWindowStore: R.A }));
    return (
        l.useEffect(() => {
            if (A && null != c && !M) {
                let e = (0, N.A)(c.location.id, c.applicationId);
                (0, C.cK)(e);
            }
        }, [A, c, M]),
        (0, i.jsx)(y.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: b.kL,
                children: [
                    A && null != c && (0, i.jsx)(S.A, { className: b.pU, embedId: (0, N.A)(c.location.id, d) }),
                    p && null != g && null != f && "" !== f
                        ? (0, i.jsx)("img", { className: b.j0, alt: g.name, src: f })
                        : null,
                    _ &&
                        null != g &&
                        (0, i.jsx)(j, { width: n, channel: o, participants: t.participants, application: g }),
                    s || p ? null : (0, i.jsx)("div", { className: b.OB }),
                ],
            }),
        })
    );
}
