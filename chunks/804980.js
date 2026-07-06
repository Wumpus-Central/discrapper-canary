"use strict";
n.d(t, { Ay: () => F, LN: () => G });
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
    E = n(878549),
    p = n(969151),
    m = n(550151),
    g = n(902439),
    A = n(283488),
    I = n(732637),
    T = n(315206),
    S = n(104171),
    N = n(594007),
    C = n(227042),
    y = n(793574),
    O = n(688810),
    R = n(698141),
    v = n(429913),
    b = n(567249),
    L = n(280450),
    D = n(186111),
    w = n(287809),
    P = n(403362),
    M = n(562153),
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
        renderUser: function (e) {
            if (null == e || e === S.mt) return null;
            let t = M.Ay.getName(n, r, e);
            return (0, i.jsx)(
                l.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, o), alt: t, className: U.my }, e.id) },
                e.id,
            );
        },
    });
}
function V(e) {
    let { participants: t, application: n, channel: s, width: l } = e,
        p = l > 400 ? 2 : +(l > 300),
        [g] = l > 400 ? [u._3.SIZE_56, 56] : l > 300 ? [u._3.SIZE_32, 32] : [u._3.SIZE_24, 24],
        A = (0, o.yK)([w.default, L.default], () =>
            Array.from(t)
                .map((e) => ((0, E.S)(e, L.default) ? null : w.default.getUser(e.userId)))
                .filter(P.Vq),
        ),
        I = (0, o.bG)([h.Ay], () =>
            h.Ay.getEmbeddedActivitiesForChannelIncludingHidden(s.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: T } = (0, O.Ay)(),
        S = (0, _.p)(),
        N = M.Ay.getName(s.getGuildId(), s.id, A?.[0]),
        C = (0, m.vG)({ userId: w.default.getCurrentUser()?.id, channelId: s.id, application: n }) === m.Gy.CAN_JOIN,
        y = s.getGuildId() ?? void 0,
        v = r.useId(),
        b = n.id,
        D = r.useMemo(() => ({ channel: s, type: "channel" }), [s]),
        { submitting: k } = (0, R.A)({ applicationId: b, context: D, launchingComponentId: v });
    return (0, i.jsxs)("div", {
        className: U.Yi,
        children: [
            (0, i.jsx)(G, { avatarSize: g, guildId: y, channelId: s.id, users: A }),
            (0, i.jsx)(c.E, {
                className: a()(U.m_, { [U.EX]: 0 === p, [U.Y]: 1 === p }),
                variant: "text-sm/normal",
                children:
                    A.length > 1
                        ? x.intl.formatToPlainString(x.t.cpe6CK, { username: N, count: A.length - 1 })
                        : x.intl.formatToPlainString(x.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(c.E, {
                className: a()(U.wx, { [U.EX]: 0 === p, [U.Y]: 1 === p }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: U.Uo,
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
                                          componentId: v,
                                      });
                          },
                          loading: k,
                          size: 2 === p ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function F(e) {
    let { participant: t, width: n, selected: s, interactible: a, channel: l } = e,
        { analyticsLocations: u } = (0, O.Ay)(y.A.ACTIVITY_TILE),
        { applicationId: c } = t,
        d = (0, g.A)(),
        _ = null != d && (0, p.H)(d.location) === l.id && d.applicationId === c,
        [h] = (0, v.A)([c]),
        { url: f } = (0, A.A)({ applicationId: c, names: k, size: 1024 }),
        E = !s && _,
        m = !_,
        S = !_ && !s,
        R = (0, o.bG)([D.A, b.A], () => (0, C.A)({ LayerStore: D.A, PopoutWindowStore: b.A }));
    return (
        r.useEffect(() => {
            if (E && null != d && !R) {
                let e = (0, N.A)(d.location.id, d.applicationId);
                (0, T.cK)(e);
            }
        }, [E, d, R]),
        (0, i.jsx)(O.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: U.kL,
                children: [
                    E && null != d && (0, i.jsx)(I.A, { className: U.pU, embedId: (0, N.A)(d.location.id, c) }),
                    m && null != h && null != f && "" !== f
                        ? (0, i.jsx)("img", { className: U.j0, alt: h.name, src: f })
                        : null,
                    S &&
                        null != h &&
                        (0, i.jsx)(V, { width: n, channel: l, participants: t.participants, application: h }),
                    a || m ? null : (0, i.jsx)("div", { className: U.OB }),
                ],
            }),
        })
    );
}
