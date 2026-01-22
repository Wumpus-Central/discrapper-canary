n.d(t, {
    Hp: () => A,
    UA: () => y,
    ZB: () => v,
    Zp: () => b,
    dM: () => S,
    eG: () => E,
    ik: () => I,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(573435),
    c = n(73392),
    u = n(967144),
    d = n(696451),
    f = n(317525),
    p = n(287809),
    _ = n(562153),
    h = n(576757),
    m = n(985018),
    g = n(332225);
function E() {
    return (0, r.jsx)("div", {
        className: g.kL,
        "aria-hidden": !0,
    });
}
function b(e) {
    let { children: t, selected: n, className: i, usesCardRows: s = !1 } = e;
    return (0, r.jsx)("div", {
        className: a()(
            g.kL,
            g.fi,
            {
                [g.wH]: n,
                [g._V]: s,
            },
            i,
        ),
        children: t,
    });
}
function y(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: g.iY,
        children: t,
    });
}
function O(e) {
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
                ? (0, r.jsx)(
                      "div",
                      {
                          className: g.tr,
                          children: s,
                      },
                      e.id,
                  )
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
function A(e) {
    var t;
    let { guildId: n, channelId: i, entry: a, maxAvatars: l = 3 } = e,
        E = a.author_id,
        b = (0, s.bG)([p.default], () => p.default.getUser(E)),
        { displayParticipants: y, participant1: A, participant2: v, numOtherParticipants: S } = (0, h.A)(a, l),
        I = (0, s.bG)([d.Ay], () => d.Ay.getMember(n, E)),
        T = (0, c.a)({ displayNameStyles: null == b ? void 0 : b.displayNameStyles }),
        C = (0, s.bG)([f.A], () => {
            var e;
            return (null == I ? void 0 : I.colorRoleId) != null
                ? null == (e = f.A.getRole(n, I.colorRoleId))
                    ? void 0
                    : e.name
                : void 0;
        }, [n, I]),
        N = (0, u.gn)(n, E, null != (t = null == I ? void 0 : I.colorStrings) ? t : null);
    if (null == b) return null;
    let R = null == I ? void 0 : I.colorString,
        w = _.Ay.getName(n, i, b);
    return (0, r.jsxs)("div", {
        className: g.dw,
        children: [
            (0, r.jsx)(O, {
                users: y,
                guildId: n,
                "aria-hidden": !0,
            }),
            (0, r.jsx)(o.gyj, {
                colorString: null != R ? R : null,
                roleName: C,
                colorStrings: N,
                name: w,
                className: g.nT,
                displayNameStylesFont: T,
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
                    user0: _.Ay.getName(n, i, A),
                    user1: _.Ay.getName(n, i, v),
                    countOthers: S,
                    name0Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)("span", { children: e }, t),
                }),
            }),
        ],
    });
}
function v(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.Heading, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: g.eu,
        lineClamp: 1,
        children: t,
    });
}
function S(e) {
    let { children: t, className: n, ref: i } = e;
    return (0, r.jsx)("div", {
        className: a()(g.RA, n),
        ref: i,
        children: t,
    });
}
function I() {
    return (0, r.jsx)("div", { className: g.yF });
}
