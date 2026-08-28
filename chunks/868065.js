"use strict";
n.d(t, { Hp: () => j, UA: () => v, ZB: () => T, Zp: () => N, dM: () => b, eG: () => S, ik: () => R });
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
    E = n(562153),
    C = n(576757),
    I = n(375708),
    y = n(804779);
function S() {
    return (0, l.jsx)("div", { className: y.kL, "aria-hidden": !0 });
}
function N(e) {
    let { children: t, selected: n, className: i, usesCardRows: r = !1 } = e;
    return (0, l.jsx)("div", { className: s()(y.kL, y.fi, { [y.wH]: n, [y._V]: r }, i), children: t });
}
function v(e) {
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
function j(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: s = 3 } = e,
        a = i.author_id,
        o = (0, r.bG)([A.default], () => A.default.getUser(a)),
        { displayParticipants: h, participant1: m, participant2: S, numOtherParticipants: N } = (0, C.A)(i, s),
        v = (0, r.bG)([g.Ay], () => g.Ay.getMember(t, a)),
        j = (0, f.a)({ displayNameStyles: o?.displayNameStyles }),
        T = (0, r.bG)([x.A], () => (v?.colorRoleId != null ? x.A.getRole(t, v.colorRoleId)?.name : void 0), [t, v]),
        b = (0, p.gn)(t, a, v?.colorStrings ?? null);
    if (null == o) return null;
    let R = v?.colorString,
        O = E.Ay.getName(t, n, o);
    return (0, l.jsxs)("div", {
        className: y.dw,
        children: [
            (0, l.jsx)(_, { users: h, guildId: t, "aria-hidden": !0 }),
            (0, l.jsx)(u.g, {
                colorString: R ?? null,
                roleName: T,
                colorStrings: b,
                name: O,
                className: y.nT,
                displayNameStylesFont: j,
                "aria-hidden": !0,
            }),
            N > 0
                ? (0, l.jsx)("div", {
                      className: y.kx,
                      "aria-hidden": !0,
                      children: (0, l.jsxs)(c.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: y.b4,
                          children: ["+", N],
                      }),
                  })
                : null,
            (0, l.jsx)(d.A, {
                children: I.intl.format(I.t.rH95Gu, {
                    user0: E.Ay.getName(t, n, m),
                    user1: E.Ay.getName(t, n, S),
                    countOthers: N,
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
