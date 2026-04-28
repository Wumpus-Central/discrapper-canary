s.d(t, { A: () => G, X: () => y });
var l = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    r = s(17928),
    c = s(990078),
    d = s(534514),
    m = s(939249),
    o = s(834730),
    u = s(986268),
    x = s(345942),
    h = s(773669),
    v = s(495544),
    j = s(696451),
    N = s(860689),
    g = s(935208),
    f = s(107123),
    p = s(985018),
    A = s(73045);
function b(e) {
    let { profile: t, disableGuildNameClick: s } = e,
        i = t.id,
        n = (0, r.bG)([j.Ay, v.default], () => j.Ay.getMember(i, v.default.getId())?.joinedAt != null, [i]),
        o = a.useCallback(
            (e) => {
                n && (e.stopPropagation(), (0, x.u)(t.id));
            },
            [n, t.id],
        );
    return !n || s
        ? (0, l.jsx)(c.m, {
              text: t.name,
              overflowOnly: !0,
              children: (0, l.jsx)(d.D, {
                  className: A.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, l.jsx)(m.D, {
              className: A.YS,
              onClick: o,
              children: (0, l.jsx)(c.m, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, l.jsx)(d.D, {
                      className: A.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function y(e) {
    let { onlineCount: t, memberCount: s, className: a, highContrast: i = !1 } = e;
    return (0, l.jsxs)("div", {
        className: n()(A.ol, a),
        children: [
            (0, l.jsxs)("div", {
                className: A.Kl,
                children: [
                    (0, l.jsx)("div", { className: A.JX }),
                    (0, l.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: i ? "text-default" : "text-subtle",
                        children: p.intl.format(p.t["LC+S+m"], { membersOnline: t }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: A.Kl,
                children: [
                    (0, l.jsx)("div", { className: n()(A.Om, i && A.i7) }),
                    (0, l.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: i ? "text-default" : "text-subtle",
                        children: p.intl.format(p.t.zRl6XR, { count: s }),
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { profile: t, disableGuildNameClick: s } = e,
        i = (0, r.bG)([h.default], () => h.default.locale),
        n = (0, f.P)(g.default.extractTimestamp(t.id), i),
        c = a.useMemo(() => {
            let e = (0, N.b9)(t);
            return (0, l.jsx)(u.A, { guild: e, isBannerVisible: !1 });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: A.wx,
        children: [
            (0, l.jsxs)("div", {
                className: A.VW,
                children: [(0, l.jsx)(b, { profile: t, disableGuildNameClick: s }), c],
            }),
            (0, l.jsx)(y, { onlineCount: t.onlineCount, memberCount: t.memberCount }),
            (0, l.jsx)("div", {
                className: A.b5,
                children: (0, l.jsx)(o.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: p.intl.format(p.t.zb2Q56, { createdAtDate: n }),
                }),
            }),
        ],
    });
}
