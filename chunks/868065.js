"use strict";
n.d(t, { Hp: () => L, UA: () => O, ZB: () => y, Zp: () => C, dM: () => D, eG: () => N, ik: () => v });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(97808),
    o = n(778712),
    d = n(463930),
    c = n(834730),
    u = n(140735),
    _ = n(297264),
    E = n(573435),
    A = n(73392),
    h = n(967144),
    I = n(696451),
    f = n(317525),
    p = n(287809),
    T = n(562153),
    m = n(576757),
    g = n(375708),
    S = n(685504);
function N() {
    return (0, i.jsx)("div", { className: S.kL, "aria-hidden": !0 });
}
function C(e) {
    let { children: t, selected: n, className: r, usesCardRows: s = !1 } = e;
    return (0, i.jsx)("div", { className: a()(S.kL, S.fi, { [S.wH]: n, [S._V]: s }, r), children: t });
}
function O(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: S.iY, children: t });
}
function R(e) {
    let { users: t, guildId: n, "aria-hidden": r } = e;
    return (0, i.jsx)("div", {
        className: S.wn,
        children: t.map((e, a) => {
            let s = (0, i.jsx)(l.eu, {
                src: e.getAvatarURL(n, 80),
                size: o._3.SIZE_16,
                "aria-label": r ? void 0 : e.username,
                "aria-hidden": r,
            });
            return a === t.length - 1
                ? (0, i.jsx)("div", { className: S.tr, children: s }, e.id)
                : (0, i.jsx)(
                      E.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: S.tr,
                          mask: E.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: s,
                      },
                      e.id,
                  );
        }),
    });
}
function L(e) {
    let { guildId: t, channelId: n, entry: r, maxAvatars: a = 3 } = e,
        l = r.author_id,
        o = (0, s.bG)([p.default], () => p.default.getUser(l)),
        { displayParticipants: _, participant1: E, participant2: N, numOtherParticipants: C } = (0, m.A)(r, a),
        O = (0, s.bG)([I.Ay], () => I.Ay.getMember(t, l)),
        L = (0, A.a)({ displayNameStyles: o?.displayNameStyles }),
        y = (0, s.bG)([f.A], () => (O?.colorRoleId != null ? f.A.getRole(t, O.colorRoleId)?.name : void 0), [t, O]),
        D = (0, h.gn)(t, l, O?.colorStrings ?? null);
    if (null == o) return null;
    let v = O?.colorString,
        b = T.Ay.getName(t, n, o);
    return (0, i.jsxs)("div", {
        className: S.dw,
        children: [
            (0, i.jsx)(R, { users: _, guildId: t, "aria-hidden": !0 }),
            (0, i.jsx)(d.g, {
                colorString: v ?? null,
                roleName: y,
                colorStrings: D,
                name: b,
                className: S.nT,
                displayNameStylesFont: L,
                "aria-hidden": !0,
            }),
            C > 0
                ? (0, i.jsx)("div", {
                      className: S.kx,
                      "aria-hidden": !0,
                      children: (0, i.jsxs)(c.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: S.b4,
                          children: ["+", C],
                      }),
                  })
                : null,
            (0, i.jsx)(u.A, {
                children: g.intl.format(g.t.rH95Gu, {
                    user0: T.Ay.getName(t, n, E),
                    user1: T.Ay.getName(t, n, N),
                    countOthers: C,
                    name0Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, i.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function y(e) {
    let { children: t } = e;
    return (0, i.jsx)(_.D, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: S.eu,
        lineClamp: 1,
        children: t,
    });
}
function D(e) {
    let { children: t, className: n, ref: r } = e;
    return (0, i.jsx)("div", { className: a()(S.RA, n), ref: r, children: t });
}
function v() {
    return (0, i.jsx)("div", { className: S.yF });
}
