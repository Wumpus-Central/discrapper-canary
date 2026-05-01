n.d(t, { Ay: () => F, LN: () => k });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(990078),
    c = n(778712),
    d = n(834730),
    u = n(821609),
    h = n(212245),
    g = n(933958),
    p = n(62583),
    m = n(878549),
    x = n(969151),
    N = n(550151),
    f = n(902439),
    C = n(283488),
    A = n(732637),
    E = n(315206),
    v = n(104171),
    _ = n(594007),
    I = n(227042),
    T = n(793574),
    S = n(688810),
    R = n(698141),
    j = n(429913),
    y = n(567249),
    D = n(495544),
    O = n(186111),
    P = n(287809),
    b = n(403362),
    M = n(562153),
    w = n(985018),
    L = n(301094);
let U = ["embedded_background"];
function k(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: s } = e,
        r = t ?? c._3.SIZE_32,
        a = (0, c.FT)(r);
    return (0, l.jsx)(v.Ay, {
        size: a,
        guildId: n,
        users: s,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === v.mt) return null;
            let t = M.Ay.getName(n, i, e);
            return (0, l.jsx)(
                o.m,
                { text: t, children: (0, l.jsx)("img", { src: e.getAvatarURL(n, a), alt: t, className: L.my }, e.id) },
                e.id,
            );
        },
    });
}
function G(e) {
    let { participants: t, application: n, channel: s, width: o } = e,
        x = o > 400 ? 2 : +(o > 300),
        [f] = o > 400 ? [c._3.SIZE_56, 56] : o > 300 ? [c._3.SIZE_32, 32] : [c._3.SIZE_24, 24],
        C = (0, a.yK)([P.default, D.default], () =>
            Array.from(t)
                .map((e) => ((0, m.S)(e, D.default) ? null : P.default.getUser(e.userId)))
                .filter(b.Vq),
        ),
        A = (0, a.bG)(
            [g.Ay],
            () =>
                g.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => e.applicationId === n.id) ??
                g.Ay.getEmbeddedActivitiesForStartingChannel(s.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: E } = (0, S.Ay)(),
        v = (0, h.p)(),
        _ = M.Ay.getName(s.getGuildId(), s.id, C?.[0]),
        I = (0, N.vG)({ userId: P.default.getCurrentUser()?.id, channelId: s.id, application: n }) === N.Gy.CAN_JOIN,
        T = s.getGuildId() ?? void 0,
        j = i.useId(),
        y = n.id,
        O = i.useMemo(() => ({ channel: s, type: "channel" }), [s]),
        { submitting: U } = (0, R.A)({ applicationId: y, context: O, launchingComponentId: j });
    return (0, l.jsxs)("div", {
        className: L.Yi,
        children: [
            (0, l.jsx)(k, { avatarSize: f, guildId: T, channelId: s.id, users: C }),
            (0, l.jsx)(d.E, {
                className: r()(L.m_, { [L.EX]: 0 === x, [L.Y]: 1 === x }),
                variant: "text-sm/normal",
                children:
                    C.length > 1
                        ? w.intl.formatToPlainString(w.t.cpe6CK, { username: _, count: C.length - 1 })
                        : w.intl.formatToPlainString(w.t["7Uuia2"], { username: _ }),
            }),
            (0, l.jsx)(d.E, {
                className: r()(L.wx, { [L.EX]: 0 === x, [L.Y]: 1 === x }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, l.jsx)("div", {
                className: L.Uo,
                children: I
                    ? (0, l.jsx)(u.$, {
                          text: w.intl.string(w.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != A &&
                                      (0, p.A)({
                                          applicationId: A.applicationId,
                                          activityChannelId: s.id,
                                          locationObject: v.location,
                                          analyticsLocations: E,
                                          componentId: j,
                                      });
                          },
                          loading: U,
                          size: 2 === x ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function F(e) {
    let { participant: t, width: n, selected: s, interactible: r, channel: o } = e,
        { analyticsLocations: c } = (0, S.Ay)(T.A.ACTIVITY_TILE),
        { applicationId: d } = t,
        u = (0, f.A)(),
        h = null != u && (0, x.H)(u.location) === o.id && u.applicationId === d,
        [g] = (0, j.A)([d]),
        { url: p } = (0, C.A)({ applicationId: d, names: U, size: 1024 }),
        m = !s && h,
        N = !h,
        v = !h && !s,
        R = (0, a.bG)([O.A, y.A], () => (0, I.A)({ LayerStore: O.A, PopoutWindowStore: y.A }));
    return (
        i.useEffect(() => {
            if (m && null != u && !R) {
                let e = (0, _.A)(u.location.id, u.applicationId);
                (0, E.cK)(e);
            }
        }, [m, u, R]),
        (0, l.jsx)(S.f5, {
            value: c,
            children: (0, l.jsxs)("div", {
                className: L.kL,
                children: [
                    m && null != u && (0, l.jsx)(A.A, { className: L.pU, embedId: (0, _.A)(u.location.id, d) }),
                    N && null != g && null != p && "" !== p
                        ? (0, l.jsx)("img", { className: L.j0, alt: g.name, src: p })
                        : null,
                    v &&
                        null != g &&
                        (0, l.jsx)(G, { width: n, channel: o, participants: t.participants, application: g }),
                    r || N ? null : (0, l.jsx)("div", { className: L.OB }),
                ],
            }),
        })
    );
}
