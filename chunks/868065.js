"use strict";
n.d(t, { Hp: () => y, UA: () => R, ZB: () => v, Zp: () => C, dM: () => D, eG: () => N, ik: () => L });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(97808),
    l = n(778712),
    d = n(463930),
    _ = n(834730),
    u = n(140735),
    c = n(534514),
    E = n(573435),
    h = n(73392),
    m = n(967144),
    f = n(696451),
    g = n(317525),
    p = n(287809),
    A = n(562153),
    I = n(576757),
    T = n(985018),
    S = n(352760);
function N() {
    return (0, i.jsx)("div", { className: S.kL, "aria-hidden": !0 });
}
function C(e) {
    let { children: t, selected: n, className: r, usesCardRows: a = !1 } = e;
    return (0, i.jsx)("div", { className: s()(S.kL, S.fi, { [S.wH]: n, [S._V]: a }, r), children: t });
}
function R(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: S.iY, children: t });
}
function O(e) {
    let { users: t, guildId: n, "aria-hidden": r } = e;
    return (0, i.jsx)("div", {
        className: S.wn,
        children: t.map((e, s) => {
            let a = (0, i.jsx)(o.eu, {
                src: e.getAvatarURL(n, 80),
                size: l._3.SIZE_16,
                "aria-label": r ? void 0 : e.username,
                "aria-hidden": r,
            });
            return s === t.length - 1
                ? (0, i.jsx)("div", { className: S.tr, children: a }, e.id)
                : (0, i.jsx)(
                      E.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: S.tr,
                          mask: E.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: a,
                      },
                      e.id,
                  );
        }),
    });
}
function y(e) {
    let { guildId: t, channelId: n, entry: r, maxAvatars: s = 3 } = e,
        o = r.author_id,
        l = (0, a.bG)([p.default], () => p.default.getUser(o)),
        { displayParticipants: c, participant1: E, participant2: N, numOtherParticipants: C } = (0, I.A)(r, s),
        R = (0, a.bG)([f.Ay], () => f.Ay.getMember(t, o)),
        y = (0, h.a)({ displayNameStyles: l?.displayNameStyles }),
        v = (0, a.bG)([g.A], () => (R?.colorRoleId != null ? g.A.getRole(t, R.colorRoleId)?.name : void 0), [t, R]),
        D = (0, m.gn)(t, o, R?.colorStrings ?? null);
    if (null == l) return null;
    let L = R?.colorString,
        b = A.Ay.getName(t, n, l);
    return (0, i.jsxs)("div", {
        className: S.dw,
        children: [
            (0, i.jsx)(O, { users: c, guildId: t, "aria-hidden": !0 }),
            (0, i.jsx)(d.g, {
                colorString: L ?? null,
                roleName: v,
                colorStrings: D,
                name: b,
                className: S.nT,
                displayNameStylesFont: y,
                "aria-hidden": !0,
            }),
            C > 0
                ? (0, i.jsx)("div", {
                      className: S.kx,
                      "aria-hidden": !0,
                      children: (0, i.jsxs)(_.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: S.b4,
                          children: ["+", C],
                      }),
                  })
                : null,
            (0, i.jsx)(u.A, {
                children: T.intl.format(T.t.rH95Gu, {
                    user0: A.Ay.getName(t, n, E),
                    user1: A.Ay.getName(t, n, N),
                    countOthers: C,
                    name0Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function v(e) {
    let { children: t } = e;
    return (0, i.jsx)(c.D, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: S.eu,
        lineClamp: 1,
        children: t,
    });
}
function D(e) {
    let { children: t, className: n, ref: r } = e;
    return (0, i.jsx)("div", { className: s()(S.RA, n), ref: r, children: t });
}
function L() {
    return (0, i.jsx)("div", { className: S.yF });
}
