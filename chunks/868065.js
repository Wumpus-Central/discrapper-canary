s.d(a, { Hp: () => S, UA: () => b, ZB: () => w, Zp: () => _, dM: () => C, eG: () => k, ik: () => E });
var n = s(477900);
s(582128);
var r = s(503698),
    i = s.n(r),
    l = s(17928),
    t = s(97808),
    d = s(778712),
    c = s(463930),
    u = s(834730),
    o = s(140735),
    m = s(297264),
    h = s(573435),
    x = s(73392),
    N = s(967144),
    j = s(696451),
    A = s(317525),
    g = s(287809),
    p = s(562153),
    f = s(576757),
    v = s(375708),
    y = s(804779);
function k() {
    return (0, n.jsx)("div", { className: y.kL, "aria-hidden": !0 });
}
function _(e) {
    let { children: a, selected: s, className: r, usesCardRows: l = !1 } = e;
    return (0, n.jsx)("div", { className: i()(y.kL, y.fi, { [y.wH]: s, [y._V]: l }, r), children: a });
}
function b(e) {
    let { children: a } = e;
    return (0, n.jsx)("div", { className: y.iY, children: a });
}
function R(e) {
    let { users: a, guildId: s, "aria-hidden": r } = e;
    return (0, n.jsx)("div", {
        className: y.wn,
        children: a.map((e, i) => {
            let l = (0, n.jsx)(t.eu, {
                src: e.getAvatarURL(s, 80),
                size: d._3.SIZE_16,
                "aria-label": r ? void 0 : e.username,
                "aria-hidden": r,
            });
            return i === a.length - 1
                ? (0, n.jsx)("div", { className: y.tr, children: l }, e.id)
                : (0, n.jsx)(
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
    let { guildId: a, channelId: s, entry: r, maxAvatars: i = 3 } = e,
        t = r.author_id,
        d = (0, l.bG)([g.default], () => g.default.getUser(t)),
        { displayParticipants: m, participant1: h, participant2: k, numOtherParticipants: _ } = (0, f.A)(r, i),
        b = (0, l.bG)([j.Ay], () => j.Ay.getMember(a, t)),
        S = (0, x.a)({ displayNameStyles: d?.displayNameStyles }),
        w = (0, l.bG)([A.A], () => (b?.colorRoleId != null ? A.A.getRole(a, b.colorRoleId)?.name : void 0), [a, b]),
        C = (0, N.gn)(a, t, b?.colorStrings ?? null);
    if (null == d) return null;
    let E = b?.colorString,
        H = p.Ay.getName(a, s, d);
    return (0, n.jsxs)("div", {
        className: y.dw,
        children: [
            (0, n.jsx)(R, { users: m, guildId: a, "aria-hidden": !0 }),
            (0, n.jsx)(c.g, {
                colorString: E ?? null,
                roleName: w,
                colorStrings: C,
                name: H,
                className: y.nT,
                displayNameStylesFont: S,
                "aria-hidden": !0,
            }),
            _ > 0
                ? (0, n.jsx)("div", {
                      className: y.kx,
                      "aria-hidden": !0,
                      children: (0, n.jsxs)(u.E, {
                          variant: "text-xxs/medium",
                          color: "text-default",
                          className: y.b4,
                          children: ["+", _],
                      }),
                  })
                : null,
            (0, n.jsx)(o.A, {
                children: v.intl.format(v.t.rH95Gu, {
                    user0: p.Ay.getName(a, s, h),
                    user1: p.Ay.getName(a, s, k),
                    countOthers: _,
                    name0Hook: (e, a) => (0, n.jsx)("span", { children: e }, a),
                    name1Hook: (e, a) => (0, n.jsx)("span", { children: e }, a),
                    countOthersHook: (e, a) => (0, n.jsx)("span", { children: e }, a),
                }),
            }),
        ],
    });
}
function w(e) {
    let { children: a } = e;
    return (0, n.jsx)(m.D, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: y.eu,
        lineClamp: 1,
        children: a,
    });
}
function C(e) {
    let { children: a, className: s, ref: r } = e;
    return (0, n.jsx)("div", { className: i()(y.RA, s), ref: r, children: a });
}
function E() {
    return (0, n.jsx)("div", { className: y.yF });
}
