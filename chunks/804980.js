"use strict";
n.d(t, { Ay: () => B, LN: () => G });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(17928),
    o = n(990078),
    d = n(778712),
    c = n(834730),
    u = n(821609),
    _ = n(212245),
    h = n(933958),
    f = n(62583),
    p = n(878549),
    A = n(969151),
    g = n(550151),
    m = n(902439),
    v = n(283488),
    y = n(732637),
    E = n(315206),
    b = n(104171),
    I = n(594007),
    w = n(227042),
    x = n(793574),
    C = n(688810),
    T = n(698141),
    N = n(429913),
    O = n(567249),
    L = n(495544),
    S = n(186111),
    k = n(287809),
    D = n(403362),
    R = n(562153),
    P = n(985018),
    j = n(301094);
let M = ["embedded_background"];
function G(e) {
    let { avatarSize: t, guildId: n, channelId: i, users: a } = e,
        l = t ?? d._3.SIZE_32,
        s = (0, d.FT)(l);
    return (0, r.jsx)(b.Ay, {
        size: s,
        guildId: n,
        users: a,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === b.mt) return null;
            let t = R.Ay.getName(n, i, e);
            return (0, r.jsx)(
                o.m,
                { text: t, children: (0, r.jsx)("img", { src: e.getAvatarURL(n, s), alt: t, className: j.my }, e.id) },
                e.id,
            );
        },
    });
}
function U(e) {
    let { participants: t, application: n, channel: a, width: o } = e,
        A = o > 400 ? 2 : +(o > 300),
        [m] = o > 400 ? [d._3.SIZE_56, 56] : o > 300 ? [d._3.SIZE_32, 32] : [d._3.SIZE_24, 24],
        v = (0, s.yK)([k.default, L.default], () =>
            Array.from(t)
                .map((e) => ((0, p.S)(e, L.default) ? null : k.default.getUser(e.userId)))
                .filter(D.Vq),
        ),
        y = (0, s.bG)(
            [h.Ay],
            () =>
                h.Ay.getEmbeddedActivitiesForChannel(a.id).find((e) => e.applicationId === n.id) ??
                h.Ay.getEmbeddedActivitiesForStartingChannel(a.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: E } = (0, C.Ay)(),
        b = (0, _.p)(),
        I = R.Ay.getName(a.getGuildId(), a.id, v?.[0]),
        w = (0, g.vG)({ userId: k.default.getCurrentUser()?.id, channelId: a.id, application: n }) === g.Gy.CAN_JOIN,
        x = a.getGuildId() ?? void 0,
        N = i.useId(),
        O = n.id,
        S = i.useMemo(() => ({ channel: a, type: "channel" }), [a]),
        { submitting: M } = (0, T.A)({ applicationId: O, context: S, launchingComponentId: N });
    return (0, r.jsxs)("div", {
        className: j.Yi,
        children: [
            (0, r.jsx)(G, { avatarSize: m, guildId: x, channelId: a.id, users: v }),
            (0, r.jsx)(c.E, {
                className: l()(j.m_, { [j.EX]: 0 === A, [j.Y]: 1 === A }),
                variant: "text-sm/normal",
                children:
                    v.length > 1
                        ? P.intl.formatToPlainString(P.t.cpe6CK, { username: I, count: v.length - 1 })
                        : P.intl.formatToPlainString(P.t["7Uuia2"], { username: I }),
            }),
            (0, r.jsx)(c.E, {
                className: l()(j.wx, { [j.EX]: 0 === A, [j.Y]: 1 === A }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, r.jsx)("div", {
                className: j.Uo,
                children: w
                    ? (0, r.jsx)(u.$, {
                          text: P.intl.string(P.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != y &&
                                      (0, f.A)({
                                          applicationId: y.applicationId,
                                          activityChannelId: a.id,
                                          locationObject: b.location,
                                          analyticsLocations: E,
                                          componentId: N,
                                      });
                          },
                          loading: M,
                          size: 2 === A ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function B(e) {
    let { participant: t, width: n, selected: a, interactible: l, channel: o } = e,
        { analyticsLocations: d } = (0, C.Ay)(x.A.ACTIVITY_TILE),
        { applicationId: c } = t,
        u = (0, m.A)(),
        _ = null != u && (0, A.H)(u.location) === o.id && u.applicationId === c,
        [h] = (0, N.A)([c]),
        { url: f } = (0, v.A)({ applicationId: c, names: M, size: 1024 }),
        p = !a && _,
        g = !_,
        b = !_ && !a,
        T = (0, s.bG)([S.A, O.A], () => (0, w.A)({ LayerStore: S.A, PopoutWindowStore: O.A }));
    return (
        i.useEffect(() => {
            if (p && null != u && !T) {
                let e = (0, I.A)(u.location.id, u.applicationId);
                (0, E.cK)(e);
            }
        }, [p, u, T]),
        (0, r.jsx)(C.f5, {
            value: d,
            children: (0, r.jsxs)("div", {
                className: j.kL,
                children: [
                    p && null != u && (0, r.jsx)(y.A, { className: j.pU, embedId: (0, I.A)(u.location.id, c) }),
                    g && null != h && null != f && "" !== f
                        ? (0, r.jsx)("img", { className: j.j0, alt: h.name, src: f })
                        : null,
                    b &&
                        null != h &&
                        (0, r.jsx)(U, { width: n, channel: o, participants: t.participants, application: h }),
                    l || g ? null : (0, r.jsx)("div", { className: j.OB }),
                ],
            }),
        })
    );
}
