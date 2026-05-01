"use strict";
n.d(t, { Hp: () => _, UA: () => N, ZB: () => T, Zp: () => S, dM: () => b, eG: () => v, ik: () => R });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(17928),
    r = n(97808),
    o = n(778712),
    c = n(463930),
    u = n(834730),
    d = n(140735),
    h = n(534514),
    m = n(573435),
    p = n(73392),
    f = n(967144),
    g = n(696451),
    x = n(317525),
    C = n(287809),
    A = n(562153),
    E = n(576757),
    I = n(985018),
    y = n(352760);
function v() {
    return (0, l.jsx)("div", { className: y.kL, "aria-hidden": !0 });
}
function S(e) {
    let { children: t, selected: n, className: i, usesCardRows: a = !1 } = e;
    return (0, l.jsx)("div", { className: s()(y.kL, y.fi, { [y.wH]: n, [y._V]: a }, i), children: t });
}
function N(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: y.iY, children: t });
}
function j(e) {
    let { users: t, guildId: n, "aria-hidden": i } = e;
    return (0, l.jsx)("div", {
        className: y.wn,
        children: t.map((e, s) => {
            let a = (0, l.jsx)(r.eu, {
                src: e.getAvatarURL(n, 80),
                size: o._3.SIZE_16,
                "aria-label": i ? void 0 : e.username,
                "aria-hidden": i,
            });
            return s === t.length - 1
                ? (0, l.jsx)("div", { className: y.tr, children: a }, e.id)
                : (0, l.jsx)(
                      m.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: y.tr,
                          mask: m.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: a,
                      },
                      e.id,
                  );
        }),
    });
}
function _(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: s = 3 } = e,
        r = i.author_id,
        o = (0, a.bG)([C.default], () => C.default.getUser(r)),
        { displayParticipants: h, participant1: m, participant2: v, numOtherParticipants: S } = (0, E.A)(i, s),
        N = (0, a.bG)([g.Ay], () => g.Ay.getMember(t, r)),
        _ = (0, p.a)({ displayNameStyles: o?.displayNameStyles }),
        T = (0, a.bG)([x.A], () => (N?.colorRoleId != null ? x.A.getRole(t, N.colorRoleId)?.name : void 0), [t, N]),
        b = (0, f.gn)(t, r, N?.colorStrings ?? null);
    if (null == o) return null;
    let R = N?.colorString,
        O = A.Ay.getName(t, n, o);
    return (0, l.jsxs)("div", {
        className: y.dw,
        children: [
            (0, l.jsx)(j, { users: h, guildId: t, "aria-hidden": !0 }),
            (0, l.jsx)(c.g, {
                colorString: R ?? null,
                roleName: T,
                colorStrings: b,
                name: O,
                className: y.nT,
                displayNameStylesFont: _,
                "aria-hidden": !0,
            }),
            S > 0
                ? (0, l.jsx)("div", {
                      className: y.kx,
                      "aria-hidden": !0,
                      children: (0, l.jsxs)(u.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: y.b4,
                          children: ["+", S],
                      }),
                  })
                : null,
            (0, l.jsx)(d.A, {
                children: I.intl.format(I.t.rH95Gu, {
                    user0: A.Ay.getName(t, n, m),
                    user1: A.Ay.getName(t, n, v),
                    countOthers: S,
                    name0Hook: (e, t) => (0, l.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, l.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, l.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function T(e) {
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
