"use strict";
n.d(t, { Ay: () => V, LN: () => k });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(990078),
    d = n(778712),
    c = n(834730),
    u = n(821609),
    _ = n(212245),
    E = n(933958),
    A = n(62583),
    h = n(878549),
    I = n(969151),
    f = n(550151),
    p = n(902439),
    T = n(283488),
    m = n(732637),
    g = n(315206),
    S = n(104171),
    N = n(594007),
    C = n(227042),
    O = n(793574),
    R = n(688810),
    L = n(698141),
    D = n(429913),
    y = n(567249),
    v = n(280450),
    b = n(186111),
    M = n(287809),
    P = n(403362),
    U = n(562153),
    w = n(375708),
    G = n(301094);
let x = ["embedded_background"];
function k(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: a } = e,
        s = t ?? d._3.SIZE_32,
        l = (0, d.FT)(s);
    return (0, i.jsx)(S.Ay, {
        size: l,
        guildId: n,
        users: a,
        max: 4,
        renderUser: function (e) {
            if (null == e || e === S.mt) return null;
            let t = U.Ay.getName(n, r, e);
            return (0, i.jsx)(
                o.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, l), alt: t, className: G.my }, e.id) },
                e.id,
            );
        },
    });
}
function F(e) {
    let { participants: t, application: n, channel: a, width: o } = e,
        I = o > 400 ? 2 : +(o > 300),
        [p] = o > 400 ? [d._3.SIZE_56, 56] : o > 300 ? [d._3.SIZE_32, 32] : [d._3.SIZE_24, 24],
        T = (0, l.yK)([M.default, v.default], () =>
            Array.from(t)
                .map((e) => ((0, h.S)(e, v.default) ? null : M.default.getUser(e.userId)))
                .filter(P.Vq),
        ),
        m = (0, l.bG)([E.Ay], () =>
            E.Ay.getEmbeddedActivitiesForChannelIncludingHidden(a.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: g } = (0, R.Ay)(),
        S = (0, _.p)(),
        N = U.Ay.getName(a.getGuildId(), a.id, T?.[0]),
        C = (0, f.vG)({ userId: M.default.getCurrentUser()?.id, channelId: a.id, application: n }) === f.Gy.CAN_JOIN,
        O = a.getGuildId() ?? void 0,
        D = r.useId(),
        y = n.id,
        b = r.useMemo(() => ({ channel: a, type: "channel" }), [a]),
        { submitting: x } = (0, L.A)({ applicationId: y, context: b, launchingComponentId: D });
    return (0, i.jsxs)("div", {
        className: G.Yi,
        children: [
            (0, i.jsx)(k, { avatarSize: p, guildId: O, channelId: a.id, users: T }),
            (0, i.jsx)(c.E, {
                className: s()(G.m_, { [G.EX]: 0 === I, [G.Y]: 1 === I }),
                variant: "text-sm/normal",
                children:
                    T.length > 1
                        ? w.intl.formatToPlainString(w.t.cpe6CK, { username: N, count: T.length - 1 })
                        : w.intl.formatToPlainString(w.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(c.E, {
                className: s()(G.wx, { [G.EX]: 0 === I, [G.Y]: 1 === I }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: G.Uo,
                children: C
                    ? (0, i.jsx)(u.$, {
                          text: w.intl.string(w.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != m &&
                                      (0, A.A)({
                                          applicationId: m.applicationId,
                                          activityChannelId: a.id,
                                          locationObject: S.location,
                                          analyticsLocations: g,
                                          componentId: D,
                                      });
                          },
                          loading: x,
                          size: 2 === I ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function V(e) {
    let { participant: t, width: n, selected: a, interactible: s, channel: o } = e,
        { analyticsLocations: d } = (0, R.Ay)(O.A.ACTIVITY_TILE),
        { applicationId: c } = t,
        u = (0, p.A)(),
        _ = null != u && (0, I.H)(u.location) === o.id && u.applicationId === c,
        [E] = (0, D.A)([c]),
        { url: A } = (0, T.A)({ applicationId: c, names: x, size: 1024 }),
        h = !a && _,
        f = !_,
        S = !_ && !a,
        L = (0, l.bG)([b.A, y.A], () => (0, C.A)({ LayerStore: b.A, PopoutWindowStore: y.A }));
    return (
        r.useEffect(() => {
            if (h && null != u && !L) {
                let e = (0, N.A)(u.location.id, u.applicationId);
                (0, g.cK)(e);
            }
        }, [h, u, L]),
        (0, i.jsx)(R.f5, {
            value: d,
            children: (0, i.jsxs)("div", {
                className: G.kL,
                children: [
                    h && null != u && (0, i.jsx)(m.A, { className: G.pU, embedId: (0, N.A)(u.location.id, c) }),
                    f && null != E && null != A && "" !== A
                        ? (0, i.jsx)("img", { className: G.j0, alt: E.name, src: A })
                        : null,
                    S &&
                        null != E &&
                        (0, i.jsx)(F, { width: n, channel: o, participants: t.participants, application: E }),
                    s || f ? null : (0, i.jsx)("div", { className: G.OB }),
                ],
            }),
        })
    );
}
