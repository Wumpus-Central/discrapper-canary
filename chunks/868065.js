"use strict";
n.d(t, { Hp: () => y, UA: () => I, ZB: () => S, Zp: () => A, dM: () => v, eG: () => E, ik: () => C });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(573435),
    u = n(73392),
    c = n(967144),
    d = n(696451),
    _ = n(317525),
    f = n(287809),
    p = n(562153),
    h = n(576757),
    m = n(985018),
    g = n(332225);
function E() {
    return (0, r.jsx)("div", { className: g.kL, "aria-hidden": !0 });
}
function A(e) {
    let { children: t, selected: n, className: i, usesCardRows: s = !1 } = e;
    return (0, r.jsx)("div", { className: a()(g.kL, g.fi, { [g.wH]: n, [g._V]: s }, i), children: t });
}
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: g.iY, children: t });
}
function T(e) {
    let { users: t, guildId: n, "aria-hidden": i } = e;
    return (0, r.jsx)("div", {
        className: g.wn,
        children: t.map((e, a) => {
            let s = (0, r.jsx)(o.euF, {
                src: e.getAvatarURL(n, 80),
                size: o._3J.SIZE_16,
                "aria-label": i ? void 0 : e.username,
                "aria-hidden": i,
            });
            return a === t.length - 1
                ? (0, r.jsx)("div", { className: g.tr, children: s }, e.id)
                : (0, r.jsx)(
                      l.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: g.tr,
                          mask: l.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: s,
                      },
                      e.id,
                  );
        }),
    });
}
function y(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: a = 3 } = e,
        l = i.author_id,
        E = (0, s.bG)([f.default], () => f.default.getUser(l)),
        { displayParticipants: A, participant1: I, participant2: y, numOtherParticipants: S } = (0, h.A)(i, a),
        v = (0, s.bG)([d.Ay], () => d.Ay.getMember(t, l)),
        C = (0, u.a)({ displayNameStyles: E?.displayNameStyles }),
        b = (0, s.bG)([_.A], () => (v?.colorRoleId != null ? _.A.getRole(t, v.colorRoleId)?.name : void 0), [t, v]),
        N = (0, c.gn)(t, l, v?.colorStrings ?? null);
    if (null == E) return null;
    let R = v?.colorString,
        O = p.Ay.getName(t, n, E);
    return (0, r.jsxs)("div", {
        className: g.dw,
        children: [
            (0, r.jsx)(T, { users: A, guildId: t, "aria-hidden": !0 }),
            (0, r.jsx)(o.gyj, {
                colorString: R ?? null,
                roleName: b,
                colorStrings: N,
                name: O,
                className: g.nT,
                displayNameStylesFont: C,
                "aria-hidden": !0,
            }),
            S > 0
                ? (0, r.jsx)("div", {
                      className: g.kx,
                      "aria-hidden": !0,
                      children: (0, r.jsxs)(o.Text, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: g.b4,
                          children: ["+", S],
                      }),
                  })
                : null,
            (0, r.jsx)(o.AC4, {
                children: m.intl.format(m.t.rH95Gu, {
                    user0: p.Ay.getName(t, n, I),
                    user1: p.Ay.getName(t, n, y),
                    countOthers: S,
                    name0Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function S(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.Heading, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: g.eu,
        lineClamp: 1,
        children: t,
    });
}
function v(e) {
    let { children: t, className: n, ref: i } = e;
    return (0, r.jsx)("div", { className: a()(g.RA, n), ref: i, children: t });
}
function C() {
    return (0, r.jsx)("div", { className: g.yF });
}
