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
    h = n(933958),
    f = n(62583),
    p = n(878549),
    E = n(969151),
    m = n(550151),
    g = n(902439),
    A = n(283488),
    I = n(732637),
    T = n(315206),
    S = n(104171),
    y = n(594007),
    C = n(227042),
    N = n(793574),
    v = n(688810),
    R = n(698141),
    O = n(429913),
    b = n(567249),
    D = n(495544),
    L = n(186111),
    w = n(287809),
    M = n(403362),
    P = n(562153),
    x = n(375708),
    k = n(301094);
let U = ["embedded_background"];
function G(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: s } = e,
        a = t ?? u._3.SIZE_32,
        o = (0, u.FT)(a);
    return (0, i.jsx)(S.Ay, {
        size: o,
        guildId: n,
        users: s,
        max: 4,
        renderUser: function (e) {
            if (null == e || e === S.mt) return null;
            let t = P.Ay.getName(n, r, e);
            return (0, i.jsx)(
                l.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, o), alt: t, className: k.my }, e.id) },
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
        I = (0, o.bG)([h.Ay], () =>
            h.Ay.getEmbeddedActivitiesForChannelIncludingHidden(s.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: T } = (0, v.Ay)(),
        S = (0, _.p)(),
        y = P.Ay.getName(s.getGuildId(), s.id, A?.[0]),
        C = (0, m.vG)({ userId: w.default.getCurrentUser()?.id, channelId: s.id, application: n }) === m.Gy.CAN_JOIN,
        N = s.getGuildId() ?? void 0,
        O = r.useId(),
        b = n.id,
        L = r.useMemo(() => ({ channel: s, type: "channel" }), [s]),
        { submitting: U } = (0, R.A)({ applicationId: b, context: L, launchingComponentId: O });
    return (0, i.jsxs)("div", {
        className: k.Yi,
        children: [
            (0, i.jsx)(G, { avatarSize: g, guildId: N, channelId: s.id, users: A }),
            (0, i.jsx)(c.E, {
                className: a()(k.m_, { [k.EX]: 0 === E, [k.Y]: 1 === E }),
                variant: "text-sm/normal",
                children:
                    A.length > 1
                        ? x.intl.formatToPlainString(x.t.cpe6CK, { username: y, count: A.length - 1 })
                        : x.intl.formatToPlainString(x.t["7Uuia2"], { username: y }),
            }),
            (0, i.jsx)(c.E, {
                className: a()(k.wx, { [k.EX]: 0 === E, [k.Y]: 1 === E }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: k.Uo,
                children: C
                    ? (0, i.jsx)(d.$, {
                          text: x.intl.string(x.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != I &&
                                      (0, f.A)({
                                          applicationId: I.applicationId,
                                          activityChannelId: s.id,
                                          locationObject: S.location,
                                          analyticsLocations: T,
                                          componentId: O,
                                      });
                          },
                          loading: U,
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
        { analyticsLocations: u } = (0, v.Ay)(N.A.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, g.A)(),
        _ = null != d && (0, E.H)(d.location) === l.id && d.applicationId === c,
        [h] = (0, O.A)([c]),
        { url: f } = (0, A.A)({ applicationId: c, names: U, size: 1024 }),
        p = !s && _,
        m = !_,
        S = !_ && !s,
        R = (0, o.bG)([L.A, b.A], () => (0, C.A)({ LayerStore: L.A, PopoutWindowStore: b.A }));
    return (
        r.useEffect(() => {
            if (p && null != d && !R) {
                let e = (0, y.A)(d.location.id, d.applicationId);
                (0, T.cK)(e);
            }
        }, [p, d, R]),
        (0, i.jsx)(v.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: k.kL,
                children: [
                    p && null != d && (0, i.jsx)(I.A, { className: k.pU, embedId: (0, y.A)(d.location.id, c) }),
                    m && null != h && null != f && "" !== f
                        ? (0, i.jsx)("img", { className: k.j0, alt: h.name, src: f })
                        : null,
                    S &&
                        null != h &&
                        (0, i.jsx)(F, { width: n, channel: l, participants: t.participants, application: h }),
                    a || m ? null : (0, i.jsx)("div", { className: k.OB }),
                ],
            }),
        })
    );
}
