n.d(a, { Hp: () => S, UA: () => b, ZB: () => w, Zp: () => _, dM: () => C, eG: () => k, ik: () => E });
var s = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    l = n(17928),
    t = n(97808),
    d = n(778712),
    c = n(463930),
    o = n(834730),
    u = n(140735),
    m = n(534514),
    h = n(573435),
    N = n(73392),
    x = n(967144),
    j = n(696451),
    A = n(317525),
    f = n(287809),
    g = n(562153),
    p = n(576757),
    v = n(105292),
    y = n(804779);
function k() {
    return (0, s.jsx)("div", { className: y.kL, "aria-hidden": !0 });
}
function _(e) {
    let { children: a, selected: n, className: r, usesCardRows: l = !1 } = e;
    return (0, s.jsx)("div", { className: i()(y.kL, y.fi, { [y.wH]: n, [y._V]: l }, r), children: a });
}
function b(e) {
    let { children: a } = e;
    return (0, s.jsx)("div", { className: y.iY, children: a });
}
function R(e) {
    let { users: a, guildId: n, "aria-hidden": r } = e;
    return (0, s.jsx)("div", {
        className: y.wn,
        children: a.map((e, i) => {
            let l = (0, s.jsx)(t.eu, {
                src: e.getAvatarURL(n, 80),
                size: d._3.SIZE_16,
                "aria-label": r ? void 0 : e.username,
                "aria-hidden": r,
            });
            return i === a.length - 1
                ? (0, s.jsx)("div", { className: y.tr, children: l }, e.id)
                : (0, s.jsx)(
                      h.Ay,
                      {
                          width: 16,
                          height: 16,
                          className: y.tr,
                          mask: h.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: l,
                      },
                      e.id,
                  );
        }),
    });
}
function S(e) {
    let { guildId: a, channelId: n, entry: r, maxAvatars: i = 3 } = e,
        t = r.author_id,
        d = (0, l.bG)([f.default], () => f.default.getUser(t)),
        { displayParticipants: m, participant1: h, participant2: k, numOtherParticipants: _ } = (0, p.A)(r, i),
        b = (0, l.bG)([j.Ay], () => j.Ay.getMember(a, t)),
        S = (0, N.a)({ displayNameStyles: d?.displayNameStyles }),
        w = (0, l.bG)([A.A], () => (b?.colorRoleId != null ? A.A.getRole(a, b.colorRoleId)?.name : void 0), [a, b]),
        C = (0, x.gn)(a, t, b?.colorStrings ?? null);
    if (null == d) return null;
    let E = b?.colorString,
        H = g.Ay.getName(a, n, d);
    return (0, s.jsxs)("div", {
        className: y.dw,
        children: [
            (0, s.jsx)(R, { users: m, guildId: a, "aria-hidden": !0 }),
            (0, s.jsx)(c.g, {
                colorString: E ?? null,
                roleName: w,
                colorStrings: C,
                name: H,
                className: y.nT,
                displayNameStylesFont: S,
                "aria-hidden": !0,
            }),
            _ > 0
                ? (0, s.jsx)("div", {
                      className: y.kx,
                      "aria-hidden": !0,
                      children: (0, s.jsxs)(o.E, {
                          variant: "footnote/medium",
                          color: "text-default",
                          className: y.b4,
                          children: ["+", _],
                      }),
                  })
                : null,
            (0, s.jsx)(u.A, {
                children: v.intl.format(v.t.rH95Gu, {
                    user0: g.Ay.getName(a, n, h),
                    user1: g.Ay.getName(a, n, k),
                    countOthers: _,
                    name0Hook: (e, a) => (0, s.jsx)("span", { children: e }, a),
                    name1Hook: (e, a) => (0, s.jsx)("span", { children: e }, a),
                    countOthersHook: (e, a) => (0, s.jsx)("span", { children: e }, a),
                }),
            }),
        ],
    });
}
function w(e) {
    let { children: a } = e;
    return (0, s.jsx)(m.D, {
        color: "text-default",
        variant: "heading-xs/medium",
        className: y.eu,
        lineClamp: 1,
        children: a,
    });
}
function C(e) {
    let { children: a, className: n, ref: r } = e;
    return (0, s.jsx)("div", { className: i()(y.RA, n), ref: r, children: a });
}
function E() {
    return (0, s.jsx)("div", { className: y.yF });
}
