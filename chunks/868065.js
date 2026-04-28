"use strict";
n.d(t, { Hp: () => N, UA: () => b, ZB: () => j, Zp: () => y, dM: () => T, eG: () => v, ik: () => w });
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
    _ = n(317525),
    x = n(287809),
    C = n(562153),
    A = n(576757),
    E = n(985018),
    I = n(352760);
function v() {
    return (0, l.jsx)("div", { className: I.kL, "aria-hidden": !0 });
}
function y(e) {
    let { children: t, selected: n, className: i, usesCardRows: a = !1 } = e;
    return (0, l.jsx)("div", { className: s()(I.kL, I.fi, { [I.wH]: n, [I._V]: a }, i), children: t });
}
function b(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: I.iY, children: t });
}
function S(e) {
    let { users: t, guildId: n, "aria-hidden": i } = e;
    return (0, l.jsx)("div", {
        className: I.wn,
        children: t.map((e, s) => {
            let a = (0, l.jsx)(r.eu, {
                src: e.getAvatarURL(n, 80),
                size: o._3.SIZE_16,
                "aria-label": i ? void 0 : e.username,
                "aria-hidden": i,
            });
            return s === t.length - 1
                ? (0, l.jsx)("div", { className: I.tr, children: a }, e.id)
                : (0, l.jsx)(
                      m.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: I.tr,
                          mask: m.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: a,
                      },
                      e.id,
                  );
        }),
    });
}
function N(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: s = 3 } = e,
        r = i.author_id,
        o = (0, a.bG)([x.default], () => x.default.getUser(r)),
        { displayParticipants: h, participant1: m, participant2: v, numOtherParticipants: y } = (0, A.A)(i, s),
        b = (0, a.bG)([g.Ay], () => g.Ay.getMember(t, r)),
        N = (0, p.a)({ displayNameStyles: o?.displayNameStyles }),
        j = (0, a.bG)([_.A], () => (b?.colorRoleId != null ? _.A.getRole(t, b.colorRoleId)?.name : void 0), [t, b]),
        T = (0, f.gn)(t, r, b?.colorStrings ?? null);
    if (null == o) return null;
    let w = b?.colorString,
        R = C.Ay.getName(t, n, o);
    return (0, l.jsxs)("div", {
        className: I.dw,
        children: [
            (0, l.jsx)(S, { users: h, guildId: t, "aria-hidden": !0 }),
            (0, l.jsx)(c.g, {
                colorString: w ?? null,
                roleName: j,
                colorStrings: T,
                name: R,
                className: I.nT,
                displayNameStylesFont: N,
                "aria-hidden": !0,
            }),
            y > 0
                ? (0, l.jsx)("div", {
                      className: I.kx,
                      "aria-hidden": !0,
                      children: (0, l.jsxs)(u.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: I.b4,
                          children: ["+", y],
                      }),
                  })
                : null,
            (0, l.jsx)(d.A, {
                children: E.intl.format(E.t.rH95Gu, {
                    user0: C.Ay.getName(t, n, m),
                    user1: C.Ay.getName(t, n, v),
                    countOthers: y,
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
        className: I.eu,
        lineClamp: 1,
        children: t,
    });
}
function T(e) {
    let { children: t, className: n, ref: i } = e;
    return (0, l.jsx)("div", { className: s()(I.RA, n), ref: i, children: t });
}
function w() {
    return (0, l.jsx)("div", { className: I.yF });
}
