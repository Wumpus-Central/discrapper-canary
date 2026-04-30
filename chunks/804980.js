"use strict";
n.d(t, { Ay: () => V, LN: () => G });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(990078),
    u = n(778712),
    c = n(834730),
    d = n(821609),
    _ = n(212245),
    f = n(933958),
    h = n(62583),
    p = n(878549),
    E = n(969151),
    m = n(550151),
    g = n(902439),
    A = n(283488),
    I = n(732637),
    T = n(315206),
    S = n(104171),
    N = n(594007),
    y = n(227042),
    C = n(793574),
    v = n(688810),
    O = n(698141),
    R = n(429913),
    b = n(567249),
    D = n(495544),
    L = n(186111),
    w = n(287809),
    M = n(403362),
    P = n(562153),
    x = n(375708),
    U = n(301094);
let k = ["embedded_background"];
function G(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: s } = e,
        a = t ?? u._3.SIZE_32,
        o = (0, u.FT)(a);
    return (0, i.jsx)(S.Ay, {
        size: o,
        guildId: n,
        users: s,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === S.mt) return null;
            let t = P.Ay.getName(n, r, e);
            return (0, i.jsx)(
                l.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, o), alt: t, className: U.my }, e.id) },
                e.id,
            );
        },
    });
}
function F(e) {
    let { participants: t, application: n, channel: s, width: l } = e,
        E = l > 400 ? 2 : +(l > 300),
        [g] = l > 400 ? [u._3.SIZE_56, 56] : l > 300 ? [u._3.SIZE_32, 32] : [u._3.SIZE_24, 24],
        A = (0, o.yK)([w.default, D.default], () =>
            Array.from(t)
                .map((e) => ((0, p.S)(e, D.default) ? null : w.default.getUser(e.userId)))
                .filter(M.Vq),
        ),
        I = (0, o.bG)(
            [f.Ay],
            () =>
                f.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => e.applicationId === n.id) ??
                f.Ay.getEmbeddedActivitiesForStartingChannel(s.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: T } = (0, v.Ay)(),
        S = (0, _.p)(),
        N = P.Ay.getName(s.getGuildId(), s.id, A?.[0]),
        y = (0, m.vG)({ userId: w.default.getCurrentUser()?.id, channelId: s.id, application: n }) === m.Gy.CAN_JOIN,
        C = s.getGuildId() ?? void 0,
        R = r.useId(),
        b = n.id,
        L = r.useMemo(() => ({ channel: s, type: "channel" }), [s]),
        { submitting: k } = (0, O.A)({ applicationId: b, context: L, launchingComponentId: R });
    return (0, i.jsxs)("div", {
        className: U.Yi,
        children: [
            (0, i.jsx)(G, { avatarSize: g, guildId: C, channelId: s.id, users: A }),
            (0, i.jsx)(c.E, {
                className: a()(U.m_, { [U.EX]: 0 === E, [U.Y]: 1 === E }),
                variant: "text-sm/normal",
                children:
                    A.length > 1
                        ? x.intl.formatToPlainString(x.t.cpe6CK, { username: N, count: A.length - 1 })
                        : x.intl.formatToPlainString(x.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(c.E, {
                className: a()(U.wx, { [U.EX]: 0 === E, [U.Y]: 1 === E }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: U.Uo,
                children: y
                    ? (0, i.jsx)(d.$, {
                          text: x.intl.string(x.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != I &&
                                      (0, h.A)({
                                          applicationId: I.applicationId,
                                          activityChannelId: s.id,
                                          locationObject: S.location,
                                          analyticsLocations: T,
                                          componentId: R,
                                      });
                          },
                          loading: k,
                          size: 2 === E ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function V(e) {
    let { participant: t, width: n, selected: s, interactible: a, channel: l } = e,
        { analyticsLocations: u } = (0, v.Ay)(C.A.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, g.A)(),
        _ = null != d && (0, E.H)(d.location) === l.id && d.applicationId === c,
        [f] = (0, R.A)([c]),
        { url: h } = (0, A.A)({ applicationId: c, names: k, size: 1024 }),
        p = !s && _,
        m = !_,
        S = !_ && !s,
        O = (0, o.bG)([L.A, b.A], () => (0, y.A)({ LayerStore: L.A, PopoutWindowStore: b.A }));
    return (
        r.useEffect(() => {
            if (p && null != d && !O) {
                let e = (0, N.A)(d.location.id, d.applicationId);
                (0, T.cK)(e);
            }
        }, [p, d, O]),
        (0, i.jsx)(v.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: U.kL,
                children: [
                    p && null != d && (0, i.jsx)(I.A, { className: U.pU, embedId: (0, N.A)(d.location.id, c) }),
                    m && null != f && null != h && "" !== h
                        ? (0, i.jsx)("img", { className: U.j0, alt: f.name, src: h })
                        : null,
                    S &&
                        null != f &&
                        (0, i.jsx)(F, { width: n, channel: l, participants: t.participants, application: f }),
                    a || m ? null : (0, i.jsx)("div", { className: U.OB }),
                ],
            }),
        })
    );
}
