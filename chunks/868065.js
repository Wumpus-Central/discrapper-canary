"use strict";
n.d(t, { Hp: () => N, UA: () => S, ZB: () => T, Zp: () => y, dM: () => j, eG: () => v, ik: () => R });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(97808),
    o = n(778712),
    c = n(463930),
    u = n(834730),
    d = n(140735),
    h = n(534514),
    m = n(573435),
    p = n(73392),
    f = n(967144),
    g = n(696451),
    _ = n(317525),
    x = n(287809),
    A = n(562153),
    C = n(576757),
    E = n(985018),
    I = n(352760);
function v() {
    return (0, i.jsx)("div", { className: I.kL, "aria-hidden": !0 });
}
function y(e) {
    let { children: t, selected: n, className: l, usesCardRows: r = !1 } = e;
    return (0, i.jsx)("div", { className: s()(I.kL, I.fi, { [I.wH]: n, [I._V]: r }, l), children: t });
}
function S(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: I.iY, children: t });
}
function b(e) {
    let { users: t, guildId: n, "aria-hidden": l } = e;
    return (0, i.jsx)("div", {
        className: I.wn,
        children: t.map((e, s) => {
            let r = (0, i.jsx)(a.eu, {
                src: e.getAvatarURL(n, 80),
                size: o._3.SIZE_16,
                "aria-label": l ? void 0 : e.username,
                "aria-hidden": l,
            });
            return s === t.length - 1
                ? (0, i.jsx)("div", { className: I.tr, children: r }, e.id)
                : (0, i.jsx)(
                      m.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: I.tr,
                          mask: m.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: r,
                      },
                      e.id,
                  );
        }),
    });
}
function N(e) {
    let { guildId: t, channelId: n, entry: l, maxAvatars: s = 3 } = e,
        a = l.author_id,
        o = (0, r.bG)([x.default], () => x.default.getUser(a)),
        { displayParticipants: h, participant1: m, participant2: v, numOtherParticipants: y } = (0, C.A)(l, s),
        S = (0, r.bG)([g.Ay], () => g.Ay.getMember(t, a)),
        N = (0, p.a)({ displayNameStyles: o?.displayNameStyles }),
        T = (0, r.bG)([_.A], () => (S?.colorRoleId != null ? _.A.getRole(t, S.colorRoleId)?.name : void 0), [t, S]),
        j = (0, f.gn)(t, a, S?.colorStrings ?? null);
    if (null == o) return null;
    let R = S?.colorString,
        w = A.Ay.getName(t, n, o);
    return (0, i.jsxs)("div", {
        className: I.dw,
        children: [
            (0, i.jsx)(b, { users: h, guildId: t, "aria-hidden": !0 }),
            (0, i.jsx)(c.g, {
                colorString: R ?? null,
                roleName: T,
                colorStrings: j,
                name: w,
                className: I.nT,
                displayNameStylesFont: N,
                "aria-hidden": !0,
            }),
            y > 0
                ? (0, i.jsx)("div", {
                      className: I.kx,
                      "aria-hidden": !0,
                      children: (0, i.jsxs)(u.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: I.b4,
                          children: ["+", y],
                      }),
                  })
                : null,
            (0, i.jsx)(d.A, {
                children: E.intl.format(E.t.rH95Gu, {
                    user0: A.Ay.getName(t, n, m),
                    user1: A.Ay.getName(t, n, v),
                    countOthers: y,
                    name0Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function T(e) {
    let { children: t } = e;
    return (0, i.jsx)(h.D, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: I.eu,
        lineClamp: 1,
        children: t,
    });
}
function j(e) {
    let { children: t, className: n, ref: l } = e;
    return (0, i.jsx)("div", { className: s()(I.RA, n), ref: l, children: t });
}
function R() {
    return (0, i.jsx)("div", { className: I.yF });
}
