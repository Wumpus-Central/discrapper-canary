"use strict";
n.d(t, { Hp: () => O, UA: () => v, ZB: () => R, Zp: () => N, dM: () => b, eG: () => y, ik: () => D });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(97808),
    l = n(778712),
    u = n(463930),
    c = n(834730),
    d = n(140735),
    _ = n(534514),
    f = n(573435),
    p = n(73392),
    h = n(967144),
    E = n(696451),
    m = n(317525),
    g = n(287809),
    A = n(562153),
    I = n(576757),
    T = n(985018),
    S = n(352760);
function y() {
    return (0, r.jsx)("div", { className: S.kL, "aria-hidden": !0 });
}
function N(e) {
    let { children: t, selected: n, className: i, usesCardRows: a = !1 } = e;
    return (0, r.jsx)("div", { className: s()(S.kL, S.fi, { [S.wH]: n, [S._V]: a }, i), children: t });
}
function v(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: S.iY, children: t });
}
function C(e) {
    let { users: t, guildId: n, "aria-hidden": i } = e;
    return (0, r.jsx)("div", {
        className: S.wn,
        children: t.map((e, s) => {
            let a = (0, r.jsx)(o.eu, {
                src: e.getAvatarURL(n, 80),
                size: l._3.SIZE_16,
                "aria-label": i ? void 0 : e.username,
                "aria-hidden": i,
            });
            return s === t.length - 1
                ? (0, r.jsx)("div", { className: S.tr, children: a }, e.id)
                : (0, r.jsx)(
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
    let { guildId: t, channelId: n, entry: i, maxAvatars: s = 3 } = e,
        o = i.author_id,
        l = (0, a.bG)([g.default], () => g.default.getUser(o)),
        { displayParticipants: _, participant1: f, participant2: y, numOtherParticipants: N } = (0, I.A)(i, s),
        v = (0, a.bG)([E.Ay], () => E.Ay.getMember(t, o)),
        O = (0, p.a)({ displayNameStyles: l?.displayNameStyles }),
        R = (0, a.bG)([m.A], () => (v?.colorRoleId != null ? m.A.getRole(t, v.colorRoleId)?.name : void 0), [t, v]),
        b = (0, h.gn)(t, o, v?.colorStrings ?? null);
    if (null == l) return null;
    let D = v?.colorString,
        L = A.Ay.getName(t, n, l);
    return (0, r.jsxs)("div", {
        className: S.dw,
        children: [
            (0, r.jsx)(C, { users: _, guildId: t, "aria-hidden": !0 }),
            (0, r.jsx)(u.g, {
                colorString: D ?? null,
                roleName: R,
                colorStrings: b,
                name: L,
                className: S.nT,
                displayNameStylesFont: O,
                "aria-hidden": !0,
            }),
            N > 0
                ? (0, r.jsx)("div", {
                      className: S.kx,
                      "aria-hidden": !0,
                      children: (0, r.jsxs)(c.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: S.b4,
                          children: ["+", N],
                      }),
                  })
                : null,
            (0, r.jsx)(d.A, {
                children: T.intl.format(T.t.rH95Gu, {
                    user0: A.Ay.getName(t, n, f),
                    user1: A.Ay.getName(t, n, y),
                    countOthers: N,
                    name0Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function R(e) {
    let { children: t } = e;
    return (0, r.jsx)(_.D, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: S.eu,
        lineClamp: 1,
        children: t,
    });
}
function b(e) {
    let { children: t, className: n, ref: i } = e;
    return (0, r.jsx)("div", { className: s()(S.RA, n), ref: i, children: t });
}
function D() {
    return (0, r.jsx)("div", { className: S.yF });
}
