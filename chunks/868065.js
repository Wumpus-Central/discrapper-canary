"use strict";
n.d(t, { Hp: () => T, UA: () => N, ZB: () => j, Zp: () => S, dM: () => b, eG: () => v, ik: () => R });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(17928),
    a = n(97808),
    o = n(778712),
    u = n(463930),
    c = n(834730),
    d = n(140735),
    h = n(297264),
    m = n(573435),
    f = n(73392),
    p = n(967144),
    g = n(696451),
    x = n(317525),
    A = n(287809),
    C = n(562153),
    E = n(576757),
    I = n(375708),
    y = n(804779);
function v() {
    return (0, l.jsx)("div", { className: y.kL, "aria-hidden": !0 });
}
function S(e) {
    let { children: t, selected: n, className: i, usesCardRows: r = !1 } = e;
    return (0, l.jsx)("div", { className: s()(y.kL, y.fi, { [y.wH]: n, [y._V]: r }, i), children: t });
}
function N(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: y.iY, children: t });
}
function _(e) {
    let { users: t, guildId: n, "aria-hidden": i } = e;
    return (0, l.jsx)("div", {
        className: y.wn,
        children: t.map((e, s) => {
            let r = (0, l.jsx)(a.eu, {
                src: e.getAvatarURL(n, 80),
                size: o._3.SIZE_16,
                "aria-label": i ? void 0 : e.username,
                "aria-hidden": i,
            });
            return s === t.length - 1
                ? (0, l.jsx)("div", { className: y.tr, children: r }, e.id)
                : (0, l.jsx)(
                      m.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: y.tr,
                          mask: m.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: r,
                      },
                      e.id,
                  );
        }),
    });
}
function T(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: s = 3 } = e,
        a = i.author_id,
        o = (0, r.bG)([A.default], () => A.default.getUser(a)),
        { displayParticipants: h, participant1: m, participant2: v, numOtherParticipants: S } = (0, E.A)(i, s),
        N = (0, r.bG)([g.Ay], () => g.Ay.getMember(t, a)),
        T = (0, f.a)({ displayNameStyles: o?.displayNameStyles }),
        j = (0, r.bG)([x.A], () => (N?.colorRoleId != null ? x.A.getRole(t, N.colorRoleId)?.name : void 0), [t, N]),
        b = (0, p.gn)(t, a, N?.colorStrings ?? null);
    if (null == o) return null;
    let R = N?.colorString,
        M = C.Ay.getName(t, n, o);
    return (0, l.jsxs)("div", {
        className: y.dw,
        children: [
            (0, l.jsx)(_, { users: h, guildId: t, "aria-hidden": !0 }),
            (0, l.jsx)(u.g, {
                colorString: R ?? null,
                roleName: j,
                colorStrings: b,
                name: M,
                className: y.nT,
                displayNameStylesFont: T,
                "aria-hidden": !0,
            }),
            S > 0
                ? (0, l.jsx)("div", {
                      className: y.kx,
                      "aria-hidden": !0,
                      children: (0, l.jsxs)(c.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: y.b4,
                          children: ["+", S],
                      }),
                  })
                : null,
            (0, l.jsx)(d.A, {
                children: I.intl.format(I.t.rH95Gu, {
                    user0: C.Ay.getName(t, n, m),
                    user1: C.Ay.getName(t, n, v),
                    countOthers: S,
                    name0Hook: (e, t) => (0, l.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, l.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, l.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function j(e) {
    let { children: t } = e;
    return (0, l.jsx)(h.D, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: y.eu,
        lineClamp: 1,
        children: t,
    });
}
function b(e) {
    let { children: t, className: n, ref: i } = e;
    return (0, l.jsx)("div", { className: s()(y.RA, n), ref: i, children: t });
}
function R() {
    return (0, l.jsx)("div", { className: y.yF });
}
