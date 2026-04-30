"use strict";
n.d(t, { Hp: () => O, UA: () => C, ZB: () => R, Zp: () => y, dM: () => b, eG: () => N, ik: () => D });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(97808),
    l = n(778712),
    u = n(463930),
    c = n(834730),
    d = n(140735),
    _ = n(534514),
    f = n(573435),
    h = n(252545),
    p = n(967144),
    E = n(696451),
    m = n(317525),
    g = n(287809),
    A = n(562153),
    I = n(576757),
    T = n(375708),
    S = n(352760);
function N() {
    return (0, i.jsx)("div", { className: S.kL, "aria-hidden": !0 });
}
function y(e) {
    let { children: t, selected: n, className: r, usesCardRows: a = !1 } = e;
    return (0, i.jsx)("div", { className: s()(S.kL, S.fi, { [S.wH]: n, [S._V]: a }, r), children: t });
}
function C(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: S.iY, children: t });
}
function v(e) {
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
                      f.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: S.tr,
                          mask: f.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: a,
                      },
                      e.id,
                  );
        }),
    });
}
function O(e) {
    let { guildId: t, channelId: n, entry: r, maxAvatars: s = 3 } = e,
        o = r.author_id,
        l = (0, a.bG)([g.default], () => g.default.getUser(o)),
        { displayParticipants: _, participant1: f, participant2: N, numOtherParticipants: y } = (0, I.A)(r, s),
        C = (0, a.bG)([E.Ay], () => E.Ay.getMember(t, o)),
        O = (0, h.a)({ displayNameStyles: l?.displayNameStyles }),
        R = (0, a.bG)([m.A], () => (C?.colorRoleId != null ? m.A.getRole(t, C.colorRoleId)?.name : void 0), [t, C]),
        b = (0, p.gn)(t, o, C?.colorStrings ?? null);
    if (null == l) return null;
    let D = C?.colorString,
        L = A.Ay.getName(t, n, l);
    return (0, i.jsxs)("div", {
        className: S.dw,
        children: [
            (0, i.jsx)(v, { users: _, guildId: t, "aria-hidden": !0 }),
            (0, i.jsx)(u.g, {
                colorString: D ?? null,
                roleName: R,
                colorStrings: b,
                name: L,
                className: S.nT,
                displayNameStylesFont: O,
                "aria-hidden": !0,
            }),
            y > 0
                ? (0, i.jsx)("div", {
                      className: S.kx,
                      "aria-hidden": !0,
                      children: (0, i.jsxs)(c.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: S.b4,
                          children: ["+", y],
                      }),
                  })
                : null,
            (0, i.jsx)(d.A, {
                children: T.intl.format(T.t.rH95Gu, {
                    user0: A.Ay.getName(t, n, f),
                    user1: A.Ay.getName(t, n, N),
                    countOthers: y,
                    name0Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function R(e) {
    let { children: t } = e;
    return (0, i.jsx)(_.D, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: S.eu,
        lineClamp: 1,
        children: t,
    });
}
function b(e) {
    let { children: t, className: n, ref: r } = e;
    return (0, i.jsx)("div", { className: s()(S.RA, n), ref: r, children: t });
}
function D() {
    return (0, i.jsx)("div", { className: S.yF });
}
