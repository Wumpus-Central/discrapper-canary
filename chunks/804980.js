n.d(t, { Ay: () => U, LN: () => G });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(990078),
    c = n(778712),
    d = n(834730),
    u = n(821609),
    m = n(212245),
    A = n(933958),
    h = n(447031),
    x = n(878549),
    p = n(969151),
    g = n(550151),
    N = n(902439),
    f = n(283488),
    _ = n(732637),
    I = n(315206),
    v = n(104171),
    j = n(594007),
    C = n(227042),
    y = n(793574),
    S = n(688810),
    E = n(698141),
    T = n(429913),
    b = n(87001),
    P = n(961350),
    L = n(186111),
    R = n(287809),
    D = n(403362),
    O = n(562153),
    k = n(985018),
    F = n(301094);
let w = ["embedded_background"];
function G(e) {
    let { avatarSize: t, guildId: n, channelId: s, users: l } = e,
        a = t ?? c._3.SIZE_32,
        r = (0, c.FT)(a);
    return (0, i.jsx)(v.Ay, {
        size: r,
        guildId: n,
        users: l,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === v.mt) return null;
            let t = O.Ay.getName(n, s, e);
            return (0, i.jsx)(
                o.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, r), alt: t, className: F.my }, e.id) },
                e.id,
            );
        },
    });
}
function M(e) {
    let { participants: t, application: n, channel: l, width: o } = e,
        p = o > 400 ? 2 : +(o > 300),
        [N] = o > 400 ? [c._3.SIZE_56, 56] : o > 300 ? [c._3.SIZE_32, 32] : [c._3.SIZE_24, 24],
        f = (0, r.yK)([R.default, P.default], () =>
            Array.from(t)
                .map((e) => ((0, x.S)(e, P.default) ? null : R.default.getUser(e.userId)))
                .filter(D.Vq),
        ),
        _ = (0, r.bG)(
            [A.Ay],
            () =>
                A.Ay.getEmbeddedActivitiesForChannel(l.id).find((e) => e.applicationId === n.id) ??
                A.Ay.getEmbeddedActivitiesForStartingChannel(l.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: I } = (0, S.Ay)(),
        v = (0, m.p)(),
        j = O.Ay.getName(l.getGuildId(), l.id, f?.[0]),
        C = (0, g.vG)({ userId: R.default.getCurrentUser()?.id, channelId: l.id, application: n }) === g.Gy.CAN_JOIN,
        y = l.getGuildId() ?? void 0,
        T = s.useId(),
        b = n.id,
        L = s.useMemo(() => ({ channel: l, type: "channel" }), [l]),
        { submitting: w } = (0, E.A)({ applicationId: b, context: L, launchingComponentId: T });
    return (0, i.jsxs)("div", {
        className: F.Yi,
        children: [
            (0, i.jsx)(G, { avatarSize: N, guildId: y, channelId: l.id, users: f }),
            (0, i.jsx)(d.E, {
                className: a()(F.m_, { [F.EX]: 0 === p, [F.Y]: 1 === p }),
                variant: "text-sm/normal",
                children:
                    f.length > 1
                        ? k.intl.formatToPlainString(k.t.cpe6CK, { username: j, count: f.length - 1 })
                        : k.intl.formatToPlainString(k.t["7Uuia2"], { username: j }),
            }),
            (0, i.jsx)(d.E, {
                className: a()(F.wx, { [F.EX]: 0 === p, [F.Y]: 1 === p }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: F.Uo,
                children: C
                    ? (0, i.jsx)(u.$, {
                          text: k.intl.string(k.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != _ &&
                                      (0, h.A)({
                                          applicationId: _.applicationId,
                                          activityChannelId: l.id,
                                          locationObject: v.location,
                                          analyticsLocations: I,
                                          componentId: T,
                                      });
                          },
                          loading: w,
                          size: 2 === p ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function U(e) {
    let { participant: t, width: n, selected: l, interactible: a, channel: o } = e,
        { analyticsLocations: c } = (0, S.Ay)(y.A.ACTIVITY_TILE),
        { applicationId: d } = t,
        u = (0, N.A)(),
        m = null != u && (0, p.H)(u.location) === o.id && u.applicationId === d,
        [A] = (0, T.A)([d]),
        { url: h } = (0, f.A)({ applicationId: d, names: w, size: 1024 }),
        x = !l && m,
        g = !m,
        v = !m && !l,
        E = (0, r.bG)([L.A, b.A], () => (0, C.A)({ LayerStore: L.A, PopoutWindowStore: b.A }));
    return (
        s.useEffect(() => {
            if (x && null != u && !E) {
                let e = (0, j.A)(u.location.id, u.applicationId);
                (0, I.cK)(e);
            }
        }, [x, u, E]),
        (0, i.jsx)(S.f5, {
            value: c,
            children: (0, i.jsxs)("div", {
                className: F.kL,
                children: [
                    x && null != u && (0, i.jsx)(_.A, { className: F.pU, embedId: (0, j.A)(u.location.id, d) }),
                    g && null != A && null != h && "" !== h
                        ? (0, i.jsx)("img", { className: F.j0, alt: A.name, src: h })
                        : null,
                    v &&
                        null != A &&
                        (0, i.jsx)(M, { width: n, channel: o, participants: t.participants, application: A }),
                    a || g ? null : (0, i.jsx)("div", { className: F.OB }),
                ],
            }),
        })
    );
}
